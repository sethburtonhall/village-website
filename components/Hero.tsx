import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WaitlistForm } from '@/components/WaitlistForm';
import { ArrowBigRight, ArrowBigDown } from 'lucide-react';
import { quickFeatures } from '@/lib/data';

export function Hero() {
  return (
    <section className="pb-20 md:pb-0">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-7xl">
            Group <span className="font-signature text-8xl text-primary-600">sign-ups</span> made
            simple.
          </h2>
          <p className="text-lg">
            Most group signup apps are overcomplicated.{' '}
            <span className="font-logo font-extrabold text-primary-600">Village</span> eliminates
            complexity and streamlines the process of organizing community events.
          </p>
        </div>
      </div>

      {/* Quick Features Section */}

      <div className="mx-auto max-w-6xl space-y-8 text-center">
        <h2>How it works</h2>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
          {quickFeatures.map((feature, index) => (
            <>
              <Card
                key={`card-${index}`}
                className="flex h-[160px] flex-col md:h-[260px] lg:h-[180px]"
              >
                <CardHeader className="flex flex-1 flex-col justify-center">
                  <CardTitle className="font-signature mb-2 text-4xl font-bold text-primary-600">
                    Step {index + 1}
                  </CardTitle>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
              {index < quickFeatures.length - 1 && (
                <div key={`arrow-${index}`} className="flex justify-center px-4">
                  <ArrowBigDown className="block size-10 text-primary-600 md:hidden" />
                  <ArrowBigRight className="hidden size-10 text-primary-600 md:block" />
                </div>
              )}
            </>
          ))}
        </div>
      </div>

      {/* Waitlist Section */}
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <WaitlistForm />
      </div>
    </section>
  );
}
