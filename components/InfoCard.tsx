import { gridItems } from '@/utils';
import { GridItem } from './ui/GridItem';

const InfoCard = () => {
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
export default InfoCard;
//grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2
