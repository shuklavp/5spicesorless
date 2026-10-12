// src/components/PillarOperatorPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, Compass, ShieldCheck, Sparkles, Send, Users, Layers, Zap, Clock } from 'lucide-react';

export default function PillarOperatorPage({ onNavigate, isDark }) {
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
      advisoryMode: 'The Fractional Operator',
      timeline: formData.timeline,
      bottleneck: formData.bottleneck,
      _subject: 'Advisory Enquiry: Fractional Operator - ' + formData.name,
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
      <div className="pt-32 pb-24 max-w-5xl mx-auto px-6">
        {/* Back Link */}
        <button
          onClick={() => onNavigate('/advisory')}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-muted-500 hover:text-ink-900 dark:hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#147166]" />
          Back to Advisory Overview
        </button>

        {/* Hero Section */}
        <div className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 md:p-12 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8F3EC] dark:bg-[#147166]/20 text-[#147166] text-xs font-mono tracking-widest uppercase mb-6">
            <Layers className="w-3.5 h-3.5" />
            Embedded Operational Advisory · Pillar 01
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-ink-950 dark:text-white mb-4">
            The Fractional Operator
          </h1>

          <p className="text-lg md:text-xl text-[#475569] dark:text-[#94A3B8] font-serif italic mb-8 max-w-3xl">
            Operational simplification, killing presentation theatre, and restoring team velocity.
          </p>

          <div className="border-l-2 border-[#147166] pl-6 py-2 bg-[#F8FAFC] dark:bg-[#162342]/40 rounded-r-xl">
            <p className="font-serif text-base md:text-lg text-ink-900 dark:text-gray-200 leading-relaxed">
              "Companies rarely stall because they run out of ambition. They stall because coordination friction eats their execution speed."
            </p>
          </div>
        </div>

        {/* Section 1: The Why */}
        <div className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 md:p-12 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#147166] font-semibold block mb-2">
            01 / The Context & Ground Truth
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-950 dark:text-white mb-6">
            Why Scale Breaks Execution Speed
          </h2>
          <div className="space-y-4 text-base text-[#334155] dark:text-[#CBD5E1] leading-relaxed">
            <p>
              Between 15 and 60 people, the informal communication that carried your seed stage quietly disintegrates. In its place creeps administrative sludge: weekly meetings that should be single-page memos, status updates designed to impress rather than inform, and founders spending forty hours a week mediating cross-functional friction rather than building product.
            </p>
            <p>
              The team works harder, evenings run later, yet delivery cycles drag. Founders often react by hiring middle managers or adding coordination tools, which unintentionally multiplies the noise. What was once agile and direct becomes a maze of departmental alignment.
            </p>
          </div>
        </div>

        {/* Section 2: The How */}
        <div className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 md:p-12 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#147166] font-semibold block mb-2">
            02 / The Philosophy in Practice
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-950 dark:text-white mb-6">
            Subtraction Over Addition
          </h2>
          <div className="space-y-4 text-base text-[#334155] dark:text-[#CBD5E1] leading-relaxed">
            <p>
              Having built an IoT enterprise with 160+ people across four regional offices and guided it to an orderly exit, I know that real operational leverage comes from subtraction, not addition.
            </p>
            <p>
              As an embedded fractional operator, I do not deliver theoretical slide presentations or leave you with binders of advice. I work directly inside your executive cadence for 3 to 6 months to strip away operational clutter. We establish clear ownership, replace slide decks with crisp, written decision memos, and re-centre every functional team around clean unit economics and customer delivery.
            </p>
          </div>
        </div>

        {/* Section 3: The What */}
        <div className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 md:p-12 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#147166] font-semibold block mb-2">
            03 / Tangible Deliverables
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-950 dark:text-white mb-8">
            What We Build and Cleanse Together
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#162342]/40 border border-[#E2E4E8] dark:border-[#1E293B]">
              <div className="w-10 h-10 rounded-xl bg-[#D8F3EC] dark:bg-[#147166]/30 flex items-center justify-center text-[#147166] mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-ink-950 dark:text-white mb-2">
                The Communication Audit
              </h3>
              <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                A forensic review of your recurring syncs, Slack channels, and roadmaps. We systematically eliminate redundant meetings, typically freeing 30 to 40 percent of executive and engineering bandwidth within 30 days.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#162342]/40 border border-[#E2E4E8] dark:border-[#1E293B]">
              <div className="w-10 h-10 rounded-xl bg-[#D8F3EC] dark:bg-[#147166]/30 flex items-center justify-center text-[#147166] mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-ink-950 dark:text-white mb-2">
                Single-Page Decision Memos
              </h3>
              <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                Replacing 40-slide status decks with Amazon-style, concise written memos. Proposals must stand on logical clarity before anyone enters a meeting room, speeding decisions from weeks to hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#162342]/40 border border-[#E2E4E8] dark:border-[#1E293B]">
              <div className="w-10 h-10 rounded-xl bg-[#D8F3EC] dark:bg-[#147166]/30 flex items-center justify-center text-[#147166] mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-ink-950 dark:text-white mb-2">
                Unit Economics & Delivery Alignment
              </h3>
              <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                Auditing delivery costs, margins, and operational burn. We align your product roadmap directly with cash collection and sustainable customer unit economics.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#162342]/40 border border-[#E2E4E8] dark:border-[#1E293B]">
              <div className="w-10 h-10 rounded-xl bg-[#D8F3EC] dark:bg-[#147166]/30 flex items-center justify-center text-[#147166] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-ink-950 dark:text-white mb-2">
                Inflection Point Triage & Sync
              </h3>
              <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                Hands-on guidance through high-friction operational moments: cross-functional silos, key leadership hires, or reorganisations, anchored by a weekly operating review.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Collaboration Fit */}
        <div className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 md:p-12 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#147166] font-semibold block mb-2">
            04 / Collaboration Fit
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-950 dark:text-white mb-6">
            Is This The Right Fit For Your Stage?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-ink-900 dark:text-white text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#147166]"></span>
                We will be an excellent fit if:
              </h4>
              <ul className="space-y-2 text-sm text-[#475569] dark:text-[#94A3B8]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#147166] shrink-0 mt-0.5" />
                  <span>You have verified product-market fit and are scaling past 15 people.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#147166] shrink-0 mt-0.5" />
                  <span>The founder is bogged down in internal alignment rather than growth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#147166] shrink-0 mt-0.5" />
                  <span>You want direct, unvarnished operational judgement, not cheerleading.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif font-bold text-ink-900 dark:text-white text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#BC5259]"></span>
                We will not be a good fit if:
              </h4>
              <ul className="space-y-2 text-sm text-[#475569] dark:text-[#94A3B8]">
                <li className="flex items-start gap-2 text-muted-400">
                  <span className="text-[#BC5259] font-bold">✕</span>
                  <span>You are looking for slide decks to present to external advisors.</span>
                </li>
                <li className="flex items-start gap-2 text-muted-400">
                  <span className="text-[#BC5259] font-bold">✕</span>
                  <span>Your culture prioritises consensus meetings over decisive action.</span>
                </li>
                <li className="flex items-start gap-2 text-muted-400">
                  <span className="text-[#BC5259] font-bold">✕</span>
                  <span>You want a passive advisor who signs off on every existing habit.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 5: Direct Intake Form */}
        <div id="enquiry" className="bg-[#BC5259] dark:bg-[#2A1417] text-white rounded-3xl p-8 md:p-12 shadow-xl mb-12">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FCE4EC] font-semibold block mb-2">
              Start an Honest Conversation
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Inquire Regarding The Fractional Operator
            </h2>
            <p className="text-[#FCE4EC] text-sm mb-8 leading-relaxed">
              I take on a strictly limited number of operational partnerships each quarter to ensure deep presence. Send a short note about where your company stands and the friction you are experiencing.
            </p>

            {submitted ? (
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-center">
                <Sparkles className="w-10 h-10 text-[#FCE4EC] mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold mb-2">Thank you for reaching out.</h3>
                <p className="text-sm text-[#FCE4EC] leading-relaxed">
                  Your note has been received with complete confidentiality. I will read through your background and reply personally within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-ink-950 dark:text-ink-950">
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
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/90 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Arjun Mehta"
                      className="w-full px-4 py-3 rounded-xl bg-white text-ink-950 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/90 mb-1.5">
                      Direct Email *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="arjun@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white text-ink-950 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/90 mb-1.5">
                      Company / Venture
                    </label>
                    <input
                      type="text"
                      value={formData.venture}
                      onChange={(e) => setFormData({ ...formData, venture: e.target.value })}
                      placeholder="Company name or sector"
                      className="w-full px-4 py-3 rounded-xl bg-white text-ink-950 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/90 mb-1.5">
                      Current Stage
                    </label>
                    <select
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white text-ink-950 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <option value="Seed">Seed (10-20 people)</option>
                      <option value="Post-Seed / Series A">Post-Seed / Series A (20-50 people)</option>
                      <option value="Series B+">Series B+ (50+ people)</option>
                      <option value="Bootstrapped / Profitable">Bootstrapped / Profitable</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/90 mb-1.5">
                    Primary Operational Bottleneck *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.bottleneck}
                    onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                    placeholder="What is slowing execution down right now? Where is the team feeling the most friction?"
                    className="w-full px-4 py-3 rounded-xl bg-white text-ink-950 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>

                {submitError && (
                  <div className="p-3 bg-red-900/60 border border-red-400/40 rounded-xl text-xs text-white">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-ink-950 hover:bg-black text-white font-mono text-xs tracking-widest uppercase transition-all shadow-lg flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? 'Sending Enquiry...' : 'Submit Confidential Enquiry'}
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
