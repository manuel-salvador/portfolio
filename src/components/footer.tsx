import { EmailIcon, GitHubIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4 pb-10 md:hidden">
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
    </footer>
  );
}
