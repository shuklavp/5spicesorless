import React, { useEffect } from 'react';
import { ArrowLeft, Clock } from 'lucide-react';

export default function FictionPage({ onNavigate, isDark }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-serif pt-32 pb-24 px-6 md:px-12 selection:bg-[#BC5259]/20 selection:text-[#111111]">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Navigation */}
        <div className="mb-8 animate-fadeIn">
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              if (onNavigate) onNavigate('/');
            }}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#736B63] hover:text-[#111111] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>BACK TO FRONT PAGE</span>
          </button>
        </div>

        {/* HERO BANNER: Warm off-white canvas with Royal Blue scooter bridge sketch */}
        <div className="relative rounded-3xl bg-[#F7F4F0] border border-[#E3DEC3] shadow-lg overflow-hidden min-h-[380px] md:min-h-[440px] flex items-center mb-16 animate-fadeIn">
          <div className="absolute inset-0 pointer-events-none flex justify-end overflow-hidden">
            <img
              src="/illustrations/fiction-scooter-bridge.jpg"
              onError={(e) => {
                e.currentTarget.src = '/life-sketch.jpeg';
              }}
              alt="Young girl and boy riding a scooter over a bridge (royal blue sketch on light canvas)"
              className="h-full w-auto max-w-none object-contain object-right-bottom filter contrast-110 brightness-100 opacity-90 lg:opacity-100"
            />
            {/* Soft vignette to ensure crisp text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4F0] via-[#F7F4F0]/85 via-45% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F7F4F0]/30 via-transparent to-[#F7F4F0]/10" />
          </div>

          <div className="relative z-20 max-w-xl p-8 sm:p-12 md:p-16 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#BC5259]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#736B63] font-bold">
                FICTION & ORIGINAL NARRATIVES
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#1A1A1A] tracking-tight leading-[1.05]">
              Stories.
            </h1>
            
            <p className="font-serif text-base sm:text-lg text-[#33302B] leading-relaxed pt-2">
              Imaginative landscapes, chance encounters, and quiet narratives told in unhurried prose. Here we step away from boardrooms and recipes to explore subtle friction, memory, and human connection.
            </p>
          </div>
        </div>

        {/* FEATURED STORY TEASER */}
        <div className="max-w-3xl mx-auto space-y-10">
          
          <div className="border-b border-[#EAE5DF] pb-4 flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B85028] font-bold">
              Upcoming Story Teaser
            </span>
            <span className="font-mono text-xs text-[#736B63] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> 2 min read
            </span>
          </div>

          <article className="space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#111111] leading-tight">
              Complete Silence Across the Bridge
            </h2>

            <div className="font-serif italic text-lg text-[#55524E] border-l-2 border-[#BC5259] pl-4 py-1">
              On an impulsive question, kilometres of quiet pavement, and how two strangers found their rhythm.
            </div>

            <div className="font-serif text-lg text-[#2B2927] leading-relaxed space-y-5 pt-3">
              <p>
                He was twenty-one, and she was perhaps eighteen. They had met for the very first time that afternoon.
              </p>
              <p>
                Halfway across the bridge, with the steady hum of the engine beneath them and the river breeze in their faces, he turned and asked quietly: <em>&ldquo;Mujhse shaadi karogi?&rdquo;</em>
              </p>
              <p>
                What followed was complete, unbroken silence for the rest of the ride. Not a single word was spoken as the road unspooled behind them.
              </p>
              <p>
                Months later, when the quiet had long dissolved into familiarity, she finally looked at him and laughed: <em>&ldquo;Koi aise poochta hai kya?&rdquo;</em>
              </p>
              <p>
                And just like that, without grand gestures or rehearsed speeches, they fell in love.
              </p>
            </div>

            {/* Coming Soon Notice */}
            <div className="pt-8 border-t border-[#EAE5DF]">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#B85028] bg-[#F7F4F0] px-4 py-2 rounded-full border border-[#E3DEC3]">
                COMING SOON
              </span>
            </div>
          </article>

        </div>

      </div>
    </div>
  );
}
