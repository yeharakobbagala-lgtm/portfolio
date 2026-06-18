const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
}

export type ContactValidationResult =
  | { ok: true; data: Omit<ContactPayload, "website"> }
  | { ok: false; error: string };

export function validateContactPayload(body: unknown): ContactValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const { name, email, subject, message, website } = body as Record<string, unknown>;

  if (typeof website === "string" && website.trim().length > 0) {
    return { ok: false, error: "Unable to process request." };
  }

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return { ok: false, error: "Name, email, and message are required fields." };
  }

  const trimmedName = name.trim();
  const trimmedEmail = email.trim().toLowerCase();
  const trimmedMessage = message.trim();
  const trimmedSubject =
    typeof subject === "string" && subject.trim().length > 0
      ? subject.trim()
      : `Portfolio Contact: Message from ${trimmedName}`;

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return { ok: false, error: "Name, email, and message are required fields." };
  }

  if (trimmedName.length > 100) {
    return { ok: false, error: "Name must be 100 characters or fewer." };
  }

  if (trimmedEmail.length > 254 || !EMAIL_PATTERN.test(trimmedEmail)) {
    return { ok: false, error: "Please provide a valid email address." };
  }

  if (trimmedMessage.length > 5000) {
    return { ok: false, error: "Message must be 5000 characters or fewer." };
  }

  if (trimmedSubject.length > 200) {
    return { ok: false, error: "Subject must be 200 characters or fewer." };
  }

  return {
    ok: true,
    data: {
      name: trimmedName,
      email: trimmedEmail,
      subject: trimmedSubject,
      message: trimmedMessage,
    },
  };
}
