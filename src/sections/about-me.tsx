import Image from "next/image";
import profileImage from "public/profile-image.webp";
import SectionLayout from "@/layouts/section-layout";

export default function AboutMe() {
  return (
    <SectionLayout className="px-8 pb-1" id="aboutMe">
      <div className="mx-auto mt-8 flex w-full flex-col items-center gap-10 md:w-4/5 md:flex-row">
        <div className="relative aspect-square w-[200px] rounded-full">
          <div className="absolute inset-0 h-full w-full animate-pulse rounded-full bg-cyan-700 opacity-70 shadow-cyan-800 shadow-xl blur-xl" />
          <div className="relative aspect-square w-full overflow-hidden rounded-full">
            <Image
              alt="Profile image"
              fill
              sizes="(max-width: 1200px) 50vw, 33vw"
              src={profileImage}
            />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="mb-4 text-center text-3xl md:text-left">About me</h2>
          <div className="flex flex-col gap-3">
            <p>
              As a Full Stack Web Developer, my passion lies in everything
              related to technology.
            </p>
            <p>
              Exploring new frameworks, technologies, tools and best practices
              is something I enjoy, as it allows me to deliver high quality
              work.
            </p>
            <p>
              I am looking for further growth in the IT field to gain valuable
              experience by learning as much as I can and contributing from my
              knowledge.
            </p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
