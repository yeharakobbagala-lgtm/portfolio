"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personal } from "@/lib/data/personal";
import { scrollToSection } from "@/lib/scroll-to-section";
import { useScrollSpy } from "@/lib/use-scroll-spy";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { activeSection, isScrolled } = useScrollSpy(
    navLinks.map((link) => link.href)
  );

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4" aria-label="Main navigation">
      <div
        className={`container-site rounded-2xl transition-interactive ${
          isScrolled ? "glass-panel py-3 shadow-[0_8px_40px_rgba(0,0,0,0.45)]" : "py-2 bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center relative">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-3 font-bold text-white group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-violet to-brand-purple flex items-center justify-center text-sm font-bold shadow-lg shadow-brand-violet/30 group-hover:scale-105 transition-interactive">
              Y
            </div>
            <span className="text-base sm:text-lg hidden sm:block">
              {personal.identity.firstName.toLowerCase()}
              <span className="text-brand-purple">.online</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-interactive ${
                    isActive
                      ? "text-white bg-gradient-to-r from-brand-violet to-brand-purple shadow-md"
                      : "text-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden md:inline-flex btn-primary !py-2 !px-5 !text-sm"
          >
            Hire Me
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-muted hover:text-white hover:bg-white/5 transition-interactive"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-x-4 top-[88px] z-40 glass-panel rounded-2xl p-6 flex flex-col gap-3 transition-interactive ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-lg font-medium py-2.5 px-3 rounded-xl transition-interactive ${
                isActive ? "text-white bg-brand-purple/20" : "text-muted hover:text-white"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
