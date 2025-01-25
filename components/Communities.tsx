'use client';

import { motion } from 'framer-motion';
import { MotionWrapper } from '@/components/MotionWrapper';
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

function CommunityRow({ items, direction = 1 }: { items: typeof communities; direction?: number }) {
  return (
    <motion.div
      initial={{ x: direction > 0 ? '0%' : '-100%' }}
      animate={{ x: direction > 0 ? '-100%' : '0%' }}
      transition={{
        duration: 70,
        repeat: Infinity,
        ease: 'linear',
      }}
      className="flex gap-16 px-8"
    >
      {items.map((community, index) => {
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
  );
}

export function Communities() {
  // Double the items to create a seamless loop
  const doubledCommunities = [...communities, ...communities];

  return (
    <section className="overflow-hidden bg-white py-16">
      <div className="max-w-9xl container mx-auto space-y-16 text-center">
        <div className="stack">
          <h1>Your Communities</h1>
          <p className="text-lg">
            It takes a village to bring people together. We're here to help you build yours.
          </p>
        </div>
        <MotionWrapper>
          <div className="relative flex flex-col gap-8">
            {/* First row - moves left */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white to-transparent" />
              <div className="flex overflow-hidden">
                <CommunityRow items={doubledCommunities} direction={1} />
                <CommunityRow items={doubledCommunities} direction={1} />
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-48 bg-gradient-to-l from-white via-white to-transparent" />
            </div>

            {/* Second row - moves right */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-48 bg-gradient-to-r from-white via-white to-transparent" />
              <div className="flex overflow-hidden">
                <CommunityRow items={doubledCommunities} direction={-1} />
                <CommunityRow items={doubledCommunities} direction={-1} />
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-48 bg-gradient-to-l from-white via-white to-transparent" />
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
