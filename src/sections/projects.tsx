"use client";

import { motion } from "motion/react";
import Link from "next/link";

import Card from "@/components/card";
import SectionLayout from "@/layouts/section-layout";
import type { ProjectType } from "@/types";

type Props = { projects: ProjectType[] };

function pickLead(projects: ProjectType[]): ProjectType | undefined {
  return (
    projects.find(
      (project) => project.repo.trim().length === 0 && project.deploy
    ) ?? projects[0]
  );
}

export default function Projects({ projects }: Props) {
  const lead = pickLead(projects);

  return (
    <SectionLayout className="py-24" id="projects">
      <div className="flex flex-col gap-8 px-1 md:px-8">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="font-bold text-3xl text-white md:text-4xl">
            Shipped <span className="gradient-text">work</span>
          </h2>
          <p className="mt-4 text-balance text-slate-300">
            A live client site leads. Hackathons and experiments stay on the
            projects page.
          </p>
        </motion.div>

        {lead ? <Card data={lead} lazy={false} lead /> : null}
      </div>

      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Link
          className="group relative inline-flex min-h-11 items-center overflow-hidden rounded-full px-8 py-3 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-cyan-300 focus-visible:outline-offset-2"
          href="/projects"
        >
          <span className="absolute inset-0 rounded-full border border-slate-600 bg-linear-to-r from-slate-800 to-slate-700 transition-all duration-300 group-hover:border-cyan-500/40" />
          <span className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-500/10 to-teal-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative z-10 font-medium text-slate-50">
            View all projects
          </span>
        </Link>
      </motion.div>
    </SectionLayout>
  );
}
