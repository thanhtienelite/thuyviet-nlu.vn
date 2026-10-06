import React, { useRef, useState, useEffect, useCallback } from 'react';

export type GlowColorType = 'gold' | 'red' | 'jade' | 'ivory' | 'banana' | 'dark-gold' | 'amber' | 'cyan';

export interface ScrollGlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  cardClassName?: string;
  variant?: 'ivory' | 'white' | 'dark' | 'gold' | 'transparent' | 'card' | 'glass';
  glowColor?: GlowColorType;
  glowSpread?: 'sm' | 'md' | 'lg' | 'hero';
  glowOpacity?: number;
  enableTilt?: boolean;
  enableEdgeLight?: boolean;
  enableTouchFeedback?: boolean;
  enableScrollReveal?: boolean;
  onClick?: () => void;
}

/**
 * Soft, gentle, all-around ambient glow gradients (Tỏa sáng đều quanh 4 phía với màu sắc dịu nhẹ)
 * Crafted for a refined, luxurious, and non-glaring halo aura behind each card/box.
 */
const EVEN_AMBIENT_GLOWS: Record<
  GlowColorType,
  {
    outerAura: string;
    innerGlow: string;
    borderColor: string;
    boxShadow: string;
  }
> = {
  gold: {
    outerAura:
      'radial-gradient(ellipse at center, rgba(213, 166, 46, 0.28) 0%, rgba(255, 225, 135, 0.16) 42%, rgba(213, 166, 46, 0.04) 70%, transparent 80%)',
    innerGlow:
      'radial-gradient(circle at 50% 50%, rgba(255, 235, 160, 0.22) 0%, rgba(213, 166, 46, 0.08) 55%, transparent 75%)',
    borderColor: 'rgba(213, 166, 46, 0.45)',
    boxShadow: '0 8px 24px -4px rgba(213, 166, 46, 0.15), 0 2px 8px -2px rgba(41, 40, 32, 0.06)',
  },
  red: {
    outerAura:
      'radial-gradient(ellipse at center, rgba(166, 58, 43, 0.25) 0%, rgba(220, 105, 90, 0.14) 42%, rgba(166, 58, 43, 0.04) 70%, transparent 80%)',
    innerGlow:
      'radial-gradient(circle at 50% 50%, rgba(240, 135, 120, 0.20) 0%, rgba(166, 58, 43, 0.07) 55%, transparent 75%)',
    borderColor: 'rgba(166, 58, 43, 0.40)',
    boxShadow: '0 8px 24px -4px rgba(166, 58, 43, 0.14), 0 2px 8px -2px rgba(41, 40, 32, 0.06)',
  },
  jade: {
    outerAura:
      'radial-gradient(ellipse at center, rgba(36, 79, 66, 0.28) 0%, rgba(55, 130, 105, 0.16) 42%, rgba(36, 79, 66, 0.04) 70%, transparent 80%)',
    innerGlow:
      'radial-gradient(circle at 50% 50%, rgba(85, 175, 145, 0.22) 0%, rgba(36, 79, 66, 0.08) 55%, transparent 75%)',
    borderColor: 'rgba(36, 79, 66, 0.40)',
    boxShadow: '0 8px 24px -4px rgba(36, 79, 66, 0.15), 0 2px 8px -2px rgba(41, 40, 32, 0.06)',
  },
  banana: {
    outerAura:
      'radial-gradient(ellipse at center, rgba(105, 139, 60, 0.26) 0%, rgba(150, 195, 95, 0.15) 42%, rgba(105, 139, 60, 0.04) 70%, transparent 80%)',
    innerGlow:
      'radial-gradient(circle at 50% 50%, rgba(175, 220, 115, 0.20) 0%, rgba(105, 139, 60, 0.07) 55%, transparent 75%)',
    borderColor: 'rgba(105, 139, 60, 0.40)',
    boxShadow: '0 8px 24px -4px rgba(105, 139, 60, 0.14), 0 2px 8px -2px rgba(41, 40, 32, 0.06)',
  },
  ivory: {
    outerAura:
      'radial-gradient(ellipse at center, rgba(255, 245, 215, 0.50) 0%, rgba(245, 230, 190, 0.26) 42%, rgba(245, 230, 190, 0.06) 70%, transparent 80%)',
    innerGlow:
      'radial-gradient(circle at 50% 50%, rgba(255, 250, 235, 0.40) 0%, rgba(245, 230, 190, 0.15) 55%, transparent 75%)',
    borderColor: 'rgba(213, 166, 46, 0.35)',
    boxShadow: '0 8px 24px -4px rgba(213, 166, 46, 0.12), 0 2px 8px -2px rgba(41, 40, 32, 0.05)',
  },
  'dark-gold': {
    outerAura:
      'radial-gradient(ellipse at center, rgba(213, 166, 46, 0.34) 0%, rgba(255, 220, 120, 0.18) 42%, rgba(213, 166, 46, 0.05) 70%, transparent 80%)',
    innerGlow:
      'radial-gradient(circle at 50% 50%, rgba(255, 230, 140, 0.25) 0%, rgba(213, 166, 46, 0.09) 55%, transparent 75%)',
    borderColor: 'rgba(213, 166, 46, 0.50)',
    boxShadow: '0 8px 26px -4px rgba(213, 166, 46, 0.18), 0 2px 8px -2px rgba(41, 40, 32, 0.08)',
  },
  amber: {
    outerAura:
      'radial-gradient(ellipse at center, rgba(230, 140, 30, 0.26) 0%, rgba(255, 185, 90, 0.15) 42%, rgba(230, 140, 30, 0.04) 70%, transparent 80%)',
    innerGlow:
      'radial-gradient(circle at 50% 50%, rgba(255, 200, 120, 0.20) 0%, rgba(230, 140, 30, 0.07) 55%, transparent 75%)',
    borderColor: 'rgba(230, 140, 30, 0.40)',
    boxShadow: '0 8px 24px -4px rgba(230, 140, 30, 0.14), 0 2px 8px -2px rgba(41, 40, 32, 0.06)',
  },
  cyan: {
    outerAura:
      'radial-gradient(ellipse at center, rgba(40, 160, 150, 0.26) 0%, rgba(95, 205, 195, 0.15) 42%, rgba(40, 160, 150, 0.04) 70%, transparent 80%)',
    innerGlow:
      'radial-gradient(circle at 50% 50%, rgba(135, 235, 225, 0.20) 0%, rgba(40, 160, 150, 0.07) 55%, transparent 75%)',
    borderColor: 'rgba(40, 160, 150, 0.40)',
    boxShadow: '0 8px 24px -4px rgba(40, 160, 150, 0.14), 0 2px 8px -2px rgba(41, 40, 32, 0.06)',
  },
};

