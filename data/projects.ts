export type Project = {
  title: string;
  description: string;
  link: string;
  github?: string;
  tech?: string[];
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Agri Data Dashboard",
    description:
      "A professional, responsive dashboard for visualizing agricultural yields and related metadata. Features interactive charts, KPIs, country/crop/year filters, CSV export, and a robust data pipeline. Built with React, TypeScript, Vite, Chart.js, and resilient CSS.",
    link: "https://agri-data-visualizer.vercel.app", // Replace with actual demo link
    github: "https://github.com/abdujs/agri-data-dashboard", // Replace with actual repo link
    tech: [
      "React","TypeScript", "Chart.js","Python","pandas"
    ],
    image: "/screenshot/agri-data.webp" // Add screenshot to public/screenshot/
  },

  {
    title: "Assunah Foundation",
    description:
      "A comprehensive platform dedicated to promoting authentic Islamic knowledge, community service, and spiritual growth. Features include program listings, university info, Daewa TV, donation, volunteering, and news updates.",
    link: "https://www.sunnahfoundation.org/",
    github: "https://github.com/abdujs/as-sunnah-foundation-web",
    tech: ["Next.js", "Prisma", "PostgreSQL", "TypeScript", "Tailwind CSS", "Docker"],
    image: "/screenshot/assunah.webp",
  },
  {
   title: "Personal Portfolio",
   description:
      "A modern developer portfolio featuring animated UI, project showcase, and contact form. Built with Next.js, TypeScript, shadcn/ui, Tailwind CSS, and automated CI/CD using GitHub Actions.",
    link: "#", // Add your live portfolio link if available
    github: "https://github.com/abdujs/abdulwahid-portfolio",
    tech: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS", "GitHub Actions CI/CD"],
    image: "/screenshot/portfolio.webp", // Place your screenshot in public/screenshot/
  },
  {
    title: "Mela-Software Website",
    description:
      "A modern, responsive website for programming education, software development, and consulting. Features smooth animations, interactive navigation, particle effects, custom cursor, typewriter hero, and a validated contact form.",
    link: "https://melasoftware.vercel.app",
    github: "https://github.com/abdujs/melaSoftware",
    tech: ["HTML5", "CSS3", "JavaScript", "particles.js"],
    image: "/screenshot/mela.webp", // Place your screenshot in public/screenshot/
  },
 
  
  {
    title: "Gelagay - Home Maintenance Service",
    description:
      "Gelagay is a digital marketplace transforming home maintenance by connecting homeowners with skilled professionals. Features include responsive design, secure user authentication, service booking, and direct messaging.",
    link: "#", // Add your live link if available
    github: "https://github.com/abdujs/Gelagay-Home-maintenace-service",
    tech: ["React", "Tailwind CSS"],
    image: "/screenshot/gelagayHomePage.webp", // Place your screenshot in public/screenshot/
  },
  {
    title: "Solar Energy Dashboard",
    description:
      "A professional, modular, and visually advanced dashboard for global solar energy analytics. Features global solar capacity, generation, and growth metrics, interactive charts (Pie, Line, Radar, Scatter, Area), and a modern, illuminated UI. Built with React, Vite, TypeScript, Tailwind CSS, and Recharts. Data sourced from Kaggle.",
    link: "https://solarenergy-dashboard.vercel.app",
    github: "https://github.com/abdujs/Solar-Energy-Dashboard", // Replace with actual repo link
    tech: [
      "React",
      "TypeScript",
      "Tailwind",
      "Recharts"
    ],
    image: "/screenshot/solar-energy.png" // Add screenshot to public/screenshot/
  },
  
];
