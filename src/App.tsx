import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { UniversSection } from './components/UniversSection';
import { HowItWorks } from './components/HowItWorks';
import { QuoteSection } from './components/QuoteSection';
import { AppDownloadBanner } from './components/AppDownloadBanner';
import { Footer } from './components/Footer';
import { ReaderModal } from './components/ReaderModal';
import { STORIES, Story } from './data/stories';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'parchment'>('dark');
  const [activeStoryForReader, setActiveStoryForReader] = useState<Story | null>(null);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'parchment' : 'dark'));
  };

  const openDefaultReader = () => {
    setActiveStoryForReader(STORIES[0]);
  };

  const handleSelectStory = (story: Story) => {
    setActiveStoryForReader(story);
  };

  return (
    <div
      id="top"
      className={`min-h-screen transition-colors duration-500 relative ${
        theme === 'dark'
          ? 'bg-[#14121b] text-[#f3e8d0]'
          : 'bg-[#f3e8d0] text-[#1c1930]'
      }`}
      style={{
        '--bg': theme === 'dark' ? '#14121b' : '#f3e8d0',
        '--surface': theme === 'dark' ? '#1c1930' : '#e9dbbd',
        '--text': theme === 'dark' ? '#f3e8d0' : '#1c1930'
      } as React.CSSProperties}
    >
      {/* Central subtle vintage book spine line (hidden on small screens) */}
      <div
        className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-px pointer-events-none z-0 -translate-x-1/2"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(201, 162, 75, 0.2) 8%, rgba(201, 162, 75, 0.2) 92%, transparent)'
        }}
        aria-hidden="true"
      />

      {/* Navigation */}
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenReader={openDefaultReader}
      />

      <main className="relative z-10">
        {/* Hero */}
        <Hero onOpenReader={openDefaultReader} />

        {/* A propos ("Ce que c'est") */}
        <AboutSection />

        {/* Univers & Bibliothèque */}
        <UniversSection onSelectStory={handleSelectStory} />

        {/* Comment ça marche */}
        <HowItWorks />

        {/* Citation & Extrait */}
        <QuoteSection />

        {/* Call to action & Télécharger l'application */}
        <AppDownloadBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive In-browser Reader Modal */}
      {activeStoryForReader && (
        <ReaderModal
          story={activeStoryForReader}
          onClose={() => setActiveStoryForReader(null)}
        />
      )}
    </div>
  );
}
