import { Camera, Search, CheckCircle } from 'lucide-react';
import { MotionWrapper } from '@/components/MotionWrapper';

const STEPS = [
  {
    step: '01',
    icon: Camera,
    title: 'Create your listing',
    desc: 'Add photos, describe your space, set capacity, and highlight your amenities.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Get discovered',
    desc: 'Appear in the Village Venues directory where organizers are actively searching.',
  },
  {
    step: '03',
    icon: CheckCircle,
    title: 'Accept bookings',
    desc: 'Review inquiries and confirm events through your Village Venues dashboard.',
  },
];

export function VenueHowItWorks() {
  return (
    <section className="bg-transparent">
      <div className="container mx-auto max-w-6xl space-y-12 text-center">
        <div className="stack">
          <p className="text-sm font-bold uppercase tracking-wide text-village-venues">
            How It Works
          </p>
          <h2>List your venue in three steps</h2>
          <p className="block-p text-muted-foreground">
            Getting your space in front of event organizers takes just a few minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <MotionWrapper key={index} index={index}>
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-village-venues/10">
                      <Icon className="size-6 text-village-venues" />
                    </div>
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-village-venues text-[10px] font-bold text-white">
                      {step.step.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
