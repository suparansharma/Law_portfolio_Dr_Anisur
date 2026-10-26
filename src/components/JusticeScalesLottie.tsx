"use client";

import React, { useEffect, useState } from "react";
import { Lottie } from "lottie-react";
import justiceData from "@/data/justice.json";

interface Props {
  className?: string;
  loop?: boolean;
}

export const JusticeScalesLottie: React.FC<Props> = ({ className = "w-48 h-48", loop = true }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={`${className} animate-pulse bg-gold-500/10 rounded-2xl`} />;
  }

  return (
    <div className={`relative flex items-center justify-center ${className} drop-shadow-[0_8px_20px_rgba(205,160,67,0.25)]`}>
      <Lottie
        src={justiceData}
        loop={loop}
        autoplay={true}
        className="w-full h-full"
      />
    </div>
  );
};

