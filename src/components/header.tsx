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
      className={`fixed top-0 left-0 z-10 w-full shadow-xl ${
        menuOpen
          ? "backdrop-blur-lg backdrop-brightness-50"
          : "backdrop-blur-md backdrop-brightness-75"
      }`}
    >
      <div
        className={`${
          menuOpen ? "h-screen gap-4 pt-4 pb-0" : "gap-0"
        } mx-auto flex w-screen max-w-(--breakpoint-xl) flex-col items-center py-4 md:flex-row md:justify-between md:gap-4 md:px-10`}
      >
        <div className="z-10 flex w-full items-center justify-between px-8 md:w-auto md:px-0">
          <Link className="relative block h-11 w-16" href="/">
            <Image
              alt="Manuel Salvador logo"
              className="object-contain"
              fill
              priority
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 15vw"
              src={logo}
            />
          </Link>
          <span
            className="flex h-7 w-7 items-center justify-center text-xl md:hidden"
            onClick={handleToggleMenu}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </span>
        </div>
        <nav
          className={`${
            menuOpen
              ? "left-0 z-10 py-4 opacity-100"
              : "left-full h-0 opacity-0 md:left-0 md:h-auto md:opacity-100"
          } relative flex w-full flex-col items-center gap-10 overflow-hidden text-xl transition-all duration-300 md:w-fit md:flex-row md:py-0 md:text-base`}
        >
          <ul className="flex flex-col items-center gap-4 md:flex-row">
            {pages.map((page, index) => (
              <li key={index}>
                <Link
                  className="rounded-md p-2 transition-all hover:bg-cyan-600 hover:shadow-cyan-700 hover:shadow-lg"
                  href={`${page.url}`}
                  onClick={handleCloseMenu}
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-slate-800 p-2 transition-all hover:bg-cyan-600 hover:shadow-cyan-700 hover:shadow-lg"
              href="https://www.linkedin.com/in/manuel-salvador/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-slate-800 p-1 transition-all hover:bg-cyan-600 hover:shadow-cyan-700 hover:shadow-lg"
              href="https://github.com/manuel-salvador"
              rel="noreferrer"
              target="_blank"
            >
              <GitHubIcon />
            </a>
            <a
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-slate-800 p-2 transition-all hover:bg-cyan-600 hover:shadow-cyan-700 hover:shadow-lg"
              href="mailto:manu.sacr@hotmail.com"
            >
              <EmailIcon />
            </a>
          </div>
          <Link
            className="flex items-center rounded-md border p-2 transition-all hover:bg-linear-to-br hover:from-cyan-700 hover:to-cyan-400 hover:shadow-cyan-700 hover:shadow-lg"
            href="/#contact"
            onClick={handleCloseMenu}
          >
            Contact me
          </Link>
        </nav>
      </div>
    </header>
  );
}
