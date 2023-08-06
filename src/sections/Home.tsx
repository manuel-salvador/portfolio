import { ArrowDown } from '@/components/Icons';
import SkillsList from '@/components/SkillsList';

import SectionLayout from '../layouts/SectionLayout';

export default function Home() {
  return (
    <SectionLayout
      id="home"
      className="relative h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center gap-14 mt-20 pt-0 md:pt-0"
    >
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wider animate-fade-down">
          Manuel Salvador
        </h1>
        <h2 className="text-xl md:text-2xl tracking-wide animate-fade-up">
          Full-Stack Web Developer
        </h2>
      </div>
      <SkillsList />
      <a
        href="#aboutMe"
        className="absolute bottom-2 md:bottom-4 flex items-center justify-center animate-fade w-6 h-6 md:w-10 md:h-10"
      >
        <div className="w-full h-full animate-bounce-more">
          <ArrowDown />
        </div>
      </a>
    </SectionLayout>
  );
}
