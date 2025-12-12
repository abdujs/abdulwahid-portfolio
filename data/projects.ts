export type Project = {
  title: string;
  role: string;
  description: string;
  link: string;
  github?: string;
  tech?: string[];
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Mela-Software Website",
    role: "Frontend · HTML · CSS · JavaScript",
    description:
      "A modern, responsive website for programming education, software development, and consulting. Features smooth animations, interactive navigation, particle effects, custom cursor, typewriter hero, and a validated contact form.",
    link: "https://melasoftware.vercel.app",
    github: "https://github.com/abdujs/melaSoftware",
    tech: ["HTML5", "CSS3", "JavaScript", "AOS", "particles.js", "Font Awesome"],
    image: "/screenshot/mela.png", // Place your screenshot in public/screenshot/
  },
  {
    title: "Personal Portfolio",
    role: "Full Stack · Next.js · TypeScript",
    description:
      "A modern developer portfolio featuring animated UI, blog, CV, and project showcase. Built with Next.js, TypeScript, shadcn/ui, Tailwind CSS, and automated CI/CD using GitHub Actions.",
    link: "#", // Add your live portfolio link if available
    github: "https://github.com/abdujs/abdulwahid-portfolio",
    tech: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS", "GitHub Actions CI/CD"],
    image: "/screenshot/portfolio.png", // Place your screenshot in public/screenshot/
  },
  {
    title: "Assunah Foundation",
    role: "Full Stack · Next.js · Tailwind CSS",
    description:
      "A comprehensive platform dedicated to promoting authentic Islamic knowledge, community service, and spiritual growth. Features include program listings, university info, Daewa TV, donation, volunteering, and news updates.",
    link: "https://www.sunnahfoundation.org/",
    github: "https://github.com/abdujs/as-sunnah-foundation-web",
    tech: ["Next.js", "Prisma", "PostgreSQL", "TypeScript", "Tailwind CSS", "Docker"],
    image: "/screenshot/assunah.png",
  },
  {
    title: "Gelagay - Home Maintenance Service",
    role: "Frontend · React · Tailwind CSS",
    description:
      "Gelagay is a digital marketplace transforming home maintenance by connecting homeowners with skilled professionals. Features include responsive design, secure user authentication, service booking, and direct messaging.",
    link: "#", // Add your live link if available
    github: "https://github.com/abdujs/Gelagay-Home-maintenace-service",
    tech: ["React", "Tailwind CSS"],
    image: "/screenshot/gelagay.png",
  },
];
