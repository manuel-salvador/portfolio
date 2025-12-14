"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  links: { path: string; slug: string }[];
};

export default function LinksList({ title, links }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
      {/* Background Elements */}
      <div className="-z-10 pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-teal-500/8 blur-3xl" />
      </div>

      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-2 block text-cyan-500 text-xs uppercase tracking-widest">
            Documents
          </span>
          <h1 className="font-bold text-3xl text-white md:text-4xl">{title}</h1>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-4">
          {links.map((link, index) => (
            <motion.li
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              key={link.slug}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
            >
              <a
                className="group glass-card flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 text-center font-medium text-lg text-white"
                href={link.path}
                rel="noreferrer"
                target="_blank"
              >
                <svg
                  className="h-5 w-5 text-cyan-400 transition-colors group-hover:text-cyan-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
                <span className="transition-colors group-hover:text-cyan-300">
                  {link.slug}
                </span>
                <svg
                  className="h-4 w-4 text-slate-500 transition-all group-hover:translate-x-1 group-hover:text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                </svg>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Back Link */}
        <motion.div
          animate={{ opacity: 1 }}
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a
            className="text-slate-500 text-sm transition-colors hover:text-cyan-400"
            href="/"
          >
            ← Back to home
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
