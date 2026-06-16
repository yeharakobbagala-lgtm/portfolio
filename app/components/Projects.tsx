"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Sparkles, AlertCircle, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projectsData = [
  {
    id: "safepaws",
    name: "SafePaws",
    badge: "Full-Stack Ecosystem",
    description: "A comprehensive animal welfare and veterinary search platform, integrating mobile clients, admin portals, and scalable cloud APIs.",
    tech: ["FastAPI", "React Native", "React", "MongoDB", "TypeScript"],
    features: [
      "Pet adoption matchmaking engine with criteria filtering",
      "Geographic veterinary search and live tracking using map clusters",
      "Real-time donation portal with secure ledger logging",
      "Digital animal health cards & vaccination records tracking"
    ],
    challenges: "Solved real-time map clustering latencies in React Native by optimizing spatial MongoDB database indexes. Configured secure, fine-grained CORS rules and JWT-based authentication for administrative dashboard users.",
    github: "https://github.com/yeharakobbagala-lgtm/safe-paws-backend",
    demo: "",
    mockup: "/mockups/safepaws_orange.png",
    status: "Completed"
  },
  {
    id: "infinitytask",
    name: "InfinityTask",
    badge: "Productivity & Core API",
    description: "Modern high-performance productivity planner showcasing complex database queries, timer syncing, and clean analytics pipelines.",
    tech: ["Spring Boot", "JPA / Hibernate", "PostgreSQL", "React", "Tailwind"],
    features: [
      "Drag-and-drop interactive Kanban task board with custom workflows",
      "Synchronized Pomodoro focus timer with automated pause/resume tracking",
      "Detailed productivity analytics displaying weekly execution metrics",
      "JWT-based role authentication and secure user access management"
    ],
    challenges: "Prevented transaction deadlocks and sync lags under heavy database load by setting up Spring Boot JPA Level 2 caching. Solved UI jitter during card dragging by implementing local optimistic state updates.",
    github: "https://github.com/yeharakobbagala-lgtm/todo-app-api",
    demo: "",
    mockup: "/mockups/infinitytask.png",
    status: "Completed"
  },
  {
    id: "aeroweather",
    name: "AeroWeather",
    badge: "Frontend Weather Client",
    description: "Responsive web weather tool displaying active forecasts with highly visual glassmorphic assets and custom caching layers.",
    tech: ["React", "CSS Glassmorphic", "OpenWeather API", "JavaScript"],
    features: [
      "Real-time atmospheric forecast metrics search by city and geographic coordinates",
      "Smart theme overlays that modify UI palette based on local temperature curves",
      "Custom sliding window cache for weather data to prevent excessive external API calls",
      "Robust offline mode utilizing localStorage fallbacks during network drops"
    ],
    challenges: "Addressed API rate limit exceptions by building a React custom hook cache layer. Designed responsive glassmorphic cards that preserve high contrast readability on both desktop and mobile panels.",
    github: "https://github.com/yeharakobbagala-lgtm/weather-app",
    demo: "",
    mockup: "/mockups/aeroweather.png",
    status: "Completed"
  },
  {
    id: "leaflogic",
    name: "LeafLogic AI 🌱",
    badge: "Machine Learning & Agri",
    description: "Advanced intelligence system designed for crop health surveillance and computer-vision-based foliage classification.",
    tech: ["FastAPI", "Python", "TensorFlow", "React", "Docker"],
    features: [
      "Image upload processing interface for crop foliage diagnostics",
      "Convolutional Neural Network (CNN) classifying leaf disease vectors",
      "Interactive crop health dashboards charting local seasonal alerts",
      "Diagnostic fallback guidelines when detection confidence falls below threshold"
    ],
    challenges: "Reduced model execution latencies on client uploads by converting Python pipelines to run inference on lightweight ONNX runtimes. Built structural classification pipelines that fail gracefully on blurry images.",
    github: "",
    demo: "",
    mockup: "/mockups/leaflogic.png",
    status: "In Development"
  }
];

