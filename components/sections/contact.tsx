"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/abdujs", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abdulwahid-m/", icon: Linkedin },
  { label: "Telegram", href: "https://t.me/Abdulwahid_Munewer", icon: Send, badge: true },
  { label: "Email", href: "mailto:a.wahid.developer@gmail.com", icon: Mail },
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
          {socials.map(({ label, href, icon: Icon, badge }) => (
            <Link
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400 transition hover:-translate-y-0.5 hover:border-pink-400 hover:text-pink-400 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-pink-400"
            >
              <span className="relative">
                <Icon
                  className="size-4 text-blue-400 group-hover:text-pink-400 transition-colors"
                  aria-hidden
                />
              </span>
              <span className={badge ? "relative inline-block" : undefined}>
                {label}
                {badge && (
                  <span
                    className="absolute -top-1 -right-3 size-2 rounded-full bg-emerald-400 ring-2 ring-emerald-400"
                    title="Active on Telegram"
                  />
                )}
              </span>
            </Link>
          ))}
        </div>
        {/* CV button removed as requested */}
      </div>
    </section>
  );
}
