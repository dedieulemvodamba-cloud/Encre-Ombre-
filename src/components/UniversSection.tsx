import React, { useState } from 'react';
import { STORIES, Story } from '../data/stories';
import { BookOpen, Sparkles, Clock, Layers, ArrowRight } from 'lucide-react';

interface UniversSectionProps {
  onSelectStory: (story: Story) => void;
}

export const UniversSection: React.FC<UniversSectionProps> = ({ onSelectStory }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredStories = activeFilter === 'all'
    ? STORIES
    : STORIES.filter(s => s.universe === activeFilter);

  return (
    <section id="univers" className="relative py-28 px-6 border-t border-[#c9a24b]/15 bg-[#14121b]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-left mb-16">
          <p
            className="text-sm font-normal italic text-[#dcc074] mb-3 tracking-wider"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Univers
          </p>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#f3e8d0] max-w-3xl leading-tight"
            style={{ fontFamily: "'Fraunces', Georgia, serif" }}
          >
            Trois seuils, une seule question : qu’est-ce qui vous attend derrière ?
          </h2>
        </div>

        {/* The 3 iconic feature rows from Encre & Ombre design */}
        <div className="space-y-16 border-b border-[#c9a24b]/20 pb-20">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-6">
            <div className="text-left">
              <span className="text-xs uppercase tracking-widest text-[#c9a24b] font-semibold mb-2 block">
                Seuil Premier
              </span>
              <h3
                className="text-2xl md:text-3xl font-medium text-[#f3e8d0] mb-4"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Des mondes qu’on ne soupçonne pas
              </h3>
              <p className="text-base text-[#a9a4b8] leading-relaxed max-w-lg">
                Romance sombre, thriller, fantastique, mystère — Encre &amp; Ombre ne dévoile jamais un univers en entier avant qu’on y entre. Chaque porte cache une ambiance qu’on ne devine qu’en la franchissant.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative p-6 rounded-2xl border border-[#c9a24b]/20 bg-[#1c1930]/30 shadow-xl">
                <svg className="w-56 h-56 max-w-full" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="72" stroke="#c9a24b" strokeWidth="1" opacity="0.4" />
                  <circle cx="100" cy="100" r="85" stroke="#c9a24b" strokeWidth="0.5" strokeDasharray="3 4" opacity="0.25" />
                  <path d="M55 135c12-45 35-75 45-75s33 30 45 75" stroke="#c9a24b" strokeWidth="1.4" strokeLinecap="round" />
                  <circle cx="100" cy="55" r="4.5" fill="#c9a24b" />
                  <circle cx="68" cy="92" r="2.5" fill="#dcc074" opacity="0.8" />
                  <circle cx="132" cy="95" r="2.5" fill="#dcc074" opacity="0.8" />
                  <circle cx="100" cy="100" r="1.5" fill="#f3e8d0" />
                </svg>
              </div>
            </div>
          </div>

          {/* Row 2 (Reversed on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-6 md:flex-row-reverse">
            <div className="flex justify-center items-center md:order-1">
              <div className="relative p-6 rounded-2xl border border-[#c9a24b]/20 bg-[#1c1930]/30 shadow-xl">
                <svg className="w-56 h-56 max-w-full" viewBox="0 0 200 200" fill="none">
                  <circle cx="100" cy="100" r="70" stroke="#c9a24b" strokeWidth="0.6" strokeDasharray="2 4" opacity="0.3" />
                  <path
                    d="M125 40a60 60 0 1 0 40 100 48 48 0 0 1-40-100z"
                    fill="#c9a24b"
                    opacity="0.85"
                  />
                  <circle cx="138" cy="62" r="2" fill="#f3e8d0" opacity="0.6" />
                  <circle cx="152" cy="85" r="1.5" fill="#dcc074" opacity="0.8" />
                </svg>
              </div>
            </div>
            <div className="text-left md:order-2">
              <span className="text-xs uppercase tracking-widest text-[#c9a24b] font-semibold mb-2 block">
                Seuil Second
              </span>
              <h3
                className="text-2xl md:text-3xl font-medium text-[#f3e8d0] mb-4"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Une lumière qui ne montre jamais tout
              </h3>
              <p className="text-base text-[#a9a4b8] leading-relaxed max-w-lg">
                Le mode ombre efface tout ce qui n’est pas la page. Le texte reste net, le reste disparaît — comme si l’histoire préférait qu’on ne voie qu’elle.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-6">
            <div className="text-left">
              <span className="text-xs uppercase tracking-widest text-[#c9a24b] font-semibold mb-2 block">
                Seuil Troisième
              </span>
              <h3
                className="text-2xl md:text-3xl font-medium text-[#f3e8d0] mb-4"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Ce que la suite vous réserve
              </h3>
              <p className="text-base text-[#a9a4b8] leading-relaxed max-w-lg">
                Les histoires avancent par épisodes, révélés un à un. Personne ne sait jamais tout à l’avance — pas même, parfois, ceux qui les écrivent.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative p-6 rounded-2xl border border-[#c9a24b]/20 bg-[#1c1930]/30 shadow-xl">
                <svg className="w-56 h-56 max-w-full" viewBox="0 0 200 200" fill="none">
                  <rect x="52" y="42" width="96" height="22" rx="3" stroke="#c9a24b" strokeWidth="1.4" fill="rgba(201, 162, 75, 0.08)" />
                  <path d="M62 53h40" stroke="#c9a24b" strokeWidth="1.2" strokeLinecap="round" />
                  <rect x="52" y="88" width="96" height="22" rx="3" stroke="#c9a24b" strokeWidth="1.2" opacity="0.75" />
                  <path d="M62 99h30" stroke="#c9a24b" strokeWidth="1" strokeLinecap="round" opacity="0.75" />
                  <rect x="52" y="134" width="96" height="22" rx="3" stroke="#dcc074" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.45" />
                  <path d="M62 145h20" stroke="#dcc074" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 3" opacity="0.45" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Library Section ("Bibliothèque") */}
        <div id="bibliotheque" className="pt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="text-left">
              <span className="text-xs uppercase tracking-widest text-[#c9a24b] font-semibold mb-2 block">
                Rayonnages Nocturnes
              </span>
              <h3
                className="text-3xl sm:text-4xl font-medium text-[#f3e8d0]"
                style={{ fontFamily: "'Fraunces', Georgia, serif" }}
              >
                Feuilleter les premières pages
              </h3>
              <p className="text-sm text-[#a9a4b8] mt-2 max-w-md font-light">
                Choisissez un récit pour ouvrir le lecteur immersif et vous laisser happer par l'ombre.
              </p>
            </div>

            {/* Genre Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 py-1.5 rounded text-xs tracking-wider transition-all uppercase ${
                  activeFilter === 'all'
                    ? 'bg-[#c9a24b] text-[#14121b] font-semibold shadow-md'
                    : 'border border-[#c9a24b]/30 text-[#a9a4b8] hover:border-[#c9a24b] hover:text-[#f3e8d0]'
                }`}
              >
                Toutes ({STORIES.length})
              </button>
              <button
                onClick={() => setActiveFilter('romance')}
                className={`px-3.5 py-1.5 rounded text-xs tracking-wider transition-all uppercase ${
                  activeFilter === 'romance'
                    ? 'bg-[#c9a24b] text-[#14121b] font-semibold shadow-md'
                    : 'border border-[#c9a24b]/30 text-[#a9a4b8] hover:border-[#c9a24b] hover:text-[#f3e8d0]'
                }`}
              >
                Romance &amp; Passion
              </button>
              <button
                onClick={() => setActiveFilter('thriller')}
                className={`px-3.5 py-1.5 rounded text-xs tracking-wider transition-all uppercase ${
                  activeFilter === 'thriller'
                    ? 'bg-[#c9a24b] text-[#14121b] font-semibold shadow-md'
                    : 'border border-[#c9a24b]/30 text-[#a9a4b8] hover:border-[#c9a24b] hover:text-[#f3e8d0]'
                }`}
              >
                Thriller &amp; Horreur
              </button>
              <button
                onClick={() => setActiveFilter('mystere')}
                className={`px-3.5 py-1.5 rounded text-xs tracking-wider transition-all uppercase ${
                  activeFilter === 'mystere'
                    ? 'bg-[#c9a24b] text-[#14121b] font-semibold shadow-md'
                    : 'border border-[#c9a24b]/30 text-[#a9a4b8] hover:border-[#c9a24b] hover:text-[#f3e8d0]'
                }`}
              >
                Mystère Ésotérique
              </button>
              <button
                onClick={() => setActiveFilter('conte')}
                className={`px-3.5 py-1.5 rounded text-xs tracking-wider transition-all uppercase ${
                  activeFilter === 'conte'
                    ? 'bg-[#c9a24b] text-[#14121b] font-semibold shadow-md'
                    : 'border border-[#c9a24b]/30 text-[#a9a4b8] hover:border-[#c9a24b] hover:text-[#f3e8d0]'
                }`}
              >
                Contes &amp; Rêves
              </button>
            </div>
          </div>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                id={`card-story-${story.id}`}
                onClick={() => onSelectStory(story)}
                className="group relative flex flex-col justify-between p-7 rounded-xl border border-[#c9a24b]/20 bg-[#1c1930]/60 hover:border-[#c9a24b]/60 transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-lg hover:shadow-[0_12px_32px_-12px_rgba(201,162,75,0.25)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs tracking-widest uppercase font-semibold text-[#c9a24b]">
                      {story.universeLabel}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded border border-[#c9a24b]/30 text-[#dcc074] bg-[#c9a24b]/5">
                      {story.badge}
                    </span>
                  </div>

                  <h4
                    className="text-2xl font-medium text-[#f3e8d0] group-hover:text-[#dcc074] transition-colors mb-2"
                    style={{ fontFamily: "'Fraunces', Georgia, serif" }}
                  >
                    {story.title}
                  </h4>

                  <p className="text-xs italic text-[#a9a4b8] mb-4">
                    par {story.author}
                  </p>

                  <p className="text-sm text-[#f3e8d0]/80 leading-relaxed font-light mb-5">
                    {story.teaser}
                  </p>

                  <div className="p-3.5 rounded bg-[#14121b]/80 border-l-2 border-[#c9a24b] mb-6">
                    <p className="text-xs italic text-[#dcc074] font-serif leading-relaxed">
                      {story.quoteExcerpt}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#c9a24b]/10 text-xs text-[#a9a4b8]">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#c9a24b]" />
                      {story.readingTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-[#c9a24b]" />
                      {story.episodesCount} épisodes
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[#dcc074] font-medium group-hover:translate-x-1 transition-transform">
                    <span>Ouvrir l'extrait</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
