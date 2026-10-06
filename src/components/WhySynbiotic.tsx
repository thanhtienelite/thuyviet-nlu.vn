import React from 'react';
import { motion, useInView } from 'motion/react';
import { XCircle, CheckCircle2, Shield, AlertTriangle, Zap, ArrowRight, Sparkles } from 'lucide-react';
import { DongHoCloud, DongHoSeal, DongHoBgMotifGrid, PaperLightHalo, WoodblockCorner } from './DongHoArt';
import { ScrollGlowCard } from './InteractiveLightCard';

export const WhySynbiotic: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="vi-sao-synbiotic" ref={ref} className="py-24 bg-[#FAF3E3] text-[#292820] relative overflow-hidden">
      {/* Background Dong Ho Pattern Grid */}
      <DongHoBgMotifGrid variant="light" opacity={0.045} />

      {/* Radiant Paper Halo */}
      <PaperLightHalo position="center" variant="ivory" size="xl" className="opacity-80" />
      <PaperLightHalo position="top-right" variant="gold" size="lg" className="opacity-35" />

      {/* Background Motifs */}
      <div className="absolute top-10 left-10 opacity-20 pointer-events-none">
        <DongHoCloud className="w-48 h-24 text-[#A63A2B]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A63A2B]/10 text-[#A63A2B] text-xs font-bold uppercase tracking-wider border border-[#A63A2B]/20">
            <Zap className="w-3.5 h-3.5" />
            <span>So sánh cơ chế sinh học</span>
          </div>
          <h2 className="section-title font-serif text-3xl sm:text-5xl font-black text-[#292820] tracking-tight overflow-visible">
            VÌ SAO KHÔNG CHỈ LÀ PROBIOTIC?
          </h2>
          <p className="text-base sm:text-lg text-[#292820]/80 leading-relaxed font-light">
            Sự khác biệt cốt lõi giữa việc bổ sung men vi sinh đơn thuần và giải pháp Synbiotic có bảo vệ vi bao.
          </p>
        </div>

        {/* Synbiotic Convergence Mechanism Infographic */}
        <ScrollGlowCard
          glowColor="gold"
          glowSpread="lg"
          variant="white"
          className="max-w-4xl mx-auto mb-16"
          cardClassName="p-6 sm:p-8 bg-white/95 rounded-xl border-1.5 border-[#292820]/15 relative shadow-lg"
        >
          <WoodblockCorner position="tl" className="absolute top-2 left-2 w-5 h-5 text-[#A63A2B]" />
          <WoodblockCorner position="tr" className="absolute top-2 right-2 w-5 h-5 text-[#A63A2B]" />

          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A63A2B]">
              Cơ chế hợp lực đồng vận
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292820] mt-0.5">
              1 + 1 &gt; 2 trong hệ đường ruột vật nuôi
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Stream 1: Prebiotic */}
            <ScrollGlowCard
              glowColor="banana"
              variant="ivory"
              className="w-full"
              cardClassName="p-5 rounded-lg border-1.5 border-[#D5A62E] text-center space-y-2 shadow-xs"
            >
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#D5A62E]/20 text-[#292820] text-[10px] font-bold uppercase">
                PREBIOTIC (67,5%)
              </div>
              <div className="font-serif text-base font-bold text-[#292820]">
                Bột chuối xanh giàu RS3/RS2
              </div>
              <p className="text-xs text-[#292820]/80 leading-relaxed">
                Nguồn thức ăn chọn lọc nuôi dưỡng lợi khuẩn, kích thích sản sinh axit béo chuỗi ngắn (SCFA).
              </p>
            </ScrollGlowCard>

            {/* Center: Convergence Ripple Seal */}
            <div className="flex flex-col items-center justify-center relative py-2">
              {/* Expanding ink ripple */}
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={isInView ? { scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-20 h-20 rounded-full border-2 border-[#A63A2B]/40 pointer-events-none"
              />

              <div className="w-12 h-12 rounded-full bg-[#A63A2B] text-[#FAF3E3] flex items-center justify-center font-serif text-xl font-bold shadow-md z-10">
                +
              </div>
              <div className="mt-2 text-[11px] font-bold text-[#244F42] uppercase tracking-wider">
                Vi bao che chở
              </div>
            </div>

            {/* Stream 2: Probiotic */}
            <ScrollGlowCard
              glowColor="jade"
              variant="ivory"
              className="w-full"
              cardClassName="p-5 rounded-lg border-1.5 border-[#244F42] text-center space-y-2 shadow-xs"
            >
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#244F42]/10 text-[#244F42] text-[10px] font-bold uppercase">
                PROBIOTIC VI BAO
              </div>
              <div className="font-serif text-base font-bold text-[#292820]">
                Màng alginate sinh học
              </div>
              <p className="text-xs text-[#292820]/80 leading-relaxed">
                Bảo vệ lợi khuẩn sống sót qua acid dạ dày và muối mật để đến ruột phát huy trọn vẹn tác dụng.
              </p>
            </ScrollGlowCard>
          </div>
        </ScrollGlowCard>

        {/* Interactive Split Comparison Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Left Card: Probiotic Tự Do (Free Probiotic) */}
          <ScrollGlowCard
            glowColor="red"
            glowSpread="lg"
            variant="white"
            className="h-full"
            cardClassName="p-8 rounded-lg bg-white border-1.5 border-[#292820]/20 relative flex flex-col justify-between shadow-md h-full"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A63A2B] bg-[#A63A2B]/10 px-3 py-1 rounded-xs flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Cách làm truyền thống</span>
                </span>
                <span className="text-xs font-mono text-[#292820]/50 font-bold">01</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#292820] mb-3">
                Probiotic Tự Do Đơn Lẻ
              </h3>
              <p className="text-sm text-[#292820]/75 mb-6 leading-relaxed">
                Các chủng men vi sinh thông thường không được bao bọc và không kèm theo cơ chất nuôi dưỡng chuyên biệt.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-[#292820]/85">
                  <XCircle className="w-5 h-5 text-[#A63A2B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#292820]">Hao hụt nghiêm trọng tại dạ dày:</strong>
                    <span>Dịch vị acid mạnh (pH ~2.0) và muối mật tiêu diệt phần lớn lợi khuẩn trước khi tới ruột.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#292820]/85">
                  <XCircle className="w-5 h-5 text-[#A63A2B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#292820]">Không có thức ăn đi kèm:</strong>
                    <span>Lợi khuẩn đến ruột thiếu nguồn cơ chất chọn lọc, dễ bị đào thải nhanh khỏi lòng ruột.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#292820]/85">
                  <XCircle className="w-5 h-5 text-[#A63A2B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#292820]">Hiệu quả không ổn định:</strong>
                    <span>Người chăn nuôi phải bù đắp bằng liều lượng lớn, làm tăng chi phí nhưng tác dụng bấp bênh.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#292820]/10 flex items-center justify-between text-xs text-[#292820]/60">
              <span>Tỷ lệ sống sót ước tính qua dạ dày</span>
              <span className="font-bold text-[#A63A2B] text-sm">~ 18% - 30%</span>
            </div>
          </ScrollGlowCard>

          {/* Right Card: Thụy Việt Synbiotic Vi Bao */}
          <ScrollGlowCard
            glowColor="dark-gold"
            glowSpread="lg"
            variant="dark"
            className="h-full"
            cardClassName="p-8 rounded-lg bg-[#244F42] text-[#F4E8C8] border-2 border-[#D5A62E] relative flex flex-col justify-between shadow-xl h-full"
          >
            {/* Red seal tag */}
            <div className="absolute -top-3.5 right-6 bg-[#A63A2B] text-[#F4E8C8] px-3.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#D5A62E]/50 shadow-xs z-20">
              Giải pháp Thụy Việt
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D5A62E] bg-[#143128] px-3 py-1 rounded-xs flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Công nghệ vi bao + Prebiotic</span>
                </span>
                <span className="text-xs font-mono text-[#D5A62E]/60">02</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#FAF3E3] mb-3">
                THỤY VIỆT Synbiotic Vi Bao
              </h3>
              <p className="text-sm text-[#F4E8C8]/85 mb-6 leading-relaxed">
                Tổ hợp hiệp đồng: Màng vi bao sinh học che chở lợi khuẩn + 67,5% bột chuối xanh làm thức ăn nuôi dưỡng trọn vẹn.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm text-[#F4E8C8]/90">
                  <CheckCircle2 className="w-5 h-5 text-[#D5A62E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#FAF3E3]">Màng bao sinh học che chở:</strong>
                    <span>Chống chịu môi trường acid và muối mật, giải phóng chọn lọc tại vị trí ruột non / manh tràng.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#F4E8C8]/90">
                  <CheckCircle2 className="w-5 h-5 text-[#D5A62E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#FAF3E3]">Cơ chất chuối xanh nuôi dưỡng tức thì:</strong>
                    <span>Cung cấp tinh bột kháng (RS) giúp lợi khuẩn nhanh chóng định cư và tăng sinh mạnh mẽ.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#F4E8C8]/90">
                  <CheckCircle2 className="w-5 h-5 text-[#D5A62E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#FAF3E3]">Hiệu quả đồng đều, tối ưu chi phí:</strong>
                    <span>Giúp vật nuôi hấp thu thức ăn tốt hơn, nâng cao sức đề kháng tự nhiên, giảm tiêu tốn cám.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#F4E8C8]/15 flex items-center justify-between text-xs text-[#F4E8C8]/80">
              <span>Tỷ lệ sống sót ghi nhận qua mô phỏng</span>
              <span className="font-bold text-[#D5A62E] text-base">~ 85% - 92%</span>
            </div>
          </ScrollGlowCard>
        </div>
      </div>
    </section>
  );
};
