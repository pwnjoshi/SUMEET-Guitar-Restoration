"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { SlidersHorizontal, Layers, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function LuxuryBeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handleMove = (clientX: number, rect: DOMRect) => {
    let p = ((clientX - rect.left) / rect.width) * 100;
    if (p < 0) p = 0;
    if (p > 100) p = 100;
    setSliderPos(p);
  };

  return (
    <section id="restoration" className="py-24 sm:py-32 bg-[var(--bg-main)] border-t border-[var(--border)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 border-b border-[var(--border)] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 text-xs font-semibold mb-3">
              <Layers className="w-3.5 h-3.5" /> Bench Preservation Showcase
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[var(--text-main)] tracking-tight">
              Before & After Restoration
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[var(--text-muted)] hidden sm:inline">Quick Compare:</span>
            {[
              { label: "Damaged Only", val: 100 },
              { label: "50% Split", val: 50 },
              { label: "Restored Only", val: 0 },
            ].map((p) => (
              <button
                key={p.val}
                onClick={() => setSliderPos(p.val)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  sliderPos === p.val
                    ? "bg-[var(--gold)] text-black font-bold shadow-md"
                    : "bg-[var(--bg-pill)] text-[var(--text-muted)] hover:text-[var(--text-main)] border border-[var(--border)]"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Visualizer Container */}
        <div className="max-w-5xl mx-auto apple-glass-card rounded-3xl p-3 sm:p-4 border border-[var(--border)] shadow-2xl">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none group cursor-ew-resize"
            onMouseMove={(e) => handleMove(e.clientX, e.currentTarget.getBoundingClientRect())}
            onTouchMove={(e) => handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect())}
            onClick={(e) => handleMove(e.clientX, e.currentTarget.getBoundingClientRect())}
          >
            {/* Base Image: Restored */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/restored.jpg"
                alt="Restored Guitar Masterpiece"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute bottom-3 right-3 sm:top-4 sm:bottom-auto sm:right-4 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-emerald-950/80 backdrop-blur-xl border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-xs font-bold flex items-center gap-1 sm:gap-1.5 shadow-lg z-20 pointer-events-none whitespace-nowrap">
                <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Restored Condition
              </div>
            </div>

            {/* Overlay Image: Damaged (Clipped by sliderPos) */}
            <div
              className="absolute top-0 left-0 bottom-0 overflow-hidden z-10"
              style={{ width: `${sliderPos}%` }}
            >
              <div
                className="relative h-full"
                style={{ width: containerWidth ? `${containerWidth}px` : "100%", height: "100%" }}
              >
                <Image
                  src="/images/damaged.jpg"
                  alt="Damaged Vintage Instrument"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-rose-950/80 backdrop-blur-xl border border-rose-500/40 text-rose-400 text-[10px] sm:text-xs font-bold flex items-center gap-1 sm:gap-1.5 shadow-lg z-20 pointer-events-none whitespace-nowrap">
                  <AlertTriangle className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> Original Damage
                </div>
              </div>
            </div>

            {/* Handle Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--gold-bright)] via-[var(--gold)] to-[var(--gold-bright)] shadow-[0_0_15px_var(--gold)] z-30 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[var(--bg-card)] border-2 border-[var(--gold)] flex items-center justify-center text-[var(--gold)] shadow-2xl hover:scale-110 transition-transform">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>

          </div>

          {/* Interactive Feature Tags under Visualizer */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border)] text-xs">
              <span className="font-bold text-[var(--gold)] block mb-0.5">01. Headstock Splice</span>
              <p className="text-[var(--text-muted)]">Hot hide glue grain-matched mahogany joint cleating.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border)] text-xs">
              <span className="font-bold text-[var(--gold)] block mb-0.5">02. Fret Crown Leveling</span>
              <p className="text-[var(--text-muted)]">Mirror hand polish & buzz-free neck truss calibration.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-[var(--bg-pill)] border border-[var(--border)] text-xs">
              <span className="font-bold text-[var(--gold)] block mb-0.5">03. Nitro Touchup</span>
              <p className="text-[var(--text-muted)]">Aged amber lacquer blend preserving vintage patina.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
