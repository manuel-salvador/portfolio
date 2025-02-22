import { ReactNode } from 'react';

type SectionLayoutType = {
  children: ReactNode;
  className?: string;
  id: string;
};

export default function SectionLayout({ children, className, id }: SectionLayoutType) {
  return (
    <section id={id} className={`w-full px-2 py-[76px] md:py-[74px] ${className}`}>
      {children}
    </section>
  );
}
