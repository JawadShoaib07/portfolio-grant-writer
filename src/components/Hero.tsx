"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Sparkles, FileText, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-mesh-pattern">
      {/* Decorative luxury lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-[#e7c56e]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full gold-badge text-xs uppercase tracking-[0.2em] font-semibold mb-8 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Institutional Grant Architect & Federal Funding Strategist</span>
          </div>

          {/* Majestic Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.12] mb-6">
            Securing <span className="italic font-light gold-gradient-text">Transformational</span>{" "}
            Capital for Ambitious Institutions.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            Over <span className="text-[#faeed1] font-semibold">$48.5M+</span> in competitive federal, foundation, and corporate grant awards won with an <span className="text-[#faeed1] font-semibold">89.4% success rate</span>. Former Lead Grant Specialist at <span className="text-[#faeed1] font-semibold underline decoration-[#d4af37]/50 underline-offset-4">Nitany Grant Writing</span> under founder <span className="text-[#faeed1] font-semibold">Lori</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14">
            <button
              onClick={onOpenConsultation}
              className="gold-button w-full sm:w-auto px-8 py-4 rounded-full text-sm uppercase tracking-wider font-bold flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Schedule Strategy Consultation</span>
              <ArrowRight className="w-4 h-4 text-neutral-900 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#nitany-experience"
              className="gold-button-outline w-full sm:w-auto px-8 py-4 rounded-full text-sm uppercase tracking-wider font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#d4af37]" />
              <span>Nitany Experience & Wins</span>
            </a>

            <a
              href="#calculator"
              className="px-6 py-4 rounded-full text-sm tracking-wide text-neutral-400 hover:text-white transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Grant Readiness Tool</span>
              <span className="text-xs text-[#d4af37]">→</span>
            </a>
          </div>

          {/* Trust credentials badges */}
          <div className="pt-8 border-t border-[#d4af37]/15 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">Grants.gov & SAM.gov</p>
                <p className="text-[11px] text-neutral-400">Federal System Certified</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">HRSA, NIH & NSF</p>
                <p className="text-[11px] text-neutral-400">Multi-Million Agency Wins</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">Nitany Partnership</p>
                <p className="text-[11px] text-neutral-400">Vetted with Founder Lori</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0" />
              <div>
                <p className="text-xs font-semibold text-white">GPA Ethical Code</p>
                <p className="text-[11px] text-neutral-400">Zero Audit Discrepancies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
