import { cn } from '@/lib/utils';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Waitlist } from '@/components/Waitlist';
import { Features } from '@/components/Features';
import { Communities } from '@/components/Communities';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';
import { DotPattern } from '@/components/ui/dot-pattern';
import { CookieToast } from '@/components/CookieToast';
import { WelcomeToast } from '@/components/WelcomeToast';

export default function Home() {
  return (
    <div className="min-h-screen">
      <WelcomeToast />
      <CookieToast />
      <Header />

      <div className="relative">
        <Hero />
        <HowItWorks />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn('[mask-image:linear-gradient(to_bottom_right,white,transparent,white)]')}
          // className={cn('[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]')}
        />
      </div>

      <Waitlist />

      <div className="relative">
        <Features />
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn('[mask-image:linear-gradient(to_bottom_right,white,transparent,white)]')}
          // className={cn('[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]')}
        />
      </div>

      <Communities />

      <div className="relative">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn('[mask-image:linear-gradient(to_bottom_right,white,transparent,white)]')}
          // className={cn('[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]')}
        />
        <Pricing />
      </div>
      <Waitlist />
      <Footer />
    </div>
  );
}
