"use client";

import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

interface ContactFormProps {
  onSuccess?: () => void;
  onBack?: () => void;
}

const inputClassName =
  "w-full px-3 py-2 bg-bg-space/50 border border-white/10 rounded-lg text-white placeholder:text-subtle focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple/30 transition-interactive disabled:opacity-50 text-sm";

export default function ContactForm({ onSuccess, onBack }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact: Message from ${formData.name}`,
          message: formData.message,
          website: formData.website,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", website: "" });
      } else {
        setStatus("idle");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("idle");
      setErrorMessage("Could not connect to the mail server.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center space-y-3 py-4 animate-fade-in">
        <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
          <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white mb-1">Message Sent!</h4>
          <p className="text-body text-xs max-w-[220px] mx-auto">
            Thanks! I will check your message and email you back soon.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            onSuccess?.();
          }}
          className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-body hover:text-white transition-interactive"
        >
          Back to Passport
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="space-y-1">
        <label htmlFor="card-name" className="text-[10px] font-bold text-muted uppercase tracking-wider block">
          Full Name
        </label>
        <input
          type="text"
          id="card-name"
          name="name"
          required
          maxLength={100}
          value={formData.name}
          onChange={handleChange}
          disabled={status === "submitting"}
          className={inputClassName}
          placeholder="John Doe"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="card-email" className="text-[10px] font-bold text-muted uppercase tracking-wider block">
          Email Address
        </label>
        <input
          type="email"
          id="card-email"
          name="email"
          required
          maxLength={254}
          value={formData.email}
          onChange={handleChange}
          disabled={status === "submitting"}
          className={inputClassName}
          placeholder="john@example.com"
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="card-message" className="text-[10px] font-bold text-muted uppercase tracking-wider block">
          Message
        </label>
        <textarea
          id="card-message"
          name="message"
          required
          rows={3}
          maxLength={5000}
          value={formData.message}
          onChange={handleChange}
          disabled={status === "submitting"}
          className={`${inputClassName} resize-none min-h-[72px]`}
          placeholder="Your message details..."
        />
      </div>

      {errorMessage && (
        <div className="px-3 py-1.5 bg-red-500/10 border border-red-500/20 text-red-300 rounded-lg text-[11px] font-mono">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-gradient-to-r from-brand-violet to-brand-purple text-white text-sm font-semibold rounded-lg hover:opacity-95 active:scale-[0.98] transition-interactive disabled:opacity-60 disabled:pointer-events-none"
      >
        {status === "submitting" ? (
          <>
            <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Send Message</span>
          </>
        )}
      </button>

      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="w-full px-3 py-1 text-xs font-mono text-muted hover:text-white transition-interactive"
        >
          ← Back to Bio
        </button>
      )}
    </form>
  );
}
