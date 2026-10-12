// src/components/HomeAboutTeaser.jsx
import React from 'react';
import { ArrowRight, Feather, Flame, Linkedin } from 'lucide-react';

export default function HomeAboutTeaser({ onNavigate }) {
  return (
    <section className="py-20 px-6 md:px-12 bg-white dark:bg-canvas-dark relative border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Kicker */}
        <div className="flex items-center gap-3 mb-8">
          <Feather className="w-4 h-4 text-berry-600 dark:text-berry-400" />
          <span className="text-xs font-mono tracking-widestEditorial uppercase text-ink-700 dark:text-ink-200 font-bold">
            ABOUT VIVEK SHUKLA · THE HUMAN ANCHOR
          </span>
          <div className="h-px bg-canvas-border dark:bg-canvas-darkBorder flex-1 ml-2" />
        </div>

        {/* Compact Two-Column Card matching older style proportions */}
        <div className="rounded-3xl p-8 sm:p-12 bg-canvas-subtle dark:bg-canvas-darkCard border-2 border-canvas-border dark:border-canvas-darkBorder shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Photo Frame in Small Box (Older Design Style, but Compact) */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative w-48 sm:w-56 rounded-3xl overflow-hidden bg-white dark:bg-canvas-dark border-2 border-canvas-border dark:border-canvas-darkBorder shadow-md p-3 group">
                {/* Sketch Portrait Container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder flex items-center justify-center">
                  <div className="text-center p-4 space-y-2">
                    <div className="w-12 h-12 rounded-xl bg-berry-50 dark:bg-berry-950/60 border border-berry-200 dark:border-berry-900 flex items-center justify-center text-berry-600 dark:text-berry-400 mx-auto">
                      <Flame className="w-6 h-6" />
                    </div>
                    <div className="font-serif text-sm font-bold text-ink-900 dark:text-white">Vivek Shukla</div>
                  </div>

                  <img
                    src="/profile-sketch.png"
                    alt="Vivek Shukla"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Sub-caption details matching older design */}
                <div className="mt-3 flex items-center justify-between text-xs font-mono px-1">
                  <span className="font-bold text-ink-900 dark:text-white">
                    Lucknow Roots
                  </span>
                  <span className="text-berry-600 dark:text-berry-400 font-medium">
                    Advisor &amp; Storyteller
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Narrative Summary & Direct Action */}
            <div className="lg:col-span-8 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black text-ink-900 dark:text-white leading-tight">
                "If falling in love three times was not quite dramatic enough, I decided to almost die once, just to keep things interesting."
              </h2>

              <p className="text-sm sm:text-base text-ink-700 dark:text-ink-200 font-light leading-relaxed">
                From assembling computers in my college bedroom to surviving a craniotomy at 27, relearning speech from scratch, building India's water sub-metering category across four regional offices, and steering an orderly exit. I write because survival taught me to pay attention, and I advise because I know how lonely the founder's chair can get.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('/about')}
                  className="px-6 py-3.5 rounded-full bg-berry-600 hover:bg-berry-700 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-berry-600/20 flex items-center gap-2 group"
                >
                  <span>Read Full Memoir &amp; Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="https://www.linkedin.com/in/vivekshukla/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-full border-2 border-canvas-border dark:border-canvas-darkBorder text-ink-900 dark:text-white hover:border-cobalt-600 hover:text-cobalt-600 dark:hover:border-cobalt-400 dark:hover:text-cobalt-400 text-xs font-bold transition-all flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-cobalt-600 dark:text-cobalt-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://x.com/vivekshukla"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-full border-2 border-canvas-border dark:border-canvas-darkBorder text-ink-900 dark:text-white hover:border-ink-900 dark:hover:border-white text-xs font-bold transition-all flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>@vivekshukla</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
