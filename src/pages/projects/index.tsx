import PageLayout from '@/layouts/PageLayout';
import { AllProjects } from '@/constants/projects';
import Card from '@/components/Card';

export default function ProjectsPage() {
  return (
    <PageLayout title="Manuel Salvador | Projects" className="mt-24 pb-10">
      <h1 className="text-center font-bold text-3xl mb-10">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8 px-8 md:px-8">
        {AllProjects.map((project) => (
          <div key={project.name} className="mx-auto h-full w-full">
            <Card data={project} />
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
