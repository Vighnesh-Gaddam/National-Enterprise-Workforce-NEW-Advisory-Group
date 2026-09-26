import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { seo, company } from "@/data/siteConfig";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const textFont = Inter({
  subsets: ["latin"],
  variable: "--font-text",
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: seo.defaultDescription,

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  openGraph: {
    title: company.name,
    description: seo.defaultDescription,
    url: seo.url,
    siteName: seo.siteName,
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0B1240",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${displayFont.variable} ${textFont.variable}`}>
      <body className="flex min-h-full flex-col bg-[var(--color-page)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
