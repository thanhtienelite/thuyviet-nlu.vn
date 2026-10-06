import React, { useEffect } from 'react';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';
import { DongHoSeal } from './DongHoArt';

interface LightboxModalProps {
  imageUrl: string | null;
  caption: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ imageUrl, caption, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!imageUrl) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in cursor-zoom-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-[#1A332B] rounded-lg border-2 border-[#D5A62E] overflow-hidden shadow-2xl cursor-default"
      >
        {/* Top bar */}
        <div className="p-4 bg-[#12231E] border-b border-[#D5A62E]/30 flex items-center justify-between text-[#F4E8C8]">
          <div className="flex items-center gap-3">
            <DongHoSeal text="THỤY VIỆT" subText="DA55" className="bg-[#244F42] text-[#D5A62E] border-[#D5A62E] py-0.5" />
            <span className="font-serif text-sm sm:text-base font-bold text-[#FAF3E3] truncate max-w-md sm:max-w-xl">
              {caption.split('–')[0] || 'Tư liệu thực nghiệm Thụy Việt'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#F4E8C8] transition-colors cursor-pointer"
            aria-label="Đóng ảnh phóng to"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Full Image */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/40">
          <img
            src={imageUrl}
            alt={caption}
            className="max-h-[65vh] w-auto max-w-full object-contain rounded shadow-lg"
          />
        </div>

        {/* Caption bottom bar */}
        <div className="p-4 bg-[#12231E] border-t border-[#F4E8C8]/15 text-xs text-[#F4E8C8]/85 flex items-center justify-between">
          <div className="leading-relaxed">
            {caption}
          </div>
          <span className="text-[10px] text-[#D5A62E] uppercase font-mono tracking-wider shrink-0 ml-4 hidden sm:inline">
            Tư liệu gốc DA55 · NLU
          </span>
        </div>
      </div>
    </div>
  );
};
