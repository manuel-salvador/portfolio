"use client";

import { type FormEvent, type Ref, useRef, useState } from "react";
import { CheckIcon } from "@/components/icons";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import SectionLayout from "@/layouts/section-layout";
import { testContactForm } from "@/utils/testContactForm";

const inputStyle =
  "bg-transparent border-b-2 border-cyan-600 outline-hidden p-2 text-white";

export default function Contact() {
  const _form = useRef<HTMLFormElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [invalidData, setInvalidData] = useState(false);

  const [ref, entry] = useIntersectionObserver({
    root: divRef,
    threshold: 0.3,
  });

  const handleSubmit = (e: FormEvent) => {
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

      fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.status === 200) {
            setMessageSent(true);
          } else {
            setInvalidData(true);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleOnChange = () => {
    if (invalidData) {
      setInvalidData(false);
    }
  };

  return (
    <SectionLayout className="px-8 pb-16" id="contact">
      <div
        className={`${
          entry?.isIntersecting ? "opacity-100" : "opacity-0"
        } relative mx-auto flex h-full w-full max-w-md flex-col items-center justify-center rounded-lg border-2 border-cyan-600 px-8 py-4 shadow-cyan-800 shadow-lg transition-all duration-700`}
        ref={ref as Ref<HTMLDivElement>}
      >
        <div
          className={`${
            messageSent ? "opacity-100" : "pointer-events-none opacity-0"
          } absolute text-center transition-opacity duration-1000`}
        >
          <div className="mb-3">
            <span className="mx-auto mb-1 block w-fit text-center">
              <CheckIcon size={40} />
            </span>
            <p>Message sent successfully</p>
          </div>
          <p>Thank you!</p>
          <p>I will contact you as soon as possible</p>
        </div>
        <form
          className={`${
            messageSent ? "opacity-0" : "opacity-100"
          } flex w-full flex-col gap-8 transition-opacity duration-300`}
          onSubmit={handleSubmit}
          ref={_form}
        >
          <h2 className="text-center text-3xl">Let&apos;s talk</h2>
          <input
            autoComplete="off"
            className={inputStyle}
            name="name"
            onChange={handleOnChange}
            placeholder="Name"
            required
            type="text"
          />
          <input
            autoComplete="off"
            className={inputStyle}
            name="email"
            onChange={handleOnChange}
            placeholder="Email"
            required
            type="email"
          />
          <textarea
            autoComplete="off"
            className={inputStyle}
            cols={30}
            name="message"
            onChange={handleOnChange}
            placeholder="Message"
            required
            rows={4}
          />
          {loading && !invalidData && (
            <div className="flex h-11 w-36 cursor-not-allowed items-center justify-center self-center rounded-lg bg-cyan-800 p-2">
              <svg
                aria-hidden="true"
                className="h-6 w-6 animate-spin fill-cyan-600 text-cyan-900"
                fill="none"
                viewBox="0 0 100 101"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          )}

          {invalidData && !loading && (
            <div className="w-fit self-center border-2 border-red-800 bg-red-100 px-3 py-1 text-center font-bold text-red-800">
              <small>This form has errors</small>
            </div>
          )}

          {!loading && (
            <button
              className="h-11 w-36 cursor-pointer self-center rounded-lg bg-cyan-600 p-2 transition-all hover:shadow-cyan-700 hover:shadow-lg"
              type="submit"
            >
              Send message
            </button>
          )}
        </form>
      </div>
    </SectionLayout>
  );
}
