import React, { useState } from 'react';
import Atropos from 'atropos/react';
import Image from 'next/image';

import type { ProjectType } from '@/types';

import { GitHubIcon, GlobeIcon } from './Icons';

type CardProps = {
  data: ProjectType;
  lazy?: boolean;
};

export default function Card({ data, lazy = true }: CardProps) {
  return (
    <div className="w-full cursor-default h-full">
      <div className="flex flex-col gap-1 justify-between mx-auto h-full border border-slate-600 px-4 pb-3 md:px-5 md:py-3  rounded-lg bg-slate-700 bg-opacity-60 hover:bg-opacity-70">
        <Atropos shadow={false} highlight={false} rotateTouch={false}>
          <div className="lg:px-7 py-3 flex flex-col">
            <p className="text-lg">{data.name}</p>
            <figure className="w-full aspect-video relative" data-atropos-offset="6">
              <Image
                src={data.image}
                alt={data.name}
                fill
                className="w-auto h-auto object-contain"
                priority={lazy}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </figure>
            <ul className="flex gap-3 flex-wrap justify-center mt-2" data-atropos-offset="8">
              {data.skills.map((skill, index) => (
                <li key={`${data.name}${skill}${index}`} className="bg-gray-900 px-2 rounded-full">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Atropos>
        <p className="text-center">{data.description}</p>
        <div className="flex justify-center gap-8 mt-4">
          {data.repo && (
            <a href={data.repo} target="_blank" rel="noreferrer">
              <div className="flex flex-col items-center">
                <div className="h-7 w-7">
                  <GitHubIcon />
                </div>
                <span>Repo</span>
              </div>
            </a>
          )}
          {data.deploy && (
            <a href={data.deploy} target="_blank" rel="noreferrer">
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
