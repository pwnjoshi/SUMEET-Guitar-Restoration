"use client";

import LuxuryHeader from "@/components/Header";
import RedesignedFooter from "@/components/Footer";
import LuxuryBooking from "@/components/RepairBookingWizard";
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      <LuxuryHeader />

      <main className="pt-28 sm:pt-40 pb-20 sm:pb-24">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-4">
          <h1 className="text-3xl sm:text-6xl font-display font-extrabold text-[var(--text-main)] tracking-tight">
            Visit & Contact Bench
          </h1>
          <p className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider">
            काठमाडौँ वर्कसप • King Birendra Marg, Siddartha Chok, Dallu / Chhauni
          </p>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] font-medium leading-relaxed max-w-xl mx-auto">
            Bring your instrument in for physical inspection or schedule a bench consultation online.
          </p>
        </div>

        {/* Contact Info Bento Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          
          {/* Workshop Address Card */}
          <div className="p-5 sm:p-8 rounded-3xl apple-glass-card space-y-3 sm:space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[var(--gold)]/10 text-[var(--gold)] flex items-center justify-center border border-[var(--gold)]/20 shadow-sm">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-display font-bold text-[var(--text-main)]">Workshop Address</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-1 font-medium">
                  King Birendra Marg, Siddartha Chok, Dallu / Chhauni, Kathmandu 44600, Nepal
                </p>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Siddartha+Chok+Kathmandu"
              target="_blank"
              rel="noreferrer"
              className="pt-2 text-xs font-bold text-[var(--gold)] flex items-center gap-1.5 hover:underline"
            >
              <Navigation className="w-3.5 h-3.5" /> Open Maps Directions <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Direct Phone & WhatsApp Card */}
          <div className="p-5 sm:p-8 rounded-3xl apple-glass-card space-y-3 sm:space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[var(--gold)]/10 text-[var(--gold)] flex items-center justify-center border border-[var(--gold)]/20 shadow-sm">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-display font-bold text-[var(--text-main)]">Direct Phone Lines</h3>
                <div className="text-xs font-semibold text-[var(--text-muted)] space-y-1.5 mt-2">
                  <a href="tel:9861336249" className="block p-2 rounded-xl bg-[var(--bg-pill)] text-[var(--text-main)] hover:text-[var(--gold)] border border-[var(--border)] transition-colors text-center">
                    Call +977 9861336249
                  </a>
                  <a href="tel:9851096193" className="block p-2 rounded-xl bg-[var(--bg-pill)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border)] transition-colors text-center">
                    Call +977 9851096193
                  </a>
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/9779861336249"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-xs font-bold hover:bg-emerald-500/20 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" /> Open WhatsApp Chat
            </a>
          </div>

          {/* Opening Hours Card */}
          <div className="p-5 sm:p-8 rounded-3xl apple-glass-card space-y-3 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[var(--gold)]/10 text-[var(--gold)] flex items-center justify-center border border-[var(--gold)]/20 shadow-sm">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-display font-bold text-[var(--text-main)]">Opening Hours</h3>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed mt-1 font-medium">
                Sunday - Friday: 10:30 AM - 6:30 PM<br />
                <span className="text-rose-500 font-bold">(Saturday Closed)</span>
              </p>
            </div>
          </div>

        </div>

        {/* Integrated Repair Booking Wizard */}
        <LuxuryBooking />

      </main>

      <RedesignedFooter />
    </div>
  );
}
