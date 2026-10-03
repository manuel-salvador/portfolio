"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useRef } from "react";

import LiveProjectButton from "@/components/studio/live-project-button";
import type { ProjectType } from "@/types";

type ProjectStackProps = {
  projects: ProjectType[];
};

function paddedNumber(index: number): string {
  return String(index + 1).padStart(2, "0");
}

function projectContext(project: ProjectType): string {
  const context = project.context?.trim() || project.badge?.trim();
  if (context) {
    return context;
  }

  if (!project.repo.trim() && project.deploy?.trim()) {
    return "Live client project";
  }

  if (project.name.toLowerCase().includes("hackathon")) {
    return "Hackathon project";
  }

  return "";
}

function Shot({
  alt,
  className,
  position,
  src,
  style,
}: {
  alt: string;
  className: string;
  position: string;
  src: string;
  style?: CSSProperties;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <Image
        alt={alt}
        className={`object-cover ${position}`}
        fill
        sizes="(max-width: 768px) 90vw, 40vw"
        src={src}
      />
    </div>
  );
}

function StackCard({
  index,
  project,
  total,
}: {
  index: number;
  project: ProjectType;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
    target: ref,
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const liveHref = project.deploy?.trim() ?? "";
  const codeHref = project.repo.trim();
  const href = liveHref || codeHref;
  const context = projectContext(project);
  const contribution = project.contribution?.trim();
  const screenshotLabel = liveHref
    ? `Open ${project.name} live website (opens in a new tab)`
    : `Open ${project.name} source code (opens in a new tab)`;

  return (
    <div
      className="project-sticky h-auto sm:sticky sm:h-[85vh]"
      ref={ref}
      style={{ ["--stack" as string]: `${index * 28}px`, zIndex: index + 1 }}
    >
      <motion.article
        className="project-stack-card flex h-full flex-col rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
        style={reduce ? undefined : { ["--project-scale" as string]: scale }}
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex min-w-0 items-end gap-4 sm:gap-8">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {paddedNumber(index)}
            </span>
            <div className="min-w-0 pb-1 sm:pb-3">
              <h3
                className="font-medium text-[#D7E2EA] uppercase leading-none"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {project.name}
              </h3>
              {context ? (
                <p className="mt-2 text-[#D7E2EA]/80 text-xs uppercase tracking-wider sm:text-sm">
                  {context}
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {liveHref ? (
              <LiveProjectButton
                href={liveHref}
                rel="noopener noreferrer"
                target="_blank"
              />
            ) : null}
            {codeHref ? (
              <LiveProjectButton
                href={codeHref}
                label="Code"
                rel="noopener noreferrer"
                target="_blank"
              />
            ) : null}
          </div>
        </div>

        <p className="mt-4 max-w-2xl font-light text-[#D7E2EA]/80 text-base leading-relaxed">
          {project.description}
        </p>

        {contribution ? (
          <p className="mt-3 max-w-2xl text-[#D7E2EA] text-base leading-relaxed">
            <span className="font-medium">My contribution: </span>
            {contribution}
          </p>
        ) : null}

        {project.skills.length > 0 ? (
          <ul
            aria-label={`${project.name} technologies`}
            className="mt-4 flex flex-wrap gap-2"
          >
            {project.skills.map((skill) => (
              <li
                className="rounded-full border border-[#D7E2EA]/30 px-3 py-1 text-[#D7E2EA] text-xs uppercase tracking-wider"
                key={skill}
              >
                {skill}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 flex min-h-0 items-stretch gap-3 sm:mt-4 sm:flex-1">
          <div
            aria-hidden="true"
            className="hidden w-[40%] flex-col gap-3 sm:flex"
          >
            <Shot
              alt=""
              className="min-h-0 flex-1 rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              position="object-top"
              src={project.image}
              style={{ maxHeight: "clamp(130px, 16vw, 230px)" }}
            />
            <Shot
              alt=""
              className="min-h-0 flex-[1.4] rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              position="object-bottom"
              src={project.image}
              style={{ maxHeight: "clamp(160px, 22vw, 340px)" }}
            />
          </div>
          {href ? (
            <a
              aria-label={screenshotLabel}
              className="relative block aspect-[2/1] w-full overflow-hidden rounded-[40px] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 sm:aspect-auto sm:w-[60%] sm:rounded-[50px] md:rounded-[60px]"
              href={href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Image
                alt={`${project.name} screenshot`}
                className="object-contain sm:object-cover"
                fill
                sizes="(max-width: 640px) calc(100vw - 76px), 40vw"
                src={project.image}
              />
            </a>
          ) : (
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-[40px] sm:aspect-auto sm:w-[60%] sm:rounded-[50px] md:rounded-[60px]">
              <Image
                alt={`${project.name} screenshot`}
                className="object-contain sm:object-cover"
                fill
                sizes="(max-width: 640px) calc(100vw - 76px), 40vw"
                src={project.image}
              />
            </div>
          )}
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectStack({ projects }: ProjectStackProps) {
  return (
    <section
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pt-16 pb-24 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
      id="projects"
    >
      <h2
        className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight sm:mb-16"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Projects
      </h2>

      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        {projects.map((project, index) => (
          <StackCard
            index={index}
            key={project.name}
            project={project}
            total={projects.length}
          />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          className="inline-flex min-h-11 items-center rounded-full border-2 border-[#D7E2EA] px-8 py-3 font-medium text-[#D7E2EA] text-sm uppercase tracking-widest transition-colors duration-200 hover:bg-[#D7E2EA]/10 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-3"
          href="/projects"
        >
          All projects
        </Link>
      </div>
    </section>
  );
}
