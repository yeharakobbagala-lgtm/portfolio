import React from "react";
import {
  Award,
  Brain,
  Code,
  Database,
  Lightbulb,
  Mail,
  Monitor,
  Server,
  Settings,
} from "lucide-react";
import { generateSiteParticles } from "./generate-particles";

export type ParticleIcon =
  | "sparkle"
  | "plus"
  | "circle-dashed"
  | "triangle"
  | "square-dashed"
  | "star"
  | "star-small"
  | "dot";

export type FloatDirection = "up" | "down";
export type FloatSpeed = "slow" | "medium";

export interface BackgroundParticle {
  className: string;
  colorClass: string;
  glowColor: string;
  icon: ParticleIcon;
  floatDirection: FloatDirection;
  floatSpeed: FloatSpeed;
  style?: React.CSSProperties;
  twinkle?: boolean;
}

export interface Project {
  id: string;
  name: string;
  badge: string;
  description: string;
  tech: string[];
  features: string[];
  challenges: string;
  github: string;
  backendRepo?: string;
  demo: string;
  mockup: string;
  status: "Completed" | "In Development";
}

export const personal = {
  identity: {
    fullName: "Yehara Kobbegala",
    firstName: "Yehara",
    domain: "yehara.online",
    profileImage: "/profile.png",
    classification: "Computer Science Undergraduate",
    affiliation: "IIT Sri Lanka / Westminster",
    affiliationFull: "IIT Sri Lanka (affiliated with the University of Westminster)",
    availability: "Open for Internship",
    roles: ["Full-Stack Developer", "CS Undergraduate", "AI Builder"],
  },

  contact: {
    email: "yehara.kobbagala@gmail.com",
  },

  socialLinks: [
    {
      name: "Email",
      value: "yehara.kobbagala@gmail.com",
      href: "mailto:yehara.kobbagala@gmail.com",
      icon: Mail,
      color: "group-hover:text-brand-purple group-hover:bg-brand-purple/10",
      compactColor: "hover:text-brand-purple hover:bg-brand-purple/10",
    },
    {
      name: "GitHub",
      value: "yeharakobbagala-lgtm",
      href: "https://github.com/yeharakobbagala-lgtm",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
      color: "group-hover:text-brand-violet group-hover:bg-brand-violet/10",
      compactColor: "hover:text-brand-violet hover:bg-brand-violet/10",
    },
    {
      name: "LinkedIn",
      value: "yeharakobbagala",
      href: "https://www.linkedin.com/in/yeharakobbagala/",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      color: "group-hover:text-brand-lavender group-hover:bg-brand-lavender/10",
      compactColor: "hover:text-brand-lavender hover:bg-brand-lavender/10",
    },
  ],

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  about: {
    headline: "Bridging theory and execution to build impact-driven solutions.",
    paragraphs: [
      "As a second-year Computer Science undergraduate at IIT Sri Lanka (affiliated with the University of Westminster), I specialize in full-stack development, backend architectures, and smart AI integrations. I focus on solving real-world challenges through robust backend logic and fluid frontend user interfaces.",
      "I enjoy engineering modular software architectures, optimizing database configurations, and setting up automated intelligence flows. My approach blends academic rigour with pragmatic industry practices.",
    ],
    principles: [
      {
        icon: Code,
        title: "Software Craftsmanship",
        desc: "Clean, maintainable, and well-documented code that scales.",
      },
      {
        icon: Lightbulb,
        title: "Solution-Oriented",
        desc: "Bridging theoretical concepts and real-world execution.",
      },
      {
        icon: Award,
        title: "Continuous Growth",
        desc: "Constantly acquiring expertise in modern framework stacks.",
      },
    ],
    activeStack: ["Java", "Python", "Spring Boot", "FastAPI", "Next.js", "TS", "MongoDB"],
  },

  skills: [
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
  ],

  education: [
    {
      year: "2024 — Present",
      title: "BSc (Hons) Computer Science",
      institution: "IIT Sri Lanka / University of Westminster",
      description:
        "Studying enterprise application design, database architectures, algorithmic efficiency, and distributed systems. Built strong foundations in mathematics, algorithmic problem solving, and object-oriented concepts.",
      highlights: [
        "Enterprise Application Development (Java / Spring Boot)",
        "Database Systems & Design Optimization (SQL & MongoDB)",
        "Object-Oriented Programming & Patterns",
        "Agile Project Delivery & SCRUM Collaborations",
        "Programming Principles (Java & Python)",
        "Computer Systems & Architecture Essentials",
      ],
      status: "In Progress",
    },
    {
      year: "Secondary School",
      title: "GCE Advanced Level — Science Stream",
      institution: "Visakha Vidyalaya",
      description:
        "Completed GCE Advanced Level examination in the Science stream, building a strong foundation in analytical thinking and scientific principles.",
      highlights: ["Mathematics & Combined Mathematics", "Physics & Chemistry"],
      status: "Completed",
    },
  ],

  projects: [
    {
      id: "safepaws",
      name: "SafePaws",
      badge: "Full-Stack Ecosystem",
      description:
        "A comprehensive animal welfare and veterinary search platform, integrating mobile clients, admin portals, and scalable cloud APIs.",
      tech: ["FastAPI", "React Native", "React", "MongoDB", "TypeScript"],
      features: [
        "Pet adoption matchmaking engine with criteria filtering",
        "Geographic veterinary search and live tracking using map clusters",
        "Real-time donation portal with secure ledger logging",
        "Digital animal health cards & vaccination records tracking",
      ],
      challenges:
        "Solved real-time map clustering latencies in React Native by optimizing spatial MongoDB database indexes. Configured secure, fine-grained CORS rules and JWT-based authentication for administrative dashboard users.",
      github: "https://github.com/Sunx91/safe-paws-frontend",
      backendRepo: "https://github.com/Sunx91/safe-paws-backend",
      demo: "https://safepaws.site/",
      mockup: "/mockups/safepaws_orange.png",
      status: "Completed",
    },
    {
      id: "infinitytask",
      name: "InfinityTask",
      badge: "Productivity & Core API",
      description:
        "Modern high-performance productivity planner showcasing complex database queries, timer syncing, and clean analytics pipelines.",
      tech: ["Spring Boot", "JPA / Hibernate", "PostgreSQL", "React", "Tailwind"],
      features: [
        "Drag-and-drop interactive Kanban task board with custom workflows",
        "Synchronized Pomodoro focus timer with automated pause/resume tracking",
        "Detailed productivity analytics displaying weekly execution metrics",
        "JWT-based role authentication and secure user access management",
      ],
      challenges:
        "Prevented transaction deadlocks and sync lags under heavy database load by setting up Spring Boot JPA Level 2 caching. Solved UI jitter during card dragging by implementing local optimistic state updates.",
      github: "https://github.com/yeharakobbagala-lgtm/todo-app-api",
      demo: "",
      mockup: "/mockups/infinitytask.png",
      status: "Completed",
    },
    {
      id: "aeroweather",
      name: "AeroWeather",
      badge: "Frontend Weather Client",
      description:
        "Responsive web weather tool displaying active forecasts with highly visual glassmorphic assets and custom caching layers.",
      tech: ["React", "CSS Glassmorphic", "OpenWeather API", "JavaScript"],
      features: [
        "Real-time atmospheric forecast metrics search by city and geographic coordinates",
        "Smart theme overlays that modify UI palette based on local temperature curves",
        "Custom sliding window cache for weather data to prevent excessive external API calls",
        "Robust offline mode utilizing localStorage fallbacks during network drops",
      ],
      challenges:
        "Addressed API rate limit exceptions by building a React custom hook cache layer. Designed responsive glassmorphic cards that preserve high contrast readability on both desktop and mobile panels.",
      github: "https://github.com/yeharakobbagala-lgtm/weather-app",
      demo: "",
      mockup: "/mockups/aeroweather.png",
      status: "Completed",
    },
    {
      id: "leaflogic",
      name: "LeafLogic AI 🌱",
      badge: "Machine Learning & Agri",
      description:
        "Advanced intelligence system designed for crop health surveillance and computer-vision-based foliage classification.",
      tech: ["FastAPI", "Python", "TensorFlow", "React", "Docker"],
      features: [
        "Image upload processing interface for crop foliage diagnostics",
        "Convolutional Neural Network (CNN) classifying leaf disease vectors",
        "Interactive crop health dashboards charting local seasonal alerts",
        "Diagnostic fallback guidelines when detection confidence falls below threshold",
      ],
      challenges:
        "Reduced model execution latencies on client uploads by converting Python pipelines to run inference on lightweight ONNX runtimes. Built structural classification pipelines that fail gracefully on blurry images.",
      github: "",
      demo: "",
      mockup: "/mockups/leaflogic.png",
      status: "In Development",
    },
  ] satisfies Project[],

  footer: {
    tagline: "Crafting robust enterprise platforms & client-side software.",
    builtWith: "Built with Next.js 16.3, Tailwind CSS v4 & custom animations.",
  },

  seo: {
    title: "Yehara Kobbegala | Full-Stack Developer & Computer Science Undergraduate",
    description:
      "Professional developer portfolio of Yehara Kobbegala. Specialized in scalable full-stack applications, enterprise APIs (Spring Boot, FastAPI), and AI-driven agricultural solutions.",
    keywords: [
      "Yehara Kobbegala",
      "Computer Science Undergraduate Portfolio",
      "Full-Stack Developer",
      "IIT Sri Lanka Student",
      "Spring Boot",
      "FastAPI",
      "React Developer",
      "AI Developer",
    ],
  },

  backgroundParticles: [] satisfies BackgroundParticle[],
} as const;

