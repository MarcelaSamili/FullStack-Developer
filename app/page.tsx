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
  // Estado para verificar se estamos no lado do cliente
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Verifica se estamos no lado do cliente (navegador)
    if (typeof window !== 'undefined') {
      setIsClient(true); // Atualiza o estado para "verdadeiro" no cliente
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      // Inicializa o Lenis apenas no lado do cliente
      const lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        gestureOrientation: 'vertical',
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      });

      // Sincronize o Lenis com o ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      // Adiciona o requestAnimationFrame para o Lenis
      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Configura o GSAP para rodar suavemente
      gsap.ticker.add(time => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove(time => lenis.raf(time * 1000));
      };
    }
  }, [isClient]); // Só roda após a verificação do cliente
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

/** Initialize a new Lenis instance for smooth scrolling
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
 */
