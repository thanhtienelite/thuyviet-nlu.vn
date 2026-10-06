import React, { useState } from 'react';
import { assets } from '../data/assets';

interface LogoProps {
  className?: string;
  src?: string;
  alt?: string;
}

/**
 * 1. ADM Logo Component
 * Direct static asset render with auto-fallback candidate paths
 */
export const AdmLogo: React.FC<LogoProps> = ({ 
  className = "h-8 w-auto", 
  src = assets.logoADM,
  alt = "ADM - Đơn vị tài trợ" 
}) => {
  const candidatePaths = [
    src,
    "/images/logo-adm.png",
    "/images/logo ADM.jfif",
    "/images/logo-adm.jfif",
    "/images/logo ADM.png",
    "/images/adm.png"
  ];
  const [candidateIndex, setCandidateIndex] = useState(0);

  const handleError = () => {
    if (candidateIndex < candidatePaths.length - 1) {
      setCandidateIndex(prev => prev + 1);
    }
  };

  const currentSrc = candidatePaths[candidateIndex];

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`${className} object-contain`}
      onError={handleError}
      loading="lazy"
    />
  );
};

/**
 * 2. Trường Đại học Nông Lâm TP.HCM (NLU) Logo Component
 * Direct static asset render with auto-fallback candidate paths
 */
export const NluLogo: React.FC<LogoProps> = ({ 
  className = "h-12 w-auto", 
  src = assets.logoNLU,
  alt = "Trường Đại học Nông Lâm TP.HCM" 
}) => {
  const candidatePaths = [
    src,
    "/images/logo-nlu.png",
    "/images/logo NLU.png",
    "/images/nlu.png",
    "/images/logo-nlu.jpg"
  ];
  const [candidateIndex, setCandidateIndex] = useState(0);

  const handleError = () => {
    if (candidateIndex < candidatePaths.length - 1) {
      setCandidateIndex(prev => prev + 1);
    }
  };

  const currentSrc = candidatePaths[candidateIndex];

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`${className} object-contain`}
      onError={handleError}
      loading="lazy"
    />
  );
};

/**
 * 3. Công ty TNHH Hoàng Lam Logo Component
 * Direct static asset render with auto-fallback candidate paths
 */
export const HoangLamLogo: React.FC<LogoProps> = ({ 
  className = "h-12 w-auto", 
  src = assets.logoHoangLam,
  alt = "Công ty TNHH Hoàng Lam - Vì một cuộc sống xanh" 
}) => {
  const candidatePaths = [
    src,
    "/images/logo-hoang-lam.png",
    "/images/logo hoàng lam.png",
    "/images/logo-hoanglam.png",
    "/images/hoang-lam.png"
  ];
  const [candidateIndex, setCandidateIndex] = useState(0);

  const handleError = () => {
    if (candidateIndex < candidatePaths.length - 1) {
      setCandidateIndex(prev => prev + 1);
    }
  };

  const currentSrc = candidatePaths[candidateIndex];

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`${className} object-contain`}
      onError={handleError}
      loading="lazy"
    />
  );
};
