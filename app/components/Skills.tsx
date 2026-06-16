"use client";

import React from "react";
import { Monitor, Server, Database, Settings, Brain } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Frontend Development",
    subtitle: "Web UIs & Client-side",
    icon: Monitor,
    color: "from-brand-violet to-brand-purple",
    skills: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend Development",
    subtitle: "APIs & Core Architectures",
    icon: Server,
    color: "from-brand-violet to-brand-plum",
    skills: ["Java", "Python", "Spring Boot", "FastAPI", "REST APIs"],
  },
  {
    title: "Database Management",
    subtitle: "Storage, Querying & NoSQL",
    icon: Database,
    color: "from-brand-purple to-brand-lavender",
    skills: ["SQL", "MongoDB"],
  },
  {
    title: "Tools & DevOps",
    subtitle: "Versioning, IDEs & Builds",
    icon: Settings,
    color: "from-brand-plum to-brand-lavender",
    skills: ["Git & GitHub", "IntelliJ & VS Code", "Maven & Gradle", "Postman"],
  },
  {
    title: "AI & Data",
    subtitle: "ML, agents & data",
    icon: Brain,
    color: "from-brand-purple to-brand-violet",
    skills: ["LangChain", "Scikit-learn", "Pandas", "Data Visualization"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-bg-space/40 dot-bg">
      {/* Glow effect overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-purple mb-2">
              Capabilities
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Technical Stack & Skillsets
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-violet to-brand-purple mx-auto mt-4 rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <ScrollReveal
                key={catIdx}
                direction="up"
                delay={catIdx * 100}
              >
                <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-white/10 hover:shadow-2xl hover:shadow-brand-violet/5 transition-all duration-300 h-full flex flex-col justify-between relative group">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-white/5">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-md`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                            {category.title}
                          </h4>
                          <p className="text-[10px] text-gray-500 font-mono mt-0.5">
                            {category.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      {/* Count Badge */}
                      <span className="w-6 h-6 rounded-lg bg-white/5 flex items-center justify-center text-[10px] font-mono text-gray-400 border border-white/5 shrink-0">
                        {category.skills.length}
                      </span>
                    </div>

                    {/* Skill Badges Body */}
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-3.5 py-2 rounded-xl text-xs font-mono bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-brand-purple/50 transition-all duration-300 cursor-default select-none hover:shadow-[0_0_10px_rgba(181,95,230,0.15)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
