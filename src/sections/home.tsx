import { ArrowDown } from "@/components/icons";
import SkillsList from "@/components/skills-list";
import SectionLayout from "@/layouts/section-layout";

export default function Home() {
  return (
    <SectionLayout
      className="relative mt-20 flex h-[calc(100vh-5rem)] flex-col items-center justify-center gap-14 pt-0 text-center md:pt-0"
      id="home"
    >
      <div className="flex flex-col gap-8">
        <h1 className="animate-fade-down font-bold text-4xl tracking-wider md:text-5xl">
          Manuel Salvador
        </h1>
        <h2 className="animate-fade-up text-xl tracking-wide md:text-2xl">
          Full-Stack Web Developer
        </h2>
      </div>
      <SkillsList />
      <a
        className="absolute bottom-2 flex h-6 w-6 animate-fade items-center justify-center md:bottom-4 md:h-10 md:w-10"
        href="#aboutMe"
      >
        <div className="h-full w-full animate-bounce-more">
          <ArrowDown />
        </div>
      </a>
    </SectionLayout>
  );
}
