'use client';

import { cn } from '@/lib/utils';
import { motion, MotionProps } from 'motion/react';
import { useEffect, useRef, useState, useCallback } from 'react';

interface TypingAnimationProps extends MotionProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
  startOnView?: boolean;
}

export function TypingAnimation({
  children,
  className,
  duration = 30,
  delay = 1,
  as: Component = 'div',
  startOnView = false,
  ...props
}: TypingAnimationProps) {
  const MotionComponent = motion.create(Component, {
    forwardMotionProps: true,
  });

  const [displayedText, setDisplayedText] = useState<string>('');
  const [started, setStarted] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  const startTyping = useCallback(() => {
    setDisplayedText(''); // Resetar texto antes de reiniciar animação
    setStarted(false);

    setTimeout(() => {
      setStarted(true);
    }, delay);
  }, [delay]);

  useEffect(() => {
    if (!startOnView) {
      startTyping();
      return;
    }
    setDisplayedText('');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startTyping();
        }
      },
      { threshold: 0.5 } // Define quando ativar (50% visível na tela)
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [startOnView, startTyping]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [children, duration, started]);

  return (
    <MotionComponent
      ref={elementRef}
      className={cn(
        'text-4xl font-bold leading-[5rem] tracking-[-0.02em]',
        className
      )}
      {...props}
    >
      {displayedText}
    </MotionComponent>
  );
}
