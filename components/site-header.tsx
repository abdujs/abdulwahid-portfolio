"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/cv", label: "CV" },
  { href: "mailto:contact@abdulwahid.dev", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold" onClick={close}>
          <span>Abdulwahid.dev</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-4 text-sm font-medium text-muted-foreground md:flex">
          {links.map((link) => (
            <Link key={link.href} className="hover:text-foreground" href={link.href}>
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/cv">Download CV</Link>
          </Button>
        </nav>

        {/* Mobile menu toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden border-b bg-background/95 shadow-sm backdrop-blur supports-backdrop-filter:bg-background/80"
          >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-3 sm:px-6 lg:px-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 text-sm font-medium text-foreground"
                  onClick={close}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="sm" className="w-full" onClick={close}>
                <Link href="/cv">Download CV</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
