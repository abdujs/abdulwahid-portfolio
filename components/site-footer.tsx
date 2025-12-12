"use client";

import Link from "next/link";
import { Github, Mail, Linkedin, Send } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#cv", label: "CV" },
  { href: "mailto:contact@abdulwahid.dev", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/abdujs", label: "GitHub", icon: Github },
  { href: "mailto:a.wahid.developer@gmail.com", label: "Email", icon: Mail },
  { href: "https://t.me/Abdulwahid_Munewer", label: "Telegram", icon: Send, badge: true },
  { href: "https://www.linkedin.com/in/abdulwahid-m/", label: "LinkedIn", icon: Linkedin },
];

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: easeOutExpo } },
};

const stagger: Variants = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

// Accept className prop for layout margin
import type { HTMLAttributes } from "react";

interface SiteFooterProps extends HTMLAttributes<HTMLElement> {}

export function SiteFooter({ className = "" }: SiteFooterProps) {
  return (
    <footer className={`border-t border-blue-400/20 bg-black/90 py-10 px-6 mt-20 ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
        <div className="space-y-3">
          <Link
            href="/"
            className="text-2xl font-bold bg-linear-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent"
          >
            Abdulwahid Munewer
          </Link>
          <p className="max-w-md text-base text-gray-400 font-medium">
            Full-Stack Developer crafting reliable products with Next.js, TypeScript, and robust
            backend services.
          </p>
          <div className="flex items-center gap-3 mt-2">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 p-2 text-blue-400 transition hover:-translate-y-0.5 hover:border-pink-400 hover:text-pink-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-pink-400"
                  aria-label={item.label}
                >
                  <span className="relative">
                    <Icon className="h-5 w-5" />
                    {item.badge && (
                      <span
                        className="absolute -top-1 -right-1 size-2 rounded-full bg-emerald-400 ring-2 ring-emerald-400"
                        title="Active on Telegram"
                      />
                    )}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 text-base text-gray-400 sm:grid-cols-3">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              Navigate
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/#hero" className="transition hover:text-pink-400">
                Home
              </Link>
              <Link href="/#timeline" className="transition hover:text-pink-400">
                Experience
              </Link>
              <Link href="/#skills" className="transition hover:text-pink-400">
                Skills
              </Link>
              <Link href="/#projects" className="transition hover:text-pink-400">
                Projects
              </Link>
              <Link href="/#contact" className="transition hover:text-pink-400">
                Contact
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              Social
            </p>
            <div className="flex flex-col gap-2">
              {socialLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 hover:text-pink-400"
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden space-y-3 sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">Now</p>
            <div className="flex flex-col gap-2">
              <span className="text-gray-400">Currently Available</span>
              <span className="text-gray-400">Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
        © 2023 - 2025 Abdulwahid Munewer
      </div>
    </footer>
  );
}
