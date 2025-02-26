import { gridItems } from '@/utils';
import { GridItem } from './ui/GridItem';

const InfoCard = () => {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      {gridItems.map(({ id, img, area, title, description }) => (
        <GridItem
          key={id}
          id={id}
          img={img}
          area={area}
          title={title}
          description={description}
        />
      ))}
    </ul>
  );
};
export default InfoCard;
