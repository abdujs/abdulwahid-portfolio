"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Briefcase, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#hero", label: "Home", icon: Home },
  { href: "/#projects", label: "Projects", icon: Briefcase },
  { href: "/#contact", label: "Contact", icon: Mail },
];

const downloadUrl = "/cv.pdf";


export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#hero");
  const [mounted, setMounted] = useState(false);

  // Only run client-side effects after mount
  useEffect(() => {
    setMounted(true);

    const onHashChange = () => {
      setActiveHash(window.location.hash || "#hero");
    };
    window.addEventListener("hashchange", onHashChange);
    // Also update on scroll for smooth scroll/section highlight
    const onScroll = () => {
      const sections = ["#hero", "#projects", "#contact"];
      let found = "#hero";
      for (const hash of sections) {
        const el = document.querySelector(hash);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) found = hash;
        }
      }
      setActiveHash(found);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onHashChange();
    onScroll();
    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const headerClass = cn(
    "fixed left-0 top-0 z-50 flex h-14 w-full items-center border-b border-slate-800 bg-black/70 backdrop-blur-xl backdrop-saturate-150 transition-all duration-200 md:h-screen md:w-20 md:flex-col md:border-b-0 md:border-r md:py-6",
    scrolled && !open ? "shadow-[0_18px_44px_-28px_rgba(0,0,0,0.4)]" : ""
  );

  return (
    <header className={headerClass}>
      <div className="flex h-full w-full items-center justify-between px-4 md:flex-col md:justify-start md:gap-6 md:px-0">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full border border-primary/50 bg-primary/15 px-3 py-2 text-base font-semibold text-primary shadow-[0_10px_30px_-18px_rgba(59,130,246,0.6)] backdrop-blur transition hover:bg-primary/20"
        >
          <span className="hidden md:inline text-xs uppercase tracking-[0.28em] text-primary">
            AM
          </span>
          <span className="md:hidden">Abdulwahid.dev</span>
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>

        <nav className="hidden w-full flex-col items-center gap-3 md:flex">
          {navItems.map((item) => {
            const hash = item.href.replace("/", "");
            // Only apply 'active' after mount to avoid hydration mismatch
            const active = mounted && activeHash === hash;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex h-14 w-14 flex-col items-center justify-center gap-1 rounded-full border border-blue-400/20 bg-blue-500/10 text-blue-400 transition hover:-translate-y-0.5 hover:border-pink-400 hover:text-pink-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-pink-400",
                  active
                    ? "border-pink-400 text-pink-400 -translate-y-0.5"
                    : ""
                )}
              >
                <Icon className={cn("size-5", active ? "text-pink-400" : "")} />
                <span
                  className={cn(
                    "mt-0.5 text-[11px] font-medium leading-none",
                    active ? "text-pink-400" : "text-blue-400"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* CV button removed as requested */}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden border-t border-slate-800 bg-black/85 backdrop-blur-xl"
          >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6 lg:px-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-white transition hover:bg-primary/10 hover:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {item.label}
                </Link>
              ))}
              {/* Download CV button removed as requested */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
