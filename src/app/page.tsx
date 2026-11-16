"use client";

import {
  ArrowRight,
  Mail,
  ExternalLink,
  Send,
  Linkedin,
  GraduationCap,
  Wrench,
  CheckCircle2,
  UserCheck,
  HeartHandshake,
  DollarSign,
  MessageSquareHeart,
  ChevronDown,
  MessageCircle,
  Palette,
  Code2,
  Rocket,
  Layout,
  Layers,
  ShoppingBag,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCarousel from "@/components/ui/ProjectCarousel";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Vortex } from "@/components/ui/vortex";
import { projects } from "@/data/projects";

import { useState } from "react";

const independentPromises = [
  {
    icon: UserCheck,
    title: "No Big Agency, No Middlemen",
    description:
      "You won’t get sold by a smooth-talking salesperson and then handed off to a stranger. You work directly one-on-one with me from our very first conversation through launch day.",
  },
  {
    icon: DollarSign,
    title: "Fair Pricing, Built Around Your Business",
    description:
      "Every business is different, and your website should reflect that. I believe in honest, straightforward pricing that makes sense for your needs, without unnecessary features or hidden fees. My goal is to create a professional, high-quality website that's a worthwhile investment in your business's future.",
  },
  {
    icon: MessageSquareHeart,
    title: "Personal Service & Ongoing Care",
    description:
      "When you need a menu updated, a new page added, or a quick question answered, you don’t submit a ticket into a void. You reach out directly to me! The developer who built your site.",
  },
];

const serviceTiers = [
  {
    tier: "TIER 01",
    name: "Starter",
    icon: Layout,
    price: "$1,950",
    billing: "starting at / one-time",
    popular: false,
    description:
      "Perfect for small and local businesses looking for a clean, modern, professional online presence.",
    features: [
      "Up to 5 custom-designed pages",
      "Fully mobile-responsive design",
      "Basic on-page SEO setup",
      "Social media links and integration",
      "Basic website performance optimization",
      "1 round of design revisions",
      "Website testing and launch assistance",
    ],
    bonusTitle: null,
    bonusDescription: null,
  },
  {
    tier: "TIER 02",
    name: "Growth & CMS",
    icon: Layers,
    price: "$3,250",
    billing: "starting at / one-time",
    popular: true,
    description:
      "Designed for growing businesses that need more flexibility, content management, and advanced functionality.",
    features: [
      "Up to 10 custom-designed pages",
      "Everything included in Starter",
      "CMS integration for easy content updates",
      "Enhanced on-page SEO setup",
      "Custom forms and integrations",
      "2 rounds of design revisions",
      "Up to 1 hour of personalized CMS training",
    ],
    bonusTitle: "1 Month of Support & Maintenance Included",
    bonusDescription:
      "Post-launch assistance and routine website maintenance within the included support scope.",
  },
  {
    tier: "TIER 03",
    name: "E-Commerce",
    icon: ShoppingBag,
    price: "$4,750",
    billing: "starting at / one-time",
    popular: false,
    description:
      "A complete online shopping experience designed to help your business sell products and manage orders with confidence.",
    features: [
      "Custom, mobile-responsive storefront design",
      "CMS and e-commerce management integration",
      "Product catalog setup for up to 20 products",
      "Shopping cart and secure checkout integration",
      "Payment gateway setup",
      "Basic SEO and performance optimization",
      "Inventory and order management configuration",
      "Up to 2 hours of personalized store and CMS training",
      "3 rounds of design revisions",
      "Website testing and launch assistance",
    ],
    bonusTitle: "2 Months of Support & Maintenance Included",
    bonusDescription:
      "Additional post-launch assistance to help keep your new store running smoothly.",
  },
];

const hostingFeatures = [
  "Managed Website Hosting",
  "Security Monitoring & Maintenance",
  "Regular Website Backups",
  "Website Performance Monitoring",
  "Routine Website Updates & Upkeep",
];

