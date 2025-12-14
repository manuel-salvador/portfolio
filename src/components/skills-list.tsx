"use client";

import { motion } from "framer-motion";
import Skill from "@/components/skill";
import { backSkills, frontSkills } from "@/constants/skills";

export default function SkillsList() {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      {/* Frontend Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
      >
        <p className="mb-4 text-center text-cyan-500/70 text-xs uppercase tracking-widest">
          Frontend
        </p>
        <div className="flex flex-wrap justify-center gap-10 md:gap-8">
          {frontSkills.map((tech, index) => (
            <Skill
              index={index}
              initialX={-30}
              key={`${tech.name}${index}`}
              tech={tech}
            />
          ))}
        </div>
      </motion.div>

      {/* Divider */}
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      {/* Backend Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
      >
        <p className="mb-4 text-center text-teal-500/70 text-xs uppercase tracking-widest">
          Backend
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {backSkills.map((tech, index) => (
            <Skill
              index={index}
              initialX={30}
              key={`${tech.name}${index}`}
              tech={tech}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
