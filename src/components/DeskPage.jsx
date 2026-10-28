import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, Clock, ArrowUpRight } from 'lucide-react';
import { essays } from '../data/essays';
import Footer from './Footer.jsx';

const DESK_CONFIG = {
  food: {
    kicker: 'THE FOOD DESK',
    title: 'The Table &\nThe Gathering',
    headingColor: 'text-[#8C3E14] dark:text-amber-400',
    lead: 'Food is the quiet centre of gravity in our lives. It is never just about what is on the stove; it is the conversation that begins at breakfast, wanders through lunch, and lingers long past dinner.',
    narrative: 'You will find no culinary dogma or polished food styling here. Cooking is not a competition. It is a handful of honest ingredients, steady heat, and the patience to let things simmer. We talk about the rhythm of eating, roadside eateries, childhood memories, and how sitting down together turns strangers into friends. Your version of a dish will look different from mine, and it is better that way.',
    sketchImage: '/food-sketch-blue.png',
    themes: [
      { label: 'THE DAILY RELAY', note: 'How the day revolves around breakfast, lunch, tea, and dinner.' },
      { label: 'INGREDIENTS & FIRE', note: 'Focusing on the raw elements and the cooking journey rather than the final plate.' },
      { label: 'FOOD & MEMORY', note: 'Eateries, roadside stalls, and the people we shared them with.' }
    ],
    footerKicker: 'ON CULINARY RESTRAINT',
    footerQuote: '"In Lucknow cooking, the nose delivers judgement before the spoon ever reaches the tongue. Good food does not need thirty spices, it needs honest aroma, deliberate heat, and respect for the pot."',
    footerSubtext: 'Five spices or fewer: clearing executive fatigue, cooking for pure joy, and the lost art of patient simmering.',
    footerImage: '/footer/footer-kadai-spices.png',
    footerBg: 'bg-[#1C120C] border-[#382318]'
  },
  life: {
    kicker: 'THE LIFE DESK',
    title: 'Quiet Perspective\n& Common Sense',
    headingColor: 'text-[#1B4332] dark:text-emerald-400',
    lead: 'Most of what matters in life arrives without an announcement. Perspective is gathered in quiet corners, through honest mistakes, and in the patience of ordinary days.',
    narrative: 'We spend our early years rushing toward arbitrary milestones, convinced that clarity lies just beyond the next turn. But genuine understanding accumulates slowly: across an old library table, during a quiet walk, or in the generosity of people who never asked for credit. This desk is an archive of simple observations on human bonds, fatherhood, the courage to accept help, and learning to leave enough room on your calendar for life to actually happen.',
    sketchImage: '/life-sketch-blue.png',
    themes: [
      { label: 'UNSPOKEN LESSONS', note: 'Everyday observations on patience, character, and self-restraint.' },
      { label: 'FAMILY & ROOTS', note: 'Stories of parents, teachers, and the friends who shaped our trajectory.' },
      { label: 'LIVING WITH SPACE', note: 'The quiet discipline of stripping away unnecessary social and mental noise.' }
    ],
    footerKicker: 'ON PATIENCE & HUMAN BONDS',
    footerQuote: '"Life does not ask you to be extraordinary every morning. It asks you to be kind, to keep your dignity intact, and to learn how to stand up without blaming the road."',
    footerSubtext: 'Reflections on fatherhood, long devotion, second chances, and the quiet patience required to uncomplicate everyday human living.',
    footerImage: '/footer/footer-cairn-stones.png',
    footerBg: 'bg-[#091A12] border-[#183827]'
  },
  work: {
    kicker: 'THE WORK DESK',
    title: 'The Ground &\nThe Craft',
    headingColor: 'text-[#0E1E38] dark:text-sky-400',
    lead: 'Execution does not require complicated machinery. Real enterprise is built on customer ground truth, fiscal dignity, and direct human trust.',
    narrative: 'Somewhere between fifteen and sixty people, most growing ventures begin to confuse activity with progress. Calendars fill with alignment meetings, contracts swell with defensive clauses, and teams spend more time discussing process than serving customers. This desk is dedicated to operational simplicity: notes on commercial momentum, hiring for grit, founder dilemmas, and knowing when to throw out the thirty-page contract and ship against a simple purchase order.',
    sketchImage: '/work-sketch-blue.png',
    themes: [
      { label: 'COMMERCIAL REALITY', note: 'Customer discovery, unit margins, and clean contracts over slide decks.' },
      { label: 'COORDINATION FRICTION', note: 'Removing the meeting culture and administrative theatre that slows teams down.' },
      { label: 'THE FOUNDER SEAT', note: 'Discreet perspective for navigating boardrooms, co-founders, and hard trade-offs.' }
    ],
    footerKicker: 'ON ENTERPRISE & CHARACTER',
    footerQuote: '"A business plan with twenty priorities has none. True governance is not a 50-page presentation, it is keeping faith with those who trusted you with their people and capital."',
    footerSubtext: 'Thirty years of enterprise craft: category creation, clean exits, hiring for character, and stripping away bureaucratic clutter.',
    footerImage: '/footer/footer-drafting-tools.png',
    footerBg: 'bg-[#0A1224] border-[#182644]'
  },
  stories: {
    kicker: 'THE COMPLETE ARCHIVE',
    title: 'Stories &\nReflections',
    headingColor: 'text-[#1A1A1A] dark:text-white',
    lead: 'The complete collection of essays and field notes across Food, Life, and Work.',
    narrative: 'Explore every published piece in full, filtered by topic or keyword search.',
    sketchImage: '/fiction-scooter-bridge.jpg',
    themes: [
      { label: 'FOOD', note: 'Kitchen rituals and culinary memories.' },
      { label: 'LIFE', note: 'Observations on patience and perspective.' },
      { label: 'WORK', note: 'Venture building and operational clarity.' }
    ],
    footerKicker: 'ON THE STORIES & LETTERS ARCHIVE',
    footerQuote: '"We write not to impress strangers, but to document hard-won lessons while we still have memory. The truest words are always those written after the applause has died down."',
    footerSubtext: 'Field notes from thirty years of enterprise, survival, culinary physics, and roadside observations.',
    footerImage: '/footer/footer-typewriter.png',
    footerBg: 'bg-[#140F22] border-[#2E1D4A]'
  }
};

