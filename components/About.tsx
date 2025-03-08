import React from 'react';
import { TypingAnimation } from './ui/typingTextAnimation';
import { text_about } from '@/utils';

const About = () => {
  return (
    <section
      id="about"
      className="relative container flex justify-start items-center h-dvh"
    >
      <div className="relative text-justify h-[30%] w-full ">
        <div className="text-white text-lg font-Cutive-Mono font-bold">
          Hello visitor!
        </div>
        <div>
          <TypingAnimation className="text-white text-lg font-Cutive-Mono font-medium">
            {text_about}
          </TypingAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
