// src/components/AdvisoryPage.jsx
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Compass, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { FORMS_CONFIG } from '../config/forms';

const ADVISORY_MODES = [
  {
    title: 'The Hands-On Operator',
    focus: 'Operational De-cluttering & GTM Discipline',
    cadence: 'Embedded Operator',
    number: '01',
    accentBorder: 'border-t-sage-600',
    tagClass: 'bg-sage-100 text-sage-800 dark:bg-sage-900/60 dark:text-sage-100 border-sage-200 dark:border-sage-800',
    checkColor: 'text-sage-600 dark:text-sage-400',
    btnClass: 'bg-sage-600 hover:bg-sage-700 text-white',
    description:
      'Drawing on thirty years of enterprise experience and managing operations with 160+ people across 4 regional offices, I work alongside founders to cut through operational friction. We remove bureaucratic clutter, install single-page decision memos over slides, and focus your team entirely on what moves the business forward.',
    deliverables: [
      'Diagnostic review of team bandwidth, roadmaps, and recurring syncs',
      'Installation of single-page decision memos over 50-slide decks',
      'Go-to-market alignment with disciplined, sustainable unit economics',
      'Hands-on guidance through high-friction scaling inflection points',
    ],
  },
  {
    id: 'eir',
    title: 'Entrepreneur in Residence (EIR)',
    focus: 'Category Creation & Early Validation',
    cadence: 'Venture Studio or Fund Partnership',
    number: '02',
    accentBorder: 'border-t-[#7C3AED]',
    tagClass: 'bg-lavender-100 text-lavender-800 dark:bg-lavender-900/60 dark:text-lavender-100 border-lavender-200 dark:border-lavender-800',
    checkColor: 'text-[#7C3AED] dark:text-[#A78BFA]',
    btnClass: 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white',
    description:
      'Having pioneered an entire industry category in India (institutional backing from Macquarie, residential water sub-metering), I partner with venture studios, incubators, or family offices to evaluate market opportunities and pressure-test product viability.',
    deliverables: [
      'Category creation stress-testing and customer problem validation',
      'Early operational design and capital-efficient execution roadmaps',
      'Mentoring founding teams to take bold, calculated bets',
      'Governance and trust-anchored oversight from day zero',
    ],
  },
  {
    title: 'A Ben to Your Jules',
    focus: 'Trusted Confidant for High-Agency Founders',
    cadence: '1:1 Founder Mentoring',
    number: '03',
    accentBorder: 'border-t-[#BC5259]',
    tagClass: 'bg-[#BC5259]/10 text-[#BC5259] dark:bg-berry-950/60 dark:text-berry-300 border-[#BC5259]/20 dark:border-berry-800',
    checkColor: 'text-[#BC5259] dark:text-berry-400',
    btnClass: 'bg-[#BC5259] hover:bg-[#A3434A] text-white',
    description:
      'Like Robert De Niro in "The Intern", an ego-free, calm, deeply experienced veteran in your corner. Someone who has raised institutional venture capital, survived being declared dead, weathered boardroom storms, and exited with honour, providing psychological safety and unvarnished judgement.',
    deliverables: [
      'Fortnightly private strategy reviews (async and voice line)',
      'Unbiased sounding board on co-founder tensions, hiring, and board dynamics',
      'Crisis perspective: helping you distinguish fatal risks from temporary noise',
      'Strictly capped at two to three concurrent founder relationships',
    ],
  },
];

