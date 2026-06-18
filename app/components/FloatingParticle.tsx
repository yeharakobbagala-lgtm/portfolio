"use client";

import React, { useState } from "react";
import type { CSSProperties } from "react";
import type { FloatDirection, FloatSpeed } from "@/lib/data/personal";
import { getDriftClass } from "@/lib/data/personal";

interface FloatingParticleProps {
  className: string;
  colorClass?: string;
  glowColor?: string;
  floatDirection?: FloatDirection;
  floatSpeed?: FloatSpeed;
  style?: CSSProperties;
  twinkle?: boolean;
  children: React.ReactNode;
}

export default function FloatingParticle({
  className,
  colorClass = "text-teal-400",
  glowColor = "rgba(45,212,191,0.8)",
  floatDirection = "up",
  floatSpeed = "slow",
  style,
  twinkle = false,
  children,
}: FloatingParticleProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    setTimeout(() => setClicked(false), 800);
  };

  return (
    <div
      className={`absolute pointer-events-none ${getDriftClass(floatDirection, floatSpeed)}`}
      style={style}
    >
      <div
        onClick={handleClick}
        className={`cursor-pointer select-none pointer-events-auto transition-interactive ${className} ${
          clicked
            ? "scale-150 opacity-100 z-30 brightness-125"
            : `${colorClass}/40 hover:scale-110 hover:opacity-100 z-10 ${twinkle ? "animate-twinkle-opacity" : ""}`
        }`}
        style={{
          filter: clicked ? `drop-shadow(0 0 10px ${glowColor})` : undefined,
        }}
      >
        {children}
      </div>
    </div>
  );
}
