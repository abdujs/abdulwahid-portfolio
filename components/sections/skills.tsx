"use client";

import { motion, type Variants } from "framer-motion";
import {
  Laptop,
  Server,
  Wrench,
  PenTool,
  Atom,
  FileCode2,
  Feather,
  Database,
  Cloud,
  GitBranch,
  Dock,
  Terminal,
  Settings2,
  Zap,
  Braces,
  BadgeCheck,
  LayoutDashboard,
  MousePointer2,
  LucideIcon,
} from "lucide-react";
import { skills as skillsData } from "@/data/skills";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

const skillIconMap: Record<string, LucideIcon> = {
  React: Atom,
  "Next.js": LayoutDashboard,
  TypeScript: FileCode2,
  JavaScript: Braces,
  "Tailwind CSS": Feather,
  "Framer Motion": Zap,
  "shadcn/ui": MousePointer2,
  "Node.js": Server,
  PostgreSQL: Database,
  MongoDB: Database,
  "Prisma ORM": Settings2,
  "REST APIs": Cloud,
  Git: GitBranch,
  Docker: Dock,
  Vercel: Cloud,
  "CI/CD": Terminal,
  // Figma: No Lucide icon, will fallback
};

const categories = [
  { title: "Frontend", icon: Laptop, items: skillsData.frontend },
  { title: "Backend", icon: Server, items: skillsData.backend },
  { title: "Tools", icon: Wrench, items: skillsData.tools },
];

export function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-100">
          Skills
        </span>
        <h2 className="text-2xl font-extrabold uppercase tracking-[0.24em] text-white">
          Technology
        </h2>
        <span className="h-px w-24 bg-primary/60" aria-hidden />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {categories.map(({ title, icon: Icon, items }) => (
          <motion.div
            key={title}
            variants={card}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-[0_16px_42px_-32px_rgba(59,130,246,0.35)] backdrop-blur"
          >
            <div className="flex items-center gap-3 text-white">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <div className="mt-4 grid gap-2">
              {items.map((skill) => {
                const SkillIcon = skillIconMap[skill] || BadgeCheck;
                return (
                  <div
                    key={skill}
                    className="flex items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-sm font-medium text-blue-400 transition hover:-translate-y-0.5 hover:border-pink-400 hover:text-pink-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-pink-400"
                  >
                    <SkillIcon
                      className="size-4 text-blue-400 group-hover:text-pink-400 transition-colors"
                      aria-hidden
                    />
                    {skill}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
