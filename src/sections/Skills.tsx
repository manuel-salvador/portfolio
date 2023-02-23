import SectionLayout from '../layouts/SectionLayout';
import { frontSkills, backSkills } from '@/constants/skills';
import Skill from '@/components/Skill';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <SectionLayout id="skills" className="pb-8">
      <div className="flex flex-col flex-1 gap-4 h-full px-6 pt-2">
        <h2 className="text-2xl">Skills</h2>
        <div className="flex flex-col flex-1 md:flex-row gap-8 md:h-full">
          <div className="h-1/2 md:h-full md:w-1/2 bg-slate-500 bg-opacity-30 p-2 rounded-xl flex flex-col gap-4">
            <h3 className="text-center text-2xl">Front-end</h3>
            <div className="flex justify-center gap-8 flex-wrap">
              {frontSkills.map((tech, index) => (
                <Skill key={`${tech.name}${index}`} index={index} tech={tech} initialX={-100} />
              ))}
            </div>
          </div>
          <div className="h-1/2 md:h-full md:w-1/2 bg-slate-500 bg-opacity-30 p-4 rounded-xl flex flex-col gap-4">
            <h3 className="text-center text-2xl">Back-end</h3>
            <div className="flex justify-center gap-8 flex-wrap">
              {backSkills.map((tech, index) => (
                <motion.div>
                  <Skill key={`${tech.name}${index}`} index={index} tech={tech} initialX={100} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
