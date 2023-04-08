import { ProjectType } from '@/types';

const projects: ProjectType[] = [
  {
    name: 'Sportsbook | Hackathon Think & Dev 2022',
    image: '/projects/Sportsbook.jpg',
    skills: ['React', 'TailwindCSS', 'Solidity', 'ethers.js', 'wagmi'],
    repo: 'https://github.com/manuel-salvador/hackaton-think-and-dev-gol-2022',
  },
  {
    name: 'Tuse | Hackathon Think & Dev 2.0 2023',
    image: '/projects/Tuse.jpg',
    skills: ['TypeScript', 'Next.js', 'TailwindCSS', 'Solidity', 'ethers.js', 'wagmi'],
    repo: 'https://github.com/manuel-salvador/hackathon-tuse',
    deploy: 'https://tuse.vercel.app/',
  },
];

export default projects;
