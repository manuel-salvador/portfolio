"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "public/logo.webp";
import { useEffect, useRef, useState } from "react";

import SocialLinkIcon from "@/components/social-link-icon";
import { cn } from "@/lib/utils";
import {
  CloseIcon,
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  MenuIcon,
} from "./icons";

type Current = "page" | "location";

type NavItem = {
  current: Current | false;
  href: string;
  label: string;
};

function useNavItems(): NavItem[] {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const readHash = () => {
      setHash(window.location.hash);
    };

    const markClickedHash = (event: MouseEvent) => {
      const { target } = event;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a");
      const href = anchor?.getAttribute("href");
      if (!href) {
        return;
      }

      if (href === "#contact" || href === "/#contact") {
        setHash("#contact");
        return;
      }

      if (href.startsWith("#")) {
        setHash(href);
        return;
      }

      if (href.startsWith("/")) {
        setHash("");
      }
    };

    readHash();
    window.addEventListener("hashchange", readHash);
    document.addEventListener("click", markClickedHash);
    return () => {
      window.removeEventListener("hashchange", readHash);
      document.removeEventListener("click", markClickedHash);
    };
  }, []);

  const onHome = pathname === "/";
  const contactCurrent = onHome && hash === "#contact";

  return [
    {
      current: onHome && !contactCurrent ? "page" : false,
      href: "/",
      label: "Home",
    },
    {
      current: pathname === "/projects" ? "page" : false,
      href: "/projects",
      label: "Projects",
    },
    {
      current: pathname === "/curriculum" ? "page" : false,
      href: "/curriculum",
      label: "CV",
    },
    {
      current: contactCurrent ? "location" : false,
      href: onHome ? "#contact" : "/#contact",
      label: "Contact",
    },
  ];
}

function linkClass(current: Current | false, mobile: boolean): string {
  return cn(
    "font-medium underline-offset-8 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-cyan-300 focus-visible:outline-offset-4",
    mobile ? "text-2xl" : "text-sm",
    current ? "text-white underline decoration-cyan-300" : "text-slate-200"
  );
}

export default function Header() {
  const items = useNavItems();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstItemRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const { documentElement: root, body } = document;
    const background = [
      document.querySelector("main"),
      document.querySelector("footer"),
    ];

    if (menuOpen) {
      root.classList.add("overflow-hidden");
      body.classList.add("overflow-hidden");
      for (const element of background) {
        element?.setAttribute("inert", "");
      }
    } else {
      root.classList.remove("overflow-hidden");
      body.classList.remove("overflow-hidden");
      for (const element of background) {
        element?.removeAttribute("inert");
      }
    }

    return () => {
      root.classList.remove("overflow-hidden");
      body.classList.remove("overflow-hidden");
      for (const element of background) {
        element?.removeAttribute("inert");
      }
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    firstItemRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const handleToggleMenu = () => setMenuOpen((open) => !open);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 flex justify-center py-4 transition-all duration-300",
          scrolled ? "pt-2" : "pt-6"
        )}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={cn(
            "relative flex items-center justify-between rounded-full border border-slate-700/50 bg-slate-900/40 shadow-black/10 shadow-lg backdrop-blur-md transition-all duration-300",
            scrolled
              ? "w-[90%] px-4 py-2 md:w-[78%] md:px-6"
              : "w-[95%] px-4 py-3 md:w-[82%] md:px-8"
          )}
        >
          <Link
            className="relative block h-10 w-10 shrink-0 rounded-full transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-cyan-300 focus-visible:outline-offset-2"
            href="/"
          >
            <Image
              alt="Manuel Salvador logo"
              className="object-contain"
              fill
              priority
              sizes="40px"
              src={logo}
            />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 md:flex"
          >
            <ul className="flex items-center gap-5">
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    aria-current={item.current || undefined}
                    className={linkClass(item.current, false)}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-4 w-px bg-slate-700" />

            <div className="flex items-center gap-3">
              <SocialLinkIcon
                href="https://www.linkedin.com/in/manuel-salvador/"
                icon={<LinkedInIcon />}
              />
              <SocialLinkIcon
                href="https://github.com/manuel-salvador"
                icon={<GitHubIcon />}
              />
              <SocialLinkIcon
                href="mailto:manu.sacr@hotmail.com"
                icon={<EmailIcon />}
              />
            </div>
          </nav>

          <button
            aria-controls="site-menu"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-cyan-300 md:hidden"
            onClick={handleToggleMenu}
            ref={menuButtonRef}
            type="button"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </motion.header>

      <div
        aria-hidden={menuOpen ? undefined : true}
        className={cn(
          "fixed inset-0 z-40 flex items-center justify-center bg-cyan-950/50 backdrop-blur-xl transition-opacity duration-300 md:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        id="site-menu"
        inert={menuOpen ? undefined : true}
      >
        <nav aria-label="Mobile" className="flex flex-col items-center gap-8">
          <ul className="flex flex-col items-center gap-6">
            {items.map((item, index) => (
              <li key={item.label}>
                <Link
                  aria-current={item.current || undefined}
                  className={linkClass(item.current, true)}
                  href={item.href}
                  onClick={handleCloseMenu}
                  ref={index === 0 ? firstItemRef : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-6">
            <SocialLinkIcon
              href="https://www.linkedin.com/in/manuel-salvador/"
              icon={<LinkedInIcon />}
              size="lg"
            />
            <SocialLinkIcon
              href="https://github.com/manuel-salvador"
              icon={<GitHubIcon />}
              size="lg"
            />
            <SocialLinkIcon
              href="mailto:manu.sacr@hotmail.com"
              icon={<EmailIcon />}
              size="lg"
            />
          </div>
        </nav>
      </div>
    </>
  );
}
