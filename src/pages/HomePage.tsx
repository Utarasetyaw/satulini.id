import type { FC } from 'react';

// Impor semua komponen bagian
import { HeroSection } from '../components/home/HeroSection';
import { TrustedBySection } from '../components/home/TrustedBySection';
import { ValueSection } from '../components/home/ValueSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { CTASection } from '../components/home/CTASection';

const HomePage: FC = () => {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <ValueSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default HomePage;