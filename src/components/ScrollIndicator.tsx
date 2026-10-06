import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NAVIGATION_SECTIONS, NavSection } from '../data/navigationSections';

export const ScrollIndicator: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(NAVIGATION_SECTIONS[0].id);
  const [hoveredSectionId, setHoveredSectionId] = useState<string | null>(null);
  const rafRef = useRef<number | null>(null);

  // Exact section detection based on viewport focal line and bounding rects
  const calculateActiveSection = useCallback(() => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Edge case 1: Topmost scroll position
    if (scrollY < 100) {
      return NAVIGATION_SECTIONS[0].id;
    }

    // Edge case 2: Near bottom of page (Contact & Footer)
    if (windowHeight + scrollY >= documentHeight - 100) {
      return NAVIGATION_SECTIONS[NAVIGATION_SECTIONS.length - 1].id;
    }

    // Focal detection line: ~40% down the viewport (where user eyes naturally focus)
    const focalY = windowHeight * 0.40;

    // Direct search: Check which section bounds contain the focal line
    for (let i = 0; i < NAVIGATION_SECTIONS.length; i++) {
      const sectionEl = document.getElementById(NAVIGATION_SECTIONS[i].id);
      if (!sectionEl) continue;

      const rect = sectionEl.getBoundingClientRect();
      if (rect.top <= focalY && rect.bottom > focalY) {
        return NAVIGATION_SECTIONS[i].id;
      }
    }

    // Fallback: Find section whose center is closest to focal line
    let closestId = NAVIGATION_SECTIONS[0].id;
    let minDistance = Infinity;

    for (let i = 0; i < NAVIGATION_SECTIONS.length; i++) {
      const sectionEl = document.getElementById(NAVIGATION_SECTIONS[i].id);
      if (!sectionEl) continue;

      const rect = sectionEl.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const dist = Math.abs(sectionCenter - focalY);

      if (dist < minDistance) {
        minDistance = dist;
        closestId = NAVIGATION_SECTIONS[i].id;
      }
    }

    return closestId;
  }, []);

  useEffect(() => {
    const handleScrollOrResize = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(() => {
        const currentActive = calculateActiveSection();
        setActiveSectionId((prev) => (prev !== currentActive ? currentActive : prev));
      });
    };

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });
    
    // Initial evaluation
    handleScrollOrResize();

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [calculateActiveSection]);

  const activeIndex = NAVIGATION_SECTIONS.findIndex((s) => s.id === activeSectionId);
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
  const progressPercent = (safeActiveIndex / (NAVIGATION_SECTIONS.length - 1)) * 100;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav
      aria-label="Cây điều hướng tiến trình đọc"
      className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center py-4 px-2 rounded-full bg-[#FAF3E3]/85 backdrop-blur-sm border border-[#292820]/15 shadow-md select-none"
    >
      {/* Background Track Line (Top dot to bottom dot) */}
      <div className="absolute top-5 bottom-5 w-[2px] bg-[#292820]/15 -z-10 rounded-full" />

      {/* Dynamic Active Progress Fill Line */}
      <div
        className="absolute top-5 w-[2px] bg-gradient-to-b from-[#A63A2B] via-[#D5A62E] to-[#A63A2B] -z-10 rounded-full transition-all duration-300 ease-out"
        style={{
          height: `calc(${progressPercent}% * ((100% - 40px) / 100))`,
        }}
      />

      {/* Chapters / Sections List */}
      <div className="flex flex-col items-center gap-2.5">
        {NAVIGATION_SECTIONS.map((section, idx) => {
          const isActive = activeSectionId === section.id;
          const isHovered = hoveredSectionId === section.id;

          return (
            <div
              key={section.id}
              className="relative flex items-center justify-center group"
              onMouseEnter={() => setHoveredSectionId(section.id)}
              onMouseLeave={() => setHoveredSectionId(null)}
            >
              {/* Floating Tooltip Label on Left */}
              <AnimatePresence>
                {(isHovered || isActive) && (
                  <motion.div
                    initial={{ opacity: 0, x: 8, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 6, scale: 0.95 }}
                    transition={{ duration: 0.16, ease: 'easeOut' }}
                    className={`absolute right-8 px-2.5 py-1 rounded-sm text-xs font-semibold whitespace-nowrap pointer-events-none shadow-md flex items-center gap-1.5 z-20 ${
                      isActive
                        ? 'bg-[#A63A2B] text-[#FAF3E3] border border-[#D5A62E]/40'
                        : 'bg-[#292820] text-[#FAF3E3] border border-[#FAF3E3]/15'
                    }`}
                  >
                    <span className="font-mono text-[10px] font-bold text-[#D5A62E]">
                      {section.number}
                    </span>
                    <span className="text-[11px] tracking-wide">{section.label}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Dot Button */}
              <button
                onClick={() => scrollToSection(section.id)}
                aria-label={`Cuộn đến phần ${section.number}: ${section.label} - ${section.title}`}
                title={`${section.number}. ${section.label}`}
                className={`w-3 h-3 rounded-full flex items-center justify-center transition-all duration-250 cursor-pointer ${
                  isActive
                    ? 'bg-[#A63A2B] scale-125 ring-2 ring-[#D5A62E] shadow-xs'
                    : 'bg-[#FAF3E3] border border-[#292820]/35 hover:border-[#A63A2B] hover:scale-115 hover:bg-[#FAF3E3]'
                }`}
              >
                {isActive && (
                  <div className="w-1 h-1 rounded-full bg-[#FAF3E3]" />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
};
