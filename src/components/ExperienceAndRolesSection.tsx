"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROFESSOR_DATA } from "@/data/professorData";
import { Briefcase, Shield, ChevronRight, CheckCircle } from "lucide-react";

export const ExperienceAndRolesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"academic" | "leadership">("academic");

  return (
    <section id="experience" className="py-24 relative bg-legal-900/60 border-t border-b border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-serif uppercase tracking-widest bg-gold-500/10 text-gold-300 border border-gold-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Track Record of Distinction
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Academic Career & Institutional Leadership
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            From Lecturer to Full Professor at Islamic University, alongside high-stakes executive positions as Syndicate Member and Law Administrator.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Tab switch */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-legal-950 border border-gold-500/30">
            <button
              onClick={() => setActiveTab("academic")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-serif font-semibold transition-all ${
                activeTab === "academic"
                  ? "bg-gold-500 text-legal-950 shadow-lg shadow-gold-500/20"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              Academic Progression (16+ Yrs)
            </button>
            <button
              onClick={() => setActiveTab("leadership")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-serif font-semibold transition-all ${
                activeTab === "leadership"
                  ? "bg-gold-500 text-legal-950 shadow-lg shadow-gold-500/20"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              <Shield className="w-4 h-4" />
              Governance & Professional Bodies
            </button>
          </div>
        </div>

        {/* Tab 1: Academic Timeline */}
        {activeTab === "academic" && (
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline center line */}
            <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-gold-500 via-amber-600 to-slate-800 -translate-x-1/2 hidden sm:block" />

            <div className="space-y-8">
              {PROFESSOR_DATA.experiences.map((exp, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex flex-col sm:flex-row items-center ${
                      isEven ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline Node Icon in Center */}
                    <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-legal-950 border-2 border-gold-400 items-center justify-center z-10 shadow-lg shadow-gold-500/20">
                      <div className="w-3 h-3 rounded-full bg-gold-400" />
                    </div>

                    {/* Content Box */}
                    <div className="w-full sm:w-[46%]">
                      <div className="legal-card p-6 rounded-2xl group hover:border-gold-400/60 transition-all">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-serif font-semibold px-2.5 py-0.5 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30">
                            {exp.period}
                          </span>
                          <span className="text-xs text-slate-400">
                            {exp.location}
                          </span>
                        </div>

                        <h3 className="text-lg font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-serif text-gold-400/90 mb-3">
                          {exp.institution}
                        </p>

                        <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                          {exp.highlights.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2">
                              <ChevronRight className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Governance & Roles Grid */}
        {activeTab === "leadership" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROFESSOR_DATA.leadershipRoles.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="legal-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-serif tracking-widest px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-300 border border-gold-500/25">
                    {role.category}
                  </span>

                  <h3 className="font-serif font-bold text-white text-base mt-3 leading-snug">
                    {role.title}
                  </h3>
                  <p className="text-xs font-serif text-gold-400 mt-1">
                    {role.organization}
                  </p>

                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[11px] text-slate-400">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                  <span>Institutional Service</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
