/*import { gridItems } from '@/utils';
import { GridItem } from './ui/GridItem';*/

import { WobbleCard } from './ui/wobble-card';

const InfoCard = () => {
  return (
    <section className="relative h-dvh">
      <div className="relative grid gap-[5px] md:grid-rows-5 md:grid-cols-5 lg:grid-rows-4 lg:grid-cols-5 text-white font-Cutive-Mono ">
        <WobbleCard containerClassName="div1">
          <p>Tech enthusiast with a passion for development.</p>
        </WobbleCard>
        <WobbleCard containerClassName="div2">
          <p>Tech enthusiast with a passion for development.</p>
        </WobbleCard>
        <WobbleCard containerClassName="div3">
          <p>Tech enthusiast with a passion for development.</p>
        </WobbleCard>
        <WobbleCard containerClassName="div4">
          <p>Tech enthusiast with a passion for development.</p>
        </WobbleCard>
        <WobbleCard containerClassName="div5">
          <p>Tech enthusiast with a passion for development.</p>
        </WobbleCard>
      </div>
    </section>
  );
};
export default InfoCard;
