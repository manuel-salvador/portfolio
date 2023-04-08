import Head from 'next/head';
import Home from '@/sections/Home';
import Header from '@/components/Header';
import Skills from '@/components/SkillsList';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';

export default function Index() {
  return (
    <>
      <Head>
        <title>Manuel Salvador | Portfolio</title>
        <meta name="description" content="Manuel Salvador portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Home />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
