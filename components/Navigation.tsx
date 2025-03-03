import React from 'react';
import { navItems } from '@/utils/index';
const Navigation = () => {
  return (
    <div className="fixed flex justify-center items-center ">
      <nav className="fixed top-[20%] left-0  border-2 backdrop-blur-md text-white p-5 shadow-lg z-50 mr-[100%] rounded-[50px] rounded-es-2xl">
        <div className='"max-w-6xl mx-auto flex justify-between items-center"'>
          <ul className="font-Cutive-Mono">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-white hover:text-emerald-400 transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
