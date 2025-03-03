'use client';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Skils from '@/components/Skils';
//import ScrollMooter from '@/components/ui/scroll-mooter';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Projects from '@/components/Projects';
import Navigation from '@/components/Navigation';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // Initialize a new Lenis instance for smooth scrolling
  const lenis = new Lenis();

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on('scroll', ScrollTrigger.update);

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  gsap.ticker.add(time => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);

  return (
    //<FollowerPointerCard>
    <main className="relative bg-bg_primary ">
      <Navigation />
      <div className="relative justify-center items-center ml-10 mr-10 ">
        <motion.div>
          <Hero />
        </motion.div>
        <motion.div>
          <About />
        </motion.div>
        <motion.div>
          <Skils />
        </motion.div>
        <motion.div>
          <Projects />
        </motion.div>
      </div>
    </main>
    //</FollowerPointerCard>
  );
}
//relative z-10 justify-center items-center bg-bg_secondary ml-10 mr-10
//relative bg-bg_primary justify-center items-center
