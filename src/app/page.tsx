import AboutMe from "@/sections/about-me";
import Contact from "@/sections/contact";
import Home from "@/sections/home";
import Projects from "@/sections/projects";
import { api } from "@/services/api";

export default async function HomePage() {
  const projects = await api.mainProjects.list();

  return (
    <div>
      <Home />
      <AboutMe />
      <Projects projects={projects} />
      <Contact />
    </div>
  );
}
