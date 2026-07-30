"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Wrench, ShieldCheck, Sparkles, Phone, User, Calculator } from "lucide-react";

export default function LuxuryBooking() {
  const [instrument, setInstrument] = useState("Acoustic Guitar");
  const [selectedWork, setSelectedWork] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const workItems = [
    { label: "Action Height & Neck Truss Rod Calibration", price: 1500 },
    { label: "Fret Leveling, Crowning & Mirror Polish", price: 3500 },
    { label: "Structural Crack & Wood Fracture Bonding", price: 5000 },
    { label: "Electronics Rewiring & Copper Foil Shielding", price: 2500 },
    { label: "Custom Nitro Lacquer Touchup & Refinishing", price: 4000 },
  ];

  const toggleWork = (label: string) => {
    if (selectedWork.includes(label)) {
      setSelectedWork(selectedWork.filter((item) => item !== label));
    } else {
      setSelectedWork([...selectedWork, label]);
    }
  };

  const totalEstimate = selectedWork.reduce((sum, label) => {
    const match = workItems.find((w) => w.label === label);
    return sum + (match ? match.price : 0);
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-16 sm:py-32 bg-[var(--bg-main)] border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" /> Bench Reservation & Repair Calculator
          </div>
          <h2 className="text-2xl sm:text-5xl font-display font-extrabold text-[var(--text-main)] tracking-tight">
            Schedule a Lutherie Consultation
          </h2>
          <p className="text-xs font-medium text-[var(--text-muted)] mt-2 leading-relaxed">
            King Birendra Marg, Siddartha Chok, Dallu / Chhauni • Phone: +977 9861336249 / 9851096193
          </p>
        </div>

        {/* Card Container */}
        <div className="apple-glass-card rounded-3xl p-5 sm:p-12 border border-[var(--border)] shadow-2xl">
          {submitted ? (
            <div className="text-center py-8 sm:py-12 space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-main)]">Consultation Reserved!</h3>
              <p className="text-xs text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
                Thank you <strong className="text-[var(--text-main)]">{name}</strong>. General Neev Guitars has logged your appointment request for <strong className="text-[var(--gold)]">{instrument}</strong>. We will call you shortly on <strong className="text-[var(--text-main)]">{phone}</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setSelectedWork([]);
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-[var(--bg-pill)] text-[var(--text-main)] text-xs font-bold border border-[var(--border)] hover:bg-[var(--bg-card)] transition-colors"
              >
                Book Another Instrument
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              
              {/* Step 1 */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--gold)] mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[var(--gold)]/20 text-[var(--gold)] flex items-center justify-center text-[10px]">1</span>
                  Select Instrument Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  {["Acoustic Guitar", "Electric Guitar", "Bass Guitar", "Ukulele / Classical"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setInstrument(type)}
                      className={`p-3 sm:p-3.5 text-xs font-semibold rounded-2xl border text-center transition-all ${
                        instrument === type
                          ? "bg-[var(--gold)] text-black border-[var(--gold)] font-bold shadow-md scale-[1.02]"
                          : "bg-[var(--bg-pill)] text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--gold)] hover:text-[var(--text-main)]"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[var(--gold)] mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[var(--gold)]/20 text-[var(--gold)] flex items-center justify-center text-[10px]">2</span>
                  Select Required Repair Services
                </label>
                <div className="space-y-2 sm:space-y-2.5">
                  {workItems.map((item) => {
                    const active = selectedWork.includes(item.label);
                    return (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => toggleWork(item.label)}
                        className={`w-full p-3.5 sm:p-4 rounded-2xl border text-left transition-all flex items-center justify-between text-xs gap-3 ${
                          active
                            ? "bg-[var(--gold)]/10 border-[var(--gold)] text-[var(--text-main)] font-semibold shadow-sm"
                            : "bg-[var(--bg-pill)] border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--gold)]"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${active ? "border-[var(--gold)] bg-[var(--gold)] text-black" : "border-[var(--border)]"}`}>
                            {active && <CheckCircle2 className="w-3 h-3 text-black" />}
                          </div>
                          <span className="truncate">{item.label}</span>
                        </div>
                        <span className="text-[var(--gold)] font-bold shrink-0">NPR {item.price.toLocaleString()}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Estimate Pill Box */}
              <div className="flex items-center justify-between p-3.5 sm:p-4 bg-[var(--bg-pill)] rounded-2xl border border-[var(--border)]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-muted)]">
                  <Calculator className="w-4 h-4 text-[var(--gold)] shrink-0" />
                  <span>Estimated Total Bench Fee</span>
                </div>
                <span className="text-lg sm:text-xl font-display font-extrabold text-[var(--gold)]">
                  NPR {totalEstimate > 0 ? totalEstimate.toLocaleString() : "Custom Quote"}
                </span>
              </div>

              {/* Step 3 Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="relative">
                  <User className="w-4 h-4 text-[var(--text-muted)] absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[var(--bg-pill)] border border-[var(--border)] rounded-2xl pl-11 pr-4 py-3 sm:py-3.5 text-xs text-[var(--text-main)] focus:outline-none focus:border-[var(--gold)] font-medium"
                  />
                </div>

                <div className="relative">
                  <Phone className="w-4 h-4 text-[var(--text-muted)] absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (e.g. 9861336249)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[var(--bg-pill)] border border-[var(--border)] rounded-2xl pl-11 pr-4 py-3 sm:py-3.5 text-xs text-[var(--text-main)] focus:outline-none focus:border-[var(--gold)] font-medium"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 sm:py-4 rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-display font-bold text-xs uppercase tracking-wider hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-2xl group"
              >
                <span>Confirm Appointment Reservation</span>
                <ArrowRight className="w-4 h-4 text-[var(--gold)] group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
