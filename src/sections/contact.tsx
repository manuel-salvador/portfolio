"use client";

import { motion } from "framer-motion";
import { type FormEvent, type Ref, useRef, useState } from "react";
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

  return (
    <SectionLayout className="px-6 py-24 md:px-8" id="contact">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <span className="mb-2 block text-cyan-500 text-xs uppercase tracking-widest">
          Contacto
        </span>
        <h2 className="font-bold text-3xl text-white md:text-4xl">
          Let&apos;s <span className="gradient-text">Talk</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-slate-400">
          ¿Tienes un proyecto en mente? Me encantaría escucharte
        </p>
      </motion.div>

      <motion.div
        className={`${
          entry?.isIntersecting ? "opacity-100" : "opacity-0"
        } glass-card relative mx-auto flex h-full w-full max-w-lg flex-col items-center justify-center rounded-2xl p-8 transition-all duration-700 md:p-10`}
        initial={{ opacity: 0, y: 30 }}
        ref={ref as Ref<HTMLDivElement>}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        {/* Decorative elements */}
        <div className="-top-20 -right-20 pointer-events-none absolute h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="-bottom-20 -left-20 pointer-events-none absolute h-40 w-40 rounded-full bg-teal-500/10 blur-3xl" />

        {/* Success State */}
        <div
          className={`${
            messageSent ? "opacity-100" : "pointer-events-none opacity-0"
          } absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-opacity duration-500`}
        >
          <motion.div
            animate={messageSent ? { scale: 1 } : {}}
            className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-r from-cyan-500 to-teal-500"
            initial={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <CheckIcon className="fill-white" size={40} />
          </motion.div>
          <h3 className="mb-2 font-bold text-white text-xl">Message sent!</h3>
          <p className="text-slate-400">Thank you for reaching out.</p>
          <p className="text-slate-400">I&apos;ll get back to you soon.</p>
        </div>

        {/* Form */}
        <form
          className={`${
            messageSent ? "pointer-events-none opacity-0" : "opacity-100"
          } relative z-10 flex w-full flex-col gap-6 transition-opacity duration-300`}
          onSubmit={handleSubmit}
          ref={_form}
        >
          {/* Name Field */}
          <div className="relative">
            <input
              autoComplete="off"
              className="peer w-full rounded-xl border border-slate-700/50 bg-slate-800/50 px-4 py-4 text-white placeholder-transparent outline-none transition-all duration-300 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
              id="name"
              name="name"
              onBlur={() => setFocusedField(null)}
              onChange={handleOnChange}
              onFocus={() => setFocusedField("name")}
              placeholder="Name"
              required
              type="text"
            />
            <label
              className={`pointer-events-none absolute left-4 transition-all duration-300 ${
                focusedField === "name"
                  ? "-top-2 bg-slate-900 px-2 text-cyan-400 text-xs"
                  : "peer-[:not(:placeholder-shown)]:-top-2 top-4 text-slate-500 peer-[:not(:placeholder-shown)]:bg-slate-900 peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-cyan-400 peer-[:not(:placeholder-shown)]:text-xs"
              }`}
              htmlFor="name"
            >
              Name
            </label>
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              autoComplete="off"
              className="peer w-full rounded-xl border border-slate-700/50 bg-slate-800/50 px-4 py-4 text-white placeholder-transparent outline-none transition-all duration-300 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
              id="email"
              name="email"
              onBlur={() => setFocusedField(null)}
              onChange={handleOnChange}
              onFocus={() => setFocusedField("email")}
              placeholder="Email"
              required
              type="email"
            />
            <label
              className={`pointer-events-none absolute left-4 transition-all duration-300 ${
                focusedField === "email"
                  ? "-top-2 bg-slate-900 px-2 text-cyan-400 text-xs"
                  : "peer-[:not(:placeholder-shown)]:-top-2 top-4 text-slate-500 peer-[:not(:placeholder-shown)]:bg-slate-900 peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-cyan-400 peer-[:not(:placeholder-shown)]:text-xs"
              }`}
              htmlFor="email"
            >
              Email
            </label>
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              autoComplete="off"
              className="peer w-full resize-none rounded-xl border border-slate-700/50 bg-slate-800/50 px-4 py-4 text-white placeholder-transparent outline-none transition-all duration-300 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
              id="message"
              name="message"
              onBlur={() => setFocusedField(null)}
              onChange={handleOnChange}
              onFocus={() => setFocusedField("message")}
              placeholder="Message"
              required
              rows={4}
            />
            <label
              className={`pointer-events-none absolute left-4 transition-all duration-300 ${
                focusedField === "message"
                  ? "-top-2 bg-slate-900 px-2 text-cyan-400 text-xs"
                  : "peer-[:not(:placeholder-shown)]:-top-2 top-4 text-slate-500 peer-[:not(:placeholder-shown)]:bg-slate-900 peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-cyan-400 peer-[:not(:placeholder-shown)]:text-xs"
              }`}
              htmlFor="message"
            >
              Message
            </label>
          </div>

          {/* Error State */}
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

          {/* Submit Button */}
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
      </motion.div>
    </SectionLayout>
  );
}
