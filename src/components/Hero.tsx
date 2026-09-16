import React from 'react';
import { ENCRE_ET_OMBRE_LOGO } from '../data/logo';
import { ExternalLink, BookOpen, Compass, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenReader: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReader }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center text-center pt-32 pb-20 px-6 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 65% 55% at 50% 25%, rgba(201, 162, 75, 0.12), transparent 60%),
          radial-gradient(circle at 15% 50%, rgba(122, 35, 49, 0.15), transparent 45%),
          linear-gradient(160deg, #14121b 0%, #262b4a 70%, #2c2350 100%)
        `
      }}
    >
      {/* Delicate celestial / ink ambient aura */}
      <div className="absolute inset-0 pointer-events-none opacity-20 paper-grain" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Emblem Seal */}
        <div className="relative mb-6 group cursor-pointer" onClick={onOpenReader}>
          <div className="absolute -inset-2 bg-gradient-to-r from-[#c9a24b]/30 to-[#7a2331]/30 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-500" />
          <img
            src={ENCRE_ET_OMBRE_LOGO}
            alt="Sceau Encre & Ombre"
            className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl shadow-2xl border border-[#c9a24b]/40 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute -bottom-2 -right-2 bg-[#14121b] border border-[#c9a24b] text-[#c9a24b] p-1.5 rounded-full shadow-lg">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Kicker */}
        <p
          className="text-base md:text-lg italic font-normal text-[#dcc074] mb-5 tracking-wide"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Certaines histoires ne se révèlent qu’à la nuit tombée.
        </p>

        {/* Headline */}
        <h1
          id="hero-title"
          className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#f3e8d0] leading-[1.18] max-w-3xl"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          <span className="block mb-2 sm:mb-3 text-[#f3e8d0]">
            Chaque histoire a son ombre.
          </span>
          <span className="block text-[#dcc074]">
            Chaque ombre cache une histoire.
          </span>
        </h1>

        {/* Lede description */}
        <p className="mt-7 text-base sm:text-lg text-[#a9a4b8] max-w-xl mx-auto leading-relaxed font-light">
          Encre &amp; Ombre garde ses récits à l’abri de la lumière du jour. Vous n’y entrez jamais tout à fait par hasard — et vous n’en ressortez jamais tout à fait indemne.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
          <a
            id="btn-hero-download"
            href="https://application-encre-ombre.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded bg-[#c9a24b] text-[#14121b] font-semibold text-[15px] tracking-wide shadow-[0_8px_24px_-8px_rgba(201,162,75,0.6)] hover:bg-[#dcc074] hover:shadow-[0_12px_28px_-6px_rgba(201,162,75,0.8)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Télécharger l’application</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            id="btn-hero-read-sample"
            onClick={onOpenReader}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded border border-[#c9a24b]/40 text-[#f3e8d0] text-[15px] hover:border-[#c9a24b] hover:bg-[#c9a24b]/10 hover:-translate-y-0.5 transition-all duration-200"
          >
            <BookOpen className="w-4 h-4 text-[#dcc074]" />
            <span>Lire un extrait</span>
          </button>

          <a
            id="btn-hero-explore"
            href="#univers"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded text-[#a9a4b8] text-[15px] hover:text-[#dcc074] transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Explorer les univers</span>
          </a>
        </div>

        {/* Subtle scroll cue */}
        <div className="mt-14 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
          <a href="#apropos" className="text-xs uppercase tracking-widest text-[#a9a4b8] flex flex-col items-center gap-2">
            <span>Découvrir</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#c9a24b]" />
          </a>
        </div>
      </div>
    </section>
  );
};
