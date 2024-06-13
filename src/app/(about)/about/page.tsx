import { Metadata } from 'next';
import { CollaborateWithUs } from './components/CollaborateWithUs';
import { CollectiveBuying } from './components/CollectiveBuying';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { RealStories } from './components/RealStories';
import { TrustedBrands } from './components/TrustedBrands';
import { FAQ } from './components/FAQ';

export const metadata: Metadata = {
  title: 'Home',
};

const Page = () => {
  return (
    <>
      <HeroSection />
      <TrustedBrands />
      <CollectiveBuying />
      <HowItWorks />
      <RealStories />
      <CollaborateWithUs />
      <FAQ />
    </>
  );
};

export default Page;
