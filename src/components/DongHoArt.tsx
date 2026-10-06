import React from 'react';

// Đông Hồ Cloud Motif
export const DongHoCloud: React.FC<{ className?: string; color?: string }> = ({
  className = "w-16 h-8",
  color = "currentColor"
}) => (
  <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M15 45C8 45 2 39 2 32C2 24 8 18 16 18C17 10 24 4 33 4C42 4 49 10 51 18C56 12 65 12 71 17C76 11 86 11 92 16C97 12 105 12 110 17C116 23 116 33 110 39C116 43 116 51 110 56C104 60 95 60 90 55C84 60 74 60 68 55C62 60 52 60 46 55C40 60 30 60 24 55C19 58 15 52 15 45Z"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33 22C33 22 42 16 55 24C68 32 75 22 85 24C95 26 98 34 98 34"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 4"
    />
    <circle cx="33" cy="36" r="6" stroke={color} strokeWidth="2" />
    <circle cx="75" cy="38" r="5" stroke={color} strokeWidth="2" />
  </svg>
);

// Red Cinnabar Seal Stamp (Triện Đông Hồ)
export const DongHoSeal: React.FC<{ text?: string; subText?: string; className?: string }> = ({
  text = "THỤY VIỆT",
  subText = "DA55",
  className = ""
}) => (
  <div
    className={`inline-flex flex-col items-center justify-center border-2 border-[#A63A2B] bg-[#A63A2B]/5 px-3 py-1.5 rounded-xs select-none ${className}`}
    style={{
      boxShadow: 'inset 0 0 0 1px rgba(166, 58, 43, 0.4), 0 2px 8px -2px rgba(166, 58, 43, 0.25)'
    }}
  >
    <div className="font-heritage text-xs md:text-sm font-bold tracking-widest text-[#A63A2B] uppercase">
      {text}
    </div>
    {subText && (
      <div className="text-[9px] font-semibold tracking-wider text-[#A63A2B]/80 uppercase">
        {subText}
      </div>
    )}
  </div>
);

