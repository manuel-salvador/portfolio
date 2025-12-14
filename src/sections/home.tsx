"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "@/components/icons";
import SkillsList from "@/components/skills-list";
import SectionLayout from "@/layouts/section-layout";

export default function Home() {
  return (
    <SectionLayout
      className="relative mt-20 flex h-[calc(100vh-5rem)] flex-col items-center justify-center gap-12 overflow-hidden pt-0 text-center md:pt-0"
      id="home"
    >
      {/* Background Gradient Orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-float rounded-full bg-cyan-500/20 blur-3xl" />
        <div
          className="absolute right-1/4 bottom-1/4 h-80 w-80 animate-float rounded-full bg-teal-500/15 blur-3xl"
          style={{ animationDelay: "-3s" }}
        />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-[600px] w-[600px] rounded-full bg-gradient-radial from-cyan-500/10 to-transparent blur-2xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col gap-6">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="gradient-text font-bold text-5xl tracking-tight md:text-7xl">
            Manuel Salvador
          </h1>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <h2 className="text-slate-300 text-xl tracking-wide md:text-2xl">
            <span className="text-cyan-400">&lt;</span>
            Full-Stack Web Developer
            <span className="text-cyan-400"> /&gt;</span>
          </h2>
        </motion.div>

        <motion.p
          animate={{ opacity: 1 }}
          className="mx-auto text-balance text-slate-400 text-sm md:text-base"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Building modern digital experiences with clean, scalable code and
          intuitive design.
        </motion.p>
      </div>

      {/* Skills Section */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <SkillsList />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.a
        animate={{ opacity: 1 }}
        className="absolute bottom-4 flex flex-col items-center gap-2 text-slate-400 transition-colors hover:text-cyan-400 md:bottom-8"
        href="#aboutMe"
        initial={{ opacity: 0 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          className="h-6 w-6 md:h-8 md:w-8"
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ArrowDown />
        </motion.div>
      </motion.a>
    </SectionLayout>
  );
}
