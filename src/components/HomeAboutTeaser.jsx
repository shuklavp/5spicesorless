// src/components/HomeAboutTeaser.jsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function HomeAboutTeaser() {
  return (
    <section className="py-20 px-6 md:px-12 bg-canvas-subtle dark:bg-canvas-dark border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Sketch Plate: Perfectly framed without cutoffs, 'Lucknow Roots' removed */}
          <div className="w-36 sm:w-44 shrink-0 text-center space-y-2">
            <div className="w-32 h-36 sm:w-36 sm:h-40 mx-auto rounded-3xl overflow-hidden bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder p-1.5 shadow-sm flex items-center justify-center">
              <img
                src="/profile-sketch.png"
                alt="Vivek Shukla"
                className="w-full h-full object-contain object-bottom"
              />
            </div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-berry-600 dark:text-berry-400 font-bold">
              Advisor &amp; Storyteller
            </div>
          </div>

          {/* Quote & Bio */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl font-bold text-ink-900 dark:text-white leading-snug">
              "If falling in love three times was not quite dramatic enough, I decided to almost die once, just to keep things interesting."
            </blockquote>

            <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 font-light leading-relaxed">
              From assembling computers in my college bedroom to surviving a craniotomy at 27, relearning speech from scratch, building India's water sub-metering category across four regional offices, and steering an orderly exit. I write because survival taught me to pay attention, and I advise because I know how lonely the founder's chair can get.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-berry-600 hover:bg-berry-700 text-white text-xs font-mono uppercase tracking-widest font-bold transition-all shadow-sm hover:scale-[1.02]"
              >
                <span>READ FULL MEMOIR &amp; STORY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://linkedin.com/in/vivekshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-canvas-border dark:border-canvas-darkBorder bg-white dark:bg-canvas-dark text-xs font-mono uppercase tracking-wider font-bold text-ink-800 dark:text-ink-200 hover:border-berry-500 transition-all"
              >
                <span>LinkedIn</span>
              </a>

              <a
                href="https://x.com/vivekshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full border border-canvas-border dark:border-canvas-darkBorder bg-white dark:bg-canvas-dark text-xs font-mono uppercase tracking-wider font-bold text-ink-800 dark:text-ink-200 hover:border-berry-500 transition-all"
              >
                <span>X @vivekshukla</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
