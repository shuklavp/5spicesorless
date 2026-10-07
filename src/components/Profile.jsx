import React from 'react';
import { ArrowUpRight, Award, Car, Compass, Feather, Flame, Heart, Linkedin, MapPin, ShieldCheck, Sparkles } from 'lucide-react';

export default function Profile({ onOpenInquiry }) {
  return (
    <section id="profile" className="py-28 px-6 md:px-12 bg-white dark:bg-canvas-dark relative border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Kicker */}
        <div className="flex items-center gap-3 mb-6">
          <Feather className="w-4 h-4 text-berry-600" />
          <span className="text-xs font-mono tracking-widestEditorial uppercase text-ink-700 dark:text-ink-200 font-bold">
            THE UNVARNISHED BACKSTORY
          </span>
          <div className="h-px bg-canvas-border dark:bg-canvas-darkBorder flex-1 ml-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait Frame & Life Milestones */}
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
                      Founder · Operator · Life Essayist
                    </div>
                    <p className="text-xs text-ink-500 dark:text-ink-400 font-light max-w-xs mx-auto pt-2">
                      Currently living and writing in Kuala Lumpur
                    </p>
                  </div>
                </div>

                {/* Actual image when file is placed */}
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
                <span className="text-berry-600 dark:text-berry-400 font-medium">ENPC Paris MBA · Biology</span>
              </div>
            </div>

            {/* LinkedIn Connection Pill */}
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

            {/* Automotive & Life Passions Box */}
            <div className="p-6 rounded-3xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder space-y-3">
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-cobalt-600" />
                <span className="text-xs font-mono text-ink-900 dark:text-white font-bold uppercase tracking-wider">
                  The 10-Car Highway Journey
                </span>
              </div>
              <p className="text-xs text-ink-600 dark:text-ink-300 font-light leading-relaxed">
                "I love cars—having owned 10 across my lifetime, from humble first Marutis to responsive Skodas, reliable Kias, and precision BMWs. You learn a lot about an engineer's soul by how a vehicle takes a hard corner at 120 km/h."
              </p>
            </div>
          </div>

          {/* Right Column: The True Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl font-black text-ink-900 dark:text-white leading-[1.08]">
                "I was declared dead at 27. On May 13, 2004, my world was wiped clean."
              </h2>
              <p className="mt-6 text-base sm:text-lg text-ink-700 dark:text-ink-200 font-normal leading-relaxed">
                Over the last 30 years, I have studied biology, completed my MBA from École Nationale des Ponts et Chaussées (ENPC) in Paris, worked across executive roles, and built venture-backed startups.
              </p>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-ink-600 dark:text-ink-200 font-light leading-relaxed">
              <p>
                <strong>The Survival (May 13, 2004):</strong> At age 27, I was struck in the head by a heavy metal rod. Pronounced clinically dead on arrival, I survived only after a brutal 10-hour emergency surgery. I woke up with zero memory, no speech, no motor control, and unable to hold a spoon or write my own name. Doctors warned my family that if I rushed recovery, I risked permanent paralysis, intractable seizures, and early dementia.
              </p>
              <p>
                Against all odds, I rebuilt my mind and body through microscopic, daily persistence. That was <strong>22 years ago</strong>. Today, I am not just surviving—I am thriving.
              </p>
              <p>
                <strong>The Family:</strong> In my personal life, after being in love three times and facing heartbreak, I took the ultimate leap of faith: marrying someone without ever having known or met her. We have now been happily married for <strong>20 years</strong>, raising our remarkable 16-year-old daughter.
              </p>
              <p>
                <strong>The Venture:</strong> As a startup founder, I created an entire industry category from scratch: sub-metering of water in India. We raised <strong>$4.5M from marquee venture investors</strong>, managed <strong>165+ employees across 4 regional offices</strong>, and scaled rapidly. When market headwinds demanded decisive resolution, I executed an exit for the benefit and protection of my shareholders—even though I personally didn't make money from it. I protected the people who trusted me.
              </p>
            </div>

            {/* The "Ben to Jules" Advisory Manifesto */}
            <div className="p-7 rounded-3xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-berry-600" />
                <span className="text-xs font-mono uppercase tracking-widest text-berry-600 dark:text-berry-400 font-bold">
                  Why I Do This Today
                </span>
              </div>
              <blockquote className="font-serif italic text-base sm:text-lg text-ink-900 dark:text-white font-medium leading-relaxed">
                "I live in Kuala Lumpur now. My goal is to write down my life lessons across <strong>Life, Food, and Work</strong> before I forget them, share short stories of human connection, and act as a steady, ego-free sounding board—<strong>a Ben to your Jules (The Intern)</strong>—for founders building things that matter."
              </blockquote>
            </div>

            {/* Action CTA & Direct LinkedIn */}
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
