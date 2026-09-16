import React from 'react';
import { Moon, Clock, ShieldCheck, Feather } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="apropos" className="relative py-28 px-6 border-t border-[#c9a24b]/15 bg-[#14121b]">
      <div className="max-w-4xl mx-auto">
        <div className="max-w-2xl text-left">
          <p
            className="text-sm font-normal italic text-[#dcc074] mb-3 tracking-wider"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Ce que c’est
          </p>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f3e8d0] mb-8 leading-tight"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Une bibliothèque qui ne dit jamais tout d’avance
          </h2>

          <div className="space-y-6 text-lg text-[#a9a4b8] font-light leading-relaxed">
            <p>
              Encre &amp; Ombre ne range pas ses histoires par pays ni par étagère. Personne ne vous dira ce qui vous attend au chapitre suivant — seulement que quelque chose vous y attend.
            </p>
            <p>
              L’application est pensée pour un moment précis : celui où le bruit du jour retombe, où la lumière baisse, et où il ne reste que vous face à une page qui commence à peine à se laisser lire.
            </p>
          </div>
        </div>

        {/* Minimalist 3-Pillar Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-[#c9a24b]/10">
          <div className="flex flex-col gap-3 p-5 rounded-lg border border-[#c9a24b]/15 bg-[#1c1930]/40">
            <div className="w-9 h-9 rounded-md bg-[#c9a24b]/10 border border-[#c9a24b]/30 flex items-center justify-center text-[#dcc074]">
              <Moon className="w-4 h-4" />
            </div>
            <h4
              className="text-lg font-medium text-[#f3e8d0]"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Lecture de nuit
            </h4>
            <p className="text-sm text-[#a9a4b8] leading-relaxed">
              Une typographie étudiée pour reposer le regard et préserver le secret des heures tardives.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-5 rounded-lg border border-[#c9a24b]/15 bg-[#1c1930]/40">
            <div className="w-9 h-9 rounded-md bg-[#c9a24b]/10 border border-[#c9a24b]/30 flex items-center justify-center text-[#dcc074]">
              <Clock className="w-4 h-4" />
            </div>
            <h4
              className="text-lg font-medium text-[#f3e8d0]"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Épisodes choisis
            </h4>
            <p className="text-sm text-[#a9a4b8] leading-relaxed">
              Des textes rythmés en chapitres mesurés, pour dévorer dix minutes ou perdre la notion de l’aube.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-5 rounded-lg border border-[#c9a24b]/15 bg-[#1c1930]/40">
            <div className="w-9 h-9 rounded-md bg-[#c9a24b]/10 border border-[#c9a24b]/30 flex items-center justify-center text-[#dcc074]">
              <Feather className="w-4 h-4" />
            </div>
            <h4
              className="text-lg font-medium text-[#f3e8d0]"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Sans distraction
            </h4>
            <p className="text-sm text-[#a9a4b8] leading-relaxed">
              Aucune publicité intrusive, aucune notification criarde. Seule la vibration des mots compte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
