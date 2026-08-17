import React from 'react';
import { CosmicBackground } from '../molecules/CosmicBackground';
import { Header } from '../organisms/Header';
import { Footer } from '../organisms/Footer';
import { ISocialLink } from '../../types';

interface LandingLayoutProps {
  children: React.ReactNode;
  socials: ISocialLink[];
}

export const LandingLayout: React.FC<LandingLayoutProps> = ({
  children,
  socials,
}) => {
  return (
    <div className="relative min-h-screen bg-cosmic-950 text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Dynamic Cosmic Starfield & Nebula Canvas */}
      <CosmicBackground />

      {/* Sticky Glassmorphic Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-1 w-full relative z-10">
        {children}
      </main>

      {/* Cosmic Footer */}
      <Footer socials={socials} />
    </div>
  );
};
