'use client';
import '@radix-ui/themes';
import { useEffect, useState } from 'react';
//----------------------
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Skils from '@/components/Skils';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import { motion } from 'motion/react';
//-----------------------
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    if (typeof window === 'undefined') return; // Evita executar no servidor

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
  }, []); // Sem dependências, executa apenas no cliente após o primeiro render
  return (
    <main className="relative bg-bg_primary overflow-hidden lg:overflow-visible xl:overflow-visible ">
      <Navigation />
      <div className="relative justify-center items-center ml-10 mr-10 ">
        <Hero />

        <About />

        <Skils />

        <Projects />

        <ContactMe />

        <Footer />
      </div>
    </main>
  );
}
