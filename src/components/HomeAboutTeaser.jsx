import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function HomeAboutTeaser() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#070D1B] border-t border-[#18233C] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#141B29] border border-[#232F46] shadow-2xl">
          
          {/* Subtle Tactile Sandpaper Noise Texture */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />

          {/* Section Kicker Header */}
          <div className="relative z-10 flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#DE2573]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#DE2573] font-bold">
              THE MAN BEHIND THE DESKS · VIVEK SHUKLA
            </span>
          </div>

          {/* Left-Aligned Quote & Bio */}
          <div className="space-y-6 text-left relative z-10 max-w-3xl">
            <blockquote className="font-serif not-italic text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-snug">
              &ldquo;If falling in love three times was not quite dramatic enough, I decided to almost die once, just to keep things interesting.&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              From assembling computers in my college bedroom to surviving a craniotomy at 27, relearning speech from scratch, building India&apos;s water sub-metering category across four regional offices, and steering an orderly exit. I write because survival taught me to pay attention, and I advise because I know how lonely the founder&apos;s chair can get.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#DE2573] hover:bg-[#c41e63] text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-sm transition-colors"
              >
                <span>Read Full Memoir &amp; Story</span>
                <span className="text-sm">↗</span>
              </a>

              <a
                href="https://linkedin.com/in/vivekshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-[#1C2638] hover:bg-[#25334A] text-slate-300 hover:text-white border border-[#2D3E5E] font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://x.com/vivekshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-[#1C2638] hover:bg-[#25334A] text-slate-300 hover:text-white border border-[#2D3E5E] font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <span>X @vivekshukla</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
