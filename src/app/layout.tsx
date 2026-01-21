import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexis | Software Engineer & Full Stack Developer",
  description: "Portfolio of Alexis, a BS Computer Science graduate (2025) specializing in Full Stack Engineering, React, and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" style={{ colorScheme: 'dark' }}>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}


