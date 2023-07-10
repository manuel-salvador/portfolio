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
        <meta property="og:title" content="Manuel Salvador | Full Stack Developer" />
        <meta
          property="og:description"
          content="¡Bienvenido a mi portfolio! Explora mis proyectos y descubre mi pasión por crear webs innovadoras. Con habilidades en desarrollo web, programación y resolución de problemas, estoy listo para enfrentar nuevos desafíos. ¡Conóceme y descubre cómo puedo aportar valor a tu equipo!"
        />
        <meta property="og:image" content="https://i.imgur.com/vk5Dw1U.png" />
      </Head>
      <Header />
      <main className={className}>{children}</main>
    </>
  );
}
