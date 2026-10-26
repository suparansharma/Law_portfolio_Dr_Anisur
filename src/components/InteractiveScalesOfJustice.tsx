"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const InteractiveScalesOfJustice: React.FC = () => {
  // tilt angle: negative means left tilted, positive means right tilted
  const [tilt, setTilt] = useState<number>(0);
  const [activeSide, setActiveSide] = useState<"left" | "right" | "balanced">("balanced");

  const handleTilt = (direction: "left" | "right" | "reset") => {
    if (direction === "left") {
      setTilt(-8);
      setActiveSide("left");
    } else if (direction === "right") {
      setTilt(8);
      setActiveSide("right");
    } else {
      setTilt(0);
      setActiveSide("balanced");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-legal-900/90 to-legal-950/90 border border-gold-500/20 shadow-2xl backdrop-blur-md overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-card-glow opacity-60 pointer-events-none" />

      {/* Header Label */}
      <div className="text-center mb-4 z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-serif tracking-wider uppercase bg-gold-500/10 text-gold-300 border border-gold-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping" />
          Interactive Jurisprudence
        </span>
        <h4 className="text-sm md:text-base font-serif text-slate-200 mt-2">
          {activeSide === "balanced" && "Equilibrium of Justice & Rule of Law"}
          {activeSide === "left" && "Constitutional Liberties & Human Rights"}
          {activeSide === "right" && "State Accountability & Legal Due Process"}
        </h4>
        <p className="text-xs text-slate-400 mt-0.5">
          Click the balance pans to interact with the scales
        </p>
      </div>

      {/* SVG Scales of Justice */}
      <div className="relative w-72 h-64 md:w-80 md:h-72 flex items-center justify-center">
        <svg
          viewBox="0 0 400 360"
          className="w-full h-full drop-shadow-[0_10px_20px_rgba(205,160,67,0.25)] select-none"
        >
          <defs>
            <linearGradient id="goldBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dfb672" />
              <stop offset="50%" stopColor="#edd4a8" />
              <stop offset="100%" stopColor="#b58731" />
            </linearGradient>
            <linearGradient id="pillarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#dfb672" />
              <stop offset="50%" stopColor="#9c7322" />
              <stop offset="100%" stopColor="#543b1c" />
            </linearGradient>
            <radialGradient id="panGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#edd4a8" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#b58731" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#6e4d1f" stopOpacity="0.5" />
            </radialGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Pedestal Base */}
          <path
            d="M130 330 L270 330 L285 348 L115 348 Z"
            fill="url(#pillarGrad)"
            stroke="#dfb672"
            strokeWidth="1.5"
          />
          <rect
            x="145"
            y="315"
            width="110"
            height="15"
            rx="3"
            fill="url(#goldBeamGrad)"
          />

          {/* Central Pillar */}
          <rect
            x="193"
            y="90"
            width="14"
            height="225"
            rx="4"
            fill="url(#pillarGrad)"
            stroke="#edd4a8"
            strokeWidth="1"
          />

          {/* Decorative Rings on Pillar */}
          <ellipse cx="200" cy="140" rx="12" ry="4" fill="url(#goldBeamGrad)" />
          <ellipse cx="200" cy="220" rx="12" ry="4" fill="url(#goldBeamGrad)" />

          {/* Top Finial / Spire */}
          <circle cx="200" cy="72" r="14" fill="url(#goldBeamGrad)" filter="url(#goldGlow)" />
          <circle cx="200" cy="72" r="7" fill="#ffffff" opacity="0.8" />
          <polygon points="196,58 200,42 204,58" fill="url(#goldBeamGrad)" />

          {/* Rotating Beam and Hanging Pans */}
          <motion.g
            animate={{ rotate: tilt }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
            style={{ originX: "200px", originY: "90px" }}
          >
            {/* Horizontal Crossbeam */}
            <path
              d="M50 90 Q 200 82 350 90 Q 200 96 50 90 Z"
              fill="url(#goldBeamGrad)"
              stroke="#dfb672"
              strokeWidth="1.5"
            />
            {/* Center Pivot Jewel */}
            <circle cx="200" cy="90" r="9" fill="#06090f" stroke="#dfb672" strokeWidth="2.5" />
            <circle cx="200" cy="90" r="4" fill="#dfb672" />

            {/* Left Hanging Chains & Pan */}
            <g
              className="cursor-pointer group"
              onClick={() => handleTilt(tilt === -8 ? "reset" : "left")}
            >
              {/* Chains */}
              <line x1="60" y1="90" x2="35" y2="185" stroke="#dfb672" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="60" y1="90" x2="60" y2="185" stroke="#edd4a8" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="60" y1="90" x2="85" y2="185" stroke="#dfb672" strokeWidth="1.5" strokeDasharray="3 2" />

              {/* Pan */}
              <path
                d="M20 185 Q 60 215 100 185 Z"
                fill="url(#panGrad)"
                stroke="#dfb672"
                strokeWidth="2"
                className="group-hover:fill-gold-400/40 transition-colors"
              />
              <ellipse cx="60" cy="185" rx="40" ry="6" fill="#edd4a8" opacity="0.6" />

              {/* Decorative Weights in Pan */}
              <circle cx="53" cy="182" r="5" fill="#dfb672" stroke="#543b1c" strokeWidth="1" />
              <circle cx="67" cy="182" r="6" fill="#cda043" stroke="#543b1c" strokeWidth="1" />
              <circle cx="60" cy="177" r="4" fill="#edd4a8" stroke="#543b1c" strokeWidth="1" />
            </g>

            {/* Right Hanging Chains & Pan */}
            <g
              className="cursor-pointer group"
              onClick={() => handleTilt(tilt === 8 ? "reset" : "right")}
            >
              {/* Chains */}
              <line x1="340" y1="90" x2="315" y2="185" stroke="#dfb672" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="340" y1="90" x2="340" y2="185" stroke="#edd4a8" strokeWidth="1.5" strokeDasharray="3 2" />
              <line x1="340" y1="90" x2="365" y2="185" stroke="#dfb672" strokeWidth="1.5" strokeDasharray="3 2" />

              {/* Pan */}
              <path
                d="M300 185 Q 340 215 380 185 Z"
                fill="url(#panGrad)"
                stroke="#dfb672"
                strokeWidth="2"
                className="group-hover:fill-gold-400/40 transition-colors"
              />
              <ellipse cx="340" cy="185" rx="40" ry="6" fill="#edd4a8" opacity="0.6" />

              {/* Decorative Weights in Pan */}
              <circle cx="333" cy="182" r="5" fill="#dfb672" stroke="#543b1c" strokeWidth="1" />
              <circle cx="347" cy="182" r="6" fill="#cda043" stroke="#543b1c" strokeWidth="1" />
              <circle cx="340" cy="177" r="4" fill="#edd4a8" stroke="#543b1c" strokeWidth="1" />
            </g>
          </motion.g>
        </svg>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-2 mt-2 z-10">
        <button
          onClick={() => handleTilt("left")}
          className={`px-3 py-1 rounded text-xs font-medium transition-all ${
            activeSide === "left"
              ? "bg-gold-500 text-legal-950 font-semibold shadow-md shadow-gold-500/20"
              : "bg-legal-800 text-slate-300 hover:text-gold-300 border border-slate-700/60"
          }`}
        >
          ⚖️ Human Rights
        </button>
        <button
          onClick={() => handleTilt("reset")}
          className={`px-3 py-1 rounded text-xs font-medium transition-all ${
            activeSide === "balanced"
              ? "bg-gold-500 text-legal-950 font-semibold shadow-md shadow-gold-500/20"
              : "bg-legal-800 text-slate-300 hover:text-gold-300 border border-slate-700/60"
          }`}
        >
          Equilibrium
        </button>
        <button
          onClick={() => handleTilt("right")}
          className={`px-3 py-1 rounded text-xs font-medium transition-all ${
            activeSide === "right"
              ? "bg-gold-500 text-legal-950 font-semibold shadow-md shadow-gold-500/20"
              : "bg-legal-800 text-slate-300 hover:text-gold-300 border border-slate-700/60"
          }`}
        >
          Rule of Law ⚖️
        </button>
      </div>
    </div>
  );
};

