"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Sparkles, AlertCircle, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeader from "./SectionHeader";
import { projectsData } from "@/lib/data/personal";

export default function Projects() {
  const [activeTabs, setActiveTabs] = useState<Record<string, "overview" | "technical">>(
    Object.fromEntries(projectsData.map((project) => [project.id, "overview"]))
  );

  const toggleTab = (projectId: string, tab: "overview" | "technical") => {
    setActiveTabs((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className="section-shell section-y relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-[350px] h-[350px] rounded-full bg-brand-violet/6 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[350px] h-[350px] rounded-full bg-brand-purple/6 blur-[130px] pointer-events-none" />

      <div className="container-site relative z-10">
        <SectionHeader
          label="Portfolio"
          title="Featured Software Projects"
          description="Full-stack ecosystems, core APIs, and machine learning platforms built with modern architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projectsData.map((project, idx) => {
            const currentTab = activeTabs[project.id] || "overview";
            return (
              <ScrollReveal key={project.id} direction="up" delay={idx * 100}>
                <article className="card-premium rounded-2xl overflow-hidden flex flex-col h-full group">
                  <div className="relative aspect-video w-full overflow-hidden bg-bg-elevated">
                    <Image
                      src={project.mockup}
                      alt={`${project.name} project preview`}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-interactive opacity-95"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-space/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap gap-2 max-w-[85%]">
                      <span className="badge badge-category">{project.badge}</span>
                      {project.status === "In Development" ? (
                        <span className="badge badge-progress">
                          <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
                          {project.status}
                        </span>
                      ) : (
                        <span className="badge badge-completed">
                          <Award className="w-3 h-3 shrink-0" aria-hidden="true" />
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-grow flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {project.name}
                      </h3>
                      <div
                        className="flex self-start sm:self-auto bg-white/5 rounded-lg p-0.5 border border-white/5 text-xs font-semibold"
                        role="tablist"
                        aria-label={`${project.name} details`}
                      >
                        <button
                          role="tab"
                          aria-selected={currentTab === "overview"}
                          onClick={() => toggleTab(project.id, "overview")}
                          className={`px-3 py-1.5 rounded-md transition-interactive ${
                            currentTab === "overview"
                              ? "bg-gradient-to-r from-brand-violet to-brand-purple text-white"
                              : "text-muted hover:text-white"
                          }`}
                        >
                          Overview
                        </button>
                        <button
                          role="tab"
                          aria-selected={currentTab === "technical"}
                          onClick={() => toggleTab(project.id, "technical")}
                          className={`px-3 py-1.5 rounded-md transition-interactive ${
                            currentTab === "technical"
                              ? "bg-gradient-to-r from-brand-violet to-brand-purple text-white"
                              : "text-muted hover:text-white"
                          }`}
                        >
                          Details
                        </button>
                      </div>
                    </div>

                    <div className="flex-grow">
                      {currentTab === "overview" ? (
                        <div className="space-y-5">
                          <p className="text-body text-sm sm:text-base">{project.description}</p>
                          <div>
                            <h4 className="text-xs font-semibold text-muted uppercase tracking-widest mb-2 flex items-center gap-1">
                              <Sparkles className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                              Stack Integrated
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {project.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-1 text-xs font-mono text-body bg-white/5 border border-white/5 rounded-md"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-5 text-sm">
                          <div>
                            <h4 className="text-xs font-semibold text-brand-purple uppercase tracking-widest mb-2">
                              Key Capabilities
                            </h4>
                            <ul className="list-disc pl-4 space-y-1.5 text-body">
                              {project.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold text-brand-lavender uppercase tracking-widest mb-1.5">
                              Challenges Solved
                            </h4>
                            <p className="text-body italic bg-white/5 p-3 rounded-lg border border-white/5">
                              {project.challenges}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-3 border-t border-white/5 flex flex-col sm:flex-row gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/5 hover:border-brand-purple/30 text-sm font-semibold transition-interactive"
                      >
                        Code Repository
                      </a>
                    ) : (
                      <div className="flex-1 flex items-center justify-center py-2.5 bg-white/5 text-subtle rounded-lg border border-white/5 text-sm font-semibold cursor-not-allowed">
                        Private Repository
                      </div>
                    )}

                    {project.backendRepo ? (
                      <a
                        href={project.backendRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/5 hover:border-brand-purple/30 text-sm font-semibold transition-interactive"
                      >
                        Backend Repo
                      </a>
                    ) : null}

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm:w-auto w-full flex items-center justify-center gap-2 px-4 py-2.5 text-brand-purple hover:text-white bg-brand-purple/10 hover:bg-brand-purple rounded-lg border border-brand-purple/20 transition-interactive"
                        title="Live Demonstration"
                      >
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        <span className="sm:hidden text-sm font-semibold">Live Demo</span>
                      </a>
                    ) : null}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