const particleIcons: Record<ParticleIcon, React.ReactNode> = {
  sparkle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 3c0 4.5 3.5 8 8 8m-8-8c0 4.5-3.5 8-8 8m8 8c0-4.5 3.5-8 8-8m-8 8c0-4.5-3.5-8-8-8" />
    </svg>
  ),
  plus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3v18M3 12h18" />
    </svg>
  ),
  "circle-dashed": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
    </svg>
  ),
  triangle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 22h20z" />
    </svg>
  ),
  "square-dashed": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" strokeDasharray="4 2" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="0.5">
      <path d="M12 2l2.9 6.9 7.4.6-5.6 4.8 1.7 7.2L12 17.8l-6.4 3.7 1.7-7.2-5.6-4.8 7.4-.6L12 2z" />
    </svg>
  ),
  "star-small": (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  dot: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="5" />
    </svg>
  ),
};

export function renderParticleIcon(icon: ParticleIcon): React.ReactNode {
  return particleIcons[icon];
}

export function getDriftClass(direction: FloatDirection, speed: FloatSpeed): string {
  if (direction === "up") {
    return speed === "slow" ? "animate-drift-up-slow" : "animate-drift-up-medium";
  }
  return speed === "slow" ? "animate-drift-down-slow" : "animate-drift-down-medium";
}

export const CONTACT_EMAIL = personal.contact.email;
export const socialLinks = personal.socialLinks;
export const navLinks = personal.navigation;
export const principles = personal.about.principles;
export const activeStackTags = personal.about.activeStack;
export const skillCategories = personal.skills;
export const educationTimeline = personal.education;
export const projectsData = personal.projects;
export const backgroundParticles: BackgroundParticle[] = generateSiteParticles(56);
