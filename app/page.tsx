import About from '@/components/About';
import Hero from '@/components/Hero';
import Skils from '@/components/Skils';
import ScrollMooter from '@/components/ui/scroll-mooter';
//import { FollowerPointerCard } from '@/components/ui/following-pointer';

export default function Home() {
  return (
    //<FollowerPointerCard>
    <main className="relative bg-bg_primary ">
      <div className="relative justify-center items-center ml-10 mr-10 ">
        <ScrollMooter>
          <Hero />
          <About />
          <Skils />
        </ScrollMooter>
      </div>
    </main>
    //</FollowerPointerCard>
  );
}
//relative z-10 justify-center items-center bg-bg_secondary ml-10 mr-10
//relative bg-bg_primary justify-center items-center
