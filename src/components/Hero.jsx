import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 border-b border-sand-200 dark:border-ink-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Left-aligned Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink-900 dark:text-[#FAF8F5] leading-[1.14]">
              The quiet art of <span className="text-[#DE2573]">cutting through operational noise.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-ink-700 dark:text-slate-300 font-sans font-light leading-relaxed max-w-xl">
              The best things in life, work, and cooking are born from simplification. 
              When you remove what is unnecessary, clarity, speed, and flavour take care of themselves. 
              In the end, less almost always works better than more.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 items-center">
              <a
                href="#desks"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#DE2573] hover:bg-[#c41e63] text-white font-mono text-xs tracking-wider uppercase font-semibold shadow-sm transition-all duration-200"
              >
                <span>📖</span>
                <span>Explore Stories & Lessons</span>
                <span className="text-sm">↗</span>
              </a>

              <a
                href="/advisory"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-ink-900 dark:border-sand-300 text-ink-900 dark:text-sand-100 hover:bg-sand-100 dark:hover:bg-ink-800 font-mono text-xs tracking-wider uppercase font-semibold transition-all duration-200"
              >
                <span>⚙</span>
                <span>Dedicated Founder Advisory</span>
                <span className="text-sm">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Rooftop House Sketch Artwork */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[440px] aspect-square flex items-center justify-center">
              <img
                src="/sketches/house-sketch.png"
                alt="Architectural sketch of rooftop terrace conversation"
                className="w-full h-full object-contain select-none mix-blend-multiply dark:invert dark:mix-blend-screen transition-all duration-300"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
