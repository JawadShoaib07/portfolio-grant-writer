"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, CheckCircle2, Sparkles, Send, Shield } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    grantTarget: "Federal HRSA / NSF / NIH RFP",
    datePreference: "This Week",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="luxury-card rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-[#d4af37]/40 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#d4af37]/15 border border-[#d4af37] flex items-center justify-center text-[#d4af37] mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-white">
              Consultation Reserved
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-white">{formData.name}</strong>. A calendar invitation and preliminary RFP prep checklist have been routed to <strong className="text-[#faeed1]">{formData.email}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="gold-button px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full gold-badge text-[11px] uppercase tracking-wider font-semibold mb-2">
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                <span>Executive Strategy Intake</span>
              </div>
              <h3 className="font-serif text-2xl font-normal text-white">
                Schedule VIP Grant Strategy Session
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                45-minute confidential grant readiness assessment & funding roadmap.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block uppercase tracking-wider text-neutral-300 font-medium mb-1">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Dr. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-neutral-300 font-medium mb-1">
                  Institution / Organization *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Apex Health Systems"
                  value={formData.org}
                  onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div>
                <label className="block uppercase tracking-wider text-neutral-300 font-medium mb-1">
                  Direct Email *
                </label>
                <input
                  required
                  type="email"
                  placeholder="e.g. s.jenkins@apexhealth.org"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block uppercase tracking-wider text-neutral-300 font-medium mb-1">
                    Grant Program
                  </label>
                  <select
                    value={formData.grantTarget}
                    onChange={(e) => setFormData({ ...formData, grantTarget: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="Federal HRSA / NSF / NIH RFP">Federal RFP ($1M+)</option>
                    <option value="State Agency Grant">State Department RFP</option>
                    <option value="Foundation Pipeline">Foundation Retainer</option>
                    <option value="Proposal Red Team Audit">Proposal Audit (10 Days)</option>
                  </select>
                </div>

                <div>
                  <label className="block uppercase tracking-wider text-neutral-300 font-medium mb-1">
                    Preferred Window
                  </label>
                  <select
                    value={formData.datePreference}
                    onChange={(e) => setFormData({ ...formData, datePreference: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="This Week">Within 48 Hours</option>
                    <option value="Next Week">Next Week</option>
                    <option value="Later Month">Flexible Timeline</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="gold-button w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Confirm Strategy Call Request</span>
                  <Send className="w-3.5 h-3.5 text-neutral-900" />
                </button>
              </div>

              <p className="text-[10px] text-neutral-400 text-center flex items-center justify-center gap-1.5 pt-1">
                <Shield className="w-3 h-3 text-[#d4af37]" />
                <span>Strict confidentiality and NDA assurance guaranteed.</span>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
