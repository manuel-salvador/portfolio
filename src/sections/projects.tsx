"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import Card from "@/components/card";
import SectionLayout from "@/layouts/section-layout";
import type { ProjectType } from "@/types";

type Props = { projects: ProjectType[] };

export default function Projects({ projects }: Props) {
  return (
    <SectionLayout className="py-24" id="projects">
      <div className="flex flex-col gap-8 px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span className="mb-2 block text-cyan-500 text-xs uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="font-bold text-3xl text-white md:text-4xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Una selección de proyectos que demuestran mis habilidades y pasión
            por crear experiencias web excepcionales
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              key={project.name}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card data={project} lazy={false} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* More Projects Button */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Link
          className="group relative overflow-hidden rounded-full px-8 py-3 transition-all duration-300"
          href="/projects"
        >
          <span className="absolute inset-0 rounded-full border border-slate-600 bg-gradient-to-r from-slate-800 to-slate-700 transition-all duration-300 group-hover:border-cyan-500/40" />
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative z-10 flex items-center gap-2 font-medium text-white">
            View all projects
            <motion.span
              animate={{ x: [0, 4, 0] }}
              className="inline-block"
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              →
            </motion.span>
          </span>
        </Link>
      </motion.div>
    </SectionLayout>
  );
}
