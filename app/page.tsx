"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  const projects = [
    {
      title: "Animated Marketing Site",
      role: "Frontend · Next.js · Framer Motion",
      description: "Built a fast, animated marketing experience with motion-driven storytelling and A/B tested CTAs.",
      link: "#",
    },
    {
      title: "Developer Docs Revamp",
      role: "Design Systems · MDX · shadcn/ui",
      description: "Rebuilt docs with MDX, composable UI primitives, and consistent theming across dark/light modes.",
      link: "#",
    },
    {
      title: "SaaS Onboarding Flow",
      role: "Full Stack · Next.js · API",
      description: "Shipped a guided onboarding with auth, usage analytics, and responsive UI for mobile-first customers.",
      link: "#",
    },
    {
      title: "Content Platform",
      role: "CMS · CI/CD · Containers",
      description: "Markdown-first content pipeline with CI, preview deploys, and containerized production runtime.",
      link: "#",
    },
  ];

  return (
    <div className="bg-background py-12 sm:py-20">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-4 sm:gap-16 sm:px-6 lg:px-8">
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
          className="flex flex-col gap-8 sm:gap-12"
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

        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Featured projects</h2>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
              A few recent builds spanning marketing sites, docs, onboarding flows, and content systems.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative flex h-full flex-col justify-between rounded-xl border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md focus-within:-translate-y-1 focus-within:shadow-md"
              >
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">{project.role}</p>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
                  <Link
                    href={project.link}
                    className="inline-flex items-center gap-1 rounded-md px-0 py-1 underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    View project
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
