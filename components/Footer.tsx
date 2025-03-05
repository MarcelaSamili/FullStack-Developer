import React from 'react';
import { FaRegCopyright } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { socials } from '@/utils';
const Footer = () => {
  return (
    <footer className="relative flex justify-between p-5  w-full border-t-[1px] border-bg_secondary">
      <div className="relatice flex  font-Cutive-Mono text-white">
        <p>All Rights Reserved Copyright</p>
        <FaRegCopyright />
      </div>
      <div className="relative flex gap-5  text-white text-xl">
        <a href={socials.gmail} target="_blank">
          <SiGmail />
        </a>
        <a href={socials.Whatsapp} target="_blank">
          <FaWhatsapp />
        </a>
        <a href={socials.instagram} target="_blank">
          <FaInstagram />
        </a>
        <a href={socials.github} target="_blank">
          <FaGithub />
        </a>
        <a href={socials.linkedin} target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
