import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PRODUCT_ANATOMY } from '../data/thuyVietData';
import { ASSETS } from '../data/assets';
import { WoodblockCorner, DongHoBgMotifGrid, PaperLightHalo } from './DongHoArt';
import { Plus, Equal, Sparkles, Check, Layers } from 'lucide-react';
import { ScrollGlowCard, ScrollGlowBox } from './InteractiveLightCard';
import { ScrollReveal, StaggerContainer, StaggerItem, MOTION_EASE } from './MotionEffects';

export const ProductAnatomy: React.FC = () => {
  const [activeIngredient, setActiveIngredient] = useState<number>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="khoa-hoc" className="py-24 bg-[#F4E8C8] text-[#292820] relative overflow-hidden">
      {/* Background Dong Ho Pattern Grid */}
      <DongHoBgMotifGrid variant="light" opacity={0.045} />

      {/* Radiant Paper Halo */}
      <PaperLightHalo position="top-right" variant="ivory" size="lg" className="opacity-70" />
      <PaperLightHalo position="bottom" variant="gold" size="lg" className="opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title with ScrollReveal */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#244F42]/10 text-[#244F42] text-xs font-bold uppercase tracking-wider border border-[#244F42]/20 shadow-2xs">
            <Layers className="w-3.5 h-3.5" />
            <span>Cấu trúc công thức sản phẩm</span>
          </div>
          <h2 className="section-title font-serif text-3xl sm:text-5xl font-black text-[#292820] tracking-tight overflow-visible">
            BÊN TRONG MỘT GÓI THỤY VIỆT CÓ GÌ?
          </h2>
          <p className="text-base sm:text-lg text-[#292820]/85 leading-relaxed font-light">
            Sự kết hợp chính xác giữa nguồn prebiotic tinh bột kháng dồi dào từ chuối xanh bản địa và chủng probiotic vi bao thế hệ mới.
          </p>
        </ScrollReveal>

        {/* The Core Synbiotic Formula Equation Banner */}
        <ScrollReveal variant="fade-up" delay={0.15}>
          <ScrollGlowCard
            glowColor="gold"
            glowSpread="lg"
            variant="ivory"
            className="mb-16"
            cardClassName="p-6 sm:p-8 dongho-frame shadow-xl border-1.5 border-[#292820]/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
              
              {/* Component 1: Prebiotic */}
              <div className="md:col-span-3 text-center p-5 bg-white rounded-md border-1.5 border-[#D5A62E] shadow-xs transition-transform duration-300 hover:scale-[1.02]">
                <div className="text-xs font-bold tracking-widest text-[#D5A62E] uppercase">
                  67,5% Thành phần
                </div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-[#292820] mt-1">
                  PREBIOTIC
                </div>
                <div className="text-xs text-[#292820]/80 mt-0.5">
                  Bột chuối xanh giàu tinh bột kháng
                </div>
              </div>

              {/* Plus sign */}
              <div className="md:col-span-1 flex justify-center text-[#A63A2B]">
                <div className="w-8 h-8 rounded-full bg-[#A63A2B]/10 flex items-center justify-center font-black">
                  <Plus className="w-5 h-5" />
                </div>
              </div>

              {/* Component 2: Probiotic Vi Bao */}
              <div className="md:col-span-3 text-center p-5 bg-white rounded-md border-1.5 border-[#244F42] shadow-xs transition-transform duration-300 hover:scale-[1.02]">
                <div className="text-xs font-bold tracking-widest text-[#244F42] uppercase">
                  22,5% Thành phần
                </div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-[#244F42] mt-1">
                  PROBIOTIC VI BAO
                </div>
                <div className="text-xs text-[#292820]/80 mt-0.5">
                  Bacillus subtilis & Lactobacillus spp.
                </div>
              </div>

              {/* Equals sign */}
              <div className="md:col-span-1 flex justify-center text-[#A63A2B]">
                <div className="w-8 h-8 rounded-full bg-[#A63A2B]/10 flex items-center justify-center font-black">
                  <Equal className="w-5 h-5" />
                </div>
              </div>

              {/* Result: SYNBIOTIC THỤY VIỆT */}
              <div className="md:col-span-4 text-center p-5 bg-[#244F42] text-[#F4E8C8] rounded-md shadow-xl border-1.5 border-[#D5A62E] transition-transform duration-300 hover:scale-[1.02]">
                <div className="text-xs font-bold tracking-widest text-[#D5A62E] uppercase flex items-center justify-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Hiệu ứng cộng hưởng</span>
                </div>
                <div className="font-serif text-xl sm:text-3xl font-black text-[#FAF3E3] mt-1">
                  SYNBIOTIC HOÀN CHỈNH
                </div>
                <div className="text-xs text-[#F4E8C8]/90 mt-1">
                  Nuôi sống & nhân nhanh lợi khuẩn ngay trong ruột
                </div>
              </div>

            </div>
          </ScrollGlowCard>
        </ScrollReveal>

        {/* Exploded View & Ingredient Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive 3-part cards with Stagger */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-sm font-bold tracking-wider uppercase text-[#292820]/80 mb-2">
              Tỷ lệ phối chế tiêu chuẩn (1kg thành phẩm):
            </h3>

            <StaggerContainer className="space-y-4" staggerDelay={0.08}>
              {PRODUCT_ANATOMY.map((item, idx) => {
                const isSelected = activeIngredient === idx;
                const glowType = idx === 0 ? 'banana' : idx === 1 ? 'jade' : 'gold';
                return (
                  <StaggerItem key={idx}>
                    <ScrollGlowCard
                      glowColor={glowType}
                      glowSpread="sm"
                      onClick={() => setActiveIngredient(idx)}
                      className="w-full cursor-pointer"
                      cardClassName={`p-6 rounded-lg border transition-all duration-300 ${
                        isSelected
                          ? 'bg-white border-[#A63A2B] shadow-lg translate-x-1.5'
                          : 'bg-[#FAF3E3] border-[#292820]/15 hover:border-[#292820]/30 shadow-xs'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <span
                              className="font-serif text-3xl font-black"
                              style={{ color: item.color }}
                            >
                              {item.percent}
                            </span>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#292820]/70 bg-[#292820]/5 px-2 py-0.5 rounded-xs">
                              {item.role}
                            </span>
                          </div>
                          <h4 className="font-serif text-xl font-bold text-[#292820] mt-1">
                            {item.name}
                          </h4>
                        </div>

                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                            isSelected ? 'bg-[#A63A2B] text-[#F4E8C8]' : 'bg-[#292820]/10 text-[#292820]'
                          }`}
                        >
                          {idx + 1}
                        </div>
                      </div>

                      <p className="text-sm text-[#292820]/85 mt-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Progress bar visual */}
                      <div className="w-full bg-[#292820]/10 h-2 rounded-full mt-4 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: item.percent.replace(',', '.') }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 + idx * 0.1, ease: MOTION_EASE }}
                          style={{
                            backgroundColor: item.color,
                          }}
                        />
                      </div>
                    </ScrollGlowCard>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          {/* Right: Visual flatlay and composition showcase */}
          <div className="lg:col-span-6">
            <ScrollReveal variant="fade-up" delay={0.2}>
              <ScrollGlowBox glowColor="gold" glowSpread="lg">
                <div className="bg-[#FAF3E3] p-6 rounded-lg dongho-frame shadow-2xl relative border-1.5 border-[#292820]/25">
                  <WoodblockCorner position="tl" className="absolute top-2 left-2 w-6 h-6 text-[#A63A2B]" />
                  <WoodblockCorner position="tr" className="absolute top-2 right-2 w-6 h-6 text-[#A63A2B]" />
                  
                  <div className="dongho-gallery-frame">
                    <div className="rounded-md overflow-hidden aspect-[4/3] relative border border-[#292820]/15 bg-white group">
                      <img
                        src={ASSETS.PRODUCT_LIFESTYLE}
                        alt="Thực tế bộ sản phẩm Thụy Việt cùng nguyên liệu chuối lát và bột synbiotic"
                        className="w-full h-full object-cover dongho-crisp-img group-hover:scale-[1.035] group-hover:brightness-[1.05] transition-all duration-700 ease-out"
                        loading="lazy"
                      />
                      <span className="absolute top-2.5 left-2.5 text-[10px] font-bold text-[#F4E8C8] bg-[#244F42] px-2.5 py-0.5 rounded-xs shadow-xs">
                        Lab Prototype & Nguyên liệu
                      </span>
                    </div>
                    <div className="pt-3 px-1 text-left">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#A63A2B]">
                        Thực tế phòng thí nghiệm NLU & Mẫu thương phẩm
                      </div>
                      <p className="text-xs text-[#292820]/85 mt-1 leading-relaxed">
                        Bột synbiotic mịn, đồng nhất, giữ hương thơm tự nhiên và hoạt tính vi sinh sống.
                      </p>
                    </div>
                  </div>

                  {/* Core Advantages List */}
                  <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-[#292820]/15 text-xs">
                    <div className="flex items-center gap-2 text-[#292820]/90">
                      <Check className="w-4 h-4 text-[#244F42]" />
                      <span>Dễ dàng hòa trộn vào cám</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#292820]/90">
                      <Check className="w-4 h-4 text-[#244F42]" />
                      <span>Không vón cục, phân tán đều</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#292820]/90">
                      <Check className="w-4 h-4 text-[#244F42]" />
                      <span>Bảo toàn hoạt lực vi sinh</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#292820]/90">
                      <Check className="w-4 h-4 text-[#244F42]" />
                      <span>Nguồn nguyên liệu 100% Việt Nam</span>
                    </div>
                  </div>
                </div>
              </ScrollGlowBox>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