// Woodblock Frame Corner
export const WoodblockCorner: React.FC<{ position: 'tl' | 'tr' | 'bl' | 'br'; className?: string }> = ({
  position,
  className = "w-6 h-6 text-[#A63A2B]"
}) => {
  const transform = {
    tl: '',
    tr: 'scale-x-[-1]',
    bl: 'scale-y-[-1]',
    br: 'scale-[-1]'
  }[position];

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${transform}`}
    >
      <path d="M2 38V12C2 6.47715 6.47715 2 12 2H38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M8 38V16C8 11.5817 11.5817 8 16 8H38" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  );
};

// Banana Leaf Minimal Line Art
export const BananaLeafArt: React.FC<{ className?: string; color?: string }> = ({
  className = "w-12 h-12",
  color = "#244F42"
}) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M10 90C30 80 55 55 65 30C75 10 90 8 90 8C90 8 85 25 68 50C50 75 25 88 10 90Z"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M25 81L35 70" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M38 68L50 56" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M50 52L65 40" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M62 36L78 24" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Stylized Rooster & Livestock folk outline
export const DongHoLivestockArt: React.FC<{ className?: string }> = ({
  className = "w-full max-w-sm h-auto"
}) => (
  <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Rooster Outline (Gà Đông Hồ) */}
    <g stroke="#A63A2B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M60 140C50 120 55 90 75 75C80 65 75 55 80 45C85 45 90 50 95 45C100 40 105 50 110 55C115 70 110 90 95 105C110 110 125 100 135 85C135 110 120 130 95 140Z" />
      <path d="M85 45C88 38 95 38 98 44" fill="#A63A2B" />
      <circle cx="88" cy="58" r="2.5" fill="#292820" />
      {/* Rooster Tail Feathers */}
      <path d="M60 110C40 90 20 100 10 130C30 125 45 130 55 140" strokeWidth="2" />
      <path d="M60 95C35 75 15 80 5 110C25 110 45 115 55 125" strokeWidth="2" stroke="#D5A62E" />
      {/* Legs */}
      <path d="M75 140V170M75 170L65 175M75 170L85 175" stroke="#292820" strokeWidth="2" />
      <path d="M90 140V170M90 170L80 175M90 170L100 175" stroke="#292820" strokeWidth="2" />
    </g>

    {/* Piglet Outline (Lợn Đông Hồ với xoáy âm dương) */}
    <g stroke="#D5A62E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M180 150C165 140 160 120 170 105C180 90 210 85 235 90C255 85 275 95 285 115C295 130 285 155 260 160C230 165 195 160 180 150Z" />
      {/* Snout */}
      <path d="M165 115C158 115 155 125 160 130C165 135 170 132 170 125Z" fill="#D5A62E" fillOpacity="0.2" />
      {/* Ear */}
      <path d="M185 95C185 85 195 85 200 95" />
      {/* Yin Yang Swirl on back */}
      <circle cx="230" cy="120" r="14" stroke="#244F42" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M230 106C238 106 238 120 230 120C222 120 222 134 230 134" stroke="#244F42" strokeWidth="2" />
      {/* Legs */}
      <path d="M185 152V175M210 158V175M250 158V175M275 148V175" stroke="#292820" strokeWidth="2" />
      {/* Curly tail */}
      <path d="M285 115C295 110 300 115 295 125C290 130 295 135 302 130" stroke="#D5A62E" strokeWidth="2" />
    </g>

    {/* Ground / Grass flourish */}
    <path d="M20 175C70 170 120 178 180 175C240 172 320 177 380 175" stroke="#244F42" strokeWidth="2" strokeDasharray="6 6" />
  </svg>
);

// Subtle Tileable Đông Hồ Background Pattern Layer (Clouds, Woodblock Marks, Folk Waves)
export const DongHoBgMotifGrid: React.FC<{
  variant?: 'light' | 'dark' | 'terracotta';
  opacity?: number;
  className?: string;
}> = ({
  variant = 'light',
  opacity = 0.05,
  className = ""
}) => {
  const strokeColor = {
    light: '#A63A2B',
    dark: '#F4E8C8',
    terracotta: '#D5A62E'
  }[variant];

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={`dongho-pattern-${variant}`}
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Cloud 1 */}
            <path
              d="M30 45C22 45 15 39 15 32C15 24 21 18 29 18C30 10 37 4 46 4C55 4 62 10 64 18C69 12 78 12 84 17C89 11 99 11 105 16C110 12 118 12 123 17C129 23 129 33 123 39C129 43 129 51 123 56C117 60 108 60 103 55C97 60 87 60 81 55C75 60 65 60 59 55C53 60 43 60 37 55C32 58 30 52 30 45Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Wave Ribbon */}
            <path
              d="M10 140 C 40 120, 80 160, 120 140 C 160 120, 190 150, 200 140"
              fill="none"
              stroke={strokeColor}
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            {/* Folk Yin-Yang / Swirl Motif */}
            <circle cx="160" cy="50" r="12" fill="none" stroke={strokeColor} strokeWidth="1" />
            <path d="M160 38 C 166 38, 166 50, 160 50 C 154 50, 154 62, 160 62" fill="none" stroke={strokeColor} strokeWidth="1" />
            {/* Diep Shell Sparkle */}
            <path d="M70 170 L73 177 L80 180 L73 183 L70 190 L67 183 L60 180 L67 177 Z" fill="none" stroke={strokeColor} strokeWidth="0.9" />
            {/* Mini Woodblock Corner */}
            <path d="M185 185 H170 V170" fill="none" stroke={strokeColor} strokeWidth="1.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dongho-pattern-${variant})`} />
      </svg>
    </div>
  );
};

// Radiant Editorial Lighting Halo (Warm, Paper-Inspired, No Neon)
export const PaperLightHalo: React.FC<{
  position?: 'center' | 'top-right' | 'top-left' | 'bottom';
  variant?: 'ivory' | 'gold' | 'emerald';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}> = ({
  position = 'center',
  variant = 'ivory',
  size = 'lg',
  className = ""
}) => {
  const bgGrad = {
    ivory: 'radial-gradient(circle, rgba(255, 255, 255, 0.85) 0%, rgba(250, 243, 227, 0.4) 45%, transparent 70%)',
    gold: 'radial-gradient(circle, rgba(213, 166, 46, 0.22) 0%, rgba(250, 243, 227, 0.1) 45%, transparent 70%)',
    emerald: 'radial-gradient(circle, rgba(36, 79, 66, 0.25) 0%, rgba(20, 49, 40, 0.08) 50%, transparent 75%)'
  }[variant];

  const sizeClass = {
    sm: 'w-48 h-48 sm:w-64 sm:h-64',
    md: 'w-72 h-72 sm:w-96 sm:h-96',
    lg: 'w-96 h-96 sm:w-[500px] sm:h-[500px]',
    xl: 'w-[450px] h-[450px] sm:w-[700px] sm:h-[700px]'
  }[size];

  const posClass = {
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
    'top-right': 'top-0 right-0 translate-x-1/4 -translate-y-1/4',
    'top-left': 'top-0 left-0 -translate-x-1/4 -translate-y-1/4',
    bottom: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4'
  }[position];

  return (
    <div
      className={`absolute ${posClass} ${sizeClass} rounded-full pointer-events-none blur-2xl -z-10 ${className}`}
      style={{ background: bgGrad }}
      aria-hidden="true"
    />
  );
};

