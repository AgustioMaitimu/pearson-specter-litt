import Case_Studies from '@/components/Case_Studies';
import Contact from '@/components/Contact';
import Introductory from '@/components/Introductory';
import Quote from '@/components/Quote';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Transparent from '@/components/Transparent';

export default function Home() {
  return (
    <main id="main" className="flex flex-col bg-[#F1EBDF]">
      <Introductory />
      <Services />
      <Team />
      <Case_Studies />
      <Contact />
      <Quote />
      <Transparent />
    </main>
  );
}
