"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What was your role and experience at Nitany Grant Writing under owner Lori?",
      a: "I served as Senior Grant Strategist & Proposal Architect at Nitany Grant Writing, collaborating closely with founder and owner Lori. During this tenure, I spearheaded multi-million federal and state proposals (HRSA, NSF, DOL), instituted 12-point RFP compliance review procedures, and helped deliver over $14.2M in direct funding awards for the agency's institutional clientele.",
    },
    {
      q: "Do you accept percentage-based or commission contingency fees on won grants?",
      a: "No. In accordance with the Grant Professionals Association (GPA) Code of Ethics and federal regulations (Uniform Guidance 2 CFR 200), charging percentage fees on grant awards is strictly prohibited. Federal agencies and ethical foundations disqualify organizations that budget commission fees. We operate strictly on transparent, fixed-fee retainer or project structures.",
    },
    {
      q: "What is the recommended runway/timeline for a federal RFP (Grants.gov)?",
      a: "For federal RFPs (such as HRSA, NSF, NIH, SAMHSA, or Department of Education), optimal outcomes require a 60- to 90-day lead time. This allows for deep stakeholder engagement, gathering formal partner MOUs, clinical/academic data extraction, comprehensive OMB line-item budget modeling, and conducting our proprietary simulated red-team peer review prior to early submission.",
    },
    {
      q: "How do you coordinate with our internal executive and program staff?",
      a: "We function as an integrated extension of your leadership team. After an initial 90-minute strategic deconstruction interview, we handle 85%+ of the heavy lifting—from literature reviews to narrative drafting and compliance mapping. Your team provides core operational data and participates in two structured review milestones (the 50% narrative milestone and final red-team review).",
    },
    {
      q: "What happens if a proposal is not funded in its first review cycle?",
      a: "Even for top proposals, federal pay-lines can fluctuate based on congressional appropriations. If a proposal is placed on the alternate list or narrowly misses funding, we guide you through the official agency debrief with the program officer, decode the Summary Statement / reviewer scores, and conduct a priority resubmission that historically yields a 90%+ funding rate on Cycle 2.",
    },
    {
      q: "Can you assist with complex consortium agreements and Negotiated Indirect Cost Rates (NICRA)?",
      a: "Yes. Having designed multi-institution federal budgets for universities, hospital systems, and municipal partnerships, we specialize in sub-recipient monitoring frameworks, cost-match valuations, participant support costs, and applying institutional NICRAs or the 10% de minimis indirect cost rate without friction.",
    },
  ];

  return (
    <section id="faq" className="py-28 relative bg-[#090b10] border-t border-[#d4af37]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gold-badge text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Fiduciary Clarity</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Frequently Asked <span className="gold-gradient-text italic">Questions</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4">
            Essential considerations for institutional executives, board trustees, and advancement directors.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="luxury-card rounded-xl border border-[#d4af37]/20 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                >
                  <span className="font-serif text-lg sm:text-xl text-neutral-100 font-normal">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#d4af37] text-neutral-950" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-white/5 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
