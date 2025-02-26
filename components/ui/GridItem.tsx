import { GlowingEffect } from '@/components/ui/glowing-effect';
import { BgAnimation } from './bg-animation';
import { Vortex } from './bg-vortex';

interface GridItemProps {
  id: number;
  area?: string;
  img?: string;
  imgClassName?: string;
  title: string;
  description?: React.ReactNode;
}

export const GridItem = ({ id, area, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          {id === 3 && <BgAnimation></BgAnimation>}

          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-Cutive-Mono -tracking-4 md:text-2xl/[1.875rem] text-balance text-white dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-text_gray_200 dark:text-neutral-400"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

/*DIV DO ICONE*
<div className=" w-fit rounded-lg border border-gray-600 p-2 "> 
      <img
      src={img}
      alt="img"
      className={imgClassName}
      height={26}
      width={26}
      />
</div> */
