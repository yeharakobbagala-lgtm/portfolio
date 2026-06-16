"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden"
    >
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-violet/15 blur-[120px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-purple/15 blur-[130px] animate-glow-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <ScrollReveal direction="down" delay={100}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/5 text-brand-lavender text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
              Computer Science Undergraduate
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Hi, I&apos;m <span className="text-gradient-brand-primary">Yehara Kobbagala</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-300 mb-6">
              Full-Stack Developer <span className="text-brand-purple">|</span> Computer Science Undergraduate <span className="text-brand-purple">|</span> AI Builder
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-8">
              Building scalable web applications, AI-powered systems, and modern digital experiences. 
              Passionate about computer science, full-stack development, and creating solutions 
              that solve real-world problems.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={500}>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-brand-violet to-brand-purple text-white font-medium rounded-xl shadow-lg shadow-brand-violet/25 hover:shadow-brand-purple/25 hover:scale-[1.02] transition-all duration-300"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 font-medium rounded-xl hover:scale-[1.02] transition-all duration-300"
              >
                Let&apos;s Connect
              </a>
            </div>
          </ScrollReveal>

          {/* Social Icons Links */}
          <ScrollReveal direction="up" delay={600}>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/yeharakobbagala-lgtm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/yeharakobbagala/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="mailto:yehara.kobbagala@gmail.com"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all duration-300"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Content - Profile Image with Orbit rings */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <ScrollReveal direction="fade" delay={300} className="relative">
            {/* Concentric rotating glowing aura rings */}
            <div className="absolute inset-0 -m-6 rounded-full border border-dashed border-brand-violet/20 animate-orbit-slow pointer-events-none" />
            <div className="absolute inset-0 -m-3 rounded-full border border-dashed border-brand-purple/20 animate-orbit-reverse pointer-events-none" />

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-brand-violet via-brand-purple to-brand-lavender shadow-[0_0_50px_rgba(124,58,237,0.2)] hover:shadow-[0_0_60px_rgba(181,95,230,0.4)] transition-all duration-500 hover:scale-[1.03] group">
              {/* Spinning background gradients */}
              <div className="absolute inset-0.5 rounded-full bg-bg-space z-0" />
              
              {/* Animated aura overlays */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-r from-brand-violet/20 to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-1" />

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 z-10">
                <Image
                  src="/profile.png"
                  alt="Yehara Kobbagala"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 256px, 320px"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Decorative Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-space to-transparent pointer-events-none" />
    </section>
  );
}
