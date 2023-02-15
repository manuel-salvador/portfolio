import { useState } from 'react';
import logo from '@/assets/logo.webp';

const sections: string[] = ['Home', 'Skills', 'Projects'];

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
      className={`${
        menuOpen ? 'w-screen h-screen pt-4 pb-0' : ''
      } z-10 flex py-4 gap-4 items-center flex-col md:flex-row md:justify-between fixed w-full bg-gradient-main shadow-xl`}
    >
      <div className="flex justify-between items-center w-full md:w-fit px-14 z-10">
        <a href="#" className="block h-full">
          <img src={logo.src} className="object-contain h-11" />
        </a>
        <span className="md:hidden text-xl" onClick={handleToggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </span>
      </div>
      <nav
        className={`${
          menuOpen ? 'flex bg-gradient-main z-10 flex-1 overflow-hidden' : 'hidden'
        } py-4 md:py-0 w-full md:w-fit md:flex flex-col md:flex-row items-center gap-10 text-xl md:text-base px-14 `}
      >
        <ul className="flex flex-col md:flex-row items-center gap-4">
          {sections.map((section, index) => (
            <li key={index}>
              <a
                href={`#${section.toLowerCase()}`}
                onClick={handleCloseMenu}
                className="hover:bg-cyan-600 p-2 rounded-md hover:shadow-cyan-700 hover:shadow-lg transition-all"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/manuel-salvador/"
            className="w-10 h-10 flex items-center justify-center border rounded-full p-2 bg-slate-800 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-700 transition-all"
          >
            <i className="fa-brands fa-linkedin-in text-white text-2xl" />
          </a>
          <a
            target="_blank"
            href="https://github.com/manuel-salvador"
            className="w-10 h-10 flex items-center justify-center border rounded-full p-1 bg-slate-800 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-700 transition-all"
          >
            <i className="fa-brands fa-github text-white text-3xl" />
          </a>
          <a
            href="mailto:manu.sacr@hotmail.com"
            className="w-10 h-10 flex items-center justify-center border rounded-full p-2 bg-slate-800 hover:bg-cyan-600 hover:shadow-lg hover:shadow-cyan-700 transition-all"
          >
            <i className="fa-solid fa-envelope text-white text-2xl"></i>
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
    </header>
  );
}
