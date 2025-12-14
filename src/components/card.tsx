"use client";

import Atropos from "atropos/react";
import Image from "next/image";

import type { ProjectType } from "@/types";

import { GitHubIcon, GlobeIcon } from "./icons";

type CardProps = {
  data: ProjectType;
  lazy?: boolean;
};

export default function Card({ data, lazy = true }: CardProps) {
  return (
    <div className="h-full w-full cursor-default">
      <div className="mx-auto flex h-full flex-col justify-between gap-1 rounded-lg border border-slate-600 bg-slate-700 bg-opacity-60 px-4 pb-3 hover:bg-opacity-70 md:px-5 md:py-3">
        <Atropos highlight={false} rotateTouch={false} shadow={false}>
          <div className="flex flex-col py-3 lg:px-7">
            <p className="text-lg">{data.name}</p>
            <figure
              className="relative aspect-video w-full"
              data-atropos-offset="6"
            >
              <Image
                alt={data.name}
                className="h-auto w-auto object-contain"
                fill
                priority={lazy}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={data.image}
              />
            </figure>
            <ul
              className="mt-2 flex flex-wrap justify-center gap-3"
              data-atropos-offset="8"
            >
              {data.skills.map((skill, index) => (
                <li
                  className="rounded-full bg-gray-900 px-2"
                  key={`${data.name}${skill}${index}`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Atropos>
        <p className="text-center">{data.description}</p>
        <div className="mt-4 flex justify-center gap-8">
          {data.repo && (
            <a href={data.repo} rel="noreferrer" target="_blank">
              <div className="flex flex-col items-center">
                <div className="h-7 w-7">
                  <GitHubIcon />
                </div>
                <span>Repo</span>
              </div>
            </a>
          )}
          {data.deploy && (
            <a href={data.deploy} rel="noreferrer" target="_blank">
              <div className="flex flex-col items-center">
                <div className="h-7 w-7">
                  <GlobeIcon />
                </div>
                <span>Web</span>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
