'use client';
import React, { useEffect, useState } from 'react';

import { navItems } from '@/utils/index';

import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return; // Garante execução apenas no cliente

    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    setLenis(lenisInstance);

    //lenisInstance.on('scroll', ScrollTrigger.update);

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.ticker.add(time => lenisInstance.raf(time * 0.5));
    gsap.ticker.lagSmoothing(500);

    return () => {
      gsap.ticker.remove(time => lenisInstance.raf(time * 1000));
    };
  }, []);

  const scrollToSection = (id: string) => {
    if (lenis) {
      const section = document.getElementById(id);
      if (section) {
        lenis.scrollTo(section, { offset: -50 });
      }
    }
  };

  return (
    <div className="fixed flex justify-center items-center">
      <nav className="fixed top-[20%] left-0 border-2 backdrop-blur-md p-4 shadow-lg z-50 rounded-[50px] rounded-es-2xl">
        <div className="flex justify-between items-center">
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <motion.div>
                  <button
                    onClick={e => {
                      e.preventDefault();
                      scrollToSection(item.link.replace('#', ''));
                    }}
                    className="bg-bg_secondary font-Cutive-Mono cursor-pointer p-3 py-2 rounded-full transition dalay-150 duration-300 ease-in-out hover:bg-slate-400  "
                  ></button>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
