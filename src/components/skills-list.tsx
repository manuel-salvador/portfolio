import { frontSkills, backSkills } from '@/constants/skills';
import Skill from '@/components/skill';

export default function SkillsList() {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {frontSkills.map((tech, index) => (
          <Skill key={`${tech.name}${index}`} index={index} tech={tech} initialX={-30} />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {backSkills.map((tech, index) => (
          <Skill key={`${tech.name}${index}`} index={index} tech={tech} initialX={30} />
        ))}
      </div>
    </div>
  );
}
