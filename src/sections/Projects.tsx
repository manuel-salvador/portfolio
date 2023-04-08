import Link from 'next/link';

import { MainProjects } from '@/constants/projects';

import SectionLayout from '../layouts/SectionLayout';
import Card from '../components/Card';

export default function Projects() {
  return (
    <SectionLayout id="projects" className="pb-0">
      <div className="p-6 flex flex-col gap-4">
        <h2 className="text-2xl">Projects</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
          {MainProjects.map((project) => (
            <Card data={project} key={project.name} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="/projects"
          className=" py-2 px-4 rounded-full bg-white text-black shadow-md shadow-gray-400 border-transparent border-2 font-bold hover:bg-black hover:text-white hover:border-white transition-all"
        >
          More projects ➜
        </Link>
      </div>
    </SectionLayout>
  );
}
