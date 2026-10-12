// src/components/PillarConfidantPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, Compass, ShieldCheck, Sparkles, Send, HeartHandshake, Eye, MessageSquare, Shield } from 'lucide-react';

export default function PillarConfidantPage({ onNavigate, isDark }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const formLoadedAt = useRef(Date.now());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    venture: '',
    stage: 'High-Growth / Venture-Backed',
    advisoryMode: 'A Ben to Your Jules',
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
      advisoryMode: 'A Ben to Your Jules (Founder Confidant)',
      timeline: formData.timeline,
      bottleneck: formData.bottleneck,
      _subject: 'Advisory Enquiry: Ben to Jules - ' + formData.name,
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
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#BC5259]" />
          Back to Advisory Overview
        </button>

        {/* Hero Section */}
        <div className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 md:p-12 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE4EC] dark:bg-[#BC5259]/20 text-[#BC5259] text-xs font-mono tracking-widest uppercase mb-6">
            <HeartHandshake className="w-3.5 h-3.5" />
            Confidential Founder Advisory · Pillar 03
          </div>

          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-ink-950 dark:text-white mb-4">
            A Ben to Your Jules
          </h1>

          <p className="text-lg md:text-xl text-[#475569] dark:text-[#94A3B8] font-serif italic mb-8 max-w-3xl">
            A calm, ego-free veteran in your corner when the founder's seat gets noisy.
          </p>

          <div className="border-l-2 border-[#BC5259] pl-6 py-2 bg-[#F8FAFC] dark:bg-[#162342]/40 rounded-r-xl">
            <p className="font-serif text-base md:text-lg text-ink-900 dark:text-gray-200 leading-relaxed">
              "The founder's chair is fundamentally lonely. You do not need another person giving you homework."
            </p>
          </div>
        </div>

        {/* Section 1: The Why */}
        <div className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 md:p-12 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#BC5259] font-semibold block mb-2">
            01 / The Solitude of Leadership
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-950 dark:text-white mb-6">
            Where Can A Founder Speak Freely?
          </h2>
          <div className="space-y-4 text-base text-[#334155] dark:text-[#CBD5E1] leading-relaxed">
            <p>
              When stakes are high, high-agency founders face an impossible bind. You cannot voice your deepest doubts, co-founder frictions, or acute fatigue to your board without risking their confidence. You cannot voice them to your employees without triggering panic.
            </p>
            <p>
              Most executive coaches bring rigid corporate frameworks, and most advisors offer superficial cheerleading or demand equity for introductions. You do not need someone giving you more tasks. You need a trusted confidant: someone who has navigated venture backing, executive pressure, and near-fatal crises, who can listen without judgement and offer quiet, unvarnished perspective.
            </p>
          </div>
        </div>

        {/* Section 2: The How */}
        <div className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 md:p-12 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#BC5259] font-semibold block mb-2">
            02 / The Operating Philosophy
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-950 dark:text-white mb-6">
            Ego-Free Presence & Lakhnawi Dignity
          </h2>
          <div className="space-y-4 text-base text-[#334155] dark:text-[#CBD5E1] leading-relaxed">
            <p>
              Like Robert De Niro in <em>The Intern</em>, this is the gift of a calm veteran in your corner. Someone who has raised institutional venture capital, survived being pronounced clinically dead, weathered boardroom storms, and exited with honour.
            </p>
            <p>
              I have zero personal ambition to run your business, zero equity clawbacks, and zero tolerance for corporate posturing. We hold private, unvarnished conversations grounded in Lakhnawi courtesy (<em>tehzeeb</em>) and practical wisdom. My role is to protect your sanity, help you separate temporary noise from real existential hazards, and give you the psychological safety to make bold, decisive choices.
            </p>
          </div>
        </div>

        {/* Section 3: The What */}
        <div className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 md:p-12 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#BC5259] font-semibold block mb-2">
            03 / Tangible Deliverables
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-950 dark:text-white mb-8">
            How The Advisory Line Operates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#162342]/40 border border-[#E2E4E8] dark:border-[#1E293B]">
              <div className="w-10 h-10 rounded-xl bg-[#FCE4EC] dark:bg-[#BC5259]/30 flex items-center justify-center text-[#BC5259] mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-ink-950 dark:text-white mb-2">
                Fortnightly 1:1 Advisory Sessions
              </h3>
              <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                Scheduled private video or phone calls dedicated purely to your highest-stakes dilemmas: co-founder dynamics, board tensions, capital strategy, or leadership fatigue.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#162342]/40 border border-[#E2E4E8] dark:border-[#1E293B]">
              <div className="w-10 h-10 rounded-xl bg-[#FCE4EC] dark:bg-[#BC5259]/30 flex items-center justify-center text-[#BC5259] mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-ink-950 dark:text-white mb-2">
                Asynchronous Sounding Board
              </h3>
              <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                Direct private messaging line for sanity checks before tough conversations. Send a quick draft note or voice memo when you need unvarnished feedback before pressing send.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#162342]/40 border border-[#E2E4E8] dark:border-[#1E293B]">
              <div className="w-10 h-10 rounded-xl bg-[#FCE4EC] dark:bg-[#BC5259]/30 flex items-center justify-center text-[#BC5259] mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-ink-950 dark:text-white mb-2">
                Crisis Calibration & Perspective
              </h3>
              <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                When unexpected storms hit: key customer churn, investor friction, or cash bottlenecks, we restore perspective to help you separate acute noise from genuine structural threats.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#162342]/40 border border-[#E2E4E8] dark:border-[#1E293B]">
              <div className="w-10 h-10 rounded-xl bg-[#FCE4EC] dark:bg-[#BC5259]/30 flex items-center justify-center text-[#BC5259] mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-ink-950 dark:text-white mb-2">
                Strict Cap of 2-3 Relationships
              </h3>
              <p className="text-sm text-[#475569] dark:text-[#94A3B8] leading-relaxed">
                This is not an agency model. I limit active advisory relationships strictly to two or three founders concurrently, ensuring real emotional presence and responsiveness.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: Founder Fit */}
        <div className="bg-white dark:bg-[#0F1829] rounded-3xl p-8 md:p-12 border border-[#E2E4E8] dark:border-[#1E293B] shadow-sm mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-[#BC5259] font-semibold block mb-2">
            04 / Founder Fit
          </span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-950 dark:text-white mb-6">
            Who This Is For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-ink-900 dark:text-white text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#BC5259]"></span>
                Built specifically for:
              </h4>
              <ul className="space-y-2 text-sm text-[#475569] dark:text-[#94A3B8]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#BC5259] shrink-0 mt-0.5" />
                  <span>High-agency founders carrying significant venture or operational stakes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#BC5259] shrink-0 mt-0.5" />
                  <span>Leaders navigating complex board politics, co-founder strain, or fatigue.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#BC5259] shrink-0 mt-0.5" />
                  <span>Founders who value radical honesty delivered with warmth and courtesy.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-serif font-bold text-ink-900 dark:text-white text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                Not suited for:
              </h4>
              <ul className="space-y-2 text-sm text-[#475569] dark:text-[#94A3B8]">
                <li className="flex items-start gap-2 text-muted-400">
                  <span className="text-[#BC5259] font-bold">✕</span>
                  <span>Those looking for tactical marketing hacks or investor intro broking.</span>
                </li>
                <li className="flex items-start gap-2 text-muted-400">
                  <span className="text-[#BC5259] font-bold">✕</span>
                  <span>Leaders defensive about their mistakes or seeking validation over truth.</span>
                </li>
                <li className="flex items-start gap-2 text-muted-400">
                  <span className="text-[#BC5259] font-bold">✕</span>
                  <span>Founders who want hands-on operational project management (choose Pillar 01).</span>
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
              Connect With A Confidant
            </h2>
            <p className="text-[#FCE4EC] text-sm mb-8 leading-relaxed">
              If you are carrying heavy founder decisions and need an unhurried, confidential sounding board, send a short note. All notes remain strictly between us.
            </p>

            {submitted ? (
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-center">
                <Sparkles className="w-10 h-10 text-[#FCE4EC] mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold mb-2">Your note has been received.</h3>
                <p className="text-sm text-[#FCE4EC] leading-relaxed">
                  Thank you for reaching out. I will review your background and reach out personally within 48 hours to schedule a confidential preliminary conversation.
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
                      placeholder="Your name"
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
                      placeholder="your.email@domain.com"
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
                      Stage / Team Size
                    </label>
                    <select
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white text-ink-950 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <option value="Seed / Series A">Seed / Series A (10-30 people)</option>
                      <option value="Series B+">Series B+ (30-100+ people)</option>
                      <option value="Growth Stage">Growth Stage / Pre-IPO</option>
                      <option value="Bootstrapped / Profitable">Bootstrapped / Profitable</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/90 mb-1.5">
                    What is on your mind? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.bottleneck}
                    onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                    placeholder="Share where you are feeling friction or what decision you are wrestling with right now."
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
                  {isSubmitting ? 'Sending Note...' : 'Send Confidential Note'}
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
