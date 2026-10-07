import React from 'react';
import { ArrowUpRight, Feather, Flame, Linkedin } from 'lucide-react';

export default function Profile({ onOpenInquiry }) {
  return (
    <section id="profile" className="py-28 px-6 md:px-12 bg-white dark:bg-canvas-dark relative border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Kicker */}
        <div className="flex items-center gap-3 mb-6">
          <Feather className="w-4 h-4 text-berry-600" />
          <span className="text-xs font-mono tracking-widestEditorial uppercase text-ink-700 dark:text-ink-200 font-bold">
            ABOUT VIVEK SHUKLA
          </span>
          <div className="h-px bg-canvas-border dark:bg-canvas-darkBorder flex-1 ml-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait Frame & Quick Markers */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-canvas-subtle dark:bg-canvas-darkCard border-2 border-canvas-border dark:border-canvas-darkBorder shadow-xl p-4 group">
              {/* Image / Sketch Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white dark:bg-canvas-dark flex items-center justify-center border border-canvas-border dark:border-canvas-darkBorder">
                {/* Fallback illustration */}
                <div className="text-center p-8 space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-berry-50 dark:bg-canvas-darkCard border border-berry-200 dark:border-berry-800 flex items-center justify-center text-berry-600 dark:text-berry-400 shadow-sm">
                    <Flame className="w-10 h-10 animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-serif text-2xl text-ink-900 dark:text-white font-bold">
                      Vivek Shukla
                    </div>
                    <div className="text-xs font-mono text-berry-600 dark:text-berry-400 font-semibold">
                      Advisor, Operator, Storyteller
                    </div>
                    <p className="text-xs text-ink-500 dark:text-ink-400 font-light max-w-xs mx-auto pt-2">
                      Lucknow roots. Independent thinker, advisor, and storyteller.
                    </p>
                  </div>
                </div>

                {/* Actual image when file is present */}
                <img
                  src="/profile-sketch.png"
                  alt="Vivek Shukla"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Caption details */}
              <div className="mt-3.5 flex items-center justify-between text-xs font-mono text-ink-500 dark:text-ink-300 px-2">
                <span className="font-bold text-ink-900 dark:text-white">
                  Lucknow Roots
                </span>
                <span className="text-berry-600 dark:text-berry-400 font-medium">
                  Advisor &amp; Storyteller
                </span>
              </div>
            </div>

            {/* LinkedIn Connection Card */}
            <a
              href="https://www.linkedin.com/in/vivekshukla/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder hover:border-cobalt-500 group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-cobalt-50 dark:bg-cobalt-950/60 border border-cobalt-200 dark:border-cobalt-900 flex items-center justify-center text-cobalt-600 dark:text-cobalt-400">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-ink-900 dark:text-white group-hover:text-cobalt-600 transition-colors">
                    Connect on LinkedIn
                  </div>
                  <div className="text-[11px] font-mono text-ink-500 dark:text-ink-300">
                    linkedin.com/in/vivekshukla
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-ink-400 group-hover:text-cobalt-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* X (Twitter) Personal Card */}
            <a
              href="https://x.com/vivekshukla"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder hover:border-ink-900 dark:hover:border-white group transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-ink-100 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 flex items-center justify-center text-ink-900 dark:text-white">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-ink-900 dark:text-white group-hover:text-berry-600 transition-colors">
                    Follow on X (Twitter)
                  </div>
                  <div className="text-[11px] font-mono text-ink-500 dark:text-ink-300">
                    @vivekshukla
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-ink-400 group-hover:text-ink-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right Column: The Narrative in Short Sentences with Commas */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 dark:text-white leading-[1.12]">
                "If falling in love three times was not quite dramatic enough, I decided to almost die once, just to keep things interesting."
              </h2>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-ink-700 dark:text-ink-200 font-light leading-relaxed">
              <p>
                My parents got the shock of their lives when they discovered I was running an active computer business from my bedroom during college. To them, I was the quiet, introverted boy who went to class and came straight home. In reality, my days were packed with friends, roadside chai and samosa (forever a priority), movies, all of them, and fiercely independent ideas. I have never fit neatly into a box, and I hold opinions that rarely agree with the herd. That is simply who I am.
              </p>
              <p>
                My heart was just as adventurous. I fell in love three times with three extraordinary girls. After the second heartbreak shattered my peace, I opted for a radical cure: trading an aching chest for brain-breaking study, enrolling in B-school so marketing strategy could dull the pain.
              </p>
              <p>
                In May 2004, with the degree almost in hand, I stepped between two fighting groups, and a heavy iron rod struck my skull. Pronounced beyond hope at the first clinic, a few stubborn souls rushed me to another surgical theatre where a marathon operation pulled me back from the edge. The doctors prescribed years of dark rooms, caution, and permanent limits. I ignored them completely. Driven by pure defiance, I mounted a ferocious, fast-paced recovery, forcing my mind and hands back into the game months ahead of schedule.
              </p>
              <p>
                I returned to work with a vengeance. I joined an early startup led by a wonderfully eccentric, flamboyant founder whose chaotic energy was infectious. Later, I moved to an online job portal under a boss of rare strategic brilliance, a man who could structure any problem on earth but rarely liked choosing a side of the fence. Our chemistry was undeniable: he hired me again when he transitioned, and when I set off to launch my own business, he retained me as a senior consultant at his new venture.
              </p>
              <p>
                For the next two years, I led a double life. While architecting a medical insurance pre-authorisation system for his firm, I was grinding through the brutal reality of an IoT hardware startup. We created the category of water sub-metering in India, raised venture funds, introduced Metering-as-a-Service, scaled across four cities, and delivered an orderly exit for our investors.
              </p>
              <p>
                That journey brought me full circle to two abiding convictions: first, how little any of us truly knows, and second, how much hard-won perspective I need to write down and pass along before my time is up.
              </p>
            </div>

            {/* Why I Do This Today */}
            <div className="p-7 rounded-3xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-berry-600" />
                <span className="text-xs font-mono uppercase tracking-widest text-berry-600 dark:text-berry-400 font-bold">
                  The Mission Today
                </span>
              </div>
              <blockquote className="font-serif italic text-base sm:text-lg text-ink-900 dark:text-white font-medium leading-relaxed">
                "I write because survival taught me to pay attention, and I advise because I know how lonely the founder's chair can get. No buzzwords, no posturing, and no desire to be bucketed. Just warm Lakhnawi tea, hard-won operational judgment, and steady counsel when things get noisy."
              </blockquote>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenInquiry}
                className="px-7 py-3.5 rounded-full bg-berry-600 hover:bg-berry-700 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-berry-600/20 flex items-center gap-2"
              >
                <span>Connect With Vivek</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
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
    </section>
  );
}
