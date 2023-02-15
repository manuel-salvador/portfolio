import SectionLayout from '../layouts/SectionLayout';
import Card from '../components/Card';
import { ProjectType } from '@/types';

const projects: ProjectType[] = [
  {
    name: 'Sportsbook | Hackathon Think & Dev 2022',
    image: 'Sportsbook',
    skills: ['React', 'TailwindCSS', 'Solidity', 'ethers.js', 'wagmi'],
    repo: 'https://github.com/manuel-salvador/hackaton-think-and-dev-gol-2022',
  },
];

export default function Projects() {
  return (
    <SectionLayout id="projects">
      <div className="p-6 md:h-full flex flex-col gap-4">
        <h2 className="text-2xl">Projects</h2>
        {projects.map((project) => (
          <Card data={project} key={project.name} />
        ))}
      </div>
    </SectionLayout>
  );
}
