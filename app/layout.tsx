import type { Metadata } from "next";

import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackgroundEffects } from "@/components/layout/background-effects";

export const metadata: Metadata = {
  title: "Abdulwahid Munewer | Full-Stack Developer",
  description:
    "Portfolio of Abdulwahid Munewer — building reliable, animated web experiences with Next.js, TypeScript, and solid backend services.",
  openGraph: {
    title: "Abdulwahid Munewer | Full-Stack Developer",
    description: "Portfolio of Abdulwahid Munewer — building reliable, animated web experiences with Next.js, TypeScript, and solid backend services.",
    url: "https://abdulwahid.dev/",
    siteName: "Abdulwahid Munewer Portfolio",
    images: [
      {
        url: "/screenshot/portfolio.webp",
        width: 1200,
        height: 630,
        alt: "Abdulwahid Munewer Portfolio Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdulwahid Munewer | Full-Stack Developer",
    description: "Portfolio of Abdulwahid Munewer — building reliable, animated web experiences with Next.js, TypeScript, and solid backend services.",
    images: ["/screenshot/portfolio.webp"],
    creator: "@abdujs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-black text-white antialiased"}>
        <BackgroundEffects />
        <SiteHeader />
        <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 md:ml-20">
          {children}
        </main>
        <SiteFooter className="md:ml-20" />
      </body>
    </html>
  );
}
