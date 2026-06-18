"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import { socialLinks } from "@/lib/data/personal";

export default function Connect() {
  return (
    <section id="connect" className="section-shell section-y relative overflow-hidden">
      <div className="container-site">
        <SectionHeader
          label="Contact"
          title="Connect With Me"
          description="Reach out through any of these channels — I'd love to hear from you."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <ScrollReveal key={social.name} direction="up" delay={idx * 80}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-premium flex items-center gap-4 p-5 sm:p-6 rounded-2xl h-full"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-white/[0.04] flex items-center justify-center text-muted border border-white/[0.06] transition-interactive ${social.color}`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[11px] font-bold text-muted uppercase tracking-widest mb-1">
                      {social.name}
                    </h3>
                    <p className="text-sm font-semibold text-white group-hover:text-brand-lavender transition-interactive truncate">
                      {social.value}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
