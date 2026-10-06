import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TurningPoint } from './components/TurningPoint';
import { ProductAnatomy } from './components/ProductAnatomy';
import { WhySynbiotic } from './components/WhySynbiotic';
import { DigestiveJourney } from './components/DigestiveJourney';
import { CircularEconomy } from './components/CircularEconomy';
import { BrandHeritage } from './components/BrandHeritage';
import { MarketSurvey } from './components/MarketSurvey';
import { BusinessModel } from './components/BusinessModel';
import { ValidationRoadmap } from './components/ValidationRoadmap';
import { JourneyTimeline } from './components/JourneyTimeline';
import { TeamSection } from './components/TeamSection';
import { ContactFooter } from './components/ContactFooter';
import { ThirtySecondModal } from './components/ThirtySecondModal';
import { LightboxModal } from './components/LightboxModal';
import { ExhibitionBanner } from './components/ExhibitionBanner';
import { ScrollIndicator } from './components/ScrollIndicator';
import { StagedSectionReveal } from './components/InteractiveLightCard';

export function App() {
  const [isThirtySecondOpen, setIsThirtySecondOpen] = useState(false);
  const [isExhibitionActive, setIsExhibitionActive] = useState(true);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string | null;
    caption: string;
  }>({
    isOpen: false,
    imageUrl: null,
    caption: ''
  });

  // Open full resolution image modal
  const handleOpenLightbox = (imageUrl: string, caption: string) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      caption
    });
  };

  // Close lightbox modal
  const handleCloseLightbox = () => {
    setLightboxState({
      isOpen: false,
      imageUrl: null,
      caption: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#F4E8C8] text-[#292820] flex flex-col relative selection:bg-[#A63A2B] selection:text-[#F4E8C8]">
      {/* Top sticky navigation header */}
      <Header
        onOpenThirtySecond={() => setIsThirtySecondOpen(true)}
        onToggleExhibition={() => setIsExhibitionActive(!isExhibitionActive)}
        isExhibitionActive={isExhibitionActive}
      />

      {/* Desktop Scroll Indicator */}
      <ScrollIndicator />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 01: Hero */}
        <Hero onOpenThirtySecond={() => setIsThirtySecondOpen(true)} />

        {/* Section 02: Turning Point (Bước Ngoặt) */}
        <StagedSectionReveal>
          <TurningPoint />
        </StagedSectionReveal>

        {/* Section 03: Product Anatomy */}
        <StagedSectionReveal>
          <ProductAnatomy />
        </StagedSectionReveal>

        {/* Section 04: Why Synbiotic */}
        <StagedSectionReveal>
          <WhySynbiotic />
        </StagedSectionReveal>

        {/* Section 05: Digestive Journey Simulator */}
        <StagedSectionReveal>
          <DigestiveJourney />
        </StagedSectionReveal>

        {/* Section 06: Circular Agriculture Values */}
        <StagedSectionReveal>
          <CircularEconomy />
        </StagedSectionReveal>

        {/* Section 07: Brand Heritage & 5 Folk Colors */}
        <StagedSectionReveal>
          <BrandHeritage onOpenLightbox={handleOpenLightbox} />
        </StagedSectionReveal>

        {/* Section 08: Market Survey Structure */}
        <StagedSectionReveal>
          <MarketSurvey />
        </StagedSectionReveal>

        {/* Section 09: Business Model B2B */}
        <StagedSectionReveal>
          <BusinessModel />
        </StagedSectionReveal>

        {/* Section 10: What Needs To Be Proven */}
        <StagedSectionReveal>
          <ValidationRoadmap />
        </StagedSectionReveal>

        {/* Section 11: Journey Timeline */}
        <StagedSectionReveal>
          <JourneyTimeline onOpenLightbox={handleOpenLightbox} />
        </StagedSectionReveal>

        {/* Section 12: 4 Interdisciplinary Founders */}
        <StagedSectionReveal>
          <TeamSection onOpenLightbox={handleOpenLightbox} />
        </StagedSectionReveal>
      </main>

      {/* Section 13: Contact Footer & Sponsors */}
      <ContactFooter onOpenLightbox={handleOpenLightbox} />

      {/* 30-Second Fast Pitch Presentation Overlay */}
      <ThirtySecondModal
        isOpen={isThirtySecondOpen}
        onClose={() => setIsThirtySecondOpen(false)}
      />

      {/* Lightbox Modal for Real Photos */}
      <LightboxModal
        imageUrl={lightboxState.imageUrl}
        caption={lightboxState.caption}
        onClose={handleCloseLightbox}
      />

      {/* Exhibition Live Booth Ticker */}
      <ExhibitionBanner
        isActive={isExhibitionActive}
        onClose={() => setIsExhibitionActive(false)}
        onOpenThirtySecond={() => setIsThirtySecondOpen(true)}
      />
    </div>
  );
}

export default App;
