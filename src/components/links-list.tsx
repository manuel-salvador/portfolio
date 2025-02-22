type Props = {
  title: string;
  links: { path: string; slug: string }[];
};

export default function LinksList({ title, links }: Props) {
  return (
    <div className="mt-20 flex min-h-[calc(100vh-5rem)] w-full flex-col items-center justify-center gap-8 px-4 pb-10">
      <h1 className="text-center text-2xl font-bold">{title}</h1>
      <ul className="flex w-full max-w-xs flex-col gap-4">
        {links.map((link) => (
          <li key={link.slug}>
            <a
              href={`${link.path}`}
              className="block w-full cursor-pointer rounded-md border-2 border-gray-200 p-2 text-center text-lg transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-gray-400"
              target="_blank"
            >
              {link.slug}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
