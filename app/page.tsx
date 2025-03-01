import About from '@/components/About';
import Hero from '@/components/Hero';
import Skils from '@/components/Skils';
//import { FollowerPointerCard } from '@/components/ui/following-pointer';

export default function Home() {
  return (
    //<FollowerPointerCard>
    <main className="relative bg-bg_primary ">
      <div className="relative justify-center items-center ml-10 mr-10 ">
        <Hero />
        <About />
        <Skils />
      </div>
    </main>
    //</FollowerPointerCard>
  );
}
//relative z-10 justify-center items-center bg-bg_secondary ml-10 mr-10
//relative bg-bg_primary justify-center items-center