const processSteps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Let's Talk",
    description:
      "We'll start with a friendly conversation about your business, your goals, and what you need from your website. I'll help you find the right solution for your needs and budget.",
  },
  {
    step: "02",
    icon: Palette,
    title: "Design & Planning",
    description:
      "I'll create a modern, thoughtful design tailored to your brand. We'll review the layout together and make revisions based on your feedback to fine-tune the details before development begins.",
  },
  {
    step: "03",
    icon: Code2,
    title: "Development & Testing",
    description:
      "I'll bring your website to life with responsive design, optimized performance, and the functionality your business needs. Everything is carefully tested before launch.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "Once everything is ready, I'll handle the launch and help you get comfortable with your new website. Ongoing hosting, maintenance, and support are also available.",
  },
];

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null as string | null);
  const [expandedTiers, setExpandedTiers] = useState<Record<string, boolean>>({});

  const toggleTier = (tierKey: string) => {
    setExpandedTiers((prev) => ({ ...prev, [tierKey]: !prev[tierKey] }));
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-24 pb-16 lg:py-0 overflow-hidden bg-background"
      >
        <Vortex
          backgroundColor="transparent"
          rangeY={800}
          particleCount={220}
          baseHue={262}
          rangeHue={25}
          baseSpeed={0.015}
          rangeSpeed={0.08}
          className="w-full h-full flex items-center justify-center py-12 lg:py-24"
        >
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: Independent Studio Hero (matching uploaded mockup & copy) */}
            <div className="lg:col-span-7 space-y-7 animate-in fade-in slide-in-from-left-8 duration-1000">
              {/* Top Eyebrow */}
              <div className="inline-flex items-center gap-2.5 text-primary text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em]">
                <span className="px-2.5 py-1 rounded-lg bg-primary/15 border border-primary/30 text-primary font-mono text-xs">
                  &lt;/&gt;
                </span>
                <span>Independent Web Design &amp; Development</span>
              </div>

              {/* Headline & Subtext */}
              <div className="space-y-5">
                <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-bold tracking-tight font-outfit text-foreground leading-[1.06]">
                  Beautiful Websites.{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-violet-600 dark:from-primary dark:via-purple-300 dark:to-violet-400">
                    Built for Your Business.
                  </span>
                </h1>

                <p className="max-w-2xl text-lg sm:text-xl text-secondary leading-relaxed font-medium">
                  I design and develop modern, mobile-friendly websites, online stores, and custom
                  web solutions that help <span className="text-foreground font-bold">YOUR</span>{" "}
                  business stand out online. Every project is thoughtfully crafted with care,
                  attention to detail, and friendly one-on-one support from start to finish.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-primary text-white dark:text-stone-950 rounded-2xl hover:bg-primary-hover transition-all duration-300 font-bold shadow-2xl shadow-primary/25 group"
                >
                  <span className="text-base sm:text-lg">Get a Free Quote</span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1.5 transition-transform duration-300"
                  />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-card/80 border border-primary/35 text-foreground rounded-2xl hover:border-primary hover:text-primary transition-all duration-300 font-bold"
                >
                  <span className="text-base sm:text-lg">View My Work</span>
                </a>
              </div>

              {/* Divider + Independent Ownership Strip */}
              <div className="pt-5 border-t border-primary/20">
                <div className="flex flex-wrap items-center gap-2.5 text-sm sm:text-base font-medium text-secondary">
                  <UserCheck size={20} className="text-primary shrink-0" />
                  <span>
                    <strong className="text-foreground">Independently owned</strong> &bull; CT Based
                    &bull; Ongoing support &bull; Fair pricing
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Studio Brand Card & Live Small-Business Work */}
            <div className="hidden lg:flex lg:col-span-5 justify-center lg:justify-end animate-in fade-in zoom-in duration-1000 delay-200">
              <div className="w-full max-w-lg rounded-[2.5rem] bg-card/90 backdrop-blur-2xl border border-primary/25 p-7 sm:p-9 shadow-2xl shadow-primary/10 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-56 h-56 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

                {/* Brand Logo Showcase */}
                <div className="relative z-10 rounded-2xl bg-stone-50 dark:bg-stone-950/90 border border-border p-6 mb-5 flex flex-col items-center justify-center text-center">
                  <img
                    src="/logo-dark.png"
                    alt="LexiCodes Digital — Custom Web Design & Development in Connecticut"
                    decoding="async"
                    className="hidden dark:block w-full max-w-[330px] h-auto object-contain"
                  />
                  <img
                    src="/logo.png"
                    alt="LexiCodes Digital — Custom Web Design & Development in Connecticut"
                    decoding="async"
                    className="block dark:hidden w-full max-w-[330px] h-auto object-contain"
                  />
                  <p className="mt-4 text-xs sm:text-sm font-bold text-primary tracking-wide">
                    Modern websites. Personal service. Built for your business.
                  </p>
                </div>

                {/* Personal Studio Blurb */}
                <p className="relative z-10 text-sm text-secondary leading-relaxed mb-5">
                  At <strong className="text-foreground">LexiCodes Digital</strong>, I specialize in
                  creating fast, mobile-responsive websites, e-commerce stores, and easy-to-manage
                  CMS solutions for your business—with zero big-agency overhead.
                </p>

                {/* Featured Live Sites Preview */}
                <div className="relative z-10 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                      Recent Client Websites
                    </span>
                    <a
                      href="#projects"
                      className="text-xs font-semibold text-secondary hover:text-primary transition-colors"
                    >
                      See all work &rarr;
                    </a>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <a
                      href="https://www.sunsetmeadowvineyards.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-2xl bg-stone-50/90 dark:bg-stone-950/70 border border-border hover:border-primary/50 p-3.5 transition-all"
                    >
                      <div className="h-24 rounded-xl overflow-hidden mb-3 bg-stone-200 dark:bg-stone-900">
                        <img
                          src="/projects/sunset-meadow.png"
                          alt="Sunset Meadow Vineyards mobile-friendly winery e-commerce website in Goshen, CT"
                          decoding="async"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                            Sunset Meadow Vineyards
                          </p>
                          <p className="text-[11px] text-muted">E-Commerce &amp; WordPress CMS</p>
                        </div>
                        <ExternalLink
                          size={14}
                          className="text-muted group-hover:text-primary shrink-0"
                        />
                      </div>
                    </a>

                    <a
                      href="https://www.possumqueenfoundation.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-2xl bg-stone-50/90 dark:bg-stone-950/70 border border-border hover:border-primary/50 p-3.5 transition-all"
                    >
                      <div className="h-24 rounded-xl overflow-hidden mb-3 bg-stone-200 dark:bg-stone-900">
                        <img
                          src="/projects/possum-queen.jpg"
                          alt="The Possum Queen Foundation mobile-friendly nonprofit website in Litchfield, CT"
                          decoding="async"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">
                            Possum Queen Foundation
                          </p>
                          <p className="text-[11px] text-muted">Wix &amp; CMS</p>
                        </div>
                        <ExternalLink
                          size={14}
                          className="text-muted group-hover:text-primary shrink-0"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Vortex>
      </section>

      {/* Independent Studio vs. Big Agency Section */}
      <section className="py-20 border-t border-border/60 bg-stone-100/70 dark:bg-stone-950/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-5 mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-widest">
              <HeartHandshake size={15} />
              <span>Independently Owned &amp; Operated</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-outfit text-foreground tracking-tight">
              Modern websites. Personal service.{" "}
              <span className="text-primary">Built for your business.</span>
            </h2>
            <div className="space-y-4 text-lg sm:text-xl text-secondary leading-relaxed">
              <p>
                <strong className="text-foreground">LexiCodes Digital</strong> offers freelance web
                design and development services specializing in fast, mobile-responsive websites,
                e-commerce solutions, and custom CMS development.
              </p>
              <p>
                As an independent web designer and developer, I take a personal, hands-on approach to
                every project. Whether you&apos;re refreshing an outdated website or building
                something completely new, I work directly with you to create a modern, professional
                website tailored to your business&apos;s needs and goals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {independentPromises.map((promise, idx) => (
              <motion.div
                key={promise.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="rounded-2xl md:rounded-[2rem] bg-card border border-border p-5 md:p-8 hover:border-primary/40 transition-colors shadow-xl"
              >
                <div className="flex items-center gap-3.5 md:block mb-2.5 md:mb-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/15 text-primary flex items-center justify-center shrink-0 md:mb-6">
                    <promise.icon size={20} className="md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold font-outfit text-foreground md:mb-3 leading-snug">
                    {promise.title}
                  </h3>
                </div>
                <p className="text-secondary text-xs sm:text-sm md:text-base leading-relaxed">
                  {promise.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 border-t border-border/60">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-1.5 w-16 bg-primary rounded-full opacity-60" />
              <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight text-foreground">
                Services
              </h2>
              <div className="h-1.5 w-16 bg-primary rounded-full opacity-60" />
            </div>
            <p className="text-lg sm:text-xl text-secondary leading-relaxed">
              Every business is unique, and your website should reflect that. At{" "}
              <strong className="text-foreground">LexiCodes Digital</strong>, I offer personalized
              web design and development solutions tailored to your goals, helping your business
              stand out and grow online.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
            {serviceTiers.map((tier, idx) => {
              const isExpanded = !!expandedTiers[tier.tier];
              const initialFeatures = tier.features.slice(0, 2);
              const extraFeatures = tier.features.slice(2);

              return (
                <motion.div
                  key={tier.tier}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className={`relative rounded-[2.5rem] p-8 sm:p-10 transition-colors duration-300 flex flex-col justify-between shadow-2xl ${
                    tier.popular
                      ? "bg-gradient-to-b from-primary/15 via-card to-card border-2 border-primary/60 shadow-primary/10"
                      : "bg-card border border-border hover:border-primary/40"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 right-8 px-4 py-1.5 rounded-full bg-primary text-white dark:text-stone-950 text-xs font-extrabold uppercase tracking-widest shadow-lg shadow-primary/30">
                      Most popular
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/25 text-primary flex items-center justify-center">
                        <tier.icon size={24} />
                      </div>
                      <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-primary">
                        {tier.tier}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl sm:text-5xl font-extrabold font-outfit text-foreground tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-sm font-semibold text-muted">{tier.billing}</span>
                    </div>

                    <p className="text-secondary text-base leading-relaxed mt-4 mb-8 lg:min-h-[4.5rem]">
                      {tier.description}
                    </p>

                    <div className="pt-6 border-t border-border/70">
                      <p
                        className={`${
                          isExpanded ? "block" : "hidden lg:block"
                        } text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-5`}
                      >
                        What&apos;s included
                      </p>
                      <ul
                        className={`space-y-3.5 ${
                          !isExpanded ? "hidden lg:block lg:min-h-[6.75rem]" : "block"
                        }`}
                      >
                        {initialFeatures.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm sm:text-base text-secondary font-medium"
                          >
                            <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}

                        {isExpanded &&
                          extraFeatures.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm sm:text-base text-secondary font-medium animate-in fade-in slide-in-from-top-2 duration-200"
                            >
                              <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                      </ul>

                      {isExpanded && tier.bonusTitle && (
                        <div className="mt-5 p-5 rounded-2xl bg-primary/10 border border-primary/30 animate-in fade-in slide-in-from-top-2 duration-200">
                          <p className="text-sm font-bold text-primary flex items-center gap-2 mb-1">
                            <CheckCircle2 size={16} className="shrink-0" />
                            <span>{tier.bonusTitle}</span>
                          </p>
                          <p className="text-xs sm:text-sm text-secondary leading-relaxed pl-6">
                            {tier.bonusDescription}
                          </p>
                        </div>
                      )}

                      {extraFeatures.length > 0 && (
                        <button
                          type="button"
                          onClick={() => toggleTier(tier.tier)}
                          className={`${
                            isExpanded ? "mt-5" : "mt-0 lg:mt-5"
                          } w-full flex items-center justify-between px-4 py-3 rounded-xl bg-stone-100 dark:bg-stone-950/70 border border-border hover:border-primary/50 text-xs sm:text-sm font-bold text-primary transition-all group cursor-pointer`}
                        >
                          <span className="lg:hidden">
                            {isExpanded ? "Hide what's included" : "See what's included"}
                          </span>
                          <span className="hidden lg:inline">
                            {isExpanded ? "Show fewer features" : "See all included features"}
                          </span>
                          <ChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : "group-hover:translate-y-0.5"
                            }`}
                          />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-border/60">
                    <a
                      href="#contact"
                      className={`w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl font-bold text-base transition-all duration-300 ${
                        tier.popular
                          ? "bg-primary text-white dark:text-stone-950 hover:bg-violet-700 dark:hover:bg-violet-600 hover:text-white dark:hover:text-white active:bg-violet-700 shadow-xl shadow-primary/20"
                          : "bg-stone-100 dark:bg-stone-900 text-foreground border border-border hover:bg-primary active:bg-primary hover:border-primary hover:text-white dark:hover:text-stone-950 active:text-white dark:active:text-stone-950 hover:shadow-lg hover:shadow-primary/20"
                      }`}
                    >
                      <span>Get Started with {tier.tier}</span>
                      <ArrowRight size={18} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Website Hosting & Maintenance + Additional Website Work */}
          <div className="max-w-7xl mx-auto mt-12 rounded-[2.5rem] bg-card border border-border p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left: Hosting & Maintenance Overview */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-extrabold uppercase tracking-widest">
                  <Wrench size={14} />
                  <span>Ongoing Care &amp; Support</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-foreground">
                  Website Hosting &amp; Maintenance
                </h3>

                <div className="flex items-baseline gap-2.5">
                  <span className="text-4xl sm:text-5xl font-extrabold font-outfit text-foreground tracking-tight">
                    $125
                  </span>
                  <span className="text-sm font-semibold text-muted">/ month</span>
                </div>

                <p className="text-secondary text-base leading-relaxed">
                  Keep your website secure, updated, and running smoothly with reliable hosting and
                  ongoing maintenance. I&apos;ll handle the technical upkeep so you can focus on
                  running your business.
                </p>

                {/* Additional Website Work Callout (Desktop Only — on mobile it lives inside the dropdown below) */}
                <div className="hidden lg:block mt-6 p-6 rounded-2xl bg-stone-100/80 dark:bg-stone-950/80 border border-primary/30 space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-bold text-foreground">
                      Additional Website Work
                    </span>
                    <div className="text-right shrink-0">
                      <span className="text-sm font-extrabold font-outfit text-primary uppercase tracking-wider">
                        Billed Hourly
                      </span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    Content updates, design changes, new features, and other work outside routine
                    maintenance
                  </p>
                </div>

                {/* Mobile-Only Dropdown for What's Included + Additional Website Work */}
                <div className="lg:hidden pt-4 border-t border-border/70">
                  {expandedTiers["HOSTING"] && (
                    <div className="space-y-4 mb-5 animate-in fade-in slide-in-from-top-2 duration-200">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                        What&apos;s included
                      </p>
                      <div className="grid grid-cols-1 gap-3">
                        {hostingFeatures.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-100/60 dark:bg-stone-950/50 border border-border/60 text-sm text-secondary font-medium"
                          >
                            <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-5 rounded-2xl bg-stone-100/80 dark:bg-stone-950/80 border border-primary/30 space-y-2">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-sm font-bold text-foreground">
                            Additional Website Work
                          </span>
                          <div className="text-right shrink-0">
                            <span className="text-sm font-extrabold font-outfit text-primary uppercase tracking-wider">
                              Billed Hourly
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-secondary leading-relaxed">
                          Content updates, design changes, new features, and other work outside
                          routine maintenance
                        </p>
                      </div>
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => toggleTier("HOSTING")}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-stone-100 dark:bg-stone-950/70 border border-border hover:border-primary/50 text-xs sm:text-sm font-bold text-primary transition-all group cursor-pointer"
                  >
                    <span>
                      {expandedTiers["HOSTING"]
                        ? "Hide what's included"
                        : "See what's included"}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        expandedTiers["HOSTING"] ? "rotate-180" : "group-hover:translate-y-0.5"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Right: What's Included in Hosting & Maintenance */}
              <div className="lg:col-span-7 lg:pl-8 lg:border-l border-border/70 flex flex-col justify-between h-full">
                <div className="hidden lg:block">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-5">
                    What&apos;s included
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {hostingFeatures.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-100/60 dark:bg-stone-950/50 border border-border/60 text-sm text-secondary font-medium"
                      >
                        <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-2 lg:mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs sm:text-sm text-muted">
                    Available for any website I build or existing WordPress sites needing a reliable
                    care plan.
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-border hover:bg-primary active:bg-primary hover:border-primary hover:text-white dark:hover:text-stone-950 text-foreground font-bold text-sm transition-all shrink-0"
                  >
                    <span>Inquire About Maintenance</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / My Work Section */}
      <section id="projects" className="py-24 lg:py-32 border-t border-border/60 bg-stone-100/60 dark:bg-stone-950/40 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
            <SectionHeader
              title="Portfolio"
              subtitle="Samples of recent websites I've built"
            />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors"
            >
              <span>Ready to refresh or build your site? Let’s talk</span>
              <ArrowRight size={16} />
            </a>
          </div>
          <ProjectCarousel projects={projects} />
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 lg:py-32 border-t border-border/60">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <SectionHeader title="How It Works" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group relative rounded-[2rem] bg-card border border-border p-8 flex flex-col justify-between hover:border-primary/40 transition-colors shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/25 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white dark:group-hover:text-stone-950 transition-colors duration-300">
                      <item.icon size={24} />
                    </div>
                    <span className="text-3xl font-extrabold font-outfit text-primary/35 group-hover:text-primary/60 transition-colors">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-outfit text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (Founder & Personal Approach) */}
      <section id="about" className="py-24 lg:py-32 border-t border-border/60 bg-stone-100/60 dark:bg-stone-950/40 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader title="Meet Alexis — Your Designer & Developer" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mt-14 items-center">
              <div className="order-2 lg:order-1 lg:col-span-3 space-y-6 text-lg text-secondary leading-relaxed">
                <p>
                  Hi, I&apos;m <span className="text-foreground font-bold">Alexis Baranauskas</span>
                  , a freelance web designer and full-stack developer based in Litchfield County,
                  Connecticut.
                </p>

                <p>
                  I specialize in building modern, mobile-responsive websites, e-commerce stores,
                  and custom CMS solutions for small businesses. Whether you&apos;re refreshing an
                  outdated website or starting from scratch, I take a hands-on approach to every
                  project, focusing on thoughtful design, reliable performance, and solutions
                  tailored to your business.
                </p>

                <p>
                  My work ranges from building a WordPress-powered e-commerce store with a content
                  management system for{" "}
                  <a
                    href="https://www.sunsetmeadowvineyards.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    Sunset Meadow Vineyards
                  </a>{" "}
                  and creating a fresh website for{" "}
                  <a
                    href="https://www.crabbyals.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    Crabby Al&apos;s Seafood Restaurant
                  </a>{" "}
                  to redesigning and developing a community-focused nonprofit website for{" "}
                  <a
                    href="https://www.possumqueenfoundation.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    The Possum Queen Foundation
                  </a>{" "}
                  and building custom web applications like{" "}
                  <a
                    href="https://volleytrack.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    VolleyTrack
                  </a>
                  .
                </p>

                <p>
                  What I enjoy most is bringing business ideas to life through thoughtful design and
                  development. I&apos;m passionate about helping local and small businesses build a
                  strong online presence with websites that not only look great but work for their
                  goals. Every project is an opportunity to create something meaningful, and I take
                  pride in working directly with my clients to bring their vision to life.
                </p>

                <div className="hidden lg:grid lg:grid-cols-2 gap-4 pt-2">
                  {[
                    "Independently owned — no big-agency overhead",
                    "Direct 1-on-1 communication with me from start to finish",
                    "Fast, mobile-responsive & easy-to-manage CMS builds",
                    "Friendly ongoing support whenever you need updates",
                  ].map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border text-sm font-semibold text-foreground"
                    >
                      <CheckCircle2 size={18} className="text-primary shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2 lg:col-span-2">
                <a
                  href="mailto:lexi.codes.dev@gmail.com"
                  className="block w-full cursor-pointer focus:outline-none"
                  aria-label="Email Alexis Baranauskas at lexi.codes.dev@gmail.com"
                >
                  <CardContainer className="w-full">
                    <CardBody className="h-auto w-full p-8 sm:p-10 rounded-[2.5rem] border border-border dark:border-primary/25 bg-gradient-to-br from-white via-purple-50/40 to-stone-100 dark:from-stone-950 dark:via-[#1c1235] dark:to-[#0c0a09] backdrop-blur-3xl shadow-2xl flex flex-col items-center text-center relative overflow-hidden group/card hover:border-primary/50 transition-all duration-500">
                      <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-primary/15 rounded-full blur-[80px] -mr-24 -mt-24 pointer-events-none" />
                      <div className="absolute bottom-0 left-0 w-[220px] h-[220px] bg-purple-600/15 rounded-full blur-[70px] -ml-20 -mb-20 pointer-events-none" />

                      <CardItem translateZ="50" className="w-full relative z-10 flex flex-col items-center">
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full border-2 border-dashed border-primary/40 p-3 flex items-center justify-center mb-6">
                          <div className="w-full h-full rounded-full overflow-hidden bg-stone-200 dark:bg-stone-800 shadow-inner">
                            <img
                              src="/profile.png"
                              alt="Alexis Baranauskas — Freelance Web Designer and Developer in Litchfield County, Connecticut"
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover scale-105"
                            />
                          </div>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-foreground group-hover/card:text-primary transition-colors">
                          Alexis Baranauskas
                        </h3>
                        <p className="text-sm font-semibold text-primary mt-1">
                          Freelance Web Designer &amp; Full-Stack Developer
                        </p>
                        <p className="text-xs text-muted mt-0.5 mb-8">
                          Litchfield County, Connecticut
                        </p>
                      </CardItem>

                      <CardItem translateZ="60" className="w-full relative z-10 text-left">
                        <div className="p-6 rounded-2xl bg-stone-100/80 dark:bg-stone-950/80 border border-border">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                              <GraduationCap size={22} />
                            </div>
                            <div>
                              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                Education
                              </p>
                              <p className="font-bold text-foreground text-lg leading-tight">
                                B.S. in Computer Science
                              </p>
                            </div>
                          </div>
                          <p className="text-secondary text-sm font-medium">
                            Central Connecticut State University &bull; May 2025
                          </p>
                        </div>
                      </CardItem>
                    </CardBody>
                  </CardContainer>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Quote Section */}
      <section id="contact" className="py-24 lg:py-32 border-t border-border/60">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-card text-foreground rounded-[2rem] md:rounded-[3rem] p-5 sm:p-8 md:p-16 lg:p-20 shadow-2xl overflow-hidden relative border border-border">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-5 space-y-6 lg:space-y-10">
                <SectionHeader
                  title="Get a Free Quote"
                  subtitle="Reach out directly to me—no sales team, no pressure. Tell me a little about your business and what you need, and I’ll get back to you personally."
                />

                {/* Desktop Only: Email & LinkedIn in left column */}
                <div className="hidden lg:block space-y-6 pt-2">
                  {[
                    {
                      icon: Mail,
                      label: "Email Me Directly",
                      value: "lexi.codes.dev@gmail.com",
                      href: "mailto:lexi.codes.dev@gmail.com",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      value: "alexisb-dev",
                      href: "https://www.linkedin.com/in/alexisb-dev/",
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.label !== "Email Me Directly" ? "_blank" : undefined}
                      rel={item.label !== "Email Me Directly" ? "noopener noreferrer" : undefined}
                      className="flex items-center group"
                    >
                      <div className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-border text-foreground group-hover:bg-primary group-hover:text-white dark:group-hover:text-stone-950 transition-all duration-300">
                        <item.icon size={22} />
                      </div>
                      <div className="ml-5">
                        <p className="text-[10px] font-bold text-primary uppercase tracking-[0.25em] mb-1">
                          {item.label}
                        </p>
                        <p className="text-base sm:text-lg font-bold group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 bg-transparent md:bg-stone-100/70 md:dark:bg-stone-900/60 p-0 md:p-12 rounded-none md:rounded-[2rem] border-0 md:border md:border-border backdrop-blur-sm">
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const formElement = e.currentTarget;
                    setIsSubmitting(true);
                    setError(null);
                    setSuccess(false);

                    try {
                      const formData = new FormData(formElement);
                      const payload = {
                        name: (formData.get("name") as string) || "",
                        email: (formData.get("email") as string) || "",
                        business: (formData.get("business") as string) || "",
                        serviceType:
                          (formData.get("serviceType") as string) || "General Inquiry",
                        message: (formData.get("message") as string) || "",
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
                            `Unable to send message (HTTP ${response.status}). Please try again or email lexi.codes.dev@gmail.com directly.`
                        );
                      }
                    } catch (err: unknown) {
                      console.error("Form Submission Error:", err);
                      setError("Failed to reach the server. Please try again later.");
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                  className="space-y-5 md:space-y-6"
                >
                  {/* Honeypot field for spam protection (visually hidden, non-autofillable) */}
                  <div className="sr-only" aria-hidden="true">
                    <input
                      id="_gotcha"
                      name="_gotcha"
                      type="text"
                      tabIndex={-1}
                      autoComplete="new-password"
                    />
                  </div>

                  {success && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-700 dark:text-green-400 text-sm font-bold animate-in fade-in zoom-in duration-300">
                      Thanks for reaching out! Your message came straight to my inbox and I’ll get
                      back to you soon.
                    </div>
                  )}
                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400 text-sm font-bold animate-in fade-in zoom-in duration-300">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">
                        Your Name *
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        maxLength={100}
                        disabled={isSubmitting}
                        className="w-full bg-white dark:bg-stone-950 border border-border rounded-xl px-4 md:px-5 py-3.5 focus:outline-none focus:border-primary transition-colors font-medium text-base text-foreground disabled:opacity-60"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">
                        Email Address *
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        maxLength={254}
                        disabled={isSubmitting}
                        className="w-full bg-white dark:bg-stone-950 border border-border rounded-xl px-4 md:px-5 py-3.5 focus:outline-none focus:border-primary transition-colors font-medium text-base text-foreground disabled:opacity-60"
                        placeholder="jane@yourbusiness.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">
                        Business or Current Website
                      </label>
                      <input
                        name="business"
                        type="text"
                        maxLength={150}
                        disabled={isSubmitting}
                        className="w-full bg-white dark:bg-stone-950 border border-border rounded-xl px-4 md:px-5 py-3.5 focus:outline-none focus:border-primary transition-colors font-medium text-base text-foreground disabled:opacity-60"
                        placeholder="e.g. Main Street Bakery"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">
                        What Do You Need Help With?
                      </label>
                      <select
                        name="serviceType"
                        disabled={isSubmitting}
                        className="w-full bg-white dark:bg-stone-950 border border-border rounded-xl px-4 md:px-5 py-3.5 focus:outline-none focus:border-primary transition-colors font-medium text-base text-foreground disabled:opacity-60"
                        defaultValue="Website Design & Development"
                      >
                        <option value="Website Design & Development">
                          Website Design &amp; Development
                        </option>
                        <option value="Website Hosting & Maintenance">
                          Website Hosting &amp; Maintenance
                        </option>
                        <option value="Not Sure Yet — Let's Talk!">
                          Not Sure Yet — Let&apos;s Talk!
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted uppercase tracking-widest ml-1">
                      Tell Me About Your Project *
                    </label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      minLength={5}
                      maxLength={5000}
                      disabled={isSubmitting}
                      className="w-full bg-white dark:bg-stone-950 border border-border rounded-xl px-4 md:px-5 py-3.5 focus:outline-none focus:border-primary transition-colors font-medium text-base resize-none text-foreground disabled:opacity-60"
                      placeholder="What does your business do, and what would you love your new or refreshed website to accomplish?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 md:py-5 px-3 md:px-4 bg-primary text-white dark:text-stone-950 rounded-2xl font-bold text-[13px] sm:text-base md:text-lg hover:bg-primary-hover transition-all duration-300 shadow-2xl shadow-primary/20 flex items-center justify-center gap-2 md:gap-3 text-center group disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white dark:border-stone-950/30 dark:border-t-stone-950 rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send
                          className="w-4 h-4 md:w-[18px] md:h-[18px] shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                        <span>Send Message &amp; Request Free Quote</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Mobile Only: Email & LinkedIn placed below the form */}
                <div className="lg:hidden mt-8 pt-6 border-t border-border/70 space-y-5">
                  {[
                    {
                      icon: Mail,
                      label: "Email Me Directly",
                      value: "lexi.codes.dev@gmail.com",
                      href: "mailto:lexi.codes.dev@gmail.com",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      value: "alexisb-dev",
                      href: "https://www.linkedin.com/in/alexisb-dev/",
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.label !== "Email Me Directly" ? "_blank" : undefined}
                      rel={item.label !== "Email Me Directly" ? "noopener noreferrer" : undefined}
                      className="flex items-center group"
                    >
                      <div className="p-3.5 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-border text-foreground group-hover:bg-primary group-hover:text-white dark:group-hover:text-stone-950 transition-all duration-300 shrink-0">
                        <item.icon size={20} />
                      </div>
                      <div className="ml-4 min-w-0">
                        <p className="text-[10px] font-bold text-primary uppercase tracking-[0.22em] mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm sm:text-base font-bold group-hover:text-primary transition-colors truncate">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img
              src="/logo-dark.png"
              alt="LexiCodes Digital — Connecticut Web Design & Development"
              loading="lazy"
              decoding="async"
              className="hidden dark:block h-9 w-auto object-contain"
            />
            <img
              src="/logo.png"
              alt="LexiCodes Digital — Connecticut Web Design & Development"
              loading="lazy"
              decoding="async"
              className="block dark:hidden h-9 w-auto object-contain"
            />
            <p className="text-muted text-xs text-center md:text-left">
              &copy; {new Date().getFullYear()} LexiCodes Digital — Alexis Baranauskas. All rights
              reserved.
            </p>
          </div>
          <div className="hidden md:flex flex-wrap justify-center gap-8">
            {[
              { name: "Services", href: "#services" },
              { name: "Portfolio", href: "#projects" },
              { name: "How It Works", href: "#process" },
              { name: "About Me", href: "#about" },
              { name: "Get a Quote", href: "#contact" },
            ].map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-xs font-bold uppercase tracking-[0.2em] text-muted hover:text-primary transition-colors"
              >
                {l.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
