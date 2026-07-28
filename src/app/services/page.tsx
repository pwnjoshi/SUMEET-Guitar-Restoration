"use client";

import LuxuryHeader from "@/components/Header";
import RedesignedFooter from "@/components/Footer";
import RedesignedServices from "@/components/ServicesCraft";
import LuxuryBooking from "@/components/RepairBookingWizard";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      <LuxuryHeader />

      <main className="pt-28 sm:pt-40 pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-6xl font-display font-extrabold text-[var(--text-main)] tracking-tight">
            Restoration & Maintenance
          </h1>
          <p className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider">
            लुथिएरी सेवाहरू • Kathmandu Bench Disciplines
          </p>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] font-medium leading-relaxed max-w-xl mx-auto">
            Detailed breakdown of our wood repair, refretting, electronics hum shielding, and nitro lacquer restoration work in Kathmandu.
          </p>
        </div>

        <RedesignedServices />
        <LuxuryBooking />
      </main>

      <RedesignedFooter />
    </div>
  );
}
