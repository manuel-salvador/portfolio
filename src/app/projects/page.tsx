import type { Metadata } from "next";

import Card from "@/components/card";
import { api } from "@/services/api";

export const metadata: Metadata = {
  title: "Projects",
  description: "See my projects",
};

export default async function ProjectsPage() {
  const projects = await api.projects.list();

  return (
    <div className="mt-24 pb-10">
      <h1 className="mb-10 text-center font-bold text-3xl">Projects</h1>
      <div className="grid gap-8 px-8 md:grid-cols-2 md:px-8">
        {projects.map((project) => (
          <div className="mx-auto h-full w-full" key={project.name}>
            <Card data={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
