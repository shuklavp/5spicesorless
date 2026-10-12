// src/components/AdvisoryPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Check, Compass, ShieldCheck, Sparkles, Send, Layers, Building2, HeartHandshake, AlertCircle } from 'lucide-react';

const ADVISORY_PILLARS = [
  {
    id: 'operator',
    number: '01',
    badge: 'Embedded Operator',
    title: 'The Fractional Operator',
    focus: 'Operational Simplification & GTM Discipline',
    path: '/advisory/fractional-operator',
    color: '#147166',
    bgPill: '#D8F3EC',
    summary: 'Between 15 and 60 people, informal alignment disintegrates into meeting sludge and status decks. I embed for 3 to 6 months to strip away coordination friction, install single-page decision memos, and align the team around true unit economics.',
    icon: Layers,
  },
  {
    id: 'eir',
    number: '02',
    badge: 'Venture Studio / Fund',
    title: 'Entrepreneur in Residence (EIR)',
    focus: 'Category Creation & Early Ground Truth',
    path: '/advisory/eir',
    color: '#7C3AED',
    bgPill: '#EDE9FE',
    summary: 'The most expensive mistake in venture building is scaling before validating customer pain. Having pioneered residential water sub-metering in India with Macquarie backing, I pressure-test ground truth, margins, and supply chains for venture studios.',
    icon: Building2,
  },
  {
    id: 'confidant',
    number: '03',
    badge: '1:1 Founder Counsel',
    title: 'A Ben to Your Jules',
    focus: 'Confidential Sounding Board for Founders',
    path: '/advisory/founder-confidant',
    color: '#BC5259',
    bgPill: '#FCE4EC',
    summary: 'The founder\'s chair is fundamentally lonely. When stakes are high, you need an ego-free, calm veteran in your corner: someone to help you separate acute noise from real existential hazards with Lakhnawi courtesy and unvarnished judgement.',
    icon: HeartHandshake,
  },
];

const BOTTLENECKS = [
  {
    num: '01',
    title: 'The 15 to 60 Person Wall',
    description: 'Early informal communication stops working. Weekly syncs multiply, decisions drag, and founders spend 40 hours a week mediating internal alignment rather than building product.',
  },
  {
    num: '02',
    title: 'Co-founder & Executive Friction',
    description: 'Differences in pace, vision, or execution simmer quietly beneath the surface. We bring calm, neutral Lakhnawi courtesy to realign leadership without personal drama.',
  },
  {
    num: '03',
    title: 'The Boardroom Crossroads',
    description: 'Navigating investor expectations, preparing for institutional capital, or restructuring unit economics requires seasoned, unvarnished discipline rather than optimistic spin.',
  },
  {
    num: '04',
    title: 'The Fog of Noise',
    description: 'When sudden challenges hit: key customer churn, technical pivots, or cash stress, we provide the steady perspective to separate temporary hiccups from real structural threats.',
  },
];

