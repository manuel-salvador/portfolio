import Card from "@/components/card";
import { api } from "@/services/api";

export default async function ProjectsPage() {
  const projects = await api.projects.list();

  return (
    <div className="min-h-screen px-6 pt-28 pb-16 md:px-8">
      {/* Background Elements */}
      <div className="-z-10 pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-teal-500/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-2 block text-cyan-500 text-xs uppercase tracking-widest">
            Portfolio
          </span>
          <h1 className="mb-4 font-bold text-4xl text-white md:text-5xl">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="mx-auto max-w-xl text-slate-400">
            Explora todos mis proyectos y descubre cómo transformo ideas en
            experiencias digitales
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              className="animate-fade-up opacity-0"
              key={project.name}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              <Card data={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
