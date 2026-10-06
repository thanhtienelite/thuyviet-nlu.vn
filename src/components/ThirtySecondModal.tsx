import React, { useState, useEffect } from 'react';
import { X, Play, Pause, ChevronLeft, ChevronRight, CheckCircle2, Sparkles, Award } from 'lucide-react';
import { DongHoSeal } from './DongHoArt';
import { ASSETS } from '../data/assets';

interface ThirtySecondModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThirtySecondModal: React.FC<ThirtySecondModalProps> = ({ isOpen, onClose }) => {
  const [currentScene, setCurrentScene] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const scenes = [
    {
      step: '01/05',
      title: 'BÀI TOÁN & VẤN ĐỀ',
      headline: 'Hàng ngàn tấn chuối xanh bị bỏ phí & Nguy cơ kháng kháng sinh',
      description: 'Chuối xanh không đạt chuẩn ngoại hình xuất khẩu bị lãng phí lớn. Trong khi đó, ngành chăn nuôi đang chịu sức ép loại bỏ kháng sinh kích thích tăng trưởng.',
      highlight: 'Lãng phí nông sản + Khủng hoảng kháng sinh',
      image: ASSETS.BANANA_RAW,
      accentColor: '#A63A2B'
    },
    {
      step: '02/05',
      title: 'GIẢI PHÁP THỤY VIỆT',
      headline: 'Synbiotic hoàn chỉnh: Tinh bột kháng + Probiotic vi bao',
      description: 'Kết hợp 67,5% bột chuối xanh làm prebiotic nuôi dưỡng và 22,5% chủng probiotic được bảo vệ bằng màng bao sinh học vượt qua acid dịch vị dạ dày.',
      highlight: '67,5% Chuối xanh + 22,5% Vi bao lợi khuẩn',
      image: ASSETS.PRODUCT_HERO,
      accentColor: '#244F42'
    },
    {
      step: '03/05',
      title: 'BẰNG CHỨNG THỰC NGHIỆM',
      headline: '45 con gà thịt qua 35 ngày theo dõi tại trại NLU',
      description: 'Nghiệm thức SYN-VB đạt khối lượng 2.097g (+10,1% so với đối chứng) và hệ số FCR giảm xuống 1,58 (-8,1%), đàn gà đồng đều và phân khô ráo.',
      highlight: '+10,1% Trọng lượng · -8,1% FCR',
      image: ASSETS.CHICKEN_TRIAL_01,
      accentColor: '#D5A62E'
    },
    {
      step: '04/05',
      title: 'KẾ TOÁN KINH DOANH & TUẦN HOÀN',
      headline: 'Giá thành B2B 145.000đ/kg tối ưu chi phí cho trang trại',
      description: 'Lượng cám tiết kiệm nhờ giảm FCR bù đắp hoàn toàn chi phí bổ sung chế phẩm. Chuối xanh dạt có đầu ra kinh tế ổn định cho nông dân.',
      highlight: '145.000đ/kg B2B · Tiết kiệm cám thực tế',
      image: ASSETS.PRODUCT_PACKAGING_BOX,
      accentColor: '#244F42'
    },
    {
      step: '05/05',
      title: 'ĐỘI NGŨ & TẦM NHÌN',
      headline: '4 Khối ngành tinh hoa từ ĐH Nông Lâm TP.HCM',
      description: 'Thú y × Hóa học × Nông học × Thủy sản cùng hợp lực hoàn thiện giải pháp vì một nền nông nghiệp sinh thái tuần hoàn Việt Nam.',
      highlight: 'Animal Health × Chemistry × Agronomy × Aquaculture',
      image: ASSETS.LAB_TEAM,
      accentColor: '#A63A2B'
    }
  ];

  // Auto progression every 6 seconds if playing
  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isOpen, isPlaying, scenes.length]);

  if (!isOpen) return null;

  const scene = scenes[currentScene];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#FAF3E3] rounded-xl dongho-frame max-w-3xl w-full overflow-hidden shadow-2xl relative border-2 border-[#A63A2B]">
        
        {/* Top Header Bar */}
        <div className="bg-[#244F42] text-[#F4E8C8] px-6 py-4 flex items-center justify-between border-b border-[#D5A62E]/30">
          <div className="flex items-center gap-3">
            <DongHoSeal text="THỤY VIỆT" subText="PITCH 30S" className="bg-[#143128] text-[#D5A62E] border-[#D5A62E] py-0.5" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#D5A62E]">
                Bản tóm tắt 30 giây dành cho Giám khảo & Đối tác
              </div>
              <div className="text-sm font-serif font-bold text-[#FAF3E3]">
                {scene.step} – {scene.title}
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#F4E8C8] transition-colors cursor-pointer"
            aria-label="Close pitch modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar Top */}
        <div className="w-full bg-[#292820]/10 h-1.5 flex">
          {scenes.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentScene(idx)}
              className="flex-1 h-full cursor-pointer border-r border-white/20 last:border-none"
            >
              <div
                className={`h-full transition-all duration-300 ${
                  idx === currentScene
                    ? 'bg-[#A63A2B]'
                    : idx < currentScene
                    ? 'bg-[#244F42]'
                    : 'bg-transparent'
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Scene Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left text */}
            <div className="md:col-span-7 space-y-3">
              <span className="inline-block px-3 py-1 rounded bg-[#A63A2B]/10 text-[#A63A2B] text-xs font-bold uppercase tracking-wider">
                {scene.highlight}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#292820] leading-tight">
                {scene.headline}
              </h3>
              <p className="text-sm text-[#292820]/85 leading-relaxed font-light">
                {scene.description}
              </p>
            </div>

            {/* Right thumbnail */}
            <div className="md:col-span-5">
              <div className="rounded-lg overflow-hidden border-2 border-[#292820]/15 aspect-[4/3] shadow-md">
                <img
                  src={scene.image}
                  alt={scene.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Navigation & Controls */}
        <div className="bg-[#F4E8C8] px-6 py-4 border-t border-[#292820]/15 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-xs bg-[#244F42] text-[#F4E8C8] hover:bg-[#1A332B] text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Tạm dừng' : 'Tự động chạy'}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentScene((prev) => (prev > 0 ? prev - 1 : scenes.length - 1))}
              className="p-2 rounded-xs border border-[#292820]/20 hover:bg-[#FAF3E3] text-[#292820] cursor-pointer"
              title="Cột mốc trước"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold text-[#292820]">
              {currentScene + 1} / {scenes.length}
            </span>
            <button
              onClick={() => setCurrentScene((prev) => (prev + 1) % scenes.length)}
              className="p-2 rounded-xs bg-[#A63A2B] text-[#F4E8C8] hover:bg-[#882C20] cursor-pointer"
              title="Cột mốc kế tiếp"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
