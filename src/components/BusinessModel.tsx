import React, { useState } from 'react';
import { BUSINESS_METRICS } from '../data/thuyVietData';
import { DongHoCloud, DongHoSeal, WoodblockCorner } from './DongHoArt';
import { ScrollGlowCard, ScrollGlowBox } from './InteractiveLightCard';
import { Briefcase, TrendingUp, DollarSign, Calculator, Target, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

export const BusinessModel: React.FC = () => {
  const [showDeepDive, setShowDeepDive] = useState<boolean>(false);

  return (
    <section id="kinh-doanh" className="py-24 bg-[#F4E8C8] text-[#292820] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A63A2B]/10 text-[#A63A2B] text-xs font-bold uppercase tracking-wider border border-[#A63A2B]/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Mô hình kinh doanh B2B & Kế hoạch tài chính</span>
          </div>
          <h2 className="section-title font-serif text-3xl sm:text-5xl font-black text-[#292820] tracking-tight overflow-visible">
            THỤY VIỆT CÓ THỂ TRỞ THÀNH MỘT DOANH NGHIỆP?
          </h2>
          <p className="text-base sm:text-lg text-[#292820]/80 leading-relaxed font-light">
            Định hướng thương mại hóa sản phẩm THỤY VIỆT FEED với cơ cấu giá cạnh tranh, giải quyết bài toán kinh tế trực tiếp cho người chăn nuôi.
          </p>
        </div>

        {/* 6 Key Financial Indicators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          
          {/* 1. Price */}
          <ScrollGlowCard
            glowColor="jade"
            glowSpread="sm"
            cardClassName="bg-[#FAF3E3] p-6 rounded-lg border border-[#292820]/15 hover:border-[#244F42] transition-all shadow-xs h-full"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#A63A2B] mb-1">
              Giá bán dự kiến (B2B)
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-black text-[#244F42]">
              {BUSINESS_METRICS.pricePerKg}
            </div>
            <p className="text-xs text-[#292820]/70 mt-2">
              Định vị cạnh tranh so với các dòng men vi sinh & prebiotic nhập khẩu.
            </p>
          </ScrollGlowCard>

          {/* 2. Cost per Ton Feed */}
          <ScrollGlowCard
            glowColor="gold"
            glowSpread="sm"
            cardClassName="bg-[#FAF3E3] p-6 rounded-lg border border-[#292820]/15 hover:border-[#244F42] transition-all shadow-xs h-full"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#A63A2B] mb-1">
              Chi phí / Tấn thức ăn
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-black text-[#292820]">
              {BUSINESS_METRICS.costPerTonFeed}
            </div>
            <p className="text-xs text-[#292820]/70 mt-2 font-medium">
              {BUSINESS_METRICS.costDosageNote} (bù trừ bằng lượng thức ăn tiết kiệm do giảm FCR).
            </p>
          </ScrollGlowCard>

          {/* 3. Startup Capital */}
          <ScrollGlowCard
            glowColor="red"
            glowSpread="sm"
            cardClassName="bg-[#FAF3E3] p-6 rounded-lg border border-[#292820]/15 hover:border-[#244F42] transition-all shadow-xs h-full"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#A63A2B] mb-1">
              Vốn khởi động ước tính
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-black text-[#A63A2B]">
              {BUSINESS_METRICS.startupCapital}
            </div>
            <p className="text-xs text-[#292820]/70 mt-2">
              Trang thiết bị sấy, nghiền, thiết bị vi bao sinh học và vốn lưu động ban đầu.
            </p>
          </ScrollGlowCard>

          {/* 4. Year 1 Targets */}
          <ScrollGlowCard
            glowColor="gold"
            glowSpread="sm"
            cardClassName="bg-[#FAF3E3] p-6 rounded-lg border border-[#292820]/15 hover:border-[#244F42] transition-all shadow-xs h-full"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#244F42] mb-1">
              Mục tiêu Năm 1 (Sản lượng)
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-black text-[#292820]">
              {BUSINESS_METRICS.year1Target}
            </div>
            <div className="text-xs text-[#A63A2B] font-bold mt-2">
              Doanh thu dự phóng: {BUSINESS_METRICS.year1Revenue}
            </div>
          </ScrollGlowCard>

          {/* 5. Break-Even */}
          <ScrollGlowCard
            glowColor="gold"
            glowSpread="sm"
            cardClassName="bg-[#FAF3E3] p-6 rounded-lg border border-[#292820]/15 hover:border-[#244F42] transition-all shadow-xs h-full"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#244F42] mb-1">
              Điểm hòa vốn sản lượng
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-black text-[#D5A62E]">
              {BUSINESS_METRICS.breakEven}
            </div>
            <p className="text-xs text-[#292820]/70 mt-2">
              Tương đương cung ứng định kỳ cho ~15-20 trang trại gia cầm quy mô vừa.
            </p>
          </ScrollGlowCard>

          {/* 6. Year 3 Scale */}
          <ScrollGlowCard
            glowColor="jade"
            glowSpread="sm"
            cardClassName="bg-[#FAF3E3] p-6 rounded-lg border border-[#292820]/15 hover:border-[#244F42] transition-all shadow-xs h-full"
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#244F42] mb-1">
              Mục tiêu Tăng trưởng Năm 3
            </div>
            <div className="font-serif text-3xl sm:text-4xl font-black text-[#244F42]">
              {BUSINESS_METRICS.year3Target}
            </div>
            <div className="text-xs text-[#244F42] font-bold mt-2">
              Doanh thu ước tính ≈ 5,07 tỷ VNĐ
            </div>
          </ScrollGlowCard>

        </div>

        {/* Target Segments & Value Proposition Box */}
        <ScrollGlowBox
          glowColor="gold"
          glowSpread="lg"
          className="max-w-5xl mx-auto mb-8"
        >
          <div className="bg-[#FAF3E3] rounded-xl dongho-frame p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#A63A2B]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A63A2B]">
                    Phân khúc khách hàng mục tiêu (B2B)
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#292820]">
                  Cung ứng trực tiếp cho hệ sinh thái chăn nuôi
                </h3>

                <div className="space-y-2.5 pt-1">
                  {BUSINESS_METRICS.targetCustomers.map((cust, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#292820]/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#244F42] mt-2 shrink-0"></span>
                      <span>{cust}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-5 bg-[#F4E8C8]/70 p-6 rounded-lg border border-[#292820]/15 text-center space-y-3">
                <DongHoSeal text="THỤY VIỆT FEED" subText="DA55 B2B" />
                <div className="text-xs text-[#292820]/80 leading-relaxed font-medium">
                  Tối ưu bài toán kinh tế: Tiết kiệm chi phí thức ăn nhờ giảm FCR 8,1% cao hơn chi phí bổ sung chế phẩm synbiotic.
                </div>
                <button
                  onClick={() => setShowDeepDive(!showDeepDive)}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#A63A2B] hover:underline pt-1 cursor-pointer"
                >
                  <span>{showDeepDive ? 'Thu gọn lộ trình tài chính' : 'Xem chi tiết dự phóng 3 năm'}</span>
                  {showDeepDive ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

            </div>

            {/* Expandable Financial Deep Dive Table */}
            {showDeepDive && (
              <div className="mt-8 pt-6 border-t border-[#292820]/15 animate-in fade-in">
                <h4 className="font-serif font-bold text-base text-[#292820] mb-4">
                  Kế hoạch sản lượng và doanh thu 3 năm đầu (Dự phóng):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {BUSINESS_METRICS.productionPlan.map((plan, i) => (
                    <div key={i} className="p-4 rounded bg-[#F4E8C8] border border-[#292820]/15">
                      <div className="text-xs font-mono font-bold text-[#A63A2B]">{plan.year}</div>
                      <div className="font-serif text-xl font-black text-[#244F42] mt-1">{plan.volume}</div>
                      <div className="text-xs font-semibold text-[#292820]/80 mt-1">{plan.revenue}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollGlowBox>

        {/* Scientific / Commercial Disclaimer */}
        <div className="max-w-4xl mx-auto flex items-start gap-2.5 text-xs text-[#292820]/70 italic p-3 bg-[#FAF3E3]/60 rounded border border-[#292820]/10">
          <AlertCircle className="w-4 h-4 text-[#A63A2B] shrink-0 mt-0.5" />
          <span>
            {BUSINESS_METRICS.note}
          </span>
        </div>

      </div>
    </section>
  );
};
