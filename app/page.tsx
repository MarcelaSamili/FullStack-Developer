'use client';
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Skils from '@/components/Skils';
import Projects from '@/components/Projects';
import { motion } from 'motion/react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        gestureOrientation: 'vertical',
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      lenis.on('scroll', ScrollTrigger.update);

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      gsap.ticker.add(time => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove(time => lenis.raf(time * 1000));
      };
    }
  }, [isClient]);
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