export default function Projects() {
  // Store active tab for each project: 'overview' or 'technical'
  const [activeTabs, setActiveTabs] = useState<Record<string, "overview" | "technical">>({
    safepaws: "overview",
    infinitytask: "overview",
    aeroweather: "overview",
    leaflogic: "overview"
  });

  const toggleTab = (projectId: string, tab: "overview" | "technical") => {
    setActiveTabs((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full bg-brand-violet/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-purple mb-2">
              My Portfolio
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Featured Software Projects
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-violet to-brand-purple mx-auto mt-4 rounded-full" />
            <p className="text-gray-400 max-w-xl mx-auto mt-4 text-sm sm:text-base">
              A comprehensive showcase of full-stack ecosystems, core APIs, and machine learning platforms built using modern architectures.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => {
            const currentTab = activeTabs[project.id] || "overview";
            return (
              <ScrollReveal
                key={project.id}
                direction="up"
                delay={idx * 150}
              >
                <div className="glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 hover:shadow-2xl hover:shadow-brand-violet/5 transition-all duration-300 flex flex-col justify-between h-full group">
                  
                  {/* Top Image Showcase */}
                  <div className="relative h-48 sm:h-64 w-full overflow-hidden bg-slate-950">
                    <Image
                      src={project.mockup}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500 opacity-90"
                      sizes="(max-w-768px) 100vw, 50vw"
                    />
                    
                    {/* Dark gradient mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-space via-transparent to-transparent" />
                    
                    {/* Badges on mockup */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 text-xs font-semibold bg-bg-space/80 backdrop-blur-md rounded-full border border-white/10 text-gray-200">
                        {project.badge}
                      </span>
                      {project.status === "In Development" ? (
                        <span className="px-3 py-1 text-xs font-semibold bg-amber-500/10 backdrop-blur-md rounded-full border border-amber-500/20 text-amber-400 flex items-center gap-1 animate-pulse">
                          <AlertCircle className="w-3 h-3" />
                          {project.status}
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/10 backdrop-blur-md rounded-full border border-emerald-500/20 text-emerald-400 flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex-grow flex flex-col">
                    {/* Project Header */}
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-2xl font-bold text-white tracking-tight">
                        {project.name}
                      </h4>
                      
                      {/* Nav Tabs inside card */}
                      <div className="flex bg-white/5 rounded-lg p-0.5 border border-white/5 text-xs font-semibold">
                        <button
                          onClick={() => toggleTab(project.id, "overview")}
                          className={`px-3 py-1.5 rounded-md transition-all duration-200 ${
                            currentTab === "overview"
                              ? "bg-gradient-to-r from-brand-violet to-brand-purple text-white shadow-sm"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          Overview
                        </button>
                        <button
                          onClick={() => toggleTab(project.id, "technical")}
                          className={`px-3 py-1.5 rounded-md transition-all duration-200 ${
                            currentTab === "technical"
                              ? "bg-gradient-to-r from-brand-violet to-brand-purple text-white shadow-sm"
                              : "text-gray-400 hover:text-white"
                          }`}
                        >
                          Details
                        </button>
                      </div>
                    </div>

                    {/* Tab Switch Contents */}
                    <div className="flex-grow">
                      {currentTab === "overview" ? (
                        <div className="space-y-6">
                          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                            {project.description}
                          </p>
                          
                          {/* Tech badges */}
                          <div>
                            <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2 flex items-center gap-1">
                              <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
                              Stack Integrated
                            </h5>
                            <div className="flex flex-wrap gap-1.5">
                              {project.tech.map((t) => (
                                <span
                                  key={t}
                                  className="px-2.5 py-1 text-xs font-mono text-gray-300 bg-white/5 border border-white/5 rounded-md"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-6 text-sm">
                          {/* Key Features */}
                          <div>
                            <h5 className="text-xs font-semibold text-brand-purple uppercase tracking-widest mb-2.5">
                              Key Capabilities
                            </h5>
                            <ul className="list-disc pl-4 space-y-1.5 text-gray-300">
                              {project.features.map((feat, i) => (
                                <li key={i} className="leading-relaxed">
                                  {feat}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technical Challenges */}
                          <div>
                            <h5 className="text-xs font-semibold text-brand-plum uppercase tracking-widest mb-1.5">
                              Challenges Solved
                            </h5>
                            <p className="text-gray-400 leading-relaxed italic bg-white/5 p-3 rounded-lg border border-white/5">
                              {project.challenges}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="px-6 pb-6 pt-4 border-t border-white/5 flex gap-4">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-grow flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/5 hover:border-brand-purple/30 text-sm font-semibold transition-all duration-300"
                      >
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        Code Repository
                      </a>
                    ) : (
                      <div className="flex-grow flex items-center justify-center gap-2 py-2.5 bg-white/5 text-gray-500 rounded-lg border border-white/5 text-sm font-semibold cursor-not-allowed select-none">
                        Private Repository
                      </div>
                    )}
                    
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 flex items-center justify-center text-brand-purple hover:text-white bg-brand-purple/10 hover:bg-brand-purple rounded-lg border border-brand-purple/20 hover:border-transparent transition-all duration-300"
                        title="Live Demonstration"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : null}
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
