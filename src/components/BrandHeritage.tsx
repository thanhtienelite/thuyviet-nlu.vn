import React, { useState } from 'react';
import { HERITAGE_COLORS } from '../data/thuyVietData';
import { ASSETS } from '../data/assets';
import { DongHoSeal, DongHoBgMotifGrid, PaperLightHalo } from './DongHoArt';
import { ScrollGlowCard, ScrollGlowBox } from './InteractiveLightCard';
import { Palette, Check } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './MotionEffects';

interface BrandHeritageProps {
  onOpenLightbox: (imageUrl: string, caption: string) => void;
}

export const BrandHeritage: React.FC<BrandHeritageProps> = ({ onOpenLightbox }) => {
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const activeColor = HERITAGE_COLORS[selectedColor];

  return (
    <section id="cau-chuyen" className="py-24 bg-[#F4E8C8] text-[#292820] relative overflow-hidden">
      {/* Background Dong Ho Pattern Grid */}
      <DongHoBgMotifGrid variant="light" opacity={0.045} />

      {/* Radiant Paper Halo */}
      <PaperLightHalo position="top-left" variant="ivory" size="xl" className="opacity-80" />
      <PaperLightHalo position="bottom-right" variant="gold" size="lg" className="opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with ScrollReveal */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A63A2B]/10 text-[#A63A2B] text-xs font-bold uppercase tracking-wider border border-[#A63A2B]/20">
            <Palette className="w-3.5 h-3.5" />
            <span>Bản sắc & Mỹ học Đông Hồ</span>
          </div>
          <h2 className="heritage-title section-title font-serif text-3xl sm:text-5xl font-black text-[#292820] tracking-tight overflow-visible">
            MÀI NGỌC TỪ ĐẤT VIỆT
          </h2>
          <p className="text-base sm:text-lg text-[#292820]/80 leading-relaxed font-light">
            Thụy Việt mang triết lý kết tinh tinh hoa từ đất mẹ. Hệ màu nhận diện của chúng tôi bắt nguồn từ 5 sắc màu tự nhiên của dòng tranh khắc gỗ dân gian Đông Hồ.
          </p>
        </ScrollReveal>

        {/* 5 Traditional Colors Interactive Palette */}
        <ScrollReveal variant="fade-up" delay={0.1}>
          <ScrollGlowBox
            glowColor="red"
            glowSpread="lg"
            className="mb-16"
          >
            <div className="bg-[#FAF3E3] rounded-xl dongho-frame p-6 sm:p-10 shadow-lg">
              
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#292820]/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A63A2B]">
                    Ngũ sắc Đông Hồ ứng dụng trong thương hiệu
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292820]">
                    {activeColor.name} — {activeColor.meaning}
                  </h3>
                </div>
                <DongHoSeal text="NGŨ SẮC" subText="ĐÔNG HỒ" />
              </div>

              {/* Color Swatches Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 my-8">
                {HERITAGE_COLORS.map((color, idx) => {
                  const isSelected = selectedColor === idx;
                  return (
                    <button
                      key={color.id}
                      onClick={() => setSelectedColor(idx)}
                      className={`p-4 rounded-lg text-left transition-all duration-300 cursor-pointer border relative overflow-hidden group ${
                        isSelected
                          ? 'shadow-md ring-2 ring-[#A63A2B] scale-[1.02]'
                          : 'hover:scale-[1.01]'
                      }`}
                      style={{
                        backgroundColor: color.hex,
                        borderColor: color.borderHex
                      }}
                    >
                      <div
                        className={`text-xs font-mono font-bold uppercase ${
                          color.id === 'trang-diep' ? 'text-[#292820]' : 'text-[#F4E8C8]'
                        }`}
                      >
                        {color.hex}
                      </div>
                      <div
                        className={`font-serif font-bold text-sm sm:text-base mt-2 ${
                          color.id === 'trang-diep' ? 'text-[#292820]' : 'text-[#FAF3E3]'
                        }`}
                      >
                        {color.name}
                      </div>

                      {isSelected && (
                        <div className="absolute top-2 right-2">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              color.id === 'trang-diep'
                                ? 'bg-[#A63A2B] text-[#F4E8C8]'
                                : 'bg-[#FAF3E3] text-[#292820]'
                            }`}
                          >
                            <Check className="w-3 h-3" />
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Active Color Narrative Card */}
              <div className="p-6 rounded-lg bg-[#F4E8C8]/60 border border-[#292820]/15 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-4 h-4 rounded-full border border-black/20"
                      style={{ backgroundColor: activeColor.hex }}
                    ></span>
                    <span className="font-bold text-sm text-[#292820]">
                      Ý nghĩa triết lý của màu {activeColor.name}:
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#292820]/85 leading-relaxed">
                    {activeColor.desc}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="text-xs font-mono text-[#292820]/60 uppercase">Mã màu nhận diện</span>
                  <div className="font-serif text-2xl font-bold text-[#A63A2B]">{activeColor.hex}</div>
                </div>
              </div>

            </div>
          </ScrollGlowBox>
        </ScrollReveal>

        {/* Real Packaging Prototype Gallery */}
        <div className="space-y-6">
          <ScrollReveal variant="fade-up" className="flex items-center justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-[#292820]">
                Mẫu bao bì thương phẩm THỤY VIỆT FEED
              </h3>
              <p className="text-xs text-[#292820]/70 mt-0.5">
                Thiết kế kết hợp đồ họa hiện đại và phong vị truyền thống Đông Hồ
              </p>
            </div>
            <span className="text-xs font-bold text-[#244F42] uppercase tracking-wider hidden sm:inline">
              Quy cách 1kg / Túi zip / Hộp trưng bày
            </span>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.07}>
            
            {/* 1. Hero Box 3D with Powder & Banana */}
            <StaggerItem className="h-full">
              <ScrollGlowCard
                glowColor="red"
                glowSpread="sm"
                className="h-full"
                cardClassName="dongho-gallery-frame group cursor-pointer h-full transition-all duration-300"
                onClick={() => onOpenLightbox(ASSETS.PRODUCT_HERO, 'Bao bì thương phẩm THỤY VIỆT FEED: Hộp 1kg, bột chuối xanh vi bao & lát chuối tươi')}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-md border border-[#292820]/15 bg-white">
                  <img
                    src={ASSETS.PRODUCT_HERO}
                    alt="Bao bì thương phẩm Thụy Việt Feed 1kg cùng bột và lát chuối"
                    className="w-full h-full object-cover dongho-crisp-img group-hover:scale-[1.035] group-hover:brightness-[1.05] transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#A63A2B] mb-1">
                    <span>HỘP THƯƠNG PHẨM 1KG</span>
                    <span className="text-[#244F42]">DA55</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#292820] group-hover:text-[#A63A2B] transition-colors">
                    Hộp carton kraft & Bột Synbiotic
                  </h4>
                  <p className="text-xs text-[#292820]/75 mt-1 leading-relaxed">
                    Thiết kế nhận diện Đông Hồ độc bản kết hợp công nghệ vi bao màng sinh học.
                  </p>
                </div>
              </ScrollGlowCard>
            </StaggerItem>

            {/* 2. Flatlay Full Collection */}
            <StaggerItem className="h-full">
              <ScrollGlowCard
                glowColor="jade"
                glowSpread="sm"
                className="h-full"
                cardClassName="dongho-gallery-frame group cursor-pointer h-full transition-all duration-300"
                onClick={() => onOpenLightbox(ASSETS.PRODUCT_LIFESTYLE, 'Trọn bộ thương phẩm Thụy Việt: Hộp carton, Hũ lab nắp gỗ, Túi zip, Bột & Nải chuối xanh')}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-md border border-[#292820]/15 bg-white">
                  <img
                    src={ASSETS.PRODUCT_LIFESTYLE}
                    alt="Trọn bộ hệ sinh thái sản phẩm Thụy Việt"
                    className="w-full h-full object-cover dongho-crisp-img group-hover:scale-[1.035] group-hover:brightness-[1.05] transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#244F42] mb-1">
                    <span>HỆ SINH THÁI BAO BÌ</span>
                    <span className="text-[#D5A62E]">Full Set</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#292820] group-hover:text-[#244F42] transition-colors">
                    Bộ sản phẩm & Nguyên liệu tự nhiên
                  </h4>
                  <p className="text-xs text-[#292820]/75 mt-1 leading-relaxed">
                    Đầy đủ quy cách đóng gói hộp, hũ phòng lab, túi zip và nải chuối xanh nguyên bản.
                  </p>
                </div>
              </ScrollGlowCard>
            </StaggerItem>

            {/* 3. Studio Box 1kg */}
            <StaggerItem className="h-full">
              <ScrollGlowCard
                glowColor="red"
                glowSpread="sm"
                className="h-full"
                cardClassName="dongho-gallery-frame group cursor-pointer h-full transition-all duration-300"
                onClick={() => onOpenLightbox(ASSETS.PRODUCT_PACKAGING_BOX, 'Mẫu thương phẩm THỤY VIỆT FEED 1kg trên nền studio')}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-md border border-[#292820]/15 bg-white">
                  <img
                    src={ASSETS.PRODUCT_PACKAGING_BOX}
                    alt="Mẫu thương phẩm Thụy Việt Feed 1kg"
                    className="w-full h-full object-cover dongho-crisp-img group-hover:scale-[1.035] group-hover:brightness-[1.05] transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#A63A2B] mb-1">
                    <span>QUY CÁCH 1KG CHUẨN</span>
                    <span className="text-[#244F42]">Trang trại</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#292820] group-hover:text-[#A63A2B] transition-colors">
                    Mẫu thương phẩm Thụy Việt Feed 1kg
                  </h4>
                  <p className="text-xs text-[#292820]/75 mt-1 leading-relaxed">
                    Hộp bao bì kraft tiêu chuẩn in họa tiết Đông Hồ và hướng dẫn liều dùng.
                  </p>
                </div>
              </ScrollGlowCard>
            </StaggerItem>

            {/* 4. Jar & Pouch Duo Studio */}
            <StaggerItem className="h-full">
              <ScrollGlowCard
                glowColor="jade"
                glowSpread="sm"
                className="h-full"
                cardClassName="dongho-gallery-frame group cursor-pointer h-full transition-all duration-300"
                onClick={() => onOpenLightbox(ASSETS.PRODUCT_PACKAGING_POUCH, 'Bộ đôi Hũ LAB & Túi Zip tiện dụng bảo quản chế phẩm vi sinh')}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-md border border-[#292820]/15 bg-white">
                  <img
                    src={ASSETS.PRODUCT_PACKAGING_POUCH}
                    alt="Hũ LAB & Túi Zip Thụy Việt"
                    className="w-full h-full object-cover dongho-crisp-img group-hover:scale-[1.035] group-hover:brightness-[1.05] transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#244F42] mb-1">
                    <span>HŨ LAB & TÚI ZIP</span>
                    <span className="text-[#D5A62E]">Sample Pack</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#292820] group-hover:text-[#244F42] transition-colors">
                    Hũ LAB & Túi Zip tiện dụng
                  </h4>
                  <p className="text-xs text-[#292820]/75 mt-1 leading-relaxed">
                    Màng nhôm chống ẩm kín khí, tối ưu bảo quản vi sinh sống và phân phát mẫu dùng thử.
                  </p>
                </div>
              </ScrollGlowCard>
            </StaggerItem>

            {/* 5. Flatlay with Đông Hồ Cards */}
            <StaggerItem className="h-full">
              <ScrollGlowCard
                glowColor="gold"
                glowSpread="sm"
                className="h-full"
                cardClassName="dongho-gallery-frame group cursor-pointer h-full transition-all duration-300"
                onClick={() => onOpenLightbox(ASSETS.PRODUCT_FLATLAY, 'Phong vị Đông Hồ: Bố cục nghệ thuật bao bì Thụy Việt cùng tranh vẽ dân gian')}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-md border border-[#292820]/15 bg-white">
                  <img
                    src={ASSETS.PRODUCT_FLATLAY}
                    alt="Phong vị Đông Hồ trên bao bì Thụy Việt"
                    className="w-full h-full object-cover dongho-crisp-img group-hover:scale-[1.035] group-hover:brightness-[1.05] transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#D5A62E] mb-1">
                    <span>PHONG VỊ ĐÔNG HỒ</span>
                    <span className="text-[#A63A2B]">Bản sắc Việt</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#292820] group-hover:text-[#A63A2B] transition-colors">
                    Phong vị Đông Hồ & Nghệ thuật bao bì
                  </h4>
                  <p className="text-xs text-[#292820]/75 mt-1 leading-relaxed">
                    Họa tiết Gà - Lợn - Bò Đông Hồ truyền tải thông điệp nông nghiệp xanh bền vững.
                  </p>
                </div>
              </ScrollGlowCard>
            </StaggerItem>

            {/* 6. Synbiotic Powder Bowl Studio */}
            <StaggerItem className="h-full">
              <ScrollGlowCard
                glowColor="dark-gold"
                glowSpread="sm"
                className="h-full"
                cardClassName="dongho-gallery-frame group cursor-pointer h-full transition-all duration-300"
                onClick={() => onOpenLightbox(ASSETS.PRODUCT_POWDER, 'Bột nguyên bản: Thể chất bột Synbiotic tơi mịn, màu sáng tự nhiên, giữ trọn vi chất')}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-md border border-[#292820]/15 bg-white">
                  <img
                    src={ASSETS.PRODUCT_POWDER}
                    alt="Bột nguyên bản Thụy Việt Feed"
                    className="w-full h-full object-cover dongho-crisp-img group-hover:scale-[1.035] group-hover:brightness-[1.05] transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-3.5">
                  <div className="flex items-center justify-between text-xs font-bold text-[#D5A62E] mb-1">
                    <span>BỘT NGUYÊN BẢN</span>
                    <span className="text-[#244F42]">100% Tự nhiên</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#292820] group-hover:text-[#244F42] transition-colors">
                    Bột nguyên bản giàu tinh bột kháng
                  </h4>
                  <p className="text-xs text-[#292820]/75 mt-1 leading-relaxed">
                    Thể chất bột tơi xốp, màu sáng tự nhiên, kích thước hạt siêu mịn chuẩn phối trộn.
                  </p>
                </div>
              </ScrollGlowCard>
            </StaggerItem>

          </StaggerContainer>
        </div>

      </div>
    </section>
  );
};
