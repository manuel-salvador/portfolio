"use client";

import { motion } from "motion/react";

type Props = {
  title: string;
  links: { path: string; slug: string }[];
};

export default function LinksList({ title, links }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-20 md:py-28">
      {/* Background Elements */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="hero-heading font-black text-4xl uppercase leading-none tracking-tight md:text-6xl">
            {title}
          </h1>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-4">
          {links.map((link, index) => (
            <motion.li
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              key={link.slug}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
            >
              <a
                className="group flex w-full items-center justify-center gap-3 rounded-full border-2 border-[#D7E2EA] px-6 py-4 text-center font-medium text-[#D7E2EA] text-lg uppercase tracking-wider transition-colors hover:bg-[#D7E2EA]/10"
                href={link.path}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>{link.slug}</span>
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Open in new tab</title>
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
            className="text-[#D7E2EA] text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
            href="/"
          >
            ← Back to home
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
