import PageLayout from '@/layouts/PageLayout';
import Card from '@/components/Card';
import { api } from '@/services/api';
import type { ProjectType } from '@/types';

type Props = { projects: ProjectType[] };

export default function ProjectsPage({ projects }: Props) {
  return (
    <PageLayout title="Manuel Salvador | Projects" className="mt-24 pb-10">
      <h1 className="text-center font-bold text-3xl mb-10">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8 px-8 md:px-8">
        {projects.map((project) => (
          <div key={project.name} className="mx-auto h-full w-full">
            <Card data={project} />
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const projects = await api.projects.list();

  return {
    props: {
      projects,
    },
  };
}
