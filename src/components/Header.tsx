import { useState } from 'react';

import logo from '/public/logo.webp';

import Image from 'next/image';
import Link from 'next/link';

import { Pages } from '@/types';

import { CloseIcon, EmailIcon, GitHubIcon, LinkedInIcon, MenuIcon } from './Icons';

const pages: Pages = [
  { label: 'Home', url: '/' },
  { label: 'Projects', url: '/projects' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

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
      className={`z-10 fixed left-0 top-0 w-full backdrop-blur-md backdrop-brightness-75 shadow-xl`}
    >
      <div
        className={`${
          menuOpen ? 'h-screen pt-4 pb-0' : ''
        } w-full max-w-screen-xl mx-auto flex items-center flex-col md:flex-row md:justify-between gap-4 py-4 md:px-10`}
      >
        <div className="flex justify-between items-center w-full md:w-auto z-10 px-8 md:px-0">
          <Link href="/" className="block relative h-11 w-16">
            <Image src={logo} alt="Manuel Salvador logo" fill className="object-contain" />
          </Link>
          <span
            className="md:hidden text-xl h-7 w-7 flex justify-center items-center"
            onClick={handleToggleMenu}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </span>
        </div>
        <nav
          className={`${
            menuOpen ? 'flex bg-gradient-main z-10 flex-1 overflow-hidden' : 'hidden'
          } py-4 md:py-0 w-full md:w-fit md:flex flex-col md:flex-row items-center gap-10 text-xl md:text-base`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-4">
            {pages.map((page, index) => (
              <li key={index}>
                <Link
                  href={`/${page.url}`}
                  onClick={handleCloseMenu}
                  className="hover:bg-cyan-600 p-2 rounded-md hover:shadow-cyan-700 hover:shadow-lg transition-all"
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
              className="w-10 h-10 flex items-center justify-center border-2 rounded-full p-2 bg-slate-800 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-700 transition-all"
            >
              <LinkedInIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/manuel-salvador"
              className="w-10 h-10 flex items-center justify-center border-2 rounded-full p-1 bg-slate-800 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-700 transition-all"
            >
              <GitHubIcon />
            </a>
            <a
              href="mailto:manu.sacr@hotmail.com"
              className="w-10 h-10 flex items-center justify-center border-2 rounded-full p-2 bg-slate-800 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-700 transition-all"
            >
              <EmailIcon />
            </a>
          </div>
          <a
            href="#contact"
            className="flex items-center p-2 border rounded-md hover:bg-gradient-to-br hover:from-cyan-700 hover:to-cyan-400"
            onClick={handleCloseMenu}
          >
            Contact me
          </a>
        </nav>
      </div>
    </header>
  );
}
