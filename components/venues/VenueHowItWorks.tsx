import { MotionWrapper } from '@/components/MotionWrapper';

const STEPS = [
  {
    number: '01',
    outcome: 'Fill your calendar',
    title: 'Create your listing',
    desc: 'Add photos, describe your space, set your capacity, and highlight your amenities. Takes a few minutes.',
  },
  {
    number: '02',
    outcome: 'Less back-and-forth',
    title: 'Get discovered',
    desc: 'Appear in the Village Venues directory where organizers are actively searching — no cold outreach, just discoverability.',
  },
  {
    number: '03',
    outcome: 'Built for community',
    title: 'Accept bookings',
    desc: 'Review inquiries and confirm events through your dashboard. Inquiries, availability, confirmations — all in one place.',
  },
];

export function VenueHowItWorks() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-2xl space-y-16">
        <MotionWrapper>
          <div className="stack">
            <p className="font-bold text-village-venues">How it works</p>
            <h2 className="text-3xl font-bold md:text-4xl">List your venue in three steps</h2>
          </div>
        </MotionWrapper>

        <div className="relative">
          {STEPS.map((step, index) => (
            <MotionWrapper key={index} index={index}>
              <div className="relative flex gap-8">
                {/* Number + connecting line */}
                <div className="flex flex-col items-center">
                  <span className="font-signature text-5xl font-bold leading-none text-village-venues">
                    {step.number}
                  </span>
                  {index < STEPS.length - 1 && (
                    <div className="mt-3 w-px flex-1 bg-village-venues/20" />
                  )}
                </div>

                {/* Content */}
                <div className={`space-y-3 pt-1 ${index < STEPS.length - 1 ? 'pb-16' : ''}`}>
                  {/* Outcome pill */}
                  <span className="inline-block rounded-full bg-village-venues/10 px-3 py-1 text-xs font-semibold text-village-venues">
                    {step.outcome}
                  </span>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="leading-relaxed text-stone-500">{step.desc}</p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
