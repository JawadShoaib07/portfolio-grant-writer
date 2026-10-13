"use client";

import React from "react";
import { Compass, BookOpen, Scale, ShieldCheck, Sparkles, Check } from "lucide-react";

export default function Framework() {
  const pillars = [
    {
      step: "01",
      title: "RFP Deconstruction & Funder Intelligence",
      icon: Compass,
      subtitle: "Reverse-engineering the funder's scoring rubric before writing a single sentence.",
      points: [
        "Systematic FOA/NOFO breakdown into a granular 100-point compliance matrix.",
        "Direct program officer inquiry to clarify unwritten review priorities and nuances.",
        "Competitive landscape audit of previously funded abstracts in your domain.",
      ],
    },
    {
      step: "02",
      title: "Narrative Engineering & Logic Architecture",
      icon: BookOpen,
      subtitle: "Compelling, emotionally resonant storytelling grounded in undeniable empirical data.",
      points: [
        "Synthesize Census, CDC, and localized primary data into an urgent Statement of Need.",
        "Design robust 4-tier Logic Models (Inputs, Activities, Outputs, Long-term Outcomes).",
        "Integrate evidence-based interventions (EBIs) backed by peer-reviewed literature.",
      ],
    },
    {
      step: "03",
      title: "Uniform Guidance & Federal Budget Modeling",
      icon: Scale,
      subtitle: "Every line item meticulously justified to eliminate fiscal audit disqualifications.",
      points: [
        "Strict adherence to 2 CFR 200 Uniform Guidance and OMB Circular regulations.",
        "Negotiated Indirect Cost Rate (NICRA) or 10% de minimis maximization.",
        "Non-federal match documentation, personnel FTE formulas, and consortium sub-awards.",
      ],
    },
    {
      step: "04",
      title: "Peer Reviewer Simulation & Red-Team Audit",
      icon: ShieldCheck,
      subtitle: "Subjecting the completed proposal to ruthless internal peer review before final filing.",
      points: [
        "Blind scoring by seasoned grant evaluators using the official federal scoring sheet.",
        "Comprehensive cross-check across all SF-424 forms, attachments, and letters of commitment.",
        "Early final packaging delivered 5 business days prior to deadline for zero-stress submission.",
      ],
    },
  ];

  return (
    <section id="about" className="py-28 relative bg-[#07080b] border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gold-badge text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>The Winning Methodology</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            The 4-Pillar <span className="gold-gradient-text italic">Institutional Blueprint</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 leading-relaxed">
            Grants are not won on hope—they are won on architectural precision. Developed across dozens of multi-million federal cycles and refined alongside <span className="text-[#faeed1]">Nitany Grant Writing</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="luxury-card luxury-card-hover rounded-2xl p-7 border border-[#d4af37]/20 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-2xl font-light text-[#d4af37]/60 group-hover:text-[#d4af37] transition-colors">
                      {p.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-medium text-white mb-2 leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                    {p.subtitle}
                  </p>

                  <ul className="space-y-3 pt-4 border-t border-white/5 text-xs text-neutral-300">
                    {p.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] mt-0.5 shrink-0" />
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
