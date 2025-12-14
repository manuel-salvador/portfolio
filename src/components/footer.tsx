import { EmailIcon, GitHubIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-slate-800/50 border-t bg-slate-900/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Copyright */}
          <p className="order-2 text-slate-500 text-sm md:order-1">
            © {currentYear} Manuel Salvador. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="order-1 flex items-center gap-4 md:order-2">
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
        </div>
      </div>
    </footer>
  );
}
