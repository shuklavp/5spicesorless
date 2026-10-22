import React, { useState } from 'react';
import { ArrowLeft, Check, Send, ShieldCheck, X } from 'lucide-react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xvkzbwak';

export default function PillarConfidantPage({ onNavigate, isDark }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    stage: 'Seed / Series A (10–30 people)',
    mind: '',
    _hp_company_url: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._hp_company_url) return;

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
          source: 'Pillar 03 - A Ben to Your Jules',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          stage_and_team: formData.stage,
          what_is_on_your_mind: formData.mind
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          stage: 'Seed / Series A (10–30 people)',
          mind: '',
          _hp_company_url: ''
        });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || 'Unable to submit note right now. Please try again or reach out directly.');
        setSubmitStatus('error');
      }
    } catch (err) {
      setErrorMessage('Network error. Please check your connection and try again.');
      setSubmitStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-serif selection:bg-[#BC5259]/20 selection:text-[#111111]">
      
      {/* 1. ATMOSPHERIC ARCHITECTURAL BANNER (HERITAGE MAHOGANY & ARMCHAIR STUDY) */}
      <section className="relative w-full bg-[#180A0C] text-white pt-32 pb-24 px-6 md:px-12 lg:px-16 overflow-hidden border-b border-[#2C1316]">
        <div className="absolute inset-0 pointer-events-none flex justify-end overflow-hidden">
          <img
            src="/illustrations/confidant-study-dark.jpg"
            onError={(e) => { e.currentTarget.src = '/work-sketch.jpeg'; }}
            alt="Private Founder Counsel Study"
            className="h-full w-auto max-w-none object-contain object-right-bottom filter contrast-125 brightness-110 opacity-80 lg:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#180A0C] via-[#180A0C]/80 via-40% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#180A0C] via-transparent to-[#180A0C]/50" />
        </div>

        <div className="relative max-w-5xl mx-auto z-10">
          <button
            onClick={() => onNavigate('/advisory')}
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-white/60 hover:text-white transition-colors mb-8 group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Advisory Overview</span>
          </button>

          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#BC5259] animate-pulse" />
            <span className="font-mono text-xs tracking-widest uppercase text-white/70">
              Confidential Founder Advisory • Pillar 03
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
            A Ben to Your <span className="italic font-normal font-serif text-[#E11D74]">Jules</span>.
          </h1>

          <p className="font-serif text-xl sm:text-2xl text-white/80 max-w-2xl leading-relaxed mb-10">
            A calm, ego-free veteran in your corner when the founder seat gets noisy and the stakes are high.
          </p>

          <div className="bg-[#240F12]/85 backdrop-blur-md border-l-2 border-[#E11D74] p-6 max-w-2xl rounded-r-xl shadow-lg">
            <p className="font-serif italic text-lg text-white/90 leading-relaxed">
              &ldquo;The founder chair is fundamentally lonely. You do not need another person giving you homework.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 2. OPERATOR PROOF RIBBON */}
      <section className="w-full bg-[#200D10] border-b border-[#2C1316] py-5 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-6 font-mono text-xs text-white/70 tracking-wider uppercase">
          <div className="flex items-center gap-2">
            <span className="text-[#E11D74] font-bold">✓</span>
            <span>Surviving Clinical Death</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#E11D74] font-bold">✓</span>
            <span>Zero Equity Clawback</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#E11D74] font-bold">✓</span>
            <span>Strict Cap: 2 to 3 Founders</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#E11D74] font-bold">✓</span>
            <span>Quiet Perspective & Poise</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#E11D74] font-bold">✓</span>
            <span>Quiet, Unvarnished Perspective</span>
          </div>
        </div>
      </section>

      {/* 3. SOLITUDE & PHILOSOPHY */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="md:col-span-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#BC5259] block mb-3 font-semibold">
              01 / The Solitude of Leadership
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mb-6 leading-snug">
              Where can a founder speak freely?
            </h2>
            <div className="font-serif text-lg text-[#2B2927] leading-relaxed space-y-4">
              <p>
                When stakes are high, high-agency founders face an impossible bind. You cannot voice your deepest doubts, co-founder frictions, or acute fatigue to your board without risking their confidence. You cannot voice them to your employees without triggering panic.
              </p>
              <p>
                Most executive coaches bring rigid corporate frameworks, and most advisors offer superficial cheerleading or demand equity for introductions. You do not need someone giving you more tasks. You need a trusted confidant: someone who has navigated venture backing, executive pressure, and near-fatal crises, who can listen without judgement and offer quiet, unvarnished perspective.
              </p>
            </div>
          </div>

          <div className="md:col-span-6 md:border-l md:border-[#EAE5DF] md:pl-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#BC5259] block mb-3 font-semibold">
              02 / The Operating Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mb-6 leading-snug">
              Quiet presence and unvarnished truth.
            </h2>
            <div className="font-serif text-lg text-[#2B2927] leading-relaxed space-y-4">
              <p>
                Like Robert De Niro in The Intern, this is the gift of a calm veteran in your corner. Someone who has raised institutional venture capital, survived being pronounced clinically dead, weathered boardroom storms, and exited with honour.
              </p>
              <p>
                I have zero personal ambition to run your business, zero equity clawbacks, and zero tolerance for corporate posturing. We hold private, unhurried conversations grounded in quiet courtesy and practical wisdom. My role is to protect your sanity, help you separate temporary noise from real existential hazards, and give you the psychological safety to make bold, decisive choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TANGIBLE DELIVERABLES */}
      <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 border-y border-[#EAE5DF]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#BC5259] block mb-2 font-semibold">
              03 / Tangible Deliverables
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#111111]">
              How the advisory line operates.
            </h2>
            <p className="font-serif text-xl text-[#55524E] mt-3 max-w-2xl">
              An unhurried, discreet advisory relationship structured for real emotional clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="border-t-2 border-[#111111] pt-6">
              <span className="font-mono text-xs font-bold text-[#BC5259] tracking-widest block mb-2">
                DELIVERABLE 01
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-3">
                Fortnightly 1:1 Advisory Sessions
              </h3>
              <p className="font-serif text-base text-[#44403C] leading-relaxed">
                Scheduled private video or phone calls dedicated purely to your highest-stakes dilemmas: co-founder dynamics, board tensions, capital strategy, or leadership fatigue.
              </p>
            </div>

            <div className="border-t-2 border-[#111111] pt-6">
              <span className="font-mono text-xs font-bold text-[#BC5259] tracking-widest block mb-2">
                DELIVERABLE 02
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-3">
                Asynchronous Sounding Board
              </h3>
              <p className="font-serif text-base text-[#44403C] leading-relaxed">
                Direct private messaging line for sanity checks before tough conversations. Send a quick draft note or voice memo when you need unvarnished feedback before pressing send.
              </p>
            </div>

            <div className="border-t-2 border-[#111111] pt-6">
              <span className="font-mono text-xs font-bold text-[#BC5259] tracking-widest block mb-2">
                DELIVERABLE 03
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-3">
                Crisis Calibration & Perspective
              </h3>
              <p className="font-serif text-base text-[#44403C] leading-relaxed">
                When unexpected storms hit: key customer churn, investor friction, or cash bottlenecks, we restore perspective to help you separate acute noise from genuine structural threats.
              </p>
            </div>

            <div className="border-t-2 border-[#111111] pt-6">
              <span className="font-mono text-xs font-bold text-[#BC5259] tracking-widest block mb-2">
                DELIVERABLE 04
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-3">
                Strict Cap of 2 to 3 Relationships
              </h3>
              <p className="font-serif text-base text-[#44403C] leading-relaxed">
                This is not an agency model. I limit active advisory relationships strictly to two or three founders concurrently, ensuring real emotional presence and responsiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FIT MATRIX */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#BC5259] block mb-2 font-semibold">
            04 / Founder Fit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
            Who this is built for.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl p-8 sm:p-10 border border-[#EAE5DF] shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[#EAE5DF]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-800">
                Built Specifically For
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <span className="font-serif text-base text-[#2B2927]">
                  High-agency founders carrying significant venture or operational stakes.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <span className="font-serif text-base text-[#2B2927]">
                  Leaders navigating complex board politics, co-founder strain, or fatigue.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <span className="font-serif text-base text-[#2B2927]">
                  Founders who value radical honesty delivered with warmth and courtesy.
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-6 md:border-l md:border-[#EAE5DF] md:pl-8">
            <div className="flex items-center gap-2 pb-4 border-b border-[#EAE5DF]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#BC5259]" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#BC5259]">
                Not Suited For
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-[#BC5259] mt-0.5 shrink-0" />
                <span className="font-serif text-base text-[#55524E]">
                  Those looking for tactical marketing hacks or investor intro broking.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-[#BC5259] mt-0.5 shrink-0" />
                <span className="font-serif text-base text-[#55524E]">
                  Leaders defensive about their mistakes or seeking validation over truth.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-[#BC5259] mt-0.5 shrink-0" />
                <span className="font-serif text-base text-[#55524E]">
                  Founders who want hands-on operational project management (choose Pillar 01).
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. INQUIRY FORM */}
      <section id="inquiry" className="py-20 px-6 md:px-12 lg:px-16 max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EAE5DF] shadow-md relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#BC5259] block mb-2 font-semibold">
              Start An Honest Conversation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
              Connect With A Confidant
            </h2>
            <p className="font-serif text-base text-[#55524E] mt-3">
              If you are carrying heavy founder decisions and need an unhurried, confidential sounding board, send a short note. All notes remain strictly between us.
            </p>
          </div>

          {submitStatus === 'success' ? (
            <div className="bg-[#FAF8F5] border border-emerald-300 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-2">Note Received</h3>
              <p className="font-serif text-base text-[#55524E] max-w-md mx-auto">
                Thank you. Your message is strictly private. I read every note personally and will reply quietly within 24 to 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
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
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CEC5] focus:outline-none focus:ring-2 focus:ring-[#BC5259] focus:border-transparent font-serif bg-[#FAF8F5]/50 text-[#111111]"
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
                    placeholder="your.email@domain.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CEC5] focus:outline-none focus:ring-2 focus:ring-[#BC5259] focus:border-transparent font-serif bg-[#FAF8F5]/50 text-[#111111]"
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
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CEC5] focus:outline-none focus:ring-2 focus:ring-[#BC5259] focus:border-transparent font-serif bg-[#FAF8F5]/50 text-[#111111]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#55524E] mb-2">
                    Stage & Team Size
                  </label>
                  <select
                    name="stage"
                    value={formData.stage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CEC5] focus:outline-none focus:ring-2 focus:ring-[#BC5259] focus:border-transparent font-serif bg-[#FAF8F5]/50 text-[#111111]"
                  >
                    <option value="Seed / Series A (10–30 people)">Seed / Series A (10–30 people)</option>
                    <option value="Series B+ (30–100 people)">Series B+ (30–100 people)</option>
                    <option value="Bootstrapped / Profitable">Bootstrapped / Profitable</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#55524E] mb-2">
                  What is on your mind? *
                </label>
                <textarea
                  name="mind"
                  required
                  rows={4}
                  value={formData.mind}
                  onChange={handleChange}
                  placeholder="Share where you are feeling friction or what decision you are wrestling with right now."
                  className="w-full px-4 py-3 rounded-xl border border-[#D5CEC5] focus:outline-none focus:ring-2 focus:ring-[#BC5259] focus:border-transparent font-serif bg-[#FAF8F5]/50 text-[#111111]"
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
                <span>{submitStatus === 'submitting' ? 'Sending...' : 'Send Confidential Note'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
