import React, { useState } from 'react';
import { motion, useInView } from 'motion/react';
import { CIRCULAR_VALUES } from '../data/thuyVietData';
import { DongHoCloud, DongHoSeal, BananaLeafArt, DongHoLivestockArt } from './DongHoArt';
import { ScrollGlowCard, ScrollGlowBox } from './InteractiveLightCard';
import { RefreshCw, Users, Shield, HeartHandshake, Leaf, ArrowRight, Check } from 'lucide-react';

export const CircularEconomy: React.FC = () => {
  const iconList = [Users, Shield, HeartHandshake, Leaf];
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [activeCycleIndex, setActiveCycleIndex] = useState<number>(0);

  const cycleSteps = [
    { title: 'Chuối xanh dạt', subtitle: 'Phụ phẩm nông nghiệp chưa đạt chuẩn xuất khẩu', icon: '🍌' },
    { title: 'Tinh bột kháng RS', subtitle: 'Chiết xuất cơ chất nuôi dưỡng lợi khuẩn', icon: '⚗️' },
    { title: 'Synbiotic Thụy Việt', subtitle: 'Vi bao màng sinh học hiệp đồng', icon: '🛡️' },
    { title: 'Vật nuôi khỏe mạnh', subtitle: 'Giảm kháng sinh, tăng trọng +10,1%', icon: '🐔' },
    { title: 'Thực phẩm sạch', subtitle: 'An toàn cho người tiêu dùng', icon: '🌱' },
    { title: 'Kinh tế tuần hoàn', subtitle: 'Nâng cao thu nhập cho nhà nông', icon: '🔄' },
  ];

  return (
    <section id="kinh-te-tuan-hoan" ref={ref} className="py-24 bg-[#FAF3E3] text-[#292820] relative overflow-hidden">
      {/* Decorative cloud */}
      <div className="absolute top-10 left-10 opacity-15 pointer-events-none">
        <DongHoCloud className="w-48 h-24 text-[#A63A2B]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#244F42]/10 text-[#244F42] text-xs font-bold uppercase tracking-wider border border-[#244F42]/20">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Kinh tế tuần hoàn & Giá trị cộng đồng</span>
          </div>
          <h2 className="section-title font-serif text-3xl sm:text-5xl font-black text-[#292820] tracking-tight overflow-visible">
            MỘT TRÁI CHUỐI CÓ THỂ ĐI XA ĐẾN ĐÂU?
          </h2>
          <p className="text-base sm:text-lg text-[#292820]/80 leading-relaxed font-light">
            Biến nguồn phụ phẩm chuối xanh chưa đạt chuẩn thương phẩm thành chuỗi giá trị tuần hoàn khép kín vì một nền nông nghiệp xanh bền vững.
          </p>
        </div>

        {/* Circular Loop Flow Stepper */}
        <ScrollGlowBox
          glowColor="jade"
          glowSpread="md"
          className="mb-16"
        >
          <div className="p-6 sm:p-8 bg-[#F4E8C8]/60 rounded-xl border border-[#292820]/15">
            <div className="text-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#244F42]">
                Chuỗi giá trị tuần hoàn sinh học khép kín
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {cycleSteps.map((step, idx) => {
                const isSelected = activeCycleIndex === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveCycleIndex(idx)}
                    className={`p-4 rounded-lg text-left transition-all duration-300 cursor-pointer border relative ${
                      isSelected
                        ? 'bg-[#244F42] text-[#F4E8C8] border-[#D5A62E] shadow-md scale-[1.03]'
                        : 'bg-[#FAF3E3] text-[#292820] border-[#292820]/15 hover:border-[#244F42]'
                    }`}
                  >
                    <div className="text-2xl mb-2">{step.icon}</div>
                    <div className="font-serif font-bold text-sm leading-snug">
                      {step.title}
                    </div>
                    <div className={`text-[11px] mt-1 leading-tight ${isSelected ? 'text-[#F4E8C8]/80' : 'text-[#292820]/70'}`}>
                      {step.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollGlowBox>

        {/* 4 Pillars Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CIRCULAR_VALUES.map((pillar, idx) => {
            const Icon = iconList[idx % iconList.length];
            return (
              <ScrollGlowCard
                key={idx}
                glowColor={idx === 0 ? 'gold' : idx === 1 ? 'jade' : idx === 2 ? 'red' : 'jade'}
                glowSpread="sm"
                cardClassName="p-6 rounded-lg bg-[#F4E8C8]/60 border border-[#292820]/15 hover:border-[#A63A2B] transition-all flex flex-col justify-between shadow-xs hover:shadow-md h-full group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#244F42]/10 group-hover:bg-[#A63A2B]/15 text-[#244F42] group-hover:text-[#A63A2B] flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#292820]/50">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-[#A63A2B]">
                    {pillar.badge}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#292820] mt-1 mb-2">
                    {pillar.target}
                  </h3>
                  <h4 className="text-xs font-semibold text-[#244F42] uppercase tracking-wide mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#292820]/80 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#292820]/10 flex items-center gap-1 text-[11px] font-bold text-[#A63A2B] uppercase tracking-wider">
                  <span>Giá trị lan tỏa</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </ScrollGlowCard>
            );
          })}
        </div>

        {/* Circular Flow Infographic Banner with Folk Art Motif */}
        <ScrollGlowBox
          glowColor="dark-gold"
          glowSpread="lg"
        >
          <div className="bg-[#244F42] text-[#F4E8C8] rounded-xl p-8 sm:p-12 border-2 border-[#D5A62E]/50 shadow-xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D5A62E]">
                  <Leaf className="w-4 h-4" />
                  <span>Mô hình Chu trình Sinh học Khép kín</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#FAF3E3]">
                  Chuối xanh dạt → Synbiotic Thụy Việt → Vật nuôi khỏe → Thực phẩm sạch
                </h3>
                <p className="text-sm sm:text-base text-[#F4E8C8]/85 leading-relaxed font-light">
                  Hàng ngàn tấn chuối xanh không đủ chuẩn xuất khẩu mỗi năm sẽ không còn bị bỏ phí hoặc gây ô nhiễm hữu cơ. Khi được chuyển hóa thành tinh bột kháng prebiotic, chuối xanh trở thành động lực sinh học bảo vệ đàn vật nuôi không lạm dụng kháng sinh.
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center justify-center p-4 bg-[#1A332B] rounded-lg border border-[#D5A62E]/30 text-center">
                <DongHoLivestockArt className="w-full max-w-xs h-auto opacity-90" />
                <div className="mt-3 text-xs font-heritage font-bold text-[#D5A62E] tracking-widest uppercase">
                  Mài ngọc từ đất Việt · Hướng tới nền chăn nuôi thịnh vượng
                </div>
              </div>
            </div>
          </div>
        </ScrollGlowBox>
      </div>
    </section>
  );
};
