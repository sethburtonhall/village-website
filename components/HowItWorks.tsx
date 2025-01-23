import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { MotionWrapper } from '@/components/MotionWrapper';

import { ArrowBigRight, ArrowBigDown } from 'lucide-react';

import { quickFeatures } from '@/lib/data';

export function HowItWorks() {
  return (
    <MotionWrapper type="section" className="pt-8">
      <div className="mx-auto max-w-6xl space-y-8 text-center">
        <h1>How it works</h1>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
          {quickFeatures.map((feature, index) => (
            <>
              <MotionWrapper key={`card-${index}`} index={index}>
                <Card className="flex h-[160px] flex-col md:h-[260px] lg:h-[180px]">
                  <CardHeader className="flex flex-1 flex-col justify-center">
                    <CardTitle className="font-signature mb-2 text-4xl font-bold text-primary-600">
                      Step {index + 1}
                    </CardTitle>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </MotionWrapper>
              {index < quickFeatures.length - 1 && (
                <MotionWrapper
                  key={`arrow-${index}`}
                  index={index}
                  className="flex justify-center px-4"
                >
                  <ArrowBigDown className="block size-10 text-primary-600 md:hidden" />
                  <ArrowBigRight className="hidden size-10 text-primary-600 md:block" />
                </MotionWrapper>
              )}
            </>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
