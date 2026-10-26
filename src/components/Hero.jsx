// src/components/Hero.jsx
import React from 'react';
import { ArrowUpRight, BookOpen, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-44 pb-20 md:pt-52 md:pb-28 px-6 md:px-12 bg-white dark:bg-canvas-dark overflow-hidden transition-colors duration-300">
      
      {/* Subtle Terrace Linework Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.06] dark:opacity-[0.08] select-none">
        <img
          src="/house-sketch.jpg"
          alt="Terrace Garden Sketch"
          className="w-full max-w-4xl object-contain"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        
        {/* Main Headline with 'cutting' in Electric Berry Pink */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black text-ink-900 dark:text-white tracking-tight leading-[1.08] max-w-4xl mx-auto">
          The quiet art of <span className="text-berry-600 dark:text-berry-400">cutting</span> through operational noise.
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-ink-700 dark:text-ink-200 font-light max-w-3xl mx-auto leading-relaxed">
          The best things in life, work, and cooking are born from simplification. When you remove what is unnecessary, clarity, speed, and flavour take care of themselves. In the end, less almost always works better than more.
        </p>

        {/* CTA Buttons in font-mono */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/essays"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-berry-600 hover:bg-berry-700 text-white text-xs font-mono uppercase tracking-widest font-bold transition-all shadow-md shadow-berry-600/20 hover:scale-[1.02]"
          >
            <BookOpen className="w-4 h-4" />
            <span>EXPLORE STORIES &amp; LESSONS</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <a
            href="/advisory"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-ink-900 dark:border-white/20 bg-transparent text-ink-900 dark:text-white hover:bg-ink-900 hover:text-white dark:hover:bg-white dark:hover:text-ink-900 text-xs font-mono uppercase tracking-widest font-bold transition-all"
          >
            <Compass className="w-4 h-4 text-cobalt-600" />
            <span>DEDICATED FOUNDER ADVISORY</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