export default function AdvisoryPage({ onNavigate, isDark }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formLoadedAt = useRef(Date.now());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    venture: '',
    stage: 'Post-Seed / Series A',
    advisoryMode: 'The Fractional Operator',
    timeline: 'Immediate (Next 2-4 weeks)',
    bottleneck: '',
    hp_company_url: '',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToEnquiry = () => {
    const el = document.getElementById('enquiry');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.hp_company_url && formData.hp_company_url.trim() !== '') {
      setSubmitted(true);
      return;
    }

    if (Date.now() - formLoadedAt.current < 2500) {
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    const payload = {
      name: formData.name,
      email: formData.email,
      venture: formData.venture || '',
      stage: formData.stage,
      advisoryMode: formData.advisoryMode,
      timeline: formData.timeline,
      bottleneck: formData.bottleneck,
      _subject: 'New Advisory Enquiry: ' + formData.name + ' (' + formData.advisoryMode + ')',
    };

    try {
      const response = await fetch('https://formspree.io/f/xvkzbwak', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json().catch(() => null);
        const errMsg = data && data.errors
          ? data.errors.map((err) => err.message).join(', ')
          : 'Unable to submit enquiry. Please email directly at vivek@5spicesorless.com';
        setSubmitError(errMsg);
      }
    } catch (err) {
      setSubmitError('Connection error. Please reach out directly to vivek@5spicesorless.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F2F4] dark:bg-[#080D18] text-[#0F172A] dark:text-[#F8FAFC] transition-colors duration-300">
      <div className="pt-32 pb-24 max-w-6xl mx-auto px-6 space-y-20">

        {/* SECTION 1: HERO & CONTEXT (With RHS Architectural Sketch) */}
        <section className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 md:p-14 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* LHS: Operator Narrative & Positioning */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE4EC] dark:bg-[#BC5259]/20 text-[#BC5259] text-xs font-mono tracking-widest uppercase">
                <Compass className="w-3.5 h-3.5" />
                Advisory & Operational Partnerships
              </div>

              <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-ink-950 dark:text-white leading-tight">
                Direct counsel from someone who has lived the full founder cycle.
              </h1>

              <div className="space-y-4 text-base text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
                <p>
                  Most external business advice arrives as theoretical slides or generic playbooks. Having spent thirty years inside operating enterprises, founding an IoT company from scratch, leading a team of 160+ people across four regional offices, and steering a clean exit, I partner directly with founders to cut away operational clutter.
                </p>
                <p>
                  True leverage comes from subtraction, not addition. Below are the three collaboration modes, kept intentionally lean. Explore each pillar to inspect the full scope, operating rhythm, and concrete deliverables.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={scrollToEnquiry}
                  className="px-6 py-3.5 rounded-full bg-ink-950 hover:bg-black text-white text-xs font-mono tracking-widest uppercase transition-all shadow-md flex items-center gap-2"
                >
                  Start A Conversation
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* RHS: Contextual Hand-Drawn Sketch Still Life */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-6 bg-[#FAF6F0] dark:bg-[#162342]/40 rounded-3xl border border-[#E2E4E8] dark:border-[#1E293B] w-full max-w-md shadow-inner">
                <img
                  src="/illustrations/advisory-study.png"
                  alt="Executive Advisory Study Still Life: Chess King and Knight, Drafting Compass, Open Journal, and Steaming Tea"
                  className="w-full h-auto object-contain rounded-2xl mix-blend-multiply dark:mix-blend-normal"
                  onError={(e) => {
                    // Fallback to placeholder box if image asset path differs
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="mt-4 pt-3 border-t border-[#E2E4E8] dark:border-[#1E293B]/60 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#64748B]">
                  <span>Focus & Perspective</span>
                  <span>Lucknow Roots</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE THREE PILLARS (Compact Cards Linking to Dedicated Standalone Pages) */}
        <section className="space-y-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#BC5259] font-semibold block mb-2">
              Three Distinct Collaboration Modes
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-ink-950 dark:text-white">
              Choose How We Work Together
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ADVISORY_PILLARS.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"
                >
                  <div className="space-y-5">
                    {/* Top Row: Badge & Pillar Number */}
                    <div className="flex items-center justify-between">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase font-semibold"
                        style={{ backgroundColor: isDark ? `${pillar.color}25` : pillar.bgPill, color: pillar.color }}
                      >
                        {pillar.badge}
                      </span>
                      <span className="font-mono text-xs font-bold text-muted-400">
                        {pillar.number}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div>
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                        style={{ backgroundColor: isDark ? `${pillar.color}25` : pillar.bgPill, color: pillar.color }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-ink-950 dark:text-white mb-2 leading-snug">
                        {pillar.title}
                      </h3>
                      <p className="text-xs font-mono text-[#64748B] dark:text-[#94A3B8] uppercase tracking-wider">
                        {pillar.focus}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
                      {pillar.summary}
                    </p>
                  </div>

                  {/* Know More Action Button */}
                  <div className="pt-8">
                    <button
                      onClick={() => onNavigate(pillar.path)}
                      className="w-full py-3.5 px-6 rounded-full text-white text-xs font-mono tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2 group-hover:opacity-95"
                      style={{ backgroundColor: pillar.color }}
                    >
                      KNOW MORE
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 3: WHEN FOUNDERS PICK UP THE PHONE (Charcoal Grey / Deep Blue Identity) */}
        <section className="bg-[#0C1427] dark:bg-[#060A12] text-white rounded-3xl p-8 md:p-14 border border-[#1E293B] shadow-2xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] font-semibold block mb-2">
              Common Inflection Points
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold mb-4">
              When Founders Reach Out
            </h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Most advisory conversations do not start in calm weather. They begin when a specific operational bottleneck threatens execution speed or personal clarity.
            </p>
          </div>

          {/* Clean Information Blocks (No Repetitive Buttons) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {BOTTLENECKS.map((b) => (
              <div
                key={b.num}
                className="p-7 rounded-2xl bg-[#111C35]/70 border border-[#1E293B] hover:border-gray-600 transition-colors"
              >
                <span className="text-xs font-mono text-[#38BDF8] block mb-2 font-bold">
                  {b.num}
                </span>
                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>

          {/* Single Unified Action Button */}
          <div className="pt-4 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-xs font-mono text-gray-400 uppercase tracking-wider text-center sm:text-left">
              Facing one of these bottlenecks right now?
            </p>
            <button
              onClick={scrollToEnquiry}
              className="px-8 py-4 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-mono text-xs tracking-widest uppercase transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 group"
            >
              Start a Confidential Conversation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </section>

        {/* SECTION 4: MUTUAL FIT & WORKING STYLE (Terracotta Red Identity #BC5259) */}
        <section className="bg-[#BC5259] dark:bg-[#2A1417] text-white rounded-3xl p-8 md:p-14 shadow-xl">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FCE4EC] font-semibold block mb-2">
              Working Principles & Ground Truth
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-bold mb-4">
              Mutual Fit & Working Style
            </h2>
            <p className="text-sm md:text-base text-[#FCE4EC] leading-relaxed">
              I protect my time and yours by keeping my active client roster strictly capped at two or three founders. We will work exceptionally well together under three simple ground rules:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAF8F5] dark:bg-[#1C1618] text-ink-950 dark:text-white rounded-2xl p-7 shadow-sm border border-white/20">
              <span className="text-xs font-mono text-[#BC5259] font-bold block mb-2 uppercase tracking-wider">
                Rule 01
              </span>
              <h3 className="font-serif text-lg font-bold mb-2">
                No Slide Decks
              </h3>
              <p className="text-xs md:text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
                We write single-page decision memos. If a proposal cannot be clearly articulated on one sheet of paper, it is not ready for execution.
              </p>
            </div>

            <div className="bg-[#FAF8F5] dark:bg-[#1C1618] text-ink-950 dark:text-white rounded-2xl p-7 shadow-sm border border-white/20">
              <span className="text-xs font-mono text-[#BC5259] font-bold block mb-2 uppercase tracking-wider">
                Rule 02
              </span>
              <h3 className="font-serif text-lg font-bold mb-2">
                No Meeting Cultures
              </h3>
              <p className="text-xs md:text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
                Action takes precedence over consensus deliberations. We cut away ceremonial meetings so builders can build and leaders can lead.
              </p>
            </div>

            <div className="bg-[#FAF8F5] dark:bg-[#1C1618] text-ink-950 dark:text-white rounded-2xl p-7 shadow-sm border border-white/20">
              <span className="text-xs font-mono text-[#BC5259] font-bold block mb-2 uppercase tracking-wider">
                Rule 03
              </span>
              <h3 className="font-serif text-lg font-bold mb-2">
                No Yes-Men
              </h3>
              <p className="text-xs md:text-sm text-[#475569] dark:text-[#CBD5E1] leading-relaxed">
                You do not need cheerleaders who agree with every assumption. You receive warm courtesy combined with unvarnished, direct judgement.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: CONFIDENTIAL INTAKE FORM (With Formspree Sanitisation Fix) */}
        <section id="enquiry" className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 md:p-14 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#BC5259] font-semibold block mb-2">
                Confidential Preliminary Review
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink-950 dark:text-white mb-3">
                Start an Honest Conversation
              </h2>
              <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                Tell me briefly about where your company stands, which collaboration mode fits best, and where you are feeling friction.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-[#D8F3EC]/50 dark:bg-[#147166]/20 rounded-2xl border border-[#147166]/30 text-center">
                <Sparkles className="w-10 h-10 text-[#147166] mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-ink-950 dark:text-white mb-2">
                  Your note has been received in confidence.
                </h3>
                <p className="text-sm text-[#334155] dark:text-[#CBD5E1] leading-relaxed">
                  Thank you for reaching out. I review all incoming enquiries personally and will reply within 48 hours to schedule a confidential preliminary conversation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot field for anti-spam (preventing Formspree 422) */}
                <input
                  type="text"
                  name="_hp_company_url"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.hp_company_url}
                  onChange={(e) => setFormData({ ...formData, hp_company_url: e.target.value })}
                  style={{ display: 'none', position: 'absolute', opacity: 0, height: 0, width: 0 }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#475569] dark:text-[#94A3B8] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priyesh Patel"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#162342] border border-[#CBD5E1] dark:border-[#334155] text-ink-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#BC5259]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#475569] dark:text-[#94A3B8] mb-1.5">
                      Direct Email *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="priyesh@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#162342] border border-[#CBD5E1] dark:border-[#334155] text-ink-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#BC5259]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#475569] dark:text-[#94A3B8] mb-1.5">
                      Company / Venture
                    </label>
                    <input
                      type="text"
                      value={formData.venture}
                      onChange={(e) => setFormData({ ...formData, venture: e.target.value })}
                      placeholder="Company name or sector"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#162342] border border-[#CBD5E1] dark:border-[#334155] text-ink-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#BC5259]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#475569] dark:text-[#94A3B8] mb-1.5">
                      Collaboration Mode
                    </label>
                    <select
                      value={formData.advisoryMode}
                      onChange={(e) => setFormData({ ...formData, advisoryMode: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#162342] border border-[#CBD5E1] dark:border-[#334155] text-ink-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#BC5259]"
                    >
                      <option value="The Fractional Operator">01 / The Fractional Operator</option>
                      <option value="Entrepreneur in Residence (EIR)">02 / Entrepreneur in Residence (EIR)</option>
                      <option value="A Ben to Your Jules (Founder Confidant)">03 / A Ben to Your Jules (Founder Confidant)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#475569] dark:text-[#94A3B8] mb-1.5">
                      Current Stage
                    </label>
                    <select
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#162342] border border-[#CBD5E1] dark:border-[#334155] text-ink-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#BC5259]"
                    >
                      <option value="Seed">Seed (10-20 people)</option>
                      <option value="Post-Seed / Series A">Post-Seed / Series A (20-50 people)</option>
                      <option value="Series B+">Series B+ (50+ people)</option>
                      <option value="Bootstrapped / Profitable">Bootstrapped / Profitable</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#475569] dark:text-[#94A3B8] mb-1.5">
                      Desired Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#162342] border border-[#CBD5E1] dark:border-[#334155] text-ink-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#BC5259]"
                    >
                      <option value="Immediate (Next 2-4 weeks)">Immediate (Next 2-4 weeks)</option>
                      <option value="Next Quarter Planning">Next Quarter Planning</option>
                      <option value="Exploratory / Thesis Discussion">Exploratory Discussion</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#475569] dark:text-[#94A3B8] mb-1.5">
                    What is your primary bottleneck or priority? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.bottleneck}
                    onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                    placeholder="Briefly describe the operational friction, organizational challenge, or decision you are navigating right now."
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] dark:bg-[#162342] border border-[#CBD5E1] dark:border-[#334155] text-ink-950 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#BC5259]"
                  />
                </div>

                {submitError && (
                  <div className="p-3 bg-red-100 dark:bg-red-900/40 border border-red-300 dark:border-red-700/50 rounded-xl text-xs text-red-800 dark:text-red-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#BC5259] hover:bg-[#a6454c] text-white font-mono text-xs tracking-widest uppercase transition-all shadow-lg flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? 'Sending Enquiry...' : 'Submit Confidential Enquiry'}
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
