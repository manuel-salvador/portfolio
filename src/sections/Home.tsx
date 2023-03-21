import { ArrowDown } from '@/components/Icons';
import { once } from 'events';
import { motion } from 'framer-motion';
import SectionLayout from '../layouts/SectionLayout';

export default function Home() {
  return (
    <SectionLayout
      id="home"
      className="flex flex-col items-center justify-center text-center gap-12"
    >
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold tracking-wider"
      >
        Manuel Salvador
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl tracking-wide"
      >
        Full-Stack Web Developer
      </motion.h2>
      <motion.a
        initial="initial"
        animate="visible"
        variants={{
          visible: { y: [0, -60, 0] },
          initial: { y: 0 },
        }}
        transition={{ duration: 2, repeat: Infinity }}
        href="#skills"
        className="absolute bottom-6 flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="w-10 h-10"
        >
          <ArrowDown />
        </motion.div>
      </motion.a>
    </SectionLayout>
  );
}
