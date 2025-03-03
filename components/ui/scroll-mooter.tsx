'use client';
/*import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';

interface ScrollMooterProps {
  children: ReactNode;
}

const ScrollMooter: FC<ScrollMooterProps> = ({ children }) => {
  //get information
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleReasize = () => {
      if (contentRef.current != null) {
        setContentHeight(contentRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };
    handleReasize();

    window.addEventListener('resize', handleReasize);
    return () => {
      window.removeEventListener('resize', handleReasize);
    };
  }, [contentRef]);

  //itercept normal scroll behavior
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, value => {
    return value * -(contentHeight + windowHeight);
  });

  return (
    <>
      <motion.div className="flex flex-col " ref={contentRef} style={{ y: y }}>
        {children}
      </motion.div>
    </>
  );
};

export default ScrollMooter;*/

/*import React, { Children, FC, useEffect } from 'react';
import Lenis from 'lenis';

interface ScrollMooterProps {
  children: ReactNode;
}

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', e => {
  console.log(e);
});

const Scrollmooter: FC<ScrollMooterProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
};

return <motion.div>{children}</motion.div>;

export default Scrollmooter;*/
