import React from 'react';
import Atropos from 'atropos/react';
import Image from 'next/image';

import type { ProjectType } from '@/types';

import { GitHubIcon, GlobeIcon } from './Icons';

export default function Card({ data }: { data: ProjectType }) {
  return (
    <div className="w-full md:w-[47%] md:max-w-3xl cursor-default">
      <div className="flex flex-col mx-auto h-96 md:h-[27rem] border border-slate-600 p-4 md:p-2 rounded-lg bg-slate-700 bg-opacity-60 hover:bg-opacity-70">
        <Atropos shadow={false} highlight={false} className="h-full">
          <div className="md:py-2 md:px-8 h-full flex flex-col">
            <p className="mb-4 text-lg">{data.name}</p>
            <figure className="w-full h-full relative" data-atropos-offset="6">
              <Image
                src={data.image}
                alt={data.name}
                fill
                className="w-full h-full object-contain"
              />
            </figure>
            <ul className="flex gap-2 flex-wrap justify-center mt-2" data-atropos-offset="8">
              {data.skills.map((skill, index) => (
                <li key={`${data.name}${skill}${index}`}>{skill}</li>
              ))}
            </ul>
          </div>
        </Atropos>
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
