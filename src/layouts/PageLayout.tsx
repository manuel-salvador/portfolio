import Head from 'next/head';

import Header from '@/components/Header';

type Props = {
  title: string;
  children: JSX.Element | JSX.Element[];
  className?: string;
};

export default function PageLayout({ title, children, className }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Manuel Salvador portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={className}>{children}</main>
    </>
  );
}
