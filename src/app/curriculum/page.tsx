import { Metadata } from 'next';

import LinksList from '@/components/links-list';

export const metadata: Metadata = {
  title: 'CV/Resume',
  description: 'See my CV/Resume'
};

export default function CurriculumPage() {
  return <LinksList title="CV/Resume Manuel Salvador" links={links} />;
}

const links = [
  {
    path: 'https://drive.google.com/file/d/1doXfhTLj7ZhPxEqfjIdcCXqn161fp8l6/view?usp=sharing',
    slug: 'See Resume - EN'
  },
  {
    path: 'https://drive.google.com/file/d/12vRYRj1Cpe6gGiTbLlDJbRp-zwioCOz4/view?usp=sharing',
    slug: 'Ver CV - ES'
  }
];
