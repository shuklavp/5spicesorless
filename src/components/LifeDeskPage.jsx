// src/components/LifeDeskPage.jsx
import React, { useMemo } from 'react';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';
import { getLifeEssays } from '../data/lifeEssays';

export default function LifeDeskPage() {
  const essays = useMemo(() => getLifeEssays(), []);

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

        {/* Authentic Life Desk Card from Live Site */}
        <div className="relative rounded-3xl bg-[#0B1F17] border border-[#16382B] shadow-2xl overflow-hidden min-h-[380px] flex items-center mb-16">
          <span className="absolute right-8 top-4 font-serif text-9xl font-black text-emerald-900/20 select-none pointer-events-none">
            01
          </span>
          
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-3/4 h-full pointer-events-none">
            <img src="/life-sketch.jpeg" alt="The Life Desk" className="w-full h-full object-cover object-right opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F17] via-[#0B1F17]/90 to-transparent w-full" />
          </div>

          <div className="relative z-10 max-w-xl p-8 sm:p-14 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest font-bold text-berry-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-berry-500" />
              <span>LIFE, PERSPECTIVE, &amp; HUMAN BONDS</span>
            </div>
            
            <h1 className="font-serif text-4xl sm:text-6xl font-black text-white leading-tight">
              The Life Desk
            </h1>

            <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed">
              Everyday lessons from growing up in a not-so-big city of Lucknow, learning the nuances of communication and tehzeeb, and making honest mistakes. Becoming a hopeless dreamer and builder, and learning to be a kinder human being rather than playing an unearned guru.
            </p>

            <div className="pt-2 text-xs font-mono text-emerald-400/90 tracking-wider">
              Publishes: Every two weeks
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
              </div> {/* closes inner max-w-6xl container */}
    </div> {/* closes main content area */}

    {/* Seamless Deep Midnight Footer Banner Band */}
    <div className="bg-[#070D1B] border-t border-[#18233C] pt-12 pb-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Footer Callout Banner: Cairn Stones */}
        <div className="mt-20 p-8 sm:p-14 rounded-3xl bg-[#0B1E16] border border-[#173D2D] shadow-2xl overflow-hidden relative text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10 max-w-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest font-bold text-emerald-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>ON PATIENCE &amp; HUMAN BONDS</span>
            </div>
            <blockquote className="font-serif not-italic text-2xl sm:text-3xl font-bold leading-snug text-white">
              &quot;Life does not ask you to be extraordinary every morning. It asks you to be kind, to keep your dignity intact, and to learn how to stand up without blaming the road.&quot;
            </blockquote>
            <p className="text-xs sm:text-sm text-emerald-200/80 font-light leading-relaxed">
              Reflections on fatherhood, long devotion, second chances, and the quiet patience required to uncomplicate everyday human living.
            </p>
          </div>
          <div className="w-56 sm:w-72 shrink-0 flex items-center justify-center">
            <img 
              src="/footer/footer-cairn-stones.png" 
              alt="Cairn Stones" 
              className="w-full h-auto object-contain"
              onError={(e) => { e.currentTarget.src = "/footer/footer-cairn-stones.jpg"; }}
            />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
