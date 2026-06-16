"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the middle of the screen
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Dispatch events to control the Developer Passport flip state
    if (href === "#contact") {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("trigger-contact-flip"));
      }, 100);
    } else if (href === "#about") {
      window.dispatchEvent(new CustomEvent("trigger-about-reset"));
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-bg-space/85 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="flex items-center gap-2 font-mono text-xl font-bold tracking-tight text-white group"
        >
          <Code2 className="w-6 h-6 text-brand-purple group-hover:rotate-12 transition-transform duration-300" />
          <span>
            yehara<span className="text-brand-purple">.online</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive
                    ? "text-white bg-gradient-to-r from-brand-violet to-brand-purple shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="px-6 py-2.5 rounded-full text-sm font-medium text-white border border-white/10 hover:border-brand-purple/50 hover:shadow-[0_0_15px_rgba(181,95,230,0.3)] transition-all duration-300 bg-white/5"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed inset-0 top-[73px] z-40 bg-bg-space/95 backdrop-blur-lg border-t border-white/5 transition-all duration-300 md:hidden flex flex-col justify-start p-8 gap-6 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-xl font-semibold tracking-wide py-2 transition-all duration-300 ${
                isActive ? "text-brand-purple pl-2 border-l-2 border-brand-purple" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          );
        })}
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "#contact")}
          className="mt-4 w-full py-3 text-center rounded-xl font-medium text-white bg-gradient-to-r from-brand-violet to-brand-purple shadow-lg shadow-brand-violet/20"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
