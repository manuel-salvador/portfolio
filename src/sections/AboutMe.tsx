import Image from 'next/image';

import profileImage from '/public/profile-image.avif';

import SectionLayout from '@/layouts/SectionLayout';

type Props = {};

export default function AboutMe({}: Props) {
  return (
    <SectionLayout id="aboutMe" className="px-8 pb-1">
      <div className="flex flex-col items-center md:flex-row gap-10  mt-8 w-full md:w-4/5 mx-auto">
        <div className="w-[200px] aspect-square rounded-full overflow-hidden relative">
          <Image src={profileImage} fill alt="Profile image" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl mb-4 text-center md:text-left">About me</h2>
          <div className="flex flex-col gap-3">
            <p>
              I am a full-stack web developer, I am passionate about everything related to
              technology.
            </p>
            <p>
              I like to learn about new frameworks, technologies, tools and best practices, to give
              the best of me and that my work is of quality.
            </p>
            <p>
              I am looking for further development in the IT area and to gain experience that will
              serve me both professionally and personally.
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
