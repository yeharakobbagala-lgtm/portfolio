"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <ScrollReveal direction="up">
      <header className={`mb-12 md:mb-14 ${isCenter ? "text-center" : "text-left"}`}>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-[0.18em] text-brand-lavender bg-brand-purple/10 border border-brand-purple/20 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" aria-hidden="true" />
          {label}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
          {title}
        </h2>
        <div
          className={`w-14 h-1 bg-gradient-to-r from-brand-violet via-brand-purple to-brand-lavender rounded-full mt-4 ${
            isCenter ? "mx-auto" : ""
          }`}
          aria-hidden="true"
        />
        {description && (
          <p
            className={`text-body max-w-2xl mt-4 text-sm sm:text-base ${
              isCenter ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        )}
      </header>
    </ScrollReveal>
  );
}
