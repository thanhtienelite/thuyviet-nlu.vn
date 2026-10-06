import React from 'react';
import { MARKET_SURVEY_SECTIONS } from '../data/thuyVietData';
import { DongHoCloud, DongHoSeal } from './DongHoArt';
import { ScrollGlowCard, ScrollGlowBox } from './InteractiveLightCard';
import { ClipboardList, Clock, HelpCircle, CheckCircle, FileText } from 'lucide-react';

export const MarketSurvey: React.FC = () => {
  return (
    <section id="khao-sat-thi-truong" className="py-24 bg-[#FAF3E3] text-[#292820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#244F42]/10 text-[#244F42] text-xs font-bold uppercase tracking-wider border border-[#244F42]/20">
            <ClipboardList className="w-3.5 h-3.5" />
            <span>Khảo sát thị trường & Khách hàng mục tiêu</span>
          </div>
          <h2 className="section-title font-serif text-3xl sm:text-5xl font-black text-[#292820] tracking-tight overflow-visible">
            THỊ TRƯỜNG NÓI GÌ?
          </h2>
          <p className="text-base sm:text-lg text-[#292820]/80 leading-relaxed font-light">
            Cấu trúc khung dữ liệu lắng nghe ý kiến phản hồi thực tế từ các chủ trang trại, hợp tác xã chăn nuôi và đại lý thức ăn gia súc.
          </p>
        </div>

        {/* Structured 5 Survey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {MARKET_SURVEY_SECTIONS.map((section, idx) => (
            <ScrollGlowCard
              key={section.id}
              glowColor={idx === 0 ? 'red' : idx === 1 ? 'jade' : idx === 2 ? 'gold' : 'dark-gold'}
              glowSpread="sm"
              className={idx === 0 ? 'md:col-span-2 lg:col-span-1 h-full' : 'h-full'}
              cardClassName={`p-6 rounded-lg border flex flex-col justify-between transition-all h-full ${
                idx === 0
                  ? 'bg-[#F4E8C8] border-[#A63A2B]/40 shadow-md'
                  : 'bg-[#F4E8C8]/60 border-[#292820]/15'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-[#A63A2B] bg-[#A63A2B]/10 px-2 py-0.5 rounded-xs">
                    MỤC 0{idx + 1}
                  </span>
                  <span className="text-xs text-[#292820]/60 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#D5A62E]" />
                    <span>Đang cập nhật</span>
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#292820]">
                  {section.title}
                </h3>
                <h4 className="text-xs font-semibold text-[#244F42] uppercase tracking-wide mt-1">
                  {section.subtitle}
                </h4>

                <p className="text-xs text-[#292820]/75 mt-3 leading-relaxed">
                  {section.desc}
                </p>
              </div>

              {/* Placeholder Box */}
              <div className="mt-6 pt-4 border-t border-dashed border-[#292820]/20">
                <div className="p-3 bg-[#FAF3E3] rounded border border-dashed border-[#292820]/30 text-center">
                  <div className="text-[11px] font-bold text-[#A63A2B] uppercase tracking-wider flex items-center justify-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>{section.placeholder}</span>
                  </div>
                  <div className="text-[10px] text-[#292820]/60 mt-0.5">
                    Đang tiến hành phỏng vấn sâu tại trại
                  </div>
                </div>
              </div>
            </ScrollGlowCard>
          ))}
        </div>

        {/* Survey Methodology Note */}
        <ScrollGlowBox
          glowColor="dark-gold"
          glowSpread="md"
          className="max-w-4xl mx-auto"
        >
          <div className="p-6 rounded-lg bg-[#244F42] text-[#F4E8C8] border border-[#D5A62E]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-serif text-lg font-bold text-[#FAF3E3]">
                Phương pháp khảo sát tiếp cận thực địa
              </h4>
              <p className="text-xs text-[#F4E8C8]/80">
                Nhóm nghiên cứu áp dụng bảng câu hỏi trực tiếp và mẫu thử sản phẩm (sampling) để thu nhận dữ liệu định lượng và định tính chính xác nhất.
              </p>
            </div>
            <DongHoSeal text="DA55" subText="SURVEY" className="shrink-0 bg-[#1A332B] border-[#D5A62E] text-[#D5A62E]" />
          </div>
        </ScrollGlowBox>

      </div>
    </section>
  );
};
