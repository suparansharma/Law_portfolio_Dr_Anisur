"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROFESSOR_DATA } from "@/data/professorData";
import { Scale, ShieldAlert, Leaf, Users, ShoppingBag, BookOpen, Sparkles } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Scale,
  ShieldAlert,
  Leaf,
  Users,
  ShoppingBag,
  BookOpen,
};

export const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="py-24 relative bg-legal-900/40 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-serif uppercase tracking-widest bg-gold-500/10 text-gold-300 border border-gold-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Specialized Legal Pillars
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Research Interests & Jurisprudential Focus
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Exploring critical intersections between constitutional protections, human dignity, environmental jurisprudence, and consumer advocacy.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFESSOR_DATA.researchAreas.map((area, idx) => {
            const IconComponent = ICON_MAP[area.icon] || Scale;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="legal-card p-6 rounded-2xl group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-legal-950 transition-all duration-300 mb-5 group-hover:scale-105">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif font-bold text-lg text-white group-hover:text-gold-300 transition-colors">
                    {area.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-gold-400 font-serif">
                  <span>Core Legal Domain</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore Publications →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

