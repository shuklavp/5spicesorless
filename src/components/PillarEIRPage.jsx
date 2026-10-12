// src/components/PillarEIRPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, Compass, ShieldCheck, Sparkles, Send, Building2, TrendingUp, Target, Search } from 'lucide-react';

export default function PillarEIRPage({ onNavigate, isDark }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formLoadedAt = useRef(Date.now());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    venture: '',
    stage: 'Venture Studio / Incubator',
    advisoryMode: 'Entrepreneur in Residence (EIR)',
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
      advisoryMode: 'Entrepreneur in Residence (EIR)',
      timeline: formData.timeline,
      bottleneck: formData.bottleneck,
      _subject: 'Advisory Enquiry: EIR Studio - ' + formData.name,
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
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#7C3AED]" />
          Back to Advisory Overview
        </button>

        {/* Hero Section */}
        <div className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 md:p-12 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDE9FE] dark:bg-[#7C3AED]/20 text-[#7C3AED] text-xs font-mono tracking-widest uppercase mb-6">
            <Building2 className="w-3.5 h-3.5" />
            Venture Studio & Fund Partnership · Pillar 02
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-ink-950 dark:text-white mb-4">
            Entrepreneur in Residence (EIR)
          </h1>

          <p className="text-lg md:text-xl text-[#475569] dark:text-[#94A3B8] font-serif italic mb-8 max-w-3xl">
            Category creation, early validation, and building capital-efficient operating blueprints.
          </p>

          <div className="border-l-2 border-[#7C3AED] pl-6 py-2 bg-[#F8FAFC] dark:bg-[#162342]/40 rounded-r-xl">
            <p className="font-serif text-base md:text-lg text-ink-900 dark:text-gray-200 leading-relaxed">
              "The most expensive mistake in venture building is scaling an idea before validating the underlying customer pain."
            </p>
          </div>
        </div>

        {/* Section 1: The Why */}
        <div className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 md:p-12 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7C3AED] font-semibold block mb-2">
            01 / The Real Cost of Assumptions
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-950 dark:text-white mb-6">
            The Pitch Deck vs Customer Ground Truth
          </h2>
          <div className="space-y-4 text-base text-[#334155] dark:text-[#CBD5E1] leading-relaxed">
            <p>
              In early venture building, slide decks can make almost any business model appear compelling. Spreadsheets calculate addressable markets in the billions, and prototypes look dazzling in pitch meetings. But once institutional capital is committed, companies often discover that polite enthusiasm does not translate into willingness to pay.
            </p>
            <p>
              Founders frequently burn precious runway building complex delivery systems before validating basic ground truths: unit margins, distribution friction, and real-world compliance. By the time the flaw is discovered, the venture is too heavy to pivot cleanly.
            </p>
          </div>
        </div>

        {/* Section 2: The How */}
        <div className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 md:p-12 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7C3AED] font-semibold block mb-2">
            02 / The Operating Philosophy
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-950 dark:text-white mb-6">
            Battle-Tested Operator Scrutiny
          </h2>
          <div className="space-y-4 text-base text-[#334155] dark:text-[#CBD5E1] leading-relaxed">
            <p>
              Having created an entirely new utility sub-metering category in India, unlocked institutional funding from Macquarie, and navigated difficult supply chains and regulatory frameworks, I partner with venture studios and funds to pressure-test concepts before scale capital is deployed.
            </p>
            <p>
              We do not rely on theoretical frameworks. We conduct field validation, test customer unit economics, inspect real operational dependencies, and build lean execution architectures. This ensures every dollar deployed is grounded in verified customer reality.
            </p>
          </div>
        </div>

        {/* Section 3: The What */}
        <div className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 md:p-12 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7C3AED] font-semibold block mb-2">
            03 / Tangible Deliverables
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-950 dark:text-white mb-8">
            What We Validate and Architect Together
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#162342]/40 border border-[#E2E4E8] dark:border-[#1E293B]">
              <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] dark:bg-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-ink-950 dark:text-white mb-2">
                Customer Problem Validation
              </h3>
              <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                Direct interviews and pilots with target buyers to determine genuine willingness to pay, separating polite feedback from urgent commercial demand before building.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#162342]/40 border border-[#E2E4E8] dark:border-[#1E293B]">
              <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] dark:bg-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] mb-4">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-ink-950 dark:text-white mb-2">
                Category Creation Stress-Testing
              </h3>
              <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                Rigorous analysis of regulatory hurdles, supply chains, hardware/software interfaces, and pricing defensibility against incumbents.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#162342]/40 border border-[#E2E4E8] dark:border-[#1E293B]">
              <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] dark:bg-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-ink-950 dark:text-white mb-2">
                Lean Operating Architecture
              </h3>
              <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                Designing capital-efficient 0-to-1 operational roadmaps, milestone criteria, and early team profiles that prioritise speed over headcounts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#162342]/40 border border-[#E2E4E8] dark:border-[#1E293B]">
              <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] dark:bg-[#7C3AED]/30 flex items-center justify-center text-[#7C3AED] mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-ink-950 dark:text-white mb-2">
                Frank Committee Reports
              </h3>
              <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                Unvarnished evaluation memos for investment committees, providing realistic risk assessments, unit economics projections, and clear go/no-go verdicts.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Studio & Fund Fit */}
        <div className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 md:p-12 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7C3AED] font-semibold block mb-2">
            04 / Studio & Fund Fit
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-950 dark:text-white mb-6">
            Where This Collaboration Generates High Return
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-ink-900 dark:text-white text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED]"></span>
                Best suited for:
              </h4>
              <ul className="space-y-2 text-sm text-[#475569] dark:text-[#94A3B8]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span>Venture studios incubating complex physical-digital or operational models.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span>Early-stage funds needing seasoned operator due diligence on founders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                  <span>Family offices seeking pragmatic validation before writing checks.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif font-bold text-ink-900 dark:text-white text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#BC5259]"></span>
                Not intended for:
              </h4>
              <ul className="space-y-2 text-sm text-[#475569] dark:text-[#94A3B8]">
                <li className="flex items-start gap-2 text-muted-400">
                  <span className="text-[#BC5259] font-bold">✕</span>
                  <span>Pure speculative trend investing without underlying unit economics.</span>
                </li>
                <li className="flex items-start gap-2 text-muted-400">
                  <span className="text-[#BC5259] font-bold">✕</span>
                  <span>Programs looking for high-volume academic lectures rather than field work.</span>
                </li>
                <li className="flex items-start gap-2 text-muted-400">
                  <span className="text-[#BC5259] font-bold">✕</span>
                  <span>Teams seeking validation for preconceived narratives without open enquiry.</span>
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
              Explore an EIR or Studio Collaboration
            </h2>
            <p className="text-[#FCE4EC] text-sm mb-8 leading-relaxed">
              If your studio or fund is preparing to incubate a venture or stress-test an existing thesis, let us discuss how a structured EIR engagement can protect capital and accelerate ground truth.
            </p>

            {submitted ? (
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-center">
                <Sparkles className="w-10 h-10 text-[#FCE4EC] mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold mb-2">Thank you for your note.</h3>
                <p className="text-sm text-[#FCE4EC] leading-relaxed">
                  Your enquiry has been received in confidence. I will review your fund details and reply personally within 48 hours.
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
                      placeholder="e.g. Vikram Singhal"
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
                      placeholder="vikram@venturefund.com"
                      className="w-full px-4 py-3 rounded-xl bg-white text-ink-950 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/90 mb-1.5">
                      Fund / Studio Name
                    </label>
                    <input
                      type="text"
                      value={formData.venture}
                      onChange={(e) => setFormData({ ...formData, venture: e.target.value })}
                      placeholder="Fund or studio name"
                      className="w-full px-4 py-3 rounded-xl bg-white text-ink-950 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/90 mb-1.5">
                      Collaboration Rhythm
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white text-ink-950 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <option value="Immediate (Next 2-4 weeks)">Immediate (Next 2-4 weeks)</option>
                      <option value="Next Quarter Planning">Next Quarter Planning</option>
                      <option value="Thesis Discussion">Initial Thesis Exploration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/90 mb-1.5">
                    Thesis or Opportunity under Review *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.bottleneck}
                    onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                    placeholder="Briefly describe the category, business model, or operational bottleneck under review."
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
