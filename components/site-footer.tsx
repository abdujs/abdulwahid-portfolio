import Link from "next/link";
import { Github, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/cv", label: "CV" },
  { href: "mailto:contact@abdulwahid.dev", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/abdujs", label: "GitHub", icon: Github },
  { href: "mailto:contact@abdulwahid.dev", label: "Email", icon: Mail },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="space-y-3">
            <Link href="/" className="text-lg font-semibold text-foreground">
              Abdulwahid.dev
            </Link>
            <p className="max-w-md text-sm text-muted-foreground">
              Full-Stack Developer crafting reliable products with Next.js, TypeScript, and robust backend services.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center justify-center rounded-full border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
                    aria-label={item.label}
                  >
                    <Icon className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm text-muted-foreground sm:grid-cols-3">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/80">Navigate</p>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/80">Social</p>
              <div className="flex flex-col gap-2">
                {socialLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 transition hover:text-primary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden sm:block space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/80">Now</p>
              <div className="flex flex-col gap-2">
                <span className="text-muted-foreground">Open to remote roles</span>
                <span className="text-muted-foreground">Based in Addis Ababa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Abdulwahid Munewer</span>
          <span>Built with Next.js & Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}
