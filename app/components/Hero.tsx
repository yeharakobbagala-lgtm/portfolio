"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import {
  personal,
  socialLinks,
} from "@/lib/data/personal";
import { scrollToSection } from "@/lib/scroll-to-section";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  const { identity } = personal;
  const github = socialLinks.find((link) => link.name === "GitHub");
  const linkedin = socialLinks.find((link) => link.name === "LinkedIn");
  const email = socialLinks.find((link) => link.name === "Email");
  const GithubIcon = github?.icon;
  const LinkedinIcon = linkedin?.icon;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 sm:pb-24 overflow-hidden">
      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ScrollReveal
            direction="left"
            delay={100}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 mb-5">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              {identity.availability}
            </div>

            <p className="text-brand-lavender font-mono text-xs sm:text-sm tracking-[0.2em] uppercase mb-3">
              Hello, I&apos;m
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] text-gradient-primary">
              {identity.fullName}
            </h1>

            <p className="text-body text-base sm:text-lg mt-5 max-w-xl mx-auto lg:mx-0">
              {identity.roles.join(" · ")}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-8">
              <a href="#projects" onClick={(e) => handleScroll(e, "#projects")} className="btn-primary">
                View My Work
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="btn-ghost">
                Let&apos;s Connect
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 mt-8">
              {github && GithubIcon && (
                <a
                  href={github.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full glass-panel text-muted hover:border-brand-purple/40 hover:text-brand-lavender transition-interactive"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4.5 h-4.5" />
                </a>
              )}
              {linkedin && LinkedinIcon && (
                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full glass-panel text-muted hover:border-brand-purple/40 hover:text-brand-lavender transition-interactive"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4.5 h-4.5" />
                </a>
              )}
              {email && (
                <a
                  href={email.href}
                  className="w-11 h-11 flex items-center justify-center rounded-full glass-panel text-muted hover:border-brand-purple/40 hover:text-brand-lavender transition-interactive"
                  aria-label="Email"
                >
                  <Mail className="w-4.5 h-4.5" />
                </a>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="right"
            delay={200}
            className="flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-violet/25 to-brand-purple/15 blur-3xl scale-110 animate-glow-pulse" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-[5px] bg-gradient-to-br from-brand-violet via-brand-purple to-brand-lavender shadow-[0_0_60px_rgba(124,58,237,0.22)] group">
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 bg-bg-elevated">
                  <Image
                    src={identity.profileImage}
                    alt={identity.fullName}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-interactive"
                    sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-subtle pointer-events-none animate-drift-up-slow"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/15 flex justify-center pt-1.5">
          <div className="w-1 h-1 rounded-full bg-brand-purple animate-bounce" />
        </div>
      </div>
    </section>
  );
}
