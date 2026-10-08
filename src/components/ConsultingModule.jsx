import React, { useState } from 'react';
import { ArrowRight, Check, Compass, ShieldCheck, Sparkles, Send } from 'lucide-react';

const ADVISORY_MODES = [
  {
    title: 'The Fractional Operator',
    focus: 'Operational De-cluttering & GTM Discipline',
    cadence: 'Embedded Operator',
    description:
      'Drawing on long corporate experience and running operations with 165+ people across 4 regional offices, I work alongside founders to cut through operational friction. We strip away bureaucratic clutter, install simple weekly reporting, and focus your team entirely on what moves the business forward.',
    deliverables: [
      'Diagnostic review of team bandwidth, roadmaps, and recurring syncs',
      'Installation of single-page decision memos over 50-slide decks',
      'Go-to-market and marketing alignment with measurable unit economics',
      'Hands-on guidance through high-friction scaling inflection points',
    ],
  },
  {
    id: 'eir',
    title: 'Entrepreneur in Residence (EIR)',
    focus: 'Category Creation & Early Validation',
    cadence: 'Venture Studio or Fund Partnership',
    description:
      'Having pioneered an entire industry category in India ($4.5M raised, category creation in water sub-metering), I partner with venture studios, incubators, or family offices to evaluate market opportunities and pressure-test product viability.',
    deliverables: [
      'Category creation stress-testing and customer problem validation',
      'Early operational design and capital-efficient execution roadmaps',
      'Mentoring founding teams to take bold, calculated bets',
      'Governance and fiduciary oversight from day zero',
    ],
  },
  {
    title: 'A Ben to Your Jules',
    focus: 'Trusted Confidant for High-Agency CEOs',
    cadence: '1:1 Founder Mentoring',
    description:
      'Like Robert De Niro in "The Intern", an ego-free, calm, deeply experienced veteran in your corner. Someone who has raised millions, survived being declared dead, weathered boardroom storms, and exited with honour, providing psychological safety and unvarnished judgment.',
    deliverables: [
      'Bi-weekly private strategy reviews (async & voice line)',
      'Unbiased sounding board on co-founder tensions, hiring, and board dynamics',
      'Crisis perspective: helping you distinguish fatal risks from temporary noise',
      'Strictly capped at 2 to 3 concurrent founder relationships',
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
    advisoryMode: 'A Ben to Your Jules (Founder Confidant)',
    timeline: 'Immediate (Next 2-4 weeks)',
    bottleneck: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consulting" className="py-28 px-6 md:px-12 bg-[#BC5259] dark:bg-[#2A1417] relative border-t border-canvas-border dark:border-canvas-darkBorder transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header: High-Contrast Editorial Style matching reference */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 dark:bg-white/10 border border-white/25 text-white text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-sm">
            <Compass className="w-3.5 h-3.5 text-white" />
            <span>ADVISORY &amp; OPERATIONAL PARTNERSHIPS</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08]">
            Seasoned counsel from someone who has <span className="italic text-[#28181A] dark:text-[#FECDD3] font-serif font-black">lived the full founder cycle.</span>
          </h2>

          <p className="text-[#FDF2F4] dark:text-ink-200 font-normal text-base sm:text-lg leading-relaxed pt-2">
            I don't deliver generic consulting decks. I partner with founders and leaders as an embedded operator, EIR, or steady confidant, helping you take bold risks while backing you completely.
          </p>
        </div>

        {/* 3 Advisory Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {ADVISORY_MODES.map((mode, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 bg-[#FAF8F5] dark:bg-canvas-darkCard border border-white/20 dark:border-canvas-darkBorder transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div>
                {/* Cadence Tag & Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#BC5259] dark:text-berry-400 uppercase tracking-wider">
                    {mode.cadence}
                  </span>
                  <span className="font-serif font-black text-xl text-ink-300 dark:text-ink-500">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl font-bold text-ink-900 dark:text-white mb-2 group-hover:text-[#BC5259] dark:group-hover:text-berry-400 transition-colors">
                  {mode.title}
                </h3>
                
                {/* Subtitle text without Focus prefix */}
                <div className="text-xs font-mono text-ink-600 dark:text-ink-300 mb-6 pb-4 border-b border-canvas-border dark:border-canvas-darkBorder font-medium">
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
                      <Check className="w-3.5 h-3.5 text-[#BC5259] dark:text-cobalt-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#intake-form"
                onClick={() => setFormData({ ...formData, advisoryMode: mode.title })}
                className="w-full py-3.5 rounded-full bg-ink-950 hover:bg-[#BC5259] text-white dark:bg-white dark:text-ink-950 dark:hover:bg-berry-500 dark:hover:text-white text-xs font-bold text-center transition-all flex items-center justify-center gap-2 shadow-md group-hover:shadow-lg"
              >
                <span>Discuss This Collaboration</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Philosophy Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] dark:bg-canvas-darkCard border border-white/20 dark:border-canvas-darkBorder mb-20 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BC5259] dark:text-berry-400 font-bold">
              My Guiding Operating Principle
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-ink-900 dark:text-white font-bold">
              "Less is more. Simplicity over clutter. I back you while you take bold risks."
            </h4>
            <p className="text-sm text-ink-700 dark:text-ink-200 font-light leading-relaxed">
              No rigid rate cards or bureaucratic retainer tiers. I engage with people I believe in, helping founders and operators cut through the noise to build something that endures.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3 text-xs font-mono text-[#BC5259] dark:text-berry-300 bg-white dark:bg-canvas-dark px-5 py-3 rounded-2xl border border-canvas-border dark:border-canvas-darkBorder font-bold shadow-sm">
            <Sparkles className="w-4 h-4 text-[#BC5259]" />
            <span>Direct 1:1 Engagement</span>
          </div>
        </div>

        {/* Direct Advisory Intake Form */}
        <div id="intake-form" className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] dark:bg-canvas-darkCard border-2 border-white/30 dark:border-canvas-darkBorder relative shadow-2xl">
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
            <div className="p-10 rounded-2xl bg-white dark:bg-canvas-dark border border-[#BC5259]/30 dark:border-berry-800 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#BC5259]/10 dark:bg-canvas-darkCard border border-[#BC5259]/20 dark:border-berry-700 flex items-center justify-center text-[#BC5259] dark:text-berry-400 mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl text-ink-900 dark:text-white font-bold">
                Message Received
              </h4>
              <p className="text-sm text-ink-600 dark:text-ink-200 font-light max-w-md mx-auto leading-relaxed">
                Thank you for reaching out. I look forward to reading your note and connecting over an exploratory call.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-full bg-[#FAF8F5] dark:bg-canvas-darkCard border border-canvas-border dark:border-canvas-darkBorder text-xs font-mono text-ink-800 dark:text-white font-semibold"
              >
                Send another message
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
                    placeholder="e.g. Sarah / Rahul"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-[#BC5259] transition-colors shadow-inner"
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
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-[#BC5259] transition-colors shadow-inner"
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
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-[#BC5259] transition-colors shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-ink-800 dark:text-ink-200 font-semibold mb-2">
                    Preferred Collaboration Style
                  </label>
                  <select
                    value={formData.advisoryMode}
                    onChange={(e) => setFormData({ ...formData, advisoryMode: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-[#BC5259] transition-colors"
                  >
                    <option value="A Ben to Your Jules (Founder Confidant)">A Ben to Your Jules (Founder Confidant)</option>
                    <option value="The Fractional Operator">The Fractional Operator (Operational Cleanup)</option>
                    <option value="Entrepreneur in Residence (EIR)">Entrepreneur in Residence (EIR / Venture Studio)</option>
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
                  placeholder="Tell me where you feel overwhelmed, where systems are cluttered, or what strategic crossroad you are facing..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-canvas-dark border border-canvas-border dark:border-canvas-darkBorder text-sm text-ink-900 dark:text-white focus:outline-none focus:border-[#BC5259] transition-colors resize-none leading-relaxed shadow-inner"
                />
              </div>

              <div className="flex items-center gap-3 text-xs text-ink-600 dark:text-ink-300 pt-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-ink-900 dark:text-white shrink-0" />
                <span>Confidential, direct, and unvarnished communication.</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#BC5259] hover:bg-[#A3434A] text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#BC5259]/30 active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Vivek</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
