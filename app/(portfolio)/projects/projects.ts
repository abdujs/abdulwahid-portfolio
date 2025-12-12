export type Project = {
  title: string;
  role: string;
  description: string;
  link: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Animated Marketing Site",
    role: "Frontend · Next.js · Framer Motion",
    description:
      "Built a fast, animated marketing experience with motion-driven storytelling and A/B tested CTAs.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Developer Docs Revamp",
    role: "Design Systems · MDX · shadcn/ui",
    description:
      "Rebuilt docs with MDX, composable UI primitives, and consistent theming across dark/light modes.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "SaaS Onboarding Flow",
    role: "Full Stack · Next.js · API",
    description:
      "Shipped a guided onboarding with auth, usage analytics, and responsive UI for mobile-first customers.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Content Platform",
    role: "CMS · CI/CD · Containers",
    description:
      "Markdown-first content pipeline with CI, preview deploys, and containerized production runtime.",
    link: "#",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
];
