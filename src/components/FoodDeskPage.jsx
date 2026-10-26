// src/components/FoodDeskPage.jsx
import React, { useMemo } from 'react';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';
import { getFoodEssays } from '../data/foodEssays';

export default function FoodDeskPage() {
  const essays = useMemo(() => getFoodEssays(), []);

  return (
    <>
      <div className="min-h-screen bg-canvas dark:bg-canvas-dark text-ink-900 dark:text-white pt-36 sm:pt-44 pb-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <a
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-ink-500 hover:text-berry-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to the Front Page
        </a>

        {/* Authentic Food Desk Card: Cast-Iron Charcoal & Copper Glow */}
        <div className="relative rounded-3xl bg-[#120F0D] border-2 border-[#2F2018] shadow-2xl overflow-hidden min-h-[380px] flex items-center mb-16 transition-colors duration-300">
          
          {/* Ambient Warm Hearth Glow */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-amber-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#DE2573]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Large Subtle Desk Numerals */}
          <span className="absolute right-8 top-4 font-serif text-9xl font-black text-[#2A1D15]/40 select-none pointer-events-none">
            02
          </span>
          
          {/* Kitchen Sketch Backdrop with Linework Contrast */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/4 h-full pointer-events-none overflow-hidden select-none">
            <img 
              src="/food-sketch.jpeg" 
              alt="The Food Desk" 
              className="w-full h-full object-cover object-right invert brightness-110 contrast-125 opacity-70"
            />
            {/* Smooth transition from dark text zone into linework */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#120F0D] via-[#120F0D]/90 md:via-[#120F0D]/70 to-transparent w-full" />
          </div>

          {/* Text Content */}
          <div className="relative z-10 max-w-xl p-8 sm:p-14 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest font-bold text-amber-300 uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>FIVE SPICES OR FEWER</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white leading-tight">
              The Food Desk
            </h1>

            <p className="text-sm sm:text-base text-amber-100/90 font-light leading-relaxed">
              Lucknow roots where aroma precedes taste. Five spices, deliberate heat, and simple steps cooking for pure joy and mental decompression.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3.5 py-1.5 rounded-lg bg-[#1E1714] border border-[#38261C] font-mono text-xs text-amber-200/80 tracking-wide">
                Publishes: One recipe every fortnight
              </span>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {essays.map((story) => (
            <a
              key={story.slug}
              href={`/stories/${story.slug}/`}
              className="group rounded-3xl p-7 bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-600 dark:hover:border-berry-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono tracking-wider mb-4">
                  <span className="text-ink-500 dark:text-ink-400 font-medium">{story.date}</span>
                  <div className="flex items-center gap-1.5 text-berry-600 dark:text-berry-400 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{story.readTime || '6 min read'}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-white group-hover:text-berry-600 dark:group-hover:text-berry-400 transition-colors mb-3 leading-snug">
                  {story.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink-600 dark:text-ink-300 font-light leading-relaxed line-clamp-3 mb-6">
                  {story.subtitle || story.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-canvas-border dark:border-canvas-darkBorder flex items-center justify-between text-xs font-mono tracking-wider font-bold text-berry-600 dark:text-berry-400">
                <span className="uppercase">READ NOTE</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
              </div>
    </div>

    {/* Seamless Deep Midnight Footer Banner Band */}
    <div className="bg-[#070D1B] border-t border-[#18233C] pt-12 pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Footer Callout Banner: Kadai Spices */}
        <div className="mt-20 p-8 sm:p-14 rounded-3xl bg-[#28160B] border border-[#482814] shadow-2xl overflow-hidden relative text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest font-bold text-amber-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span>ON CULINARY RESTRAINT</span>
            </div>
            <blockquote className="font-serif not-italic text-2xl sm:text-3xl font-bold leading-snug text-white">
              &quot;In Lucknow cooking, the nose delivers judgement before the spoon ever reaches the tongue. Good food does not need thirty spices, it needs honest aroma, deliberate heat, and respect for the pot.&quot;
            </blockquote>
            <p className="text-xs sm:text-sm text-amber-200/80 font-light leading-relaxed">
              Five spices or fewer: clearing executive fatigue, cooking for pure joy, and the lost art of patient simmering.
            </p>
          </div>
          <div className="w-56 sm:w-72 shrink-0 flex items-center justify-center">
            <img 
              src="/footer/footer-kadai-spices.png" 
              alt="Kadai and Spices" 
              className="w-full h-auto object-contain"
              onError={(e) => { e.currentTarget.src = "/footer/footer-kadai-spices.jpg"; }}
            />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
