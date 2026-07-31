"use client";

import LuxuryHeader from "@/components/Header";
import LuxuryBeforeAfter from "@/components/BeforeAfterVisualizer";
import LuxurySoundTuner from "@/components/SoundTestTuner";
import RedesignedServices from "@/components/ServicesCraft";
import LuxuryBooking from "@/components/RepairBookingWizard";
import RedesignedFooter from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Star, Mic, Award, CheckCircle2, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      
      <LuxuryHeader />

      {/* Hero Section */}
      <section className="relative pt-36 sm:pt-48 pb-20 sm:pb-32 overflow-hidden border-b border-[var(--border)]">
        
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[var(--gold)]/15 via-[var(--gold-bright)]/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="relative inline-flex items-center max-w-full p-[1px] rounded-full bg-gradient-to-r from-[var(--gold)]/40 via-amber-500/20 to-[var(--gold)]/40 shadow-[0_4px_20px_-4px_rgba(212,175,55,0.25)]">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[var(--bg-card)]/90 backdrop-blur-2xl text-[var(--text-main)] text-[11px] sm:text-xs font-semibold whitespace-nowrap">
                  <div className="relative flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/30 shrink-0">
                    <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <span className="bg-gradient-to-r from-[var(--gold-bright)] via-[var(--gold)] to-[var(--gold-bright)] bg-clip-text text-transparent font-bold">
                    <span className="sm:hidden">Kathmandu Lutherie Bench</span>
                    <span className="hidden sm:inline">Kathmandu Master Lutherie Bench</span>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[var(--text-muted)] opacity-40 shrink-0" />
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[var(--text-muted)] tracking-wider shrink-0">
                    Est. 2006
                  </span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-extrabold text-[var(--text-main)] leading-[1.08] tracking-tight">
                Master Guitar <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold)] via-[var(--gold-bright)] to-[var(--gold)]">
                  Restoration
                </span> & Lutherie
              </h1>

              <div className="text-xs font-bold text-[var(--gold)] tracking-wide">
                सुमीत गिटार रिस्टोरेशन • काठमाडौँ, नेपाल
              </div>

              <p className="text-[var(--text-muted)] text-sm sm:text-base max-w-xl leading-relaxed font-medium">
                Handcrafted wood reconstruction, nitrocellulose lacquer preservation, zero-buzz fret dressing, and acoustic tone optimization for Nepal's musicians.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-semibold">
                <Link
                  href="#booking"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-white font-bold text-xs shadow-xl shadow-amber-500/20 border border-amber-400/30 transition-colors inline-block"
                >
                  Book Bench Consultation
                </Link>

                <Link
                  href="/tuner"
                  className="px-7 py-4 rounded-full bg-[var(--bg-card)] text-[var(--text-main)] border border-[var(--gold)]/40 hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 transition-all font-semibold flex items-center gap-2 shadow-sm"
                >
                  <Mic className="w-4 h-4 text-[var(--gold)]" /> Launch Live Mic Tuner
                </Link>
              </div>

              {/* Stats Badges Pill */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-[var(--border)] max-w-lg">
                <div className="p-3 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border)]">
                  <span className="text-xl font-display font-extrabold text-[var(--gold)] block">18+ Yrs</span>
                  <span className="text-[10px] font-medium text-[var(--text-muted)]">Kathmandu Bench</span>
                </div>
                <div className="p-3 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border)]">
                  <span className="text-xl font-display font-extrabold text-[var(--gold)] block">4.7 ★</span>
                  <span className="text-[10px] font-medium text-[var(--text-muted)]">218+ Reviews</span>
                </div>
                <div className="p-3 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border)]">
                  <span className="text-xl font-display font-extrabold text-emerald-500 block">100%</span>
                  <span className="text-[10px] font-medium text-[var(--text-muted)]">Hide Glue Craft</span>
                </div>
              </div>

            </div>

            {/* Right Column Cinematic Photography Container */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden apple-glass-card border border-[var(--border)] shadow-2xl group">
                <Image
                  src="/images/lutherie_cinematic.jpg"
                  alt="Master Guitar Lutherie Bench Kathmandu"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent opacity-60" />
                
                {/* Floating Glass Pill Badge on Photo */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl apple-glass backdrop-blur-2xl border border-[var(--border)] text-xs font-semibold text-[var(--text-main)] flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[var(--gold)]" />
                    <span>Siddartha Chok, Dallu • Kathmandu</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--gold)] text-black">
                    Est. 2006
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Nepali Lutherie Banner */}
      <section className="py-12 bg-[var(--bg-pill)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider block">
              काठमाडौँ लुथिएरी सम्पदा • Authentic Nepali Craftsmanship
            </span>
            <h3 className="text-xl font-display font-bold text-[var(--text-main)] mt-1">
              Restoring Vintage Guitars to Factory Specifications & Acoustic Brilliance
            </h3>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-xs font-bold text-[var(--text-main)] flex items-center gap-1.5 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Non-invasive Bonding
            </div>
            <div className="px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] text-xs font-bold text-[var(--text-main)] flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[var(--gold)]" /> Zero-Hum Shielding
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Before & After */}
      <LuxuryBeforeAfter />

      {/* Lutherie Disciplines */}
      <RedesignedServices />

      {/* Acoustic Synthesizer Studio */}
      <LuxurySoundTuner />

      {/* Consultation Booking */}
      <LuxuryBooking />

      {/* Footer */}
      <RedesignedFooter />

    </div>
  );
}
