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
}: {
  href: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <a
      className="group/btn inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-5 py-2 transition-colors duration-200 hover:bg-[#D7E2EA]/10 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="block h-5 w-5 [&_svg]:h-full [&_svg]:w-full">
        {icon}
      </span>
      <span className="font-medium text-[#D7E2EA] text-sm uppercase tracking-widest">
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
      <figure className="relative aspect-video w-full overflow-hidden rounded-2xl">
        {image}
      </figure>
    );
  }

  return (
    <a
      aria-label={`${data.name} screenshot`}
      className="relative block aspect-video w-full overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
      data-atropos-offset="6"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {badge ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-3 left-3 z-10 flex items-center gap-2 rounded-full border border-[#D7E2EA]/40 bg-[#0C0C0C]/80 px-3 py-1 text-[#D7E2EA] text-xs uppercase tracking-widest"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#D7E2EA]" />
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
            ? "group grid gap-6 rounded-[32px] border-2 border-[#D7E2EA] bg-[#0C0C0C] px-5 py-5 md:grid-cols-[minmax(0,1.35fr)_minmax(0,0.8fr)] md:items-center md:gap-10 md:px-6 md:py-6"
            : "group mx-auto flex h-full flex-col justify-between gap-3 rounded-[32px] border-2 border-[#D7E2EA] bg-[#0C0C0C] px-5 py-4 md:px-6 md:py-5"
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
              <h3 className="font-medium text-[#D7E2EA] text-lg uppercase tracking-wide">
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
            <h3 className="font-medium text-2xl text-[#D7E2EA] uppercase md:text-3xl">
              {data.name}
            </h3>
          ) : null}

          <p className="text-pretty text-[#D7E2EA]/80 text-sm leading-relaxed">
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
                className="rounded-full border border-[#D7E2EA]/30 px-3 py-1 text-[#D7E2EA] text-xs uppercase tracking-wider"
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
                />
              ) : null}
              {codeHref ? (
                <ActionLink
                  href={codeHref}
                  icon={<GitHubIcon />}
                  label="Code"
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
