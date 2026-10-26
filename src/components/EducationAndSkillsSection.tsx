"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROFESSOR_DATA } from "@/data/professorData";
import { GraduationCap, Award, BookCheck, Sparkles, CheckCircle2 } from "lucide-react";

export const EducationAndSkillsSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-legal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-serif uppercase tracking-widest bg-gold-500/10 text-gold-300 border border-gold-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Credentials & Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Education, Advanced Training & Core Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Formal Education & Degrees (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">
                  Academic Qualifications
                </h3>
                <p className="text-xs text-gold-400 font-serif">
                  Distinguished degrees earned from Islamic University & Premier Colleges
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {PROFESSOR_DATA.education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="legal-card p-5 rounded-2xl group relative overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-serif font-bold text-gold-400 bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-500/20">
                        {edu.year}
                      </span>
                      <h4 className="text-base sm:text-lg font-serif font-bold text-white mt-2 group-hover:text-gold-300 transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 font-serif mt-0.5">
                        {edu.institution}
                      </p>
                      {edu.achievement && (
                        <p className="text-xs text-amber-300/90 font-medium mt-2 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-gold-400" />
                          {edu.achievement}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Specialized Training Courses */}
            <div className="pt-8">
              <h4 className="text-lg font-serif font-bold text-white mb-4 flex items-center gap-2">
                <BookCheck className="w-5 h-5 text-gold-400" />
                Specialized Certifications & Professional Courses
              </h4>
              <div className="space-y-3">
                {PROFESSOR_DATA.trainings.map((train, tIdx) => (
                  <div key={tIdx} className="bg-legal-900/50 border border-slate-800 p-4 rounded-xl">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-gold-300 font-serif">{train.period}</span>
                      <span className="text-slate-400 text-[11px]">{train.organization}</span>
                    </div>
                    <h5 className="font-serif font-semibold text-white text-sm">
                      {train.title}
                    </h5>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {train.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Skills Matrix & Jurisprudential Focus (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">
                  Skills & Expertise Matrix
                </h3>
                <p className="text-xs text-gold-400 font-serif">
                  Multidisciplinary mastery in law, governance, pedagogy & research
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {PROFESSOR_DATA.skillsCategorized.map((cat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="legal-card p-5 rounded-2xl"
                >
                  <h4 className="text-sm font-serif font-bold uppercase tracking-wider text-gold-300 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
                    <span className="w-2 h-2 rounded-full bg-gold-400" />
                    {cat.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-legal-850 border border-gold-500/20 text-slate-200 hover:border-gold-400/50 hover:bg-gold-500/10 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Language Proficiency Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-legal-900 to-legal-850 border border-gold-500/20">
              <h4 className="font-serif font-bold text-white text-sm mb-3">
                Linguistic Fluency
              </h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-200 font-medium">Bangla (Mother Tongue)</span>
                    <span className="text-gold-400 font-serif">Native / Elite Oratory</span>
                  </div>
                  <div className="w-full bg-legal-950 h-2 rounded-full overflow-hidden border border-slate-800">
                    <div className="bg-gradient-to-r from-gold-500 to-amber-300 h-full w-[100%]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-200 font-medium">English (Academic & Legal Drafting)</span>
                    <span className="text-gold-400 font-serif">Fluent Professional</span>
                  </div>
                  <div className="w-full bg-legal-950 h-2 rounded-full overflow-hidden border border-slate-800">
                    <div className="bg-gradient-to-r from-gold-500 to-amber-300 h-full w-[95%]" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
