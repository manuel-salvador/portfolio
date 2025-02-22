import Link from 'next/link';

import { ProjectType } from '@/types';
import SectionLayout from '@/layouts/SectionLayout';
import Card from '@/components/card';

type Props = { projects: ProjectType[] };

export default function Projects({ projects }: Props) {
  return (
    <SectionLayout id="projects" className="md:py-1 py-4">
      <div className="p-6 flex flex-col gap-4">
        <h2 className="text-3xl text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {projects.map((project) => (
            <Card data={project} key={project.name} lazy={false} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href={'/projects'}
          className=" py-2 px-4 rounded-full bg-white text-black shadow-md shadow-gray-400 border-transparent border-2 font-bold hover:bg-black hover:text-white hover:border-white transition-all duration-300"
        >
          More projects ➜
        </Link>
      </div>
    </SectionLayout>
  );
}
