"use client";

import React, { useState } from "react";

interface FloatingParticleProps {
  className: string;
  colorClass?: string;
  glowColor?: string;
  children: React.ReactNode;
}

export default function FloatingParticle({
  className,
  colorClass = "text-teal-400",
  glowColor = "rgba(45,212,191,0.8)",
  children
}: FloatingParticleProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 1000); // Reset animation state after 1 second
  };

  return (
    <div
      onClick={handleClick}
      className={`absolute cursor-pointer select-none active:scale-95 pointer-events-auto transition-all duration-500 ${className} ${
        clicked
          ? "scale-[1.6] rotate-[360deg] opacity-100 z-30 filter brightness-150"
          : `${colorClass}/35 hover:scale-115 hover:opacity-90 hover:brightness-125 z-10`
      }`}
      style={{
        textShadow: clicked ? `0 0 20px ${glowColor}` : undefined,
        filter: clicked ? `drop-shadow(0 0 12px ${glowColor}) brightness(1.5)` : undefined,
        transition: clicked
          ? "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s, filter 0.3s"
          : "transform 0.5s ease, opacity 0.3s, filter 0.3s"
      }}
    >
      {children}
    </div>
  );
}
