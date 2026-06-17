"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Connect from "./components/Connect";
import FloatingParticle from "./components/FloatingParticle";

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

        {/* Ambient interactive floating items spread vertically */}
        
        {/* Top / Hero area (0% - 15% height) */}
        <FloatingParticle className="left-[3%] top-[4%] animate-float-slow w-6 h-6" colorClass="text-teal-400" glowColor="rgba(45,212,191,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 3c0 4.5 3.5 8 8 8m-8-8c0 4.5-3.5 8-8 8m8 8c0-4.5 3.5-8 8-8m-8 8c0-4.5-3.5-8-8-8" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[5%] top-[6%] animate-float-medium w-5 h-5" colorClass="text-brand-purple" glowColor="rgba(181,95,230,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18" /></svg>
        </FloatingParticle>
        <FloatingParticle className="left-[18%] top-[9%] animate-float-medium w-5 h-5" colorClass="text-brand-lavender" glowColor="rgba(216,180,254,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8" strokeDasharray="3 3" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[15%] top-[12%] animate-float-slow w-7 h-7" colorClass="text-teal-300" glowColor="rgba(45,212,191,0.6)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 22h20z" /></svg>
        </FloatingParticle>
        <FloatingParticle className="left-[10%] top-[15%] animate-float-slow w-5 h-5" colorClass="text-brand-purple" glowColor="rgba(181,95,230,0.7)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 3c0 4.5 3.5 8 8 8m-8-8c0 4.5-3.5 8-8 8m8 8c0-4.5 3.5-8 8-8m-8 8c0-4.5-3.5-8-8-8" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[25%] top-[17%] animate-float-medium w-6 h-6" colorClass="text-teal-400" glowColor="rgba(45,212,191,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18" /></svg>
        </FloatingParticle>

        {/* About area (15% - 35% height) */}
        <FloatingParticle className="left-[22%] top-[20%] animate-float-slow w-7 h-7" colorClass="text-brand-lavender" glowColor="rgba(216,180,254,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 22h20z" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[10%] top-[23%] animate-float-medium w-5 h-5" colorClass="text-teal-300" glowColor="rgba(45,212,191,0.7)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8" strokeDasharray="3 3" /></svg>
        </FloatingParticle>
        <FloatingParticle className="left-[5%] top-[26%] animate-float-slow w-6 h-6" colorClass="text-teal-400" glowColor="rgba(45,212,191,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 3c0 4.5 3.5 8 8 8m-8-8c0 4.5-3.5 8-8 8m8 8c0-4.5 3.5-8 8-8m-8 8c0-4.5-3.5-8-8-8" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[30%] top-[29%] animate-float-slow w-5 h-5" colorClass="text-brand-purple" glowColor="rgba(181,95,230,0.6)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" strokeDasharray="4 2" /></svg>
        </FloatingParticle>
        <FloatingParticle className="left-[12%] top-[31%] animate-float-medium w-6 h-6" colorClass="text-brand-lavender" glowColor="rgba(216,180,254,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[8%] top-[34%] animate-float-slow w-5 h-5" colorClass="text-teal-400" glowColor="rgba(45,212,191,0.7)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8" strokeDasharray="3 3" /></svg>
        </FloatingParticle>
        <FloatingParticle className="left-[26%] top-[37%] animate-float-slow w-6 h-6" colorClass="text-brand-purple" glowColor="rgba(181,95,230,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 3c0 4.5 3.5 8 8 8m-8-8c0 4.5-3.5 8-8 8m8 8c0-4.5 3.5-8 8-8m-8 8c0-4.5-3.5-8-8-8" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[20%] top-[40%] animate-float-slow w-7 h-7" colorClass="text-brand-lavender" glowColor="rgba(216,180,254,0.7)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 22h20z" /></svg>
        </FloatingParticle>

        {/* Skills area (35% - 50% height) */}
        <FloatingParticle className="left-[6%] top-[43%] animate-float-slow w-5 h-5" colorClass="text-brand-purple" glowColor="rgba(181,95,230,0.6)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" strokeDasharray="4 2" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[28%] top-[45%] animate-float-medium w-6 h-6" colorClass="text-teal-400" glowColor="rgba(45,212,191,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18" /></svg>
        </FloatingParticle>
        <FloatingParticle className="left-[15%] top-[48%] animate-float-slow w-8 h-8" colorClass="text-brand-purple" glowColor="rgba(181,95,230,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 3c0 4.5 3.5 8 8 8m-8-8c0 4.5-3.5 8-8 8m8 8c0-4.5 3.5-8 8-8m-8 8c0-4.5-3.5-8-8-8" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[12%] top-[51%] animate-float-slow w-5 h-5" colorClass="text-brand-lavender" glowColor="rgba(216,180,254,0.7)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8" strokeDasharray="2 4" /></svg>
        </FloatingParticle>
        <FloatingParticle className="left-[24%] top-[54%] animate-float-slow w-6 h-6" colorClass="text-brand-purple" glowColor="rgba(181,95,230,0.6)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 22h20z" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[5%] top-[57%] animate-float-medium w-6 h-6" colorClass="text-teal-400" glowColor="rgba(45,212,191,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18" /></svg>
        </FloatingParticle>

        {/* Projects area (50% - 70% height) */}
        <FloatingParticle className="left-[9%] top-[60%] animate-float-slow w-8 h-8" colorClass="text-teal-300" glowColor="rgba(45,212,191,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 3c0 4.5 3.5 8 8 8m-8-8c0 4.5-3.5 8-8 8m8 8c0-4.5 3.5-8 8-8m-8 8c0-4.5-3.5-8-8-8" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[18%] top-[63%] animate-float-slow w-5 h-5" colorClass="text-brand-lavender" glowColor="rgba(216,180,254,0.7)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" strokeDasharray="4 2" /></svg>
        </FloatingParticle>
        <FloatingParticle className="left-[28%] top-[66%] animate-float-slow w-5 h-5" colorClass="text-teal-400" glowColor="rgba(45,212,191,0.7)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8" strokeDasharray="3 3" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[22%] top-[69%] animate-float-slow w-7 h-7" colorClass="text-brand-purple" glowColor="rgba(181,95,230,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 22h20z" /></svg>
        </FloatingParticle>
        <FloatingParticle className="left-[14%] top-[72%] animate-float-slow w-6 h-6" colorClass="text-brand-lavender" glowColor="rgba(216,180,254,0.7)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18" /></svg>
        </FloatingParticle>

        {/* Education area (70% - 85% height) */}
        <FloatingParticle className="right-[8%] top-[74%] animate-float-slow w-6 h-6" colorClass="text-brand-purple" glowColor="rgba(181,95,230,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 3c0 4.5 3.5 8 8 8m-8-8c0 4.5-3.5 8-8 8m8 8c0-4.5 3.5-8 8-8m-8 8c0-4.5-3.5-8-8-8" /></svg>
        </FloatingParticle>
        <FloatingParticle className="left-[5%] top-[77%] animate-float-slow w-5 h-5" colorClass="text-teal-400" glowColor="rgba(45,212,191,0.7)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8" strokeDasharray="4 4" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[26%] top-[79%] animate-float-slow w-5 h-5" colorClass="text-brand-purple" glowColor="rgba(181,95,230,0.6)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" strokeDasharray="4 2" /></svg>
        </FloatingParticle>
        <FloatingParticle className="left-[22%] top-[82%] animate-float-slow w-6 h-6" colorClass="text-brand-lavender" glowColor="rgba(216,180,254,0.7)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 22h20z" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[10%] top-[84%] animate-float-slow w-6 h-6" colorClass="text-brand-purple" glowColor="rgba(181,95,230,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 3c0 4.5 3.5 8 8 8m-8-8c0 4.5-3.5 8-8 8m8 8c0-4.5 3.5-8 8-8m-8 8c0-4.5-3.5-8-8-8" /></svg>
        </FloatingParticle>

        {/* Contact/Footer area (85% - 98% height) */}
        <FloatingParticle className="left-[8%] top-[86%] animate-float-slow w-6 h-6" colorClass="text-teal-400" glowColor="rgba(45,212,191,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[15%] top-[88%] animate-float-slow w-5 h-5" colorClass="text-brand-lavender" glowColor="rgba(216,180,254,0.7)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8" strokeDasharray="3 3" /></svg>
        </FloatingParticle>
        <FloatingParticle className="left-[12%] top-[90%] animate-float-slow w-8 h-8" colorClass="text-teal-400" glowColor="rgba(45,212,191,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 3c0 4.5 3.5 8 8 8m-8-8c0 4.5-3.5 8-8 8m8 8c0-4.5 3.5-8 8-8m-8 8c0-4.5-3.5-8-8-8" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[6%] top-[92%] animate-float-slow w-6 h-6" colorClass="text-teal-300" glowColor="rgba(45,212,191,0.6)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 22h20z" /></svg>
        </FloatingParticle>
        <FloatingParticle className="left-[26%] top-[94%] animate-float-slow w-5 h-5" colorClass="text-brand-purple" glowColor="rgba(181,95,230,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3v18M3 12h18" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[20%] top-[96%] animate-float-slow w-6 h-6" colorClass="text-brand-lavender" glowColor="rgba(216,180,254,0.7)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="8" strokeDasharray="3 3" /></svg>
        </FloatingParticle>
        <FloatingParticle className="left-[4%] top-[97%] animate-float-slow w-5 h-5" colorClass="text-brand-purple" glowColor="rgba(181,95,230,0.6)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" strokeDasharray="4 2" /></svg>
        </FloatingParticle>
        <FloatingParticle className="right-[12%] top-[98%] animate-float-slow w-6 h-6" colorClass="text-brand-purple" glowColor="rgba(181,95,230,0.8)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 3c0 4.5 3.5 8 8 8m-8-8c0 4.5-3.5 8-8 8m8 8c0-4.5 3.5-8 8-8m-8 8c0-4.5-3.5-8-8-8" /></svg>
        </FloatingParticle>
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