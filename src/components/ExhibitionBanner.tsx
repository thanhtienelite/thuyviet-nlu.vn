import React, { useState, useEffect } from 'react';
import { Sparkles, Trophy, Flame, ChevronRight, X, Play } from 'lucide-react';
import { DongHoSeal } from './DongHoArt';

interface ExhibitionBannerProps {
  isActive: boolean;
  onClose: () => void;
  onOpenThirtySecond: () => void;
}

export const ExhibitionBanner: React.FC<ExhibitionBannerProps> = ({
  isActive,
  onClose,
  onOpenThirtySecond
}) => {
  const [tickerIndex, setTickerIndex] = useState(0);

  const facts = [
    'DA55: Giải pháp Synbiotic từ phụ phẩm chuối xanh cho chăn nuôi bền vững',
    'Thực nghiệm 45 con gà thịt qua 35 ngày: Khối lượng +10,1%, FCR giảm -8,1%',
    'Công nghệ vi bao sinh học bảo vệ lợi khuẩn vượt qua rào cản dịch vị pH 2.0',
    'Ứng dụng mỹ học tranh khắc gỗ Đông Hồ truyền thống trong nhận diện thương hiệu',
    'Cuộc thi Khởi nghiệp Nông nghiệp 2026 – Đơn vị tổ chức: Trường ĐH Nông Lâm TP.HCM'
  ];

  useEffect(() => {
    if (!isActive) return;
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % facts.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isActive, facts.length]);

  if (!isActive) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 max-w-4xl mx-auto bg-[#244F42] text-[#F4E8C8] p-3 sm:p-4 rounded-xl border-2 border-[#D5A62E] shadow-2xl animate-in slide-in-from-bottom flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="w-9 h-9 rounded-full bg-[#A63A2B] text-[#F4E8C8] flex items-center justify-center shrink-0 shadow-xs animate-pulse">
          <Trophy className="w-5 h-5 text-[#D5A62E]" />
        </div>
        
        <div className="overflow-hidden">
          <div className="text-[10px] font-bold uppercase tracking-widest text-[#D5A62E] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span>CHẾ ĐỘ GIAN TRƯNG BÀY CHUNG KẾT (LIVE BOOTH)</span>
          </div>
          <div className="text-xs sm:text-sm font-serif font-bold text-[#FAF3E3] truncate">
            {facts[tickerIndex]}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          onClick={onOpenThirtySecond}
          className="px-3.5 py-1.5 rounded bg-[#A63A2B] hover:bg-[#882C20] text-[#F4E8C8] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-xs whitespace-nowrap"
        >
          <Play className="w-3 h-3 fill-current text-[#D5A62E]" />
          <span>Pitch 30s</span>
        </button>

        <button
          onClick={onClose}
          className="p-1 rounded text-[#F4E8C8]/60 hover:text-[#F4E8C8] cursor-pointer"
          title="Đóng thanh gian hàng"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
