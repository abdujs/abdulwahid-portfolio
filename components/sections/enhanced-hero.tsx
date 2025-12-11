"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Github, Mail } from "lucide-react";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const container: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, duration: 0.6, ease: EASE },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export function EnhancedHero() {
  return (
    <section id="hero" className="relative isolate flex min-h-screen items-center pb-24 pt-20 sm:pt-24">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6"
      >
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
          <motion.div variants={item} className="flex flex-col gap-6 lg:w-3/5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Full-Stack Developer</p>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                Abdulwahid Munewer
              </span>
            </h1>
            <p className="text-xl font-semibold text-slate-200">Building reliable, animated web experiences</p>
            <p className="max-w-3xl text-base leading-relaxed text-slate-300">
              I craft performant, accessible web apps with Next.js, strong typing, and motion where it matters. I care about thoughtful UX, maintainable systems, and delivering features end-to-end.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
                <Link href="https://flowcv.com/resume/u0sahg9n70" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                  <FileText className="size-4" aria-hidden />
                  View CV
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-slate-700 bg-transparent text-white hover:bg-white/10"
              >
                <Link href="https://github.com/abdujs" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <Github className="size-4" aria-hidden />
                  GitHub
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10"
              >
                <Link href="/#contact" className="inline-flex items-center gap-2">
                  <Mail className="size-4" aria-hidden />
                  Contact
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={item} className="lg:w-2/5">
            <div className="relative mx-auto flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border border-slate-800 bg-slate-900/70 shadow-[0_18px_48px_-28px_rgba(59,130,246,0.55)]">
              <Image
                src="/profile-placeholder.jpg"
                alt="Abdulwahid Munewer"
                fill
                className="object-cover"
                sizes="288px"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
            </div>
            <div className="mt-4 flex flex-col items-center gap-3 text-slate-200">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm">
                <span className="relative inline-flex">
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/50" aria-hidden />
                </span>
                Currently crafting modern web products
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-2 text-sm text-slate-300">
                <span className="size-2 rounded-full bg-primary/70" aria-hidden />
                Based in Addis Ababa
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={item} className="flex justify-center text-slate-400">
          <div className="flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.24em]">Scroll</span>
            <motion.div
              className="mt-2 h-10 w-0.5 bg-linear-to-b from-slate-500 to-transparent"
              animate={{ opacity: [0.6, 1, 0.6], y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
