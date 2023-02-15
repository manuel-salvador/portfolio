import { FormEvent, useRef } from 'react';
import SectionLayout from '../layouts/SectionLayout';

const inputStyle = 'bg-transparent border-b-2 border-cyan-600 outline-none p-2 text-white';

export default function Contact() {
  const _form = useRef(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(_form.current);
  };

  return (
    <SectionLayout id="contact" className="pb-0">
      <div className="h-full w-80 flex flex-col items-center justify-center mx-auto">
        <form ref={_form} className="flex flex-col gap-8 w-full" onSubmit={handleSubmit}>
          <h2 className="text-2xl text-center">Let&apos;s talk</h2>
          <input
            className="bg-transparent border-b-2 border-cyan-600 outline-none p-2 text-white"
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
          />
          <input
            className={inputStyle}
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
          />
          <textarea
            className={inputStyle}
            name="message"
            cols={30}
            rows={4}
            placeholder="Message"
            autoComplete="off"
          ></textarea>
          <button
            type="submit"
            className="bg-cyan-600 p-2 w-fit self-center rounded-lg hover:shadow-lg hover:shadow-cyan-700 transition-all"
          >
            Send message
          </button>
        </form>
      </div>
    </SectionLayout>
  );
}
