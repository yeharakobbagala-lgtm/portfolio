import { NextResponse } from "next/server";
import { validateContactPayload } from "@/lib/contact-validation";
import { escapeHtml } from "@/lib/escape-html";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;

function buildContactEmailHtml(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): string {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = escapeHtml(data.message);

  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
      <h2 style="color: #7c3aed; margin-top: 0;">New Contact Form Message</h2>
      <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <p><strong>Subject:</strong> ${safeSubject}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; border: 1px solid #f1f5f9; white-space: pre-wrap; font-family: monospace;">${safeMessage}</div>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const clientIp = getClientIp(request);
    const rateLimit = checkRateLimit(`contact:${clientIp}`, RATE_LIMIT, RATE_WINDOW_MS);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
        }
      );
    }

    const body = await request.json();
    const validation = validateContactPayload(body);

    if (!validation.ok) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const fromEmail = process.env.RESEND_FROM_EMAIL ?? "Portfolio Form <onboarding@resend.dev>";

    if (!resendApiKey || !contactEmail) {
      console.error("Missing email service configuration.");
      return NextResponse.json(
        { error: "Email service is temporarily unavailable." },
        { status: 503 }
      );
    }

    const { name, email, subject, message } = validation.data;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: contactEmail,
        reply_to: email,
        subject,
        html: buildContactEmailHtml({ name, email, subject, message }),
      }),
    });

    if (!response.ok) {
      console.error("Resend API rejected the request:", response.status);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact route failure:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while sending your message." },
      { status: 500 }
    );
  }
}
