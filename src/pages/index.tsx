import Home from '@/sections/Home';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import PageLayout from '@/layouts/PageLayout';

export default function Index() {
  return (
    <PageLayout title="Manuel Salvador | Portfolio">
      <Home />
      <Projects />
      <Contact />
    </PageLayout>
  );
}
