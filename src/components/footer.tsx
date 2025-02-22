import { LinkedInIcon, GitHubIcon, EmailIcon } from './icons';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4 pb-10 md:hidden">
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
    </footer>
  );
}
