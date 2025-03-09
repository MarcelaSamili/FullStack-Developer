import React from 'react';
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/components/ui/terminal-tools';
import { myskills } from '@/utils';

const Skils = () => {
  return (
    <section
      id="skills"
      className="relative flex justify-center items-center overflow-hidden m-full h-dvh"
    >
      <div className="relative container h-full flex justify-center items-center overflow-hidden">
        <Terminal className="overflow-hidden">
          <TypingAnimation>&gt; npm i skills@latest </TypingAnimation>

          <AnimatedSpan delay={1000} className="text-green-600">
            <span>✔ Preflight checks.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={1500} className="text-blue-300">
            <span>✔ Skills Loaded:</span>
          </AnimatedSpan>

          {myskills.map((item, index) => (
            <AnimatedSpan
              key={index}
              delay={item.delay}
              className="text-green-400"
            >
              <span>{item.text}</span>
            </AnimatedSpan>
          ))}

          <AnimatedSpan delay={6000} className="text-green-600">
            <span>✔ Installing dependencies.</span>
          </AnimatedSpan>

          <AnimatedSpan delay={6500} className="text-blue-400">
            <span>ℹ Updated 1 file:</span>
            <span className="pl-2">- lib/utils.ts</span>
          </AnimatedSpan>

          <TypingAnimation delay={7000} className="text-white ">
            Success! Project initialization completed.
          </TypingAnimation>

          <TypingAnimation delay={7500} className="text-white ">
            You may now add components.
          </TypingAnimation>
        </Terminal>
      </div>
    </section>
  );
};

export default Skils;
