import React from 'react';
import { motion, useInView } from 'motion/react';
import { ShieldAlert, Compass, Sparkles, ArrowRight, Lightbulb, Sprout } from 'lucide-react';
import { DongHoCloud, DongHoSeal, WoodblockCorner, PaperLightHalo, DongHoBgMotifGrid } from './DongHoArt';
import { ScrollGlowCard, ScrollGlowBox } from './InteractiveLightCard';
import { ScrollReveal, StaggerContainer, StaggerItem } from './MotionEffects';

export const TurningPoint: React.FC = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="buoc-ngoat" ref={ref} className="py-24 bg-[#FAF3E3] text-[#292820] relative overflow-hidden">
      {/* Background Dong Ho Pattern Grid */}
      <DongHoBgMotifGrid variant="light" opacity={0.04} />

      {/* Atmospheric Halos */}
      <PaperLightHalo position="top-right" variant="gold" size="lg" className="opacity-40" />
      <PaperLightHalo position="center" variant="ivory" size="xl" className="opacity-70" />

      {/* Cloud Motifs */}
      <div className="absolute top-8 left-6 opacity-15 pointer-events-none">
        <DongHoCloud className="w-56 h-28 text-[#A63A2B]" />
      </div>
      <div className="absolute bottom-6 right-8 opacity-15 pointer-events-none">
        <DongHoCloud className="w-64 h-32 text-[#244F42]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A63A2B]/10 text-[#A63A2B] text-xs font-bold uppercase tracking-widest border border-[#A63A2B]/25 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BƯỚC NGOẶT</span>
          </div>

          <h2 className="section-title font-serif text-3xl sm:text-5xl font-black text-[#292820] tracking-tight leading-[1.15]">
            Khi kháng sinh không còn là câu trả lời duy nhất
          </h2>
          
          <div className="w-16 h-1 bg-[#A63A2B] mx-auto rounded-full mt-2 opacity-80" />
        </ScrollReveal>

        {/* Core Narrative Quote / Manifesto Card */}
        <ScrollReveal variant="fade-up" delay={0.15} className="mb-14">
          <ScrollGlowCard
            variant="ivory"
            glowColor="gold"
            glowSpread="lg"
            cardClassName="p-8 sm:p-12 bg-white/90 backdrop-blur-xs rounded-2xl border-1.5 border-[#292820]/15 shadow-xl relative overflow-hidden"
          >
            {/* Traditional Corner Motifs */}
            <WoodblockCorner position="tl" className="absolute top-3 left-3 w-6 h-6 text-[#A63A2B]/40" />
            <WoodblockCorner position="tr" className="absolute top-3 right-3 w-6 h-6 text-[#A63A2B]/40" />
            <WoodblockCorner position="bl" className="absolute bottom-3 left-3 w-6 h-6 text-[#A63A2B]/40" />
            <WoodblockCorner position="br" className="absolute bottom-3 right-3 w-6 h-6 text-[#A63A2B]/40" />

            <div className="space-y-6 relative z-10 text-center max-w-3xl mx-auto">
              
              {/* Question / Problem statement */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#FAF3E3]/80 border border-[#D5A62E]/30 text-left sm:text-center">
                <p className="font-serif text-lg sm:text-2xl text-[#292820] font-semibold leading-relaxed">
                  Việc siết chặt sử dụng kháng sinh trong chăn nuôi đặt ra một bài toán mới:{' '}
                  <span className="text-[#A63A2B] block sm:inline font-bold mt-1 sm:mt-0">
                    Làm thế nào để duy trì sức khỏe vật nuôi mà vẫn giảm sự phụ thuộc vào kháng sinh?
                  </span>
                </p>
              </div>

              {/* Research Journey */}
              <p className="text-base sm:text-lg text-[#292820]/85 font-light leading-relaxed">
                Từ bài toán đó, chúng tôi bắt đầu tìm kiếm một giải pháp vừa có cơ sở khoa học, vừa tận dụng được nguồn nguyên liệu sẵn có tại Việt Nam.
              </p>

              {/* Culmination Punchline */}
              <div className="pt-4 border-t border-[#292820]/10 flex flex-col items-center justify-center gap-3">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#244F42] font-bold">
                  <DongHoSeal text="THỤY" size={24} color="#244F42" />
                  <span>CỘT MỐC ĐỊNH HÌNH SỨ MỆNH</span>
                </div>
                <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#244F42] tracking-wide">
                  Và đó là điểm khởi đầu của Thụy Việt.
                </div>
              </div>

            </div>
          </ScrollGlowCard>
        </ScrollReveal>

        {/* 3 Pillars Unpacking the Turning Point */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.09}>
          
          {/* Pillar 1: Bài toán */}
          <StaggerItem className="h-full">
            <ScrollGlowCard
              glowColor="red"
              glowSpread="md"
              className="h-full"
              cardClassName="p-6 bg-white/80 rounded-xl border border-[#292820]/10 flex flex-col justify-between h-full group hover:border-[#A63A2B]/40 transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#A63A2B]/10 flex items-center justify-center text-[#A63A2B] mb-4 group-hover:scale-105 transition-transform duration-300">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#A63A2B]">
                  Thách thức chăn nuôi
                </span>
                <h3 className="font-serif text-lg font-bold text-[#292820] mt-1 mb-2">
                  Áp lực giảm kháng sinh
                </h3>
                <p className="text-xs text-[#292820]/75 leading-relaxed font-light">
                  Quy định siết chặt kháng sinh kích thích tăng trưởng và phòng bệnh buộc người chăn nuôi phải tìm kiếm con đường an toàn sinh học bền vững.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#292820]/10 text-[11px] text-[#A63A2B] font-semibold flex items-center gap-1">
                <span>Thực tế cấp bách</span>
              </div>
            </ScrollGlowCard>
          </StaggerItem>

          {/* Pillar 2: Giải pháp */}
          <StaggerItem className="h-full">
            <ScrollGlowCard
              glowColor="gold"
              glowSpread="md"
              className="h-full"
              cardClassName="p-6 bg-white/80 rounded-xl border border-[#292820]/10 flex flex-col justify-between h-full group hover:border-[#D5A62E]/50 transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#D5A62E]/15 flex items-center justify-center text-[#D5A62E] mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Lightbulb className="w-5 h-5 text-[#9E7317]" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#9E7317]">
                  Cơ sở khoa học
                </span>
                <h3 className="font-serif text-lg font-bold text-[#292820] mt-1 mb-2">
                  Nguyên liệu bản địa
                </h3>
                <p className="text-xs text-[#292820]/75 leading-relaxed font-light">
                  Chuối xanh bản địa giàu tinh bột kháng Prebiotic – nguồn thức ăn chọn lọc cho lợi khuẩn, kết hợp công nghệ vi bao bảo vệ Probiotic sống sót.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#292820]/10 text-[11px] text-[#9E7317] font-semibold flex items-center gap-1">
                <span>Trí tuệ nông nghiệp Việt</span>
              </div>
            </ScrollGlowCard>
          </StaggerItem>

          {/* Pillar 3: Khởi đầu */}
          <StaggerItem className="h-full">
            <ScrollGlowCard
              glowColor="jade"
              glowSpread="md"
              className="h-full"
              cardClassName="p-6 bg-white/80 rounded-xl border border-[#292820]/10 flex flex-col justify-between h-full group hover:border-[#244F42]/50 transition-all duration-300 shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#244F42]/10 flex items-center justify-center text-[#244F42] mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Sprout className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#244F42]">
                  Khởi nguyên dự án
                </span>
                <h3 className="font-serif text-lg font-bold text-[#292820] mt-1 mb-2">
                  Thụy Việt ra đời
                </h3>
                <p className="text-xs text-[#292820]/75 leading-relaxed font-light">
                  Một công thức Synbiotic hoàn chỉnh bảo vệ trọn vẹn đường ruột vật nuôi, kiến tạo chuỗi giá trị chăn nuôi tuần hoàn không phụ thuộc kháng sinh.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#292820]/10 text-[11px] text-[#244F42] font-semibold flex items-center gap-1">
                <span>Giải pháp tương lai</span>
              </div>
            </ScrollGlowCard>
          </StaggerItem>

        </StaggerContainer>

      </div>
    </section>
  );
};
