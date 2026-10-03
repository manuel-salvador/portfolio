import Image from "next/image";
import Link from "next/link";

import ContactButton from "@/components/studio/contact-button";
import FadeIn from "@/components/studio/fade-in";
import Magnet from "@/components/studio/magnet";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export default function HeroSection() {
  return (
    <section className="relative flex h-dvh flex-col overflow-x-clip" id="home">
      <FadeIn
        as="nav"
        className="z-30 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8"
        delay={0}
        y={-20}
      >
        <ul className="flex w-full items-center justify-between gap-1 sm:gap-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                className="inline-flex min-h-11 items-center font-medium text-[#D7E2EA] text-sm uppercase tracking-wider transition-opacity duration-200 hover:opacity-70 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 md:text-lg lg:text-[1.4rem]"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>

      <FadeIn
        className="z-20 mt-6 overflow-hidden sm:mt-4 md:-mt-5"
        delay={0.15}
        y={40}
      >
        <h1 className="hero-heading w-full whitespace-nowrap px-[1.5vw] text-center font-black text-[10.2vw] uppercase leading-none tracking-tight sm:text-[11vw] md:text-[12vw] lg:text-[12.6vw]">
          Hi, i’m manuel
        </h1>
      </FadeIn>

      <FadeIn
        className="pointer-events-none absolute top-1/2 left-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]"
        delay={0.6}
        y={30}
      >
        <Magnet
          className="pointer-events-auto w-full"
          padding={150}
          strength={3}
        >
          <Image
            alt="Illustrated portrait used on Manuel Salvador’s portfolio"
            className="h-auto w-full"
            height={1024}
            priority
            src="/studio/portrait.png"
            width={1024}
          />
        </Magnet>
      </FadeIn>

      <div className="relative z-30 mt-auto flex items-end justify-between gap-4 px-6 pt-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn className="flex flex-col items-start gap-3" delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light text-[#D7E2EA] uppercase leading-snug tracking-wide sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            a full-stack developer shipping web products for real clients and
            teams
          </p>
          <Link
            className="inline-flex min-h-11 items-center rounded-full border-2 border-[#D7E2EA] px-5 py-2 font-medium text-[#D7E2EA] text-sm uppercase tracking-widest transition-colors hover:bg-[#D7E2EA]/10 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-3"
            href="/curriculum"
          >
            View CV
          </Link>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton href="#contact" />
        </FadeIn>
      </div>
    </section>
  );
}
