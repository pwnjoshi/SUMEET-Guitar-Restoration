"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Mic, Wrench, Image as ImageIcon, Info, Phone, Menu, X, Sparkles, Music } from "lucide-react";

import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function LuxuryHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Live Tuner", href: "/tuner", icon: Mic },
    { label: "Services", href: "/services", icon: Wrench },
    { label: "Gallery", href: "/gallery", icon: ImageIcon },
    { label: "About", href: "/about", icon: Info },
    { label: "Contact", href: "/contact", icon: Phone },
  ];

  const mobileDockItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Tuner", href: "/tuner", icon: Mic },
    { label: "Services", href: "/services", icon: Wrench },
    { label: "Gallery", href: "/gallery", icon: ImageIcon },
    { label: "Book", href: "/contact#booking", icon: Phone },
  ];

  return (
    <>
      {/* Top Floating App Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-3 sm:px-8 pt-3 sm:pt-6">
        <div
          className={`max-w-6xl mx-auto rounded-full transition-all duration-500 px-4 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between ${
            scrolled
              ? "apple-glass shadow-2xl border border-[var(--border)] bg-[var(--bg-glass)]"
              : "bg-[var(--bg-glass)] backdrop-blur-xl border border-[var(--border)] shadow-lg"
          }`}
        >
          {/* Brandmark Emblem Logo */}
          <Link href="/" className="group flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 flex items-center justify-center text-white shadow-sm border border-amber-300/40 shrink-0">
              <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs sm:text-sm font-display font-extrabold text-[var(--text-main)] group-hover:text-[var(--gold)] transition-colors leading-none tracking-wider uppercase">
                SUMEET <span className="text-[var(--gold)]">GUITARS</span>
              </span>
              <span className="text-[7px] sm:text-[8px] font-mono-custom font-semibold text-[var(--gold-muted)] uppercase tracking-wider leading-none mt-0.5">
                Lutherie • Kathmandu
              </span>
            </div>
          </Link>

          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-[var(--bg-pill)] p-1.5 rounded-full border border-[var(--border)]">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[var(--bg-card)] text-[var(--gold)] shadow-sm font-semibold"
                      : "text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]/50"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[var(--gold)]" : "text-[var(--text-muted)]"}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action Button & Mobile Trigger */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[var(--bg-pill)] text-[var(--text-main)] border border-[var(--border)] hover:bg-[var(--bg-card)] transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-amber-600" />
                  <span className="hidden sm:inline">Dark</span>
                </>
              )}
            </button>

            <Link
              href="/contact#booking"
              className="px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-white font-bold text-[11px] sm:text-xs shadow-md whitespace-nowrap border border-amber-400/30 transition-colors"
            >
              Book Repair
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-[var(--bg-pill)] text-[var(--text-main)] border border-[var(--border)] hover:bg-[var(--bg-card)] transition-colors shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Dim Backdrop Overlay */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
          />
        )}

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 max-w-6xl mx-auto rounded-3xl bg-[var(--bg-card)] p-5 border border-[var(--border)] shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200 space-y-4 relative z-50">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`p-3.5 rounded-2xl text-sm font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30 font-bold"
                        : "text-[var(--text-main)] hover:bg-[var(--bg-pill)] bg-[var(--bg-pill)]/50 border border-[var(--border)]/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-[var(--gold)]" />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Native App Bottom Dock Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2 pb-safe bg-[var(--bg-glass)] backdrop-blur-2xl border-t border-[var(--border)] shadow-[0_-10px_25px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-5 gap-1 items-center justify-items-center">
          {mobileDockItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl w-full transition-all ${
                  isActive
                    ? "text-[var(--gold)] font-bold bg-[var(--gold)]/10"
                    : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                }`}
              >
                <Icon className="w-5 h-5 mb-0.5" />
                <span className="text-[9px] font-semibold tracking-tight">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
