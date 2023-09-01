import Home from '@/sections/Home';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import PageLayout from '@/layouts/PageLayout';
import Footer from '@/components/Footer';
import AboutMe from '@/sections/AboutMe';
import { api } from '@/services/api';
import { ProjectType } from '@/types';

type Props = { projects: ProjectType[] };

export default function Index({ projects }: Props) {
  return (
    <PageLayout title="Manuel Salvador | Portfolio">
      <Home />
      <AboutMe />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </PageLayout>
  );
}

export async function getStaticProps() {
  const projects = await api.mainProjects.list();

  return {
    props: {
      projects,
    },
  };
}
