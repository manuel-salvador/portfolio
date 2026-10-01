"use client";

import Atropos from "atropos/react";
import { motion } from "motion/react";
import Image from "next/image";

import type { ProjectType } from "@/types";

import { GitHubIcon, GlobeIcon } from "./icons";

type CardProps = {
  data: ProjectType;
  lazy?: boolean;
};

function ProjectActions({ data }: { data: ProjectType }) {
  return (
    <div className="mt-2 flex justify-center gap-4">
      {!!data.repo && (
        <a
          className="group/btn flex items-center gap-2 rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-2 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10"
          href={data.repo}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="h-5 w-5 text-slate-400 transition-colors group-hover/btn:text-cyan-400">
            <GitHubIcon />
          </div>
          <span className="text-slate-300 text-sm transition-colors group-hover/btn:text-white">
            Code
          </span>
        </a>
      )}
      {!!data.deploy && (
        <a
          className="group/btn flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-linear-to-r from-cyan-500/20 to-teal-500/20 px-4 py-2 transition-all duration-300 hover:from-cyan-500/30 hover:to-teal-500/30"
          href={data.deploy}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="h-5 w-5 text-cyan-400 transition-colors group-hover/btn:text-cyan-300">
            <GlobeIcon />
          </div>
          <span className="text-cyan-300 text-sm transition-colors group-hover/btn:text-white">
            Demo
          </span>
        </a>
      )}
    </div>
  );
}

export default function Card({ data, lazy = true }: CardProps) {
  return (
    <motion.div
      className="h-full w-full"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="group glass-card mx-auto flex h-full flex-col justify-between gap-3 rounded-2xl px-5 py-4 md:px-6 md:py-5">
        <Atropos
          className="rounded-xl"
          highlight={false}
          rotateTouch={false}
          shadow={false}
        >
          <div className="flex flex-col gap-2 lg:px-4">
            <h3 className="font-semibold text-lg text-white transition-colors duration-300 group-hover:text-cyan-300">
              {data.name}
            </h3>

            <figure
              className="relative aspect-video w-full"
              data-atropos-offset="6"
            >
              {!!data.badge && (
                <span className="absolute top-3 left-3 z-10 flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/70 px-3 py-1 text-cyan-300 text-xs uppercase tracking-widest backdrop-blur-md">
                  <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-cyan-400" />
                  {data.badge}
                </span>
              )}
              <Image
                alt={data.name}
                className="h-auto w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                fill
                priority={!lazy}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={data.image}
              />
            </figure>

            <ul
              className="flex flex-wrap justify-center gap-2"
              data-atropos-offset="8"
            >
              {data.skills.map((skill, index) => (
                <motion.li
                  className="rounded-full border border-slate-700/50 bg-slate-800/80 px-3 py-1 text-slate-300 text-xs transition-all duration-300 hover:border-cyan-500/30 hover:text-cyan-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  key={`${data.name}-${skill}`}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, scale: 1 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </Atropos>

        <p className="text-center text-slate-400 text-sm leading-relaxed">
          {data.description}
        </p>

        <ProjectActions data={data} />
      </div>
    </motion.div>
  );
}
