"use client";

import React from "react";
import { Check, Sparkles, Shield, ArrowRight, Zap, HelpCircle } from "lucide-react";

interface ServicesPricingProps {
  onOpenConsultation: () => void;
}

export default function ServicesPricing({ onOpenConsultation }: ServicesPricingProps) {
  const tiers = [
    {
      name: "VIP Proposal Audit & Red-Team Rescue",
      eyebrow: "Immediate Diagnostic (10-Day Turnaround)",
      price: "$4,500 – $7,500",
      description: "For teams with an existing draft who require ruthless peer-scoring, compliance gap analysis, and narrative optimization before submission.",
      features: [
        "Blind scoring against official agency RFP rubric",
        "Line-by-line editorial narrative and rhetorical polish",
        "Federal OMB budget and cost-allowability audit",
        "Executive remediation debrief with your leadership team",
        "Guaranteed 72-hour emergency escalation availability",
      ],
      popular: false,
      cta: "Schedule Proposal Audit",
    },
    {
      name: "The Federal Flagship Engagement",
      eyebrow: "Full Soup-to-Nuts Proposal Architecture",
      price: "$12,500 – $24,000",
      description: "Comprehensive end-to-end management for high-stakes federal & multi-million state RFPs (HRSA, NSF, NIH, SAMHSA, DOE, DOL).",
      features: [
        "100% complete narrative formulation and literature synthesis",
        "Four-phase logic models and clinical/educational evaluation metrics",
        "Full SF-424, SF-424A, and agency specific form packaging",
        "Negotiated indirect cost (NICRA) and fringe rate calculation",
        "Pre-submission red team review with zero-compliance assurance",
        "Post-award debrief and reviewer comments translation",
      ],
      popular: true,
      cta: "Reserve Federal Cycle",
    },
    {
      name: "Executive Foundation Retainer",
      eyebrow: "Ongoing Funder Portfolio Management",
      price: "$6,500 / month",
      description: "A continuous pipeline of high-net-worth family, community, and national foundation submissions to build sustainable philanthropic reserves.",
      features: [
        "Strategic prospecting & qualification of 15+ high-affinity funders",
        "2–3 full foundation proposals or LOIs authored per month",
        "Ongoing funder correspondence and relationship cultivation",
        "Annual stewardship and grant impact reporting",
        "Quarterly pipeline briefings with Board of Directors",
      ],
      popular: false,
      cta: "Apply for Retainer",
    },
  ];

  return (
    <section id="services" className="py-28 relative bg-[#090b10] border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gold-badge text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Bespoke Engagement Models</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            High-Stakes <span className="gold-gradient-text italic">Advisory Retainers</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 leading-relaxed">
            Strictly adhering to Grant Professionals Association (GPA) ethical codes. Transparent, fixed-fee institutional agreements ensuring undivided fiduciary focus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                tier.popular
                  ? "luxury-card border-2 border-[#d4af37] shadow-[0_0_35px_rgba(212,175,55,0.18)] scale-[1.02] bg-gradient-to-b from-[#161925] to-[#0c0e14]"
                  : "luxury-card border border-[#d4af37]/20 hover:border-[#d4af37]/40"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#d4af37] text-neutral-950 text-[11px] font-bold tracking-widest uppercase shadow-md">
                  Most Requested Flagship
                </div>
              )}

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#d4af37] font-semibold block mb-2">
                  {tier.eyebrow}
                </span>

                <h3 className="font-serif text-2xl font-normal text-white mb-3">
                  {tier.name}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                  {tier.description}
                </p>

                <div className="py-4 border-y border-white/5 mb-6">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 block mb-1">
                    Investment Range
                  </span>
                  <div className="font-serif text-3xl text-[#faeed1] font-semibold gold-gradient-text">
                    {tier.price}
                  </div>
                  <span className="text-[11px] text-neutral-400">
                    Bespoke quote confirmed after RFP intake
                  </span>
                </div>

                <div className="space-y-3.5 mb-8">
                  <span className="text-xs font-semibold text-neutral-200 uppercase tracking-wider block">
                    Deliverables Included:
                  </span>
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-[#d4af37] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={onOpenConsultation}
                  className={`w-full py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer transition-all ${
                    tier.popular
                      ? "gold-button"
                      : "gold-button-outline"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical statement notice */}
        <div className="mt-12 p-4 rounded-xl bg-neutral-900/40 border border-white/5 text-center max-w-3xl mx-auto">
          <p className="text-xs text-neutral-400">
            <strong className="text-neutral-300">GPA Ethical Standards Pledge:</strong> In compliance with the Grant Professionals Association and federal regulations (2 CFR 200), we do not charge percentage-based contingency fees, protecting your organization from compliance disqualification.
          </p>
        </div>
      </div>
    </section>
  );
}
