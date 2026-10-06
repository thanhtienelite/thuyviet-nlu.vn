import React, { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ChevronDown, Award, Sparkles, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/thuyVietData';
import { ASSETS } from '../data/assets';
import { DongHoCloud, WoodblockCorner, BananaLeafArt, DongHoSeal, DongHoBgMotifGrid, PaperLightHalo } from './DongHoArt';
import { AdmLogo, NluLogo, HoangLamLogo } from './BrandLogos';
import { ScrollGlowBox } from './InteractiveLightCard';
import { MOTION_EASE, OrganicFloat } from './MotionEffects';

interface HeroProps {
  onOpenThirtySecond: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenThirtySecond }) => {
  const prefersReducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringProduct, setIsHoveringProduct] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Desktop subtle mouse parallax (disabled on touch devices / mobile)
  useEffect(() => {
    if (prefersReducedMotion) return;

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion]);

  // Staged cinematic sequence variants
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: 0.08,
      },
    },
  };

  const itemFadeUpVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: MOTION_EASE,
      },
    },
  };

  const productVisualVariants = {
    hidden: { opacity: 0, scale: 0.96, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.85,
        delay: prefersReducedMotion ? 0 : 0.35,
        ease: MOTION_EASE,
      },
    },
  };

  return (
    <section
      id="thuy-viet"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-gradient-to-b from-[#F4E8C8] via-[#FAF3E3] to-[#F4E8C8]"
    >
      {/* Subtle Background Tileable Dong Ho Pattern Layer */}
      <DongHoBgMotifGrid variant="light" opacity={0.045} />

      {/* Radiant Editorial Lighting Halos behind main content areas */}
      <PaperLightHalo position="top-left" variant="ivory" size="xl" className="opacity-70" />
      <PaperLightHalo position="top-right" variant="gold" size="lg" className="opacity-50" />

      {/* Subtle Background Decorative Elements with Parallax & Slow Drift */}
      <motion.div
        style={{
          x: prefersReducedMotion ? 0 : mousePos.x * -6,
          y: prefersReducedMotion ? 0 : mousePos.y * -6,
        }}
        className="absolute top-16 left-6 opacity-30 pointer-events-none animate-cloud-drift-1"
      >
        <DongHoCloud className="w-28 h-14 text-[#A63A2B]" />
      </motion.div>

      <motion.div
        style={{
          x: prefersReducedMotion ? 0 : mousePos.x * -8,
          y: prefersReducedMotion ? 0 : mousePos.y * -8,
        }}
        className="absolute top-32 right-12 opacity-25 pointer-events-none animate-cloud-drift-2"
      >
        <DongHoCloud className="w-36 h-18 text-[#244F42]" />
      </motion.div>

      <motion.div
        style={{
          x: prefersReducedMotion ? 0 : mousePos.x * -4,
          y: prefersReducedMotion ? 0 : mousePos.y * -4,
        }}
        className="absolute bottom-24 left-10 opacity-20 pointer-events-none hidden lg:block"
      >
        <BananaLeafArt className="w-32 h-32 text-[#244F42]" />
      </motion.div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto relative z-10">
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          {/* Left Column: Typography & Story */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Eyebrow badge */}
            <motion.div
              variants={itemFadeUpVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A63A2B]/10 border border-[#A63A2B]/30 text-[#A63A2B] text-xs font-bold tracking-wider uppercase shadow-2xs"
            >
              <Award className="w-3.5 h-3.5 text-[#A63A2B]" />
              <span>DA55 · KHỞI NGHIỆP NÔNG NGHIỆP 2026 · VÒNG CHUNG KẾT</span>
            </motion.div>

            {/* Step 2: Main Headline - Mask & Reveal from below */}
            <div className="space-y-1 overflow-visible">
              <motion.h1
                variants={itemFadeUpVariants}
                className="hero-title font-serif text-5xl sm:text-7xl lg:text-8xl font-black text-[#292820] tracking-tight leading-[1.05] overflow-visible drop-shadow-xs"
              >
                THỤY VIỆT
              </motion.h1>

              {/* Sub-headline line sweep and whole phrase reveal */}
              <div className="relative overflow-visible pt-1">
                {/* Horizontal Indigo Woodblock Ink Sweep */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.85, delay: 0.35, ease: MOTION_EASE }}
                  className="absolute -top-1 left-0 w-32 h-0.5 bg-[#244F42]/40 origin-left"
                />

                <motion.h2
                  variants={itemFadeUpVariants}
                  className="heritage-title font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-[#A63A2B] tracking-wide pt-2 overflow-visible"
                >
                  MÀI NGỌC TỪ ĐẤT VIỆT
                </motion.h2>
              </div>
            </div>

            {/* Step 3: Supporting Copy */}
            <motion.p
              variants={itemFadeUpVariants}
              className="text-lg sm:text-xl text-[#292820]/90 font-normal max-w-2xl leading-relaxed border-l-2 border-[#D5A62E] pl-4 italic bg-[#FAF3E3]/40 py-1 rounded-r-sm"
            >
              “Từ nguồn chuối xanh chưa được khai thác hiệu quả đến giải pháp Synbiotic cho chăn nuôi bền vững.”
            </motion.p>

            {/* Step 4: Micro Badges */}
            <motion.div variants={itemFadeUpVariants} className="flex flex-wrap gap-2.5 pt-2">
              <span className="px-3 py-1 rounded-xs bg-[#244F42] text-[#F4E8C8] text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-xs transition-transform duration-300 hover:scale-105">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D5A62E]"></span>
                SYNBIOTIC
              </span>
              <span className="px-3 py-1 rounded-xs bg-[#D5A62E]/20 text-[#292820] border border-[#D5A62E]/50 text-xs font-bold tracking-wider uppercase shadow-2xs transition-transform duration-300 hover:scale-105">
                CIRCULAR AGRICULTURE
              </span>
              <span className="px-3 py-1 rounded-xs bg-[#FAF3E3] text-[#A63A2B] border border-[#A63A2B]/40 text-xs font-bold tracking-wider uppercase shadow-2xs transition-transform duration-300 hover:scale-105">
                VIETNAMESE INGREDIENTS
              </span>
            </motion.div>

            {/* Step 5: Primary CTAs with micro-interactions */}
            <motion.div variants={itemFadeUpVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#buoc-ngoat"
                className="btn-ink-red inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xs font-bold text-sm tracking-wider uppercase shadow-md hover:shadow-xl cursor-pointer group transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Khám phá bước ngoặt</span>
                <ArrowRight className="w-4 h-4 text-[#D5A62E] group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
              </a>

              <a
                href="#khoa-hoc"
                className="btn-ink-primary inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xs font-bold text-sm tracking-wider uppercase shadow-xs hover:shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Khám phá công nghệ</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Layered Real Packaging Visual with Organic Floating & Gentle Tilt */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Cinematic layered warm halo behind packaging */}
            <motion.div
              animate={{
                scale: isHoveringProduct ? 1.15 : 1,
                opacity: isHoveringProduct ? 0.55 : 0.38,
                x: prefersReducedMotion ? 0 : mousePos.x * 10,
                y: prefersReducedMotion ? 0 : mousePos.y * 10,
              }}
              transition={{ duration: 0.6, ease: MOTION_EASE }}
              className="absolute w-80 h-80 sm:w-[460px] sm:h-[460px] rounded-full blur-3xl -z-10 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(229, 190, 75, 0.35) 0%, rgba(244, 232, 200, 0.15) 50%, transparent 75%)'
              }}
            />

            {/* Parallax & Organic Floating Container for Product */}
            <OrganicFloat distance={7} duration={6}>
              <motion.div
                style={{
                  x: prefersReducedMotion ? 0 : mousePos.x * 6,
                  y: prefersReducedMotion ? 0 : mousePos.y * 6,
                  rotate: prefersReducedMotion ? 0 : mousePos.x * 0.6,
                }}
                variants={productVisualVariants}
                onMouseEnter={() => setIsHoveringProduct(true)}
                onMouseLeave={() => setIsHoveringProduct(false)}
                className="relative p-4 sm:p-6 bg-[#FAF3E3] rounded-lg dongho-frame dongho-edge-light shadow-2xl max-w-md w-full transition-all duration-500 ease-out hover:-translate-y-2 border-1.5 border-[#292820]/25"
              >
                {/* Corner Ornaments */}
                <WoodblockCorner position="tl" className="absolute top-2 left-2 w-6 h-6 text-[#A63A2B]" />
                <WoodblockCorner position="tr" className="absolute top-2 right-2 w-6 h-6 text-[#A63A2B]" />
                <WoodblockCorner position="bl" className="absolute bottom-2 left-2 w-6 h-6 text-[#A63A2B]" />
                <WoodblockCorner position="br" className="absolute bottom-2 right-2 w-6 h-6 text-[#A63A2B]" />

                {/* Dynamic SVG Dong Ho Border Stroke on Hover */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-lg overflow-hidden">
                  <rect
                    x="3"
                    y="3"
                    width="calc(100% - 6px)"
                    height="calc(100% - 6px)"
                    fill="none"
                    stroke="#D5A62E"
                    strokeWidth="1.5"
                    strokeDasharray="400"
                    strokeDashoffset={isHoveringProduct ? "0" : "400"}
                    style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.22, 1, 0.36, 1)' }}
                    rx="6"
                  />
                </svg>

                {/* Product Original Image Container - Bright & Clean Spotlight */}
                <div className="overflow-hidden rounded-md bg-white relative border border-[#292820]/15 shadow-sm group/img">
                  <img
                    src={ASSETS.PRODUCT_HERO}
                    alt="Bao bì THỤY VIỆT – Giải pháp Synbiotic từ chuối xanh"
                    className="w-full h-auto object-cover object-center dongho-crisp-img transform group-hover/img:scale-[1.03] group-hover/img:brightness-[1.05] transition-all duration-700 ease-out"
                    loading="eager"
                  />

                  {/* Son Red Seal "FINALIST 2026" - One-time stamp impact */}
                  <div className="absolute top-3 right-3 z-10 pointer-events-none animate-stamp-impact">
                    <div className="px-2.5 py-1 bg-[#A63A2B] text-[#FAF3E3] border-2 border-[#D5A62E] text-[10px] font-black uppercase tracking-widest rounded-xs shadow-md">
                      FINALIST 2026
                    </div>
                  </div>

                  {/* Floating Badge on Image */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#244F42]/95 backdrop-blur-xs text-[#F4E8C8] px-3 py-2 rounded-xs flex items-center justify-between border border-[#D5A62E]/30 shadow-md">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#D5A62E]" />
                      <span className="text-xs font-semibold tracking-wide">
                        Mẫu thương phẩm THỤY VIỆT FEED 1kg
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D5A62E] bg-[#143128] px-2 py-0.5 rounded-xs">
                      Lab Prototype
                    </span>
                  </div>
                </div>

                {/* Composition caption */}
                <div className="mt-3 flex items-center justify-between text-xs text-[#292820]/80 font-medium">
                  <span>Nền tảng Tinh bột kháng + Probiotic vi bao</span>
                  <span className="font-bold text-[#A63A2B]">DA55</span>
                </div>
              </motion.div>
            </OrganicFloat>
          </div>
        </motion.div>
      </div>

      {/* Bottom Sub-Header: Accurate Organizers & Sponsors Branding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 mt-6 border-t border-[#292820]/15 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* 3 Original Brand Logos Group */}
          <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start">
            {/* 1. Đơn vị tổ chức: Trường Đại học Nông Lâm TP.HCM */}
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#292820]/75 whitespace-nowrap">
                Đơn vị tổ chức:
              </span>
              <ScrollGlowBox glowColor="jade" glowSpread="sm">
                <div
                  className="dongho-sponsor-card flex items-center gap-2.5 hover:border-[#1C833C]"
                  title="Trường Đại học Nông Lâm TP.HCM (NLU) - Đơn vị tổ chức cuộc thi"
                >
                  <NluLogo className="h-9 w-auto" />
                  <div className="text-left hidden sm:block">
                    <div className="text-[11px] font-bold text-[#1C833C] leading-tight">ĐH Nông Lâm TP.HCM</div>
                    <div className="text-[9px] text-[#292820]/70 font-semibold">Đơn vị tổ chức</div>
                  </div>
                </div>
              </ScrollGlowBox>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-6 w-px bg-[#292820]/20" />

            {/* 2 & 3. Đơn vị tài trợ: ADM & Hoàng Lam */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#292820]/75 whitespace-nowrap">
                Đơn vị tài trợ:
              </span>
              <div className="flex items-center gap-2.5">
                {/* ADM Logo */}
                <ScrollGlowBox glowColor="gold" glowSpread="sm">
                  <div
                    className="dongho-sponsor-card flex items-center gap-2 hover:border-[#181858]"
                    title="ADM - Tập đoàn dinh dưỡng nông nghiệp toàn cầu, đơn vị tài trợ cuộc thi"
                  >
                    <AdmLogo className="h-8 w-auto" />
                    <span className="text-[10px] font-bold text-[#181858] hidden md:inline">Tài trợ</span>
                  </div>
                </ScrollGlowBox>

                {/* Hoàng Lam Logo */}
                <ScrollGlowBox glowColor="jade" glowSpread="sm">
                  <div
                    className="dongho-sponsor-card flex items-center gap-2 hover:border-[#0B793A]"
                    title="Công ty TNHH Hoàng Lam - Vì một cuộc sống xanh, đơn vị tài trợ cuộc thi"
                  >
                    <HoangLamLogo className="h-8 w-auto" />
                    <span className="text-[10px] font-bold text-[#0B793A] hidden md:inline">Tài trợ</span>
                  </div>
                </ScrollGlowBox>
              </div>
            </div>
          </div>

          {/* Quick scroll indicator */}
          <a
            href="#buoc-ngoat"
            className="flex items-center gap-1.5 text-xs font-bold text-[#244F42] hover:text-[#A63A2B] transition-colors py-2 px-4 rounded-full bg-[#FAF3E3] border border-[#292820]/20 shadow-xs hover:shadow-md"
          >
            <span>Khám phá bước ngoặt</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#A63A2B] transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};


