import React from 'react';
//import { TypingAnimation } from './ui/typingTextAnimation';
import { text_about } from '@/utils';

const About = () => {
  return (
    <section
      id="about"
      className="relative container flex justify-center items-center pt-[10%] pb-[10%]"
    >
      <div className="relative w-full text-white text-lg lg:text-2xl font-Cutive-Mono text-justify">
        <p className=" font-bold  ">Hello visitor!</p>
        <p className="font-medium ">{text_about}</p>
      </div>
    </section>
  );
};

export default About;
