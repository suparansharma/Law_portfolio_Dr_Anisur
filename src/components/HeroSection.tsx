"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PROFESSOR_DATA } from "@/data/professorData";
import { 
  FileDown, 
  Mail, 
  MapPin, 
  BookCheck, 
  ShieldCheck, 
  GraduationCap, 
  ChevronRight,
  Scale
} from "lucide-react";
import { JusticeBalanceLottie } from "./JusticeBalanceLottie";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-legal-950 via-[#0a0f1d] to-legal-950">
      
      {/* Background Court Grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]">
        <div className="absolute inset-0 bg-[radial-gradient(#cda043_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* Atmospheric Gold Radial Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          
          {/* LEFT COLUMN: Academic Jurist Presentation (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-7 text-left"
          >
            {/* Top Pill / Crest Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/30 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400" />
              </span>
              <span className="text-xs font-serif tracking-wider uppercase text-gold-300 font-semibold">
                Faculty of Law & Shariah • Islamic University
              </span>
            </div>

            {/* Name & Academic Rank */}
            <div className="space-y-2">
              <p className="font-serif italic text-gold-400 text-lg md:text-xl font-normal">
                {PROFESSOR_DATA.banglaName}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12]">
                Prof. Dr. Anisur Rahman
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-lg sm:text-xl font-serif text-slate-300 pt-1">
                <span>Professor of Law</span>
                <span className="text-gold-500">•</span>
                <span className="text-gold-300 font-medium">Advocate, Kushtia Bar</span>
                <span className="text-gold-500">•</span>
                <span className="text-slate-400">Ph.D. Jurist</span>
              </div>
            </div>

            {/* Credential Tags */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-lg bg-legal-900/90 border border-slate-700/80 text-slate-200 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                Kushtia-7003, Bangladesh
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-lg bg-legal-900/90 border border-slate-700/80 text-slate-200 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                Ex-Syndicate Member (President Nominee)
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs px-3.5 py-1.5 rounded-lg bg-legal-900/90 border border-slate-700/80 text-slate-200 shadow-sm">
                <GraduationCap className="w-3.5 h-3.5 text-gold-400" />
                LL.M. 1st Class 1st
              </span>
            </div>

            {/* Executive Bio Narrative */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans max-w-2xl text-justify md:text-left">
              Distinguished Professor of Law with over 16 years of academic pedagogical distinction and high-level institutional governance. Champion of human rights, constitutional scrutiny, public interest litigation (PIL), and environmental conservation jurisprudence.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="/Dr_Anisur_Rahman_CV.pdf"
                download="Dr_Anisur_Rahman_CV.pdf"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-legal-950 font-serif font-bold text-sm shadow-xl shadow-gold-500/20 hover:shadow-gold-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
              >
                <FileDown className="w-4 h-4" />
                Download Complete CV (PDF)
              </a>

              <a
                href="#contact"
                className="px-5 py-3.5 rounded-xl bg-legal-900/90 hover:bg-legal-850 text-gold-300 font-semibold text-sm border border-gold-500/30 hover:border-gold-400/60 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Direct Chamber Note
              </a>

              <a
                href="#publications"
                className="px-4 py-3.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 group"
              >
                <BookCheck className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                <span>10+ Indexed Papers</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* High-Impact Stat Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              {PROFESSOR_DATA.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-3.5 rounded-xl bg-legal-900/50 border border-slate-800/90 hover:border-gold-500/30 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-400">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 font-sans mt-0.5 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Luxury Academic Portrait Showcase with Law Lottie Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            {/* The Luxury Frame Card */}
            <div className="relative w-full max-w-md">
              
              {/* Outer Golden Aura Glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-gold-600/40 via-amber-500/20 to-gold-400/30 blur-xl opacity-75 pointer-events-none" />

              {/* Main Card Shell */}
              <div className="relative rounded-2xl bg-legal-900/95 border border-gold-500/30 shadow-2xl overflow-hidden backdrop-blur-xl">
                
                {/* Classic Header Ribbon */}
                <div className="px-5 py-3 bg-gradient-to-r from-legal-950 via-legal-900 to-legal-950 border-b border-gold-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-gold-500/20 border border-gold-500/40 flex items-center justify-center">
                      <Scale className="w-3.5 h-3.5 text-gold-400" />
                    </div>
                    <span className="font-serif text-xs font-bold uppercase tracking-wider text-gold-300">
                      Doctor of Philosophy (Ph.D.)
                    </span>
                  </div>
                  <span className="text-[11px] font-sans text-slate-400 bg-legal-850 px-2 py-0.5 rounded border border-slate-700/60">
                    Islamic University
                  </span>
                </div>

                {/* Portrait Canvas with Soft Natural Backdrop */}
                <div className="relative w-full h-[370px] sm:h-[400px] bg-gradient-to-b from-[#151c2e] to-legal-950">
                  <Image
                    src="/dr-anisur-rahman.jpeg"
                    alt="Prof. Dr. Anisur Rahman - Professor of Law"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    priority
                    className="object-cover object-top filter contrast-[1.02] brightness-[1.02]"
                  />
                  {/* Subtle vignette shadow only at the very bottom edge for gentle blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-legal-950 via-transparent to-transparent opacity-75" />
                  
                  {/* Floating Badge on Photo */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs backdrop-blur-md bg-legal-950/85 p-2.5 rounded-xl border border-gold-500/25">
                    <div>
                      <p className="font-serif font-bold text-white text-sm">
                        Dr. Anisur Rahman
                      </p>
                      <p className="text-[11px] text-gold-300 font-sans">
                        Professor & Research Supervisor
                      </p>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Active Faculty
                    </span>
                  </div>
                </div>

                {/* Animated Lottie Section Under Photo: "Justice balance law.json" */}
                <div className="p-4 bg-legal-950/95 border-t border-gold-500/20">
                  <div className="bg-gradient-to-r from-legal-900/90 via-legal-850 to-legal-900/90 rounded-xl p-3 border border-slate-800 flex items-center gap-3">
                    
                    {/* The Lottie Animation */}
                    <div className="w-20 h-20 shrink-0 flex items-center justify-center">
                      <JusticeBalanceLottie className="w-20 h-20" />
                    </div>

                    {/* Accompanying Law Motto */}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
                        <span className="text-[11px] font-serif uppercase tracking-wider text-gold-300 font-semibold">
                          Scales of Justice
                        </span>
                      </div>
                      <p className="text-xs font-serif text-slate-200 italic leading-snug">
                        &ldquo;Fiat justitia ruat caelum — Let justice be done though the heavens fall.&rdquo;
                      </p>
                      <p className="text-[10px] text-slate-400">
                        Equilibrium of Constitutional Rights & Legal Order
                      </p>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
