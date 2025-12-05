"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center bg-background py-12 sm:py-20">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: 24 },
          show: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
          },
        }}
        className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 sm:gap-12 sm:px-6 lg:px-8"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="space-y-3 sm:space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground sm:text-sm">
            Full Stack Developer · DevOps
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Building reliable, animated, and scalable web experiences.
          </h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            I design and ship modern React/Next.js products with thoughtful UI, motion, and solid DevOps—Markdown-driven
            content, CI/CD, and containerization included.
          </p>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/cv">View my CV</Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
            <Link href="/blog">Read the blog</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="mailto:contact@abdulwahid.dev">Book a chat</Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
