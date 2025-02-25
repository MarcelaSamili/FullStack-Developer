import HomePage from '@/components/HomePage';
import InfoCard from '@/components/InfoCard';
import { FollowerPointerCard } from '@/components/ui/following-pointer';

export default function Home() {
  return (
    <main className="relative bg-bg_primary justify-center items-center ">
      <div className="relative z-10 justify-center items-center bg-bg_secondary ml-10 mr-10 ">
        <FollowerPointerCard>
          <HomePage />
          <InfoCard />
        </FollowerPointerCard>
      </div>
    </main>
  );
}
