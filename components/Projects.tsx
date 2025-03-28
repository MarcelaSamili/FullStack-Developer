'use client';
import React from 'react';
import Image from 'next/image';
import { SiRefinedgithub } from 'react-icons/si';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';
import Link from 'next/link';
import { projects } from '@/utils/index';

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex justify-center items-center "
    >
      <div className="relative container gap-5 p-[30px] flex flex-wrap justify-center items-center overflow-hidden">
        {projects.map(projects => (
          <CardContainer key={projects.id} className="inter-var">
            <CardBody className="relative bg-bg_secondary  group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-black dark:text-white"
              >
                {projects.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {projects.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={projects.img}
                  height="300"
                  width="300"
                  className=" w-full rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={projects.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-full bg-bg_primary text-bg_secondary text-xs font-bold"
                >
                  <SiRefinedgithub />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};

export default Projects;
