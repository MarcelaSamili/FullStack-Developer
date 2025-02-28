import React from 'react';

const HomePage = () => {
  return (
    <div className="relative z-10 flex flex-col justify-center items-center h-dvh">
      <div className="relative flex ">
        <div
          className="p-20 text-3xl lg:text-7xl sm:text-3xl sm:mr-1  
        font-Pixel-bold"
        >
          <p className="text-white">Full-stark </p>
          <p className="text-text_gray_300">Developer</p>
          <p className="text-white">Júnior</p>
        </div>
        <div className="p-20 text-3xl lg:text-7xl sm:text-3xl sm:ml-1 font-Pixel-bold">
          <p className="text-text_gray_300">Marcela</p>
          <p className="text-white">Barroso</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
