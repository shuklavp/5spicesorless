import React from 'react';
import { ArrowUpRight, Award, Compass, Feather, Flame, MapPin, Sparkles } from 'lucide-react';

export default function Profile({ onOpenInquiry }) {
  return (
    <section id="profile" className="py-28 px-6 md:px-12 bg-paper-50 dark:bg-forest-950 relative border-t border-paper-200 dark:border-forest-850 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Kicker */}
        <div className="flex items-center gap-3 mb-6">
          <Feather className="w-4 h-4 text-terracotta-600" />
          <span className="text-xs font-mono tracking-widestEditorial uppercase text-forest-800 dark:text-paper-300 font-bold">
            FOUNDER, WRITER & ADVISORY NOTE
          </span>
          <div className="h-px bg-paper-200 dark:bg-forest-850 flex-1 ml-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Sketch / Portrait Frame */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden bg-paper-100 dark:bg-forest-900 border-2 border-paper-200 dark:border-forest-800 shadow-2xl p-4 group">
              {/* Image / Sketch Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-paper-50 dark:bg-forest-950 flex items-center justify-center border border-paper-200 dark:border-forest-800">
                {/* Fallback artistic illustration if user hasn't uploaded profile-sketch.png yet */}
                <div className="text-center p-8 space-y-4">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-terracotta-100 dark:bg-forest-900 border border-terracotta-300 dark:border-forest-700 flex items-center justify-center text-terracotta-600 dark:text-terracotta-400 shadow-sm">
                    <Flame className="w-10 h-10 animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-serif text-xl text-forest-950 dark:text-paper-50 font-bold">
                      Vivek Shukla
                    </div>
                    <div className="text-xs font-mono text-terracotta-600 dark:text-terracotta-400 font-semibold">
                      Founder · Writer · Advisory Partner
                    </div>
                    <p className="text-xs text-ink-600 dark:text-paper-400 font-light max-w-xs mx-auto pt-2">
                      Place your sketch or portrait file at <code className="text-terracotta-700 dark:text-terracotta-300 font-mono text-[11px] bg-paper-200 dark:bg-forest-900 px-1.5 py-0.5 rounded">/public/profile-sketch.png</code>
                    </p>
                  </div>
                </div>

                {/* Actual image when file is present */}
                <img
                  src="/profile-sketch.png"
                  alt="Vivek Shukla — Sketch Portrait"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Caption pill */}
              <div className="mt-3.5 flex items-center justify-between text-xs font-mono text-ink-600 dark:text-paper-400 px-2">
                <span className="flex items-center gap-1.5 font-semibold text-forest-900 dark:text-paper-200">
                  <MapPin className="w-3.5 h-3.5 text-terracotta-600" />
                  <span>Lucknow, India</span>
                </span>
                <span className="text-terracotta-600 dark:text-terracotta-400 font-medium">Self-Taught Cook & Strategist</span>
              </div>
            </div>

            {/* Quick Credentials / Focus */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-paper-100 dark:bg-forest-900/60 border border-paper-200 dark:border-forest-800">
                <span className="text-[11px] font-mono text-terracotta-600 dark:text-terracotta-400 uppercase tracking-wider font-bold block mb-1">
                  Writing Focus
                </span>
                <div className="font-serif text-lg font-bold text-forest-950 dark:text-paper-100">
                  Subtractive Systems
                </div>
                <div className="text-xs text-ink-600 dark:text-paper-400 mt-1">
                  Life, leadership & craft
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-paper-100 dark:bg-forest-900/60 border border-paper-200 dark:border-forest-800">
                <span className="text-[11px] font-mono text-forest-800 dark:text-forest-400 uppercase tracking-wider font-bold block mb-1">
                  Advisory Style
                </span>
                <div className="font-serif text-lg font-bold text-forest-950 dark:text-paper-100">
                  Zero Rate-Card Bloat
                </div>
                <div className="text-xs text-ink-600 dark:text-paper-400 mt-1">
                  Direct 1:1 founder counsel
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The Story & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl font-black text-forest-950 dark:text-paper-50 leading-[1.08]">
                "I started 5 Spices or Less because the modern world is obsessed with addition."
              </h2>
              <p className="mt-6 text-base sm:text-lg text-ink-800 dark:text-paper-200 font-normal leading-relaxed">
                Every software product adds more buttons. Every company adds more sync meetings. Every recipe blog adds forty ingredients and fifteen paragraphs of SEO fluff before giving you the steps to cook a meal.
              </p>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-ink-700 dark:text-paper-300 font-light leading-relaxed">
              <p>
                My background sits at the intersection of startup technology, business leadership, and home cooking. Over the years, I realized that the hardest and most valuable skill in any domain is <strong>deliberate subtraction</strong>.
              </p>
              <p>
                In an authentic Indian home kitchen, the dishes people remember for decades aren't made with twenty powdered jars. They are made with five spices or less: <em className="text-forest-900 dark:text-terracotta-300 font-medium">cumin, turmeric, coriander, chili, and a finishing note of garam masala or amchur</em>. The food tastes incredible not because of excess, but because each ingredient has room to express its true character.
              </p>
              <p>
                I apply this exact discipline to life and business advisory. When I consult with founders or write an essay, my goal is never to give you fifty new tasks. My goal is to help you ruthlessly prune down to the two or three vital levers that will actually change your trajectory.
              </p>
            </div>

            {/* Three Things I Believe */}
            <div className="p-7 rounded-3xl bg-paper-100 dark:bg-forest-900/60 border border-paper-200 dark:border-forest-800 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-terracotta-600" />
                <span className="text-xs font-mono uppercase tracking-widest text-terracotta-600 dark:text-terracotta-400 font-bold">
                  Three Non-Negotiable Tenets
                </span>
              </div>
              <ul className="space-y-3.5 text-xs sm:text-sm text-ink-800 dark:text-paper-200 font-normal">
                <li className="flex items-start gap-3">
                  <span className="text-forest-800 dark:text-terracotta-400 font-mono font-bold">01.</span>
                  <span><strong>Clear writing reflects clear thinking.</strong> If you cannot explain your business model or life priority in a one-page memo, you do not understand it yet.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-forest-800 dark:text-terracotta-400 font-mono font-bold">02.</span>
                  <span><strong>Subtraction creates asymmetric leverage.</strong> Doing 3 things with uncompromising precision beats juggling 15 mediocrities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-forest-800 dark:text-terracotta-400 font-mono font-bold">03.</span>
                  <span><strong>Patience is kinetic.</strong> Fast results built on scorched foundations crumble. Sustained simmer builds enduring value.</span>
                </li>
              </ul>
            </div>

            {/* Direct Connect CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenInquiry}
                className="px-7 py-3.5 rounded-full bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-terracotta-600/20 flex items-center gap-2"
              >
                <span>Start an Advisory Dialogue</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="#writing"
                className="px-7 py-3.5 rounded-full border border-paper-300 dark:border-forest-800 text-forest-900 dark:text-paper-100 hover:bg-paper-100 dark:hover:bg-forest-900 text-xs font-semibold transition-colors"
              >
                Read My Published Notes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
