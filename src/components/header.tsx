"use client";

import { motion } from "framer-motion";
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
  const [scrolled, setScrolled] = useState(false);

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
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  const handleToggleMenu = () => setMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 right-0 left-0 z-50 flex justify-center py-4 transition-all duration-300 ${
          scrolled ? "pt-2" : "pt-6"
        }`}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`relative flex items-center justify-between rounded-full border border-slate-700/50 bg-slate-900/40 shadow-black/10 shadow-lg backdrop-blur-md transition-all duration-300 ${scrolled ? "w-[90%] px-6 py-2 md:w-[70%]" : "w-[95%] px-8 py-3 md:w-[80%]"}
            `}
        >
          {/* Logo */}
          <Link
            className="relative block h-10 w-10 shrink-0 transition-transform hover:scale-105"
            href="/"
          >
            <Image
              alt="Manuel Salvador logo"
              className="object-contain"
              fill
              priority
              sizes="50px"
              src={logo}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <ul className="flex items-center gap-6">
              {pages.map((page) => (
                <li key={page.url}>
                  <Link
                    className="font-medium text-slate-300 text-sm transition-all hover:scale-105 hover:text-white"
                    href={page.url}
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-4 w-px bg-slate-700" />

            <div className="flex items-center gap-3">
              <SocialLink
                href="https://www.linkedin.com/in/manuel-salvador/"
                icon={<LinkedInIcon />}
              />
              <SocialLink
                href="https://github.com/manuel-salvador"
                icon={<GitHubIcon />}
              />
              <SocialLink
                href="mailto:manu.sacr@hotmail.com"
                icon={<EmailIcon />}
              />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="rounded-full p-2 text-white transition-colors hover:bg-white/10 md:hidden"
            onClick={handleToggleMenu}
            type="button"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-8">
          <ul className="flex flex-col items-center gap-6 font-light text-2xl">
            {pages.map((page) => (
              <li key={page.url}>
                <Link
                  className="transition-colors hover:text-cyan-400"
                  href={page.url}
                  onClick={handleCloseMenu}
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-6">
            <SocialLink
              href="https://www.linkedin.com/in/manuel-salvador/"
              icon={<LinkedInIcon />}
              size="lg"
            />
            <SocialLink
              href="https://github.com/manuel-salvador"
              icon={<GitHubIcon />}
              size="lg"
            />
            <SocialLink
              href="mailto:manu.sacr@hotmail.com"
              icon={<EmailIcon />}
              size="lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function SocialLink({
  href,
  icon,
  size = "sm",
}: {
  href: string;
  icon: React.ReactNode;
  size?: "sm" | "lg";
}) {
  const sizeClasses = size === "sm" ? "h-8 w-8 p-1.5" : "h-12 w-12 p-3";
  return (
    <a
      className={`flex ${sizeClasses} items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/20 hover:text-cyan-400`}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {icon}
    </a>
  );
}
