import { ReactNode } from 'react';

type SectionLayoutType = {
  children: ReactNode;
  className?: string;
  id: string;
};

export default function SectionLayout({ children, className, id }: SectionLayoutType) {
  return (
    <section id={id} className={`w-full py-[76px] md:py-[74px] px-2 ${className}`}>
      {children}
    </section>
  );
}
