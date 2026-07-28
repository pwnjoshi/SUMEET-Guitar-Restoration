"use client";

import LuxuryHeader from "@/components/Header";
import RedesignedFooter from "@/components/Footer";
import GuitarTunerModule from "@/components/GuitarTunerModule";
import { Mic } from "lucide-react";

export default function TunerPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      <LuxuryHeader />

      <main className="pt-28 sm:pt-40 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12 space-y-2">
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[var(--text-main)] tracking-tight">
            Live Guitar Pitch Tuner
          </h1>
          <p className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider">
            काठमाडौँ अकुस्टिक ट्युनर • Precision Pitch Calibration
          </p>
        </div>

        <GuitarTunerModule />
      </main>

      <RedesignedFooter />
    </div>
  );
}
