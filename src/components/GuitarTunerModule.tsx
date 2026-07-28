"use client";

import { useState, useEffect, useRef } from "react";
import { Mic, MicOff, Volume2, CheckCircle2, Activity, AlertCircle } from "lucide-react";
import { GUITAR_STRINGS, playGuitarTone } from "@/utils/audio";

export default function GuitarTunerModule() {
  const [listening, setListening] = useState(false);
  const [detectedPitch, setDetectedPitch] = useState<number | null>(null);
  const [closestString, setClosestString] = useState<{ note: string; freq: number; label: string } | null>(null);
  const [centsOff, setCentsOff] = useState<number>(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Frequency pitch detection using autocorrelation algorithm
  const autoCorrelate = (buffer: Float32Array, sampleRate: number) => {
    let SIZE = buffer.length;
    let rms = 0;
    for (let i = 0; i < SIZE; i++) {
      let val = buffer[i];
      rms += val * val;
    }
    rms = Math.sqrt(rms / SIZE);
    if (rms < 0.01) return -1; // Too quiet

    let r1 = 0, r2 = SIZE - 1, thres = 0.2;
    for (let i = 0; i < SIZE / 2; i++) {
      if (Math.abs(buffer[i]) < thres) {
        r1 = i;
        break;
      }
    }
    for (let i = 1; i < SIZE / 2; i++) {
      if (Math.abs(buffer[SIZE - i]) < thres) {
        r2 = SIZE - i;
        break;
      }
    }

    buffer = buffer.slice(r1, r2);
    SIZE = buffer.length;

    let c = new Float32Array(SIZE);
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE - i; j++) {
        c[i] = c[i] + buffer[j] * buffer[j + i];
      }
    }

    let d = 0;
    while (c[d] > c[d + 1]) d++;
    let maxval = -1, maxpos = -1;
    for (let i = d; i < SIZE; i++) {
      if (c[i] > maxval) {
        maxval = c[i];
        maxpos = i;
      }
    }
    let T0 = maxpos;

    return sampleRate / T0;
  };

  const startMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const audioCtx = new AudioContextClass();
      audioCtxRef.current = audioCtx;

      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 2048;
      analyserRef.current = analyser;

      const source = audioCtx.createMediaStreamSource(stream);
      source.connect(analyser);

      setListening(true);
      updatePitch();
    } catch (err) {
      alert("Microphone permission required for tuner functionality.");
      console.error(err);
    }
  };

  const stopMicrophone = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((t) => t.stop());
    }
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
    }
    setListening(false);
    setDetectedPitch(null);
    setClosestString(null);
  };

  const updatePitch = () => {
    if (!analyserRef.current || !audioCtxRef.current) return;
    const buf = new Float32Array(2048);
    analyserRef.current.getFloatTimeDomainData(buf);
    const pitch = autoCorrelate(buf, audioCtxRef.current.sampleRate);

    if (pitch !== -1 && pitch >= 60 && pitch <= 450) {
      setDetectedPitch(Math.round(pitch * 10) / 10);

      // Find closest standard note
      let minDiff = Infinity;
      let match = GUITAR_STRINGS[0];

      GUITAR_STRINGS.forEach((s) => {
        const diff = Math.abs(s.freq - pitch);
        if (diff < minDiff) {
          minDiff = diff;
          match = s;
        }
      });

      setClosestString(match);

      // Calculate cents deviation
      const cents = Math.floor(1200 * Math.log2(pitch / match.freq));
      setCentsOff(cents);
    }

    animFrameRef.current = requestAnimationFrame(updatePitch);
  };

  useEffect(() => {
    return () => stopMicrophone();
  }, []);

  return (
    <div className="max-w-4xl mx-auto apple-glass-card rounded-3xl p-5 sm:p-10 border border-[var(--border)] shadow-2xl space-y-8">
      
      {/* Top Action Control */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[var(--border)]">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--gold)]">
          <Activity className="w-4 h-4 text-[var(--gold)]" />
          <span>Mic Frequency Autocorrelation</span>
        </div>

        <button
          onClick={listening ? stopMicrophone : startMicrophone}
          className={`w-full sm:w-auto px-7 py-3 rounded-full font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-xl ${
            listening
              ? "bg-rose-500/20 text-rose-500 border border-rose-500/40 animate-pulse"
              : "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:scale-105 active:scale-95"
          }`}
        >
          {listening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4 text-[var(--gold)]" />}
          <span>{listening ? "Stop Mic Tuner" : "Start Live Tuner"}</span>
        </button>
      </div>

      {/* Main Dial Gauge Visualizer */}
      <div className="text-center py-4 space-y-6">
        
        {/* Radial Tuning Needle Box */}
        <div className="relative w-64 sm:w-72 h-32 sm:h-36 mx-auto border-b-2 border-[var(--border)] overflow-hidden flex items-end justify-center rounded-t-full bg-[var(--bg-pill)]/60 p-4 shadow-inner">
          
          {/* Faint Scale Markings */}
          <div className="absolute inset-0 flex justify-between px-6 pt-5 pointer-events-none opacity-40 text-[9px] font-bold text-[var(--text-muted)]">
            <span>-50</span>
            <span>-25</span>
            <span className="text-[var(--gold)] font-extrabold">0</span>
            <span>+25</span>
            <span>+50</span>
          </div>

          {/* Needle Indicator */}
          <div
            className="w-1.5 h-28 sm:h-32 bg-gradient-to-t from-[var(--gold)] to-[var(--gold-bright)] origin-bottom transition-transform duration-100 rounded-full shadow-[0_0_15px_var(--gold)]"
            style={{
              transform: `rotate(${listening && closestString ? Math.max(-45, Math.min(45, centsOff * 1.5)) : 0}deg)`,
            }}
          />

          <div className="absolute bottom-0 w-7 h-7 rounded-full bg-[var(--gold)] border-4 border-[var(--bg-card)] shadow-md" />
        </div>

        {/* Big Note Indicator */}
        <div>
          <span className="text-5xl sm:text-6xl font-display font-extrabold text-[var(--text-main)] block tracking-tight">
            {closestString ? closestString.note : "---"}
          </span>
          <span className="text-xs font-semibold text-[var(--text-muted)] mt-1 block">
            {detectedPitch ? `${detectedPitch} Hz` : listening ? "Pluck a guitar string..." : "Tap Start Live Tuner to begin"}
          </span>
        </div>

        {/* Pitch Cents Deviation Pill */}
        {closestString && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border shadow-sm">
            {Math.abs(centsOff) <= 4 ? (
              <span className="text-emerald-500 border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 rounded-full flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Perfect Pitch (In Tune)
              </span>
            ) : centsOff < 0 ? (
              <span className="text-amber-500 border-amber-500/30 bg-amber-500/10 px-3.5 py-1 rounded-full flex items-center gap-1.5 font-bold">
                <AlertCircle className="w-3.5 h-3.5 text-amber-500" /> Flat ({centsOff} Cents)
              </span>
            ) : (
              <span className="text-rose-500 border-rose-500/30 bg-rose-500/10 px-3.5 py-1 rounded-full flex items-center gap-1.5 font-bold">
                <AlertCircle className="w-3.5 h-3.5 text-rose-500" /> Sharp (+{centsOff} Cents)
              </span>
            )}
          </div>
        )}

      </div>

      {/* Target Reference Tone Grid */}
      <div className="pt-6 border-t border-[var(--border)]">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold)] block mb-3.5 text-center">
          Target Reference Pitch Notes (Tap to Play Tone)
        </span>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
          {GUITAR_STRINGS.map((str) => (
            <button
              key={str.note}
              onClick={() => playGuitarTone(str.freq, "acoustic")}
              className="p-3 sm:p-3.5 rounded-2xl bg-[var(--bg-pill)] border border-[var(--border)] hover:border-[var(--gold)] text-center transition-all group active:scale-95 shadow-sm"
            >
              <span className="block text-sm sm:text-base font-display font-bold text-[var(--text-main)] group-hover:text-[var(--gold)]">
                {str.note}
              </span>
              <span className="text-[10px] font-medium text-[var(--text-muted)] block mt-0.5">
                {str.freq} Hz
              </span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
