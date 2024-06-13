import { Metadata } from 'next';
import { HeroSection } from './components/HeroSection';
import { Sustainability } from './components/Sustainability';
import { MakeAdifference } from './components/MakeAdifference';
import { Mission } from './components/Mission';
import { OurNumbers } from './components/OurNumbers';
import { Team } from './components/Team';

export const metadata: Metadata = {
  title: 'About Us',
};

const Page = () => {
  return (
    <>
      <HeroSection />
      <MakeAdifference />
      <Mission />
      <OurNumbers />
      <Sustainability />
      <Team />
    </>
  );
};

export default Page;
