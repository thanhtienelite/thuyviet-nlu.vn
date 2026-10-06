import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Play } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { DongHoSeal } from './DongHoArt';

interface HeaderProps {
  onOpenThirtySecond: () => void;
  onToggleExhibition: () => void;
  isExhibitionActive: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenThirtySecond,
  onToggleExhibition,
  isExhibitionActive,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Bước ngoặt', href: '#buoc-ngoat' },
    { label: 'Khoa học', href: '#khoa-hoc' },
    { label: 'Tuần hoàn', href: '#kinh-te-tuan-hoan' },
    { label: 'Bản sắc', href: '#cau-chuyen' },
    { label: 'Kinh doanh', href: '#kinh-doanh' },
    { label: 'Đội ngũ', href: '#doi-ngu' },
    { label: 'Liên hệ', href: '#lien-he' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? 'bg-[#F4E8C8]/90 backdrop-blur-md shadow-xs border-b border-[#292820]/10 py-2.5 sm:py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand / Wordmark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="transition-transform duration-300 group-hover:scale-105">
            <DongHoSeal text="THỤY VIỆT" subText="DA55" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl tracking-wider text-[#292820] leading-none group-hover:text-[#A63A2B] transition-colors duration-300">
              THỤY VIỆT
            </span>
            <span className="text-[10px] tracking-widest text-[#244F42] uppercase font-medium mt-0.5">
              Synbiotic Chuối Xanh · NLU 2026
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation with refined underline sweep */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#292820]/80 hover:text-[#A63A2B] transition-colors duration-300 relative py-1 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A63A2B] group-hover:w-full transition-all duration-300 ease-out rounded-full" />
            </a>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          {/* Exhibition Mode Toggle */}
          <button
            id="btn-toggle-exhibition"
            onClick={onToggleExhibition}
            className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
              isExhibitionActive
                ? 'bg-[#244F42] text-[#F4E8C8] shadow-xs ring-2 ring-[#D5A62E] hover:bg-[#1B3E34]'
                : 'bg-[#292820]/5 text-[#292820]/80 hover:bg-[#292820]/10 hover:text-[#292820]'
            }`}
            title="Chế độ trình chiếu gian hàng (Exhibition loop)"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D5A62E]" />
            <span>{isExhibitionActive ? 'Live Booth' : 'Gian trưng bày'}</span>
          </button>

          {/* 30-Second Pitch Button */}
          <button
            id="btn-header-30s"
            onClick={onOpenThirtySecond}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-[#A63A2B] text-[#F4E8C8] hover:bg-[#8B2E21] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-0.5 group cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current text-[#D5A62E] group-hover:scale-110 transition-transform duration-300" />
            <span>Khám phá 30 giây</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="btn-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#292820] hover:text-[#A63A2B] transition-colors duration-200"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF3E3]/98 backdrop-blur-lg border-b border-[#292820]/15 px-6 py-4 space-y-3 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-[#292820] hover:text-[#A63A2B] py-2 border-b border-[#292820]/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onToggleExhibition();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xs bg-[#244F42] text-[#F4E8C8] text-sm font-medium hover:bg-[#1B3E34] transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#D5A62E]" />
              <span>{isExhibitionActive ? 'Đang bật Booth Mode' : 'Bật chế độ Gian trưng bày'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
