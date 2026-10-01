"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { type FormEvent, type Ref, useCallback, useRef, useState } from "react";
import { sendEmail } from "@/app/actions";
import { CheckIcon } from "@/components/icons";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import SectionLayout from "@/layouts/section-layout";
import { testContactForm } from "@/utils/test-contact-form";

export default function Contact() {
  const _form = useRef<HTMLFormElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [invalidData, setInvalidData] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [ref, entry] = useIntersectionObserver({
    root: divRef,
    threshold: 0.3,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    if (process.env.NEXT_PUBLIC_PREVIEW_MODE) {
      setTimeout(() => {
        setMessageSent(true);
        setLoading(false);
      }, 2000);

      return;
    }

    if (_form.current !== null) {
      const data = Object.fromEntries(new FormData(_form.current));

      const isCorrectData = testContactForm(data);

      if (!isCorrectData) {
        setInvalidData(true);
        setLoading(false);
        return;
      }

      const response = await sendEmail(new FormData(_form.current));

      if (response.status === 200) {
        setMessageSent(true);
      } else {
        setInvalidData(true);
      }

      setLoading(false);
    }
  };

  const handleOnChange = () => {
    if (invalidData) {
      setInvalidData(false);
    }
  };

  const handleBlur = useCallback(() => {
    setFocusedField(null);
  }, []);

  const handleNameFocus = useCallback(() => {
    setFocusedField("name");
  }, []);

  const handleEmailFocus = useCallback(() => {
    setFocusedField("email");
  }, []);

  const handleMessageFocus = useCallback(() => {
    setFocusedField("message");
  }, []);

  const labelClass = (field: string) =>
    `pointer-events-none absolute left-4 transition-all duration-300 ${
      focusedField === field
        ? "-top-2 bg-slate-900 px-2 text-cyan-400 text-xs"
        : "top-4 text-slate-500 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:bg-slate-900 peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-cyan-400 peer-[:not(:placeholder-shown)]:text-xs"
    }`;

  return (
    <SectionLayout className="px-6 py-24 md:px-8" id="contact">
      <motion.div
        className="glass-panel relative mx-auto grid w-full max-w-5xl overflow-hidden rounded-2xl md:grid-cols-[0.9fr_1.1fr]"
        initial={{ opacity: 0, y: 28 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="relative flex flex-col justify-center gap-6 px-6 py-10 md:px-10 md:py-14">
          <div className="pointer-events-none absolute -top-16 -left-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
          <h2 className="font-bold text-3xl text-white md:text-4xl">
            Let&apos;s <span className="gradient-text">Talk</span>
          </h2>
          <p className="max-w-sm text-slate-400 leading-relaxed">
            Do you have a project in mind? I&apos;d love to hear about it.
            Recruiters and collaborators can reach me here or start with the CV.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 font-medium text-cyan-200 text-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/20"
              href="/curriculum"
            >
              View CV
            </Link>
            <a
              className="rounded-full border border-slate-600 bg-slate-800/50 px-5 py-2 font-medium text-slate-200 text-sm transition-all duration-300 hover:border-cyan-500/40 hover:text-white"
              href="mailto:manu.sacr@hotmail.com"
            >
              Email me
            </a>
          </div>
        </div>

        <div
          className={`${
            entry?.isIntersecting ? "opacity-100" : "opacity-0"
          } relative flex h-full w-full flex-col items-center justify-center p-6 transition-all duration-700 md:p-10`}
          ref={ref as Ref<HTMLDivElement>}
        >
          <div className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-teal-500/10 blur-3xl" />

          <div
            className={`${
              messageSent ? "opacity-100" : "pointer-events-none opacity-0"
            } absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-opacity duration-500`}
          >
            <motion.div
              animate={messageSent ? { scale: 1 } : {}}
              className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-r from-cyan-500 to-teal-500"
              initial={{ scale: 0 }}
              transition={{ damping: 15, stiffness: 200, type: "spring" }}
            >
              <CheckIcon className="fill-white" size={40} />
            </motion.div>
            <h3 className="mb-2 font-bold text-white text-xl">Message sent!</h3>
            <p className="text-slate-400">Thank you for reaching out.</p>
            <p className="text-slate-400">I&apos;ll get back to you soon.</p>
          </div>

          <form
            className={`${
              messageSent ? "pointer-events-none opacity-0" : "opacity-100"
            } relative z-10 flex w-full flex-col gap-6 transition-opacity duration-300`}
            onSubmit={handleSubmit}
            ref={_form}
          >
            <div className="relative">
              <input
                autoComplete="off"
                className="peer w-full rounded-xl border border-slate-700/50 bg-slate-800/50 px-4 py-4 text-white placeholder-transparent outline-none transition-all duration-300 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                id="name"
                name="name"
                onBlur={handleBlur}
                onChange={handleOnChange}
                onFocus={handleNameFocus}
                placeholder="Name"
                required
                type="text"
              />
              <label className={labelClass("name")} htmlFor="name">
                Name
              </label>
            </div>

            <div className="relative">
              <input
                autoComplete="off"
                className="peer w-full rounded-xl border border-slate-700/50 bg-slate-800/50 px-4 py-4 text-white placeholder-transparent outline-none transition-all duration-300 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                id="email"
                name="email"
                onBlur={handleBlur}
                onChange={handleOnChange}
                onFocus={handleEmailFocus}
                placeholder="Email"
                required
                type="email"
              />
              <label className={labelClass("email")} htmlFor="email">
                Email
              </label>
            </div>

            <div className="relative">
              <textarea
                autoComplete="off"
                className="peer w-full resize-none rounded-xl border border-slate-700/50 bg-slate-800/50 px-4 py-4 text-white placeholder-transparent outline-none transition-all duration-300 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
                id="message"
                name="message"
                onBlur={handleBlur}
                onChange={handleOnChange}
                onFocus={handleMessageFocus}
                placeholder="Message"
                required
                rows={4}
              />
              <label className={labelClass("message")} htmlFor="message">
                Message
              </label>
            </div>

            {!!invalidData && !loading && (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-center"
                initial={{ opacity: 0, y: -10 }}
              >
                <p className="text-red-400 text-sm">
                  Please check your information and try again
                </p>
              </motion.div>
            )}

            <motion.button
              className="relative w-full cursor-pointer overflow-hidden rounded-xl py-4 font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
              disabled={loading}
              type="submit"
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
            >
              <span className="absolute inset-0 bg-linear-to-r from-cyan-500 to-teal-500" />
              <span className="absolute inset-0 bg-linear-to-r from-cyan-400 to-teal-400 opacity-0 transition-opacity duration-300 hover:opacity-100" />

              {loading ? (
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    className="h-5 w-5 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <title>Loading</title>
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      fill="currentColor"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="relative z-10">Send message</span>
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </SectionLayout>
  );
}
