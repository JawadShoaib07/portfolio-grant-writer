"use client";

import React, { useState, useId } from "react";
import { Calculator, Sparkles, CheckCircle, ArrowRight, ShieldAlert, Award } from "lucide-react";

interface GrantCalculatorProps {
  onOpenConsultation: () => void;
}

export default function GrantCalculator({ onOpenConsultation }: GrantCalculatorProps) {
  const [orgType, setOrgType] = useState<string>("nonprofit");
  const [budgetTier, setBudgetTier] = useState<string>("mid");
  const [targetFunder, setTargetFunder] = useState<string>("federal");
  const [auditStatus, setAuditStatus] = useState<string>("cpa");

  // Calculate readiness score and target funding range dynamically
  const calculateResults = () => {
    let baseScore = 65;
    let minFunding = 250000;
    let maxFunding = 750000;
    let track = "Foundation & State Strategy";

    // Org Type adjustments
    if (orgType === "health" || orgType === "highered") {
      baseScore += 12;
      minFunding = 1200000;
      maxFunding = 4500000;
    } else if (orgType === "nonprofit") {
      baseScore += 8;
      minFunding = 500000;
      maxFunding = 2000000;
    } else if (orgType === "tribal") {
      baseScore += 15;
      minFunding = 1000000;
      maxFunding = 3500000;
    }

    // Budget Tier adjustments
    if (budgetTier === "enterprise") {
      baseScore += 12;
      minFunding = Math.round(minFunding * 1.8);
      maxFunding = Math.round(maxFunding * 2.2);
    } else if (budgetTier === "large") {
      baseScore += 8;
      minFunding = Math.round(minFunding * 1.3);
      maxFunding = Math.round(maxFunding * 1.5);
    } else if (budgetTier === "seed") {
      baseScore -= 10;
      minFunding = 100000;
      maxFunding = 450000;
    }

    // Audit status
    if (auditStatus === "cpa") {
      baseScore += 10;
    } else if (auditStatus === "progress") {
      baseScore -= 5;
    } else {
      baseScore -= 12;
    }

    // Funder target
    if (targetFunder === "federal") {
      track = "Multi-Year Federal RFP Flagship (HRSA / NSF / SAMHSA / NIH)";
    } else if (targetFunder === "state") {
      track = "State Agency & Departmental Consortium Initiative";
    } else if (targetFunder === "foundation") {
      track = "High-Net-Worth Family & Institutional Foundation Portfolio";
    } else {
      track = "Corporate ESG & Catalytic Partnership Campaign";
    }

    const finalScore = Math.min(Math.max(baseScore, 48), 98);

    const formatCurrency = (val: number) => {
      if (val >= 1000000) {
        return `$${(val / 1000000).toFixed(1)}M`;
      }
      return `$${(val / 1000).toFixed(0)}K`;
    };

    return {
      score: finalScore,
      range: `${formatCurrency(minFunding)} – ${formatCurrency(maxFunding)}`,
      track,
    };
  };

  const results = calculateResults();

  return (
    <section id="calculator" className="py-28 relative bg-[#090b10] border-t border-[#d4af37]/15">
      {/* Background ambient gold */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gold-badge text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Interactive Feasibility Diagnostic</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Grant Readiness & <span className="gold-gradient-text italic">Capital Estimator</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 leading-relaxed">
            Evaluate your institutional grant competitiveness, projected federal award capacity, and optimal strategy framework before investing in proposal preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Inputs Section */}
          <div className="lg:col-span-7 luxury-card rounded-2xl p-6 sm:p-10 border border-[#d4af37]/25 space-y-7">
            {/* 1. Organization Type */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
                1. Institutional Entity Classification
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "nonprofit", label: "501(c)(3) Nonprofit" },
                  { id: "health", label: "Healthcare / Clinic / FQHC" },
                  { id: "highered", label: "University / Research Inst." },
                  { id: "tribal", label: "Tribal / Municipal Govt." },
                  { id: "social", label: "Social Enterprise" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setOrgType(item.id)}
                    className={`p-3 rounded-xl text-xs text-left transition-all border cursor-pointer ${
                      orgType === item.id
                        ? "bg-[#d4af37]/15 border-[#d4af37] text-white font-medium shadow-sm"
                        : "bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Annual Operating Budget */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
                2. Annual Operating Budget
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: "seed", label: "< $500K" },
                  { id: "mid", label: "$500K – $2.5M" },
                  { id: "large", label: "$2.5M – $10M" },
                  { id: "enterprise", label: "$10M+ Institutional" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBudgetTier(item.id)}
                    className={`p-3 rounded-xl text-xs text-center transition-all border cursor-pointer ${
                      budgetTier === item.id
                        ? "bg-[#d4af37]/15 border-[#d4af37] text-white font-medium"
                        : "bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Target Funder Category */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
                3. Primary Funding Target
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: "federal", label: "Federal Government RFPs ($1M–$5M+)" },
                  { id: "state", label: "State & Regional Agency Grants" },
                  { id: "foundation", label: "Private National Philanthropies" },
                  { id: "corporate", label: "Corporate Social Responsibility (CSR)" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTargetFunder(item.id)}
                    className={`p-3.5 rounded-xl text-xs text-left transition-all border cursor-pointer ${
                      targetFunder === item.id
                        ? "bg-[#d4af37]/15 border-[#d4af37] text-white font-medium"
                        : "bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Financial Audit & Governance */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
                4. Audit & Financial Governance
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "cpa", label: "Full CPA Single Audit (Clean)" },
                  { id: "progress", label: "Independent Review / In Progress" },
                  { id: "internal", label: "Internal Form 990 / Basic" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setAuditStatus(item.id)}
                    className={`p-3 rounded-xl text-xs text-center transition-all border cursor-pointer ${
                      auditStatus === item.id
                        ? "bg-[#d4af37]/15 border-[#d4af37] text-white font-medium"
                        : "bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Display Panel */}
          <div className="lg:col-span-5 luxury-card rounded-2xl p-6 sm:p-10 border border-[#d4af37]/40 flex flex-col justify-between bg-gradient-to-b from-[#131622] via-[#0d0f15] to-[#0a0b0e] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#d4af37]/20">
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-widest block font-medium">
                    Grant Competitiveness
                  </span>
                  <span className="text-xs text-[#faeed1] font-semibold">
                    Peer Review Readiness Index
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-serif text-4xl sm:text-5xl font-light text-white gold-gradient-text">
                    {results.score}
                  </span>
                  <span className="text-xs text-neutral-400 block">/ 100 PTS</span>
                </div>
              </div>

              {/* Score Progress Bar */}
              <div className="w-full bg-neutral-800 h-2 rounded-full my-6 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#e7c56e] to-[#d4af37] h-full transition-all duration-500 rounded-full"
                  style={{ width: `${results.score}%` }}
                />
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 block mb-1">
                    Estimated Target Award Range
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl font-normal text-white gold-gradient-text">
                    {results.range}
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    Based on historical SAM.gov & foundation cohort benchmarks
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800">
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold block mb-1">
                    Recommended Strategic Track
                  </span>
                  <p className="text-xs text-neutral-200 font-medium leading-relaxed">
                    {results.track}
                  </p>
                </div>

                <ul className="text-xs text-neutral-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>Proprietary 12-point compliance pre-screening</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>Peer reviewer simulation scoring & red-team audit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>Federal indirect cost rate (NICRA) optimization</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-[#d4af37]/20 mt-8">
              <button
                onClick={onOpenConsultation}
                className="gold-button w-full py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Detailed Proposal Feasibility Audit</span>
                <ArrowRight className="w-4 h-4 text-neutral-900" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
