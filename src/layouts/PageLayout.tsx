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
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Welcome to my portfolio! Explore my projects and discover my passion for creating innovative websites."
        />
        <meta property="og:image" content="https://i.imgur.com/vk5Dw1U.png" />
        <meta property="og:image:secure_url" content="https://i.imgur.com/vk5Dw1U.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="manuelSalvador" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="ManuelSalvadorPortfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta
          name="twitter:description"
          content="Welcome to my portfolio! Explore my projects and discover my passion for creating innovative websites."
        />
        <meta name="twitter:image" content="https://i.imgur.com/vk5Dw1U.png" />
        <meta name="twitter:creator" content="@manu_svd" />
      </Head>
      <Header />
      <main className={className}>{children}</main>
    </>
  );
}
