export type Project = {
  title: string;
  role: string;
  description: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: "Animated Marketing Site",
    role: "Frontend · Next.js · Framer Motion",
    description: "Built a fast, animated marketing experience with motion-driven storytelling and A/B tested CTAs.",
    link: "#",
  },
  {
    title: "Developer Docs Revamp",
    role: "Design Systems · MDX · shadcn/ui",
    description: "Rebuilt docs with MDX, composable UI primitives, and consistent theming across dark/light modes.",
    link: "#",
  },
  {
    title: "SaaS Onboarding Flow",
    role: "Full Stack · Next.js · API",
    description: "Shipped a guided onboarding with auth, usage analytics, and responsive UI for mobile-first customers.",
    link: "#",
  },
  {
    title: "Content Platform",
    role: "CMS · CI/CD · Containers",
    description: "Markdown-first content pipeline with CI, preview deploys, and containerized production runtime.",
    link: "#",
  },
];