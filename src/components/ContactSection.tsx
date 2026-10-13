"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Sparkles, Clock, ShieldCheck } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    opportunityType: "Federal RFP ($1M+)",
    fundingGoal: "$1,000,000 - $3,000,000",
    deadline: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-28 relative bg-[#07080b]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4af37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full gold-badge text-xs uppercase tracking-[0.2em] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Confidential Engagement Intake</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Initiate a <span className="gold-gradient-text italic">Proposal Consultation</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 leading-relaxed">
            Due to the rigorous demands of institutional grant drafting, we reserve client intake to maintain undivided strategic focus. Inquire below to assess mutual fit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Contact Credentials & Details */}
          <div className="lg:col-span-5 luxury-card rounded-2xl p-8 sm:p-10 border border-[#d4af37]/25 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full border border-[#d4af37]/60 flex items-center justify-center bg-[#181a24] text-[#d4af37] text-xl font-serif font-bold">
                  VS
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-white">
                    Valerie Sterling
                  </h3>
                  <p className="text-xs text-[#d4af37] tracking-wider uppercase">
                    Principal Grant Strategist
                  </p>
                  <p className="text-[11px] text-neutral-400">
                    Former Lead Specialist with Lori at Nitany Grant Writing
                  </p>
                </div>
              </div>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase tracking-widest block font-medium">
                      Confidential Advisory Inquiries
                    </span>
                    <a
                      href="mailto:inquiries@sterlinggrantstrategy.com"
                      className="text-white hover:text-[#faeed1] font-mono text-xs transition-colors"
                    >
                      inquiries@sterlinggrantstrategy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase tracking-widest block font-medium">
                      Executive Telephone
                    </span>
                    <a
                      href="tel:+12025550189"
                      className="text-white hover:text-[#faeed1] font-mono text-xs transition-colors"
                    >
                      +1 (202) 555-0189 (By Appointment)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase tracking-widest block font-medium">
                      Practice Locations
                    </span>
                    <p className="text-white text-xs">
                      Washington, D.C. Corridor & National Remote Retainers
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-neutral-400 uppercase tracking-widest block font-medium">
                      Intake Response Time
                    </span>
                    <p className="text-white text-xs">
                      Confidential preliminary review within 24 business hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 mt-8">
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-300 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0" />
                <span>
                  All inquiries protected under strict NDA and Grant Professionals Association (GPA) fiduciary ethics.
                </span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Intake Form */}
          <div className="lg:col-span-7 luxury-card rounded-2xl p-8 sm:p-10 border border-[#d4af37]/30">
            {submitted ? (
              <div className="py-16 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/15 border border-[#d4af37] flex items-center justify-center text-[#d4af37] mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white">
                  Intake Received with Distinction
                </h3>
                <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. We have received your submission regarding{" "}
                  <strong className="text-[#faeed1]">{formData.organization || "your organization"}</strong>. Our office will conduct a preliminary RFP alignment audit and follow up within 24 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        organization: "",
                        phone: "",
                        opportunityType: "Federal RFP ($1M+)",
                        fundingGoal: "$1,000,000 - $3,000,000",
                        deadline: "",
                        details: "",
                      });
                    }}
                    className="gold-button-outline px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Dr. Arthur Kingsley"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-700/80 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1.5">
                      Institutional Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="e.g. a.kingsley@institute.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-700/80 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1.5">
                      Organization / Agency Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Hope Healthcare Network"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-700/80 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1.5">
                      Direct Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-700/80 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1.5">
                      Target Grant Track *
                    </label>
                    <select
                      value={formData.opportunityType}
                      onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700/80 text-white text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                    >
                      <option value="Federal RFP ($1M+)">Federal Flagship RFP ($1M - $5M+)</option>
                      <option value="State Agency Initiative">State Agency / Departmental Grant</option>
                      <option value="Foundation Retainer">Private Foundation Retainer</option>
                      <option value="VIP Red Team Audit">VIP Proposal Audit & Red Team Review</option>
                      <option value="Nitany Collaboration Inquiry">Nitany Grant Writing Related Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1.5">
                      Target Funding Goal
                    </label>
                    <select
                      value={formData.fundingGoal}
                      onChange={(e) => setFormData({ ...formData, fundingGoal: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700/80 text-white text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                    >
                      <option value="$250,000 - $750,000">$250,000 - $750,000</option>
                      <option value="$1,000,000 - $3,000,000">$1,000,000 - $3,000,000</option>
                      <option value="$3,000,000 - $5,000,000">$3,000,000 - $5,000,000</option>
                      <option value="$5,000,000+ Institutional">$5,000,000+ Institutional</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1.5">
                    Anticipated Submission Deadline / NOFO Closing Date
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. November 15 (or 'Within 60-90 Days')"
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-700/80 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#d4af37] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-neutral-300 font-medium mb-1.5">
                    Proposal Scope, Agency, or Specific Priorities
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide a brief summary of the target funding agency (e.g. HRSA, NSF, SAMHSA, Private Foundation), core program objectives, and any existing draft status..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-neutral-700/80 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#d4af37] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gold-button w-full py-4 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmitting Proposal Dossier...</span>
                  ) : (
                    <>
                      <span>Transmit Strategic Inquiry</span>
                      <Send className="w-4 h-4 text-neutral-900" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
