import Case_Studies from '@/components/Case_Studies';
import Introductory from '@/components/Introductory';
import Services from '@/components/Services';
import Team from '@/components/Team';

export default function Home() {
  return (
    <main>
      <Introductory />
      <Services />
      <Team />
      <Case_Studies />
    </main>
  );
}
