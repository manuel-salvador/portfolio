import Image from 'next/image';

import profileImage from '/public/profile-image.webp';

import SectionLayout from '@/layouts/SectionLayout';

type Props = {};

export default function AboutMe({}: Props) {
  return (
    <SectionLayout id="aboutMe" className="px-8 pb-1">
      <div className="flex flex-col items-center md:flex-row gap-10  mt-8 w-full md:w-4/5 mx-auto">
        <div className="w-[200px] aspect-square rounded-full overflow-hidden relative">
          <Image
            src={profileImage}
            fill
            alt="Profile image"
            sizes="(max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl mb-4 text-center md:text-left">About me</h2>
          <div className="flex flex-col gap-3">
            <p>
              As a Full Stack Web Developer, my passion lies in everything related to technology.
            </p>
            <p>
              Exploring new frameworks, technologies, tools and best practices is something I enjoy,
              as it allows me to deliver high quality work.
            </p>
            <p>
              I am looking for further growth in the IT field to gain valuable experience by
              learning as much as I can and contributing from my knowledge.
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
