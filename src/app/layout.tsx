import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://lexicodesdigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Web Design in Connecticut | LexiCodes Digital",
    template: "%s | LexiCodes Digital",
  },
  description:
    "Custom web design, WordPress, Wix, e-commerce, and SEO services for small businesses in Litchfield County and across Connecticut. Get a free quote.",
  applicationName: "LexiCodes Digital",
  authors: [{ name: "Alexis Baranauskas", url: SITE_URL }],
  creator: "Alexis Baranauskas — LexiCodes Digital",
  publisher: "LexiCodes Digital",
  category: "Web Design & Development",
  keywords: [
    "Web design Connecticut",
    "Connecticut web designer",
    "Freelance web designer CT",
    "Website developer Connecticut",
    "Small business website design",
    "Affordable small business web design",
    "Custom website design CT",
    "Professional website design Connecticut",
    "Mobile-friendly website design",
    "Responsive web design",
    "Web design Litchfield County CT",
    "Web designer Torrington CT",
    "Website design Thomaston CT",
    "Web designer New Hartford CT",
    "Web design Litchfield CT",
    "Web design Watertown CT",
    "Website developer Bristol CT",
    "Web design Hartford County",
    "Web designer Hartford CT",
    "Small business web design West Hartford",
    "Website design Farmington CT",
    "Web designer Avon CT",
    "Web design Springfield MA",
    "Website design Providence RI",
    "WordPress website developer Connecticut",
    "WordPress website design CT",
    "Wix website designer Connecticut",
    "Wix website redesign",
    "E-commerce website design CT",
    "Website redesign Connecticut",
    "Website maintenance services CT",
    "Website hosting for small businesses",
    "SEO services Connecticut",
    "LexiCodes Digital",
    "LexiCodes",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "LexiCodes Digital",
    title: "Web Design in Connecticut | LexiCodes Digital",
    description:
      "Custom web design, WordPress, Wix, e-commerce, and SEO services for small businesses in Litchfield County and across Connecticut. Get a free quote.",
    images: [
      {
        url: "/logo-dark.png",
        width: 956,
        height: 138,
        alt: "LexiCodes Digital — Custom Web Design & Development in Connecticut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design in Connecticut | LexiCodes Digital",
    description:
      "Custom web design, WordPress, Wix, e-commerce, and SEO services for small businesses in Litchfield County and across Connecticut. Get a free quote.",
    images: ["/logo-dark.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: "LexiCodes Digital",
      alternateName: "LexiCodes",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-dark.png`,
      image: `${SITE_URL}/logo-dark.png`,
      email: "lexi.codes.dev@gmail.com",
      priceRange: "$$",
      description:
        "LexiCodes Digital is an independent freelance web design and development business based in Litchfield County, Connecticut, providing custom websites, WordPress, Wix, e-commerce stores, website redesigns, SEO, and ongoing website hosting and maintenance for small businesses across Connecticut, Southern Massachusetts, and Rhode Island.",
      founder: {
        "@type": "Person",
        name: "Alexis Baranauskas",
        jobTitle: "Freelance Web Designer & Full-Stack Developer",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Central Connecticut State University",
        },
        sameAs: ["https://www.linkedin.com/in/alexisb-dev/"],
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Litchfield County",
        addressRegion: "CT",
        addressCountry: "US",
      },
      sameAs: ["https://www.linkedin.com/in/alexisb-dev/"],
      areaServed: [
        // Priority 1: Litchfield County & Hartford County, CT
        { "@type": "AdministrativeArea", name: "Litchfield County, CT" },
        { "@type": "AdministrativeArea", name: "Hartford County, CT" },
        { "@type": "City", name: "Torrington, CT" },
        { "@type": "City", name: "Thomaston, CT" },
        { "@type": "City", name: "New Hartford, CT" },
        { "@type": "City", name: "Litchfield, CT" },
        { "@type": "City", name: "Watertown, CT" },
        { "@type": "City", name: "Bristol, CT" },
        { "@type": "City", name: "Farmington, CT" },
        { "@type": "City", name: "Avon, CT" },
        { "@type": "City", name: "West Hartford, CT" },
        { "@type": "City", name: "Hartford, CT" },
        // Priority 2: All of Connecticut
        { "@type": "State", name: "Connecticut" },
        // Priority 3: Expansion — Southern Massachusetts & Rhode Island
        { "@type": "State", name: "Massachusetts" },
        { "@type": "State", name: "Rhode Island" },
        { "@type": "City", name: "Springfield, MA" },
        { "@type": "City", name: "Westfield, MA" },
        { "@type": "City", name: "Providence, RI" },
        { "@type": "City", name: "Warwick, RI" },
      ],
      knowsAbout: [
        "Custom Website Design",
        "Website Development",
        "WordPress Website Design and Development",
        "Wix Website Design and Redesign",
        "E-Commerce Website Design and Development",
        "Website Redesigns and Modernization",
        "Website Hosting and Maintenance",
        "Search Engine Optimization (SEO)",
        "Mobile-Friendly and Responsive Web Design",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web Design, Development & Maintenance Services",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Tier 01 — Starter Custom Website Design",
            description:
              "Up to 5 custom-designed mobile-responsive pages, basic on-page SEO setup, social media integration, and performance optimization for small and local businesses.",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "1950",
              priceCurrency: "USD",
              valueAddedTaxIncluded: false,
            },
          },
          {
            "@type": "Offer",
            name: "Tier 02 — Growth & CMS Website Design",
            description:
              "Up to 10 custom-designed pages, CMS integration (WordPress, Wix, or Headless CMS) for easy content updates, enhanced on-page SEO setup, custom forms, personalized CMS training, and 1 month of support and maintenance included.",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "3250",
              priceCurrency: "USD",
              valueAddedTaxIncluded: false,
            },
          },
          {
            "@type": "Offer",
            name: "Tier 03 — E-Commerce Website Design & Development",
            description:
              "Custom mobile-responsive online storefront, CMS and e-commerce management integration, product catalog setup for up to 20 products, shopping cart, payment gateway setup, SEO optimization, and 2 months of support and maintenance included.",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "4750",
              priceCurrency: "USD",
              valueAddedTaxIncluded: false,
            },
          },
          {
            "@type": "Offer",
            name: "Website Hosting & Maintenance",
            description:
              "Managed website hosting, security monitoring and maintenance, regular website backups, performance monitoring, and routine website updates and upkeep.",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "125",
              priceCurrency: "USD",
              unitText: "MONTH",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "LexiCodes Digital",
      alternateName: "LexiCodes",
      publisher: {
        "@id": `${SITE_URL}/#business`,
      },
      inLanguage: "en-US",
    },
  ],
};

const themeInitScript = `(function(){try{var s=localStorage.getItem('lexicodes-theme');var t=s==='light'?'light':'dark';var r=document.documentElement;if(t==='light'){r.classList.remove('dark');r.classList.add('light');r.style.colorScheme='light';}else{r.classList.remove('light');r.classList.add('dark');r.style.colorScheme='dark';}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth dark"
      style={{ colorScheme: "dark" }}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <Navigation />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
