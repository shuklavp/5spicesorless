// src/components/Footer.jsx
import React, { useState } from 'react';
import { ArrowUpRight, Check, Flame, Linkedin } from 'lucide-react';

const MANIFESTO_THEMES = {
  '/': {
    kicker: 'The Five Spices Manifesto',
    quote: 'True mastery is simplification. The amateur adds ingredients to mask poor technique. The master uses only what is essential, and executes with quiet confidence.',
    subtext: 'Whether seasoning a humble pot of lentils, refining a company strategy, or structuring your days: fewer levers, deeper focus, enduring outcomes.',
    cardClass: 'bg-gradient-to-br from-[#0B0F19] via-[#161224] to-[#1E0E1B] border-[#2D1B2D]',
    glowClass: 'bg-berry-600/15',
    accentText: 'text-berry-400',
    dotBg: 'bg-berry-400',
    image: '/footer-spice-box.png',
    alt: 'Traditional Brass Masala Dabba with Whole Spices',
  },
  '/about': {
    kicker: 'On Survival & Sincerity',
    quote: 'When you are told you may never speak or write again, all the trivial anxieties of ambition evaporate. Surviving well is not about proving anything, it is about paying attention to what remains.',
    subtext: 'From assembling computers in a Lucknow bedroom to surviving a ten-hour craniotomy: life is measured by the clarity of your days, not the volume of your calendar.',
    cardClass: 'bg-gradient-to-br from-[#0A101D] via-[#111927] to-[#181528] border-[#1E293B]',
    glowClass: 'bg-cobalt-600/15',
    accentText: 'text-blue-400',
    dotBg: 'bg-blue-400',
    image: '/footer-journal-chai.png',
    alt: 'Vintage Fountain Pen and Steaming Lakhnawi Cutting Chai',
  },
  '/advisory': {
    kicker: 'On Operational Perspective',
    quote: 'In boardroom storms and founder bottlenecks, the greatest asset is not a clever slide deck. It is an experienced, calm voice that refuses to panic.',
    subtext: 'A Ben to your Jules: confidential executive sparring, zero corporate theatre, and the quiet courage to make bold moves with steady backing.',
    cardClass: 'bg-gradient-to-br from-[#1A0B0E] via-[#241014] to-[#2E1218] border-[#3D1A20]',
    glowClass: 'bg-[#BC5259]/25',
    accentText: 'text-[#FCA5A5]',
    dotBg: 'bg-[#FCA5A5]',
    image: '/footer-chess-compass.png',
    alt: 'Chess King and Knight with Brass Navigational Compass',
  },
  '/consulting': {
    kicker: 'On Operational Perspective',
    quote: 'In boardroom storms and founder bottlenecks, the greatest asset is not a clever slide deck. It is an experienced, calm voice that refuses to panic.',
    subtext: 'A Ben to your Jules: confidential executive sparring, zero corporate theatre, and the quiet courage to make bold moves with steady backing.',
    cardClass: 'bg-gradient-to-br from-[#1A0B0E] via-[#241014] to-[#2E1218] border-[#3D1A20]',
    glowClass: 'bg-[#BC5259]/25',
    accentText: 'text-[#FCA5A5]',
    dotBg: 'bg-[#FCA5A5]',
    image: '/footer-chess-compass.png',
    alt: 'Chess King and Knight with Brass Navigational Compass',
  },
  '/life': {
    kicker: 'On Patience & Human Bonds',
    quote: 'Life does not ask you to be extraordinary every morning. It asks you to be kind, to keep your dignity intact, and to learn how to stand up without blaming the road.',
    subtext: 'Reflections on fatherhood, long devotion, second chances, and the quiet patience required to uncomplicate everyday human living.',
    cardClass: 'bg-gradient-to-br from-[#0A1412] via-[#0E1D19] to-[#132620] border-[#18362E]',
    glowClass: 'bg-emerald-600/15',
    accentText: 'text-emerald-400',
    dotBg: 'bg-emerald-400',
    image: '/footer-cairn-stones.png',
    alt: 'Balanced River Stones Cairn with Water Ripple',
  },
  '/food': {
    kicker: 'On Culinary Restraint',
    quote: 'In Lucknow cooking, the nose delivers judgment before the spoon ever reaches the tongue. Great food does not need thirty spices, it needs honest aroma, deliberate heat, and respect for the pot.',
    subtext: 'Five spices or fewer: clearing executive fatigue, cooking for pure joy, and the lost art of patient simmering.',
    cardClass: 'bg-gradient-to-br from-[#140D05] via-[#1E1308] to-[#2A180A] border-[#3B2412]',
    glowClass: 'bg-amber-600/15',
    accentText: 'text-amber-400',
    dotBg: 'bg-amber-400',
    image: '/footer-kadai-spices.png',
    alt: 'Cast Iron Kadai with Wooden Spoon and Whole Spices',
  },
  '/work': {
    kicker: 'On Enterprise & Character',
    quote: 'A business plan with twenty priorities has none. True governance is not a 50-page presentation, it is keeping faith with those who trusted you with their people and capital.',
    subtext: 'Thirty years of enterprise craft: category creation, clean exits, hiring for character, and stripping away bureaucratic clutter.',
    cardClass: 'bg-gradient-to-br from-[#080C14] via-[#0D1524] to-[#121E33] border-[#1E293B]',
    glowClass: 'bg-blue-600/15',
    accentText: 'text-sky-400',
    dotBg: 'bg-sky-400',
    image: '/footer-drafting-tools.png',
    alt: 'Precision Drafting Compass, Ruler and Calipers over Blueprints',
  },
  '/stories': {
    kicker: 'On The Dispatch Archive',
    quote: 'We write not to impress strangers, but to document hard-won lessons while we still have memory. The truest words are always those written after the applause has died down.',
    subtext: 'Field notes from thirty years of enterprise, survival, culinary physics, and roadside observations.',
    cardClass: 'bg-gradient-to-br from-[#0E0C17] via-[#171226] to-[#1E1430] border-[#2E1F47]',
    glowClass: 'bg-purple-600/15',
    accentText: 'text-purple-400',
    dotBg: 'bg-purple-400',
    image: '/footer-typewriter.png',
    alt: 'Vintage Manual Mechanical Typewriter with Paper',
  },
};

