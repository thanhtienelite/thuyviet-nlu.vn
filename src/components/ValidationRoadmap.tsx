import React from 'react';
import { WHAT_NEEDS_PROOF } from '../data/thuyVietData';
import { WoodblockCorner } from './DongHoArt';
import { ScrollGlowCard } from './InteractiveLightCard';
import { Compass, CheckCircle2 } from 'lucide-react';

export const ValidationRoadmap: React.FC = () => {
  return (
    <section id="lo-trinh-kiem-chung" className="py-24 bg-[#FAF3E3] text-[#292820] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A63A2B]/10 text-[#A63A2B] text-xs font-bold uppercase tracking-wider border border-[#A63A2B]/20">
            <Compass className="w-3.5 h-3.5" />
            <span>Tinh thần khoa học & Minh bạch</span>
          </div>
          <h2 className="section-title font-serif text-3xl sm:text-5xl font-black text-[#292820] tracking-tight overflow-visible">
            CHÚNG TÔI BIẾT ĐIỀU GÌ VẪN CẦN ĐƯỢC CHỨNG MINH
          </h2>
          <p className="text-base sm:text-lg text-[#292820]/80 leading-relaxed font-light">
            Không phóng đại kết quả ban đầu — Thụy Việt xác định rõ các rào cản khoa học và công nghệ cần tiếp tục hoàn thiện trên chặng đường thương mại hóa.
          </p>
        </div>

        {/* 3 Scientific Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {WHAT_NEEDS_PROOF.map((item, idx) => (
            <ScrollGlowCard
              key={idx}
              glowColor={idx === 0 ? 'red' : idx === 1 ? 'gold' : 'jade'}
              glowSpread="md"
              className="h-full"
              cardClassName="p-8 rounded-lg bg-[#F4E8C8] border-2 border-[#292820]/15 hover:border-[#244F42] transition-all flex flex-col justify-between shadow-md relative group h-full"
            >
              <WoodblockCorner position="tl" className="absolute top-2 left-2 w-5 h-5 text-[#A63A2B]/60" />
              <WoodblockCorner position="br" className="absolute bottom-2 right-2 w-5 h-5 text-[#A63A2B]/60" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-[#A63A2B]">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#244F42] bg-[#244F42]/10 px-2.5 py-1 rounded-xs">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#292820] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#292820]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#292820]/10 flex items-center gap-2 text-xs font-semibold text-[#244F42]">
                <CheckCircle2 className="w-4 h-4 text-[#244F42]" />
                <span>Kế hoạch hành động chi tiết DA55</span>
              </div>
            </ScrollGlowCard>
          ))}
        </div>

      </div>
    </section>
  );
};
