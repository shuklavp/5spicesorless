import React, { useState } from 'react';
import { ArrowRight, Check, Compass, ShieldCheck, Sparkles, Send } from 'lucide-react';

const ADVISORY_MODES = [
  {
    title: 'Diagnostic Scope Audit',
    focus: 'Ruthless Subtraction & Focus',
    cadence: '1 to 2-Week Intensive Sprint',
    description:
      'We audit your active product roadmap, team bandwidth, and strategic initiatives to identify the 80% that can be safely eliminated so your venture can regain its lethal execution speed.',
    deliverables: [
      'Operational and technical subtraction diagnostic',
      'The 5-Lever Executive Blueprint',
      'Roadmap pruning recommendations & stakeholder alignment',
      'Live leadership debrief and implementation strategy',
    ],
  },
  {
    title: 'Fractional Strategy Partner',
    focus: 'High-Touch Founder Sparring',
    cadence: 'Ongoing Embedded Advisory',
    description:
      'Acting as an unvarnished sounding board for CEOs and leadership teams. Direct asynchronous access, bi-weekly strategic reviews, and external pressure-testing on make-or-break decisions.',
    deliverables: [
      'Dedicated bi-weekly strategic sparring sessions',
      'Private asynchronous communication line for acute decisions',
      'Pre-board and investor narrative stress-testing',
      'Strictly capped at 3 concurrent client partnerships',
    ],
  },
  {
    title: 'The Clarity Intensive',
    focus: 'High-Stakes Inflection Points',
    cadence: 'Multi-Day Dedicated Immersion',
    description:
      'Facilitated leadership alignment designed for major pivots, positioning overhauls, or enterprise transitions. Replaces 50-slide decks with narrative writing and fundamental ground truth.',
    deliverables: [
      'Pre-session executive stakeholder interviews',
      'Zero-slide narrative alignment methodology',
      'Identification of core defensible distribution vectors',
      'Concrete 90-day post-immersion execution playbook',
    ],
  },
];

