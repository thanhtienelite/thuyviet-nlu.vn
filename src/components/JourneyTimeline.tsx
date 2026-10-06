import React from 'react';
import { motion, useInView } from 'motion/react';
import { JOURNEY_TIMELINE, BRAND_INFO } from '../data/thuyVietData';
import { ASSETS } from '../data/assets';
import { DongHoCloud, DongHoSeal, WoodblockCorner } from './DongHoArt';
import { ScrollGlowCard, ScrollGlowBox } from './InteractiveLightCard';
import { Award, Flag, CheckCircle, Circle, MapPin, ArrowRight, ZoomIn } from 'lucide-react';

interface JourneyTimelineProps {
  onOpenLightbox: (imageUrl: string, caption: string) => void;
}

export const JourneyTimeline: React.FC<JourneyTimelineProps> = ({ onOpenLightbox }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="lo-trinh-phat-trien" ref={ref} className="py-24 bg-[#F4E8C8] text-[#292820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#244F42]/10 text-[#244F42] text-xs font-bold uppercase tracking-wider border border-[#244F42]/20">
            <Flag className="w-3.5 h-3.5" />
            <span>Lộ trình phát triển dự án</span>
          </div>
          <h2 className="section-title font-serif text-3xl sm:text-5xl font-black text-[#292820] tracking-tight overflow-visible">
            TỪ MỘT Ý TƯỞNG ĐẾN SẢN PHẨM ĐANG ĐƯỢC KIỂM CHỨNG
          </h2>
          <p className="text-base sm:text-lg text-[#292820]/80 leading-relaxed font-light">
            Nhìn lại những cột mốc đã vượt qua và bước chuẩn bị vững chắc cho giai đoạn mở rộng tiếp theo.
          </p>
        </div>

        {/* Competition Banner Card & We Are Here Flag */}
        <ScrollGlowBox
          glowColor="dark-gold"
          glowSpread="lg"
          className="mb-16"
        >
          <div
            className="bg-[#244F42] text-[#F4E8C8] rounded-xl p-8 sm:p-10 border-2 border-[#D5A62E] shadow-xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A63A2B] text-[#F4E8C8] text-xs font-bold uppercase tracking-wider border border-[#D5A62E]/50 shadow-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#D5A62E] animate-bounce" />
                  <span>CHÚNG TÔI ĐANG Ở ĐÂY · VÒNG CHUNG KẾT 2026</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl font-black text-[#FAF3E3]">
                  CUỘC THI KHỞI NGHIỆP NÔNG NGHIỆP 2026
                </h3>
                <p className="text-sm font-semibold uppercase tracking-widest text-[#D5A62E]">
                  Smart Agriculture & Digital Transformation
                </p>
                <p className="text-xs sm:text-sm text-[#F4E8C8]/85 leading-relaxed max-w-2xl font-light">
                  Dự án DA55 tự hào góp mặt tại vòng Chung kết, mang đến giải pháp ứng dụng công nghệ vi bao probiotic kết hợp prebiotic chuối xanh bản địa, giải quyết bài toán môi trường và nâng cao giá trị gia tăng cho ngành chăn nuôi Việt Nam.
                </p>

                {/* Organizers tag */}
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#F4E8C8]/80">
                  <div>
                    <span className="text-[#D5A62E] font-bold">Đơn vị tổ chức:</span> Trường ĐH Nông Lâm TP.HCM
                  </div>
                  <span>·</span>
                  <div>
                    <span className="text-[#D5A62E] font-bold">Tài trợ:</span> ADM & Công ty TNHH Hoàng Lam
                  </div>
                </div>
              </div>

              {/* Poster Showcase Card - Clean, Bright, No Overlays */}
              <div className="lg:col-span-4 flex justify-center">
                <div
                  onClick={() => onOpenLightbox(ASSETS.EVENT_POSTER, 'Poster Cuộc thi Khởi nghiệp Nông nghiệp 2026 – Smart Agriculture & Digital Transformation')}
                  className="w-full max-w-[280px] sm:max-w-xs bg-white rounded-xl p-2.5 sm:p-3 border-2 border-[#D5A62E] shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col"
                >
                  {/* Clean, bright image container with Paper Ivory background */}
                  <div className="w-full bg-[#FAF3E3] rounded-lg overflow-hidden flex items-center justify-center border border-[#292820]/10 p-1">
                    <img
                      src={ASSETS.EVENT_POSTER}
                      alt="Poster Cuộc thi Khởi nghiệp Nông nghiệp 2026"
                      className="w-full h-auto object-contain rounded-md transition-transform duration-300 group-hover:scale-[1.02]"
                      style={{ filter: 'brightness(1.03) contrast(1.02)' }}
                      loading="eager"
                    />
                  </div>

                  {/* Clean, bright action bar below the poster (no overlays covering the image) */}
                  <div className="mt-2.5 pt-2 border-t border-[#292820]/10 flex items-center justify-between text-[#244F42] px-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#A63A2B]">
                      <span className="w-2 h-2 rounded-full bg-[#A63A2B] animate-pulse"></span>
                      <span>Tư liệu chung kết</span>
                    </div>
                    <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#244F42] bg-[#FAF3E3] group-hover:bg-[#D5A62E] group-hover:text-[#292820] px-2.5 py-1 rounded transition-colors shadow-2xs">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Xem poster</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollGlowBox>

        {/* 10-Stage Horizontal Grid Timeline */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">
            {JOURNEY_TIMELINE.map((item, idx) => {
              const isCurrent = item.isCurrent;
              const isCompleted = item.status === 'completed';

              return (
                <ScrollGlowCard
                  key={item.id}
                  glowColor={isCurrent ? 'gold' : isCompleted ? 'jade' : 'paper'}
                  glowSpread={isCurrent ? 'md' : 'sm'}
                  className="h-full"
                  cardClassName={`p-5 rounded-lg border flex flex-col justify-between transition-all duration-300 relative h-full select-none ${
                    isCurrent
                      ? 'bg-[#FAF3E3] text-[#292820] border-2 border-[#A63A2B] shadow-lg ring-2 ring-[#D5A62E]'
                      : isCompleted
                      ? 'bg-[#FAF3E3] text-[#292820] border-2 border-[#244F42]/35 shadow-xs hover:border-[#244F42]'
                      : 'bg-[#F7F1E3] text-[#292820] border-2 border-dashed border-[#292820]/30 hover:border-[#292820]/50'
                  }`}
                >
                  {isCurrent && (
                    <div className="absolute -top-3 left-4 bg-[#A63A2B] text-[#FAF3E3] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-[#D5A62E] shadow-xs flex items-center gap-1 z-20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D5A62E] animate-ping" />
                      <span>HIỆN TẠI</span>
                    </div>
                  )}

                  <div className="flex flex-col flex-1">
                    {/* Header: Step Number & Status Icon */}
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded-xs leading-none ${
                          isCurrent
                            ? 'text-[#A63A2B] bg-[#A63A2B]/10 border border-[#A63A2B]/20'
                            : isCompleted
                            ? 'text-[#244F42] bg-[#244F42]/10 border border-[#244F42]/20'
                            : 'text-[#292820] bg-[#292820]/10 border border-[#292820]/15'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      {isCompleted ? (
                        <div className="flex items-center gap-1 text-[#244F42]">
                          <CheckCircle className="w-4 h-4 text-[#244F42]" />
                        </div>
                      ) : isCurrent ? (
                        <div className="flex items-center gap-1 text-[#A63A2B]">
                          <MapPin className="w-4 h-4 text-[#A63A2B] fill-[#D5A62E]/30 animate-bounce" />
                        </div>
                      ) : (
                        <Circle className="w-4 h-4 text-[#5B564D]/60" />
                      )}
                    </div>

                    {/* Title */}
                    <div className="min-h-[44px] flex items-start pt-1">
                      <h4
                        className={`font-serif text-sm sm:text-base font-bold leading-snug tracking-tight uppercase ${
                          isCurrent
                            ? 'text-[#A63A2B]'
                            : isCompleted
                            ? 'text-[#244F42]'
                            : 'text-[#292820]'
                        }`}
                      >
                        {item.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <div className="min-h-[68px] sm:min-h-[76px] flex items-start pt-1.5">
                      <p
                        className={`text-xs leading-relaxed ${
                          isCurrent
                            ? 'text-[#292820] font-medium'
                            : isCompleted
                            ? 'text-[#2C2924]'
                            : 'text-[#4F5E55]'
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Footer Status Badge */}
                  <div className="mt-auto pt-3 border-t border-[#292820]/15 text-[10px] uppercase font-bold tracking-wider flex items-center justify-between">
                    {isCurrent ? (
                      <span className="text-[#A63A2B] flex items-center gap-1 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A63A2B]"></span>
                        Đang bảo vệ
                      </span>
                    ) : isCompleted ? (
                      <span className="text-[#244F42] flex items-center gap-1 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#244F42]"></span>
                        Đã hoàn thành
                      </span>
                    ) : (
                      <span className="text-[#5B564D] flex items-center gap-1 font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5B564D]"></span>
                        Kế hoạch tiếp theo
                      </span>
                    )}
                  </div>
                </ScrollGlowCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
