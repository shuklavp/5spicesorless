import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, Send, ShieldCheck, Sparkles, X } from 'lucide-react';
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvkzbwak';

export default function PillarOperatorPage({ onNavigate, isDark }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    stage: 'Post-Seed / Series A (15 to 40 people)',
    bottleneck: '',
    _hp_company_url: '' // honeypot
  });
  const [submitStatus, setSubmitStatus] = useState(null); // 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._hp_company_url) return; // Silent discard for bot

    setSubmitStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          source: 'Pillar 01 - The Fractional Operator',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          stage: formData.stage,
          bottleneck: formData.bottleneck
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          stage: 'Post-Seed / Series A (15 to 40 people)',
          bottleneck: '',
          _hp_company_url: ''
        });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Unable to submit enquiry right now. Please try again or reach out directly.');
        setSubmitStatus('error');
      }
    } catch (err) {
      setErrorMessage('Network error. Please check your connection and try again.');
      setSubmitStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-sans selection:bg-[#E11D74]/20 selection:text-[#111111]">
      
      {/* ========================================================================= */}
      {/* 1. ATMOSPHERIC ARCHITECTURAL BANNER (MIDNIGHT SLATE & STUDY SKETCH)     */}
      {/* ========================================================================= */}
      <section className="relative w-full bg-[#09111D] text-white pt-32 pb-24 px-6 md:px-12 lg:px-16 overflow-hidden border-b border-[#1E293B]">
        {/* Full-width container with uncropped artwork pinned right and seamless gradient */}
        <div className="absolute inset-0 pointer-events-none flex justify-end overflow-hidden">
          <img
            src="/work-sketch.jpeg"
            alt="Work Study Desk"
            className="h-full w-auto max-w-none object-contain object-right-bottom filter contrast-110 brightness-90 opacity-40 lg:opacity-55"
          />
          {/* Multi-layered soft vignette to dissolve harsh edges completely */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#09111D] via-[#09111D]/85 via-50% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09111D] via-transparent to-[#09111D]/60" />
        </div>

        <div className="relative max-w-5xl mx-auto z-10">
          {/* Back Navigation */}
          <a href="/advisory" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-white/60 hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Advisory Overview</span>
          </a>

          {/* Kicker badge */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E11D74] animate-pulse" />
            <span className="font-mono text-xs tracking-widest uppercase text-white/70">
              Confidential Advisory • Pillar 01
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
            The Fractional <span className="italic font-normal font-serif text-[#E11D74]">Operator</span>.
          </h1>

          {/* Subtitle */}
          <p className="font-serif text-xl sm:text-2xl text-white/80 max-w-2xl leading-relaxed mb-10">
            Operational simplification, eliminating presentation theatre, and restoring execution speed between 15 and 60 people.
          </p>

          {/* Tactical Pull Quote Card */}
          <div className="bg-[#0B1320]/80 backdrop-blur-md border-l-2 border-[#E11D74] p-6 max-w-2xl rounded-r-xl shadow-lg">
            <p className="font-serif italic text-lg text-white/90 leading-relaxed">
              &ldquo;Companies rarely stall because they run out of ambition. They stall because coordination friction eats their execution speed.&rdquo;
            </p>
          </div>
        </div>
      </section>

      

      {/* ========================================================================= */}
      {/* 3. EDITORIAL DOSSIER: THE CONTEXT & OPERATING PHILOSOPHY                   */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context */}
          <div className="md:col-span-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B85028] block mb-3 font-semibold">
              01 / The Context
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mb-6 leading-snug">
              Why scale breaks execution speed.
            </h2>
            <div className="font-serif text-lg text-[#2B2927] leading-relaxed space-y-4">
              <p>
                Between 15 and 60 people, the informal communication that carried your seed stage quietly disintegrates. In its place creeps administrative sludge: weekly syncs that should be single-page memos, status updates designed to impress rather than inform, and founders spending forty hours a week mediating cross-functional friction rather than building product.
              </p>
              <p>
                The team works harder, evenings run later, yet delivery cycles drag. Founders often react by hiring middle managers or adding coordination tools, which unintentionally multiplies the noise. What was once agile and direct becomes a maze of departmental alignment.
              </p>
            </div>
          </div>

          {/* Right Column: Philosophy */}
          <div className="md:col-span-6 md:border-l md:border-[#EAE5DF] md:pl-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B85028] block mb-3 font-semibold">
              02 / The Philosophy In Practice
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mb-6 leading-snug">
              Subtraction over addition.
            </h2>
            <div className="font-serif text-lg text-[#2B2927] leading-relaxed space-y-4">
              <p>
                Having built an enterprise with 160+ people across four regional offices and guided it to an orderly exit, I know that real operational leverage comes from subtraction, not addition.
              </p>
              <p>
                As an embedded fractional operator, I do not deliver theoretical slide presentations or leave you with binders of advice. I work directly inside your executive cadence for 3 to 6 months to strip away operational clutter. We establish clear ownership, replace slide decks with crisp, written decision memos, and re-centre every functional team around clean unit economics and customer delivery.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TANGIBLE DELIVERABLES: LETTERPRESS MEMORANDUM DOSSIER                  */}
      {/* ========================================================================= */}
      <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 border-y border-[#EAE5DF]">
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B85028] block mb-2 font-semibold">
              03 / Tangible Deliverables
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#111111]">
              What we build and cleanse together.
            </h2>
            <p className="font-serif text-xl text-[#55524E] mt-3 max-w-2xl">
              Concrete operational infrastructure installed directly into your company rhythm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Memo 01 */}
            <div className="border-t-2 border-[#111111] pt-6">
              <span className="font-mono text-xs font-bold text-[#E11D74] tracking-widest block mb-2">
                DELIVERABLE 01
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-3">
                The Communication Audit
              </h3>
              <p className="font-serif text-base text-[#44403C] leading-relaxed">
                A forensic review of recurring syncs, messaging channels, and roadmaps. We systematically eliminate redundant meetings, typically freeing 30 to 40 percent of executive and engineering bandwidth within the first 30 days.
              </p>
            </div>

            {/* Memo 02 */}
            <div className="border-t-2 border-[#111111] pt-6">
              <span className="font-mono text-xs font-bold text-[#E11D74] tracking-widest block mb-2">
                DELIVERABLE 02
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-3">
                Single-Page Decision Memos
              </h3>
              <p className="font-serif text-base text-[#44403C] leading-relaxed">
                Replacing 40-slide status decks with concise, written memos. Proposals must stand on logical clarity before anyone enters a meeting room, speeding decisions from weeks to hours.
              </p>
            </div>

            {/* Memo 03 */}
            <div className="border-t-2 border-[#111111] pt-6">
              <span className="font-mono text-xs font-bold text-[#E11D74] tracking-widest block mb-2">
                DELIVERABLE 03
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-3">
                Unit Economics & Delivery Alignment
              </h3>
              <p className="font-serif text-base text-[#44403C] leading-relaxed">
                Auditing delivery costs, margins, and operational burn. We align your product roadmap directly with cash collection and sustainable customer unit economics.
              </p>
            </div>

            {/* Memo 04 */}
            <div className="border-t-2 border-[#111111] pt-6">
              <span className="font-mono text-xs font-bold text-[#E11D74] tracking-widest block mb-2">
                DELIVERABLE 04
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-3">
                Inflection Point Triage & Sync
              </h3>
              <p className="font-serif text-base text-[#44403C] leading-relaxed">
                Hands-on guidance through high-friction operational moments: cross-functional silos, key leadership hires, or reorganisations, anchored by a weekly operating review.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. COLLABORATION FIT: EXECUTIVE COMPATIBILITY MATRIX                       */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B85028] block mb-2 font-semibold">
            04 / Collaboration Fit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
            Is this the right fit for your stage?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl p-8 sm:p-10 border border-[#EAE5DF] shadow-sm">
          
          {/* Fit Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[#EAE5DF]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-800">
                High-Value Fit
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <span className="font-serif text-base text-[#2B2927]">
                  You have verified product-market fit and are scaling past 15 people.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <span className="font-serif text-base text-[#2B2927]">
                  The founder is bogged down in internal alignment rather than building and growth.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <span className="font-serif text-base text-[#2B2927]">
                  You want direct, unvarnished operational judgement, not corporate cheerleading.
                </span>
              </li>
            </ul>
          </div>

          {/* Unfit Column */}
          <div className="space-y-6 md:border-l md:border-[#EAE5DF] md:pl-8">
            <div className="flex items-center gap-2 pb-4 border-b border-[#EAE5DF]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#BC5259]" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#BC5259]">
                Not Intended For
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-[#BC5259] mt-0.5 shrink-0" />
                <span className="font-serif text-base text-[#55524E]">
                  Teams seeking slide decks to present to external advisors or committees.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-[#BC5259] mt-0.5 shrink-0" />
                <span className="font-serif text-base text-[#55524E]">
                  Cultures that prioritise consensus-building meetings over decisive, clear action.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-[#BC5259] mt-0.5 shrink-0" />
                <span className="font-serif text-base text-[#55524E]">
                  Founders seeking passive advisors who sign off on existing habits.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. CONFIDENTIAL FOUNDER INQUIRY LINE (EXECUTIVE MEMO FORM)                */}
      {/* ========================================================================= */}
      <section id="inquiry" className="py-20 px-6 md:px-12 lg:px-16 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE5DF] shadow-md relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B85028] block mb-2 font-semibold">
              Confidential Preliminary Review
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
              Inquire Regarding The Fractional Operator
            </h2>
            <p className="font-serif text-base text-[#55524E] mt-3">
              I take on a strictly limited number of operational partnerships each quarter to ensure deep presence. Send a short note about where your company stands and the friction you are experiencing.
            </p>
          </div>

          {submitStatus === 'success' ? (
            <div className="bg-[#FAF8F5] border border-emerald-300 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-2">Note Received</h3>
              <p className="font-serif text-base text-[#55524E] max-w-md mx-auto">
                Thank you. Your message is strictly confidential. I personally review every note and will be in touch within 24 to 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field for anti-spam */}
              <input
                type="text"
                name="_hp_company_url"
                value={formData._hp_company_url}
                onChange={handleChange}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#55524E] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Arjun Mehta"
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CEC5] focus:outline-none focus:ring-2 focus:ring-[#E11D74] focus:border-transparent font-serif bg-[#FAF8F5]/50 text-[#111111]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#55524E] mb-2">
                    Direct Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="arjun@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CEC5] focus:outline-none focus:ring-2 focus:ring-[#E11D74] focus:border-transparent font-serif bg-[#FAF8F5]/50 text-[#111111]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#55524E] mb-2">
                    Company / Venture
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name or sector"
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CEC5] focus:outline-none focus:ring-2 focus:ring-[#E11D74] focus:border-transparent font-serif bg-[#FAF8F5]/50 text-[#111111]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#55524E] mb-2">
                    Current Stage / Headcount
                  </label>
                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CEC5] focus:outline-none focus:ring-2 focus:ring-[#E11D74] focus:border-transparent font-serif bg-[#FAF8F5]/50 text-[#111111]"
                  >
                    <option value="Seed (10 to 20 people)">Seed (10 to 20 people)</option>
                    <option value="Post-Seed / Series A (20 to 50 people)">Post-Seed / Series A (20 to 50 people)</option>
                    <option value="Scaling Past 50 People">Scaling Past 50 People</option>
                    <option value="Venture Studio / Fund Evaluation">Venture Studio / Fund Evaluation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#55524E] mb-2">
                  Primary Operational Bottleneck *
                </label>
                <textarea
                  name="bottleneck"
                  required
                  rows={4}
                  value={formData.bottleneck}
                  onChange={handleChange}
                  placeholder="What is slowing execution down right now? Where is the team feeling the most friction?"
                  className="w-full px-4 py-3 rounded-xl border border-[#D5CEC5] focus:outline-none focus:ring-2 focus:ring-[#E11D74] focus:border-transparent font-serif bg-[#FAF8F5]/50 text-[#111111]"
                />
              </div>

              {errorMessage && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 font-serif text-sm">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className="w-full py-4 rounded-xl bg-[#BC5259] hover:bg-[#a6474e] text-white font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{submitStatus === 'submitting' ? 'Submitting...' : 'Submit Confidential Enquiry'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}

        </div>
      </section>

    </div>
  );
}
