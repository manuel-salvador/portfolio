import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Atropos from 'atropos/react';
import type { ProjectType } from '@/types';
import { GitHubIcon, GlobeIcon } from './Icons';

export default function Card({ data }: { data: ProjectType }) {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const image = require(`@/assets/projects/${data.image}.jpg`).default.src;
    setImageSrc(image);
  }, []);

  return (
    <motion.div
      className="md:w-[50%] h-[100%] md:mx-auto cursor-default"
      initial={false}
      whileInView={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 1,
        delay: 1,
      }}
      viewport={{ once: true }}
    >
      <Atropos>
        <div className="tilt-inner flex flex-col md:mx-auto mx-auto h-[100%] border border-slate-600 p-3 md:py-5 md:px-10 rounded-lg bg-slate-700 bg-opacity-60 hover:bg-opacity-70">
          <p data-atropos-offset="4" className="mb-4 text-lg">
            {data.name}
          </p>
          <figure className="w-[100%] md:h-[60%] mx-auto" data-atropos-offset="8">
            <img src={imageSrc} alt={data.name} className="w-full h-full object-contain" />
          </figure>
          <ul className="flex gap-2 flex-wrap justify-center mt-2" data-atropos-offset="4">
            {data.skills.map((skill, index) => (
              <li key={`${data.name}${skill}${index}`}>{skill}</li>
            ))}
          </ul>
          <div className="flex justify-center gap-4 mt-8" data-atropos-offset="4">
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
                  <span>Deploy</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </Atropos>
    </motion.div>
  );
}
