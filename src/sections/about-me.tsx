"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profileImage from "public/profile-image.webp";
import SectionLayout from "@/layouts/section-layout";

export default function AboutMe() {
  return (
    <SectionLayout className="px-6 py-24 md:px-8" id="aboutMe">
      <motion.div
        className="mx-auto flex w-full max-w-4xl flex-col items-center gap-12 md:flex-row md:gap-16"
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {/* Profile Image with Glow Ring */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileInView={{ scale: 1, opacity: 1 }}
        >
          {/* Outer glow */}
          <div className="-m-8 absolute inset-0 animate-glow-pulse rounded-full bg-gradient-radial from-cyan-500/20 to-transparent blur-2xl" />

          {/* Animated gradient ring */}
          <div className="relative h-[180px] w-[180px] md:h-[220px] md:w-[220px]">
            <div
              className="absolute inset-0 animate-gradient-shift rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 p-[3px]"
              style={{ backgroundSize: "200% 200%" }}
            >
              <div className="h-full w-full rounded-full bg-slate-900" />
            </div>

            {/* Image container */}
            <div className="absolute inset-[6px] overflow-hidden rounded-full">
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

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="mb-2 block text-cyan-500 text-xs uppercase tracking-widest">
              Sobre mí
            </span>
            <h2 className="mb-6 font-bold text-3xl text-white md:text-4xl">
              About <span className="gradient-text">me</span>
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4 text-slate-400 leading-relaxed"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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

          {/* Stats or highlights */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-6 md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
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
    </SectionLayout>
  );
}
