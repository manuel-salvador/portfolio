import Card from "@/components/card";
import { api } from "@/services/api";

export default async function ProjectsPage() {
  const projects = await api.projects.list();

  return (
    <div className="min-h-screen px-6 pt-28 pb-16 md:px-8">
      {/* Background Elements */}
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h1
            className="hero-heading mb-6 font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            Projects
          </h1>
          <p className="mx-auto max-w-xl text-balance text-[#D7E2EA]">
            Shipped sites, hackathons, and experiments. Portal Bosque is the
            live client.
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
