"use client";

import { Sun, Moon } from "lucide-react";

const STORAGE_KEY = "lexicodes-theme";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const toggleTheme = () => {
    const root = document.documentElement;
    const isCurrentlyDark = root.classList.contains("dark");
    const nextTheme = isCurrentlyDark ? "light" : "dark";

    if (nextTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
      root.style.colorScheme = "dark";
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }

    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // Ignore storage errors in private browsing
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark or light mode"
      title="Toggle dark or light mode"
      className={`p-2.5 rounded-full bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 shadow-sm cursor-pointer flex items-center justify-center ${className}`}
    >
      <Sun
        size={18}
        className="hidden dark:block transition-transform duration-300 hover:rotate-45"
      />
      <Moon
        size={18}
        className="block dark:hidden transition-transform duration-300 hover:-rotate-12"
      />
    </button>
  );
}
