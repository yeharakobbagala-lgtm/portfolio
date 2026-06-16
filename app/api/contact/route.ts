import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // 1. Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // 2. Validate API Key
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is missing in env configurations.");
      return NextResponse.json(
        { error: "Email service configuration is missing. Please set RESEND_API_KEY." },
        { status: 500 }
      );
    }

    // 3. Dispatch POST to Resend REST API
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Form <onboarding@resend.dev>",
        to: "yehara.kobbagala@gmail.com",
        subject: subject || `Portfolio Contact: Message from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
            <h2 style="color: #7c3aed; margin-top: 0;">New Contact Form Message</h2>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject || "No Subject"}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; border: 1px solid #f1f5f9; white-space: pre-wrap; font-family: monospace;">${message}</div>
          </div>
        `,
      }),
    });

    // 4. Handle API Response
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend API Error details:", errorData);
      return NextResponse.json(
        { error: "Failed to dispatch email. Resend service rejected the request." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Serverless route execution failure:", error);
    return NextResponse.json(
      { error: "An unexpected internal server error occurred while sending your message." },
      { status: 500 }
    );
  }
}
