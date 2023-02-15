type SectionLayoutType = {
  children: React.ReactNode;
  className?: string;
  id: string;
};

export default function SectionLayout({ children, className, id }: SectionLayoutType) {
  return (
    <section id={id} className={`h-screen py-[76px] md:py-[74px] px-2 ${className}`}>
      {children}
    </section>
  );
}