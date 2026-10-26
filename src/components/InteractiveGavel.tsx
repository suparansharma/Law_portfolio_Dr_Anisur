"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hammer } from "lucide-react";
import confetti from "canvas-confetti";

interface InteractiveGavelProps {
  onStrike?: () => void;
}

const LEGAL_PROCLAMATIONS = [
  "In the Name of Justice: The Rule of Law Prevails!",
  "Fiat Justitia Ruat Caelum — Let Justice Be Done Though the Heavens Fall.",
  "Audi Alteram Partem — Hear the Other Side.",
  "Public Interest Litigation: The Shield of the Oppressed.",
  "Human Dignity & Constitutional Equality Upheld!",
  "The Court of Reason is in Full Session."
];

export const InteractiveGavel: React.FC<InteractiveGavelProps> = ({ onStrike }) => {
  const [isStriking, setIsStriking] = useState(false);
  const [verdictIndex, setVerdictIndex] = useState(0);
  const [showRipples, setShowRipples] = useState(false);

  const strikeGavel = () => {
    if (isStriking) return;
    setIsStriking(true);

    // Audio effect simulation & Confetti/Sparks
    try {
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#dfb672", "#edd4a8", "#cda043", "#ffffff"],
        ticks: 80,
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setShowRipples(true);
      setVerdictIndex((prev) => (prev + 1) % LEGAL_PROCLAMATIONS.length);
      if (onStrike) onStrike();
    }, 180);

    setTimeout(() => {
      setIsStriking(false);
      setShowRipples(false);
    }, 900);
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-6 rounded-2xl bg-legal-900/80 border border-gold-500/20 backdrop-blur-md overflow-hidden">
      <div className="text-center mb-3">
        <span className="text-xs uppercase tracking-widest text-gold-400 font-serif font-semibold">
          Judicial Authority
        </span>
        <h4 className="text-base font-serif font-medium text-slate-100">
          Gavel of Verdict & Rule of Law
        </h4>
        <p className="text-xs text-slate-400">Click the gavel to strike the sound block</p>
      </div>

      {/* Gavel & Sound block area */}
      <div
        onClick={strikeGavel}
        className="relative w-64 h-48 cursor-pointer flex items-center justify-center select-none group"
        title="Click to strike the gavel"
      >
        {/* Sound Block at the bottom */}
        <div className="absolute bottom-6 w-36 h-10 flex flex-col items-center">
          {/* Sound waves on impact */}
          {showRipples && (
            <motion.div
              initial={{ scale: 0.8, opacity: 1 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute -top-3 w-32 h-16 rounded-full border-2 border-gold-400/80 pointer-events-none"
            />
          )}

          {/* Sound block 3D tier */}
          <div className="w-32 h-4 rounded-t-lg bg-gradient-to-r from-amber-900 via-amber-700 to-amber-950 border-t border-gold-400/50 shadow-lg" />
          <div className="w-36 h-6 rounded-b-lg bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 border border-amber-950 shadow-2xl" />
        </div>

        {/* Animated Gavel */}
        <motion.div
          animate={
            isStriking
              ? {
                  rotate: [0, -35, 18, 0],
                  y: [0, -25, 12, 0],
                }
              : {
                  rotate: [0, -4, 0],
                  y: [0, -2, 0],
                }
          }
          transition={
            isStriking
              ? { duration: 0.5, ease: "easeInOut" }
              : { repeat: Infinity, duration: 4, ease: "easeInOut" }
          }
          className="absolute top-4 w-44 h-36 origin-[120px_100px] flex items-center justify-center filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
        >
          {/* SVG Gavel Graphic */}
          <svg viewBox="0 0 200 160" className="w-full h-full">
            <defs>
              <linearGradient id="gavelWood" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#78350f" />
                <stop offset="50%" stopColor="#b45309" />
                <stop offset="100%" stopColor="#451a03" />
              </linearGradient>
              <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#dfb672" />
                <stop offset="50%" stopColor="#fff2d6" />
                <stop offset="100%" stopColor="#b58731" />
              </linearGradient>
            </defs>

            {/* Handle */}
            <path
              d="M 120 110 L 165 145"
              stroke="url(#gavelWood)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            {/* Handle Grip Ribs */}
            <line x1="145" y1="130" x2="152" y2="135" stroke="url(#goldRing)" strokeWidth="3" />
            <line x1="155" y1="137" x2="162" y2="142" stroke="url(#goldRing)" strokeWidth="3" />

            {/* Gavel Head */}
            <rect
              x="50"
              y="60"
              width="60"
              height="30"
              rx="4"
              transform="rotate(-25 80 75)"
              fill="url(#gavelWood)"
              stroke="#dfb672"
              strokeWidth="1.5"
            />
            {/* Brass Bands on head */}
            <rect
              x="56"
              y="59"
              width="6"
              height="32"
              transform="rotate(-25 80 75)"
              fill="url(#goldRing)"
            />
            <rect
              x="98"
              y="59"
              width="6"
              height="32"
              transform="rotate(-25 80 75)"
              fill="url(#goldRing)"
            />
          </svg>
        </motion.div>
      </div>

      {/* Proclamation Banner */}
      <div className="w-full mt-1 min-h-[50px] flex items-center justify-center text-center px-4 py-2 bg-legal-950/70 border border-gold-500/20 rounded-lg">
        <AnimatePresence mode="wait">
          <motion.p
            key={verdictIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-xs md:text-sm font-serif italic text-gold-300"
          >
            &ldquo;{LEGAL_PROCLAMATIONS[verdictIndex]}&rdquo;
          </motion.p>
        </AnimatePresence>
      </div>

      <button
        onClick={strikeGavel}
        className="mt-3 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-legal-950 shadow-lg shadow-gold-500/20 hover:scale-105 transition-transform"
      >
        <Hammer className="w-3.5 h-3.5" />
        Strike Gavel
      </button>
    </div>
  );
};

