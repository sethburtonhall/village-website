import { Fragment } from 'react';
import { MotionWrapper } from '@/components/MotionWrapper';

const PERKS = [
  {
    label: '01',
    title: 'Fill your calendar',
    desc: 'Stop leaving rooms empty. Get in front of organizers actively searching for spaces like yours — no cold outreach, just discoverability.',
  },
  {
    label: '02',
    title: 'Less back-and-forth',
    desc: 'Inquiries, availability, confirmations — all through one simple dashboard. No spreadsheets, no phone tag.',
  },
  {
    label: '03',
    title: 'Built for mission-driven spaces',
    desc: "Churches, schools, community centers. We're not a corporate booking platform — we're built for spaces that put community first.",
  },
];

export function VenuePerks() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_1px_1fr_1px_1fr]">
          {PERKS.map((perk, index) => (
            <Fragment key={perk.label}>
              <MotionWrapper index={index}>
                <div className="space-y-4 border-t-2 border-village-venues/30 py-8 lg:border-none lg:px-10 lg:py-0">
                  <span className="font-signature text-4xl font-bold text-village-venues/40">
                    {perk.label}
                  </span>
                  <h3 className="text-xl font-bold">{perk.title}</h3>
                  <p className="leading-relaxed text-stone-500">{perk.desc}</p>
                </div>
              </MotionWrapper>
              {index < PERKS.length - 1 && (
                <div className="hidden w-px bg-stone-200 lg:block" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