const STORY_THEMES = {
  'waking-up-declared-dead': {
    kicker: 'On Recovery & Ground Truth',
    quote: 'When you have looked death in the eyes and clawed your way back word by word, corporate politics and vanity metrics cease to have power over you.',
    subtext: 'Relearning speech, motor precision, and mental acuity through daily simplification: one syllable at a time.',
    cardClass: 'bg-gradient-to-br from-[#0A101D] via-[#111927] to-[#181528] border-[#1E293B]',
    glowClass: 'bg-blue-600/15',
    accentText: 'text-blue-400',
    dotBg: 'bg-blue-400',
    image: '/footer-journal-chai.png',
    alt: 'Vintage Fountain Pen and Steaming Lakhnawi Cutting Chai',
  },
  'category-creation-water-exit': {
    kicker: 'On Fiduciary Integrity',
    quote: 'True success in entrepreneurship is not a paper valuation, it is taking bold risks, backing your people, and keeping faith with those who trusted you with their capital.',
    subtext: 'Creating an industry category in India across four regional offices, and choosing shareholder duty over founder vanity.',
    cardClass: 'bg-gradient-to-br from-[#080C14] via-[#0D1524] to-[#121E33] border-[#1E293B]',
    glowClass: 'bg-blue-600/15',
    accentText: 'text-sky-400',
    dotBg: 'bg-sky-400',
    image: '/footer-drafting-tools.png',
    alt: 'Precision Drafting Compass, Ruler and Calipers over Blueprints',
  },
  'the-deal-that-failed-max-kelly': {
    kicker: 'On Quiet Encouragement',
    quote: 'A mentor is not someone who gives you clever answers. A mentor is someone who sits quietly beside you while you figure out how to stand up again.',
    subtext: 'Why real mentors provide psychological air cover, refuse commercial fees, and teach by refusing to panic.',
    cardClass: 'bg-gradient-to-br from-[#1A0B0E] via-[#241014] to-[#2E1218] border-[#3D1A20]',
    glowClass: 'bg-[#BC5259]/25',
    accentText: 'text-[#FCA5A5]',
    dotBg: 'bg-[#FCA5A5]',
    image: '/footer-chess-compass.png',
    alt: 'Chess King and Knight with Brass Navigational Compass',
  },
  'food-and-the-five-spices': {
    kicker: 'On Aroma & Discipline',
    quote: 'The amateur throws thirty ingredients into the pan hoping complexity looks like mastery. The master uses five spices and lets heat do the work.',
    subtext: 'The physics of Awadhi cooking: aroma precedes taste, and executive restraint precedes enduring trust.',
    cardClass: 'bg-gradient-to-br from-[#140D05] via-[#1E1308] to-[#2A180A] border-[#3B2412]',
    glowClass: 'bg-amber-600/15',
    accentText: 'text-amber-400',
    dotBg: 'bg-amber-400',
    image: '/footer-kadai-spices.png',
    alt: 'Cast Iron Kadai with Wooden Spoon and Whole Spices',
  },
  'the-blue-skoda-story': {
    kicker: 'On Roadside Wisdom',
    quote: 'A breakdown on a deserted highway is not an interruption to your journey. Very often, it is the only part of the journey that matters.',
    subtext: 'A midnight breakdown on the Grand Trunk Road, and sixty rupees for a lifetime of perspective.',
    cardClass: 'bg-gradient-to-br from-[#0E0C17] via-[#171226] to-[#1E1430] border-[#2E1F47]',
    glowClass: 'bg-purple-600/15',
    accentText: 'text-purple-400',
    dotBg: 'bg-purple-400',
    image: '/footer-typewriter.png',
    alt: 'Vintage Manual Mechanical Typewriter with Paper',
  },
  'hiring-without-hype': {
    kicker: 'On Hiring Discipline',
    quote: 'In the early days of a venture, you do not hire resumes. You hire character, curiosity, and people who do not mind carrying their own luggage.',
    subtext: 'What building a 160-person team across four regional offices taught me about character over pedigree resumes.',
    cardClass: 'bg-gradient-to-br from-[#080C14] via-[#0D1524] to-[#121E33] border-[#1E293B]',
    glowClass: 'bg-blue-600/15',
    accentText: 'text-sky-400',
    dotBg: 'bg-sky-400',
    image: '/footer-drafting-tools.png',
    alt: 'Precision Drafting Compass, Ruler and Calipers over Blueprints',
  },
};

