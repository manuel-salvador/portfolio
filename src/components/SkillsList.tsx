import { frontSkills, backSkills } from '@/constants/skills';
import Skill from '@/components/Skill';

export default function SkillsList() {
  return (
    <div className="flex flex-col items-center w-full gap-8 ">
      <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
        {frontSkills.map((tech, index) => (
          <Skill key={`${tech.name}${index}`} index={index} tech={tech} initialX={-30} />
        ))}
      </div>
      <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
        {backSkills.map((tech, index) => (
          <Skill key={`${tech.name}${index}`} index={index} tech={tech} initialX={30} />
        ))}
      </div>
    </div>
  );
}
