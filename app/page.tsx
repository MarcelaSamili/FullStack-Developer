'use client';

//----------------------
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Skils from '@/components/Skils';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';

//-----------------------
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.main className="relative bg-bg_primary">
      <div className="navigation">
        <Navigation />
      </div>
      <div className="relative justify-center items-center ml-10 mr-10 ">
        <Hero />

        <About />

        <Skils />

        <Projects />

        <ContactMe />

        <Footer />
      </div>
    </motion.main>
  );
}