const GLOW_SPREAD_SIZES = {
  sm: '-inset-2 sm:-inset-3',
  md: '-inset-3 sm:-inset-5',
  lg: '-inset-5 sm:-inset-7',
  hero: '-inset-6 sm:-inset-9',
};

/**
 * Custom hook to track how close an element is to the center of the viewport.
 * When the element is scrolled into view (around center), focal intensity peaks (1.0).
 * When scrolling past or away from it, it smoothly dims down to 0.
 */
function useScrollFocalGlow(ref: React.RefObject<HTMLDivElement | null>) {
  const [focalFactor, setFocalFactor] = useState(0);

  const calculateFocal = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || 800;

    // Check if element is completely outside viewport
    if (rect.bottom < -60 || rect.top > windowHeight + 60) {
      setFocalFactor(0);
      return;
    }

    const elemCenter = rect.top + rect.height / 2;
    const viewportCenter = windowHeight * 0.52; // Optimal viewing focus zone
    const distanceToCenter = Math.abs(elemCenter - viewportCenter);
    const maxFocalRange = windowHeight * 0.46; // Radius where light illuminates

    if (distanceToCenter >= maxFocalRange) {
      setFocalFactor(0);
    } else {
      // Smooth bell curve transition (cosine easing)
      const normalized = 1 - distanceToCenter / maxFocalRange;
      const smoothIntensity = 0.5 * (1 - Math.cos(normalized * Math.PI));
      setFocalFactor(Number(smoothIntensity.toFixed(3)));
    }
  }, [ref]);

  useEffect(() => {
    let ticking = false;

    const onScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          calculateFocal();
          ticking = false;
        });
        ticking = true;
      }
    };

    calculateFocal();

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, [calculateFocal]);

  return focalFactor;
}

