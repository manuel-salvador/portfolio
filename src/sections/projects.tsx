import Link from "next/link";

import Card from "@/components/card";
import SectionLayout from "@/layouts/section-layout";
import type { ProjectType } from "@/types";

type Props = { projects: ProjectType[] };

export default function Projects({ projects }: Props) {
  return (
    <SectionLayout className="py-4 md:py-1" id="projects">
      <div className="flex flex-col gap-4 p-6">
        <h2 className="mb-8 text-center text-3xl">Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card data={project} key={project.name} lazy={false} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          className="rounded-full border-2 border-transparent bg-white px-4 py-2 font-bold text-black shadow-gray-400 shadow-md transition-all duration-300 hover:border-white hover:bg-black hover:text-white"
          href={"/projects"}
        >
          More projects ➜
        </Link>
      </div>
    </SectionLayout>
  );
}
