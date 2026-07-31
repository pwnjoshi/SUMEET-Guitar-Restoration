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
      
      {/* Floating Theme Switcher Button */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-white border border-amber-300/40 shadow-2xl transition-colors flex items-center gap-2 font-mono-custom text-xs font-bold group"
        title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
      >
        {theme === "dark" ? (
          <>
            <Sun className="w-4 h-4 text-amber-200 group-hover:rotate-45 transition-transform" />
            <span>Light</span>
          </>
        ) : (
          <>
            <Moon className="w-4 h-4 text-amber-100 group-hover:-rotate-12 transition-transform" />
            <span>Dark</span>
          </>
        )}
      </button>
    </div>
  );
}
