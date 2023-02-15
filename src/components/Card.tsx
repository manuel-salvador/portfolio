import React, { useEffect, useState } from 'react';
import Atropos from 'atropos/react';
import type { ProjectType } from '@/types';

export default function Card({ data }: { data: ProjectType }) {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const image = require(`@/assets/projects/${data.image}.jpg`).default.src;
    setImageSrc(image);
  }, []);

  return (
    <div className="md:w-[50%] h-[100%] md:mx-auto cursor-default">
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
              <a href={data.repo} target="_blank">
                <div className="flex flex-col items-center">
                  <i className="fa-brands fa-github text-white text-2xl" />
                  <span>Repo</span>
                </div>
              </a>
            )}
            {data.deploy && (
              <a href={data.deploy} target="_blank">
                <div className="flex flex-col items-center">
                  <i className="fa-solid fa-globe text-white text-2xl" />
                  <span>Deploy</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </Atropos>
    </div>
  );
}
