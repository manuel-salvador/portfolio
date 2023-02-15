import Head from 'next/head';
import Home from '@/sections/Home';
import Header from '@/sections/Header';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import 'atropos/css/min';
import Contact from '@/sections/Contact';

export default function Index() {
  return (
    <>
      <Head>
        <title>Manuel Salvador | Portfolio</title>
        <meta name="description" content="Manuel Salvador portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="stylesheet" href="path/to/atropos.css" />
      </Head>
      <main>
        <Header />
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
