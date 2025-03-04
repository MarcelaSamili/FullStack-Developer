import React from 'react';
import { TypingAnimation } from './ui/typingTextAnimation';

const About = () => {
  return (
    <section
      id="about"
      className="relative container flex justify-start items-center h-dvh"
    >
      <div className="relative text-justify h-[30%] w-full ">
        <div className="text-white text-lg font-Cutive-Mono font-bold">
          hello visitor!
        </div>
        <div>
          <TypingAnimation className="text-white text-lg font-Cutive-Mono font-medium">
            My Name is Marcela Barroso, I'm a Full-Stark Developer Based in
            Ribeirão Preto, São Paulo, Brazil.I have a postgraduate degree in
            Full-Stark and Full-Cycle Development from XP Educação University
            and have been working on a wide range of full-stark projects,
            focusing on creating clean, well-designed interfaces that not only
            look great, but also provide a seamless user experience.
          </TypingAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
