type Props = {
  title: string;
  links: { path: string; slug: string }[];
};

export default function LinksList({ title, links }: Props) {
  return (
    <div className="min-h-[calc(100vh-5rem)] mt-20 w-full flex flex-col gap-8 justify-center items-center px-4 pb-10">
      <h1 className="font-bold text-2xl text-center">{title}</h1>
      <ul className="flex flex-col gap-4 w-full max-w-xs">
        {links.map((link) => (
          <li key={link.slug}>
            <a
              href={`${link.path}`}
              className="block text-center w-full border-2 border-gray-200 p-2 rounded-md cursor-pointer hover:shadow-md hover:shadow-gray-400 transition-all duration-300 text-lg hover:scale-105"
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