const TRIGGER_SCENARIOS = [
  {
    number: '01',
    tag: 'OPERATIONAL FRICTION',
    title: 'The 15 to 60 Person Wall',
    hook: 'What worked at seed stage has begun to creak.',
    situation:
      'You have gone from five people in a single room to multiple teams and regional hubs. Communication has frayed, calendar invites have multiplied, and you spend your entire week mediating updates rather than moving the business forward.',
    intervention:
      'We strip back the layers: eliminating phantom syncs, replacing 50-slide decks with crisp one-page memos, and realigning the leadership team around the two or three initiatives that genuinely move the needle.',
    formValue: 'The 15 to 60 Person Wall (Scaling Friction)',
  },
  {
    number: '02',
    tag: 'UNSPOKEN TENSIONS',
    title: 'Co-founder & Executive Friction',
    hook: 'High-stakes conversations you cannot have in open company.',
    situation:
      'A co-founder is drifting out of sync, an early hire has hit their ceiling as the company scales, or the leadership table is quietly divided on direction. You carry the entire weight of this alone because bringing it up prematurely could rattle the company.',
    intervention:
      'Complete psychological safety and discretion: an ego-free, neutral sparring partner to help you think through difficult personnel decisions, equity realities, and sensitive transitions with fairness, dignity, and calm.',
    formValue: 'Co-founder & Executive Friction (Sensitive Crossroads)',
  },
  {
    number: '03',
    tag: 'INVESTOR DYNAMICS',
    title: 'The Boardroom Crossroads',
    hook: 'Walking into institutional meetings without fear or posturing.',
    situation:
      'Growth has hit a plateau, unit economics need hard restructuring, or institutional investors are pushing contradictory priorities. You need to distinguish between helpful governance and panic-driven distraction.',
    intervention:
      'Having raised institutional capital and managed multi-tiered boardrooms myself, I help you prepare the real narrative before you walk into the room: stress-testing numbers, anticipating tough questions, and protecting your long-term autonomy.',
    formValue: 'The Boardroom Crossroads (Investor Dynamics)',
  },
  {
    number: '04',
    tag: 'THE FIVE-SPICE RESET',
    title: 'The Fog of Noise',
    hook: 'Too many priorities means you have zero priorities.',
    situation:
      'Every week brings a new fire drill, an urgent feature request, or an opportunistic pivot. The company feels busy, but progress has slowed to a crawl. You feel exhausted and disconnected from the original spark that built the venture.',
    intervention:
      'Radical subtraction: applying the 5-spice test to your product roadmap, pipeline, and team bandwidth, cutting what does not matter so speed, joy, and momentum return naturally.',
    formValue: 'The Fog of Noise (Radical Subtraction)',
  },
];

const FIT_FILTERS = [
  {
    number: '01',
    badge: 'NO SLIDE THEATRE',
    title: 'Pitch Deck Decorators & Buzzword Polishers',
    description:
      'If you need an agency to build glossy 60-slide presentations filled with consulting jargon to appease outsiders, traditional firms are built for that. I work with builders who prefer simple truths, clear unit economics, and one-page decision memos.',
  },
  {
    number: '02',
    badge: 'NO MEETING CULTURES',
    title: 'Meeting-First Cultures That Equate Motion With Progress',
    description:
      'If your leadership culture thrives on eight hours of back-to-back calendar syncs, endless committee sign-offs, and administrative theatre, my philosophy will frustrate you. My entire approach is built on removing meetings so your team can do deep, focused work.',
  },
  {
    number: '03',
    badge: 'NO YES-MEN',
    title: 'Leaders Looking for an Agreeable Echo Chamber',
    description:
      'I bring warm Lakhnawi courtesy (tehzeeb) and zero ego into every conversation, but I will never tell you what you want to hear just to keep you comfortable. If you are not open to hearing an unvarnished operator assessment of where things are stalling, we will waste each other’s time.',
  },
];

