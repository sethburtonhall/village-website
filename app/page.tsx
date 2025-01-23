import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Waitlist } from '@/components/Waitlist';
import { Features } from '@/components/Features';
import { UseCases } from '@/components/UseCases';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <Waitlist />
      <Features />
      <UseCases />
      <Pricing />
      <Waitlist />
      <Footer />
    </div>
  );
}
