import Case_Studies from '@/components/Case_Studies';
import Contact from '@/components/Contact';
import Introductory from '@/components/Introductory';
import Services from '@/components/Services';
import Team from '@/components/Team';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Introductory />
      <Services />
      <Team />
      <Case_Studies />
      <Contact />
    </main>
  );
}
