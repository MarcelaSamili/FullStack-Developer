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
  const [isDesktop, setIsDesktop] = useState(false);

  // Verificação de dispositivos desktop (reage à mudança de tamanho da tela)
  useEffect(() => {
    const checkIsDesktop = () => window.innerWidth >= 1024;
    const handleResize = () => setIsDesktop(checkIsDesktop());

    window.addEventListener('resize', handleResize);
    handleResize(); // Verifica logo ao carregar

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Inicialização do Lenis quando necessário (apenas para desktop)
  useEffect(() => {
    if (isDesktop && !lenis) {
      const lenisInstance = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        gestureOrientation: 'vertical',
        //wheelMultiplier: 0,
        touchMultiplier: 2,
        infinite: false,
      });

      setLenis(lenisInstance);

      lenisInstance.on('scroll', ScrollTrigger.update);

      function raf(time: number) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      gsap.ticker.add(time => lenisInstance.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      return () => {
        gsap.ticker.remove(time => lenisInstance.raf(time * 1000));
      };
    }
  }, [isDesktop, lenis]);

  // Função para rolar suavemente para a seção
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section && lenis) {
      // Usar Lenis para rolar suavemente
      lenis.scrollTo(section, { offset: -30 });
    } else if (section) {
      // Caso o Lenis não esteja inicializado, rolar com o comportamento nativo
      window.scrollTo({
        top: section.offsetTop - 30,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="fixed flex justify-center items-center">
      <nav className="fixed top-[20%] left-0 border-2 backdrop-blur-md p-4 shadow-lg z-50 rounded-[50px] rounded-es-2xl">
        <div className="flex justify-between items-">
          <motion.div>
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <div className="py-1">
                    <button
                      onClick={e => {
                        e.preventDefault();
                        item.link;
                        scrollToSection(item.link.replace('#', ''));
                      }}
                      className="bg-bg_secondary text-xs font-Cutive-Mono cursor-pointer p-3 py-2 rounded-full "
                    ></button>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
