import React from 'react';
import { motion } from 'framer-motion';
import type { SkillType } from '@/types';

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
      whileInView={{ x: 0, opacity: 1 }}
      transition={{
        delay: index / 3 + 0.5,
      }}
      viewport={{ once: true }}
    >
      <figure className="w-8 h-8 md:w-12 md:h-12">
        <img
          key={`${index}${tech.name}`}
          src={tech.imgURL}
          alt={tech.name}
          className="object-contain"
        />
      </figure>
      <p>{tech.name}</p>
    </motion.div>
  );
}
