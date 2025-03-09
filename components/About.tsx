import React from 'react';
import { TypingAnimation } from './ui/typingTextAnimation';
import { text_about } from '@/utils';

const About = () => {
  return (
    <section
      id="about"
      className="relative container flex justify-center items-center h-dvh"
    >
      <div className="relative w-full h-[50%]">
        <p className="text-white text-lg font-Cutive-Mono font-bold text-start w-full ">
          Hello visitor!
        </p>
        <TypingAnimation className="text-white text-lg text-justify font-Cutive-Mono font-medium ">
          {text_about}
        </TypingAnimation>
      </div>
    </section>
  );
};

export default About;
