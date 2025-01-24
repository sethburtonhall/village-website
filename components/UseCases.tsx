import { cn } from '@/lib/utils';

import { MotionWrapper } from '@/components/MotionWrapper';

import { HeartHandshake, School, Users, Trophy, Church, Briefcase } from 'lucide-react';

import { useCases } from '@/lib/data';

const icons = {
  HeartHandshake,
  School,
  Users,
  Trophy,
  Church,
  Briefcase,
};

export function UseCases() {
  return (
    <section className="bg-white">
      <div className="container mx-auto max-w-6xl space-y-16 text-center">
        <h1>Designed for a variety of use cases</h1>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {useCases.map((useCase, index) => {
            const Icon = icons[useCase.icon as keyof typeof icons];
            return (
              <MotionWrapper
                key={index}
                index={index}
                className={cn('stack items-center', useCase.className, {
                  'md:col-start-2 lg:col-start-auto': index === useCases.length - 2,
                  'md:col-start-3 lg:col-start-auto': index === useCases.length - 1,
                })}
              >
                <Icon className="size-10 text-primary-600" />
                <h3>{useCase.title}</h3>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
