"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Connect from "./components/Connect";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="relative bg-bg-space min-h-screen text-white overflow-hidden dot-bg">
      {/* Ambient floating visual elements in the background */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-lavender/12 blur-[150px] animate-float-slow pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] rounded-full bg-brand-purple/12 blur-[160px] animate-float-medium pointer-events-none" />
      <div className="absolute top-[60%] left-[-15%] w-[500px] h-[500px] rounded-full bg-brand-lavender/8 blur-[140px] animate-float-slow pointer-events-none" />
      <div className="absolute top-[85%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-purple/12 blur-[150px] animate-float-medium pointer-events-none" />

      {/* Global Background Graphics (Floating Stars, Pluses, HUD circles spread down the page) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* HUD Ring behind About section (around 22% height) */}
        <div className="absolute top-[20%] -left-32 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] text-white/3">
          <svg className="w-full h-full animate-orbit-slow" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.8" strokeDasharray="6 10" />
            <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
          </svg>
        </div>

        {/* HUD Ring behind Projects section (around 55% height) */}
        <div className="absolute top-[52%] -right-40 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] text-brand-purple/5">
          <svg className="w-full h-full animate-orbit-reverse" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="185" stroke="currentColor" strokeWidth="1" strokeDasharray="8 16" />
            <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 8" />
          </svg>
        </div>

        {/* HUD Ring behind Education section (around 82% height) */}
        <div className="absolute top-[80%] -left-24 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] text-white/3">
          <svg className="w-full h-full animate-orbit-slow" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="0.8" strokeDasharray="6 12" />
          </svg>
        </div>

        {/* Ambient floating items spread vertically */}
        {/* Top area */}
        <div className="absolute left-[5%] top-[8%] text-teal-400/30 animate-float-slow w-6 h-6">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18" /></svg>
        </div>
        <div className="absolute right-[8%] top-[12%] text-brand-purple/30 animate-float-medium w-8 h-8">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 3c0 4.5 3.5 8 8 8m-8-8c0 4.5-3.5 8-8 8m8 8c0-4.5 3.5-8 8-8m-8 8c0-4.5-3.5-8-8-8" /></svg>
        </div>
        <div className="absolute left-[20%] top-[16%] text-brand-lavender/25 animate-float-medium w-5 h-5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8" strokeDasharray="3 3" /></svg>
        </div>
        <div className="absolute right-[22%] top-[24%] text-teal-300/30 animate-float-slow w-7 h-7">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 22h20z" /></svg>
        </div>

        {/* About area */}
        <div className="absolute right-[12%] top-[32%] text-teal-400/30 animate-float-slow w-6 h-6">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18" /></svg>
        </div>
        <div className="absolute left-[6%] top-[38%] text-brand-lavender/35 animate-float-medium w-7 h-7">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 3c0 4.5 3.5 8 8 8m-8-8c0 4.5-3.5 8-8 8m8 8c0-4.5 3.5-8 8-8m-8 8c0-4.5-3.5-8-8-8" /></svg>
        </div>
        <div className="absolute right-[25%] top-[42%] text-brand-purple/25 animate-float-slow w-5 h-5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" strokeDasharray="4 2" /></svg>
        </div>

        {/* Skills area */}
        <div className="absolute left-[15%] top-[48%] text-brand-purple/35 animate-float-slow w-8 h-8">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 3c0 4.5 3.5 8 8 8m-8-8c0 4.5-3.5 8-8 8m8 8c0-4.5 3.5-8 8-8m-8 8c0-4.5-3.5-8-8-8" /></svg>
        </div>
        <div className="absolute right-[6%] top-[54%] text-teal-400/30 animate-float-medium w-6 h-6">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18" /></svg>
        </div>
        <div className="absolute left-[28%] top-[58%] text-brand-lavender/25 animate-float-slow w-5 h-5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8" strokeDasharray="2 4" /></svg>
        </div>

        {/* Projects area */}
        <div className="absolute right-[15%] top-[64%] text-brand-purple/30 animate-float-slow w-7 h-7">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 22h20z" /></svg>
        </div>
        <div className="absolute left-[10%] top-[68%] text-teal-300/35 animate-float-medium w-8 h-8">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 3c0 4.5 3.5 8 8 8m-8-8c0 4.5-3.5 8-8 8m8 8c0-4.5 3.5-8 8-8m-8 8c0-4.5-3.5-8-8-8" /></svg>
        </div>

        {/* Education area */}
        <div className="absolute right-[14%] top-[74%] text-brand-lavender/25 animate-float-slow w-6 h-6">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8" strokeDasharray="4 4" /></svg>
        </div>
        <div className="absolute left-[8%] top-[79%] text-brand-purple/35 animate-float-medium w-6 h-6">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 22h20z" /></svg>
        </div>
        <div className="absolute right-[26%] top-[82%] text-teal-400/30 animate-float-slow w-5 h-5">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18" /></svg>
        </div>

        {/* Contact/Footer area */}
        <div className="absolute left-[12%] top-[88%] text-teal-400/30 animate-float-slow w-8 h-8">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 3c0 4.5 3.5 8 8 8m-8-8c0 4.5-3.5 8-8 8m8 8c0-4.5 3.5-8 8-8m-8 8c0-4.5-3.5-8-8-8" /></svg>
        </div>
        <div className="absolute right-[10%] top-[93%] text-brand-purple/30 animate-float-medium w-6 h-6">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18" /></svg>
        </div>
      </div>

      {/* Floating glass header */}
      <Navbar />

      {/* Layout Content Groups */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <Hero />
        
        <About />
        
        <Skills />
        
        <Projects />
        
        <Education />
        
        <Connect />

        {/* Premium footer layout */}
        <footer className="border-t border-white/5 py-12 px-6 bg-bg-space/40 backdrop-blur-md relative z-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1.5">
              <span className="font-mono text-sm font-bold text-white tracking-tight">
                yehara<span className="text-brand-purple">.online</span>
              </span>
              <p className="text-xs text-gray-500">
                Crafting robust enterprise platforms & client-side software.
              </p>
            </div>

            <div className="text-xs text-gray-400 font-mono text-center sm:text-right">
              <p>© {currentYear} Yehara Kobbegala. All rights reserved.</p>
              <p className="text-gray-600 mt-1">
                Built using Next.js, TailwindCSS v4 & custom keyframes.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}