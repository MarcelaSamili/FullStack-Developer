import React from 'react';
import { TypingAnimation } from './ui/typingTextAnimation';
import { text_about } from '@/utils';

const About = () => {
  return (
    <section
      id="about"
      className="relative container flex justify-center items-center h-dvh"
    >
      <div className="relative text-justify w-full ">
        <div className="text-white text-base md:text-lg lg:text-lg font-Cutive-Mono font-bold">
          Hello visitor!
        </div>
        <div>
          <TypingAnimation className="text-white text-lg md:text-xl lg:text-xl font-Cutive-Mono font-medium">
            {text_about}
          </TypingAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
