"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#projects" },
  { name: "How It Works", href: "#process" },
  { name: "About Me", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl py-3 shadow-lg shadow-black/5 dark:shadow-black/20 border-border"
          : "bg-background/70 backdrop-blur-md py-4 border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          className="flex items-center group focus:outline-none"
          aria-label="LexiCodes Digital Home"
        >
          <img
            src="/logo-dark.png"
            alt="LexiCodes Digital — Connecticut Web Design & Development"
            decoding="async"
            className="hidden dark:block h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <img
            src="/logo.png"
            alt="LexiCodes Digital — Connecticut Web Design & Development"
            decoding="async"
            className="block dark:hidden h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold tracking-wide text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white dark:text-stone-950 font-bold text-sm hover:bg-primary-hover transition-all duration-300 shadow-lg shadow-primary/20"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Mobile Controls (Theme Toggle + Hamburger Button) */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <ThemeToggle />
          <button
            className="text-foreground hover:text-primary transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-[65px] bg-background/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 px-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold tracking-wider text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white dark:text-stone-950 font-bold text-lg hover:bg-primary-hover transition-all shadow-xl shadow-primary/20"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight size={20} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
