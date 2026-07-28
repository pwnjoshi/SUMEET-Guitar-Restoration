# SuMeeT Guitar Restoration — Kathmandu Master Lutherie

> Kathmandu's premier acoustic and electric guitar restoration bench since 2006. Built with Next.js App Router, Tailwind CSS, Lucide Icons, and WebAudio API.

---

## 🎸 Overview

**SuMeeT Guitar Restoration** is an Apple-grade, ultra-clean web application built for Kathmandu's leading lutherie workshop. Established in 2006 by SuMeeT at Siddartha Chok, Dallu/Chhauni, Kathmandu, the workshop specializes in structural wood reconstruction, hot hide glue bonding, zero-buzz fret dressing, hum shielding, and nitrocellulose lacquer preservation.

---

## ✨ Features & Architecture

- **Apple Spatial Design System**: Glassmorphism (`apple-glass`), custom dark/light theme switching pill, fluid typography (`Plus Jakarta Sans` & `Outfit`), and curated golden amber accent palettes (`#d97706` / `#f59e0b` / `#fbbf24`).
- **Native iOS App Mobile Interface**: Fixed top floating glass header bar and a 1-tap mobile bottom app dock for phones (`md:hidden`).
- **Interactive Before & After Restoration Slider**: 1-to-1 pixel-synced comparison visualizer allowing musicians to inspect original damage vs. restored condition.
- **Harmonic Resonance Studio**: WebAudio acoustic pitch synthesizer engine for testing fretboard pitch node resonance.
- **Live Guitar Pitch Tuner**: Real-time microphone frequency analyzer using an autocorrelation pitch detection algorithm with radial needle dial and reference tone player.
- **Bench Reservation & Repair Calculator**: Interactive step-by-step repair cost estimator in NPR with direct phone & WhatsApp booking options.

---

## 🚀 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **UI & Styling**: [Tailwind CSS](https://tailwindcss.com/), Vanilla CSS Design Tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio Synthesis**: WebAudio API (Autocorrelation pitch detection & acoustic tone generator)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18.0.0 or higher
- `npm` or `pnpm` or `yarn`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/sumeet-guitar-restoration.git

# 2. Navigate to project directory
cd "sumeet-guitar-restoration"

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── about/          # Our Restoration Story Page
│   │   ├── contact/        # Workshop Location & Booking Page
│   │   ├── gallery/        # Restoration Case Studies Page
│   │   ├── services/       # Lutherie Service Catalog Page
│   │   ├── tuner/          # Live Guitar Pitch Tuner Page
│   │   ├── globals.css     # Design tokens & spatial glass utility classes
│   │   ├── layout.tsx      # Fonts & root html metadata layout
│   │   └── page.tsx        # Main Landing Showcase Page
│   ├── components/
│   │   ├── Header.tsx      # Fixed top header & native mobile bottom dock
│   │   ├── Footer.tsx      # Master footer & navigation directory
│   │   ├── BeforeAfterVisualizer.tsx # 1-to-1 pixel overlay restoration slider
│   │   ├── GuitarTunerModule.tsx    # Live mic autocorrelation tuner
│   │   ├── RepairBookingWizard.tsx  # NPR fee estimator & reservation form
│   │   ├── ServicesCraft.tsx        # Bento Grid lutherie disciplines
│   │   ├── SoundTestTuner.tsx       # Fretboard WebAudio pitch synthesizer
│   │   └── ThemeProvider.tsx        # Floating Apple-style dark/light switcher
│   └── utils/
│       └── audio.ts         # Audio Context pitch synth helper
├── public/
│   └── images/             # Workshop images & restoration showcase assets
└── README.md
```

---

## 📍 Workshop Location & Contact

- **Address**: King Birendra Marg, Siddartha Chok, Dallu / Chhauni, Kathmandu 44600, Nepal
- **Phone Lines**: +977 9861336249 / +977 9851096193
- **Opening Hours**: Sunday - Friday: 10:30 AM - 6:30 PM (Saturday Closed)

---

## 📄 License

Copyright © 2026 SuMeeT Guitar Restoration. All rights reserved.
