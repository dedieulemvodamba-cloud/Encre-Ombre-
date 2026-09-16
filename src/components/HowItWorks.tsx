import React, { useState } from 'react';
import { STEPS } from '../data/stories';
import { Smartphone, ExternalLink, Moon, Bookmark, Heart, ChevronRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="comment" className="relative py-28 px-6 border-t border-[#c9a24b]/15 bg-[#14121b]">
      <div className="max-w-5xl mx-auto">
        <div className="text-left mb-16">
          <p
            className="text-sm font-normal italic text-[#dcc074] mb-3 tracking-wider"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Comment ça marche
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f3e8d0] max-w-2xl leading-tight"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Trois pas avant de basculer de l’autre côté
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Steps list */}
          <div className="lg:col-span-7 space-y-4">
            {STEPS.map((step, index) => {
              const isSelected = activeStep === index;
              return (
                <div
                  key={step.number}
                  id={`step-card-${index}`}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer transition-all duration-300 p-6 rounded-xl border text-left flex gap-6 items-start ${
                    isSelected
                      ? 'border-[#c9a24b] bg-[#1c1930]/90 shadow-[0_4px_24px_-4px_rgba(201,162,75,0.2)]'
                      : 'border-[#c9a24b]/15 bg-[#1c1930]/30 hover:border-[#c9a24b]/40'
                  }`}
                >
                  <span
                    className="text-2xl italic font-serif text-[#dcc074] shrink-0 pt-0.5"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {step.number}
                  </span>
                  <div className="space-y-2">
                    <h4
                      className="text-xl font-medium text-[#f3e8d0]"
                      style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                    >
                      {step.title}
                    </h4>
                    <p className="text-sm text-[#a9a4b8] leading-relaxed font-light">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="pt-6">
              <a
                href="https://application-encre-ombre.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#c9a24b] hover:text-[#dcc074] font-medium transition-colors"
              >
                <span>Accéder à l'application Encre &amp; Ombre</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Mobile Mockup Preview */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80 rounded-[36px] p-3.5 bg-[#1c1930] border-2 border-[#c9a24b]/40 shadow-2xl shadow-black/80">
              {/* Speaker pill */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-[#14121b] rounded-full border border-[#c9a24b]/20 z-20" />

              {/* Screen */}
              <div className="relative rounded-[28px] overflow-hidden bg-[#14121b] p-5 pt-8 text-left border border-white/5">
                {/* Mock app top bar */}
                <div className="flex items-center justify-between border-b border-[#c9a24b]/20 pb-3 mb-4">
                  <span
                    className="text-sm font-medium text-[#f3e8d0]"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    Encre &amp; Ombre
                  </span>
                  <div className="flex items-center gap-2 text-[#c9a24b]">
                    <Moon className="w-3.5 h-3.5" />
                    <span className="text-[10px] tracking-wider uppercase font-sans">Minuit</span>
                  </div>
                </div>

                {/* Mock story reader preview */}
                <div className="space-y-3">
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-[#c9a24b]">
                    Épisode 1 · Romance Sombre
                  </span>
                  <h5
                    className="text-lg font-medium text-[#f3e8d0] leading-snug"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    Le Pacte des Cendres
                  </h5>
                  <p className="text-[13px] text-[#f3e8d0]/80 font-serif leading-relaxed line-clamp-6">
                    « La calèche s’arrêta net au croisement des trois croix. Le cocher ne descendit pas. Il savait, comme tous ceux qui sillonnaient la lande après le glas de dix-neuf heures, que certains seuils ne se franchissent pas sans payer tribut au vent... »
                  </p>
                </div>

                {/* Mock controls bar */}
                <div className="mt-6 pt-3 border-t border-[#c9a24b]/20 flex items-center justify-between text-xs text-[#a9a4b8]">
                  <span className="flex items-center gap-1.5 text-[11px] text-[#dcc074]">
                    <Bookmark className="w-3 h-3" />
                    <span>Page 4 / 18</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <Heart className="w-3.5 h-3.5 hover:text-red-400 cursor-pointer" />
                    <span className="w-2 h-2 rounded-full bg-[#c9a24b] animate-pulse" />
                  </div>
                </div>

                {/* Direct App Link button in frame */}
                <div className="mt-4 pt-2">
                  <a
                    href="https://application-encre-ombre.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2 px-3 rounded text-center text-xs font-semibold bg-[#c9a24b] text-[#14121b] hover:bg-[#dcc074] transition-colors"
                  >
                    Ouvrir dans l'app
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
