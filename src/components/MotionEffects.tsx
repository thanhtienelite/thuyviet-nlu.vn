import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useReducedMotion, Variants } from 'motion/react';

/**
 * Modern Vietnamese Motion Design Tokens
 * - Easing: Cubic-bezier with smooth deceleration (0.22, 1, 0.36, 1) & organic momentum (0.16, 1, 0.3, 1)
 * - Durations: 500ms - 900ms
 * - Stagger: 60ms - 100ms
 */
export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;
export const MOMENTUM_EASE = [0.16, 1, 0.3, 1] as const;

export interface ScrollRevealProps {
  children: React.ReactNode;
  variant?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up' | 'mask-up' | 'fade';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  staggerChildren?: number;
  once?: boolean;
}

/**
 * ScrollReveal: Unified scroll-triggered reveal wrapper.
 * Runs once smoothly when the element enters the viewport.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.75,
  distance = 24,
  className = '',
  staggerChildren,
  once = true,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-60px 0px' });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const getVariants = (): Variants => {
    switch (variant) {
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: distance },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
              ease: MOTION_EASE,
              ...(staggerChildren ? { staggerChildren } : {}),
            },
          },
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration,
              delay,
              ease: MOTION_EASE,
              ...(staggerChildren ? { staggerChildren } : {}),
            },
          },
        };
      case 'scale-up':
        return {
          hidden: { opacity: 0, scale: 0.95, y: distance * 0.5 },
          visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: MOTION_EASE,
              ...(staggerChildren ? { staggerChildren } : {}),
            },
          },
        };
      case 'mask-up':
        return {
          hidden: { opacity: 0, y: distance },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: MOTION_EASE,
              ...(staggerChildren ? { staggerChildren } : {}),
            },
          },
        };
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration,
              delay,
              ease: MOTION_EASE,
              ...(staggerChildren ? { staggerChildren } : {}),
            },
          },
        };
      case 'fade-up':
      default:
        return {
          hidden: { opacity: 0, y: distance },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration,
              delay,
              ease: MOTION_EASE,
              ...(staggerChildren ? { staggerChildren } : {}),
            },
          },
        };
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * TextReveal: Masks and reveals headlines / titles from below
 */
export const TextReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}> = ({ children, delay = 0, duration = 0.8, className = '' }) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
        transition={{
          duration,
          delay,
          ease: MOTION_EASE,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

/**
 * StaggerContainer & StaggerItem: Clean card grids with 60-100ms organic staggering
 */
export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}> = ({ children, className = '', staggerDelay = 0.08, delay = 0 }) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  distance?: number;
}> = ({ children, className = '', distance = 20 }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.65,
            ease: MOTION_EASE,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * CountUpNumber: Smooth, single-run number animation when entering viewport.
 * Intelligently handles integers, Vietnamese decimals (e.g. 10,1 or 1,58), percentages, and prefix signs (+ / -).
 */
export const CountUpNumber: React.FC<{
  value: string | number;
  duration?: number;
  className?: string;
}> = ({ value, duration = 1.2, className = '' }) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' });
  const [displayValue, setDisplayValue] = useState<string>(
    typeof value === 'number' ? '0' : value.toString().replace(/[0-9]/g, '0')
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayValue(value.toString());
      return;
    }

    if (!isInView) return;

    const str = value.toString();
    // Match numeric portion (e.g. "+10,1%" -> match "10,1", prefix="+", suffix="%")
    const match = str.match(/^([^\d]*)(\d+(?:[.,]\d+)?)(.*)$/);

    if (!match) {
      setDisplayValue(str);
      return;
    }

    const prefix = match[1] || '';
    const rawNumberStr = match[2];
    const suffix = match[3] || '';
    const isCommaDecimal = rawNumberStr.includes(',');
    const targetNumber = parseFloat(rawNumberStr.replace(',', '.'));
    const decimalPlaces = rawNumberStr.includes('.')
      ? rawNumberStr.split('.')[1].length
      : rawNumberStr.includes(',')
      ? rawNumberStr.split(',')[1].length
      : 0;

    const startTime = performance.now();
    const durationMs = duration * 1000;

    let animFrameId: number;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Ease-out cubic: 1 - pow(1 - progress, 3)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = targetNumber * easeOut;

      let formattedNumber: string;
      if (decimalPlaces > 0) {
        formattedNumber = currentVal.toFixed(decimalPlaces);
      } else {
        formattedNumber = Math.round(currentVal).toString();
      }

      if (isCommaDecimal) {
        formattedNumber = formattedNumber.replace('.', ',');
      }

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        animFrameId = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(str);
      }
    };

    animFrameId = requestAnimationFrame(updateCounter);

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [isInView, value, duration, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};

/**
 * ImageReveal: Editorial image container with subtle scale-down entrance & refined hover zoom
 */
export const ImageReveal: React.FC<{
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectRatio?: string;
  loading?: 'lazy' | 'eager';
}> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  loading = 'lazy',
}) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' });

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        initial={prefersReducedMotion ? {} : { scale: 1.05, opacity: 0 }}
        animate={
          isInView
            ? { scale: 1, opacity: 1 }
            : prefersReducedMotion
            ? {}
            : { scale: 1.05, opacity: 0 }
        }
        transition={{
          duration: 0.85,
          ease: MOTION_EASE,
        }}
        className={`w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03] ${imgClassName}`}
      />
    </div>
  );
};

/**
 * OrganicFloat: Soft floating motion for Hero visuals (5-7 seconds ease-in-out loop)
 */
export const OrganicFloat: React.FC<{
  children: React.ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
}> = ({ children, className = '', distance = 6, duration = 6 }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      animate={{
        y: [-distance / 2, distance / 2, -distance / 2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
