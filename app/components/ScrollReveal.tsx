"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  threshold?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  threshold = 0.1,
  className = "",
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          // Once it reveals, we don't need to observe it anymore
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // triggers slightly before entering viewport
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const directionClass = {
    fade: "reveal-fade",
    up: "reveal-up",
    down: "reveal-down",
    left: "reveal-left",
    right: "reveal-right",
  }[direction];

  return (
    <div
      ref={elementRef}
      className={`reveal-element ${directionClass} ${
        isRevealed ? "active" : ""
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
