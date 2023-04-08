import projects from '@/constants/projects';

import SectionLayout from '../layouts/SectionLayout';
import Card from '../components/Card';

export default function Projects() {
  return (
    <SectionLayout id="projects" className="pb-0">
      <div className="p-6 flex flex-col gap-4">
        <h2 className="text-2xl">Projects</h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <Card data={project} key={project.name} />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
