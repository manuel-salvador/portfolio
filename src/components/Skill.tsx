'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
      <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">{tech.icon}</div>
      <p>{tech.name}</p>
    </motion.div>
  );
}
