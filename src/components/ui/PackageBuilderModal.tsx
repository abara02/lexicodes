"use client";

import { useEffect, useState } from "react";
import { Send, Sparkles, X } from "lucide-react";

interface PackageBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PAGE_COUNT_OPTIONS = [
  "1–3 pages (e.g. Home, About, Contact)",
  "4–6 pages (e.g. Home, About, Services, Gallery, Contact)",
  "7–10 pages",
  "10+ pages",
  "Not sure yet",
];

const ECOMMERCE_OPTIONS = [
  "Yes — I want to sell products online",
  "No — informational / service website only",
  "Maybe in the future",
];

const CONTENT_UPDATE_OPTIONS = [
  "Yes — I want to easily update events, specials, or content myself (CMS)",
  "Occasionally — I'd prefer you handle updates for me",
  "No — mostly static pages",
];

/** Compiles custom package builder form fields into a structured message string. */
export function compilePackageMessage(formData: FormData): string {
  const description = ((formData.get("description") as string) || "").trim();
  const pages = (formData.get("pages") as string) || "Not specified";
  const ecommerce = (formData.get("ecommerce") as string) || "Not specified";
  const contentUpdates = (formData.get("contentUpdates") as string) || "Not specified";
  const budget = ((formData.get("budget") as string) || "").trim() || "Not specified";

  return [
    "--- Custom Package Request ---",
    `Approx. Pages Needed: ${pages}`,
    `Selling Products (E-Commerce): ${ecommerce}`,
    `Manage Content / Frequent Updates (Events, Specials, etc.): ${contentUpdates}`,
    `Estimated Budget: ${budget}`,
    "",
    "Project Description:",
    description,
  ].join("\n");
}

/** Shared form fields for building a custom website package. */
export function PackageBuilderFields({ disabled }: { disabled: boolean }) {
  return (
    <div className="space-y-5">
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">
          Describe What You&apos;re Looking For *
        </label>
        <textarea
          required
          name="description"
          rows={3}
          minLength={5}
          maxLength={4000}
          disabled={disabled}
          className="w-full bg-white dark:bg-stone-950 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors font-medium text-sm sm:text-base resize-none text-foreground disabled:opacity-60"
          placeholder="Tell me about your business, the style or features you have in mind, and what you want your website to do."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">
            Approx. How Many Pages? *
          </label>
          <select
            required
            name="pages"
            disabled={disabled}
            defaultValue=""
            className="w-full bg-white dark:bg-stone-950 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors font-medium text-sm text-foreground disabled:opacity-60"
          >
            <option value="" disabled>
              Select page count...
            </option>
            {PAGE_COUNT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">
            Estimated Budget *
          </label>
          <input
            required
            name="budget"
            type="text"
            maxLength={60}
            disabled={disabled}
            className="w-full bg-white dark:bg-stone-950 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors font-medium text-sm text-foreground disabled:opacity-60"
            placeholder="(amount or range)"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">
          Are You Selling Products (E-Commerce)? *
        </label>
        <select
          required
          name="ecommerce"
          disabled={disabled}
          defaultValue=""
          className="w-full bg-white dark:bg-stone-950 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors font-medium text-sm text-foreground disabled:opacity-60"
        >
          <option value="" disabled>
            Select an option...
          </option>
          {ECOMMERCE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">
          Need to Manage Content or Make Frequent Updates? *
        </label>
        <p className="text-xs text-muted ml-1">
          For example: promoting upcoming events, daily specials, menus, or blog posts.
        </p>
        <select
          required
          name="contentUpdates"
          disabled={disabled}
          defaultValue=""
          className="w-full bg-white dark:bg-stone-950 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors font-medium text-sm text-foreground disabled:opacity-60"
        >
          <option value="" disabled>
            Select an option...
          </option>
          {CONTENT_UPDATE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

/** Modal form for visitors to request a custom-built website package. */
export default function PackageBuilderModal({ isOpen, onClose }: PackageBuilderModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    setIsSubmitting(true);
    setSuccess(false);
    setError(null);

    try {
      const formData = new FormData(formElement);
      const compiledMessage = compilePackageMessage(formData);

      const payload = {
        name: (formData.get("name") as string) || "",
        email: (formData.get("email") as string) || "",
        business: (formData.get("business") as string) || "",
        serviceType: "Build Your Own Package",
        message: compiledMessage,
        _gotcha: (formData.get("_gotcha") as string) || "",
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      let result: { success?: boolean; id?: string; error?: string } | null = null;
      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (response.ok && result?.success === true && Boolean(result?.id)) {
        setSuccess(true);
        formElement.reset();
      } else {
        setError(
          result?.error ||
            `Unable to send request (HTTP ${response.status}). Please try again or email lexi.codes.dev@gmail.com directly.`
        );
      }
    } catch (err: unknown) {
      console.error("Custom Package Form Error:", err);
      setError("Failed to reach the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="package-builder-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[2rem] bg-card border border-border shadow-2xl p-6 sm:p-10">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close package builder"
          className="absolute top-5 right-5 p-2 rounded-full border border-border bg-stone-100 dark:bg-stone-900 text-muted hover:text-foreground hover:border-primary/50 transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="space-y-2 pr-10 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-extrabold uppercase tracking-widest">
            <Sparkles size={14} />
            <span>Custom Package</span>
          </div>
          <h3
            id="package-builder-title"
            className="text-2xl sm:text-3xl font-bold font-outfit text-foreground"
          >
            Build Your Own Package ✨
          </h3>
          <p className="text-secondary text-sm sm:text-base">
            Tell me a bit about what you need and I&apos;ll put together a custom quote tailored to
            your business.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot field */}
          <div className="sr-only" aria-hidden="true">
            <input
              name="_gotcha"
              type="text"
              tabIndex={-1}
              autoComplete="new-password"
            />
          </div>

          {success && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-700 dark:text-green-400 text-sm font-bold">
              Your custom package request was sent! I&apos;ll review your details and get back to
              you with a tailored quote soon.
            </div>
          )}
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400 text-sm font-bold">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">
                Your Name *
              </label>
              <input
                required
                name="name"
                type="text"
                maxLength={100}
                disabled={isSubmitting}
                className="w-full bg-white dark:bg-stone-950 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors font-medium text-sm sm:text-base text-foreground disabled:opacity-60"
                placeholder="Enter your name"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">
                Email Address *
              </label>
              <input
                required
                name="email"
                type="email"
                maxLength={254}
                disabled={isSubmitting}
                className="w-full bg-white dark:bg-stone-950 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors font-medium text-sm sm:text-base text-foreground disabled:opacity-60"
                placeholder="jane@yourbusiness.com"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">
              Business or Current Website
            </label>
            <input
              name="business"
              type="text"
              maxLength={150}
              disabled={isSubmitting}
              className="w-full bg-white dark:bg-stone-950 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors font-medium text-sm sm:text-base text-foreground disabled:opacity-60"
              placeholder="e.g. Main Street Bakery"
            />
          </div>

          <PackageBuilderFields disabled={isSubmitting} />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 bg-primary text-white dark:text-stone-950 rounded-2xl font-bold text-base hover:bg-violet-700 dark:hover:bg-violet-600 hover:text-white dark:hover:text-white transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center gap-2.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white dark:border-stone-950/30 dark:border-t-stone-950 rounded-full animate-spin" />
            ) : (
              <>
                <Send size={18} />
                <span>Send Custom Package Request</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
