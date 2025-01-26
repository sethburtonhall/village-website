'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { MotionWrapper } from '@/components/MotionWrapper';
import { useRef } from 'react';
import {
  HeartHandshake,
  School,
  Users,
  Trophy,
  Church,
  Briefcase,
  MapPin,
  CookingPot,
} from 'lucide-react';
import { communities } from '@/lib/data';

const icons = {
  HeartHandshake,
  School,
  Users,
  Trophy,
  Church,
  Briefcase,
  MapPin,
  CookingPot,
};

export function Communities() {
  // Create two different sequences of communities
  const topRowCommunities = [...communities, ...communities, ...communities, ...communities];
  const bottomRowCommunities = [
    ...communities.slice(Math.floor(communities.length / 2)),
    ...communities.slice(0, Math.floor(communities.length / 2)),
    ...communities.slice(Math.floor(communities.length / 2)),
    ...communities.slice(0, Math.floor(communities.length / 2)),
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ['0%', '-3%']);
  const rightX = useTransform(scrollYProgress, [0, 1], ['-3%', '0%']);

  return (
    <section className="overflow-hidden bg-white py-16">
      <div className="mx-auto space-y-16 text-center">
        <div className="stack">
          <p className="font-bold text-primary-600">Communities</p>
          <h1>From Nonprofits To Pot Lucks, We’ve Got You Covered</h1>
          <p className="block-p">
            It takes a village to bring people together. We&apos;re here to help you build yours.
          </p>
        </div>
        <MotionWrapper>
          <div ref={containerRef} className="relative flex flex-col gap-8">
            {/* First row pair - moves left */}
            <div className="relative">
              <div className="flex overflow-hidden">
                <motion.div style={{ x: leftX }} className="flex gap-4 px-8">
                  {topRowCommunities.map((community, index) => {
                    const Icon = icons[community.icon as keyof typeof icons];
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
                <motion.div style={{ x: leftX }} className="flex translate-x-[-50%] gap-4 px-8">
                  {topRowCommunities.map((community, index) => {
                    const Icon = icons[community.icon as keyof typeof icons];
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

            {/* Second row pair - moves right */}
            <div className="relative">
              <div className="flex overflow-hidden">
                <motion.div style={{ x: rightX }} className="flex gap-4 px-8">
                  {bottomRowCommunities.map((community, index) => {
                    const Icon = icons[community.icon as keyof typeof icons];
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
                <motion.div style={{ x: rightX }} className="flex translate-x-[-50%] gap-4 px-8">
                  {bottomRowCommunities.map((community, index) => {
                    const Icon = icons[community.icon as keyof typeof icons];
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
