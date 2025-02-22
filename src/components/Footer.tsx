import { LinkedInIcon, GitHubIcon, EmailIcon } from './icons';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4 pb-10 md:hidden">
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
    </footer>
  );
}
