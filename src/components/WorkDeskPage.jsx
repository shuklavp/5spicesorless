// src/components/WorkDeskPage.jsx
import React, { useMemo } from 'react';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';
import { getWorkEssays } from '../data/workEssays';

export default function WorkDeskPage() {
  const essays = useMemo(() => getWorkEssays(), []);

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

        {/* Authentic Work Desk Card from Live Site */}
        <div className="relative rounded-3xl bg-[#0C131F] border border-[#1A2840] shadow-2xl overflow-hidden min-h-[380px] flex items-center mb-16">
          <span className="absolute right-8 top-4 font-serif text-9xl font-black text-slate-700/20 select-none pointer-events-none">
            03
          </span>
          
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/4 h-full pointer-events-none">
            <img src="/work-sketch.jpeg" alt="The Work Desk" className="w-full h-full object-cover object-right opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C131F] via-[#0C131F]/90 to-transparent w-full" />
          </div>

          <div className="relative z-10 max-w-xl p-8 sm:p-14 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest font-bold text-rose-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>STARTUPS, BOARDROOMS, &amp; OPERATIONAL DISCIPLINE</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-6xl font-black text-white leading-tight">
              The Work Desk
            </h1>

            <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed">
              Thirty years of enterprise building enduring ventures, trusted partnerships, and practical operator judgement. Cutting through operational noise, boardroom theatre, and vanity to focus on what truly works.
            </p>

            <div className="pt-2 text-xs font-mono text-cyan-400 tracking-wider">
              Publishes: A weekly note on Sunday
            </div>
          </div>
        </div>

        {/* Filtered Work Story Grid (Only Work Stories) */}
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
        {/* Footer Callout Banner: Drafting Tools */}
        <div className="mt-20 p-8 sm:p-14 rounded-3xl bg-[#0C1424] border border-[#1A2A4A] shadow-2xl overflow-hidden relative text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest font-bold text-cyan-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span>ON ENTERPRISE &amp; CHARACTER</span>
            </div>
            <blockquote className="font-serif not-italic text-2xl sm:text-3xl font-bold leading-snug text-white">
              &quot;A business plan with twenty priorities has none. True governance is not a 50-page presentation, it is keeping faith with those who trusted you with their people and capital.&quot;
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              Thirty years of enterprise craft: category creation, clean exits, hiring for character, and stripping away bureaucratic clutter.
            </p>
          </div>
          <div className="w-56 sm:w-72 shrink-0 flex items-center justify-center">
            <img 
              src="/footer/footer-drafting-tools.png" 
              alt="Drafting Tools and Blueprints" 
              className="w-full h-auto object-contain"
              onError={(e) => { e.currentTarget.src = "/footer/footer-drafting-tools.jpg"; }}
            />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
