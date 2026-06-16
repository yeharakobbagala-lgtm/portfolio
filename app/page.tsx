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
    <main className="relative bg-bg-space min-h-screen text-white overflow-hidden">
      {/* Ambient floating visual elements in the background */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-lavender/15 blur-[150px] animate-float-slow pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] rounded-full bg-brand-purple/15 blur-[160px] animate-float-medium pointer-events-none" />
      <div className="absolute top-[60%] left-[-15%] w-[500px] h-[500px] rounded-full bg-brand-lavender/10 blur-[140px] animate-float-slow pointer-events-none" />
      <div className="absolute top-[85%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-purple/15 blur-[150px] animate-float-medium pointer-events-none" />

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