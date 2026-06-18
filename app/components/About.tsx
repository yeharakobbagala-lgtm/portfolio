"use client";

import React, { useState, useEffect } from "react";
import { Cpu, GraduationCap, Mail, Send, X } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import ContactForm from "./ContactForm";
import SocialIconLinks from "./SocialIconLinks";
import { personal } from "@/lib/data/personal";

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { identity, about } = personal;

  useEffect(() => {
    const handleContactFlip = () => setIsFlipped(true);
    const handleAboutReset = () => setIsFlipped(false);

    window.addEventListener("trigger-contact-flip", handleContactFlip);
    window.addEventListener("trigger-about-reset", handleAboutReset);

    if (window.location.hash === "#contact") {
      setIsFlipped(true);
    }

    return () => {
      window.removeEventListener("trigger-contact-flip", handleContactFlip);
      window.removeEventListener("trigger-about-reset", handleAboutReset);
    };
  }, []);

  return (
    <section id="about" className="section-shell section-y relative overflow-hidden">
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full bg-brand-violet/6 blur-[120px] pointer-events-none" />

      <div className="container-site relative z-10">
        <SectionHeader
          label="Introduction"
          title="About Me"
          description={personal.about.headline}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
            <ScrollReveal direction="right" delay={100}>
              {about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-body leading-relaxed text-base mb-4">
                  {paragraph}
                </p>
              ))}
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-6">
              {about.principles.map((principle, idx) => {
                const Icon = principle.icon;
                return (
                  <ScrollReveal key={principle.title} direction="up" delay={150 + idx * 100}>
                    <div className="p-4 rounded-xl card-premium flex flex-col items-center text-center h-full">
                      <div className="w-10 h-10 shrink-0 rounded-lg bg-brand-violet/10 border border-brand-violet/25 flex items-center justify-center text-brand-lavender mb-2.5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-white text-xs mb-1 leading-snug">
                        {principle.title}
                      </h5>
                      <p className="text-body text-xs sm:text-sm leading-relaxed">
                        {principle.desc}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div id="contact" className="absolute -top-32 pointer-events-none" />

            <ScrollReveal direction="left" delay={150} className="w-full max-w-sm min-h-[420px] sm:min-h-[395px] perspective-1000">
              <div className="w-full h-full relative preserve-3d">
                <div
                  className={`absolute inset-0 w-full h-full backface-hidden glass-panel p-5 rounded-2xl border border-brand-purple/30 shadow-[0_0_20px_rgba(181,95,230,0.08)] hover:border-brand-purple/50 transition-interactive flex flex-col justify-between ${
                    isFlipped
                      ? "rotate-y-180 opacity-0 pointer-events-none z-0"
                      : "rotate-y-0 opacity-100 pointer-events-auto z-10"
                  }`}
                >
                  <div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-purple/15 to-brand-violet/15 blur-lg pointer-events-none" />

                    <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-3">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-brand-purple animate-pulse" />
                        <span className="font-mono text-[9px] text-muted uppercase tracking-widest">
                          Developer Passport
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                          {identity.availability}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2.5 mb-3.5">
                      <div>
                        <h5 className="text-[9px] font-mono uppercase tracking-widest text-subtle">
                          Identity
                        </h5>
                        <p className="text-base font-extrabold text-white tracking-tight">
                          {identity.fullName}
                        </p>
                      </div>
                      <div>
                        <h5 className="text-[9px] font-mono uppercase tracking-widest text-subtle">
                          Classification
                        </h5>
                        <p className="text-xs font-semibold text-brand-lavender">
                          {identity.classification}
                        </p>
                      </div>
                      <div>
                        <h5 className="text-[9px] font-mono uppercase tracking-widest text-subtle">
                          Affiliation
                        </h5>
                        <p className="text-xs font-medium text-body flex items-center gap-1.5">
                          <GraduationCap className="w-3.5 h-3.5 text-brand-purple shrink-0" />
                          {identity.affiliation}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-white/5 pt-2.5">
                      <h5 className="text-[9px] font-mono uppercase tracking-widest text-subtle mb-1.5">
                        Active Stack Integrations
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {about.activeStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-white/5 border border-white/5 text-body"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-3 mt-auto flex items-center justify-between z-10 relative">
                    <SocialIconLinks />
                    <button
                      onClick={() => setIsFlipped(true)}
                      className="px-3 py-1.5 rounded-lg text-[11px] font-semibold text-white bg-gradient-to-r from-brand-violet to-brand-purple hover:opacity-95 active:scale-[0.98] transition-interactive flex items-center gap-1 cursor-pointer"
                    >
                      <span>Get in Touch</span>
                      <Send className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 w-full h-full backface-hidden glass-panel p-5 rounded-2xl border border-brand-purple/30 shadow-[0_0_20px_rgba(181,95,230,0.08)] transition-interactive flex flex-col justify-between ${
                    isFlipped
                      ? "rotate-y-0 opacity-100 pointer-events-auto z-10"
                      : "rotate-y-minus-180 opacity-0 pointer-events-none z-0"
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-2.5">
                      <div className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-brand-purple" />
                        <span className="font-mono text-[9px] text-muted uppercase tracking-widest">
                          Send a Message
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full mr-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                          {identity.availability}
                        </span>
                      </div>
                      <button
                        onClick={() => setIsFlipped(false)}
                        className="p-1 rounded-lg hover:bg-white/5 text-muted hover:text-white transition-interactive cursor-pointer"
                        title="View Bio Card"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <ContactForm onSuccess={() => setIsFlipped(false)} />
                  </div>

                  <div className="border-t border-white/10 pt-3 mt-auto flex items-center justify-between z-10 relative">
                    <SocialIconLinks />
                    <button
                      onClick={() => setIsFlipped(false)}
                      className="px-3 py-1 text-[10px] font-mono text-muted hover:text-white transition-interactive cursor-pointer"
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
