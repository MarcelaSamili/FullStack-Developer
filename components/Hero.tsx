import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-slate-500 container flex flex-col justify-center items-center h-dvh">
      <div className="relative justify-between  w-full flex flex-wrap lg:flex-nowrap xl:flex-nowrap ">
        <div
          className="relative p-2 h-full text-4xl   
        font-Cutive-Mono"
        >
          <p className="text-white">Full-Stark </p>
          <p className="text-text_gray_300">Developer</p>
          <p className="text-white">Júnior</p>
        </div>

        <div className="p-2 text-4xl sm:text-3xl font-Cutive-Mono">
          <p className="text-text_gray_300">Marcela</p>
          <p className="text-white">Barroso</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
