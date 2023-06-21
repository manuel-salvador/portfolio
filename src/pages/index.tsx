import Home from '@/sections/Home';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import PageLayout from '@/layouts/PageLayout';
import Footer from '@/components/Footer';
import AboutMe from '@/sections/AboutMe';

export default function Index() {
  return (
    <PageLayout title="Manuel Salvador | Portfolio">
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </PageLayout>
  );
}
