"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROFESSOR_DATA } from "@/data/professorData";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Globe } from "lucide-react";
import confetti from "canvas-confetti";

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    try {
      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#dfb672", "#cda043", "#ffffff"]
      });
    } catch {
      // ignore
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-legal-900/40 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-serif uppercase tracking-widest bg-gold-500/10 text-gold-300 border border-gold-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            Direct Channels
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Academic & Legal Consultation
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Reach out for research collaboration, postgraduate guidance, keynote invitations, or legal jurisprudence inquiries.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Details & Office Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="legal-card p-6 rounded-2xl space-y-6">
              <h3 className="text-xl font-serif font-bold text-white">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${PROFESSOR_DATA.email}`}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-legal-850 hover:bg-gold-500/10 border border-slate-700/60 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/15 flex items-center justify-center shrink-0 border border-gold-500/30">
                    <Mail className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      Official Email
                    </span>
                    <p className="text-sm font-medium text-slate-200 group-hover:text-gold-300 transition-colors">
                      {PROFESSOR_DATA.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${PROFESSOR_DATA.phone}`}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-legal-850 hover:bg-gold-500/10 border border-slate-700/60 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/15 flex items-center justify-center shrink-0 border border-gold-500/30">
                    <Phone className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      Direct Mobile / WhatsApp
                    </span>
                    <p className="text-sm font-medium text-slate-200 group-hover:text-gold-300 transition-colors">
                      {PROFESSOR_DATA.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-legal-850 border border-slate-700/60">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/15 flex items-center justify-center shrink-0 border border-gold-500/30">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                      Department Chamber
                    </span>
                    <p className="text-sm font-medium text-slate-200">
                      Department of Law, Faculty of Law & Shariah
                    </p>
                    <p className="text-xs text-slate-400">
                      Islamic University, Kushtia-7003, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation details */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Academic Consultation: Sunday – Thursday (During University Hours)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Globe className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>Guest Lecture / Keynote: By prior formal appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="legal-card p-8 rounded-2xl relative">
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                Send a Formal Inscription
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Your message will be addressed directly to Prof. Dr. Anisur Rahman.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center space-y-4 bg-legal-950/80 rounded-xl border border-emerald-500/30"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif font-bold text-white text-lg">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out to Prof. Dr. Anisur Rahman. The message has been logged, and you may also reach out directly via phone or email for urgent academic matters.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-lg bg-legal-800 text-gold-300 text-xs font-semibold hover:bg-legal-750 transition-colors"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Adv. Mahfuz Ahmed / Barrister..."
                        className="w-full px-4 py-2.5 rounded-xl bg-legal-950/80 border border-slate-700/80 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. yourname@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-legal-950/80 border border-slate-700/80 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                      Subject / Legal Field *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. LL.M. Dissertation Guidance / Guest Lecture on PIL / Bar Consultation"
                      className="w-full px-4 py-2.5 rounded-xl bg-legal-950/80 border border-slate-700/80 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                      Message / Inquiry Details *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here in detail..."
                      className="w-full px-4 py-2.5 rounded-xl bg-legal-950/80 border border-slate-700/80 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-legal-950 font-serif font-bold text-sm tracking-wide shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-[1.01] active:scale-98 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Transmit Inquiry
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