export default function AdvisoryPage({ onNavigate }) {
  const [loadTime] = useState(Date.now());
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    venture: '',
    stage: 'Seed / Series A',
    advisoryMode: 'A Ben to Your Jules (Founder Confidant)',
    timeline: 'Immediate (Next 2-4 weeks)',
    bottleneck: '',
    website_url: '', // Honeypot trap
  });

  const handleSelectModeAndScroll = (modeTitle) => {
    setFormData((prev) => ({ ...prev, advisoryMode: modeTitle }));
    const el = document.getElementById('intake-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectScenarioAndScroll = (scenarioText) => {
    setFormData((prev) => ({
      ...prev,
      bottleneck: `[Focus Area: ${scenarioText}]\n\n${prev.bottleneck}`,
    }));
    const el = document.getElementById('intake-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    // Spam Check 1: Honeypot drop
    if (formData.website_url) {
      console.warn('Bot drop via honeypot.');
      setSubmitted(true);
      return;
    }

    // Spam Check 2: Dwell time check
    const elapsed = Date.now() - loadTime;
    if (elapsed < 2000) {
      console.warn('Bot drop via dwell time.');
      setSubmitted(true);
      return;
    }

    // Spam Check 3: Minimum message length
    if ((formData.bottleneck || '').trim().length < 15) {
      setSubmitError('Please write at least a sentence describing the bottleneck or decision.');
      return;
    }

    // Spam Check 4: Rate limit repeat posts (60s cooldown)
    const lastSub = localStorage.getItem('last_advisory_submit_time');
    if (lastSub && Date.now() - Number(lastSub) < 60000) {
      console.warn('Repeat submission quiet drop.');
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    localStorage.setItem('last_advisory_submit_time', String(Date.now()));

    try {
      if (FORMS_CONFIG.web3formsAccessKey && FORMS_CONFIG.web3formsAccessKey !== 'YOUR_ACCESS_KEY_HERE') {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: FORMS_CONFIG.web3formsAccessKey,
            subject: `[5 Spices Advisory] Inquiry from ${formData.name} (${formData.venture})`,
            from_name: '5 Spices or Less: Founder Advisory',
            ...formData,
          }),
        });
        const resData = await response.json();
        if (!resData.success) {
          console.warn('Web3Forms returned non-success:', resData);
        }
      }
    } catch (err) {
      console.warn('Handled submission:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen text-ink-900 dark:text-white transition-colors duration-300">
      
      {/* =========================================================================
          ZONE 1: HERO & OPENING STANCE (Warm Terracotta Atmosphere)
          ========================================================================= */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-[#BC5259] dark:bg-[#2A1417] text-white relative transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <button
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to the front page</span>
            </button>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 dark:bg-white/10 border border-white/25 text-white text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-sm">
              <Compass className="w-3.5 h-3.5 text-white" />
              <span>FOUNDER ADVISORY · LUCKNOW ROOTS · 1:1 CONFIDENTIAL</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08]">
              Straight talk from someone who has <span className="italic text-[#28181A] dark:text-[#FECDD3] font-serif font-black">built, scaled, and exited.</span>
            </h1>

            <p className="text-[#FDF2F4] dark:text-ink-200 font-normal text-base sm:text-lg leading-relaxed pt-2 max-w-2xl">
              No 60-slide decks or corporate theatre. I partner with founders as a hands-on operator, sounding board, or mentor, removing clutter so you can see the work clearly.
            </p>

            {/* In-Page Jump Anchor Pills */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#modes"
                className="px-5 py-2.5 rounded-full bg-white text-[#BC5259] hover:bg-white/95 text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-md"
              >
                03 Collaboration Modes ↓
              </a>
              <a
                href="#scenarios"
                className="px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/25 text-xs font-mono font-bold uppercase tracking-wider transition-all"
              >
                Trigger Scenarios ↓
              </a>
              <a
                href="#fit"
                className="px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/25 text-xs font-mono font-bold uppercase tracking-wider transition-all"
              >
                Mutual Fit Check ↓
              </a>
              <a
                href="#intake-form"
                className="px-5 py-2.5 rounded-full bg-ink-950 hover:bg-black text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-lg"
              >
                Start Conversation ↓
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          ZONE 2: THE THREE COLLABORATION MODES (Cool Alabaster Atmosphere)
          ========================================================================= */}
      <section id="modes" className="py-24 px-6 md:px-12 bg-[#F1F2F4] dark:bg-canvas-dark border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-berry-600" />
              <span className="text-xs font-mono uppercase tracking-widest text-berry-600 dark:text-berry-400 font-bold">
                THREE COLLABORATION MODES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-ink-900 dark:text-white leading-tight">
              How We Work Together.
            </h2>
            <p className="text-sm sm:text-base text-ink-700 dark:text-ink-300 font-light leading-relaxed">
              Three distinct ways to partner, depending on your venture stage, team friction, and where you need clear thinking.
            </p>
          </div>

          {/* 3 Floating Elevated Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {ADVISORY_MODES.map((mode, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder border-t-4 ${mode.accentBorder} shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  {/* Top Bar: Cadence & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${mode.tagClass}`}>
                      {mode.cadence}
                    </span>
                    <span className="font-serif font-black text-xl text-ink-300 dark:text-ink-600">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-ink-900 dark:text-white mb-2 leading-snug">
                    {mode.title}
                  </h3>

                  {/* Subtitle / Focus */}
                  <div className="text-xs font-mono text-ink-500 dark:text-ink-400 mb-6 pb-4 border-b border-canvas-border dark:border-canvas-darkBorder font-medium">
                    {mode.focus}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-ink-700 dark:text-ink-200 font-light leading-relaxed mb-6">
                    {mode.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 pt-4 border-t border-canvas-border dark:border-canvas-darkBorder mb-8">
                    <span className="text-xs font-mono uppercase tracking-wider text-ink-900 dark:text-white font-bold block mb-2">
                      Scope of Collaboration:
                    </span>
                    {mode.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-ink-800 dark:text-ink-100 font-medium">
                        <Check className={`w-3.5 h-3.5 ${mode.checkColor} shrink-0 mt-0.5`} />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Button */}
                <button
                  onClick={() => handleSelectModeAndScroll(mode.title)}
                  className={`w-full py-3.5 rounded-full ${mode.btnClass} text-xs font-mono font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 shadow-md`}
                >
                  <span>Select {mode.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          ZONE 3: WHEN FOUNDERS CALL ME (Deep Midnight Slate Atmosphere)
          ========================================================================= */}
      <section id="scenarios" className="py-24 px-6 md:px-12 bg-[#0F172A] text-white border-t border-[#1E293B] transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-3xl mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-white">
              <Sparkles className="w-3.5 h-3.5 text-berry-400" />
              <span>FOUNDER INFLECTION POINTS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white leading-tight">
              When Founders Pick Up the Phone.
            </h2>
            <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed">
              Common moments of friction where an experienced outside sounding board restores speed, composure, and focus.
            </p>
          </div>

          {/* 4 Comparative Cards in a 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {TRIGGER_SCENARIOS.map((scen, sIdx) => (
              <div
                key={sIdx}
                className="rounded-3xl p-8 bg-[#1E293B]/80 border border-[#334155] shadow-xl flex flex-col justify-between hover:border-berry-500/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold text-berry-400 uppercase tracking-wider px-2.5 py-1 rounded-full bg-berry-950/60 border border-berry-800">
                      {scen.tag}
                    </span>
                    <span className="font-serif font-black text-xl text-slate-500">
                      {scen.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-white mb-1.5">
                    {scen.title}
                  </h3>
                  <div className="text-xs font-serif italic text-slate-300 mb-5">
                    "{scen.hook}"
                  </div>

                  {/* Dual Column Comparative Rows */}
                  <div className="space-y-4 pt-4 border-t border-slate-700/80 mb-6">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                        The Friction:
                      </span>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {scen.situation}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-sage-400 font-bold block mb-1">
                        How We Intervene:
                      </span>
                      <p className="text-xs text-slate-200 font-normal leading-relaxed">
                        {scen.intervention}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleSelectScenarioAndScroll(scen.title)}
                  className="w-full py-3 rounded-full bg-white/10 hover:bg-berry-600 text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Discuss This Inflection Point</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          ZONE 4: "WE WILL NOT BE A GOOD FIT IF..." (Warm Terracotta Atmosphere per Screenshot)
          ========================================================================= */}
      <section id="fit" className="py-24 px-6 md:px-12 bg-[#BC5259] dark:bg-[#2A1417] text-white border-t border-white/20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          
          <div className="max-w-3xl mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 dark:bg-white/10 border border-white/25 text-white text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
              <span>MUTUAL FIT &amp; WORKING STYLE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              We will not be a good fit if...
            </h2>

            <p className="text-[#FDF2F4] dark:text-ink-200 text-sm sm:text-base leading-relaxed pt-1 font-light">
              Advisory only works when both sides share the same wavelength. I cap my advisory work to two or three founders at a time so I can be genuinely helpful. To save both our calendars, here is where my approach does not work:
            </p>
          </div>

          {/* 3 Crisp Off-White Cards Matching Screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {FIT_FILTERS.map((filter, fIdx) => (
              <div
                key={fIdx}
                className="rounded-3xl p-8 bg-[#FAF8F5] dark:bg-canvas-darkCard border border-white/20 dark:border-canvas-darkBorder text-ink-900 dark:text-white shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold text-[#BC5259] dark:text-berry-400 uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#BC5259]/10 dark:bg-berry-950/50 border border-[#BC5259]/20 dark:border-berry-800">
                      {filter.badge}
                    </span>
                    <span className="font-serif font-black text-xl text-ink-300 dark:text-ink-600">
                      {filter.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink-900 dark:text-white mb-4 leading-snug">
                    {filter.title}
                  </h3>

                  <p className="text-sm text-ink-700 dark:text-ink-200 font-light leading-relaxed">
                    {filter.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          ZONE 5: OPERATING PRINCIPLE & DIRECT INTAKE (Warm Hearth Canvas)
          ========================================================================= */}
      <section id="intake-form" className="py-24 px-6 md:px-12 bg-[#FDFBF7] dark:bg-canvas-dark text-ink-900 dark:text-white border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Operating Principle Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-canvas-darkCard border-2 border-canvas-border dark:border-canvas-darkBorder flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#BC5259] dark:text-berry-400 font-bold">
                Operating Principle
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-ink-900 dark:text-white font-bold leading-snug">
                "Less is more. Simplicity over clutter. I back you while you take bold risks."
              </h4>
              <p className="text-sm text-ink-600 dark:text-ink-300 font-light leading-relaxed">
                No retainers designed to bill hours. I only work with founders I believe in. My job is to help you breathe easier, make clear decisions, and back you completely.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-3 text-xs font-mono text-[#BC5259] dark:text-berry-300 bg-canvas-subtle dark:bg-canvas-dark px-5 py-3 rounded-2xl border border-canvas-border dark:border-canvas-darkBorder font-bold shadow-sm">
              <Sparkles className="w-4 h-4 text-[#BC5259]" />
              <span>Direct 1:1 Engagement</span>
            </div>
          </div>

          {/* Direct Advisory Intake Form */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-canvas-darkCard border-2 border-canvas-border dark:border-canvas-darkBorder shadow-2xl relative">
            <div className="text-center mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#BC5259] dark:text-berry-400 font-bold">
                Direct Contact &amp; Intake
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-ink-900 dark:text-white font-black mt-1">
                Start an Honest Conversation
              </h3>
              <p className="text-sm text-ink-600 dark:text-ink-300 mt-2 font-light max-w-lg mx-auto leading-relaxed">
                Tell me about your venture, challenge, or what you need help with. I review every submission personally and respond within 24 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-10 rounded-2xl bg-canvas-subtle dark:bg-canvas-dark border border-berry-200 dark:border-berry-800 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-berry-50 dark:bg-canvas-darkCard border border-berry-200 dark:border-berry-700 flex items-center justify-center text-berry-600 dark:text-berry-400 mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl text-ink-900 dark:text-white font-bold">
                  Message Received
                </h4>
                <p className="text-sm text-ink-600 dark:text-ink-200 font-light max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. I look forward to reading your note and connecting over an exploratory conversation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-full bg-white dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-xs font-mono text-ink-800 dark:text-white font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Honeypot trap */}
                <input
                  type="text"
                  name="website_url"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.website_url}
                  onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
                  style={{ display: 'none' }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-ink-800 dark:text-ink-200 font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah / Rahul"
                      className="w-full px-4 py-3 rounded-xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-[#BC5259] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-ink-800 dark:text-ink-200 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@venture.com"
                      className="w-full px-4 py-3 rounded-xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-[#BC5259] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-ink-800 dark:text-ink-200 font-semibold mb-2">
                      Venture / Organisation &amp; Stage *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.venture}
                      onChange={(e) => setFormData({ ...formData, venture: e.target.value })}
                      placeholder="e.g. Seed SaaS, ClimateTech, Growth, Solo"
                      className="w-full px-4 py-3 rounded-xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-[#BC5259] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-ink-800 dark:text-ink-200 font-semibold mb-2">
                      Preferred Collaboration Style
                    </label>
                    <select
                      value={formData.advisoryMode}
                      onChange={(e) => setFormData({ ...formData, advisoryMode: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-[#BC5259] transition-colors"
                    >
                      <option value="The Hands-On Operator">The Hands-On Operator (Operational Cleanup)</option>
                      <option value="Entrepreneur in Residence (EIR)">Entrepreneur in Residence (EIR / Venture Studio)</option>
                      <option value="A Ben to Your Jules">A Ben to Your Jules (Founder Confidant)</option>
                      <option value="Informal / Just need guidance or advice">Informal / Just need guidance or advice</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-ink-800 dark:text-ink-200 font-semibold mb-2">
                    What is the core problem, bottleneck, or decision you want help with? *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.bottleneck}
                    onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                    placeholder="Tell me where you feel overwhelmed, where systems are cluttered, or what strategic crossroads you are facing..."
                    className="w-full px-4 py-3 rounded-xl bg-canvas-subtle dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-[#BC5259] transition-colors resize-none leading-relaxed"
                  />
                </div>

                {submitError && (
                  <p className="text-xs font-mono text-rose-600 dark:text-rose-400">
                    {submitError}
                  </p>
                )}

                <div className="flex items-center gap-3 text-xs text-ink-600 dark:text-ink-300 pt-2 font-medium">
                  <ShieldCheck className="w-4 h-4 text-ink-900 dark:text-white shrink-0" />
                  <span>100% direct and confidential communication.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#BC5259] hover:bg-[#A3434A] text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#BC5259]/30 active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message to Vivek'}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
