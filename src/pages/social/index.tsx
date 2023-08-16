import LinksList from '@/components/LinksList';
import PageLayout from '@/layouts/PageLayout';

export default function SocialPage() {
  return (
    <PageLayout title="Manuel Salvador | Social Links">
      <LinksList title="Social Links - Manuel Salvador" links={links} />
    </PageLayout>
  );
}

const links = [
  {
    path: 'https://x.com/manu_svd',
    slug: 'X / Twitter',
  },
  {
    path: 'https://www.instagram.com/manu.sacr/',
    slug: 'Instagram',
  },
  {
    path: 'https://kick.com/manu-svd',
    slug: 'Kick - Stream',
  },
  {
    path: 'https://www.twitch.tv/manu_svd',
    slug: 'Twitch - Stream',
  },
  {
    path: 'https://beta.talentprotocol.com/u/manusvd',
    slug: 'Talent Protocol - Web3 Social',
  },
  {
    path: 'https://lenster.xyz/u/manu_svd',
    slug: 'Lenster - Web3 Social',
  },
  {
    path: 'https://www.linkedin.com/in/manuel-salvador/',
    slug: 'LinkedIn',
  },
  {
    path: 'https://www.threads.net/@manu.sacr',
    slug: 'Threads',
  },
  {
    path: 'https://github.com/manuel-salvador',
    slug: 'GitHub',
  },
];
