"use client";

import { useState } from "react";
import { GUITAR_STRINGS, playGuitarTone } from "@/utils/audio";
import { Disc3, Music, MoveHorizontal } from "lucide-react";

export default function LuxurySoundTuner() {
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const frets = [0, 1, 3, 5, 7, 9, 12];

  const handlePlayFret = (freq: number, fret: number, note: string) => {
    const pitch = freq * Math.pow(2, fret / 12);
    setActiveNote(`${note} Fret ${fret}`);
    playGuitarTone(pitch, "acoustic");
    setTimeout(() => setActiveNote(null), 300);
  };

  return (
    <section id="studio" className="py-16 sm:py-32 bg-[var(--bg-main)] border-t border-[var(--border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 text-xs font-semibold mb-3">
            <Music className="w-3.5 h-3.5" /> WebAudio Acoustic Synthesizer Engine
          </div>
          <h2 className="text-2xl sm:text-5xl font-display font-extrabold text-[var(--text-main)] tracking-tight">
            Harmonic Resonance Studio
          </h2>
          <p className="text-xs font-medium text-[var(--text-muted)] mt-2 leading-relaxed">
            अकुस्टिक साउन्ड स्टुडियो • Tap fret nodes to test physical guitar pitch resonance.
          </p>
        </div>

        {/* Fret Matrix Container */}
        <div className="max-w-4xl mx-auto apple-glass-card rounded-3xl p-4 sm:p-10 border border-[var(--border)] shadow-2xl">
          
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-[var(--border)]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[var(--gold)]">
                Fretboard Synthesizer
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="sm:hidden text-[10px] font-semibold text-[var(--text-muted)] flex items-center gap-1">
                <MoveHorizontal className="w-3 h-3 text-[var(--gold)]" /> Scroll Fretboard
              </span>
              <div className="px-3 py-1 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 text-[11px] font-bold flex items-center gap-1.5">
                <Disc3 className="w-3.5 h-3.5 text-[var(--gold)] animate-spin" />
                {activeNote ? activeNote : "Touch fret node..."}
              </div>
            </div>
          </div>

          {/* Horizontally Scrollable Fretboard Container on Mobile */}
          <div className="overflow-x-auto pb-2 -mx-2 px-2 scrollbar-none">
            <div className="min-w-[500px] sm:min-w-0 space-y-4">
              {GUITAR_STRINGS.map((stringObj) => (
                <div key={stringObj.note} className="flex items-center gap-3 py-1.5">
                  <span className="w-12 text-xs font-display font-extrabold text-[var(--text-main)] uppercase bg-[var(--bg-pill)] px-2 py-1 rounded-lg text-center border border-[var(--border)] shrink-0">
                    {stringObj.note}
                  </span>

                  <div className="flex-1 flex items-center justify-between relative py-2">
                    {/* String Thickness Bar */}
                    <div
                      className="absolute left-0 right-0 top-1/2 -translate-y-1/2 bg-[var(--gold)]/40 rounded-full"
                      style={{ height: stringObj.thickness }}
                    />

                    {frets.map((fret) => (
                      <button
                        key={fret}
                        onClick={() => handlePlayFret(stringObj.freq, fret, stringObj.note)}
                        className="relative z-10 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[var(--bg-card)] hover:bg-[var(--gold)] hover:text-black border-2 border-[var(--border)] hover:border-[var(--gold)] text-xs font-bold text-[var(--text-main)] transition-all shadow-sm flex items-center justify-center hover:scale-110 active:scale-90 shrink-0"
                      >
                        {fret}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
