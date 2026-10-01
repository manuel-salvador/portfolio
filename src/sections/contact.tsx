"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import {
  type ChangeEvent,
  type FocusEvent,
  type FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { sendEmail } from "@/app/actions";
import { CheckIcon } from "@/components/icons";
import SectionLayout from "@/layouts/section-layout";
import { cn } from "@/lib/utils";
import {
  type ContactField,
  type ContactFieldErrors,
  EMAIL_MAX_LENGTH,
  firstInvalidField,
  MESSAGE_MAX_LENGTH,
  NAME_MAX_LENGTH,
  validateContactFields,
} from "@/utils/contact-form";

const PREVIEW_DELAY_MS = 2000;

type FieldConfig = {
  autoCapitalize?: "none" | "words";
  autoComplete?: string;
  id: ContactField;
  inputMode?: "email" | "text";
  label: string;
  maxLength: number;
  multiline?: boolean;
  spellCheck: boolean;
  type?: "email" | "text";
};

const fields: FieldConfig[] = [
  {
    autoCapitalize: "words",
    autoComplete: "name",
    id: "name",
    inputMode: "text",
    label: "Name",
    maxLength: NAME_MAX_LENGTH,
    spellCheck: false,
    type: "text",
  },
  {
    autoCapitalize: "none",
    autoComplete: "email",
    id: "email",
    inputMode: "email",
    label: "Email",
    maxLength: EMAIL_MAX_LENGTH,
    spellCheck: false,
    type: "email",
  },
  {
    id: "message",
    label: "Message",
    maxLength: MESSAGE_MAX_LENGTH,
    multiline: true,
    spellCheck: true,
  },
];

function labelClass(focused: boolean): string {
  return cn(
    "pointer-events-none absolute left-4 bg-[#0C0C0C] px-2 transition-all duration-300",
    focused
      ? "-top-2 text-[#D7E2EA] text-xs"
      : "top-4 bg-transparent px-0 text-[#D7E2EA]/70 peer-autofill:-top-2 peer-autofill:bg-[#0C0C0C] peer-autofill:px-2 peer-autofill:text-[#D7E2EA] peer-autofill:text-xs peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:bg-[#0C0C0C] peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:text-[#D7E2EA] peer-[:not(:placeholder-shown)]:text-xs"
  );
}

