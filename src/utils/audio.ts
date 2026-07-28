"use client";

import { useState, useEffect } from "react";

export function playGuitarTone(freq: number, type: "acoustic" | "electric" = "acoustic") {
  if (typeof window === "undefined") return;

  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    if (type === "acoustic") {
      osc.type = "triangle";
    } else {
      osc.type = "sawtooth";
    }

    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Natural plucked decay
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 1.25);
  } catch (err) {
    console.error("Audio API error", err);
  }
}

export const GUITAR_STRINGS = [
  { note: "E4", freq: 329.63, label: "1st (High E)", thickness: "1px", color: "from-amber-200 to-amber-400" },
  { note: "B3", freq: 246.94, label: "2nd (B)", thickness: "1.5px", color: "from-amber-300 to-amber-500" },
  { note: "G3", freq: 196.00, label: "3rd (G)", thickness: "2px", color: "from-yellow-400 to-amber-600" },
  { note: "D3", freq: 146.83, label: "4th (D)", thickness: "2.5px", color: "from-amber-500 to-yellow-700" },
  { note: "A2", freq: 110.00, label: "5th (A)", thickness: "3.2px", color: "from-yellow-600 to-amber-800" },
  { note: "E2", freq: 82.41, label: "6th (Low E)", thickness: "4px", color: "from-amber-700 to-amber-900" },
];
