"use client";

import Link from "next/link";
import { MapPin, Phone, Clock, MessageCircle, Heart, ShieldCheck, Wrench, Award } from "lucide-react";

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
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex flex-col">
              <h3 className="text-2xl font-display font-extrabold tracking-[0.15em] text-[var(--text-main)] uppercase">
                NEEV GUITARS
              </h3>
              <span className="text-xs font-bold tracking-[0.15em] text-[var(--gold)]">
                Guitar Restoration • Kathmandu • Est. 2006
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed">
              Kathmandu's premier acoustic and electric guitar restoration bench. Specialized in neck structural repairs, lacquering, refretting, and precision acoustic calibration since 2006.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2 space-y-3 text-xs">
            <h4 className="font-display font-bold uppercase tracking-wider text-[var(--gold)]">
              Pages
            </h4>
            <div className="flex flex-col gap-2 font-medium text-[var(--text-muted)]">
              <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
              <Link href="/tuner" className="hover:text-[var(--gold)] transition-colors">Live Tuner</Link>
              <Link href="/services" className="hover:text-[var(--gold)] transition-colors">Services</Link>
              <Link href="/gallery" className="hover:text-[var(--gold)] transition-colors">Gallery</Link>
              <Link href="/about" className="hover:text-[var(--gold)] transition-colors">About</Link>
              <Link href="/contact" className="hover:text-[var(--gold)] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-display font-bold uppercase tracking-wider text-[var(--gold)]">
              Workshop Location
            </h4>
            <div className="flex items-start gap-2.5 text-[var(--text-main)] leading-relaxed">
              <MapPin className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
              <span>King Birendra Marg, Siddartha Chok, Dallu / Chhauni, Kathmandu 44600, Nepal</span>
            </div>
            <div className="flex items-center gap-2.5 text-[var(--text-muted)] pt-1">
              <Clock className="w-4 h-4 text-[var(--gold)] shrink-0" />
              <span>Sunday - Friday: 10:30 AM - 6:30 PM (Saturday Closed)</span>
            </div>
          </div>

          {/* Contact & WhatsApp */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-display font-bold uppercase tracking-wider text-[var(--gold)]">
              Direct Contact
            </h4>
            <div className="space-y-1.5">
              <a href="tel:9861336249" className="hover:text-[var(--gold)] block font-semibold text-[var(--text-main)] transition-colors">
                +977 9861336249
              </a>
              <a href="tel:9851096193" className="hover:text-[var(--gold)] block text-[var(--text-muted)] transition-colors">
                +977 9851096193
              </a>
            </div>
            <a
              href="https://wa.me/9779861336249"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 font-semibold text-xs transition-all shadow-sm mt-2"
            >
              <MessageCircle className="w-4 h-4" /> Open WhatsApp Chat
            </a>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <p>© {new Date().getFullYear()} Neev Guitars. Kathmandu, Nepal.</p>
          <p className="flex items-center gap-1">
            Handcrafted with <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" /> in Kathmandu
          </p>
        </div>

      </div>
    </footer>
  );
}
