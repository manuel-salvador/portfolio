import LinksList from '@/components/LinksList';
import PageLayout from '@/layouts/PageLayout';

export default function CurriculumPage() {
  return (
    <PageLayout title="Manuel Salvador | CV/Resume">
      <LinksList title="CV/Resume Manuel Salvador" links={links} />
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