export default function Footer({ onNavigate, currentPath = '/' }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const getTheme = () => {
    if (currentPath && currentPath.startsWith('/stories/')) {
      const slug = currentPath.replace('/stories/', '');
      if (STORY_THEMES[slug]) return STORY_THEMES[slug];
    }
    return MANIFESTO_THEMES[currentPath] || MANIFESTO_THEMES['/'];
  };

  const theme = getTheme();

  return (
    <footer id="manifesto" className="bg-canvas-subtle dark:bg-canvas-dark text-ink-800 dark:text-ink-100 border-t border-canvas-border dark:border-canvas-darkBorder pt-20 pb-16 px-6 md:px-12 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* The Dynamic Manifesto Card */}
        <div className={`p-8 sm:p-14 rounded-3xl ${theme.cardClass} text-white border mb-20 relative shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-500`}>
          <div className={`absolute top-0 right-0 w-80 h-80 ${theme.glowClass} rounded-full blur-[100px] pointer-events-none transition-colors duration-500`} />
          
          <div className="max-w-2xl relative z-10 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-2 h-2 rounded-full ${theme.dotBg} animate-pulse`} />
              <span className={`text-xs font-mono uppercase tracking-widest ${theme.accentText} font-bold`}>
                {theme.kicker}
              </span>
            </div>

            <blockquote className="font-serif text-2xl sm:text-4xl text-white font-bold leading-snug">
              "{theme.quote}"
            </blockquote>
            
            <p className="mt-4 text-sm text-slate-300 font-light max-w-xl leading-relaxed">
              {theme.subtext}
            </p>
          </div>

          {/* White Pencil Sketch Thematic Asset on the Right */}
          <div className="w-56 sm:w-72 md:w-80 shrink-0 relative z-10 select-none pointer-events-none drop-shadow-2xl">
            <img
              src={theme.image}
              alt={theme.alt}
              onError={(e) => {
                e.currentTarget.src = '/mortar-pestle-dark.png';
              }}
              className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Newsletter & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 border-b border-canvas-border dark:border-canvas-darkBorder">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/logo.png"
                alt="5 Spices or Less"
                className="h-12 md:h-14 w-auto object-contain dark:hidden"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('footer-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <img
                src="/logo_dark.png"
                alt="5 Spices or Less"
                className="h-12 md:h-14 w-auto object-contain hidden dark:block"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('footer-fallback');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div id="footer-fallback" className="hidden items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-ink-900 dark:bg-berry-600 flex items-center justify-center text-white">
                  <Flame className="w-5 h-5 text-berry-400 dark:text-white" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-ink-900 dark:text-white">
                  5 Spices or Less
                </h4>
              </div>
            </div>
            
            <p className="text-sm text-ink-600 dark:text-ink-200 font-light leading-relaxed max-w-md mb-6">
              A brief, rich weekly email sent every Sunday morning. One tactical business framework, one life lesson, one minimalist recipe, or simply a timely common-sense reminder.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 text-xs font-mono text-berry-700 dark:text-berry-300 bg-berry-50 dark:bg-canvas-darkCard px-4 py-2.5 rounded-full border border-berry-200 dark:border-canvas-darkBorder font-semibold">
                <Check className="w-4 h-4 text-berry-600" />
                <span>You are subscribed to The Sunday Reduction. Welcome.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2.5 rounded-full bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-berry-600 hover:bg-berry-700 text-white text-xs font-bold transition-colors shadow-md"
                >
                  Join Memo
                </button>
              </form>
            )}
          </div>

          <div className="grid grid-cols-2 gap-8 md:pl-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-ink-900 dark:text-white font-bold block mb-4">
                Navigation
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-600 dark:text-ink-200 font-medium">
                <li>
                  <a href="#hero" className="hover:text-berry-600 transition-colors">
                    Back to Top
                  </a>
                </li>
                <li>
                  <a href="/life" onClick={(e) => handleLinkClick(e, '/life')} className="hover:text-berry-600 transition-colors">
                    Life
                  </a>
                </li>
                <li>
                  <a href="/food" onClick={(e) => handleLinkClick(e, '/food')} className="hover:text-berry-600 transition-colors">
                    Food
                  </a>
                </li>
                <li>
                  <a href="/work" onClick={(e) => handleLinkClick(e, '/work')} className="hover:text-berry-600 transition-colors">
                    Work
                  </a>
                </li>
                <li>
                  <a href="/stories" onClick={(e) => handleLinkClick(e, '/stories')} className="hover:text-berry-600 transition-colors">
                    Stories &amp; Essays
                  </a>
                </li>
                <li>
                  <a href="/#letterbox" onClick={(e) => handleLinkClick(e, '/#letterbox')} className="hover:text-berry-600 transition-colors">
                    The Letterbox
                  </a>
                </li>
                <li>
                  <a href="/advisory" onClick={(e) => handleLinkClick(e, '/advisory')} className="hover:text-berry-600 transition-colors">
                    Advisory ("Ben to Jules")
                  </a>
                </li>
                <li>
                  <a href="/about" onClick={(e) => handleLinkClick(e, '/about')} className="hover:text-berry-600 transition-colors">
                    About Vivek
                  </a>
                </li>
                <li>
                  <a href="/studio" onClick={(e) => handleLinkClick(e, '/studio')} className="text-berry-600 dark:text-berry-400 font-mono text-xs hover:underline inline-flex items-center gap-1.5">
                    <span>Dispatch Studio</span>
                    <span className="text-[10px] bg-berry-50 dark:bg-canvas-dark px-1.5 py-0.2 rounded border border-berry-200 dark:border-canvas-darkBorder font-bold">Author</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-ink-900 dark:text-white font-bold block mb-4">
                Connect
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink-600 dark:text-ink-200 font-medium">
                <li>
                  <a
                    href="https://www.linkedin.com/in/vivekshukla/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:text-cobalt-600 transition-colors font-semibold text-ink-900 dark:text-white"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-cobalt-600" />
                    <span>LinkedIn / Vivek Shukla</span>
                    <ArrowUpRight className="w-3 h-3 text-ink-400" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/5spicesorless"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:text-berry-600 transition-colors font-semibold text-ink-900 dark:text-white"
                  >
                    <svg className="w-3.5 h-3.5 fill-current text-berry-600" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>@5spicesorless on X</span>
                    <ArrowUpRight className="w-3 h-3 text-ink-400" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/vivekshukla"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 hover:text-ink-900 dark:hover:text-white transition-colors font-semibold text-ink-900 dark:text-white"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>@vivekshukla on X</span>
                    <ArrowUpRight className="w-3 h-3 text-ink-400" />
                  </a>
                </li>
                <li>
                  <a href="https://5spicesorless.com" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-berry-600 transition-colors">
                    <span>5spicesorless.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ink-400" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Colophon & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-ink-500 dark:text-ink-400 gap-4 font-medium">
          <p>© {new Date().getFullYear()} 5 Spices or Less, Vivek Shukla. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Lucknow roots · Crafted with Vite, React, and Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
