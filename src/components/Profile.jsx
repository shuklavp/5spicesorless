import React from 'react';
import { ArrowUpRight, Car, Compass, Feather, Flame, Linkedin, MapPin } from 'lucide-react';

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
          <div className="lg:col-span-5 space-y-6">
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
                      Founder, Operator, Life Essayist
                    </div>
                    <p className="text-xs text-ink-500 dark:text-ink-400 font-light max-w-xs mx-auto pt-2">
                      Originally from Lucknow, now living and writing in Kuala Lumpur
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
                <span className="flex items-center gap-1.5 font-bold text-ink-900 dark:text-white">
                  <MapPin className="w-3.5 h-3.5 text-cobalt-600" />
                  <span>Kuala Lumpur, Malaysia</span>
                </span>
                <span className="text-berry-600 dark:text-berry-400 font-medium">ENPC Paris MBA, Biology</span>
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

            {/* The 10 Cars Card */}
            <div className="p-6 rounded-3xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder space-y-3">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-cobalt-600" />
                <span className="text-xs font-mono text-ink-900 dark:text-white font-bold uppercase tracking-wider">
                  Ten Cars, Thirty Years
                </span>
              </div>
              <p className="text-xs text-ink-600 dark:text-ink-300 font-light leading-relaxed">
                I have owned ten cars over thirty years. They ranged from nervous first Marutis to dependable Kias, solid Skodas, and finely tuned BMWs. You learn a great deal about patience when a German engine decides to take a break on an Indian highway.
              </p>
            </div>
          </div>

          {/* Right Column: The Narrative in Short Sentences with Commas */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl font-black text-ink-900 dark:text-white leading-[1.08]">
                "I was declared dead at twenty-seven. On May 13, 2004, the slate was wiped clean."
              </h2>
              <p className="mt-6 text-base sm:text-lg text-ink-700 dark:text-ink-200 font-normal leading-relaxed">
                Over thirty years, I studied biology, completed an MBA at ENPC in Paris, managed teams, and built venture-backed startups. 
              </p>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-ink-600 dark:text-ink-200 font-light leading-relaxed">
              <p>
                <strong>The Survival:</strong> On May 13, 2004, a heavy metal rod hit my head. I was pronounced dead on arrival, but survived a ten-hour emergency surgery. I woke up with no memory, no speech, and no motor skills. I could not hold a pen or write my name. Doctors warned my family that rushing recovery would lead to permanent paralysis, seizures, or early dementia.
              </p>
              <p>
                I took my time, took small steps every day, and proved them wrong. That was twenty-two years ago. Today, I am surviving, and surviving rather well.
              </p>
              <p>
                <strong>The Marriage:</strong> In personal life, after three heartbreaks that went nowhere, I took a leap of faith. I married someone without even meeting or knowing her beforehand. We have been happily married for twenty years now, and have a lovely sixteen-year-old daughter.
              </p>
              <p>
                <strong>The Startup:</strong> In business, I created the category of water sub-metering in India. We raised four and a half million dollars from marquee venture funds, grew to over a hundred and sixty employees, and ran four offices. Eventually, I led an exit for the benefit of our shareholders. I did not make money from it, but I protected the people who trusted me.
              </p>
              <p>
                <strong>The Cooking:</strong> I love to cook. I use the simplest of spices and honest methods to get exceptional outcomes. My cooking is loved by everyone who sits at our table.
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
                "I live in Kuala Lumpur now. I want to write down my life lessons across Life, Food, and Work before I forget them, along with some short fiction. I also want to help founders who need a calm, steady hand, acting as a Ben to your Jules (The Intern)."
              </blockquote>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
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
                className="px-6 py-3.5 rounded-full border-2 border-canvas-border dark:border-canvas-darkBorder text-ink-900 dark:text-white hover:border-cobalt-600 hover:text-cobalt-600 dark:hover:border-cobalt-400 dark:hover:text-cobalt-400 text-xs font-bold transition-all flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4 text-cobalt-600 dark:text-cobalt-400" />
                <span>View LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
