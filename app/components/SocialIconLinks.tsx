"use client";

import React from "react";
import { socialLinks } from "@/lib/data/personal";

interface SocialIconLinksProps {
  variant?: "compact" | "card";
}

export default function SocialIconLinks({ variant = "compact" }: SocialIconLinksProps) {
  const isCompact = variant === "compact";

  return (
    <div className="flex gap-1.5">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            title={social.name}
            aria-label={social.name}
            className={`w-7.5 h-7.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-muted transition-interactive ${
              isCompact ? social.compactColor : social.color
            }`}
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
}
