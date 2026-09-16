import React, { useState } from 'react';
import { QUOTES } from '../data/stories';
import { RefreshCw, Copy, Check, Quote } from 'lucide-react';

export const QuoteSection: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const currentQuote = QUOTES[quoteIndex];

  const handleNextQuote = () => {
    setQuoteIndex((prev) => (prev + 1) % QUOTES.length);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`« ${currentQuote.text} » — ${currentQuote.source}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="extrait"
      className="relative py-28 px-6 text-center overflow-hidden border-t border-[#c9a24b]/15"
      style={{
        background: `linear-gradient(180deg, #14121b 0%, rgba(122, 35, 49, 0.12) 50%, #14121b 100%)`
      }}
    >
      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full border border-[#c9a24b]/30 bg-[#c9a24b]/10 flex items-center justify-center text-[#dcc074] mb-8">
          <Quote className="w-5 h-5" />
        </div>

        <blockquote
          className="text-2xl sm:text-3xl md:text-4xl font-normal italic text-[#f3e8d0] leading-relaxed transition-all duration-300 min-h-[120px] flex items-center justify-center"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          <span>
            <span className="text-[#c9a24b] mr-2">—</span>
            {currentQuote.text}
          </span>
        </blockquote>

        <p className="mt-6 text-sm sm:text-base text-[#7c778f] font-serif tracking-wide">
          {currentQuote.source}
        </p>

        {/* Controls to cycle quotes and copy */}
        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={handleNextQuote}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-[#c9a24b]/20 text-xs text-[#a9a4b8] hover:text-[#dcc074] hover:border-[#c9a24b]/50 transition-colors"
            title="Autre citation"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Tourner la page</span>
          </button>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-[#c9a24b]/20 text-xs text-[#a9a4b8] hover:text-[#dcc074] hover:border-[#c9a24b]/50 transition-colors"
            title="Copier la citation"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copié' : 'Partager'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
