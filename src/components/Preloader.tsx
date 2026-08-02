"use client";

import { useState, useEffect } from "react";
import { Music, Sparkles } from "lucide-react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#080605] flex flex-col items-center justify-center p-4 transition-opacity duration-500">
      
      {/* Background Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-amber-500/10 blur-[90px] pointer-events-none animate-pulse" />

      {/* Lutherie Emblem Spinner */}
      <div className="relative flex items-center justify-center mb-6">
        <div className="w-20 h-20 rounded-3xl border-2 border-amber-500/20 border-t-amber-500 animate-spin" />
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-xl shadow-amber-500/30 border border-amber-300/40 absolute">
          <Music className="w-6 h-6 text-white animate-pulse" />
        </div>
      </div>

      {/* Brand Title */}
      <div className="text-center space-y-1 z-10">
        <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-[0.2em] uppercase">
          SUMEET <span className="text-amber-500">GUITARS</span>
        </h2>
        <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono-custom text-amber-300/80 uppercase tracking-[0.25em]">
          <Sparkles className="w-3 h-3 text-amber-400 animate-bounce" />
          <span>Tuning Acoustic Frequencies • Kathmandu</span>
        </div>
      </div>

    </div>
  );
}
