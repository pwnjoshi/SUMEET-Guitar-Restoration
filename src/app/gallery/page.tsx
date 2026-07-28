"use client";

import LuxuryHeader from "@/components/Header";
import RedesignedFooter from "@/components/Footer";
import LuxuryBeforeAfter from "@/components/BeforeAfterVisualizer";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      <LuxuryHeader />

      <main className="pt-28 sm:pt-40 pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-6xl font-display font-extrabold text-[var(--text-main)] tracking-tight">
            Restoration Case Studies
          </h1>
          <p className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider">
            काठमाडौँ फोटो ग्यालेरी • Before & After Lutherie Work
          </p>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] font-medium leading-relaxed max-w-xl mx-auto">
            Inspect original damaged vintage instruments side-by-side with our completed workshop masterpieces done in Kathmandu.
          </p>
        </div>

        <LuxuryBeforeAfter />
      </main>

      <RedesignedFooter />
    </div>
  );
}
