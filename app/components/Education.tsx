"use client";

import React from "react";
import { GraduationCap, Calendar, BookOpen, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const educationTimeline = [
  {
    year: "2024 — Present",
    title: "BSc (Hons) Computer Science",
    institution: "IIT Sri Lanka / University of Westminster",
    description: "Studying enterprise application design, database architectures, algorithmic efficiency, and distributed systems. Built strong foundations in mathematics, algorithmic problem solving, and object-oriented concepts.",
    highlights: [
      "Enterprise Application Development (Java / Spring Boot)",
      "Database Systems & Design Optimization (SQL & MongoDB)",
      "Object-Oriented Programming & Patterns",
      "Agile Project Delivery & SCRUM Collaborations",
      "Programming Principles (Java & Python)",
      "Computer Systems & Architecture Essentials"
    ],
    status: "In Progress"
  },
  {
    year: "Secondary School",
    title: "GCE Advanced Level — Science Stream",
    institution: "Visakha Vidyalaya",
    description: "Completed GCE Advanced Level examination in the Science stream, building a strong foundation in analytical thinking and scientific principles.",
    highlights: [
      "Mathematics & Combined Mathematics",
      "Physics & Chemistry"
    ],
    status: "Completed"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-bg-space/30 dot-bg">
      {/* Background glow orb */}
      <div className="absolute top-1/4 right-10 w-[250px] h-[250px] rounded-full bg-brand-violet/5 blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-purple mb-2">
              Background
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Education & Academic Track
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-violet to-brand-purple mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        {/* Timeline Path */}
        <div className="relative border-l-2 border-white/5 pl-8 sm:pl-12 space-y-12 ml-4">
          {educationTimeline.map((item, idx) => (
            <ScrollReveal
              key={idx}
              direction="right"
              delay={idx * 150}
              className="relative"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[45px] sm:-left-[61px] top-1.5 w-8 h-8 rounded-full bg-bg-space border border-brand-purple/30 flex items-center justify-center text-brand-purple shadow-md shadow-brand-purple/10">
                <GraduationCap className="w-4 h-4" />
              </div>

              {/* Card Container */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl relative group overflow-hidden hover:border-brand-purple/25 transition-colors duration-300">
                {/* Glowing edge bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-brand-violet to-brand-purple transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-lavender bg-brand-purple/5 px-3 py-1 rounded-full border border-brand-purple/10">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.year}</span>
                  </div>
                  
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                    item.status.includes("Completed")
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-brand-violet/10 text-brand-lavender border border-brand-violet/25 animate-pulse"
                  }`}>
                    {item.status}
                  </span>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-sm font-semibold text-gray-300 mb-4">
                  {item.institution}
                </p>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Course Highlights */}
                <div>
                  <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-brand-purple" />
                    Core Curricular Modules
                  </h5>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {item.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-brand-purple shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
