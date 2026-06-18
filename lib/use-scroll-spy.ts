"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollSpy(sectionHrefs: string[], offset = 200) {
  const [activeSection, setActiveSection] = useState(
    sectionHrefs[0]?.replace("#", "") ?? "home"
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);

        let current = sectionHrefs[0]?.replace("#", "") ?? "home";
        for (const href of sectionHrefs) {
          const id = href.replace("#", "");
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= offset && rect.bottom >= offset) {
              current = id;
              break;
            }
          }
        }
        setActiveSection(current);
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionHrefs, offset]);

  return { activeSection, isScrolled };
}
