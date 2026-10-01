"use client";

import { motion } from "motion/react";
import Image from "next/image";
import profileImage from "public/profile-image.webp";

import SkillsList from "@/components/skills-list";
import SectionLayout from "@/layouts/section-layout";

export default function AboutMe() {
  return (
    <SectionLayout className="px-6 pb-24 md:px-8 md:pt-28" id="aboutMe">
      <motion.div
        className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-[minmax(0,220px)_1fr] md:gap-16"
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
          <div className="absolute inset-0 -m-8 animate-glow-pulse rounded-full bg-gradient-radial from-cyan-500/20 to-transparent blur-2xl" />

          <div className="relative h-45 w-45 md:h-55 md:w-55">
            <div
              className="absolute inset-0 animate-gradient-shift rounded-full bg-linear-to-r from-cyan-400 via-teal-400 to-cyan-400 p-0.75"
              style={{ backgroundSize: "200% 200%" }}
            >
              <div className="h-full w-full rounded-full bg-slate-900" />
            </div>

            <div className="absolute inset-1.5 overflow-hidden rounded-full">
              <Image
                alt="Manuel Salvador - Profile"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 768px) 180px, 220px"
                src={profileImage}
              />
            </div>
          </div>
        </motion.div>

        <div className="glass-panel rounded-2xl p-6 text-center md:p-8 md:text-left">
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
            className="flex flex-col gap-4 text-slate-400 leading-relaxed"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            <p>
              As a{" "}
              <span className="font-medium text-cyan-400">
                Full Stack Web Developer
              </span>
              , my passion lies in everything related to technology.
            </p>
            <p>
              Exploring new frameworks, technologies, tools and best practices
              is something I enjoy, as it allows me to deliver{" "}
              <span className="font-medium text-white">high quality work</span>.
            </p>
            <p>
              I am looking for further growth in the IT field to gain valuable
              experience by learning as much as I can and{" "}
              <span className="font-medium text-teal-400">
                contributing from my knowledge
              </span>
              .
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-6 md:justify-start"
            initial={{ opacity: 0, y: 16 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-2 rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-2">
              <span className="font-bold text-cyan-400">3+</span>
              <span className="text-slate-400 text-sm">Years Experience</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-2">
              <span className="font-bold text-teal-400">10+</span>
              <span className="text-slate-400 text-sm">Projects</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="mt-20"
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
