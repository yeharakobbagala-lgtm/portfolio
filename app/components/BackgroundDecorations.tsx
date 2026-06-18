"use client";

import React from "react";
import FloatingParticle from "./FloatingParticle";
import Starfield from "./Starfield";
import { backgroundParticles, renderParticleIcon } from "@/lib/data/personal";

export default function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <div className="mesh-bg absolute inset-0" />
      <Starfield />

      <div className="absolute top-[12%] right-[-8%] w-[480px] h-[480px] rounded-full bg-brand-violet/10 blur-[160px] animate-glow-pulse" />
      <div className="absolute top-[45%] left-[-10%] w-[520px] h-[520px] rounded-full bg-brand-purple/10 blur-[170px] animate-glow-pulse" />
      <div className="absolute top-[78%] right-[-6%] w-[440px] h-[440px] rounded-full bg-brand-lavender/8 blur-[150px] animate-glow-pulse" />

      <div className="absolute inset-0 overflow-hidden select-none">
        <div className="absolute top-[22%] -right-24 w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] text-brand-purple/5 animate-drift-down-slow">
          <svg className="w-full h-full animate-orbit-reverse" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="185" stroke="currentColor" strokeWidth="1" strokeDasharray="8 16" />
            <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 8" />
          </svg>
        </div>

        <div className="absolute top-[62%] -left-20 w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] text-white/3 animate-drift-up-slow">
          <svg className="w-full h-full animate-orbit-slow" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="170" stroke="currentColor" strokeWidth="0.8" strokeDasharray="6 12" />
          </svg>
        </div>

        {backgroundParticles.map((particle, index) => (
          <FloatingParticle
            key={`${particle.icon}-${index}`}
            className={particle.className}
            colorClass={particle.colorClass}
            glowColor={particle.glowColor}
            floatDirection={particle.floatDirection}
            floatSpeed={particle.floatSpeed}
            style={particle.style}
            twinkle={particle.twinkle}
          >
            {renderParticleIcon(particle.icon)}
          </FloatingParticle>
        ))}
      </div>
    </div>
  );
}
