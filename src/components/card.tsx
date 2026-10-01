"use client";

import Atropos from "atropos/react";
import { motion } from "motion/react";
import Image from "next/image";
import type { ReactNode } from "react";

import type { ProjectType } from "@/types";

import { GitHubIcon, GlobeIcon } from "./icons";

const MAX_SKILL_CHIPS = 4;

type CardProps = {
  data: ProjectType;
  lazy?: boolean;
  lead?: boolean;
};

function isLiveClient(data: ProjectType): boolean {
  return data.repo.trim().length === 0 && Boolean(data.deploy);
}

function ActionLink({
  href,
  icon,
  label,
  tone,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  tone: "code" | "live";
}) {
  return (
    <a
      className={
        tone === "live"
          ? "group/btn inline-flex min-h-11 items-center gap-2 rounded-lg border border-cyan-400/40 bg-linear-to-r from-cyan-500/20 to-teal-500/20 px-4 py-2 transition-all duration-300 hover:from-cyan-500/30 hover:to-teal-500/30 focus-visible:outline-2 focus-visible:outline-cyan-300 focus-visible:outline-offset-2"
          : "group/btn inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-600/60 bg-slate-800/50 px-4 py-2 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10 focus-visible:outline-2 focus-visible:outline-cyan-300 focus-visible:outline-offset-2"
      }
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="block h-5 w-5 [&_svg]:h-full [&_svg]:w-full">
        {icon}
      </span>
      <span
        className={
          tone === "live"
            ? "font-medium text-cyan-100 text-sm"
            : "text-slate-200 text-sm transition-colors group-hover/btn:text-white"
        }
      >
        {label}
      </span>
    </a>
  );
}

function ProjectShot({
  badge,
  data,
  lazy,
}: {
  badge?: string;
  data: ProjectType;
  lazy: boolean;
}) {
  const href = data.deploy || data.repo;
  const image = (
    <Image
      alt=""
      className="object-contain transition-transform duration-500 group-hover:scale-105"
      fill
      priority={!lazy}
      sizes={
        lazy
          ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          : "(max-width: 768px) 100vw, 60vw"
      }
      src={data.image}
    />
  );

  if (!href) {
    return (
      <figure className="relative aspect-video w-full overflow-hidden rounded-xl">
        {image}
      </figure>
    );
  }

  return (
    <a
      aria-label={`${data.name} screenshot`}
      className="relative block aspect-video w-full overflow-hidden rounded-xl focus-visible:outline-2 focus-visible:outline-cyan-300 focus-visible:outline-offset-2"
      data-atropos-offset="6"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {badge ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-3 left-3 z-10 flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-950/75 px-3 py-1 text-cyan-200 text-xs uppercase tracking-widest backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 animate-glow-pulse rounded-full bg-cyan-300" />
          {badge}
        </span>
      ) : null}
      {image}
    </a>
  );
}

export default function Card({ data, lazy = true, lead = false }: CardProps) {
  const skills = data.skills
    .map((skill) => skill.trim())
    .filter((skill) => skill.length > 0)
    .slice(0, MAX_SKILL_CHIPS);
  const badge =
    data.badge?.trim() ||
    (lead && isLiveClient(data) ? "Live client" : undefined);
  const codeHref = data.repo.trim();
  const liveHref = data.deploy?.trim() ?? "";

  return (
    <motion.div
      className="h-full w-full"
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div
        className={
          lead
            ? "group glass-card grid gap-6 rounded-2xl px-5 py-5 md:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)] md:items-center md:gap-10 md:px-6 md:py-6"
            : "group glass-card mx-auto flex h-full flex-col justify-between gap-3 rounded-2xl px-5 py-4 md:px-6 md:py-5"
        }
      >
        <Atropos
          className="w-full rounded-xl"
          highlight={false}
          rotateTouch={false}
          shadow={false}
        >
          {lead ? (
            <ProjectShot badge={badge} data={data} lazy={lazy} />
          ) : (
            <div className="flex flex-col gap-2 lg:px-4">
              <h3 className="font-semibold text-lg text-white transition-colors duration-300 group-hover:text-cyan-200">
                {data.name}
              </h3>
              <ProjectShot badge={badge} data={data} lazy={lazy} />
            </div>
          )}
        </Atropos>

        <div
          className={
            lead
              ? "flex min-w-0 flex-col gap-4 text-center md:text-left"
              : "flex min-w-0 flex-col gap-3 text-center"
          }
        >
          {lead ? (
            <h3 className="font-semibold text-2xl text-white md:text-3xl">
              {data.name}
            </h3>
          ) : null}

          <p className="text-pretty text-slate-300 text-sm leading-relaxed">
            {data.description}
          </p>

          <ul
            className={
              lead
                ? "flex flex-wrap justify-center gap-2 md:justify-start"
                : "flex flex-wrap justify-center gap-2"
            }
          >
            {skills.map((skill) => (
              <li
                className="rounded-full border border-slate-600/60 bg-slate-800/80 px-3 py-1 text-slate-200 text-xs"
                key={`${data.name}-${skill}`}
              >
                {skill}
              </li>
            ))}
          </ul>

          {codeHref || liveHref ? (
            <div
              className={
                lead
                  ? "flex flex-wrap justify-center gap-3 md:justify-start"
                  : "flex flex-wrap justify-center gap-3"
              }
            >
              {liveHref ? (
                <ActionLink
                  href={liveHref}
                  icon={<GlobeIcon />}
                  label="Live site"
                  tone="live"
                />
              ) : null}
              {codeHref ? (
                <ActionLink
                  href={codeHref}
                  icon={<GitHubIcon />}
                  label="Code"
                  tone="code"
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
