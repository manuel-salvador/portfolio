import Link from 'next/link';

import Card from '@/components/card';
import SectionLayout from '@/layouts/section-layout';
import { ProjectType } from '@/types';

type Props = { projects: ProjectType[] };

export default function Projects({ projects }: Props) {
  return (
    <SectionLayout id="projects" className="py-4 md:py-1">
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
          href={'/projects'}
          className="rounded-full border-2 border-transparent bg-white px-4 py-2 font-bold text-black shadow-md shadow-gray-400 transition-all duration-300 hover:border-white hover:bg-black hover:text-white"
        >
          More projects ➜
        </Link>
      </div>
    </SectionLayout>
  );
}
