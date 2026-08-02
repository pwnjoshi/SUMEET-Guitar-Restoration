"use client";

import Link from "next/link";
import { MapPin, Phone, Clock, MessageCircle, Heart, ShieldCheck, Wrench, Award, Music } from "lucide-react";

export default function RedesignedFooter() {
  return (
    <footer className="relative bg-[var(--bg-main)] border-t border-[var(--border)] pt-16 sm:pt-20 pb-28 sm:pb-12 overflow-hidden transition-colors duration-300">
      
      {/* Background Subtle Gradient & Himalayan Silhouette Glow */}
      <div className="absolute inset-0 himalaya-silhouette-bg pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Feature Highlights Pill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          <div className="p-5 rounded-2xl apple-glass flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-[var(--text-main)]">Master Lutherie</h5>
              <p className="text-[11px] text-[var(--text-muted)]">18+ Years Bench Experience</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl apple-glass flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[var(--gold)]/10 flex items-center justify-center text-[var(--gold)] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-[var(--text-main)]">Tone Preservation</h5>
              <p className="text-[11px] text-[var(--text-muted)]">Hand-applied nitro & wood bonding</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl apple-glass flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs font-bold text-[var(--text-main)]">Direct WhatsApp Tech</h5>
              <p className="text-[11px] text-[var(--text-muted)]">Quick repair diagnosis</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-16 border-b border-[var(--border)]">
          
          {/* Brand Info Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center text-white shadow-sm border border-amber-300/40 shrink-0">
                <Music className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-display font-extrabold tracking-wider text-[var(--text-main)] group-hover:text-[var(--gold)] transition-colors leading-none uppercase">
                  SUMEET <span className="text-[var(--gold)]">GUITARS</span>
                </span>
                <span className="text-[8px] font-mono-custom font-semibold text-[var(--gold-muted)] uppercase tracking-wider mt-0.5">
                  Restoration & Lutherie • Est. 2006
                </span>
              </div>
            </Link>

            <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-sm font-medium">
              Kathmandu&apos;s premier acoustic and electric guitar restoration bench. Specialized in neck structural repairs, lacquering, refretting, and precision acoustic calibration.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-2 space-y-3 text-xs">
            <h4 className="font-display font-bold uppercase tracking-wider text-[var(--gold)] text-[11px]">
              Explore
            </h4>
            <div className="flex flex-col gap-2 font-medium text-[var(--text-muted)]">
              <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
              <Link href="/tuner" className="hover:text-[var(--gold)] transition-colors">Live Pitch Tuner</Link>
              <Link href="/services" className="hover:text-[var(--gold)] transition-colors">Bench Services</Link>
              <Link href="/gallery" className="hover:text-[var(--gold)] transition-colors">Restoration Gallery</Link>
              <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About Bench</Link>
              <Link href="/contact" className="hover:text-[var(--gold)] transition-colors">Book Consultation</Link>
            </div>
          </div>

          {/* Location & Hours Column */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-display font-bold uppercase tracking-wider text-[var(--gold)] text-[11px]">
              Workshop Bench
            </h4>
            <div className="flex items-start gap-2.5 text-[var(--text-main)] leading-relaxed font-medium">
              <MapPin className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
              <span>Siddartha Chok, Dallu / Chhauni, Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center gap-2.5 text-[var(--text-muted)] pt-1 font-medium">
              <Clock className="w-4 h-4 text-[var(--gold)] shrink-0" />
              <span>Sun - Fri: 10:30 AM - 6:30 PM</span>
            </div>
          </div>

          {/* Contact & WhatsApp Column */}
          <div className="md:col-span-2 space-y-3 text-xs">
            <h4 className="font-display font-bold uppercase tracking-wider text-[var(--gold)] text-[11px]">
              Direct Tech Line
            </h4>
            <div className="space-y-1 font-semibold text-[var(--text-main)]">
              <a href="tel:9861336249" className="hover:text-[var(--gold)] block transition-colors">
                +977 9861336249
              </a>
              <a href="tel:9851096193" className="hover:text-[var(--gold)] block text-[var(--text-muted)] text-[11px] transition-colors font-medium">
                +977 9851096193
              </a>
            </div>
            <a
              href="https://wa.me/9779861336249"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 font-semibold text-[11px] transition-all shadow-sm mt-1"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} SuMeeT Guitar Restoration. Kathmandu, Nepal.</p>
          <p className="flex items-center gap-1">
            Handcrafted with <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" /> in Kathmandu
          </p>
        </div>

      </div>
    </footer>
  );
}
