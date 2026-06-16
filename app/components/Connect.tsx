"use client";

import React from "react";
import { Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const socialLinks = [
  {
    name: "Email",
    value: "yehara.kobbagala@gmail.com",
    href: "mailto:yehara.kobbagala@gmail.com",
    icon: Mail,
    color: "group-hover:text-brand-purple group-hover:bg-brand-purple/10"
  },
  {
    name: "GitHub",
    value: "yeharakobbagala-lgtm",
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
    color: "group-hover:text-brand-violet group-hover:bg-brand-violet/10"
  },
  {
    name: "LinkedIn",
    value: "yeharakobbagala",
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
    color: "group-hover:text-brand-lavender group-hover:bg-brand-lavender/10"
  }
];

export default function Connect() {
  return (
    <section className="py-12 px-6 relative overflow-hidden bg-bg-space/20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up">
          <div className="text-center mb-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-purple mb-1.5">
              Contact Channels
            </h2>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Connect With Me
            </h3>
            <div className="w-8 h-1 bg-gradient-to-r from-brand-violet to-brand-purple mx-auto mt-2 rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 100}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-5 rounded-2xl glass-panel hover:bg-white/10 hover:border-brand-purple/30 hover:shadow-[0_0_20px_rgba(181,95,230,0.05)] transition-all duration-300 h-full cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 border border-white/5 transition-all duration-300 ${social.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">
                      {social.name}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-brand-purple transition-colors duration-300 truncate">
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
