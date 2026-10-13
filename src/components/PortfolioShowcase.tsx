"use client";

import React, { useState } from "react";
import { Filter, Award, ExternalLink, CheckCircle2, ChevronRight, X, Sparkles, Building, BookmarkCheck } from "lucide-react";

interface GrantCase {
  id: string;
  title: string;
  agency: string;
  category: "federal" | "foundation" | "health" | "stem";
  amount: string;
  score: string;
  year: string;
  tenureNote: string;
  executiveSummary: string;
  strategyHighlights: string[];
  budgetArchitecture: string;
}

export default function PortfolioShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedCase, setSelectedCase] = useState<GrantCase | null>(null);

  const cases: GrantCase[] = [
    {
      id: "case-1",
      title: "HRSA Rural Health Care Services Outreach Grant",
      agency: "U.S. Department of Health & Human Services (Federal)",
      category: "health",
      amount: "$3,850,000",
      score: "99 / 100 Peer Review Score",
      year: "2023 - 2024",
      tenureNote: "Secured via Nitany Grant Writing Partnership with Lori",
      executiveSummary: "Multi-jurisdictional initiative establishing 4 mobile maternal health units across underserved Appalachian counties, providing clinical prenatal care to 8,500+ uninsured families.",
      strategyHighlights: [
        "Synthesized 10 years of CDC and state epidemiological data into an urgent, unassailable statement of need.",
        "Formulated a rigorous 4-phase Logic Model integrating continuous quality improvement (CQI).",
        "Negotiated 14 inter-agency MOUs with regional medical centers and county health departments.",
      ],
      budgetArchitecture: "Detailed 5-year federal SF-424A budget, negotiated indirect cost rate (NICRA) optimization, $0 unallowable cost adjustments.",
    },
    {
      id: "case-2",
      title: "National Science Foundation (NSF) Advanced STEM Equity",
      agency: "National Science Foundation (Federal Directorate)",
      category: "stem",
      amount: "$2,400,000",
      score: "Unanimous 'High Priority' Rating",
      year: "2023",
      tenureNote: "Secured via Nitany Grant Writing with Founder Lori",
      executiveSummary: "Institutional transformation grant expanding undergraduate research apprenticeships for underrepresented scholars in quantum computing and biotechnology.",
      strategyHighlights: [
        "Crafted a 15-page Project Description adhering strictly to NSF PAPPG guidelines.",
        "Integrated dual evaluation framework: quantitative retention tracking and qualitative scholar mentorship ethnography.",
        "Designed institutional commitment letter matrix signed by University Provost and 6 Department Chairs.",
      ],
      budgetArchitecture: "Participant support costs separated according to 2 CFR 200 federal standards with full tuition remission justification.",
    },
    {
      id: "case-3",
      title: "Robert Wood Johnson Health Equity Capital Endowment",
      agency: "Robert Wood Johnson Foundation (National Philanthropy)",
      category: "foundation",
      amount: "$1,850,000",
      score: "Ranked #1 in Cohort Selection",
      year: "2024",
      tenureNote: "Direct Retainer Engagement",
      executiveSummary: "Systemic policy initiative addressing social determinants of health (SDOH) through municipal food sovereignty and preventive nutritional clinics.",
      strategyHighlights: [
        "Authored evocative 3-page Concept Note that secured immediate invitation to full proposal submission.",
        "Structured narrative around restorative community wealth-building models.",
        "Developed dynamic stakeholder advisory board charter with living wage compensation.",
      ],
      budgetArchitecture: "Multi-year programmatic funding with direct community stipends and zero overhead contention.",
    },
    {
      id: "case-4",
      title: "SAMHSA Substance Use Treatment & Recovery Network",
      agency: "Substance Abuse and Mental Health Services Administration",
      category: "federal",
      amount: "$4,250,000",
      score: "98 / 100 Peer Review",
      year: "2023",
      tenureNote: "Direct Federal Flagship Submission",
      executiveSummary: "Comprehensive 5-year integrated behavioral health expansion for dual-diagnosis outpatient services, serving over 3,200 individuals annually.",
      strategyHighlights: [
        "Mapped trauma-informed evidence-based practices (EBPs) directly to SAMHSA clinical requirements.",
        "Created an airtight Government Performance and Results Act (GPRA) data collection protocol.",
        "Established peer recovery specialist integration workflows with hospital emergency departments.",
      ],
      budgetArchitecture: "Comprehensive line-item justification for clinical staffing, telehealth software, and federal financial reporting.",
    },
    {
      id: "case-5",
      title: "Clean Energy & Climate Resiliency Demonstration",
      agency: "Department of Energy (DOE) Clean Communities Fund",
      category: "stem",
      amount: "$5,100,000",
      score: "Top Tier Merit Award",
      year: "2024",
      tenureNote: "Direct Retainer Engagement",
      executiveSummary: "Micro-grid solar installation and workforce training for municipal public housing facilities, delivering 40% utility cost reductions.",
      strategyHighlights: [
        "Engineered Community Benefits Plan (CBP) representing 20% of total application scoring criteria.",
        "Facilitated union labor project agreements (PLAs) and apprentice training milestones.",
        "Secured match funding commitments from private philanthropic syndicates.",
      ],
      budgetArchitecture: "Cost-share calculation verified under 10 CFR 600 regulations with non-federal in-kind valuation ledger.",
    },
    {
      id: "case-6",
      title: "Mellon Foundation Arts & Humanities Preservation",
      agency: "The Andrew W. Mellon Foundation",
      category: "foundation",
      amount: "$950,000",
      score: "Approved Without Revisions",
      year: "2023",
      tenureNote: "Secured in collaboration with Nitany Grant Writing",
      executiveSummary: "Digitization and public archive access for historic civil rights oral histories and rare cultural audio recordings.",
      strategyHighlights: [
        "Constructed scholarly yet deeply human narrative celebrating marginalized historical narratives.",
        "Formulated open-access digital preservation protocol with leading university library systems.",
        "Integrated public humanities lecture and high school curriculum modules.",
      ],
      budgetArchitecture: "Digital archiving technology procurement, archival curator fellowships, and open-source platform hosting.",
    },
  ];

  const filteredCases = activeCategory === "all"
    ? cases
    : cases.filter((c) => c.category === activeCategory);

  return (
    <section id="portfolio" className="py-28 relative bg-[#07080b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gold-badge text-xs uppercase tracking-[0.2em] font-semibold mb-4">
              <Award className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Proven Track Record & Case Archives</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
              Funded Proposals & <span className="gold-gradient-text italic">Award Portfolios</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-3">
              Explore documented grants secured across federal agencies, national philanthropies, and in partnership with <span className="text-[#faeed1]">Nitany Grant Writing (Lori)</span>.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
            {[
              { id: "all", label: "All Proposals" },
              { id: "federal", label: "Federal RFPs" },
              { id: "health", label: "Healthcare & Human Services" },
              { id: "stem", label: "STEM & Higher Ed" },
              { id: "foundation", label: "Private Foundations" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-[#d4af37] text-neutral-950 font-semibold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Case Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="luxury-card luxury-card-hover rounded-2xl p-7 border border-[#d4af37]/20 flex flex-col justify-between relative group cursor-pointer"
              onClick={() => setSelectedCase(item)}
            >
              <div>
                {/* Agency & Affiliation */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className="text-[10px] uppercase font-semibold text-[#d4af37] tracking-wider px-2.5 py-1 rounded-md bg-[#d4af37]/10 border border-[#d4af37]/20">
                    {item.year}
                  </span>
                  <span className="text-[11px] text-neutral-400 font-mono">
                    {item.score}
                  </span>
                </div>

                <div className="text-xs text-neutral-400 mb-1 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span className="truncate">{item.agency}</span>
                </div>

                <h3 className="font-serif text-xl font-medium text-white group-hover:text-[#faeed1] transition-colors mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4 line-clamp-3">
                  {item.executiveSummary}
                </p>

                {item.tenureNote && (
                  <div className="p-2 rounded-lg bg-neutral-900/60 border border-neutral-800 text-[11px] text-[#faeed1] flex items-center gap-2 mb-4">
                    <BookmarkCheck className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span className="truncate">{item.tenureNote}</span>
                  </div>
                )}
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-auto">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                    Award Amount
                  </span>
                  <span className="font-serif text-2xl font-normal gold-gradient-text">
                    {item.amount}
                  </span>
                </div>

                <button
                  type="button"
                  className="w-9 h-9 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-neutral-950 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-Depth Case Review */}
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="luxury-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#d4af37]/40 relative">
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs uppercase font-semibold text-[#d4af37] tracking-wider px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 inline-block mb-3">
                  {selectedCase.agency}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-2">
                  {selectedCase.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 mt-2">
                  <span className="font-serif text-2xl text-[#faeed1] font-semibold">
                    {selectedCase.amount}
                  </span>
                  <span>•</span>
                  <span className="text-[#d4af37] font-semibold">{selectedCase.score}</span>
                  <span>•</span>
                  <span>Cycle {selectedCase.year}</span>
                </div>
              </div>

              {selectedCase.tenureNote && (
                <div className="p-3 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs text-[#faeed1] mb-6 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span><strong>Agency Tenure:</strong> {selectedCase.tenureNote}</span>
                </div>
              )}

              <div className="space-y-6 text-sm">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Executive Summary & Project Mission
                  </h4>
                  <p className="text-neutral-300 leading-relaxed">
                    {selectedCase.executiveSummary}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#d4af37] mb-3">
                    Narrative Engineering & Win Strategies
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedCase.strategyHighlights.map((strat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-0.5 shrink-0" />
                        <span>{strat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Budget Architecture & Compliance
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {selectedCase.budgetArchitecture}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  Detailed peer reviewer debrief available under NDA
                </span>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="gold-button px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  Close Blueprint
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
