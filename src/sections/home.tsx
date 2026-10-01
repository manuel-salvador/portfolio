"use client";

import { motion } from "motion/react";
import { ArrowDown } from "@/components/icons";
import SectionLayout from "@/layouts/section-layout";

function ViewportCorners() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-5 md:inset-10"
    >
      <span className="absolute top-0 left-0 h-7 w-7 border-cyan-400/40 border-t border-l md:h-9 md:w-9" />
      <span className="absolute top-0 right-0 h-7 w-7 border-cyan-400/40 border-t border-r md:h-9 md:w-9" />
      <span className="absolute bottom-0 left-0 h-7 w-7 border-cyan-400/40 border-b border-l md:h-9 md:w-9" />
      <span className="absolute right-0 bottom-0 h-7 w-7 border-cyan-400/40 border-r border-b md:h-9 md:w-9" />
    </div>
  );
}

export default function Home() {
  return (
    <SectionLayout
      className="relative flex h-dvh max-h-dvh flex-col items-center justify-center gap-6 overflow-hidden py-0 pt-32 text-center md:py-0 md:pt-20 2xl:gap-10"
      id="home"
    >
      <ViewportCorners />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-float rounded-full bg-cyan-500/20 blur-3xl" />
        <div
          className="absolute right-1/4 bottom-1/4 h-80 w-80 animate-float rounded-full bg-teal-500/15 blur-3xl"
          style={{ animationDelay: "-3s" }}
        />
        <div className="absolute top-1/2 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-cyan-500/10 to-transparent blur-2xl" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <span className="absolute h-72 w-72 animate-sonar-ping rounded-full border border-cyan-400/25 md:h-96 md:w-96" />
        <span
          className="absolute h-72 w-72 animate-sonar-ping rounded-full border border-cyan-400/20 md:h-96 md:w-96"
          style={{ animationDelay: "1.5s" }}
        />
        <span
          className="absolute h-72 w-72 animate-sonar-ping rounded-full border border-teal-400/15 md:h-96 md:w-96"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-5 px-4">
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className="gradient-text font-bold text-5xl tracking-tight md:text-6xl 2xl:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Manuel Salvador
        </motion.h1>

        <div aria-hidden="true" className="sonar-divider" />

        <motion.h2
          animate={{ opacity: 1, y: 0 }}
          className="text-slate-200 text-xl tracking-wide 2xl:text-2xl"
          initial={{ opacity: 0, y: 16 }}
          transition={{ delay: 0.35, duration: 0.8, ease: "easeOut" }}
        >
          Full-Stack Web Developer
        </motion.h2>

        <motion.p
          animate={{ opacity: 1 }}
          className="mx-auto max-w-xl text-balance text-base text-slate-300 md:text-lg"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Portal Bosque is live for a real client, and I&apos;m open to the next
          role or project.
        </motion.p>
      </div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 flex flex-wrap items-center justify-center gap-4"
        initial={{ opacity: 0, y: 24 }}
        transition={{ delay: 0.62, duration: 0.8 }}
      >
        <a
          className="btn-primary rounded-xl px-8 py-3 font-medium"
          href="#projects"
        >
          See my work
        </a>
        <a
          className="rounded-full border border-slate-600 bg-slate-800/50 px-8 py-3 font-medium text-slate-100 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-white focus-visible:outline-2 focus-visible:outline-cyan-300 focus-visible:outline-offset-2"
          href="#contact"
        >
          Get in touch
        </a>
      </motion.div>

      <motion.a
        animate={{ opacity: 1 }}
        aria-label="Scroll to about"
        className="absolute bottom-4 flex flex-col items-center gap-2 text-slate-300 transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-300 focus-visible:outline-offset-4 md:bottom-8"
        href="#aboutMe"
        initial={{ opacity: 0 }}
        transition={{ delay: 1.1 }}
      >
        <span
          aria-hidden="true"
          className="text-xs uppercase tracking-widest md:hidden 2xl:block"
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          className="h-6 w-6 md:h-8 md:w-8"
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <ArrowDown />
        </motion.div>
      </motion.a>
    </SectionLayout>
  );
}
