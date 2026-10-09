// src/components/AboutPage.jsx
import React from 'react';
import { ArrowLeft, ArrowUpRight, Feather, Flame, Linkedin } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-white dark:bg-canvas-dark relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        

        {/* Section Kicker */}
        <div className="flex items-center gap-3 mb-8">
          <Feather className="w-4 h-4 text-berry-600" />
          <span className="text-xs font-mono tracking-widestEditorial uppercase text-ink-700 dark:text-ink-200 font-bold">
            ABOUT VIVEK SHUKLA
          </span>
          <div className="h-px bg-canvas-border dark:bg-canvas-darkBorder flex-1 ml-2" />
        </div>

        {/* Exact Two-Column Layout from Screenshot 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait Frame & Quick Markers */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-canvas-subtle dark:bg-canvas-darkCard border-2 border-canvas-border dark:border-canvas-darkBorder shadow-xl p-4 group">
              {/* Image / Sketch Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white dark:bg-canvas-dark flex items-center justify-center border border-canvas-border dark:border-canvas-darkBorder">
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

                <img
                  src="/profile-sketch.png"
                  alt="Vivek Shukla"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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

          {/* Right Column: The Full Unhurried Narrative (Exact Prose from Screenshot 5) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-ink-900 dark:text-white leading-[1.12]">
                "If falling in love three times was not quite dramatic enough, I decided to almost die once, just to keep things interesting."
              </h1>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-ink-700 dark:text-ink-200 font-light leading-relaxed">
              <p>
                My parents almost lost it when they realised I was running an active computer business right out of my bedroom during college. To them, I was just the quiet, introverted kid who went to class and came straight back home. But in reality, my days were packed with friends, roadside chai and samosas (an absolute non-negotiable), endless films, and plenty of independent ideas. I think those were the days of dreams and a relentless aspiration to make them happen.
              </p>
              <p>
                While life itself was unfolding each day, I kept falling in love one after another. I fell in love three times with three amazing girls. After the second heartbreak completely threw me off balance, instead of going the 'Devdas way', I went for a pretty radical fix: trading an aching heart for intense study, enrolling in B-school so marketing strategy and economics could distract me from the pain.
              </p>
              <p>
                Then came May 2004. Right as I was wrapping up my degree, I tried to step in and break up a fight, only to take a heavy iron rod to the skull. I was practically pronounced dead on arrival at the first clinic, but a few persistent people rushed me to another hospital, where marathon surgery managed to bring me back from the edge. The doctors told me I'd need years of recovery, extreme caution, and would face permanent disability if I rushed into life. I had lost memory, speech, writing, and motor skills. I relearnt everything from scratch. Driven by pure defiance, I threw myself into a fast-tracked recovery, pushing my mind and body back into action months earlier than anyone expected.
              </p>
              <p>
                I jumped right back into work. First, I joined an early-stage startup run by a wonderfully eccentric, larger-than-life founder whose chaotic energy was totally infectious. Later, I moved to an online job portal owned by a media house, and under a boss who was a strategic genius, someone who could break down any complex problem on earth, even if he rarely liked taking a definitive stance. We hit it off immediately: he brought me along when he transitioned to his next role, and when I stepped out to launch my own venture, he kept me on as a senior consultant.
              </p>
              <p>
                For the next two years, I essentially lived a double life. On one hand, I was building a medical insurance pre-authorisation platform for his firm; on the other, I was in the trenches running an IoT hardware startup. We pioneered the water sub-metering category in India, raised venture funding, introduced Metering-as-a-Service, expanded across four major cities, and eventually engineered a successful exit for our investors.
              </p>
              <p>
                Looking back, that entire journey left me with two big takeaways: first, just how little any of us really know, and second, how important it is to document and share these hard-won lessons while I still can.
              </p>
            </div>

            {/* The Mission Today Callout */}
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

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/advisory')}
                className="px-7 py-3.5 rounded-full bg-berry-600 hover:bg-berry-700 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-berry-600/20 flex items-center gap-2"
              >
                <span>Spar in Advisory ("Ben to Jules")</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              
              <button
                onClick={() => onNavigate('/stories')}
                className="px-6 py-3.5 rounded-full border-2 border-canvas-border dark:border-canvas-darkBorder hover:border-berry-600 text-ink-900 dark:text-white text-xs font-bold font-mono tracking-wider uppercase transition-all"
              >
                Explore Stories &amp; Lessons
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
