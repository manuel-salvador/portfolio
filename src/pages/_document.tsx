import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Descripción de mi página" />
        <meta property="og:title" content="Manuel Salvador | Full Stack Developer" />
        <meta
          property="og:description"
          content="¡Bienvenido a mi portfolio! Explora mis proyectos y descubre mi pasión por crear webs innovadoras. Con habilidades en desarrollo web, programación y resolución de problemas, estoy listo para enfrentar nuevos desafíos. ¡Conóceme y descubre cómo puedo aportar valor a tu equipo!"
        />
        <meta property="og:image" content="https://i.imgur.com/vk5Dw1U.png" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
