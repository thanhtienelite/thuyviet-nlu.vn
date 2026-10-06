import React from 'react';
import { useInView } from 'motion/react';
import { TEAM_MEMBERS } from '../data/thuyVietData';
import { ASSETS } from '../data/assets';
import { DongHoSeal } from './DongHoArt';
import { NluLogo } from './BrandLogos';
import { ScrollGlowCard, ScrollGlowBox } from './InteractiveLightCard';
import { Users, GraduationCap, QrCode, Eye } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './MotionEffects';

interface TeamSectionProps {
  onOpenLightbox: (imageUrl: string, caption: string) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenLightbox }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="doi-ngu" ref={ref} className="py-24 bg-[#FAF3E3] text-[#292820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A63A2B]/10 text-[#A63A2B] text-xs font-bold uppercase tracking-wider border border-[#A63A2B]/20">
            <Users className="w-3.5 h-3.5" />
            <span>Đội ngũ sáng lập liên ngành</span>
          </div>
          <h2 className="section-title font-serif text-3xl sm:text-5xl font-black text-[#292820] tracking-tight overflow-visible">
            4 CON NGƯỜI. 4 CHUYÊN NGÀNH. 1 BÀI TOÁN.
          </h2>
          <p className="text-base sm:text-lg text-[#292820]/80 leading-relaxed font-light">
            Sức mạnh hội tụ từ 4 khối kiến thức chuyên sâu tại Trường Đại học Nông Lâm TP.HCM để tạo nên giải pháp hoàn chỉnh cho chăn nuôi.
          </p>
        </ScrollReveal>

        {/* Interdisciplinary Formula Callout */}
        <ScrollReveal variant="fade-up" delay={0.1}>
          <ScrollGlowBox
            glowColor="dark-gold"
            glowSpread="md"
            className="mb-14 max-w-4xl mx-auto"
          >
            <div
              className="p-6 rounded-lg bg-[#244F42] text-[#F4E8C8] border-2 border-[#D5A62E]/50 shadow-md text-center dongho-edge-light"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-[#D5A62E] mb-2">
                Công thức liên ngành Thụy Việt
              </div>
              <div className="font-serif text-lg sm:text-2xl font-bold text-[#FAF3E3] flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <span className="text-[#D5A62E]">Animal Health</span>
                <span className="text-[#F4E8C8]/60">×</span>
                <span className="text-[#D5A62E]">Chemistry</span>
                <span className="text-[#F4E8C8]/60">×</span>
                <span className="text-[#D5A62E]">Agronomy</span>
                <span className="text-[#F4E8C8]/60">×</span>
                <span className="text-[#D5A62E]">Aquaculture</span>
                <span className="text-[#F4E8C8]/60">=</span>
                <span className="text-[#FAF3E3] font-black underline decoration-[#A63A2B] decoration-2">THỤY VIỆT</span>
              </div>
            </div>
          </ScrollGlowBox>
        </ScrollReveal>

        {/* 4 Team Member Cards with Stagger and ScrollGlowCard */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16" staggerDelay={0.08}>
          {TEAM_MEMBERS.map((member, idx) => {
            const hasRealImage = member.image && !member.image.includes('placeholder');
            return (
              <StaggerItem key={member.id} className="h-full">
                <ScrollGlowCard
                  variant="paper"
                  glowColor={idx === 0 ? 'red' : idx === 1 ? 'jade' : idx === 2 ? 'gold' : 'dark-gold'}
                  glowSpread="md"
                  className="h-full"
                  cardClassName="p-5 flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Member Photo Frame */}
                    <div
                      onClick={() => {
                        if (hasRealImage) {
                          onOpenLightbox(member.image, `${member.name} – ${member.major} (Trường ĐH Nông Lâm TP.HCM)`);
                        }
                      }}
                      className={`relative rounded-md overflow-hidden aspect-[4/5] mb-4 border border-[#292820]/20 bg-white ${
                        hasRealImage ? 'cursor-pointer' : ''
                      }`}
                    >
                      {hasRealImage ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover dongho-crisp-img group-hover:scale-105 group-hover:brightness-[1.06] transition-all duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center text-[#244F42] bg-[#FAF3E3]">
                          <GraduationCap className="w-12 h-12 text-[#D5A62E] mb-2 opacity-80" />
                          <span className="font-serif text-sm font-bold text-[#292820]">{member.name}</span>
                          <span className="text-[10px] text-[#292820]/70 mt-1">{member.major}</span>
                        </div>
                      )}

                      <div className="absolute top-2 left-2">
                        <DongHoSeal text="DA55" subText={`0${idx + 1}`} className="bg-[#A63A2B] text-[#F4E8C8] border-none py-0.5 px-1.5 text-[8px] shadow-xs" />
                      </div>
                    </div>

                    {/* Info */}
                    <h3 className="font-serif text-lg font-bold text-[#292820] leading-snug group-hover:text-[#A63A2B] transition-colors">
                      {member.name}
                    </h3>
                    <div className="text-xs font-bold text-[#244F42] uppercase tracking-wide mt-1">
                      {member.major}
                    </div>
                    <div className="text-[11px] text-[#292820]/70 mt-1 flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-[#A63A2B] shrink-0" />
                      <span>{member.institution}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#292820]/15 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center justify-between text-[10px] text-[#292820]/60 uppercase tracking-wider mb-1 font-mono">
                        <span>Vai trò dự án</span>
                        <span className="font-bold text-[#A63A2B] bg-[#A63A2B]/10 px-1.5 py-0.2 rounded-xs">DA55</span>
                      </div>
                      <div className="font-bold text-[#244F42] uppercase text-xs tracking-tight leading-snug min-h-[32px] flex items-center">
                        {member.role || 'Đang cập nhật'}
                      </div>
                    </div>

                    {member.roleDetails && member.roleDetails.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-dashed border-[#292820]/15 space-y-1">
                        {member.roleDetails.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-1.5 text-[11px] text-[#292820]/80 group-hover:text-[#292820] transition-colors">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D5A62E] shrink-0 mt-1" />
                            <span className="leading-tight">{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </ScrollGlowCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Project Representative QR & Institution Banner */}
        <ScrollReveal variant="fade-up" delay={0.2} className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto items-stretch">
          {/* Representative QR Quick Connect */}
          <ScrollGlowBox
            glowColor="gold"
            glowSpread="sm"
            className="lg:col-span-5 h-full"
          >
            <div className="bg-[#FAF3E3] border border-[#292820]/15 rounded-lg p-5 flex items-center gap-4 shadow-xs dongho-edge-light h-full">
              <div
                onClick={() => onOpenLightbox(ASSETS.QR_REPRESENTATIVE, 'Mã QR Người đại diện dự án THỤY VIỆT (DA55) – Quét kết nối nhanh')}
                className="w-20 h-20 sm:w-22 sm:h-22 bg-white p-1.5 rounded-md border-2 border-[#D5A62E] shrink-0 shadow-sm cursor-pointer group relative overflow-hidden flex items-center justify-center hover:border-[#A63A2B] transition-all"
                title="Nhấn để phóng to mã QR"
              >
                <img
                  src={ASSETS.QR_REPRESENTATIVE}
                  alt="Mã QR Người đại diện dự án Thụy Việt DA55"
                  className="w-full h-full object-contain dongho-crisp-img group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#244F42]/85 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[9px] font-bold p-1 text-center">
                  <Eye className="w-4 h-4 mb-0.5 text-[#D5A62E]" />
                  <span>Phóng to</span>
                </div>
              </div>
              <div className="text-left space-y-1">
                <div className="inline-flex items-center gap-1 bg-[#A63A2B] text-[#FAF3E3] text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  <QrCode className="w-2.5 h-2.5" /> Đại diện DA55
                </div>
                <h4 className="font-serif font-bold text-sm text-[#292820] leading-tight">
                  Mã QR Người Đại Diện
                </h4>
                <p className="text-[11px] text-[#292820]/75 leading-snug">
                  Quét mã để liên hệ trực tiếp với nhóm nghiên cứu dự án.
                </p>
              </div>
            </div>
          </ScrollGlowBox>

          {/* Institution Verification Stamp Banner */}
          <ScrollGlowBox
            glowColor="jade"
            glowSpread="sm"
            className="lg:col-span-7 h-full"
          >
            <div className="bg-[#FAF3E3] border border-[#292820]/15 rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs dongho-edge-light h-full">
              <div className="flex items-center gap-4">
                <NluLogo className="h-12 sm:h-14 w-auto shrink-0" />
                <div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-[#244F42]">
                    Trường Đại học Nông Lâm TP.HCM
                  </h4>
                  <p className="text-xs text-[#292820]/75 mt-0.5">
                    Cái nôi đào tạo và nghiên cứu khoa học Nông - Lâm - Ngư nghiệp hàng đầu khu vực phía Nam (Thành lập năm 1955).
                  </p>
                </div>
              </div>
              <DongHoSeal text="NLU 1955" subText="DA55" className="shrink-0" />
            </div>
          </ScrollGlowBox>
        </ScrollReveal>
      </div>
    </section>
  );
};
