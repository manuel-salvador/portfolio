"use client";

import { motion } from "framer-motion";

import type { SkillType } from "@/types";

type Props = {
  index: number;
  tech: SkillType;
  initialX: number;
};

export default function Skill({ index, tech, initialX }: Props) {
  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ x: initialX, opacity: 0 }}
      transition={{
        delay: index / 3 + 0.5,
      }}
      viewport={{ once: true }}
      whileInView={{ x: 0, opacity: 1 }}
    >
      <div className="flex h-6 w-6 items-center justify-center md:h-8 md:w-8">
        {tech.icon}
      </div>
      <p>{tech.name}</p>
    </motion.div>
  );
}
