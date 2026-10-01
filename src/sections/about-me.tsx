"use client";

import { motion } from "motion/react";
import Image from "next/image";
import profileImage from "public/profile-image.webp";

import SkillsList from "@/components/skills-list";
import SectionLayout from "@/layouts/section-layout";

const stats = [
  { label: "Years Experience", tone: "text-cyan-300", value: "3+" },
  { label: "Projects", tone: "text-teal-300", value: "10+" },
] as const;

export default function AboutMe() {
  return (
    <SectionLayout className="px-6 pb-24 md:px-8 md:pt-28" id="aboutMe">
      <motion.div
        className="mx-auto grid w-full max-w-5xl items-center gap-8 md:grid-cols-[minmax(0,220px)_1fr] md:gap-16"
        initial={{ opacity: 0, y: 36 }}
        transition={{ duration: 0.6 }}
        viewport={{ margin: "-100px", once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <motion.div
          className="relative mx-auto shrink-0"
          initial={{ opacity: 0, scale: 0.88 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="absolute inset-0 -m-6 animate-glow-pulse rounded-full bg-gradient-radial from-cyan-500/20 to-transparent blur-2xl md:-m-8" />

          <div className="relative h-40 w-40 md:h-55 md:w-55">
            <div
              className="absolute inset-0 animate-gradient-shift rounded-full bg-linear-to-r from-cyan-400 via-teal-400 to-cyan-400 p-0.75"
              style={{ backgroundSize: "200% 200%" }}
            >
              <div className="h-full w-full rounded-full bg-slate-900" />
            </div>

            <div className="absolute inset-1.5 overflow-hidden rounded-full">
              <Image
                alt="Portrait of Manuel Salvador"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 768px) 160px, 220px"
                src={profileImage}
              />
            </div>
          </div>
        </motion.div>

        <div className="glass-panel rounded-2xl p-5 text-center md:p-8 md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="mb-6 font-bold text-3xl text-white md:text-4xl">
              About <span className="gradient-text">me</span>
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4 text-slate-300 leading-relaxed"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            <p>
              I ship full-stack web products for clients, and for teams hiring
              someone who has already put software in front of real users.
            </p>
            <p>
              <span className="font-medium text-slate-50">Portal Bosque</span>,
              a site for a nature-based family club, is the one in production.
              I&apos;m open to the next role or client project.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 grid grid-cols-2 gap-3"
            initial={{ opacity: 0, y: 16 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {stats.map((stat) => (
              <div
                className="flex min-w-0 flex-col items-center gap-1 rounded-lg border border-slate-600/60 bg-slate-800/50 px-3 py-3 text-center md:flex-row md:justify-start md:gap-2 md:text-left"
                key={stat.label}
              >
                <span className={`shrink-0 font-bold ${stat.tone}`}>
                  {stat.value}
                </span>
                <span className="text-slate-300 text-sm leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="mt-16 md:mt-20"
        initial={{ opacity: 0, y: 28 }}
        transition={{ duration: 0.6 }}
        viewport={{ margin: "-100px", once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <SkillsList />
      </motion.div>
    </SectionLayout>
  );
}
