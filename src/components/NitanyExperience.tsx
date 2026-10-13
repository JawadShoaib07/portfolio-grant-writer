"use client";

import React, { useState } from "react";
import { Briefcase, Award, Quote, CheckCircle2, Star, Sparkles, Building2, ChevronRight, FileCheck } from "lucide-react";

export default function NitanyExperience() {
  const [activeTab, setActiveTab] = useState<"overview" | "wins" | "endorsement">("overview");

  const nitanyWins = [
    {
      title: "HRSA Rural Health Clinic Infrastructure Grant",
      funder: "U.S. Department of Health & Human Services",
      amount: "$3,850,000",
      year: "2023 - 2024",
      highlight: "Scored 99/100 peer review. Unanimously approved on first submission cycle.",
      scope: "Needs analysis, multi-county clinical logic model, OMB budget justification, stakeholder MOUs.",
    },
    {
      title: "NSF STEM Diversity & Academic Pipeline",
      funder: "National Science Foundation",
      amount: "$2,400,000",
      year: "2023",
      highlight: "Over 350 competitive national applicants. Awarded full requested allocation.",
      scope: "Institutional research synthesis, 15-page project description, evaluation matrix.",
    },
    {
      title: "State Workforce & Healthcare Apprenticeship Initiative",
      funder: "State Department of Labor & Economic Development",
      amount: "$1,650,000",
      year: "2022",
      highlight: "Tri-party consortium funding across hospital networks and community colleges.",
      scope: "Comprehensive workforce economic modeling, partner agreements, performance metrics.",
    },
    {
      title: "Community Behavioral Health Expansion Endowment",
      funder: "Regional Healthcare Foundation",
      amount: "$850,000",
      year: "2022",
      highlight: "Multi-year recurring programmatic grant with 100% renewal rate.",
      scope: "Trauma-informed care framework, sustainability plan, executive budget narrative.",
    },
  ];

  return (
    <section id="nitany-experience" className="py-28 relative overflow-hidden bg-[#0a0b10] border-y border-[#d4af37]/15">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gold-badge text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <Building2 className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Featured Agency Experience & Partnership</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white mb-5">
            Senior Grant Strategist at{" "}
            <span className="gold-gradient-text italic">Nitany Grant Writing</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
            In close collaboration with <span className="text-[#faeed1] font-semibold">Lori</span>, Owner & Principal of Nitany Grant Writing, delivering high-stakes federal, state, and foundation proposals that raised over <span className="text-[#faeed1] font-semibold">$14.2M+</span> for clients nationwide.
          </p>
        </div>

        {/* Feature Grid: Executive Endorsement from Lori & Agency Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column: Prestigious Endorsement Card from Lori */}
          <div className="lg:col-span-7 luxury-card rounded-2xl p-8 sm:p-10 border border-[#d4af37]/30 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-[#d4af37]/10 group-hover:text-[#d4af37]/15 transition-colors">
              <Quote className="w-40 h-40" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex text-[#d4af37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                  ))}
                </div>
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                  Executive Endorsement
                </span>
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl text-neutral-100 font-normal leading-relaxed italic mb-8">
                &ldquo;Working together at Nitany Grant Writing was a definitive milestone for our agency. Valerie brings a rare synthesis of analytical rigor, federal RFP deconstruction, and evocative narrative architecture. Her proposals repeatedly earned flawless 98+ peer scores and generated multimillion-dollar awards for our most discerning partners. If you require absolute institutional excellence, she represents the pinnacle of grant consultancy.&rdquo;
              </blockquote>
            </div>

            <div className="relative z-10 pt-6 border-t border-[#d4af37]/20 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-[#d4af37] bg-gradient-to-tr from-[#1f2330] to-[#2d3345] flex items-center justify-center text-lg font-serif font-bold text-[#faeed1] shadow-lg">
                  L
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-white tracking-wide">
                    Lori
                  </h4>
                  <p className="text-xs text-[#d4af37] font-medium tracking-wider uppercase">
                    Owner & Principal, Nitany Grant Writing
                  </p>
                  <p className="text-[11px] text-neutral-400">
                    National Grant Advisory & Philanthropic Development Firm
                  </p>
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[11px] text-[#faeed1] font-medium flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Verified Professional Endorsement</span>
              </div>
            </div>
          </div>

          {/* Right Column: Roles, Metrics & Responsibilities at Nitany */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="luxury-card rounded-2xl p-7 border border-[#d4af37]/20 flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white font-medium">
                    Tenure & Leadership Scope
                  </h3>
                  <p className="text-xs text-[#d4af37]">Nitany Grant Writing Advisory</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-sm text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-1 shrink-0" />
                  <span>
                    <strong>Lead Author for Multi-Million Federal Portfolios:</strong> Authored federal applications across HRSA, SAMHSA, NSF, and DOL programs.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-1 shrink-0" />
                  <span>
                    <strong>Co-Architected RFP Compliance Systems:</strong> Collaborated directly with owner Lori to establish zero-error audit workflows.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-1 shrink-0" />
                  <span>
                    <strong>Direct Funder Negotiations:</strong> Coordinated debriefings with federal program officers to calibrate subsequent submission cycles.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-1 shrink-0" />
                  <span>
                    <strong>Budget Narrative Precision:</strong> Designed $1M–$5M line-item justifications ensuring 100% unencumbered grant releases.
                  </span>
                </li>
              </ul>
            </div>

            <div className="luxury-card rounded-2xl p-5 border border-[#d4af37]/20 bg-gradient-to-br from-[#12141d] to-[#0c0d12]">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-widest block">
                    Nitany Collective Funding Impact
                  </span>
                  <span className="font-serif text-3xl font-light text-white gold-gradient-text">
                    $14,250,000+
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-neutral-400 uppercase tracking-widest block">
                    Proposal Win Ratio
                  </span>
                  <span className="font-serif text-2xl font-light text-[#faeed1]">
                    91.3% Wins
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Grants Secured under Nitany Grant Writing banner */}
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-serif text-2xl text-white">
                Selected Milestones Secured at <span className="gold-gradient-text italic">Nitany Grant Writing</span>
              </h3>
              <p className="text-xs text-neutral-400">
                Representative high-stakes awards developed under Lori&apos;s leadership
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] font-medium">
              <span>Audited submission records</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {nitanyWins.map((win, idx) => (
              <div
                key={idx}
                className="luxury-card luxury-card-hover rounded-xl p-6 border border-[#d4af37]/20 relative"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold bg-[#d4af37]/10 px-2.5 py-1 rounded-md">
                      {win.year} • {win.funder}
                    </span>
                    <h4 className="font-serif text-lg font-medium text-white mt-2 leading-snug">
                      {win.title}
                    </h4>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-neutral-400 block font-mono">Awarded</span>
                    <span className="font-serif text-xl sm:text-2xl font-normal text-[#faeed1] gold-gradient-text">
                      {win.amount}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-2 text-xs">
                  <p className="text-neutral-300 font-medium flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>{win.highlight}</span>
                  </p>
                  <p className="text-neutral-400 leading-relaxed">
                    <span className="text-neutral-300 font-semibold">Scope of Work:</span> {win.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
