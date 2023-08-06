import PageLayout from '@/layouts/PageLayout';

export default function CurriculumPage() {
  return (
    <PageLayout title="Manuel Salvador | Links">
      <div className="h-screen w-full flex flex-col gap-8 justify-center items-center px-4">
        <h1 className="font-bold text-2xl text-center">CV/Resume Manuel Salvador</h1>
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
    </PageLayout>
  );
}

const links = [
  {
    path: 'https://drive.google.com/file/d/14MA2oaqxlnZZlxGC4mjAdC1FDNNn3sWL/view?usp=sharing',
    slug: 'See Resume - EN',
  },
  {
    path: 'https://drive.google.com/file/d/12vRYRj1Cpe6gGiTbLlDJbRp-zwioCOz4/view?usp=sharing',
    slug: 'Ver CV - ES',
  },
];
