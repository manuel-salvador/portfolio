import { Metadata } from 'next';

import Card from '@/components/card';
import { api } from '@/services/api';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'See my projects',
};

export default async function ProjectsPage() {
  const projects = await api.projects.list();

  return (
    <div className="mt-24 pb-10">
      <h1 className="text-center font-bold text-3xl mb-10">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8 px-8 md:px-8">
        {projects.map((project) => (
          <div key={project.name} className="mx-auto h-full w-full">
            <Card data={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
