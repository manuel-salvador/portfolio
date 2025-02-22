'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Pages } from '@/types';
import logo from 'public/logo.webp';

import { CloseIcon, EmailIcon, GitHubIcon, LinkedInIcon, MenuIcon } from './icons';

const pages: Pages = [
  { label: 'Home', url: '/' },
  { label: 'Projects', url: '/projects' },
  { label: 'CV', url: '/curriculum' }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
      document.body.classList.add('max-h-screen');
    } else {
      document.body.classList.remove('overflow-hidden');
      document.body.classList.remove('max-h-screen');
    }
  }, [menuOpen]);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    if (!!menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed left-0 top-0 z-10 w-full shadow-xl ${
        menuOpen
          ? 'backdrop-blur-lg backdrop-brightness-50'
          : 'backdrop-blur-md backdrop-brightness-75'
      }`}
    >
      <div
        className={`${
          menuOpen ? 'h-screen gap-4 pb-0 pt-4' : 'gap-0'
        } mx-auto flex w-screen max-w-screen-xl flex-col items-center py-4 md:flex-row md:justify-between md:gap-4 md:px-10`}
      >
        <div className="z-10 flex w-full items-center justify-between px-8 md:w-auto md:px-0">
          <Link href="/" className="relative block h-11 w-16">
            <Image
              src={logo}
              alt="Manuel Salvador logo"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 15vw"
              fill
              className="object-contain"
              priority
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
              ? 'left-0 z-10 py-4 opacity-100'
              : 'left-full h-0 opacity-0 md:left-0 md:h-auto md:opacity-100'
          } relative flex w-full flex-col items-center gap-10 overflow-hidden text-xl transition-all duration-300 md:w-fit md:flex-row md:py-0 md:text-base`}
        >
          <ul className="flex flex-col items-center gap-4 md:flex-row">
            {pages.map((page, index) => (
              <li key={index}>
                <Link
                  href={`${page.url}`}
                  onClick={handleCloseMenu}
                  className="rounded-md p-2 transition-all hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-700"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/manuel-salvador/"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-slate-800 p-2 transition-all hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-700"
            >
              <LinkedInIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/manuel-salvador"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-slate-800 p-1 transition-all hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-700"
            >
              <GitHubIcon />
            </a>
            <a
              href="mailto:manu.sacr@hotmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 bg-slate-800 p-2 transition-all hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-700"
            >
              <EmailIcon />
            </a>
          </div>
          <Link
            href="/#contact"
            className="flex items-center rounded-md border p-2 transition-all hover:bg-gradient-to-br hover:from-cyan-700 hover:to-cyan-400 hover:shadow-lg hover:shadow-cyan-700"
            onClick={handleCloseMenu}
          >
            Contact me
          </Link>
        </nav>
      </div>
    </header>
  );
}