export default function DeskPage({ category = 'stories', onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const normalizedCategory = (category || 'stories').toLowerCase();
  const config = DESK_CONFIG[normalizedCategory] || DESK_CONFIG.stories;

  const filteredEssays = useMemo(() => {
    return (essays || []).filter((story) => {
      const storyCat = (story.category || story.desk || '').toLowerCase();
      const matchesCategory = normalizedCategory === 'stories' || storyCat === normalizedCategory;

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        (story.title && story.title.toLowerCase().includes(query)) ||
        (story.subtitle && story.subtitle.toLowerCase().includes(query)) ||
        (story.summary && story.summary.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [normalizedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#080D18] text-[#0C1427] dark:text-white transition-colors duration-300 pt-28 pb-16 px-6 md:px-12 flex flex-col justify-between">
      <div className="max-w-6xl mx-auto space-y-12 w-full">
        
        {/* Navigation Breadcrumb */}
        <div>
          <a
            href="/"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 hover:text-[#DE2573] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO THE FRONT PAGE</span>
          </a>
        </div>

        {/* HERO SECTION: Full-Bleed Environmental Sketch + Exact Text Alignment */}
        <section className="relative overflow-visible border-b border-slate-200/80 dark:border-slate-800 pb-16 pt-4">
          
          {/* Architectural Drawing: Truly Transparent with Soft Feather Fade */}
          <div 
            className="absolute top-0 right-0 bottom-8 w-[48%] lg:w-[50%] pointer-events-none hidden lg:flex items-center justify-end select-none overflow-hidden pr-2"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, black 40%, black 100%)',
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 15%, black 40%, black 100%)'
            }}
          >
            <img 
              src={config.sketchImage} 
              alt={config.title}
              className="w-full h-auto max-h-[450px] object-contain object-right opacity-90 transition-opacity duration-300"
            />
          </div>

          {/* Left Text Column: Strictly within 48-52% */}
          <div className="relative z-10 w-full lg:w-[50%] space-y-7">
            <span className="text-xs font-mono uppercase tracking-widest text-[#DE2573] font-bold block">
              {config.kicker}
            </span>

            <h1 className={`font-serif text-5xl sm:text-6xl font-bold tracking-tight whitespace-pre-line leading-[1.05] ${config.headingColor}`}>
              {config.title}
            </h1>

            <p className="font-serif text-2xl text-[#1E293B] dark:text-slate-100 font-normal leading-snug">
              {config.lead}
            </p>

            <p className="font-serif text-base sm:text-lg text-slate-700 dark:text-slate-300 font-light leading-relaxed">
              {config.narrative}
            </p>
          </div>

          {/* The 3 Theme Cards: Placard layout anchored across the bottom */}
          <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-5 pt-12">
            {config.themes.map((theme, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white/95 dark:bg-[#0F1829]/95 backdrop-blur-sm border border-slate-200/90 dark:border-slate-800 space-y-2.5 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.08)]"
              >
                <span className="text-xs font-mono uppercase tracking-wider text-[#0C1427] dark:text-white font-bold block">
                  {theme.label}
                </span>
                <p className="font-serif text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                  {theme.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stories Listing Section */}
        <section className="space-y-8 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#0C1427] dark:text-white">
                Essays &amp; Stories
              </h2>
              <p className="text-xs font-mono text-slate-500 mt-0.5">
                Showing {filteredEssays.length} {filteredEssays.length === 1 ? 'story' : 'stories'}
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search essays by keyword..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#0F1829] border border-slate-200 dark:border-slate-800 text-xs text-[#0C1427] dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#DE2573]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEssays.map((story) => (
              <a
                key={story.slug || story.id}
                href={`/stories/${story.slug || story.id}/`}
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate(`/stories/${story.slug || story.id}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="p-7 rounded-2xl bg-white dark:bg-[#0F1829] border border-slate-200 dark:border-slate-800 hover:border-[#DE2573]/60 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-[11px] bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300">
                      {story.category || story.desk}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-400 text-[11px]">
                      <Clock className="w-3 h-3" />
                      {story.readTime || '5 min read'}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#0C1427] dark:text-white group-hover:text-[#DE2573] transition-colors leading-snug">
                    {story.title}
                  </h3>

                  <p className="font-serif text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed font-light">
                    {story.subtitle || story.summary || story.leadQuote}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">{story.date || 'October 2026'}</span>
                  <span className="inline-flex items-center gap-1 font-bold text-[#0C1427] dark:text-white group-hover:text-[#DE2573] uppercase tracking-wider">
                    Read Story
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Section Footer Banner */}
        <section className={`relative rounded-3xl p-8 sm:p-14 border ${config.footerBg} text-white shadow-xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 mt-16`}>
          <div className="relative z-10 max-w-xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest font-bold text-[#DE2573] block">
              {config.footerKicker}
            </span>
            <blockquote className="font-serif not-italic text-2xl sm:text-3xl font-bold text-white leading-snug">
              {config.footerQuote}
            </blockquote>
            <p className="font-serif text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {config.footerSubtext}
            </p>
          </div>
          <div className="w-56 sm:w-72 shrink-0 flex items-center justify-center select-none pointer-events-none">
            <img 
              src={config.footerImage} 
              alt={config.footerKicker} 
              className="w-full h-auto object-contain filter contrast-125 brightness-110" 
            />
          </div>
        </section>

      </div>

      <div className="mt-20 w-full border-t border-slate-200 dark:border-slate-800">
        <Footer />
      </div>
    </div>
  );
}
