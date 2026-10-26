"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Scale, Menu, X, FileText, Phone, Award, BookOpen, User } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", icon: User },
    { name: "Research", href: "#research", icon: Scale },
    { name: "Publications", href: "#publications", icon: BookOpen },
    { name: "Career & Roles", href: "#experience", icon: Award },
    { name: "Education", href: "#education", icon: FileText },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-legal-950/90 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/20 border border-gold-300/40 group-hover:scale-105 transition-transform">
            <Scale className="w-5 h-5 text-legal-950" />
          </div>
          <div>
            <h1 className="font-serif text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
              Prof. Dr. Anisur Rahman
            </h1>
            <p className="text-[11px] text-gold-400 font-sans tracking-wider uppercase">
              Professor of Law • Islamic University
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-gold-300 hover:bg-gold-500/10 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Dr_Anisur_Rahman_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-md bg-gradient-to-r from-gold-500 to-gold-600 text-legal-950 hover:from-gold-400 hover:to-gold-500 shadow-md shadow-gold-500/20 transition-all hover:scale-105 flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            Curriculum Vitae
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="/Dr_Anisur_Rahman_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 text-xs font-semibold rounded bg-gold-500 text-legal-950"
          >
            CV
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-legal-950/95 backdrop-blur-xl border-b border-gold-500/20 px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-base font-medium text-slate-200 hover:text-gold-300 hover:bg-gold-500/10 rounded-lg transition-colors"
              >
                <Icon className="w-4 h-4 text-gold-400" />
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};

