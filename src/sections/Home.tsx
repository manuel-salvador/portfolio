import SectionLayout from '../layouts/SectionLayout';

export default function Home() {
  return (
    <SectionLayout
      id="home"
      className="flex flex-col items-center justify-center text-center gap-12"
    >
      <h1 className="text-5xl font-bold tracking-wider">Manuel Salvador</h1>
      <h2 className="text-2xl tracking-wide">Full-Stack Web Developer</h2>
      <a href="#skills" className="absolute bottom-6 flex items-center justify-center">
        <i className="fa-solid fa-angles-down text-6xl" />
      </a>
    </SectionLayout>
  );
}
