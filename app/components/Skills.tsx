"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import { skillCategories } from "@/lib/data/personal";

export default function Skills() {
  return (
    <section id="skills" className="section-shell section-y relative overflow-hidden dot-bg">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-brand-purple/6 blur-[140px] pointer-events-none" />

      <div className="container-site relative z-10">
        <SectionHeader
          label="Capabilities"
          title="Technical Stack & Skillsets"
          description="Technologies and tools I use to build scalable, production-ready software."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <ScrollReveal key={category.title} direction="up" delay={catIdx * 80}>
                <div className="card-premium rounded-2xl p-5 sm:p-6 h-full">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg`}
                      >
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-white truncate">
                          {category.title}
                        </h3>
                        <p className="text-[11px] text-muted font-mono mt-0.5 truncate">
                          {category.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-brand-lavender bg-brand-purple/10 px-2 py-1 rounded-lg border border-brand-purple/20 shrink-0">
                      {category.skills.length}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg text-xs font-mono text-body bg-white/[0.04] border border-white/[0.06] hover:border-brand-purple/40 hover:text-white transition-interactive"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
