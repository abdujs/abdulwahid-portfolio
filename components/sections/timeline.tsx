"use client";

import { motion, type Variants } from "framer-motion";
import { experiences } from "@/data/experience";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 0.6, ease: EASE } },
};

const item: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE } },
};

export function Timeline() {
  return (
    <section id="timeline" className="space-y-8">
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-100">
          Timeline
        </span>
        <h2 className="text-2xl font-extrabold uppercase tracking-[0.24em] text-white">Experience</h2>
        <span className="h-px w-24 bg-primary/60" aria-hidden />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          variants={lineVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px origin-top bg-linear-to-b from-primary/80 via-primary/40 to-transparent"
        />

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8 pl-10"
        >
          {experiences.map((entry) => (
            <motion.li key={entry.year + entry.role} variants={item} className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-[0_16px_42px_-32px_rgba(59,130,246,0.35)] backdrop-blur">
              <span className="absolute -left-10 top-5 inline-flex size-4 items-center justify-center rounded-full border-2 border-primary bg-black" />
              <div className="flex flex-wrap items-baseline gap-2 text-slate-200">
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">{entry.year}</span>
                <span className="text-lg font-semibold text-white">{entry.role}</span>
                <span className="text-sm text-slate-400">@ {entry.company}</span>
                <span className="text-xs text-slate-500">· {entry.location}</span>
              </div>
              <p className="mt-3 text-sm text-slate-300">{entry.description}</p>
              {entry.bullets?.length ? (
                <ul className="mt-3 grid list-disc gap-1 pl-5 text-sm text-slate-300">
                  {entry.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              ) : null}
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
