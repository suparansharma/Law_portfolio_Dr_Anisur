"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROFESSOR_DATA } from "@/data/professorData";
import { CheckCircle2, Award, Landmark, BookOpen, Quote, Sparkles } from "lucide-react";
import { JusticeScalesLottie } from "./JusticeScalesLottie";
import { InteractiveGavel } from "./InteractiveGavel";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-legal-950 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-serif uppercase tracking-widest bg-gold-500/10 text-gold-300 border border-gold-500/20 mb-3">
            <Landmark className="w-3.5 h-3.5" />
            Distinguished Jurist & Academician
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Academic Legacy & Jurisprudential Vision
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed Biography Text (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed">
              {PROFESSOR_DATA.aboutFull.map((paragraph, index) => (
                <p key={index} className="text-justify font-sans">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Jurisprudential Pillars */}
            <div className="pt-6 border-t border-slate-800">
              <h3 className="text-lg font-serif font-semibold text-gold-300 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-gold-400" />
                Key Academic & Institutional Distinctions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Syndicate Member (President Nominee), Islamic University",
                  "Law Administrator & Legal Counsel to the University",
                  "Over 16 years of Dedicated Higher Legal Pedagogy",
                  "First Class 1st in Master of Laws (LL.M.)",
                  "Enrolled Advocate at Kushtia Bar Association",
                  "Doctor of Philosophy (Ph.D.) in Law",
                  "Expert in International Humanitarian Law (ICRC Trained)",
                  "HEQEP Curriculum Development Fellow"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-200 bg-legal-900/60 p-2.5 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight quote */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-legal-900 via-legal-850 to-legal-900 border-l-4 border-gold-500 shadow-xl relative overflow-hidden">
              <Quote className="absolute -bottom-2 right-4 w-20 h-20 text-gold-500/10 pointer-events-none" />
              <p className="font-serif italic text-gold-200 text-base sm:text-lg">
                &ldquo;{PROFESSOR_DATA.legalQuotes[0].quote}&rdquo;
              </p>
              <p className="text-xs font-semibold text-slate-400 mt-2 uppercase tracking-wider">
                — {PROFESSOR_DATA.legalQuotes[0].author}
              </p>
            </div>
          </motion.div>

          {/* Interactive Law Gadget & Lottie Justice Animation (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Lottie Animation 2 Card: "justice.json" */}
            <div className="legal-card p-6 rounded-2xl overflow-hidden relative group">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">
                      Justice & Jurisprudence Motion
                    </h4>
                    <p className="text-[11px] text-gold-400 font-sans">
                      The Constant Pursuit of Legal Balance
                    </p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-serif tracking-widest text-slate-400 px-2.5 py-1 bg-legal-850 rounded border border-slate-700/60">
                  Motion Law
                </span>
              </div>

              {/* Lottie Animation Display */}
              <div className="w-full h-56 flex items-center justify-center bg-gradient-to-b from-legal-950/60 to-legal-900/40 rounded-xl my-3 border border-gold-500/15">
                <JusticeScalesLottie className="w-48 h-48" />
              </div>

              <p className="text-xs text-slate-300 text-center font-serif italic">
                &ldquo;Law is the supreme embodiment of the human quest for justice and moral order.&rdquo;
              </p>
            </div>

            {/* Interactive Gavel Sound Block */}
            <InteractiveGavel />

            {/* Teaching Philosophy Card */}
            <div className="p-6 rounded-2xl bg-legal-900/70 border border-gold-500/20 backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-white text-base">
                    Teaching & Mentorship Philosophy
                  </h4>
                  <p className="text-xs text-slate-400">
                    Department of Law, Islamic University
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prof. Dr. Anisur Rahman believes that legal education extends far beyond rote memorization of statutes. His pedagogical method fosters rigorous logical argumentation, constitutional empathy, outcome-based research, and practical courtroom readiness.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Constitutionalism", "Human Rights", "Moot Court", "Public Interest Law", "Legal Ethics"].map((tag, i) => (
                  <span key={i} className="text-[11px] px-2.5 py-1 rounded bg-legal-800 text-gold-300 border border-gold-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
