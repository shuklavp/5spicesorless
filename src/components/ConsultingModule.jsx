import React, { useState } from 'react';
import { ArrowRight, Check, Compass, ShieldCheck, Sparkles, Send, Layers, Flame, Clock } from 'lucide-react';

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
    <section id="consulting" className="py-28 px-6 md:px-12 bg-obsidian-950 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-spice-amber mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>BOUTIQUE ADVISORY PRACTICE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-parchment-50 leading-tight">
            Bespoke strategic counsel for founders refusing unnecessary bloat.
          </h2>
          <p className="mt-6 text-parchment-400 font-light text-base sm:text-lg leading-relaxed">
            We do not sell commoditized templates or hourly time-sheets. Every advisory engagement is custom-scoped around your venture’s specific operational bottlenecks and strategic ambitions.
          </p>
        </div>

        {/* Advisory Engagement Frameworks (No Rate Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {ADVISORY_MODES.map((mode, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-8 bg-obsidian-900/60 border border-white/10 hover:border-spice-amber/50 hover:bg-obsidian-850/80 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-spice-amber uppercase tracking-wider">
                    {mode.cadence}
                  </span>
                  <span className="text-xs font-mono text-parchment-400">0{idx + 1}</span>
                </div>

                <h3 className="font-serif text-2xl font-medium text-parchment-50 mb-2 group-hover:text-white transition-colors">
                  {mode.title}
                </h3>
                
                <div className="text-xs font-mono text-parchment-400 mb-6 pb-4 border-b border-white/5">
                  Focus: {mode.focus}
                </div>

                <p className="text-sm text-parchment-300 font-light leading-relaxed mb-6">
                  {mode.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/5 mb-8">
                  <span className="text-xs font-mono uppercase tracking-wider text-parchment-400 block mb-2">
                    Scope of Deliverables:
                  </span>
                  {mode.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-parchment-200">
                      <Check className="w-3.5 h-3.5 text-spice-amber shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#intake-form"
                onClick={() => setFormData({ ...formData, advisoryMode: mode.title })}
                className="w-full py-3 rounded-xl bg-obsidian-950 border border-white/10 text-parchment-200 group-hover:border-spice-amber/60 group-hover:text-white text-xs font-medium text-center transition-all flex items-center justify-center gap-2"
              >
                <span>Inquire About This Format</span>
                <ArrowRight className="w-3.5 h-3.5 text-spice-amber" />
              </a>
            </div>
          ))}
        </div>

        {/* Bespoke Engagement Philosophy Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-obsidian-900/40 border border-white/10 mb-20 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-spice-amber">
              Transparent Partnership Philosophy
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-parchment-100 font-medium">
              Why we operate without a rigid rate card.
            </h4>
            <p className="text-sm text-parchment-400 font-light leading-relaxed">
              No two ventures face identical constraints. Whether your organization requires a focused two-week subtraction audit or ongoing monthly executive sparring, scopes and terms are tailored directly to the business leverage created.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3 text-xs font-mono text-spice-saffron bg-spice-amber/10 px-5 py-3 rounded-xl border border-spice-amber/25">
            <Sparkles className="w-4 h-4 text-spice-amber" />
            <span>Strictly Capped Client Capacity</span>
          </div>
        </div>

        {/* Built-in Intake Form */}
        <div id="intake-form" className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-obsidian-900/90 border border-spice-amber/30 relative shadow-2xl">
          <div className="text-center mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-spice-amber">
              Direct Advisory Intake
            </span>
            <h3 className="font-serif text-3xl text-parchment-50 font-medium mt-1">
              Initiate a Strategic Dialogue
            </h3>
            <p className="text-sm text-parchment-400 mt-2 font-light max-w-lg mx-auto leading-relaxed">
              Tell us about your venture and current operational friction. We review all submissions confidentially and respond within 24 business hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-10 rounded-2xl bg-spice-amber/10 border border-spice-amber/30 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-spice-amber/20 border border-spice-amber/40 flex items-center justify-center text-spice-amber mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl text-parchment-100 font-medium">
                Inquiry Received
              </h4>
              <p className="text-sm text-parchment-300 font-light max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. We have logged your submission and will review your strategic context to coordinate an initial conversation.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-full bg-obsidian-950 border border-white/10 text-xs font-mono text-parchment-300 hover:text-white"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-parchment-400 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vivek Shukla"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-sm text-parchment-100 focus:outline-none focus:border-spice-amber transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-parchment-400 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="shuklavp@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-sm text-parchment-100 focus:outline-none focus:border-spice-amber transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-parchment-400 mb-2">
                    Venture Name & Nature of Business *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.venture}
                    onChange={(e) => setFormData({ ...formData, venture: e.target.value })}
                    placeholder="e.g. Stealth AI, SaaS, Marketplace, Media"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-sm text-parchment-100 focus:outline-none focus:border-spice-amber transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-parchment-400 mb-2">
                    Current Stage
                  </label>
                  <select
                    value={formData.stage}
                    onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-sm text-parchment-100 focus:outline-none focus:border-spice-amber transition-colors"
                  >
                    <option value="Pre-seed / Ideation">Pre-seed / Bootstrapped</option>
                    <option value="Seed / Series A">Seed / Series A</option>
                    <option value="Series B+ Growth">Series B+ Growth</option>
                    <option value="Independent Professional / Boutique">Independent / Boutique Operator</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-parchment-400 mb-2">
                    Preferred Collaboration Mode
                  </label>
                  <select
                    value={formData.advisoryMode}
                    onChange={(e) => setFormData({ ...formData, advisoryMode: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-sm text-parchment-100 focus:outline-none focus:border-spice-amber transition-colors"
                  >
                    <option value="Diagnostic Scope Audit">Diagnostic Scope Audit (Sprint)</option>
                    <option value="Fractional Strategy Partner">Fractional Strategy Partner (Ongoing)</option>
                    <option value="The Clarity Intensive">The Clarity Intensive (Offsite/Immersion)</option>
                    <option value="Exploratory / Custom">Exploratory / Not Sure Yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-parchment-400 mb-2">
                    Target Start Window
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-sm text-parchment-100 focus:outline-none focus:border-spice-amber transition-colors"
                  >
                    <option value="Immediate (Next 2-4 weeks)">Immediate (Next 2-4 weeks)</option>
                    <option value="Next Quarter">Next Quarter</option>
                    <option value="Flexible / Planning Ahead">Flexible / Planning Ahead</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-parchment-400 mb-2">
                  What is the primary complexity, bottleneck, or noise you want to eliminate? *
                </label>
                <textarea
                  rows="4"
                  required
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  placeholder="Share details on where momentum is stalled, which initiatives feel bloated, or where strategic clarity is missing..."
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-sm text-parchment-100 focus:outline-none focus:border-spice-amber transition-colors resize-none leading-relaxed"
                />
              </div>

              <div className="flex items-center gap-3 text-xs text-parchment-400 pt-2 font-light">
                <ShieldCheck className="w-4 h-4 text-spice-amber shrink-0" />
                <span>All shared information is treated under strict bilateral confidentiality.</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-parchment-100 text-obsidian-950 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-white transition-all shadow-xl hover:shadow-spice-amber/20 active:scale-[0.99]"
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
