"use client";

import React, { useState, useEffect } from "react";
import { Award, Code, Lightbulb, GraduationCap, Cpu, Mail, Send, CheckCircle2, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const principles = [
  {
    icon: Code,
    title: "Software Craftsmanship",
    desc: "Clean, maintainable, and well-documented code that scales.",
  },
  {
    icon: Lightbulb,
    title: "Solution-Oriented",
    desc: "Bridging theoretical concepts and real-world execution.",
  },
  {
    icon: Award,
    title: "Continuous Growth",
    desc: "Constantly acquiring expertise in modern framework stacks.",
  },
];

const socialLinks = [
  {
    name: "Email",
    href: "mailto:yehara.kobbagala@gmail.com",
    icon: Mail,
    color: "hover:text-brand-purple hover:bg-brand-purple/10"
  },
  {
    name: "GitHub",
    href: "https://github.com/yeharakobbagala-lgtm",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    color: "hover:text-brand-violet hover:bg-brand-violet/10"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yeharakobbagala/",
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    color: "hover:text-brand-lavender hover:bg-brand-lavender/10"
  }
];

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleContactFlip = () => {
      setIsFlipped(true);
    };
    const handleAboutReset = () => {
      setIsFlipped(false);
    };

    window.addEventListener("trigger-contact-flip", handleContactFlip);
    window.addEventListener("trigger-about-reset", handleAboutReset);

    // Initial check in case window hash matches contact
    if (window.location.hash === "#contact") {
      setIsFlipped(true);
    }

    return () => {
      window.removeEventListener("trigger-contact-flip", handleContactFlip);
      window.removeEventListener("trigger-about-reset", handleAboutReset);
    };
  }, []);

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact: Message from ${formData.name}`,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("idle");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("idle");
      setErrorMessage("Could not connect to the mail server.");
    }
  };

  return (
    <section id="about" className="py-14 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute right-10 top-1/3 w-[300px] h-[300px] rounded-full bg-brand-violet/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-10">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-purple mb-1">
              Introduction
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              About Me
            </h3>
            <div className="w-10 h-1 bg-gradient-to-r from-brand-violet to-brand-purple mx-auto mt-3 rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left bio column */}
          <div className="lg:col-span-7 space-y-5">
            <ScrollReveal direction="right" delay={100}>
              <h4 className="text-xl font-bold text-white mb-3 leading-snug">
                Bridging theory and execution to build impact-driven solutions.
              </h4>
              <p className="text-gray-400 leading-relaxed text-base mb-4">
                As a second-year Computer Science undergraduate at{" "}
                <span className="text-white font-medium">IIT Sri Lanka (affiliated with the University of Westminster)</span>
                , I specialize in full-stack development, backend architectures, and smart AI integrations. 
                I focus on solving real-world challenges through robust backend logic and fluid frontend user interfaces.
              </p>
              <p className="text-gray-400 leading-relaxed text-base mb-4">
                I enjoy engineering modular software architectures, optimizing database configurations, and setting up automated 
                intelligence flows. My approach blends academic rigour with pragmatic industry practices.
              </p>
            </ScrollReveal>

            {/* Core Pillars Grid Layout (Horizontal, Compact) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6">
              {principles.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <ScrollReveal key={idx} direction="up" delay={150 + idx * 100}>
                    <div className="p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-brand-purple/20 hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center h-full">
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-brand-violet/10 border border-brand-violet/25 flex items-center justify-center text-brand-lavender mb-2.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-white text-xs mb-1 leading-snug">{p.title}</h5>
                      <p className="text-gray-400 text-[10px] sm:text-[11px] leading-relaxed">{p.desc}</p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Right column: Holographic Developer Identity Card */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* Scroll Spy anchor for Contact right above the passport card */}
            <div id="contact" className="absolute -top-32 pointer-events-none" />

            <ScrollReveal direction="left" delay={150} className="w-full max-w-sm h-[395px] perspective-1000">
              <div className="w-full h-full relative preserve-3d">
                
                {/* Front Face: Developer Passport */}
                <div className={`absolute inset-0 w-full h-full backface-hidden glass-panel p-5 rounded-2xl border border-brand-purple/30 shadow-[0_0_20px_rgba(181,95,230,0.08)] hover:border-brand-purple/50 hover:shadow-[0_0_30px_rgba(181,95,230,0.15)] transition-all duration-700 flex flex-col justify-between ${isFlipped ? "rotate-y-180 opacity-0 pointer-events-none z-0" : "rotate-y-0 opacity-100 pointer-events-auto z-10"}`}>
                  {/* Neon Aura Corner Indicator */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-purple/15 to-brand-violet/15 blur-lg pointer-events-none" />
                  
                  <div>
                    {/* Card Header */}
                    <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-3">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-brand-purple animate-pulse" />
                        <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                          Developer Passport
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">Open for Internship</span>
                      </div>
                    </div>

                    {/* Card Body Info */}
                    <div className="space-y-2.5 mb-3.5">
                      <div>
                        <h5 className="text-[8px] font-mono uppercase tracking-widest text-gray-500">
                          Identity
                        </h5>
                        <p className="text-base font-extrabold text-white tracking-tight">
                          Yehara Kobbagala
                        </p>
                      </div>

                      <div>
                        <h5 className="text-[8px] font-mono uppercase tracking-widest text-gray-500">
                          Classification
                        </h5>
                        <p className="text-xs font-semibold text-brand-lavender">
                          Computer Science Undergraduate
                        </p>
                      </div>

                      <div>
                        <h5 className="text-[8px] font-mono uppercase tracking-widest text-gray-500">
                          Affiliation
                        </h5>
                        <p className="text-xs font-medium text-gray-300 flex items-center gap-1.5">
                          <GraduationCap className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                          IIT Sri Lanka / Westminster
                        </p>
                      </div>
                    </div>

                    {/* Primary Stacks */}
                    <div className="border-t border-white/5 pt-2.5">
                      <h5 className="text-[8px] font-mono uppercase tracking-widest text-gray-500 mb-1.5">
                        Active Stack Integrations
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {["Java", "Python", "Spring Boot", "FastAPI", "Next.js", "TS", "MongoDB"].map((tech) => (
                          <span
                            key={tech}
                            className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-white/5 border border-white/5 text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer of Front Card */}
                  <div className="border-t border-white/10 pt-3 mt-auto flex items-center justify-between z-10 relative">
                    {/* Social Icons Row */}
                    <div className="flex gap-1.5">
                      {socialLinks.map((social, sIdx) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={sIdx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={social.name}
                            className={`w-7.5 h-7.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                          >
                            <Icon className="w-4 h-4" />
                          </a>
                        );
                      })}
                    </div>

                    {/* Contact Trigger Button */}
                    <button
                      onClick={() => setIsFlipped(true)}
                      className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-white bg-gradient-to-r from-brand-violet to-brand-purple hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Get in Touch</span>
                      <Send className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </div>

                {/* Back Face: Contact Form */}
                <div className={`absolute inset-0 w-full h-full backface-hidden glass-panel p-5 rounded-2xl border border-brand-purple/30 shadow-[0_0_20px_rgba(181,95,230,0.08)] transition-all duration-700 flex flex-col justify-between ${isFlipped ? "rotate-y-0 opacity-100 pointer-events-auto z-10" : "rotate-y-minus-180 opacity-0 pointer-events-none z-0"}`}>
                  <div>
                    {/* Back card header */}
                    <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-2.5">
                      <div className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-brand-purple" />
                        <span className="font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                          Send a Message
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full mr-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">Open for Internship</span>
                      </div>
                      {/* Back to passport button */}
                      <button
                        onClick={() => setIsFlipped(false)}
                        className="p-1 rounded-lg hover:bg-white/5 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                        title="View Bio Card"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Status-dependent Body */}
                    {status === "success" ? (
                      <div className="flex flex-col items-center justify-center text-center space-y-2 py-4 animate-fade-in">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                          <CheckCircle2 className="w-5 h-5 animate-bounce" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white mb-0.5">
                            Message Sent!
                          </h4>
                          <p className="text-gray-400 text-[10px] max-w-[210px] mx-auto leading-relaxed">
                            Thanks! I will check your message and email you back soon.
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            setStatus("idle");
                            setIsFlipped(false);
                          }}
                          className="px-3 py-1 rounded-lg text-[10px] font-medium bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-all cursor-pointer mt-1"
                        >
                          Back to Passport
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-2.5">
                        {/* Name Input */}
                        <div className="space-y-0.5">
                          <label htmlFor="card-name" className="text-[8px] font-bold text-gray-400 uppercase tracking-wider block">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="card-name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            disabled={status === "submitting"}
                            className="w-full px-2.5 py-1 bg-bg-space/50 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-brand-purple focus:shadow-[0_0_10px_rgba(181,95,230,0.05)] transition-all disabled:opacity-50 text-[11px]"
                            placeholder="John Doe"
                          />
                        </div>

                        {/* Email Input */}
                        <div className="space-y-0.5">
                          <label htmlFor="card-email" className="text-[8px] font-bold text-gray-400 uppercase tracking-wider block">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="card-email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            disabled={status === "submitting"}
                            className="w-full px-2.5 py-1 bg-bg-space/50 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-brand-purple focus:shadow-[0_0_10px_rgba(181,95,230,0.05)] transition-all disabled:opacity-50 text-[11px]"
                            placeholder="john@example.com"
                          />
                        </div>

                        {/* Message Content */}
                        <div className="space-y-0.5">
                          <label htmlFor="card-message" className="text-[8px] font-bold text-gray-400 uppercase tracking-wider block">
                            Message
                          </label>
                          <textarea
                            id="card-message"
                            name="message"
                            required
                            rows={2}
                            value={formData.message}
                            onChange={handleChange}
                            disabled={status === "submitting"}
                            className="w-full px-2.5 py-1 bg-bg-space/50 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-brand-purple focus:shadow-[0_0_10px_rgba(181,95,230,0.05)] transition-all disabled:opacity-50 text-[11px] resize-none"
                            placeholder="Your message details..."
                          />
                        </div>

                        {errorMessage && (
                          <div className="px-2.5 py-0.5 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-[8px] font-mono leading-tight">
                            {errorMessage}
                          </div>
                        )}

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={status === "submitting"}
                          className="w-full flex items-center justify-center gap-1 py-1.5 bg-gradient-to-r from-brand-violet to-brand-purple text-white text-[11px] font-semibold rounded-lg hover:scale-[1.01] active:scale-95 transition-all duration-300 disabled:opacity-75 disabled:pointer-events-none cursor-pointer mt-1"
                        >
                          {status === "submitting" ? (
                            <>
                              <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-2.5 h-2.5" />
                              <span>Send Message</span>
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </div>

                  {/* Footer of Back Card */}
                  <div className="border-t border-white/10 pt-3 mt-auto flex items-center justify-between z-10 relative">
                    {/* Social Icons Row */}
                    <div className="flex gap-1.5">
                      {socialLinks.map((social, sIdx) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={sIdx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={social.name}
                            className={`w-7.5 h-7.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                          >
                            <Icon className="w-4 h-4" />
                          </a>
                        );
                      })}
                    </div>

                    {/* Back Trigger */}
                    <button
                      onClick={() => setIsFlipped(false)}
                      className="px-3 py-1 text-[10px] font-mono text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      ← Back to Bio
                    </button>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
