import React from 'react';
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/components/ui/terminal-tools';
import { deflate } from 'zlib';

const Skils = () => {
  return (
    <section
      id="skills"
      className="relative flex justify-center items-center overflow-hidden m-full h-dvh"
    >
      <div className="relative container h-full flex justify-center items-center overflow-hidden">
        <Terminal className="overflow-hidden">
          <TypingAnimation>&gt; npm i skills@latest </TypingAnimation>

          <AnimatedSpan delay={1500} className="text-green-400">
            <span>✔ Preflight checks.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className="text-blue-300">
            <span>
              ✔ Skills Loaded:
              <br /> - Software Architecture,
              <br /> - JavaScript, TypeScript,
              <br /> - ReactJS, Next.js, Node.js,
              <br /> - TailwindCSS, HTML/CSS,
              <br /> - MySQL, MongoDB, API Rest,
              <br /> - Scrum, Git & GitHub,
              <br /> - UI libraries,
            </span>
          </AnimatedSpan>

          <AnimatedSpan delay={2000} className="text-green-400">
            <span>✔ Verifying framework. Next.js.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={2500} className="text-green-400">
            <span>✔ Validating Tailwind CSS.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={3000} className="text-green-400">
            <span>✔ Validating import alias.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={3500} className="text-green-400">
            <span>✔ Writing components.json.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={4000} className="text-green-400">
            <span>✔ Checking registry.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={4500} className="text-green-400">
            <span>✔ Updating tailwind.config.ts</span>
          </AnimatedSpan>

          <AnimatedSpan delay={5000} className="text-green-400">
            <span>✔ Updating app/globals.css</span>
          </AnimatedSpan>

          <AnimatedSpan delay={5500} className="text-green-400">
            <span>✔ Installing dependencies.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={6000} className="text-blue-400">
            <span>ℹ Updated 1 file:</span>
            <span className="pl-2">- lib/utils.ts</span>
          </AnimatedSpan>

          <TypingAnimation delay={6500} className="text-white ">
            Success! Project initialization completed.
          </TypingAnimation>

          <TypingAnimation delay={7000} className="text-white ">
            You may now add components.
          </TypingAnimation>
        </Terminal>
      </div>
    </section>
  );
};

export default Skils;
