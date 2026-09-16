import React, { useState, useEffect } from 'react';
import { ENCRE_ET_OMBRE_LOGO } from '../data/logo';
import { Volume2, VolumeX, Sun, Moon, ExternalLink, Menu, X, BookOpen, CloudRain } from 'lucide-react';
import { ambianceSoundscape } from '../utils/audioAmbiance';

interface HeaderProps {
  theme: 'dark' | 'parchment';
  onToggleTheme: () => void;
  onOpenReader: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme, onOpenReader }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  useEffect(() => {
    const unsubscribe = ambianceSoundscape.subscribe((state) => {
      setSoundActive(state.isPlaying);
    });
    return unsubscribe;
  }, []);

  const toggleSound = () => {
    ambianceSoundscape.toggle();
  };

  return (
    <header
      id="header-nav"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(20, 18, 27, 0.88)' : 'rgba(243, 232, 208, 0.92)',
        borderColor: theme === 'dark' ? 'rgba(201, 162, 75, 0.2)' : 'rgba(122, 35, 49, 0.15)',
        color: theme === 'dark' ? '#f3e8d0' : '#1c1930'
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <a
          id="brand-logo-link"
          href="#top"
          className="flex items-center gap-3.5 group text-decoration-none focus:outline-none"
        >
          <img
            src={ENCRE_ET_OMBRE_LOGO}
            alt="Logo Encre & Ombre"
            className="w-9 h-9 rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105 border border-[#c9a24b]/40"
          />
          <div className="flex flex-col">
            <span
              className="text-xl font-medium tracking-wide transition-colors duration-200"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                color: theme === 'dark' ? '#f3e8d0' : '#262b4a'
              }}
            >
              Encre &amp; Ombre
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#c9a24b] -mt-0.5 font-sans font-semibold">
              Récits nocturnes
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px]">
          <a
            id="nav-link-univers"
            href="#univers"
            className="text-[#a9a4b8] hover:text-[#dcc074] transition-colors py-1"
          >
            Univers
          </a>
          <a
            id="nav-link-bibliotheque"
            href="#bibliotheque"
            className="text-[#a9a4b8] hover:text-[#dcc074] transition-colors py-1"
          >
            Bibliothèque
          </a>
          <a
            id="nav-link-comment"
            href="#comment"
            className="text-[#a9a4b8] hover:text-[#dcc074] transition-colors py-1"
          >
            Comment ça marche
          </a>
          <a
            id="nav-link-extraits"
            href="#extrait"
            className="text-[#a9a4b8] hover:text-[#dcc074] transition-colors py-1"
          >
            Extraits
          </a>
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick Reader launcher */}
          <button
            id="btn-quick-read"
            onClick={onOpenReader}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs tracking-wide border border-[#c9a24b]/30 text-[#dcc074] hover:bg-[#c9a24b]/10 transition-all"
            title="Ouvrir le lecteur de démonstration"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Lire un extrait</span>
          </button>

          {/* Sound Ambiance Generator */}
          <button
            id="btn-toggle-ambiance"
            onClick={toggleSound}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs transition-all border ${
              soundActive
                ? 'bg-[#c9a24b]/20 border-[#c9a24b] text-[#dcc074]'
                : 'border-white/10 text-[#a9a4b8] hover:border-[#c9a24b]/40 hover:text-[#f3e8d0]'
            }`}
            title={soundActive ? 'Désactiver l’ambiance pluie nocturne' : 'Activer l’ambiance pluie & orage (2 min)'}
          >
            {soundActive ? <CloudRain className="w-3.5 h-3.5 animate-pulse text-[#c9a24b]" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="text-[11px] font-sans">{soundActive ? 'Pluie (2m)' : 'Ambiance'}</span>
          </button>

          {/* Theme switcher */}
          <button
            id="btn-toggle-theme"
            onClick={onToggleTheme}
            className="p-1.5 rounded border border-white/10 text-[#a9a4b8] hover:text-[#dcc074] hover:border-[#c9a24b]/40 transition-colors"
            title={theme === 'dark' ? 'Passer en mode Parchemin clair' : 'Passer en mode Ombre profond'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* App link CTA */}
          <a
            id="btn-header-app-link"
            href="https://application-encre-ombre.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded text-xs font-semibold tracking-wider uppercase border border-[#c9a24b] bg-[#c9a24b] text-[#14121b] hover:bg-[#dcc074] hover:shadow-[0_4px_20px_-4px_rgba(201,162,75,0.4)] transition-all"
          >
            <span>Découvrir l'app</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            id="mobile-sound-btn"
            onClick={toggleSound}
            className="p-2 text-[#c9a24b] focus:outline-none"
            title="Ambiance nocturne"
          >
            {soundActive ? <Volume2 className="w-5 h-5 animate-pulse" /> : <VolumeX className="w-5 h-5 opacity-60" />}
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#f3e8d0] focus:outline-none"
            aria-label="Menu de navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden border-t px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-3 duration-200"
          style={{
            backgroundColor: theme === 'dark' ? '#1c1930' : '#e9dbbd',
            borderColor: 'rgba(201, 162, 75, 0.25)'
          }}
        >
          <a
            href="#univers"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg py-2 border-b border-[#c9a24b]/15 text-[#f3e8d0] hover:text-[#c9a24b]"
          >
            Univers
          </a>
          <a
            href="#bibliotheque"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg py-2 border-b border-[#c9a24b]/15 text-[#f3e8d0] hover:text-[#c9a24b]"
          >
            Bibliothèque &amp; Histoires
          </a>
          <a
            href="#comment"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg py-2 border-b border-[#c9a24b]/15 text-[#f3e8d0] hover:text-[#c9a24b]"
          >
            Comment ça marche
          </a>
          <a
            href="#extrait"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg py-2 border-b border-[#c9a24b]/15 text-[#f3e8d0] hover:text-[#c9a24b]"
          >
            Extraits &amp; Citations
          </a>

          <div className="flex items-center justify-between pt-2">
            <span className="text-sm text-[#a9a4b8]">Thème de lecture</span>
            <button
              onClick={onToggleTheme}
              className="flex items-center gap-2 px-3 py-1.5 rounded border border-[#c9a24b]/30 text-xs text-[#dcc074]"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              {theme === 'dark' ? 'Mode Parchemin' : 'Mode Ombre'}
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenReader();
            }}
            className="w-full mt-2 py-2.5 rounded border border-[#c9a24b]/60 text-[#dcc074] text-center font-medium flex items-center justify-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Lire un extrait maintenant</span>
          </button>

          <a
            href="https://application-encre-ombre.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded bg-[#c9a24b] text-[#14121b] text-center font-semibold text-sm uppercase tracking-wider mt-1 flex items-center justify-center gap-2"
          >
            <span>Télécharger l'application</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
