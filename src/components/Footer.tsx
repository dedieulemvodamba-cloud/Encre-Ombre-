import React from 'react';
import { ENCRE_ET_OMBRE_LOGO } from '../data/logo';
import { ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="relative py-14 px-6 border-t border-[#c9a24b]/20 bg-[#14121b] text-left text-sm text-[#7c778f]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10 pb-8 border-b border-[#c9a24b]/10">
          {/* Brand & tag */}
          <div className="flex items-center gap-3">
            <img
              src={ENCRE_ET_OMBRE_LOGO}
              alt="Logo Encre & Ombre"
              className="w-10 h-10 rounded-lg border border-[#c9a24b]/30"
            />
            <div>
              <span
                className="text-lg font-medium text-[#f3e8d0] block"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Encre &amp; Ombre
              </span>
              <span className="text-xs text-[#dcc074] font-serif">
                Littérature sans frontières
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-6 text-xs text-[#a9a4b8]">
            <a href="#univers" className="hover:text-[#dcc074] transition-colors">
              Univers
            </a>
            <a href="#bibliotheque" className="hover:text-[#dcc074] transition-colors">
              Bibliothèque
            </a>
            <a href="#comment" className="hover:text-[#dcc074] transition-colors">
              Comment ça marche
            </a>
            <a href="#extrait" className="hover:text-[#dcc074] transition-colors">
              Extraits
            </a>
            <a
              href="https://application-encre-ombre.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c9a24b] text-[#dcc074] flex items-center gap-1 transition-colors"
            >
              <span>Ouvrir l'application</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#7c778f]">
          <p>© {currentYear} Encre &amp; Ombre. Tous droits réservés.</p>
          <p className="flex items-center gap-1 font-serif italic text-[#a9a4b8]">
            <span>Créé pour les esprits qui lisent quand la ville s’endort.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
