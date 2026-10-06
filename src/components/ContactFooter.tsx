import React, { useState } from 'react';
import { ASSETS } from '../data/assets';
import { DongHoCloud, DongHoSeal, DongHoBgMotifGrid, PaperLightHalo } from './DongHoArt';
import { AdmLogo, NluLogo, HoangLamLogo } from './BrandLogos';
import { ScrollGlowBox } from './InteractiveLightCard';
import { Mail, Phone, MapPin, Globe, QrCode, Send, CheckCircle2, Eye } from 'lucide-react';
import { ScrollReveal } from './MotionEffects';

interface ContactFooterProps {
  onOpenLightbox?: (imgUrl: string, caption?: string) => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenLightbox }) => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSent(true);
    }
  };

  const handleOpenQR = () => {
    if (onOpenLightbox) {
      onOpenLightbox(
        ASSETS.QR_REPRESENTATIVE,
        'Mã QR Người Đại Diện Dự Án THỤY VIỆT (DA55) – Quét để kết nối nhanh qua Zalo / Hotline'
      );
    }
  };

  return (
    <footer id="lien-he" className="bg-[#1A332B] text-[#F4E8C8] pt-20 pb-12 relative overflow-hidden border-t-4 border-[#A63A2B]">
      {/* Background Dong Ho Pattern Grid */}
      <DongHoBgMotifGrid variant="dark" opacity={0.05} />

      {/* Radiant Paper Halo in dark tone */}
      <PaperLightHalo position="top-right" variant="gold" size="lg" className="opacity-20" />
      <PaperLightHalo position="bottom-left" variant="ivory" size="lg" className="opacity-15" />
      
      {/* Background Motifs */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
        <DongHoCloud className="w-96 h-48 text-[#D5A62E]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Headline */}
        <ScrollReveal variant="fade-up" className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <DongHoSeal text="THỤY VIỆT" subText="DA55" className="bg-[#FAF3E3] text-[#A63A2B] border-[#A63A2B] mb-2" />
          <h2 className="heritage-title section-title font-serif text-3xl sm:text-5xl font-black text-[#FAF3E3] tracking-tight overflow-visible">
            MÀI NGỌC TỪ ĐẤT VIỆT
          </h2>
          <p className="text-base sm:text-lg text-[#F4E8C8]/80 leading-relaxed font-light">
            Hành trình của Thụy Việt chỉ mới bắt đầu. Chúng tôi trân trọng mọi cơ hội hợp tác thử nghiệm, cố vấn chuyên môn và đầu tư phát triển.
          </p>
        </ScrollReveal>

        {/* Contact Grid & Fast Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Info Column */}
          <ScrollReveal variant="fade-up" delay={0.1} className="lg:col-span-6 space-y-6">
            <ScrollGlowBox
              glowColor="dark-gold"
              glowSpread="md"
            >
              <div className="bg-[#12231E] p-6 rounded-lg border border-[#D5A62E]/30 space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#FAF3E3]">
                  Thông tin liên hệ Dự án DA55
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-[#F4E8C8]/85">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#D5A62E] shrink-0 mt-1" />
                    <div>
                      <strong className="block text-[#FAF3E3]">Địa chỉ nghiên cứu:</strong>
                      <span>Trường Đại học Nông Lâm TP.HCM, Khu phố 6, P. Linh Trung, TP. Thủ Đức, TP. Hồ Chí Minh</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#D5A62E] shrink-0" />
                    <div>
                      <strong className="text-[#FAF3E3]">Email dự án:</strong>{' '}
                      <span className="text-[#F4E8C8]/70">thuyviet.da55@gmail.com</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#D5A62E] shrink-0" />
                    <div>
                      <strong className="text-[#FAF3E3]">Hotline liên hệ:</strong>{' '}
                      <span className="text-[#F4E8C8]/70">Quét mã QR đại diện dự án bên dưới</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#D5A62E] shrink-0" />
                    <div>
                      <strong className="text-[#FAF3E3]">Website / Kênh thông tin:</strong>{' '}
                      <span className="text-[#F4E8C8]/70">Đang cập nhật</span>
                    </div>
                  </div>
                </div>

                {/* Real QR Code Frame for Project Representative */}
                <div className="mt-5 pt-5 border-t border-[#F4E8C8]/15">
                  <div className="bg-[#182C25] p-4 rounded-lg border border-[#D5A62E]/35 flex flex-col sm:flex-row items-center gap-4">
                    {/* Interactive QR Code thumbnail */}
                    <div
                      onClick={handleOpenQR}
                      className="w-28 h-28 sm:w-32 sm:h-32 bg-white p-2 rounded-lg border-2 border-[#D5A62E] shrink-0 shadow-lg cursor-pointer group relative overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-105 hover:border-[#FAF3E3]"
                      title="Nhấn để phóng to mã QR"
                    >
                      <img
                        src={ASSETS.QR_REPRESENTATIVE}
                        alt="Mã QR Người đại diện dự án Thụy Việt DA55"
                        className="w-full h-full object-contain dongho-crisp-img"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[#244F42]/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-[10px] font-bold p-1 text-center">
                        <Eye className="w-5 h-5 mb-1 text-[#D5A62E]" />
                        <span>Nhấn phóng to</span>
                      </div>
                    </div>

                    {/* QR Details */}
                    <div className="text-center sm:text-left space-y-1.5 flex-1">
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <span className="inline-flex items-center gap-1 bg-[#A63A2B] text-[#FAF3E3] text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                          <QrCode className="w-3 h-3" /> QR Người đại diện DA55
                        </span>
                      </div>
                      <h4 className="font-serif text-sm sm:text-base font-bold text-[#FAF3E3]">
                        KẾT NỐI TRỰC TIẾP
                      </h4>
                      <p className="text-xs text-[#F4E8C8]/80 leading-relaxed">
                        Quét mã để kết nối nhanh qua Zalo / liên hệ trực tiếp với đại diện nhóm nghiên cứu Thụy Việt.
                      </p>
                      <div className="pt-1">
                        <button
                          type="button"
                          onClick={handleOpenQR}
                          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#D5A62E] hover:text-[#FAF3E3] transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Xem ảnh QR kích thước lớn</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollGlowBox>
          </ScrollReveal>

          {/* Right Fast Inquiry Form */}
          <ScrollReveal variant="fade-up" delay={0.15} className="lg:col-span-6">
            <ScrollGlowBox
              glowColor="red"
              glowSpread="md"
            >
              <div className="bg-[#12231E] p-6 sm:p-8 rounded-lg border border-[#D5A62E]/30">
                <h3 className="font-serif text-xl font-bold text-[#FAF3E3] mb-2">
                  Gửi lời nhắn tới Nhóm Thụy Việt
                </h3>
                <p className="text-xs text-[#F4E8C8]/70 mb-4">
                  Dành cho Ban giám khảo, các nhà đầu tư, chủ trang trại muốn nhận mẫu thử nghiệm.
                </p>

                {formSent ? (
                  <div className="p-6 bg-[#244F42] rounded-md border border-[#D5A62E] text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-[#D5A62E] mx-auto" />
                    <div className="font-serif text-lg font-bold text-[#FAF3E3]">
                      Cảm ơn quý vị đã để lại thông tin!
                    </div>
                    <p className="text-xs text-[#F4E8C8]/80">
                      Nhóm Thụy Việt (DA55) sẽ liên hệ lại trong thời gian sớm nhất.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#F4E8C8]/80 mb-1">
                        Họ và tên / Đơn vị công tác:
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ví dụ: Giám khảo Nguyễn Văn A / Trang trại B"
                        className="w-full px-3 py-2 text-xs rounded bg-[#1A332B] border border-[#F4E8C8]/20 text-[#FAF3E3] focus:border-[#D5A62E] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#F4E8C8]/80 mb-1">
                        Email hoặc Số điện thoại:
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email hoặc số điện thoại để kết nối"
                        className="w-full px-3 py-2 text-xs rounded bg-[#1A332B] border border-[#F4E8C8]/20 text-[#FAF3E3] focus:border-[#D5A62E] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#F4E8C8]/80 mb-1">
                        Nội dung quan tâm / Đề xuất hợp tác:
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Chia sẻ nhận xét, đề xuất thử nghiệm tại trại hoặc câu hỏi chuyên môn..."
                        className="w-full px-3 py-2 text-xs rounded bg-[#1A332B] border border-[#F4E8C8]/20 text-[#FAF3E3] focus:border-[#D5A62E] outline-none resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded bg-[#A63A2B] hover:bg-[#882C20] text-[#F4E8C8] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Gửi thông điệp tới nhóm</span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollGlowBox>
          </ScrollReveal>

        </div>

        {/* Competition Organizers & Sponsors Section with High Contrast Logos */}
        <ScrollReveal variant="fade-up" delay={0.2} className="pt-10 pb-8 border-t border-[#F4E8C8]/15">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* 1. Organizer: NLU */}
            <div className="md:col-span-5 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D5A62E]">
                Đơn vị tổ chức cuộc thi
              </span>
              <ScrollGlowBox glowColor="jade" glowSpread="sm">
                <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-white/20 shadow-md">
                  <NluLogo className="h-12 w-auto" />
                  <div className="text-xs font-bold text-[#1C833C] leading-tight border-l border-[#292820]/15 pl-3">
                    Trường Đại học Nông Lâm TP.HCM
                    <span className="block text-[10px] text-[#292820]/70 font-medium">
                      Khoa Chăn nuôi Thú y · Ban Quản lý Khởi nghiệp Nông nghiệp
                    </span>
                  </div>
                </div>
              </ScrollGlowBox>
            </div>

            {/* 2 & 3. Sponsors: ADM & Hoàng Lam */}
            <div className="md:col-span-7 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#D5A62E]">
                Đơn vị tài trợ & đồng hành
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* ADM */}
                <ScrollGlowBox glowColor="gold" glowSpread="sm" className="h-full">
                  <div className="bg-white p-3.5 rounded-xl border border-white/20 flex items-center gap-3 shadow-md hover:border-[#181858] transition-all h-full">
                    <AdmLogo className="h-11 w-auto flex-shrink-0" />
                    <div className="text-xs font-bold text-[#181858] border-l border-[#292820]/15 pl-3 text-left">
                      ADM
                      <span className="block text-[10px] text-[#292820]/80 font-semibold mt-0.5">
                        Đơn vị tài trợ cuộc thi
                      </span>
                      <span className="block text-[9px] text-[#292820]/65 font-normal mt-0.5">
                        Dinh dưỡng nông nghiệp toàn cầu
                      </span>
                    </div>
                  </div>
                </ScrollGlowBox>

                {/* Hoàng Lam */}
                <ScrollGlowBox glowColor="jade" glowSpread="sm" className="h-full">
                  <div className="bg-white p-3.5 rounded-xl border border-white/20 flex items-center gap-3 shadow-md hover:border-[#0B793A] transition-all h-full">
                    <HoangLamLogo className="h-11 w-auto flex-shrink-0" />
                    <div className="text-xs font-bold text-[#292820] border-l border-[#292820]/15 pl-3 text-left">
                      HOÀNG LAM
                      <span className="block text-[10px] text-[#292820]/80 font-semibold mt-0.5">
                        Đơn vị tài trợ cuộc thi
                      </span>
                      <span className="block text-[9px] text-[#292820]/65 font-normal mt-0.5">
                        Cảnh quan xanh · Thành lập 2003
                      </span>
                    </div>
                  </div>
                </ScrollGlowBox>

              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 border-t border-[#F4E8C8]/10 text-center text-xs text-[#F4E8C8]/60 space-y-1">
          <div>
            © 2026 <strong>THỤY VIỆT (DA55)</strong> · Cuộc thi Khởi nghiệp Nông nghiệp 2026. Mọi quyền được bảo lưu.
          </div>
          <div className="text-[11px] text-[#F4E8C8]/40">
            Ứng dụng khoa học công nghệ vào bảo vệ hệ tiêu hóa vật nuôi và kinh tế tuần hoàn nông sản Việt.
          </div>
        </div>

      </div>
    </footer>
  );
};
