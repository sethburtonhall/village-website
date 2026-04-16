import Image from 'next/image';
import { MotionWrapper } from '@/components/MotionWrapper';
import { CircleCheck } from 'lucide-react';

const highlights = [
  'No account or password required',
  'No ads — ever',
  'Automatic confirmation sent on sign-up',
];

export function VillageProductPreview() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: copy */}
          <MotionWrapper index={0}>
            <div className="space-y-8">
              <div className="stack">
                <p className="font-bold text-primary-600">The participant view</p>
                <h2 className="text-3xl font-bold md:text-4xl">
                  What your community actually sees
                </h2>
                <p className="">
                  Clean, focused, and fast. Your participants click the link, pick their spot, and
                  they&apos;re done — no friction, no distractions.
                </p>
              </div>

              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CircleCheck className="size-5 shrink-0 text-primary-600" />
                    <span className="text-sm font-medium text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </MotionWrapper>

          {/* Right: screenshot */}
          <MotionWrapper index={1}>
            <div className="relative overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl ring-1 ring-white/10">
              <div className="max-h-[640px] overflow-hidden">
                <Image
                  src="/images/signup-preview.png"
                  alt="Village event sign-up page — the participant experience"
                  width={1660}
                  height={2970}
                  className="w-full"
                  priority
                />
              </div>
              {/* Fade suggesting more below */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-900/70 to-transparent" />
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
