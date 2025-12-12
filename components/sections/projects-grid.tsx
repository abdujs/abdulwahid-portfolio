"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.45, ease: EASE },
  }),
};

export function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="space-y-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          Featured projects
        </span>
        <h2 className="text-xl font-extrabold uppercase tracking-[0.24em] text-white">
          Featured projects
        </h2>
        <span className="h-px w-24 bg-primary/60" aria-hidden />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={idx}
          >
            <Card className="group relative h-full border-slate-800 bg-slate-900/60 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.5)] overflow-hidden">
              {project.image && (
                <div className="relative w-full h-48 mb-2 overflow-hidden rounded-t-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 90vw"
                    priority={false}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="flex flex-col gap-1 text-white">
                  <span className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                    {project.role}
                  </span>
                  <span className="text-lg">{project.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-200">
                <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-0 top-0 w-full h-full flex items-center justify-center bg-slate-900/90 rounded-xl p-4 z-10">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(project.tech ?? []).slice(0, 4).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="border border-blue-400/20 bg-blue-500/10 text-blue-400 transition hover:text-pink-400 hover:border-pink-400 hover:bg-black"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 p-2 text-blue-400 transition hover:-translate-y-0.5 hover:border-pink-400 hover:text-pink-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-pink-400"
                      aria-label="GitHub"
                    >
                      <Github className="size-5" aria-hidden />
                    </Link>
                  )}
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 p-2 text-blue-400 transition hover:-translate-y-0.5 hover:border-pink-400 hover:text-pink-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-pink-400"
                      aria-label="Live Demo"
                    >
                      <ArrowUpRight className="size-5" aria-hidden />
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
