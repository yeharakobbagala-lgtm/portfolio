"use client";

import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
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

    // Dispatch events to control the Developer Passport flip state if needed
    if (href === "#contact") {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("trigger-contact-flip"));
      }, 100);
    } else if (href === "#about") {
      window.dispatchEvent(new CustomEvent("trigger-about-reset"));
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden"
    >
      {/* Background soft light gradient blobs */}
      <div className="absolute top-[15%] left-[5%] w-[380px] h-[380px] rounded-full bg-brand-violet/10 blur-[130px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-brand-purple/10 blur-[150px] animate-glow-pulse pointer-events-none" />

      {/* Floating Abstract Decorative Graphics */}
      <div className="absolute left-[8%] top-[30%] text-brand-purple/20 animate-float-slow w-8 h-8 pointer-events-none hidden md:block">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          <path d="M12 3v18M3 12h18M12 3c0 4.5 3.5 8 8 8m-8-8c0 4.5-3.5 8-8 8m8 8c0-4.5 3.5-8 8-8m-8 8c0-4.5-3.5-8-8-8" />
        </svg>
      </div>
      
      <div className="absolute right-[10%] top-[20%] text-teal-400/25 animate-float-medium w-6 h-6 pointer-events-none hidden md:block">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
          <path d="M12 4v16M4 12h16" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute left-[15%] bottom-[25%] text-teal-300/15 animate-float-medium w-5 h-5 pointer-events-none hidden md:block">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
          <circle cx="12" cy="12" r="8" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="absolute right-[12%] bottom-[30%] text-brand-lavender/20 animate-float-slow w-10 h-10 pointer-events-none hidden md:block">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
          <path d="M12 2L2 22h20L12 2z" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center justify-center relative z-10">
        
        {/* Profile and SVG Graphics Centerpiece */}
        <ScrollReveal direction="fade" delay={200} className="relative z-10 flex items-center justify-center select-none">
          
          {/* Concentric rotating background rings (HUD Style) */}
          <svg
            className="absolute w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] pointer-events-none z-0 text-white/5"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer dashed ring - rotates clockwise */}
            <circle
              cx="200"
              cy="200"
              r="175"
              className="animate-orbit-slow"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="8 12"
              opacity="0.4"
            />
            {/* Inner dotted ring - rotates counter-clockwise */}
            <circle
              cx="200"
              cy="200"
              r="150"
              className="animate-orbit-reverse"
              stroke="url(#hudPurpleGradient)"
              strokeWidth="1.2"
              strokeDasharray="2 6"
              opacity="0.7"
            />
            {/* Tiny glowing orbit dot */}
            <circle
              cx="350"
              cy="200"
              r="3"
              className="animate-orbit-slow origin-[200px_200px] fill-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.5)]"
            />
            <defs>
              <linearGradient id="hudPurpleGradient" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7c3aed" stopOpacity="0.4" />
                <stop offset="1" stopColor="#b55fe6" stopOpacity="0.15" />
              </linearGradient>
            </defs>
          </svg>

          {/* Looping decorative vector path */}
          <svg
            className="absolute w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] pointer-events-none z-20 text-teal-400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="animate-path-draw"
              d="M 330 80 C 270 20, 130 20, 70 80 C 10 140, 10 260, 70 320 C 130 380, 270 380, 330 320 C 370 280, 380 180, 290 150 C 200 120, 120 220, 180 280 C 230 330, 310 300, 330 250"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>

          {/* Orbiting text badge */}
          <div className="absolute right-[-25px] sm:right-[-45px] top-[10%] z-30 flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32">
            {/* Center dot inside the badge */}
            <div className="absolute w-5 h-5 sm:w-7 sm:h-7 rounded-full border border-teal-500/20 flex items-center justify-center bg-bg-space/90 backdrop-blur-md">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-teal-400 animate-pulse" />
            </div>
            {/* Spinning curved text SVG */}
            <svg
              className="w-full h-full animate-orbit-slow"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="badgePath"
                  d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                />
              </defs>
              <text className="fill-teal-300/70 text-[6.5px] font-mono font-medium uppercase tracking-[2.8px]">
                <textPath href="#badgePath" startOffset="0%">
                  • COME ON • LET&apos;S TALK • LET&apos;S WORK
                </textPath>
              </text>
            </svg>
          </div>

          {/* Central Portrait Container */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full p-1 bg-gradient-to-tr from-brand-violet/25 via-brand-purple/20 to-brand-lavender/30 shadow-[0_0_50px_rgba(124,58,237,0.15)] group hover:scale-[1.02] transition-transform duration-500">
            {/* Circle backdrop frame */}
            <div className="absolute inset-1 rounded-full bg-[#110e20] z-0" />
            
            {/* Profile Cutout Frame */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/5 z-10 bg-slate-950/40">
              <Image
                src="/profile.png"
                alt="Yehara Kobbegala"
                fill
                priority
                className="object-cover scale-[1.03] group-hover:scale-[1.06] transition-transform duration-500"
                sizes="(max-w-768px) 224px, 288px"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Large Centered Overlapping Name */}
        <ScrollReveal direction="up" delay={300} className="w-full text-center mt-8 md:-mt-4 z-25">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/40 drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] select-none">
            Yehara Kobbegala
          </h1>
          <p className="text-brand-lavender font-mono text-xs sm:text-sm tracking-[0.22em] uppercase mt-4">
            Full-Stack Developer <span className="text-teal-400 font-sans">•</span> CS Undergraduate <span className="text-teal-400 font-sans">•</span> AI Builder
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8 z-30">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "#projects")}
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-brand-violet to-brand-purple hover:from-brand-purple hover:to-brand-violet text-white font-semibold rounded-2xl shadow-lg shadow-brand-violet/20 hover:shadow-brand-purple/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              View My Work
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="px-8 py-3.5 bg-[#120a24]/60 hover:bg-[#1c1236]/80 text-white border border-white/10 hover:border-brand-purple/30 font-semibold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Let&apos;s Connect
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Vertical Social Icons on the left (Desktop) / Inline center (Mobile) */}
      <div className="md:absolute md:left-8 md:top-1/2 md:-translate-y-1/2 flex md:flex-col items-center gap-5 mt-10 md:mt-0 z-30">
        <a
          href="https://github.com/yeharakobbagala-lgtm"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all duration-300"
          aria-label="GitHub Profile"
        >
          <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/yeharakobbagala/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all duration-300"
          aria-label="LinkedIn Profile"
        >
          <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="mailto:yehara.kobbagala@gmail.com"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all duration-300"
          aria-label="Email Contact"
        >
          <Mail className="w-4.5 h-4.5" />
        </a>
      </div>

      {/* Centred Scroll Down Mouse Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-500 hover:text-white transition-colors duration-300 pointer-events-none select-none z-30">
        <span className="text-[9px] uppercase tracking-[0.25em] font-mono opacity-50">Scroll Down</span>
        <div className="w-4.5 h-7 rounded-full border border-white/20 flex justify-center p-1">
          <div className="w-1 h-1 rounded-full bg-teal-400 animate-bounce" />
        </div>
      </div>

      {/* Bottom fade visual separation */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg-space to-transparent pointer-events-none" />
    </section>
  );
}
