import React, { useState } from 'react';
import { motion, useInView } from 'motion/react';
import { DIGESTIVE_JOURNEY } from '../data/thuyVietData';
import { Activity, Play, RotateCcw, ShieldCheck, Clock, Compass, Info, Check } from 'lucide-react';
import { DongHoSeal } from './DongHoArt';
import { ScrollGlowBox } from './InteractiveLightCard';

export const DigestiveJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const handlePlaySimulation = () => {
    setIsPlaying(true);
    let step = 0;
    setActiveStep(0);
    const interval = setInterval(() => {
      step += 1;
      if (step < DIGESTIVE_JOURNEY.length) {
        setActiveStep(step);
      } else {
        setIsPlaying(false);
        clearInterval(interval);
      }
    }, 1800);
  };

  const currentPhase = DIGESTIVE_JOURNEY[activeStep];

  return (
    <section id="mo-phong-tieu-hoa" ref={ref} className="py-24 bg-[#F4E8C8] text-[#292820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#244F42]/10 text-[#244F42] text-xs font-bold uppercase tracking-wider border border-[#244F42]/20">
            <Activity className="w-3.5 h-3.5" />
            <span>Mô phỏng tiêu hóa In-vitro</span>
          </div>
          <h2 className="section-title font-serif text-3xl sm:text-5xl font-black text-[#292820] tracking-tight overflow-visible">
            HÀNH TRÌNH QUA HỆ TIÊU HÓA MÔ PHỎNG
          </h2>
          <p className="text-base sm:text-lg text-[#292820]/80 leading-relaxed font-light">
            Theo dõi khả năng bảo vệ sống sót vượt trội của vi bao lợi khuẩn qua các giai đoạn tiêu hóa từ dạ dày đến đại tràng.
          </p>
        </div>

        {/* Interactive Simulator Shell */}
        <ScrollGlowBox
          glowColor="jade"
          glowSpread="lg"
          className="max-w-5xl mx-auto"
        >
          <div className="bg-[#FAF3E3] rounded-xl dongho-frame shadow-xl p-6 sm:p-10">
            {/* Controls Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#292820]/10">
              <div className="flex items-center gap-3">
                <DongHoSeal text="MÔ PHỎNG" subText="LAB NLU" />
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#292820]">
                    Giai đoạn {currentPhase.phase}: {currentPhase.organ}
                  </h3>
                  <div className="text-xs text-[#292820]/70 flex items-center gap-3 mt-0.5">
                    <span className="flex items-center gap-1 font-semibold text-[#A63A2B]">
                      <Clock className="w-3.5 h-3.5" /> {currentPhase.time}
                    </span>
                    <span>·</span>
                    <span className="font-semibold text-[#244F42]">
                      {currentPhase.ph}
                    </span>
                  </div>
                </div>
              </div>

              {/* Play Button with ink effect */}
              <button
                onClick={handlePlaySimulation}
                disabled={isPlaying}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs bg-[#A63A2B] hover:bg-[#882C20] text-[#F4E8C8] text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50 cursor-pointer shadow-xs"
              >
                {isPlaying ? (
                  <>
                    <RotateCcw className="w-4 h-4 animate-spin" />
                    <span>Đang mô phỏng...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current text-[#D5A62E]" />
                    <span>Chạy mô phỏng toàn trình</span>
                  </>
                )}
              </button>
            </div>

            {/* SVG Animated Route connecting 4 Stages */}
            <div className="relative my-8">
              {/* SVG Connecting Path */}
              <div className="hidden md:block absolute top-1/2 left-8 right-8 -translate-y-1/2 h-2 pointer-events-none -z-0">
                <svg className="w-full h-8 overflow-visible" preserveAspectRatio="none">
                  <path
                    d="M 20,4 Q 250,14 450,4 T 900,4"
                    fill="none"
                    stroke="#292820"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                    opacity="0.25"
                  />
                  {/* Active progress stroke */}
                  <motion.path
                    d="M 20,4 Q 250,14 450,4 T 900,4"
                    fill="none"
                    stroke="#A63A2B"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: (activeStep + 1) / DIGESTIVE_JOURNEY.length }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </svg>
              </div>

              {/* 3-Stage Timeline Stepper */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                {DIGESTIVE_JOURNEY.map((phase, idx) => {
                  const isActive = activeStep === idx;
                  const isPassed = activeStep > idx;

                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`p-4 rounded-lg text-left transition-all cursor-pointer border relative overflow-hidden ${
                        isActive
                          ? 'bg-[#244F42] text-[#F4E8C8] border-[#D5A62E] shadow-md ring-2 ring-[#D5A62E]/40 scale-[1.02]'
                          : isPassed
                          ? 'bg-[#FAF3E3] text-[#292820] border-[#244F42]/40'
                          : 'bg-[#F4E8C8]/60 text-[#292820] border-[#292820]/15 hover:bg-[#F4E8C8]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className={`font-mono font-bold ${isActive ? 'text-[#D5A62E]' : 'text-[#A63A2B]'}`}>
                          {phase.time}
                        </span>
                        <span className="opacity-60 text-[10px]">T-{idx + 1}</span>
                      </div>
                      <div className="font-serif font-bold text-base leading-tight">
                        {phase.organ}
                      </div>
                      <div className={`text-[11px] mt-1 line-clamp-1 ${isActive ? 'text-[#F4E8C8]/80' : 'text-[#292820]/70'}`}>
                        {phase.ph.split(' ')[0]}
                      </div>

                      {/* Active pulse dot */}
                      {isActive && (
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#D5A62E] animate-ping" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Visual Gauge & Survival Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-[#F4E8C8]/40 p-6 rounded-lg border border-[#292820]/10">
              {/* Left: Survival Stat Badges */}
              <div className="md:col-span-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#244F42] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D5A62E]" />
                  <span>Tỷ lệ sống sót tại {currentPhase.organ}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3.5 rounded-lg bg-[#FAF3E3] border border-[#A63A2B]/25 shadow-2xs">
                    <div className="text-[11px] font-bold text-[#A63A2B] uppercase">
                      Probiotic tự do
                    </div>
                    <div className="font-serif text-2xl font-black text-[#A63A2B] mt-0.5">
                      {currentPhase.freeSurvival}%
                    </div>
                    <div className="text-[10px] text-[#292820]/70">tỷ lệ sống sót</div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[#244F42] text-[#F4E8C8] border border-[#D5A62E]/50 shadow-2xs">
                    <div className="text-[11px] font-bold text-[#D5A62E] uppercase">
                      SYNBIOTIC VI BAO
                    </div>
                    <div className="font-serif text-2xl font-black text-[#FAF3E3] mt-0.5">
                      {currentPhase.synbioticSurvival}%
                    </div>
                    <div className="text-[10px] text-[#F4E8C8]/70">tỷ lệ sống sót</div>
                  </div>
                </div>
              </div>

              {/* Right: Comparative Gauge Bars */}
              <div className="md:col-span-7 space-y-5 bg-[#FAF3E3] p-5 rounded-md border border-[#292820]/10">
                <div className="text-xs font-bold uppercase tracking-wider text-[#292820]/80">
                  Thước đo sống sót tích lũy tại {currentPhase.organ}
                </div>

                {/* Free Probiotic Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-[#A63A2B] font-bold">Probiotic tự do đơn lẻ</span>
                    <span className="font-mono font-bold text-[#A63A2B]">{currentPhase.freeSurvival}%</span>
                  </div>
                  <div className="w-full bg-[#292820]/10 h-3.5 rounded-full overflow-hidden p-0.5">
                    <motion.div
                      key={`free-${activeStep}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${currentPhase.freeSurvival}%` }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-[#A63A2B]"
                    />
                  </div>
                </div>

                {/* Encapsulated Synbiotic Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-[#244F42] font-bold">Thụy Việt Synbiotic Vi Bao</span>
                    <span className="font-mono font-bold text-[#244F42]">{currentPhase.synbioticSurvival}%</span>
                  </div>
                  <div className="w-full bg-[#292820]/10 h-3.5 rounded-full overflow-hidden p-0.5">
                    <motion.div
                      key={`encap-${activeStep}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${currentPhase.synbioticSurvival}%` }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-[#244F42]"
                    />
                  </div>
                </div>

                <div className="text-[11px] text-[#292820]/70 pt-2 border-t border-[#292820]/10 flex items-center justify-between">
                  <span>Ưu thế bảo vệ vi bao:</span>
                  <span className="font-bold text-[#244F42]">
                    +{currentPhase.synbioticSurvival - currentPhase.freeSurvival}% tỷ lệ sống
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollGlowBox>
      </div>
    </section>
  );
};
