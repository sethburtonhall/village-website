'use client';

import { useState } from 'react';
import { MotionWrapper } from '@/components/MotionWrapper';
import { communities } from '@/lib/data';

// 8 copies so the 50%-scroll keyframe loops seamlessly
const CAROUSEL_ITEMS = [
  ...communities,
  ...communities,
  ...communities,
  ...communities,
  ...communities,
  ...communities,
  ...communities,
  ...communities,
];

export function VillageCommunities() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="overflow-hidden bg-white py-16">
      <div className="mx-auto space-y-12 md:text-center">
        <MotionWrapper>
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Edge fade masks */}
            <div className="pointer-events-none absolute left-0 z-10 h-full w-32 bg-gradient-to-r from-white to-white/0" />
            <div className="pointer-events-none absolute right-0 z-10 h-full w-32 bg-gradient-to-l from-white to-white/0" />

            <div
              className="flex w-max gap-4 px-8"
              style={{
                animation: 'scroll-left 55s linear infinite',
                animationPlayState: paused ? 'paused' : 'running',
              }}
            >
              {CAROUSEL_ITEMS.map((community, index) => {
                const Icon = community.icon;
                return (
                  <div
                    key={index}
                    className="flex min-w-[150px] flex-col items-center gap-4 rounded-xl p-6"
                  >
                    <Icon className="size-10 text-primary-600" />
                    <h3 className="text-base font-semibold">{community.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper>
          <div className="stack">
            <h2 className="text-3xl font-bold md:text-4xl">
              Churches, schools, sports teams — and everyone in between.
            </h2>
            <p className="block-p">It takes a village. We&apos;re here to help you run yours.</p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
