"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/abdujs", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdulwahid-munewer", icon: Linkedin },
  { label: "Email", href: "mailto:contact@abdulwahid.dev", icon: Mail },
];

export function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-100">
          Contact
        </span>
        <h2 className="text-xl font-extrabold uppercase tracking-[0.24em] text-white">Contact</h2>
        <span className="h-px w-24 bg-primary/60" aria-hidden />
      </div>

      <div className="flex flex-col items-center gap-4 text-slate-200">
        <p className="text-center text-base text-slate-300">
          Let&apos;s talk about your next build. Reach out anytime.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-100 transition hover:border-primary/70 hover:text-white"
            >
              <Icon className="size-4" aria-hidden />
              {label}
            </Link>
          ))}
        </div>
        {/* CV button removed as requested */}
      </div>
    </section>
  );
}
