"use client";

import { motion } from "motion/react";
import Skill from "@/components/skill";
import { backSkills, frontSkills } from "@/constants/skills";

export default function SkillsList() {
  return (
    <div className="mx-auto grid w-full max-w-[71.8rem] items-start gap-6 md:grid-cols-2">
      <motion.div
        className="glass-panel rounded-2xl px-6 py-8"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="mb-6 text-center text-cyan-400/80 text-xs uppercase tracking-widest">
          Frontend
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {frontSkills.map((tech, index) => (
            <Skill index={index} initialX={-24} key={tech.name} tech={tech} />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="glass-panel rounded-2xl px-6 py-8"
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.12, duration: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="mb-6 text-center text-teal-400/80 text-xs uppercase tracking-widest">
          Backend
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {backSkills.map((tech, index) => (
            <Skill index={index} initialX={24} key={tech.name} tech={tech} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
