'use client';

import { motion } from 'motion/react';
import { MotionWrapper } from '@/components/MotionWrapper';
import { communities } from '@/lib/data';

export function VillageCommunities() {
  const topRowCommunities = [...communities, ...communities, ...communities, ...communities];

  return (
    <section className="overflow-hidden bg-white py-16">
      <div className="mx-auto space-y-16 md:text-center">
        <div className="stack">
          <p className="font-bold text-primary-600">Communities</p>
          <h1>Churches, schools, sports teams — and everyone in between.</h1>
          <p className="block-p">It takes a village. We&apos;re here to help you run yours.</p>
        </div>
        <MotionWrapper>
          <div className="relative flex flex-col gap-8">
            {/* First row - moves left */}
            <div className="relative">
              <div className="flex overflow-hidden">
                {/* Left mask */}
                <div className="pointer-events-none absolute left-0 z-10 h-full w-32 bg-gradient-to-r from-white to-white/0" />
                {/* Right mask */}
                <div className="pointer-events-none absolute right-0 z-10 h-full w-32 bg-gradient-to-l from-white to-white/0" />
                <motion.div
                  animate={{ x: [0, '-50%'] }}
                  transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
                  className="flex gap-4 px-8"
                >
                  {topRowCommunities.map((community, index) => {
                    const Icon = community.icon;
                    return (
                      <div
                        key={index}
                        className="flex min-w-[150px] flex-col items-center gap-4 rounded-xl bg-white/5 p-6"
                      >
                        <Icon className="size-10 text-primary-600" />
                        <h3 className="text-base font-semibold">{community.title}</h3>
                      </div>
                    );
                  })}
                </motion.div>
                <motion.div
                  animate={{ x: [0, '-50%'] }}
                  transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
                  className="flex translate-x-[-50%] gap-4 px-8"
                >
                  {topRowCommunities.map((community, index) => {
                    const Icon = community.icon;
                    return (
                      <div
                        key={`dup-${index}`}
                        className="flex min-w-[150px] flex-col items-center gap-4 rounded-xl bg-white/5 p-6"
                      >
                        <Icon className="size-10 text-primary-600" />
                        <h3 className="text-base font-semibold">{community.title}</h3>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
