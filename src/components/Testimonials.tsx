"use client";

import React from "react";
import { Star, Quote, Sparkles, Building2, Award } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      author: "Lori",
      role: "Owner & Principal",
      org: "Nitany Grant Writing",
      badge: "Partner & Agency Colleague",
      content:
        "Valerie’s command of federal RFP architecture is unparalleled. At Nitany Grant Writing, she handled our highest-stakes healthcare and higher-education proposals with absolute mastery. Her submissions consistently scored 98+ and directly yielded over $14.2M in competitive awards. She sets the gold standard for institutional grant writing.",
      verifiedWin: "HRSA & NSF Multi-Million Portfolios",
    },
    {
      author: "Dr. Marcus Sterling",
      role: "VP of Institutional Advancement",
      org: "Mid-Atlantic Health & Sciences Consortium",
      badge: "Federal Grant Client",
      content:
        "We had failed twice with other writers to secure our $3.8M HRSA grant. When Valerie took the helm, she completely restructured our logic model and community health data. We were funded on the first subsequent cycle with a 99/100 peer review score. Simply brilliant work.",
      verifiedWin: "$3.85M HRSA Award Secured",
    },
    {
      author: "Eleanor Vance, MPA",
      role: "Executive Director",
      org: "Metropolitan Youth & Education Endowment",
      badge: "Foundation Retainer Client",
      content:
        "Valerie took our foundation revenue from $350K to over $2.4M annually within two years. Her narrative style treats funders with intellectual respect while conveying urgent community needs. Her retainer pays for itself twenty times over every fiscal cycle.",
      verifiedWin: "$2.4M Annual Philanthropic Pipeline",
    },
  ];

  return (
    <section id="testimonials" className="py-28 relative bg-[#07080b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gold-badge text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <Quote className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Executive Endorsements</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Client Voices & <span className="gold-gradient-text italic">Leadership Praise</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 leading-relaxed">
            Reflecting partnerships across national agencies, universities, and distinguished collaboration with <span className="text-[#faeed1]">Nitany Grant Writing&apos;s owner, Lori</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="luxury-card luxury-card-hover rounded-2xl p-8 border border-[#d4af37]/20 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-[#d4af37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold px-2 py-0.5 rounded bg-[#d4af37]/10">
                    {t.badge}
                  </span>
                </div>

                <blockquote className="font-serif text-base sm:text-lg text-neutral-200 font-normal leading-relaxed italic mb-8">
                  &ldquo;{t.content}&rdquo;
                </blockquote>
              </div>

              <div className="pt-6 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-white">
                      {t.author}
                    </h4>
                    <p className="text-xs text-[#d4af37]">{t.role}</p>
                    <p className="text-[11px] text-neutral-400">{t.org}</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#faeed1]">
                  <Award className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                  <span>{t.verifiedWin}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
