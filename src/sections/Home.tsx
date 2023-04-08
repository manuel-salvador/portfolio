import { ArrowDown } from '@/components/Icons';
import SkillsList from '@/components/SkillsList';
import { motion } from 'framer-motion';
import SectionLayout from '../layouts/SectionLayout';

export default function Home() {
  return (
    <SectionLayout
      id="home"
      className="relative h-[80vh] md:h-screen flex flex-col items-center justify-center text-center gap-16 sm:mt-0"
    >
      <div className="flex flex-col gap-8">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold tracking-wider"
        >
          Manuel Salvador
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl tracking-wide"
        >
          Full-Stack Web Developer
        </motion.h2>
      </div>
      <SkillsList />
      <motion.a
        initial="initial"
        animate="visible"
        variants={{
          visible: { y: [0, -60, 0] },
          initial: { y: 0 },
        }}
        transition={{ duration: 2, repeat: Infinity }}
        href="#projects"
        className="absolute bottom-0 md:bottom-4 flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="w-6 h-6 md:w-10 md:h-10"
        >
          <ArrowDown />
        </motion.div>
      </motion.a>
    </SectionLayout>
  );
}
