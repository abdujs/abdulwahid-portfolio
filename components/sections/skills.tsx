"use client";

import { motion, type Variants } from "framer-motion";
import { Laptop, Server, Wrench, PenTool } from "lucide-react";
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
        <h2 className="text-2xl font-extrabold uppercase tracking-[0.24em] text-white">Technology</h2>
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
              {items.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 rounded-xl border border-blue-400/10 bg-blue-500/5 px-3 py-2 text-sm font-medium text-slate-100"
                >
                  <span className="size-2 rounded-full bg-primary/70" aria-hidden />
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
