"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.webp";
import { useEffect, useState } from "react";
import type { Pages } from "@/types";

import {
  CloseIcon,
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  MenuIcon,
} from "./icons";

const pages: Pages = [
  { label: "Home", url: "/" },
  { label: "Projects", url: "/projects" },
  { label: "CV", url: "/curriculum" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
      document.body.classList.add("max-h-screen");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.classList.remove("max-h-screen");
    }
  }, [menuOpen]);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-cyan-500/10 border-b bg-slate-900/80 shadow-cyan-500/5 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      } ${menuOpen ? "bg-slate-900/95 backdrop-blur-xl" : ""}`}
    >
      <div
        className={`${
          menuOpen ? "h-screen gap-8 pt-4 pb-0" : "gap-0"
        } mx-auto flex w-screen max-w-7xl flex-col items-center py-4 md:flex-row md:justify-between md:gap-4 md:px-8`}
      >
        <div className="z-10 flex w-full items-center justify-between px-6 md:w-auto md:px-0">
          <Link className="group relative block h-11 w-16" href="/">
            <div className="absolute inset-0 scale-0 rounded-full bg-cyan-500/20 blur-xl transition-transform duration-300 group-hover:scale-150" />
            <Image
              alt="Manuel Salvador logo"
              className="relative z-10 object-contain"
              fill
              priority
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 15vw"
              src={logo}
            />
          </Link>
          <button
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/50 bg-slate-800/50 text-xl transition-all hover:border-cyan-500/40 md:hidden"
            onClick={handleToggleMenu}
            type="button"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <nav
          className={`${
            menuOpen
              ? "left-0 z-10 py-8 opacity-100"
              : "left-full h-0 opacity-0 md:left-0 md:h-auto md:opacity-100"
          } relative flex w-full flex-col items-center gap-10 overflow-hidden text-xl transition-all duration-300 md:w-fit md:flex-row md:py-0 md:text-base`}
        >
          <ul className="flex flex-col items-center gap-6 md:flex-row md:gap-2">
            {pages.map((page, index) => (
              <li key={index}>
                <Link
                  className="group relative rounded-lg px-4 py-2 text-slate-300 transition-all duration-300 hover:text-white"
                  href={`${page.url}`}
                  onClick={handleCloseMenu}
                >
                  <span className="relative z-10">{page.label}</span>
                  <span className="absolute inset-0 rounded-lg bg-cyan-500/0 transition-all duration-300 group-hover:bg-cyan-500/10" />
                  <span className="-translate-x-1/2 absolute bottom-0 left-1/2 h-0.5 w-0 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 transition-all duration-300 group-hover:w-3/4" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              aria-label="LinkedIn"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800/50 p-2 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10"
              href="https://www.linkedin.com/in/manuel-salvador/"
              rel="noreferrer"
              target="_blank"
            >
              <div className="text-slate-400 transition-colors group-hover:text-cyan-400">
                <LinkedInIcon />
              </div>
            </a>
            <a
              aria-label="GitHub"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800/50 p-2 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10"
              href="https://github.com/manuel-salvador"
              rel="noreferrer"
              target="_blank"
            >
              <div className="text-slate-400 transition-colors group-hover:text-cyan-400">
                <GitHubIcon />
              </div>
            </a>
            <a
              aria-label="Email"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-700/50 bg-slate-800/50 p-2 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/10"
              href="mailto:manu.sacr@hotmail.com"
            >
              <div className="text-slate-400 transition-colors group-hover:text-cyan-400">
                <EmailIcon />
              </div>
            </a>
          </div>

          <Link
            className="group relative overflow-hidden rounded-full px-5 py-2.5 transition-all duration-300"
            href="/#contact"
            onClick={handleCloseMenu}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-80 transition-opacity group-hover:opacity-100" />
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            <span className="relative z-10 font-medium text-sm text-white">
              Contact me
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