export const InteractiveLightCard: React.FC<ScrollGlowCardProps> = ({
  children,
  className = '',
  cardClassName = '',
  variant = 'ivory',
  glowColor = 'gold',
  glowSpread = 'md',
  glowOpacity = 1,
  enableTilt = true,
  enableEdgeLight = true,
  enableTouchFeedback = true,
  enableScrollReveal = true,
  onClick,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollFocal = useScrollFocalGlow(containerRef);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [touchActive, setTouchActive] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    setMousePos({ x: percentX, y: percentY });

    if (enableTilt && !isTouchDevice && window.innerWidth >= 1024) {
      const rotY = ((x / rect.width) - 0.5) * 2.2;
      const rotX = -((y / rect.height) - 0.5) * 2.2;
      setTilt({ rotateX: rotX, rotateY: rotY });
    }
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!enableTouchFeedback) return;
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
    setTouchActive(true);
  };

  const handlePointerUp = () => {
    if (enableTouchFeedback) {
      setTimeout(() => setTouchActive(false), 250);
    }
  };

  const variantStyles = {
    ivory: 'bg-[#FAF3E3] text-[#292820] border-[#292820]/20 hover:border-[#D5A62E]',
    white: 'bg-white text-[#292820] border-[#292820]/15 hover:border-[#D5A62E]',
    dark: 'bg-[#182C24] text-[#F4E8C8] border-[#D5A62E]/30 hover:border-[#D5A62E]',
    gold: 'bg-[#FAF3E3] text-[#292820] border-2 border-[#D5A62E] hover:border-[#A63A2B]',
    transparent: 'bg-transparent text-inherit border-transparent',
    card: 'bg-[#FAF3E3] text-[#292820] border border-[#292820]/20 hover:border-[#A63A2B]/40 shadow-xs hover:shadow-md',
    glass: 'bg-[#FAF3E3]/95 backdrop-blur-xs text-[#292820] border border-[#292820]/15 hover:border-[#D5A62E]',
  }[variant];

  const ambientGlow = EVEN_AMBIENT_GLOWS[glowColor] || EVEN_AMBIENT_GLOWS.gold;
  const spreadClass = GLOW_SPREAD_SIZES[glowSpread] || GLOW_SPREAD_SIZES.md;

  // Active light brightness: combines scroll focal position + hover bloom
  const activeIntensity = isHovered || touchActive
    ? 1.25 * glowOpacity
    : Math.max(0, scrollFocal * 1.05 * glowOpacity);

  const auraScale = isHovered || touchActive
    ? 1.05
    : 1 + scrollFocal * 0.03;

  return (
    <div
      ref={containerRef}
      className={`relative z-0 group ${className}`}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onClick={onClick}
      {...props}
    >
      {/* 
        ================================================================
        [OMNI-DIRECTIONAL EVEN AMBIENT HALO - HÀO QUANG TỎA ĐỀU CẢ 4 PHÍA]
        ================================================================
      */}
      
      {/* 1. Outer Soft Aura (Quầng sáng mềm tỏa đều toàn bộ box) */}
      <div
        className={`pointer-events-none absolute ${spreadClass} rounded-[inherit] z-[-1] transition-all duration-700 ease-out`}
        style={{
          opacity: activeIntensity,
          transform: `scale(${auraScale})`,
          background: ambientGlow.outerAura,
          filter: 'blur(16px)',
        }}
        aria-hidden="true"
      />

      {/* 2. Wide Ethereal Diffusion (Lớp khuếch tán ánh sáng êm dịu lan tỏa xa) */}
      <div
        className="pointer-events-none absolute -inset-5 sm:-inset-8 rounded-[inherit] z-[-2] transition-all duration-1000 ease-out"
        style={{
          opacity: Math.max(0, activeIntensity * 0.7),
          transform: `scale(${auraScale * 1.02})`,
          background: ambientGlow.outerAura,
          filter: 'blur(28px)',
        }}
        aria-hidden="true"
      />

      {/* 
        [CARD BODY - THÂN BOX VỚI TILT + SPOTLIGHT DỊU NHẸ]
      */}
      <div
        style={{
          transform: `perspective(1000px) translateY(${isHovered ? -3 : -(scrollFocal * 2)}px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          ['--mouse-x' as any]: `${mousePos.x}%`,
          ['--mouse-y' as any]: `${mousePos.y}%`,
          boxShadow:
            scrollFocal > 0.08 || isHovered
              ? ambientGlow.boxShadow
              : undefined,
          borderColor:
            scrollFocal > 0.15 || isHovered
              ? ambientGlow.borderColor
              : undefined,
        }}
        className={`relative overflow-hidden rounded-xl border transition-all duration-500 select-none ${variantStyles} ${
          enableEdgeLight ? 'dongho-edge-light' : ''
        } ${cardClassName}`}
      >
        {/* Interactive Cursor Spotlight Glow - Dịu nhẹ & tinh tế */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
          style={{
            opacity: isHovered || touchActive ? 1 : 0,
            background:
              variant === 'dark'
                ? `radial-gradient(circle 240px at ${mousePos.x}% ${mousePos.y}%, rgba(213, 166, 46, 0.14), transparent 70%)`
                : `radial-gradient(circle 240px at ${mousePos.x}% ${mousePos.y}%, rgba(255, 239, 183, 0.28), transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* Soft Ambient Inner Radiance on scroll */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-700 z-0"
          style={{
            opacity: Math.max(0, scrollFocal * 0.6),
            background: ambientGlow.innerGlow,
          }}
          aria-hidden="true"
        />

        {/* Top Rim Highlight */}
        <div
          className="pointer-events-none absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D5A62E]/35 to-transparent transition-opacity duration-500 z-10"
          style={{ opacity: isHovered ? 1 : Math.max(0.2, scrollFocal * 0.6) }}
          aria-hidden="true"
        />

        {/* Foreground Content */}
        <div className="relative z-10 h-full">{children}</div>
      </div>
    </div>
  );
};

// Convenient alias for code that expects ScrollGlowCard or InteractiveLightCard
export const ScrollGlowCard = InteractiveLightCard;

/**
 * ScrollGlowBox: A flexible wrapper that wraps ANY existing custom element/card
 * with a gentle, all-around soft ambient aura that lights up on scroll and smoothly dims when scrolled past.
 */
export const ScrollGlowBox: React.FC<{
  children: React.ReactNode;
  className?: string;
  glowColor?: GlowColorType;
  glowSpread?: 'sm' | 'md' | 'lg' | 'hero';
  glowOpacity?: number;
  enableTilt?: boolean;
  enableEdgeLight?: boolean;
  onClick?: () => void;
}> = ({
  children,
  className = '',
  glowColor = 'gold',
  glowSpread = 'md',
  glowOpacity = 1,
  onClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollFocal = useScrollFocalGlow(containerRef);
  const [isHovered, setIsHovered] = useState(false);

  const ambientGlow = EVEN_AMBIENT_GLOWS[glowColor] || EVEN_AMBIENT_GLOWS.gold;
  const spreadClass = GLOW_SPREAD_SIZES[glowSpread] || GLOW_SPREAD_SIZES.md;

  const activeIntensity = isHovered
    ? 1.25 * glowOpacity
    : Math.max(0, scrollFocal * 1.05 * glowOpacity);

  const auraScale = isHovered
    ? 1.05
    : 1 + scrollFocal * 0.03;

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative z-0 group ${className}`}
    >
      {/* 
        ================================================================
        [OMNI-DIRECTIONAL EVEN AMBIENT HALO - HÀO QUANG TỎA ĐỀU CẢ 4 PHÍA]
        ================================================================
      */}

      {/* 1. Outer Soft Aura (Quầng sáng mềm tỏa đều toàn bộ box) */}
      <div
        className={`pointer-events-none absolute ${spreadClass} rounded-[inherit] z-[-1] transition-all duration-700 ease-out`}
        style={{
          opacity: activeIntensity,
          transform: `scale(${auraScale})`,
          background: ambientGlow.outerAura,
          filter: 'blur(16px)',
        }}
        aria-hidden="true"
      />

      {/* 2. Wide Ethereal Diffusion (Lớp khuếch tán ánh sáng êm dịu lan tỏa xa) */}
      <div
        className="pointer-events-none absolute -inset-5 sm:-inset-8 rounded-[inherit] z-[-2] transition-all duration-1000 ease-out"
        style={{
          opacity: Math.max(0, activeIntensity * 0.7),
          transform: `scale(${auraScale * 1.02})`,
          background: ambientGlow.outerAura,
          filter: 'blur(28px)',
        }}
        aria-hidden="true"
      />

      {/* 3. Content wrapper */}
      <div
        className="h-full w-full relative z-0 transition-all duration-500 ease-out rounded-[inherit]"
        style={{
          transform: `translateY(${isHovered ? -3 : -(scrollFocal * 2)}px)`,
          boxShadow:
            scrollFocal > 0.08 || isHovered
              ? ambientGlow.boxShadow
              : undefined,
        }}
      >
        {children}
      </div>
    </div>
  );
};

// Section Staged Light Reveal Wrapper
export const StagedSectionReveal: React.FC<{
  children: React.ReactNode;
  id?: string;
  className?: string;
  showSweep?: boolean;
}> = ({ children, id, className = '' }) => {
  return (
    <section
      id={id}
      className={`relative ${className}`}
    >
      {children}
    </section>
  );
};


