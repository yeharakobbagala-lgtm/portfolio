"use client";

import React, { useMemo } from "react";
import { generateStarDots } from "@/lib/data/generate-particles";
import { getDriftClass } from "@/lib/data/personal";

export default function Starfield() {
  const stars = useMemo(() => generateStarDots(80), []);

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ contain: "strict" }}>
      {stars.map((star) => (
        <span
          key={star.id}
          className={`absolute rounded-full bg-white animate-twinkle ${getDriftClass(star.direction, star.speed)}`}
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
