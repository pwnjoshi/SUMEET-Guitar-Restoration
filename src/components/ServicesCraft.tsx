"use client";

import { Hammer, Ruler, Zap, Target, ChevronRight, Wrench } from "lucide-react";

export default function RedesignedServices() {
  const craftServices = [
    {
      code: "01",
      icon: Hammer,
      title: "Wood & Structural Reconstruction",
      subtitle: "काठ रिस्टोरेशन • Structural Grain Alignment",
      desc: "Cleating, hot hide glue bonding, and grain-matched splice work for cracked headstocks, fractured heels, and soundboard splits.",
    },
    {
      code: "02",
      icon: Ruler,
      title: "Fret Leveling & Crown Dressing",
      subtitle: "फ्रेट ड्रेसिङ • Zero Buzz Calibration",
      desc: "Precision straight-edge leveling, custom crowning, and micro-polishing to remove buzz while retaining maximum fret height.",
    },
    {
      code: "03",
      icon: Zap,
      title: "Custom Electronics & Rewiring",
      subtitle: "इलेक्ट्रोनिक्स • Copper Shielding",
      desc: "Vintage pickup potting, vintage cloth wire loom dressing, pot noise treatment, and custom copper foil cavity shielding.",
    },
    {
      code: "04",
      icon: Target,
      title: "Nut & Saddle Calibration",
      subtitle: "नट तथा स्याडल • Intonation Tuning",
      desc: "Bone nut slot carving, radius matching, saddle compensation, and truss rod adjustment for supreme intonation and action.",
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 border-b border-[var(--border)] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 text-xs font-semibold mb-3">
              <Wrench className="w-3.5 h-3.5" /> Bench Catalog • 18 Years Experience
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[var(--text-main)] tracking-tight">
              Lutherie Disciplines & Services
            </h2>
          </div>
          <p className="text-xs text-[var(--text-muted)] font-medium max-w-md leading-relaxed">
            Every instrument undergo meticulous physical inspection, non-invasive wood stabilization, and acoustic tuning in Kathmandu.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {craftServices.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="apple-glass-card p-8 rounded-3xl border border-[var(--border)] group relative overflow-hidden flex flex-col justify-between"
              >

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-[var(--text-main)] group-hover:text-[var(--gold)] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-semibold text-[var(--gold)] block mt-0.5 mb-3">
                    {item.subtitle}
                  </span>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--border)] flex items-center justify-between text-xs font-semibold text-[var(--gold)] group-hover:translate-x-1 transition-transform">
                  <span>Book Service Inspection</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
