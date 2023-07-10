import Head from 'next/head';

import Header from '@/components/Header';

type Props = {
  title: string;
  children: JSX.Element | JSX.Element[];
  className?: string;
};

const pageUrl = !!process.env.NEXT_PUBLIC_PREVIEW_MODE
  ? 'https://preview-manuel-salvador.vercel.app'
  : 'https://manuel-salvador.vercel.app';

export default function PageLayout({ title, children, className }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Manuel Salvador portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Manuel Salvador | Full Stack Developer" />
        <meta
          property="og:description"
          content="Welcome to my portfolio! Explore my projects and discover my passion for creating innovative websites. With skills in web development, programming, and problem-solving, I'm ready to tackle new challenges. Get to know me and find out how I can bring value to your team!"
        />
        <meta property="og:image" content="https://i.imgur.com/vk5Dw1U.png" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main className={className}>{children}</main>
    </>
  );
}
