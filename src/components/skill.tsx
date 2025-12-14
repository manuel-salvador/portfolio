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
      className="group flex flex-col items-center gap-3"
      initial={{ x: initialX, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      whileInView={{ x: 0, opacity: 1 }}
    >
      <div className="relative">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 scale-0 rounded-full bg-cyan-500/40 blur-lg transition-transform duration-300 group-hover:scale-150" />

        {/* Icon container */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/50 transition-all duration-300 group-hover:border-cyan-500/40 group-hover:bg-slate-800/80 md:h-12 md:w-12">
          <div className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 md:h-7 md:w-7">
            {tech.icon}
          </div>
        </div>
      </div>

      <p className="font-medium text-slate-400 text-xs transition-colors duration-300 group-hover:text-cyan-300 md:text-sm">
        {tech.name}
      </p>
    </motion.div>
  );
}
