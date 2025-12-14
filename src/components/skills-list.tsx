import Skill from "@/components/skill";
import { backSkills, frontSkills } from "@/constants/skills";

export default function SkillsList() {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {frontSkills.map((tech, index) => (
          <Skill
            index={index}
            initialX={-30}
            key={`${tech.name}${index}`}
            tech={tech}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {backSkills.map((tech, index) => (
          <Skill
            index={index}
            initialX={30}
            key={`${tech.name}${index}`}
            tech={tech}
          />
        ))}
      </div>
    </div>
  );
}
