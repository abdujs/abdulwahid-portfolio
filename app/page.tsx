import { EnhancedHero } from "@/components/sections/enhanced-hero";
import { Timeline } from "@/components/sections/timeline";
import { Skills } from "@/components/sections/skills";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { Contact } from "@/components/sections/contact";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <main className="space-y-20 pb-20">
      <EnhancedHero />
      <Timeline />
      <Skills />
      <ProjectsGrid projects={projects} />
      <Contact />
    </main>
  );
}
