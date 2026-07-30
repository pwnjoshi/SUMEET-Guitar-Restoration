"use client";

import LuxuryHeader from "@/components/Header";
import RedesignedFooter from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      <LuxuryHeader />

      <main className="pt-28 sm:pt-40 pb-20 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4">
          <h1 className="text-3xl sm:text-6xl font-display font-extrabold text-[var(--text-main)] tracking-tight">
            Our Restoration Story
          </h1>
          <p className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider">
            हाम्रो इतिहास • 18 Years of Acoustic & Electric Bench Excellence
          </p>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto font-medium">
            Dedicated guitar tech service, structural wood reconstruction, hot hide glue bonding, and acoustic tone preservation in Kathmandu, Nepal.
          </p>
        </div>

        {/* Content Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden apple-glass-card border border-[var(--border)] shadow-2xl group">
            <Image
              src="/images/lutherie_cinematic.jpg"
              alt="General Neev Guitars Workshop Kathmandu"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl apple-glass text-xs font-semibold text-[var(--text-main)] flex items-center justify-between shadow-lg">
              <span>King Birendra Marg Bench</span>
              <span className="text-[var(--gold)] font-bold">Kathmandu</span>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-main)]">
              Craftsmanship & Uncompromising Passion
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-medium">
              Established in 2006 in Kathmandu, General Neev Guitars focuses sheerly on providing uncompromising quality guitar tech service to local and touring musicians across Nepal and abroad.
            </p>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed font-medium">
              Whether it is bonding a shattered headstock joint, recrowning worn frets, or rewiring vintage pickup looms, every instrument is treated as a cherished piece of acoustic art.
            </p>

            {/* Stats Cards */}
            <div className="pt-4 grid grid-cols-2 gap-3 sm:gap-4 border-t border-[var(--border)]">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border)]">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-[var(--gold)] block">4.7 ★</span>
                <span className="text-[11px] sm:text-xs font-semibold text-[var(--text-muted)]">218+ Google Reviews</span>
              </div>
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border)]">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-[var(--gold)] block">18+ Yrs</span>
                <span className="text-[11px] sm:text-xs font-semibold text-[var(--text-muted)]">Kathmandu Lutherie</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 border-t border-[var(--border)]">
          <div className="p-5 sm:p-6 rounded-3xl apple-glass-card space-y-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[var(--gold)]/10 text-[var(--gold)] flex items-center justify-center font-bold text-xs sm:text-sm">
              01
            </div>
            <h3 className="text-base font-display font-bold text-[var(--text-main)]">Acoustic Integrity</h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              We preserve original soundboard bracing resonance and use period-accurate wood splice techniques.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl apple-glass-card space-y-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[var(--gold)]/10 text-[var(--gold)] flex items-center justify-center font-bold text-xs sm:text-sm">
              02
            </div>
            <h3 className="text-base font-display font-bold text-[var(--text-main)]">Fret Precision</h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Micro-calibrated neck truss rod relief and nickel/stainless fret dress leveling for low buzz-free action.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl apple-glass-card space-y-2.5">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[var(--gold)]/10 text-[var(--gold)] flex items-center justify-center font-bold text-xs sm:text-sm">
              03
            </div>
            <h3 className="text-base font-display font-bold text-[var(--text-main)]">Zero-Hum Shielding</h3>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Continuous copper foil cavity shielding and vintage potentiometer cloth wire loom grounding.
            </p>
          </div>
        </div>

      </main>

      <RedesignedFooter />
    </div>
  );
}
