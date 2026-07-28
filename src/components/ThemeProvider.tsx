"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Sparkles } from "lucide-react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("sumeet-theme") as "dark" | "light" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("sumeet-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  };

  return (
    <div className={theme === "light" ? "light-mode" : "dark-mode"}>
      {children}
      
      {/* Floating Apple-style Segmented Theme Pill Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 px-4 py-2.5 rounded-full apple-glass text-[var(--gold)] border border-[var(--border)] shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group backdrop-blur-2xl"
        title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
      >
        {theme === "dark" ? (
          <>
            <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
            <span className="text-xs font-bold text-[var(--text-main)]">Light</span>
          </>
        ) : (
          <>
            <Moon className="w-4 h-4 text-amber-600 group-hover:-rotate-12 transition-transform" />
            <span className="text-xs font-bold text-[var(--text-main)]">Dark</span>
          </>
        )}
      </button>
    </div>
  );
}