function ContactControl({
  error,
  field,
  focused,
  onBlur,
  onChange,
  onFocus,
}: {
  error?: string;
  field: FieldConfig;
  focused: boolean;
  onBlur: () => void;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus: (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  const errorId = `${field.id}-error`;
  const controlClass = cn(
    "peer w-full rounded-2xl border bg-transparent px-4 py-4 text-[#D7E2EA] text-base outline-none transition-colors placeholder:text-transparent focus-visible:ring-2",
    error
      ? "border-red-400/70 focus-visible:border-red-300 focus-visible:ring-red-400/40"
      : "border-[#D7E2EA]/35 focus-visible:border-[#D7E2EA] focus-visible:ring-[#D7E2EA]/30"
  );

  return (
    <div className="relative">
      {field.multiline ? (
        <textarea
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? true : undefined}
          aria-required="true"
          autoComplete={field.autoComplete}
          className={cn(controlClass, "min-h-32 resize-y")}
          dir="auto"
          id={field.id}
          maxLength={field.maxLength}
          name={field.id}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={field.label}
          rows={4}
          spellCheck={field.spellCheck}
        />
      ) : (
        <input
          aria-describedby={error ? errorId : undefined}
          aria-invalid={error ? true : undefined}
          aria-required="true"
          autoCapitalize={field.autoCapitalize}
          autoComplete={field.autoComplete}
          className={controlClass}
          dir="auto"
          id={field.id}
          inputMode={field.inputMode}
          maxLength={field.maxLength}
          name={field.id}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={field.label}
          spellCheck={field.spellCheck}
          type={field.type}
        />
      )}
      <label className={labelClass(focused)} htmlFor={field.id}>
        {field.label}
      </label>
      {error ? (
        <p className="mt-2 text-red-300 text-sm" id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const reduceMotion = useReducedMotion();
  const previewTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [focusedField, setFocusedField] = useState<ContactField | null>(null);

  useEffect(
    () => () => {
      if (previewTimer.current) {
        clearTimeout(previewTimer.current);
      }
    },
    []
  );

  useEffect(() => {
    if (messageSent) {
      successHeadingRef.current?.focus();
    }
  }, [messageSent]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.dataset.submitting === "true") {
      return;
    }

    const data = new FormData(form);
    const values = {
      email: String(data.get("email") ?? ""),
      message: String(data.get("message") ?? ""),
      name: String(data.get("name") ?? ""),
    };
    const errors = validateContactFields(values);
    const invalidField = firstInvalidField(errors);

    if (invalidField) {
      setFieldErrors(errors);
      setSendFailed(false);
      document.getElementById(invalidField)?.focus();
      return;
    }

    setFieldErrors({});
    setSendFailed(false);
    setLoading(true);
    form.dataset.submitting = "true";

    if (process.env.NEXT_PUBLIC_PREVIEW_MODE) {
      previewTimer.current = setTimeout(() => {
        setMessageSent(true);
        setLoading(false);
        delete form.dataset.submitting;
      }, PREVIEW_DELAY_MS);
      return;
    }

    try {
      const response = await sendEmail(new FormData(form));

      if (response.status === 200) {
        setMessageSent(true);
        return;
      }

      if (response.status === 400) {
        setFieldErrors(response.errors);
        const field = firstInvalidField(response.errors);
        if (field) {
          document.getElementById(field)?.focus();
        }
        return;
      }

      setSendFailed(true);
    } catch {
      setSendFailed(true);
    } finally {
      setLoading(false);
      delete form.dataset.submitting;
    }
  };

  const handleSendAnother = () => {
    formRef.current?.reset();
    setMessageSent(false);
    setSendFailed(false);
    setFieldErrors({});
    window.setTimeout(() => {
      document.getElementById("name")?.focus();
    }, 0);
  };

  const handleBlur = useCallback(() => {
    setFocusedField(null);
  }, []);

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const field = event.currentTarget.name;
      if (field === "name" || field === "email" || field === "message") {
        setFocusedField(field);
      }
    },
    []
  );

  const handleFieldChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const field = event.currentTarget.name;
      if (field !== "name" && field !== "email" && field !== "message") {
        return;
      }

      setFieldErrors((current) => {
        if (!current[field]) {
          return current;
        }

        const next = { ...current };
        delete next[field];
        return next;
      });
    },
    []
  );

  return (
    <SectionLayout
      className="scroll-mt-8 bg-[#0C0C0C] px-5 py-24 sm:px-8 md:px-10"
      id="contact"
    >
      <motion.div
        className="relative mx-auto grid w-full max-w-5xl overflow-hidden rounded-[40px] border-2 border-[#D7E2EA]/25 md:grid-cols-[0.9fr_1.1fr]"
        initial={reduceMotion ? false : { opacity: 0, y: 28 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="relative flex flex-col justify-center gap-6 px-6 py-10 md:px-10 md:py-14">
          <h2 className="hero-heading font-black text-5xl uppercase leading-none tracking-tight md:text-7xl">
            Contact
          </h2>
          <p className="max-w-sm text-[#D7E2EA] leading-relaxed">
            Recruiters and clients can reach me here, or start with the CV.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              className="inline-flex min-h-11 items-center rounded-full border-2 border-[#D7E2EA] px-5 py-2 font-medium text-[#D7E2EA] text-sm uppercase tracking-widest transition-colors hover:bg-[#D7E2EA]/10 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              href="/curriculum"
            >
              View CV
            </Link>
            <a
              className="inline-flex min-h-11 items-center rounded-full border-2 border-[#D7E2EA]/40 px-5 py-2 font-medium text-[#D7E2EA] text-sm uppercase tracking-widest transition-colors hover:border-[#D7E2EA] focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              href="mailto:manu.sacr@hotmail.com"
            >
              Email me
            </a>
          </div>
        </div>

        <div className="relative flex h-full w-full flex-col items-center justify-center p-6 md:p-10">
          {messageSent ? (
            <div className="flex flex-col items-center px-4 py-8 text-center">
              <motion.div
                animate={{ scale: 1 }}
                className="contact-pill mb-6 flex h-20 w-20 items-center justify-center rounded-full p-0"
                initial={{ scale: 0 }}
                transition={{ damping: 15, stiffness: 200, type: "spring" }}
              >
                <CheckIcon className="fill-white" size={40} />
              </motion.div>
              <h3
                className="mb-2 rounded-md font-bold text-[#D7E2EA] text-xl outline-none focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4"
                ref={successHeadingRef}
                tabIndex={-1}
              >
                Message sent
              </h3>
              <p className="text-[#D7E2EA]">I&apos;ll reply by email.</p>
              <button
                className="mt-6 inline-flex min-h-11 items-center rounded-full border-2 border-[#D7E2EA] px-6 py-3 font-medium text-[#D7E2EA] uppercase tracking-widest transition-colors hover:bg-[#D7E2EA]/10 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
                onClick={handleSendAnother}
                type="button"
              >
                Send another
              </button>
            </div>
          ) : (
            <form
              aria-label="Contact"
              className="relative z-10 flex w-full flex-col gap-6"
              noValidate
              onSubmit={handleSubmit}
              ref={formRef}
            >
              {fields.map((field) => (
                <ContactControl
                  error={fieldErrors[field.id]}
                  field={field}
                  focused={focusedField === field.id}
                  key={field.id}
                  onBlur={handleBlur}
                  onChange={handleFieldChange}
                  onFocus={handleFocus}
                />
              ))}

              {sendFailed && !loading ? (
                <div
                  className="rounded-lg border border-red-400/40 bg-red-500/10 p-3"
                  role="alert"
                >
                  <p className="text-red-200 text-sm">
                    The message didn&apos;t send. Your draft is still here. Try
                    again, or{" "}
                    <a
                      className="underline underline-offset-2"
                      href="mailto:manu.sacr@hotmail.com"
                    >
                      email me
                    </a>
                    .
                  </p>
                </div>
              ) : null}

              <button
                className="contact-pill relative min-h-12 w-full cursor-pointer"
                disabled={loading}
                type="submit"
              >
                {loading ? (
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
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
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </SectionLayout>
  );
}
