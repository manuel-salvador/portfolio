import Image from "next/image";

import AnimatedText from "@/components/studio/animated-text";
import ContactButton from "@/components/studio/contact-button";
import FadeIn from "@/components/studio/fade-in";

const ABOUT_COPY =
  "With more than three years building for the web, I focus on TypeScript, interfaces, and the systems behind them. I shipped Portal Bosque for a nature-based family club. I build Diseñar Viajes, the system behind a travel agency, and the products that follow. Let's build something that ships.";

const TOP_STILLS = [
  {
    className:
      "top-[4%] left-[1%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]",
    delay: 0.1,
    src: "https://gqbv64qxck.ufs.sh/f/ojdYOw5LQOrYFOrOZ7iGC2SkxZhaQVlYKoUsTHivXcgfPO36",
    x: -80,
  },
  {
    className:
      "top-[4%] right-[1%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]",
    delay: 0.15,
    src: "https://gqbv64qxck.ufs.sh/f/ojdYOw5LQOrYJ8TG220RZohvidLe7OG0l1SxpqPnfKkIN8b4",
    x: 80,
  },
] as const;

const LOWER_STILLS = [
  {
    className:
      "top-[52%] left-[2%] w-[100px] sm:left-[5%] sm:w-[140px] md:left-[7%] md:w-[180px]",
    delay: 0.25,
    src: "https://gqbv64qxck.ufs.sh/f/ojdYOw5LQOrY6Ld6AkVn3BHjuIgWiJO2zcvrFoS0fELDqweA",
    x: -80,
  },
  {
    className:
      "top-[54%] right-[2%] w-[130px] sm:right-[5%] sm:w-[170px] md:right-[7%] md:w-[220px]",
    delay: 0.3,
    src: "https://gqbv64qxck.ufs.sh/f/ojdYOw5LQOrYMDdjQklMNC8qT05uPEXn4Jc7ey9GziaBhbZw",
    x: 80,
  },
] as const;

export default function AboutSection() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
      id="about"
    >
      {TOP_STILLS.map((still) => (
        <FadeIn
          className={`pointer-events-none absolute ${still.className}`}
          delay={still.delay}
          duration={0.9}
          key={still.src}
          x={still.x}
          y={0}
        >
          <Image
            alt=""
            aria-hidden="true"
            className="h-auto w-full"
            height={640}
            src={still.src}
            width={640}
          />
        </FadeIn>
      ))}
      {LOWER_STILLS.map((still) => (
        <FadeIn
          className={`pointer-events-none absolute max-sm:hidden ${still.className}`}
          delay={still.delay}
          duration={0.9}
          key={still.src}
          x={still.x}
          y={0}
        >
          <Image
            alt=""
            aria-hidden="true"
            className="h-auto w-full"
            height={640}
            src={still.src}
            width={640}
          />
        </FadeIn>
      ))}

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-16 text-center sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading text-center font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              About me
            </h2>
          </FadeIn>
          <AnimatedText
            className="max-w-[560px] text-center font-medium text-[#D7E2EA] leading-relaxed"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
            text={ABOUT_COPY}
          />
        </div>
        <div className="flex w-full items-end justify-between sm:hidden">
          {LOWER_STILLS.map((still) => (
            <Image
              alt=""
              aria-hidden="true"
              className="h-auto w-24"
              height={640}
              key={`${still.src}-flow`}
              src={still.src}
              width={640}
            />
          ))}
        </div>
        <ContactButton href="#contact" />
      </div>
    </section>
  );
}
