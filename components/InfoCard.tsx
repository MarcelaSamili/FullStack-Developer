/*import { gridItems } from '@/utils';
import { GridItem } from './ui/GridItem';*/

import { WobbleCard } from './ui/wobble-card';

/*const InfoCard = () => {
  return (
    <div>
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        {gridItems.map(({ id, area, title, description }) => (
          <GridItem
            key={id}
            id={id}
            area={area}
            title={title}
            description={description}
          />
        ))}
      </ul>
    </div>
  );
};
export default InfoCard;*/
//grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2

const InfoCard = () => {
  return (
    <section className="relative h-dvh">
      <div className="relative boxGrid">
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
