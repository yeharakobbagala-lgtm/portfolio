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
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 sm:pb-24 overflow-x-clip overflow-y-visible">
      <div className="container-site relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] lg:grid-rows-[auto_auto_auto] gap-x-10 sm:gap-x-12 xl:gap-x-16 gap-y-6 lg:gap-y-4">
          {/* Badge + hello */}
          <ScrollReveal
            direction="left"
            delay={100}
            className="order-1 lg:col-start-2 lg:row-start-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 mb-4 sm:mb-5">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              {identity.availability}
            </div>
            <p className="text-brand-lavender font-mono text-xs sm:text-sm tracking-[0.2em] uppercase">
              Hello, I&apos;m
            </p>
          </ScrollReveal>

          {/* Profile photo + name — grouped and centered with each other */}
          <div className="order-2 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:items-center lg:contents">
            <ScrollReveal
              direction="right"
              delay={150}
              className="lg:col-start-1 lg:row-start-2 flex justify-center lg:justify-start self-center shrink-0"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-violet/25 to-brand-purple/15 blur-3xl scale-110 animate-glow-pulse" />
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[22rem] lg:h-[22rem] rounded-full p-[5px] bg-gradient-to-br from-brand-violet via-brand-purple to-brand-lavender shadow-[0_0_60px_rgba(124,58,237,0.22)] group">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 bg-bg-elevated">
                    <Image
                      src={identity.profileImage}
                      alt={identity.fullName}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-interactive"
                      sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 352px"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal
              direction="left"
              delay={200}
              className="lg:col-start-2 lg:row-start-2 self-center text-center lg:text-left min-w-0 overflow-visible"
            >
              <h1 className="font-bold tracking-tight leading-[1.04] overflow-visible">
                <span className="block text-gradient-primary text-[clamp(3.25rem,10vw,6rem)] sm:text-[clamp(3.75rem,9vw,6.75rem)] lg:text-[clamp(4.25rem,7.5vw,6.5rem)] xl:text-[7rem]">
                  {identity.firstName}
                </span>
                <span className="block text-gradient-primary text-[clamp(3rem,9vw,5.5rem)] sm:text-[clamp(3.5rem,8vw,6.25rem)] lg:text-[clamp(3.75rem,6.5vw,6rem)] xl:text-[6.5rem]">
                  {identity.lastName}
                </span>
              </h1>
            </ScrollReveal>
          </div>

          {/* Roles, buttons, social */}
          <ScrollReveal
            direction="left"
            delay={250}
            className="order-4 lg:col-start-2 lg:row-start-3 text-center lg:text-left"
          >
            <p className="text-body text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
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
