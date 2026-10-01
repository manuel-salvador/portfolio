import FadeIn from "@/components/studio/fade-in";

const SERVICES = [
  {
    description:
      "End-to-end web products: the interface, the data behind it, and a deployed site a client or a team can use.",
    name: "Web products",
    number: "01",
  },
  {
    description:
      "React and Next.js screens with care for layout, type, and how a person moves through the page.",
    name: "Interfaces",
    number: "02",
  },
  {
    description:
      "Server work in Node, with MySQL, PostgreSQL, or MongoDB when the product needs a real store.",
    name: "APIs and data",
    number: "03",
  },
  {
    description:
      "Production sites for real users. Portal Bosque, a nature-based family club, is the one in front of a client today.",
    name: "Client sites",
    number: "04",
  },
  {
    description:
      "Typed codebases that stay readable as a product grows, from a small client site to a fuller application.",
    name: "TypeScript systems",
    number: "05",
  },
] as const;

export default function ServicesSection() {
  return (
    <section
      className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      id="services"
    >
      <h2
        className="mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </h2>

      <ol className="mx-auto max-w-5xl">
        {SERVICES.map((service, index) => (
          <li
            className="border-[#0C0C0C]/15 border-b py-8 last:border-b-0 sm:py-10 md:py-12"
            key={service.number}
          >
            <FadeIn delay={index * 0.1} y={30}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
                <span
                  className="font-black leading-none"
                  style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                >
                  {service.number}
                </span>
                <div className="flex min-w-0 flex-col gap-3">
                  <h3
                    className="font-medium uppercase leading-none"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="max-w-2xl font-light leading-relaxed opacity-60"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          </li>
        ))}
      </ol>
    </section>
  );
}
