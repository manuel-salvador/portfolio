import PageLayout from '@/layouts/PageLayout';
import { AllProjects } from '@/constants/projects';
import Card from '@/components/Card';

export default function ProjectsPage() {
  return (
    <PageLayout title="Manuel Salvador | Projects" className="mt-24 pb-10">
      <h1 className="text-center font-bold text-3xl mb-10">Projects</h1>
      <div className="flex flex-col items-center md:flex-row md:justify-center flex-wrap gap-8 px-5 md:px-0">
        {AllProjects.map((project) => (
          <Card key={project.name} data={project} />
        ))}
      </div>
    </PageLayout>
  );
}
