import React, { useState } from 'react';
import { ExternalLink, Mail, CheckCircle2, Sparkles } from 'lucide-react';

export const AppDownloadBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section
      id="telecharger"
      className="relative py-32 px-6 text-center border-t border-[#c9a24b]/15"
      style={{
        background: `
          radial-gradient(ellipse 75% 65% at 50% 100%, rgba(201, 162, 75, 0.15), transparent 70%),
          #14121b
        `
      }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest text-[#c9a24b] font-semibold mb-4 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Application Nocturne</span>
        </span>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f3e8d0] mb-6 leading-tight max-w-2xl"
          style={{ fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Une histoire vous attend déjà. Vous ne savez pas encore laquelle
        </h2>

        <p className="text-base sm:text-lg text-[#a9a4b8] max-w-xl mx-auto leading-relaxed mb-10 font-light">
          Téléchargez Encre &amp; Ombre et laissez-la vous trouver, un épisode à la fois. Disponible sur smartphone et navigateur.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            id="btn-footer-cta-app"
            href="https://application-encre-ombre.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded bg-[#c9a24b] text-[#14121b] font-semibold text-base tracking-wide shadow-[0_8px_30px_-8px_rgba(201,162,75,0.6)] hover:bg-[#dcc074] hover:shadow-[0_12px_36px_-6px_rgba(201,162,75,0.8)] hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Télécharger l’application</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Newsletter / Notifications */}
        <div className="w-full max-w-md pt-8 border-t border-[#c9a24b]/15">
          <p className="text-xs uppercase tracking-widest text-[#dcc074] font-semibold mb-3">
            Recevoir le murmure d'un nouveau chapitre
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 p-3 rounded bg-[#c9a24b]/10 border border-[#c9a24b]/40 text-[#dcc074] text-sm animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              <span>Votre adresse a été inscrite au registre nocturne.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse courriel..."
                className="flex-1 px-4 py-2.5 rounded bg-[#1c1930] border border-[#c9a24b]/30 text-sm text-[#f3e8d0] placeholder-[#a9a4b8]/50 focus:outline-none focus:border-[#c9a24b]"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded border border-[#c9a24b] text-xs font-semibold uppercase tracking-wider text-[#14121b] bg-[#c9a24b] hover:bg-[#dcc074] transition-colors"
              >
                Inscrire
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
