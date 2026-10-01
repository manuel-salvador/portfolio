import Contact from "@/sections/contact";
import AboutSection from "@/sections/studio/about-section";
import HeroSection from "@/sections/studio/hero-section";
import MarqueeSection from "@/sections/studio/marquee-section";
import ProjectStack from "@/sections/studio/project-stack";
import ServicesSection from "@/sections/studio/services-section";
import { api } from "@/services/api";
import type { ProjectType } from "@/types";

function isLiveClient(project: ProjectType): boolean {
  return project.repo.trim().length === 0 && Boolean(project.deploy?.trim());
}

function featuredProjects(projects: ProjectType[]): ProjectType[] {
  const main = projects.filter((project) => project.isMain.trim().length > 0);
  const pool = main.length > 0 ? main : projects;

  return [...pool]
    .sort((left, right) => {
      if (isLiveClient(left) === isLiveClient(right)) {
        return 0;
      }

      return isLiveClient(left) ? -1 : 1;
    })
    .slice(0, 3);
}

function screenshotUrls(projects: ProjectType[]): string[] {
  const seen = new Set<string>();
  const urls: string[] = [];

  for (const project of projects) {
    const image = project.image.trim();
    if (!image || seen.has(image)) {
      continue;
    }

    seen.add(image);
    urls.push(image);
  }

  return urls;
}

export default async function HomePage() {
  const projects = await api.projects.list();

  return (
    <div className="overflow-x-clip bg-[#0C0C0C] text-[#D7E2EA]">
      <HeroSection />
      <MarqueeSection images={screenshotUrls(projects)} />
      <AboutSection />
      <ServicesSection />
      <ProjectStack projects={featuredProjects(projects)} />
      <Contact />
    </div>
  );
}
