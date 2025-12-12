"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import { motion, easeInOut } from "framer-motion";
import { ArrowUpRight, FileText, Github, Wrench, Star } from "lucide-react";
import { projects } from "@/app/(portfolio)/projects/projects";

export default function HomePage() {
  // Removed unused animation and variant code

  const name = "Abdulwahid Munewer";
  const title = "Full-Stack Developer";
  const summary =
    "I build robust, high-performance web applications—end-to-end from TypeScript APIs and Next.js to production-ready DevOps and motion-driven UI.";
  const downloadUrl = "https://flowcv.com/resume/u0sahg9n70";
  const github = "https://github.com/abdujs";
  const email = "a.wahid.developer@gmail.com";
  const contactBadges = [
    { label: "Addis Ababa, Ethiopia" },
    { label: "+251942202051" },
    { label: "a.wahid.developer@gmail.com" },
  ];

  return (
    <div id="home" className="bg-background py-12 sm:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 sm:gap-16 sm:px-6 lg:px-8">
        <motion.section
          id="cv"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeInOut } },
          }}
          className="relative overflow-hidden rounded-3xl border border-border/70 bg-white/92 px-5 py-8 sm:px-8 sm:py-10 space-y-6"
        >
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-start sm:gap-12">
            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border border-border/70 bg-white shadow-sm">
              <Image
                src="/profile-placeholder.jpg"
                alt="Abdulwahid Munewer headshot"
                fill
                sizes="128px"
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-3 text-left">
              <p className="text-sm uppercase tracking-[0.28em] text-primary">Profile</p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{name}</h1>
              <p className="text-xl text-muted-foreground">{title}</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-start gap-3 text-base text-foreground">
            {contactBadges.map((item) => (
              <span
                key={item.label}
                className="rounded-full border border-border/70 bg-white px-4 py-2 shadow-[0_4px_12px_-10px_rgba(0,0,0,0.35)]"
              >
                <span className="inline-flex items-center gap-2">{item.label}</span>
              </span>
            ))}
          </div>

          <p className="max-w-3xl text-lg text-foreground">{summary}</p>

          <div className="flex flex-wrap justify-start gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary text-white shadow-[0_10px_28px_-16px_rgba(74,144,226,0.8)] hover:bg-primary/90 hover:shadow-[0_14px_32px_-16px_rgba(74,144,226,0.9)]"
            >
              <Link
                href={downloadUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <FileText className="size-4" aria-hidden="true" />
                Download CV
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="border border-primary bg-transparent text-foreground shadow-none hover:bg-transparent hover:border-primary/90 hover:text-foreground"
            >
              <Link
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="size-4" aria-hidden="true" />
                GitHub
              </Link>
            </Button>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
          }}
          id="projects"
          className="space-y-6"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              <Star className="size-4" aria-hidden />
              Featured projects
            </span>
            <span className="h-px w-24 bg-primary/60" aria-hidden />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => {
              const spanClass = idx === 0 || idx === projects.length - 1 ? "lg:col-span-2" : "";
              return (
                <motion.div
                  key={project.title}
                  custom={idx}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  // Removed variants={cardVariants} as cardVariants is no longer defined
                  tabIndex={0}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-white/85 shadow-[0_18px_48px_-28px_rgba(24,32,45,0.25)] backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background ${spanClass}`}
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 620px, (min-width: 640px) 50vw, 90vw"
                      priority={idx < 2}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/10 via-black/0 to-black/22" />
                  </div>
                  <div className="flex flex-col gap-3 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                      {project.role}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <p className="text-sm text-foreground/90">{project.description}</p>
                    <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-primary">
                      <Link
                        href={project.link}
                        className="inline-flex items-center gap-1 underline-offset-4 transition hover:text-primary/80 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        View project
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
