import React, { useState } from "react";
import { ArrowLeft, Check, Send, ShieldCheck, X } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvkzbwak";

export default function PillarEIRPage({ onNavigate, isDark }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fund: "",
    rhythm: "Immediate (Next 2 to 4 weeks)",
    thesis: "",
    _hp_company_url: ""
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._hp_company_url) return;

    setSubmitStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          source: "Pillar 02 - Entrepreneur in Residence (EIR)",
          name: formData.name,
          email: formData.email,
          fund_or_studio: formData.fund,
          collaboration_rhythm: formData.rhythm,
          thesis_or_opportunity: formData.thesis
        })
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          fund: "",
          rhythm: "Immediate (Next 2 to 4 weeks)",
          thesis: "",
          _hp_company_url: ""
        });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "Unable to submit enquiry right now. Please try again or reach out directly.");
        setSubmitStatus("error");
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your connection and try again.");
      setSubmitStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A1A] font-serif selection:bg-[#5B3DF5]/20 selection:text-[#111111]">
      
      {/* 1. ATMOSPHERIC ARCHITECTURAL BANNER (OXFORD NAVY & BLUEPRINT DRAFTING) */}
      <section className="relative w-full bg-[#090E1D] text-white pt-32 pb-24 px-6 md:px-12 lg:px-16 overflow-hidden border-b border-[#1E263D]">
        <div className="absolute inset-0 pointer-events-none flex justify-end overflow-hidden">
          <img
            src="/illustrations/eir-blueprint-dark.png"
            onError={(e) => { e.currentTarget.src = "/work-sketch.jpeg"; }}
            alt="Technical Blueprint & Strategy"
            className="h-full w-auto max-w-none object-contain object-right-bottom filter contrast-125 brightness-110 opacity-80 lg:opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#090E1D] via-[#090E1D]/80 via-40% to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090E1D] via-transparent to-[#090E1D]/50" />
        </div>

        <div className="relative max-w-5xl mx-auto z-10">
          <a href="/advisory" className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-white/60 hover:text-white transition-colors mb-8 group cursor-pointer">
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Advisory Overview</span>
          </a>

          <div className="flex items-center gap-2.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#5B3DF5] animate-pulse" />
            <span className="font-mono text-xs tracking-widest uppercase text-white/70">
              Venture Studio & Fund Partnership • Pillar 02
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
            Entrepreneur in <span className="italic font-normal font-serif text-[#818CF8]">Residence</span>.
          </h1>

          <p className="font-serif text-xl sm:text-2xl text-white/80 max-w-2xl leading-relaxed mb-10">
            Category creation, early validation, and building capital-efficient operating blueprints before scale capital is deployed.
          </p>

          <div className="bg-[#0E152B]/85 backdrop-blur-md border-l-2 border-[#818CF8] p-6 max-w-2xl rounded-r-xl shadow-lg">
            <p className="font-serif italic text-lg text-white/90 leading-relaxed">
              &ldquo;The most expensive mistake in venture building is scaling an idea before validating the underlying customer pain.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 2. OPERATOR PROOF RIBBON */}
      

      {/* 3. GROUND TRUTH & PHILOSOPHY */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="md:col-span-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#5B3DF5] block mb-3 font-semibold">
              01 / The Real Cost of Assumptions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mb-6 leading-snug">
              The pitch deck versus customer ground truth.
            </h2>
            <div className="font-serif text-lg text-[#2B2927] leading-relaxed space-y-4">
              <p>
                In early venture building, slide decks can make almost any business model appear compelling. Spreadsheets calculate addressable markets in the billions, and prototypes look dazzling in pitch meetings. But once institutional capital is committed, companies often discover that polite enthusiasm does not translate into willingness to pay.
              </p>
              <p>
                Founders frequently burn precious runway building complex delivery systems before validating basic ground truths: unit margins, distribution friction, and real-world compliance. By the time the flaw is discovered, the venture is too heavy to pivot cleanly.
              </p>
            </div>
          </div>

          <div className="md:col-span-6 md:border-l md:border-[#EAE5DF] md:pl-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#5B3DF5] block mb-3 font-semibold">
              02 / The Operating Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#111111] mb-6 leading-snug">
              Battle-tested operator scrutiny.
            </h2>
            <div className="font-serif text-lg text-[#2B2927] leading-relaxed space-y-4">
              <p>
                Having created an entirely new utility sub-metering category in India, unlocked institutional funding from Macquarie, and navigated difficult supply chains and regulatory frameworks, I partner with venture studios and funds to pressure-test concepts before scale capital is deployed.
              </p>
              <p>
                We do not rely on theoretical frameworks. We conduct field validation, test customer unit economics, inspect real operational dependencies, and build lean execution architectures. This ensures every dollar deployed is grounded in verified customer reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TANGIBLE DELIVERABLES */}
      <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-16 border-y border-[#EAE5DF]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-widest text-[#5B3DF5] block mb-2 font-semibold">
              03 / Tangible Deliverables
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#111111]">
              What we validate and architect together.
            </h2>
            <p className="font-serif text-xl text-[#55524E] mt-3 max-w-2xl">
              Concrete de-risking frameworks installed before writing institutional cheques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="border-t-2 border-[#111111] pt-6">
              <span className="font-mono text-xs font-bold text-[#5B3DF5] tracking-widest block mb-2">
                DELIVERABLE 01
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-3">
                Customer Problem Validation
              </h3>
              <p className="font-serif text-base text-[#44403C] leading-relaxed">
                Direct interviews and pilots with target buyers to determine genuine willingness to pay, separating polite feedback from urgent commercial demand before building.
              </p>
            </div>

            <div className="border-t-2 border-[#111111] pt-6">
              <span className="font-mono text-xs font-bold text-[#5B3DF5] tracking-widest block mb-2">
                DELIVERABLE 02
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-3">
                Category Creation Stress-Testing
              </h3>
              <p className="font-serif text-base text-[#44403C] leading-relaxed">
                Rigorous analysis of regulatory hurdles, supply chains, hardware/software interfaces, and pricing defensibility against incumbents.
              </p>
            </div>

            <div className="border-t-2 border-[#111111] pt-6">
              <span className="font-mono text-xs font-bold text-[#5B3DF5] tracking-widest block mb-2">
                DELIVERABLE 03
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-3">
                Lean Operating Architecture
              </h3>
              <p className="font-serif text-base text-[#44403C] leading-relaxed">
                Designing capital-efficient 0-to-1 operational roadmaps, milestone criteria, and early team profiles that prioritise speed over headcounts.
              </p>
            </div>

            <div className="border-t-2 border-[#111111] pt-6">
              <span className="font-mono text-xs font-bold text-[#5B3DF5] tracking-widest block mb-2">
                DELIVERABLE 04
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-3">
                Frank Committee Reports
              </h3>
              <p className="font-serif text-base text-[#44403C] leading-relaxed">
                Unvarnished evaluation memos for investment committees, providing realistic risk assessments, unit economics projections, and clear go/no-go verdicts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FIT MATRIX */}
      <section className="py-20 px-6 md:px-12 lg:px-16 max-w-5xl mx-auto">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#5B3DF5] block mb-2 font-semibold">
            04 / Studio & Fund Fit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
            Where this collaboration generates high return.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl p-8 sm:p-10 border border-[#EAE5DF] shadow-sm">
          <div className="space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[#EAE5DF]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-800">
                Best Suited For
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <span className="font-serif text-base text-[#2B2927]">
                  Venture studios incubating complex physical-digital or operational models.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <span className="font-serif text-base text-[#2B2927]">
                  Early-stage funds needing seasoned operator due diligence on founders.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                <span className="font-serif text-base text-[#2B2927]">
                  Family offices seeking pragmatic validation before writing cheques.
                </span>
              </li>
            </ul>
          </div>

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
                  Pure speculative trend investing without underlying unit economics.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-[#BC5259] mt-0.5 shrink-0" />
                <span className="font-serif text-base text-[#55524E]">
                  Programmes looking for high-volume academic lectures rather than field work.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-[#BC5259] mt-0.5 shrink-0" />
                <span className="font-serif text-base text-[#55524E]">
                  Teams seeking validation for preconceived narratives without open enquiry.
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
            <span className="font-mono text-xs uppercase tracking-widest text-[#5B3DF5] block mb-2 font-semibold">
              Start An Honest Conversation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
              Explore an EIR or Studio Collaboration
            </h2>
            <p className="font-serif text-base text-[#55524E] mt-3">
              If your studio or fund is preparing to incubate a venture or stress-test an existing thesis, let us discuss how a structured EIR engagement can protect capital and accelerate ground truth.
            </p>
          </div>

          {submitStatus === "success" ? (
            <div className="bg-[#FAF8F5] border border-emerald-300 rounded-2xl p-8 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#111111] mb-2">Enquiry Received</h3>
              <p className="font-serif text-base text-[#55524E] max-w-md mx-auto">
                Thank you. Your enquiry remains strictly confidential. I review every submission personally and will respond within 24 to 48 hours.
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
                    placeholder="e.g. Vikram Singhal"
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CEC5] focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] focus:border-transparent font-serif bg-[#FAF8F5]/50 text-[#111111]"
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
                    placeholder="vikram@venturefund.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CEC5] focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] focus:border-transparent font-serif bg-[#FAF8F5]/50 text-[#111111]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#55524E] mb-2">
                    Fund / Studio Name
                  </label>
                  <input
                    type="text"
                    name="fund"
                    value={formData.fund}
                    onChange={handleChange}
                    placeholder="Fund or studio name"
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CEC5] focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] focus:border-transparent font-serif bg-[#FAF8F5]/50 text-[#111111]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#55524E] mb-2">
                    Collaboration Rhythm
                  </label>
                  <select
                    name="rhythm"
                    value={formData.rhythm}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#D5CEC5] focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] focus:border-transparent font-serif bg-[#FAF8F5]/50 text-[#111111]"
                  >
                    <option value="Immediate (Next 2 to 4 weeks)">Immediate (Next 2 to 4 weeks)</option>
                    <option value="Upcoming Quarter">Upcoming Quarter</option>
                    <option value="Exploratory Due Diligence">Exploratory Due Diligence</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-[#55524E] mb-2">
                  Thesis or Opportunity Under Review *
                </label>
                <textarea
                  name="thesis"
                  required
                  rows={4}
                  value={formData.thesis}
                  onChange={handleChange}
                  placeholder="Briefly describe the category, business model, or operational bottleneck under review."
                  className="w-full px-4 py-3 rounded-xl border border-[#D5CEC5] focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] focus:border-transparent font-serif bg-[#FAF8F5]/50 text-[#111111]"
                />
              </div>

              {errorMessage && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 font-serif text-sm">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={submitStatus === "submitting"}
                className="w-full py-4 rounded-xl bg-[#5B3DF5] hover:bg-[#482ee0] text-white font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{submitStatus === "submitting" ? "Submitting..." : "Submit Confidential Enquiry"}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
