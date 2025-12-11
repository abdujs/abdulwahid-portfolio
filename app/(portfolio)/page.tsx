"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  FileText,
  Github,
  Code2,
  Wrench,
  Star,
} from "lucide-react";
import { projects } from "@/app/(portfolio)/projects/projects";
import { CvContent, type ContactBadge, type TreeSection } from "@/components/cv-content";

export default function HomePage() {
  const ease = [0.25, 0.1, 0.25, 1] as const;
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.25 : 0.5, ease },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: reduceMotion ? 0 : 0.05 * i, duration: reduceMotion ? 0.25 : 0.45, ease },
    }),
  };

  const name = "Abdulwahid Munewer";
  const title = "Full-Stack Developer";
  const summary =
    "I build robust, high-performance web applications—end-to-end from TypeScript APIs and Next.js to production-ready DevOps and motion-driven UI.";
  const downloadUrl = "https://flowcv.com/resume/u0sahg9n70";
  const github = "https://github.com/abdujs";
  const email = "contact@abdulwahid.dev";

  const contactBadges: ContactBadge[] = [
    { label: "Addis Ababa, Ethiopia", tone: "from-primary/20 via-primary/10 to-transparent", icon: "mapPin" },
    { label: "+251942202051", tone: "from-emerald-200/40 via-emerald-100/30 to-transparent", icon: "phone" },
    { label: "a.wahid.developer@gmail.com", tone: "from-sky-200/40 via-sky-100/30 to-transparent", icon: "mail" },
  ];

  type IconItem = { label: string; iconUrl: string; color: string };

  const languageIcons: IconItem[] = [
    { label: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
    { label: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
    { label: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
    { label: "HTML", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "#E44D26" },
    { label: "CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#1572B6" },
    { label: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
    { label: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#5FA04E" },
    { label: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
    { label: "shadcn/ui", iconUrl: "https://ui.shadcn.com/favicon.ico", color: "#111827" },
  ];

  const toolIcons: IconItem[] = [
    { label: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
    { label: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
    { label: "Prisma", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", color: "#0C344B" },
    { label: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#0DB7ED" },
    { label: "Git / GitHub", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#181717" },
    { label: "Jest", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg", color: "#C21325" },
    { label: "Postman", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", color: "#FF6C37" },
    { label: "GraphQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", color: "#E10098" },
    { label: "Figma", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
  ];

  const treeSections: TreeSection[] = [
    {
      label: "Experience",
      color: "from-primary/60 via-primary/30 to-transparent",
      nodes: [
        {
          title: "Bewide Technology",
          role: "Full Stack Developer (Full-Time)",
          meta: "Feb 2025 – Present · Remote",
          bullets: [
            "Shipped 3 production SaaS features (billing, reporting, onboarding) end-to-end across Next.js, Node.js, and PostgreSQL with CI-ready code.",
            "Raised reliability and performance via TypeScript, Prisma, and shared service hardening across shared services.",
          ],
        },
        {
          title: "Upwork",
          role: "Frontend Engineer (Freelance)",
          meta: "Mar 2023 – Present · Remote",
          bullets: [
            "Built and iterated marketing sites and dashboards in Next.js/React/Tailwind with API integrations and design systems.",
            "Improved Core Web Vitals by ~20% and achieved AA accessibility for client projects through audits and refactors.",
          ],
        },
        {
          title: "Addis Software",
          role: "Frontend Intern",
          meta: "Jun – Aug 2023 · Addis Ababa",
          bullets: [
            "Implemented reusable React/TypeScript components and responsive layouts for internal tools.",
            "Supported QA and documentation to streamline engineering handoff.",
          ],
        },
        {
          title: "Meweda School",
          role: "Web Development Trainer",
          meta: "Jun – Sep 2024 (Concurrent evenings) · Addis Ababa",
          bullets: [
            "Delivered a 10-week HTML/CSS/JS curriculum for 40+ students with hands-on labs.",
            "Boosted learner outcomes by simplifying complex topics and iterating on feedback.",
          ],
        },
      ],
    },
    {
      label: "Education",
      color: "from-amber-300/50 via-amber-200/30 to-transparent",
      nodes: [
        {
          title: "BBA & Information Systems",
          role: "Addis Ababa University · School of Commerce",
          meta: "Sep 2021 – Jun 2025 · Addis Ababa",
          bullets: [
            "Built systems thinking foundation across information systems, databases, and business ops.",
            "Bridged engineering decisions with process, finance, and supply-chain awareness.",
          ],
        },
      ],
    },
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
            show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
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
                <span className="inline-flex items-center gap-2">
                  {item.icon === "mapPin" ? <Code2 className="hidden" /> : null}
                  {item.label}
                </span>
              </span>
            ))}
          </div>

          <p className="max-w-3xl text-lg text-foreground">
            {summary}
          </p>

          <div className="flex flex-wrap justify-start gap-3">
            <Button asChild size="lg" className="bg-primary text-white shadow-[0_10px_28px_-16px_rgba(74,144,226,0.8)] hover:bg-primary/90 hover:shadow-[0_14px_32px_-16px_rgba(74,144,226,0.9)]">
              <Link href={downloadUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
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
              <Link href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <Github className="size-4" aria-hidden="true" />
                GitHub
              </Link>
            </Button>
          </div>
        </motion.section>

        <motion.section
          id="cv"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
          }}
          className="space-y-6"
        >
          <div className="space-y-2 text-center" />
          <CvContent
            name={name}
            title={title}
            summary={summary}
            downloadUrl={downloadUrl}
            github={github}
            email={email}
            contactBadges={contactBadges}
            treeSections={treeSections}
          />
        </motion.section>

        <section className="space-y-6 rounded-2xl border border-border/70 bg-transparent p-6 shadow-none">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-lg font-semibold uppercase tracking-[0.16em] text-emerald-800">
              <Wrench className="size-5" aria-hidden />
              Technical skills
            </span>
            <span className="h-px w-24 bg-primary/60" aria-hidden />
          </div>

          <div className="space-y-6 border-l border-border/70 pl-5 sm:pl-7">
            {[{ title: "Languages & Frameworks", items: languageIcons }, { title: "Tools & Platforms", items: toolIcons }].map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-border/70 bg-white/92 p-4 shadow-sm"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                  <span className="text-xs uppercase tracking-[0.18em] text-primary/80">Stack</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map(({ label, iconUrl, color }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white px-3 py-1.5 text-sm text-foreground shadow-[0_10px_24px_-20px_rgba(15,23,42,0.6)]"
                    >
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-full border"
                        style={{ borderColor: color, backgroundColor: `${color}12` }}
                      >
                        <Image src={iconUrl} alt={`${label} icon`} width={18} height={18} />
                      </span>
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

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
                  variants={cardVariants}
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
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{project.role}</p>
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