export default function ConsultingModule() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    venture: '',
    stage: 'Seed / Series A',
    advisoryMode: 'Diagnostic Scope Audit',
    timeline: 'Immediate (Next 2-4 weeks)',
    bottleneck: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consulting" className="py-28 px-6 md:px-12 bg-white dark:bg-canvas-dark relative border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-2">
            <Compass className="w-4 h-4 text-berry-600" />
            <span className="text-xs font-mono tracking-widest uppercase text-berry-600 dark:text-berry-400 font-bold">
              BOUTIQUE ADVISORY PRACTICE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900 dark:text-white leading-tight">
            Bespoke strategic counsel for founders refusing unnecessary bloat.
          </h2>
          <p className="mt-6 text-ink-600 dark:text-ink-200 font-normal text-base sm:text-lg leading-relaxed">
            We do not sell commoditized templates or hourly time-sheets. Every advisory engagement is custom-scoped around your venture’s specific operational bottlenecks and strategic ambitions.
          </p>
        </div>

        {/* Advisory Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {ADVISORY_MODES.map((mode, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder hover:border-berry-600 dark:hover:border-berry-500 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-berry-600 dark:text-berry-400 uppercase tracking-wider">
                    {mode.cadence}
                  </span>
                  <span className="font-serif font-black text-xl text-ink-400 dark:text-ink-400">0{idx + 1}</span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-ink-900 dark:text-white mb-2 group-hover:text-berry-600 dark:group-hover:text-berry-400 transition-colors">
                  {mode.title}
                </h3>
                
                <div className="text-xs font-mono text-ink-500 dark:text-ink-300 mb-6 pb-4 border-b border-canvas-border dark:border-canvas-darkBorder">
                  Focus: {mode.focus}
                </div>

                <p className="text-sm text-ink-600 dark:text-ink-200 font-light leading-relaxed mb-6">
                  {mode.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-canvas-border dark:border-canvas-darkBorder mb-8">
                  <span className="text-xs font-mono uppercase tracking-wider text-ink-900 dark:text-white font-bold block mb-2">
                    Scope of Deliverables:
                  </span>
                  {mode.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-ink-700 dark:text-ink-100 font-medium">
                      <Check className="w-3.5 h-3.5 text-cobalt-600 dark:text-cobalt-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#intake-form"
                onClick={() => setFormData({ ...formData, advisoryMode: mode.title })}
                className="w-full py-3 rounded-full bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-ink-900 dark:text-white group-hover:border-berry-600 group-hover:text-berry-600 text-xs font-bold text-center transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Inquire About This Format</span>
                <ArrowRight className="w-3.5 h-3.5 text-berry-600" />
              </a>
            </div>
          ))}
        </div>

        {/* Partnership Philosophy Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder mb-20 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-berry-600 dark:text-berry-400 font-bold">
              Transparent Partnership Philosophy
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-ink-900 dark:text-white font-bold">
              Why we operate without a rigid rate card.
            </h4>
            <p className="text-sm text-ink-600 dark:text-ink-200 font-light leading-relaxed">
              No two ventures face identical constraints. Whether your organization requires a focused two-week subtraction audit or ongoing monthly executive sparring, scopes and terms are tailored directly to the business leverage created.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3 text-xs font-mono text-berry-700 dark:text-berry-300 bg-berry-50 dark:bg-canvas-dark px-5 py-3 rounded-2xl border border-berry-200 dark:border-canvas-darkBorder font-bold">
            <Sparkles className="w-4 h-4 text-berry-600" />
            <span>Strictly Capped Client Capacity</span>
          </div>
        </div>

        {/* Direct Advisory Intake Form */}
        <div id="intake-form" className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-canvas-subtle dark:bg-canvas-darkCard border-2 border-canvas-border dark:border-canvas-darkBorder relative shadow-2xl">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-berry-600 dark:text-berry-400 font-bold">
              Direct Advisory Intake
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-ink-900 dark:text-white font-black mt-1">
              Initiate a Strategic Dialogue
            </h3>
            <p className="text-sm text-ink-500 dark:text-ink-300 mt-2 font-light max-w-lg mx-auto leading-relaxed">
              Tell us about your venture and current operational friction. We review all submissions confidentially and respond within 24 business hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-10 rounded-2xl bg-white dark:bg-canvas-dark border border-berry-300 dark:border-berry-800 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-berry-50 dark:bg-canvas-darkCard border border-berry-200 dark:border-berry-700 flex items-center justify-center text-berry-600 dark:text-berry-400 mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl text-ink-900 dark:text-white font-bold">
                Inquiry Received
              </h4>
              <p className="text-sm text-ink-600 dark:text-ink-200 font-light max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. We have logged your submission and will review your strategic context to coordinate an initial conversation.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-full bg-canvas-subtle dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-xs font-mono text-ink-800 dark:text-white font-semibold"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="e.g. Vivek Shukla"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600 transition-colors shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-ink-800 dark:text-ink-200 font-semibold mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="shuklavp@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600 transition-colors shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-ink-800 dark:text-ink-200 font-semibold mb-2">
                    Venture Name & Nature of Business *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.venture}
                    onChange={(e) => setFormData({ ...formData, venture: e.target.value })}
                    placeholder="e.g. Stealth AI, SaaS, Marketplace, Media"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600 transition-colors shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-ink-800 dark:text-ink-200 font-semibold mb-2">
                    Current Stage
                  </label>
                  <select
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600 transition-colors"
                  >
                    <option value="Pre-seed / Bootstrapped">Pre-seed / Bootstrapped</option>
                    <option value="Seed / Series A">Seed / Series A</option>
                    <option value="Series B+ Growth">Series B+ Growth</option>
                    <option value="Independent / Boutique">Independent / Boutique Operator</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-ink-800 dark:text-ink-200 font-semibold mb-2">
                    Preferred Collaboration Mode
                  </label>
                  <select
                    value={formData.advisoryMode}
                    onChange={(e) => setFormData({ ...formData, advisoryMode: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600 transition-colors"
                  >
                    <option value="Diagnostic Scope Audit">Diagnostic Scope Audit (Sprint)</option>
                    <option value="Fractional Strategy Partner">Fractional Strategy Partner (Ongoing)</option>
                    <option value="The Clarity Intensive">The Clarity Intensive (Offsite/Immersion)</option>
                    <option value="Exploratory / Custom">Exploratory / Not Sure Yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-ink-800 dark:text-ink-200 font-semibold mb-2">
                    Target Start Window
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600 transition-colors"
                  >
                    <option value="Immediate (Next 2-4 weeks)">Immediate (Next 2-4 weeks)</option>
                    <option value="Next Quarter">Next Quarter</option>
                    <option value="Flexible / Planning Ahead">Flexible / Planning Ahead</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-ink-800 dark:text-ink-200 font-semibold mb-2">
                  What is the primary complexity or bottleneck you want to eliminate? *
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  placeholder="Share details on where momentum is stalled, which initiatives feel bloated, or where strategic clarity is missing..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-berry-600 transition-colors resize-none leading-relaxed shadow-inner"
                />
              </div>

              <div className="flex items-center gap-3 text-xs text-ink-500 dark:text-ink-300 pt-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-cobalt-600 dark:text-cobalt-400 shrink-0" />
                <span>All shared information is treated under strict bilateral confidentiality.</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-berry-600 hover:bg-berry-700 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-berry-600/25 active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Confidential Advisory Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
