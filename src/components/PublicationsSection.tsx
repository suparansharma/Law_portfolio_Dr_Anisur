"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFESSOR_DATA, Publication } from "@/data/professorData";
import { BookOpen, Search, Calendar, FileText, Check } from "lucide-react";

const CATEGORIES = [
  "All",
  "Constitutional Law",
  "Human Rights",
  "Environmental Law",
  "Consumer & Social",
  "General",
] as const;

export const PublicationsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPublications = PROFESSOR_DATA.publications.filter((pub) => {
    const matchesCategory =
      selectedCategory === "All" || pub.category === selectedCategory;
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.year.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const handleCopyCitation = (pub: Publication) => {
    const citation = `${PROFESSOR_DATA.name} (${pub.year}). "${pub.title}." ${pub.journal}, ${pub.details}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="publications" className="py-24 relative bg-legal-950 legal-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-serif uppercase tracking-widest bg-gold-500/10 text-gold-300 border border-gold-500/20 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Scholarly Contributions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Peer-Reviewed Publications & Research
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Authored groundbreaking articles on constitutional amendment scrutiny, humanitarian law, environmental protection in the Gorai basin, and public interest litigation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-4" />
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-legal-900/60 p-4 rounded-2xl border border-gold-500/20 backdrop-blur-md">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-gold-500 text-legal-950 font-semibold shadow-md shadow-gold-500/20"
                    : "text-slate-300 hover:text-white hover:bg-legal-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, year, keyword..."
              className="w-full pl-9 pr-4 py-2 bg-legal-950/80 border border-slate-700/80 rounded-xl text-xs text-slate-200 placeholder-slate-400 focus:outline-none focus:border-gold-400 transition-colors"
            />
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredPublications.map((pub, idx) => (
              <motion.article
                key={pub.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="legal-card p-6 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Gold corner accent for featured items */}
                {pub.featured && (
                  <div className="absolute top-0 right-0">
                    <div className="w-16 h-16 overflow-hidden">
                      <div className="bg-gradient-to-bl from-gold-500 to-amber-600 text-legal-950 text-[9px] font-bold py-1 text-center transform rotate-45 translate-x-4 translate-y-1 shadow-md uppercase tracking-wider font-serif">
                        Key
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  {/* Category & Year */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-serif font-semibold px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-300 border border-gold-500/25">
                      {pub.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {pub.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-gold-300 transition-colors leading-snug">
                    {pub.title}
                  </h3>

                  {/* Journal Name */}
                  <p className="text-xs font-serif text-gold-400/90 mt-2 font-medium">
                    {pub.journal}
                  </p>

                  {/* Summary / Details */}
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {pub.details}
                  </p>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="text-[11px] text-slate-400">
                    Indexed Faculty Publication
                  </div>
                  <button
                    onClick={() => handleCopyCitation(pub)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-legal-850 hover:bg-gold-500/20 text-slate-300 hover:text-gold-200 border border-slate-700/60 transition-all active:scale-95"
                    title="Copy full academic citation"
                  >
                    {copiedId === pub.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Citation Copied</span>
                      </>
                    ) : (
                      <>
                        <FileText className="w-3.5 h-3.5 text-gold-400" />
                        <span>Copy Citation</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-16 bg-legal-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">
              No publications found matching &ldquo;{searchQuery}&rdquo; in category &ldquo;{selectedCategory}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 px-4 py-1.5 rounded-lg text-xs bg-gold-500 text-legal-950 font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
