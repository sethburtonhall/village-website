import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { UseCases } from '@/components/UseCases';
import { Pricing } from '@/components/Pricing';
import { WaitlistForm } from '@/components/WaitlistForm';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <UseCases />
      <Pricing />
      <section className="bg-primary-600">
        <WaitlistForm type="dark" />
      </section>
      <Footer />
    </div>
  );
}
