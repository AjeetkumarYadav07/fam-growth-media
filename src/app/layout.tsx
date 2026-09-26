import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScroll";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "FAM Growth Media | Creative Growth Partner for Ambitious Brands",
  description:
    "We're a creative growth partner helping ambitious brands stand out, scale faster, and create lasting impact through strategy, content and technology.",
  keywords: [
    "FAM Growth Media",
    "Creative Agency",
    "Brand Strategy",
    "Content Creation",
    "Digital Marketing",
    "Web Design & Development",
    "Influencer & UGC",
  ],
  authors: [{ name: "FAM Growth Media" }],
  openGraph: {
    title: "FAM Growth Media | Stories That Grow Brands",
    description:
      "We're a creative growth partner helping ambitious brands stand out, scale faster, and create lasting impact through strategy, content and technology.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakartaSans.variable} ${caveat.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAFAFE] text-slate-900 font-sans antialiased overflow-x-hidden selection:bg-purple-500/20 selection:text-purple-900">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
