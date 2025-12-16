import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackgroundEffects } from "@/components/layout/background-effects";

export const metadata: Metadata = {
  title: "Abdulwahid Munewer | Full-Stack Developer",
  description:
    "Portfolio of Abdulwahid Munewer — building reliable, animated web experiences with Next.js, TypeScript, and solid backend services.",
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
        <Analytics />
      </body>
    </html>
  );
}
