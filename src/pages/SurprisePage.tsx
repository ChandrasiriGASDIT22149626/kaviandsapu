import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { LoveMessage } from '../components/LoveMessage';
import { MemoriesGallery } from '../components/MemoriesGallery';
import { Timeline } from '../components/Timeline';
import { FinalSurprise } from '../components/FinalSurprise';
import { FloatingHearts } from '../components/FloatingHearts';
import { MusicControl } from '../components/MusicControl';
export function SurprisePage() {
  return (
    <main className="bg-gradient-to-br from-[#1a0b2e] via-[#4c1d95] to-[#831843] min-h-screen text-white overflow-y-auto overflow-x-hidden snap-y snap-mandatory h-screen scroll-smooth">
      <FloatingHearts />
      <MusicControl />

      <HeroSection />
      <LoveMessage />
      <MemoriesGallery />
      <Timeline />
      <FinalSurprise />
    </main>);

}