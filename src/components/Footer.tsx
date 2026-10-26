"use client";

import React from "react";
import { Scale, ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-legal-950 border-t border-gold-500/20 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-legal-950 font-bold shadow-md shadow-gold-500/20">
                <Scale className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-white text-lg">
                  Prof. Dr. Anisur Rahman
                </h3>
                <p className="text-xs text-gold-400 font-sans">
                  Professor, Department of Law, Islamic University
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Dedicated to upholding the rule of law, advancing public interest litigation, mentoring future jurists, and conducting high-impact legal research in Bangladesh.
            </p>

            <p className="text-xs font-serif text-slate-500 italic">
              &ldquo;Justice without strength is helpless, strength without justice is tyrannical.&rdquo;
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-white text-sm uppercase tracking-wider text-gold-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#about" className="hover:text-gold-300 transition-colors">About & Bio</a></li>
              <li><a href="#research" className="hover:text-gold-300 transition-colors">Research Domains</a></li>
              <li><a href="#publications" className="hover:text-gold-300 transition-colors">Publications (10+)</a></li>
              <li><a href="#experience" className="hover:text-gold-300 transition-colors">Academic Career & Syndicate</a></li>
              <li><a href="#education" className="hover:text-gold-300 transition-colors">Degrees & Skills</a></li>
              <li><a href="#contact" className="hover:text-gold-300 transition-colors">Contact Chamber</a></li>
            </ul>
          </div>

          {/* Col 3: Quick Contacts */}
          <div className="space-y-3">
            <h4 className="font-serif font-semibold text-white text-sm uppercase tracking-wider text-gold-300">
              Faculty Office
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                Islamic University, Kushtia-7003
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                anisurlawiu2016@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                +880 1727-199182
              </p>
              <div className="pt-2">
                <a
                  href="/Dr_Anisur_Rahman_CV.pdf"
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold-500/15 border border-gold-400/30 text-gold-300 hover:bg-gold-500/25 transition-colors text-xs font-serif"
                >
                  Download Curriculum Vitae
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Prof. Dr. Anisur Rahman. All Rights Reserved. Faculty of Law & Shariah, IU.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-gold-300 hover:text-gold-200 transition-colors bg-legal-900 border border-gold-500/20 px-3 py-1.5 rounded-lg"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
