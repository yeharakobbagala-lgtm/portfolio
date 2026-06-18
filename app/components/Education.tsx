"use client";

import React from "react";
import { GraduationCap, Calendar, BookOpen, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import { educationTimeline } from "@/lib/data/personal";

export default function Education() {
  return (
    <section id="education" className="section-shell section-y relative overflow-hidden dot-bg">
      <div className="absolute top-1/4 right-10 w-[300px] h-[300px] rounded-full bg-brand-violet/6 blur-[100px] pointer-events-none" />

      <div className="container-site max-w-4xl relative z-10">
        <SectionHeader label="Background" title="Education & Academic Track" />

        <div className="relative border-l border-brand-purple/20 pl-6 sm:pl-10 space-y-8 ml-2">
          {educationTimeline.map((item, idx) => (
            <ScrollReveal key={item.title} direction="right" delay={idx * 100} className="relative">
              <div className="absolute -left-[34px] sm:-left-[50px] top-2 w-9 h-9 rounded-xl bg-gradient-to-br from-brand-violet to-brand-purple flex items-center justify-center text-white shadow-lg shadow-brand-violet/30">
                <GraduationCap className="w-4 h-4" aria-hidden="true" />
              </div>

              <article className="card-premium rounded-2xl p-5 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-lavender bg-brand-purple/10 px-3 py-1.5 rounded-full border border-brand-purple/20">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{item.year}</span>
                  </div>
                  <span
                    className={`badge ${
                      item.status.includes("Completed") ? "badge-completed" : "badge-progress"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm font-semibold text-body mb-3">{item.institution}</p>
                <p className="text-sm sm:text-base text-body mb-5">{item.description}</p>

                <div>
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                    Core Curricular Modules
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-body">
                        <CheckCircle className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
