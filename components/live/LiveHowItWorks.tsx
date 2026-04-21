import { MotionWrapper } from '@/components/MotionWrapper';

const STEPS = [
  {
    number: '01',
    title: 'Get Village',
    desc: 'Sign up for any paid Village plan. Clean, simple, ad-free — no participant accounts required.',
  },
  {
    number: '02',
    title: 'Enable Village Live',
    desc: 'Add Village Live to your plan for $5/mo. Available as an add-on — coming soon.',
  },
  {
    number: '03',
    title: 'Go live on event day',
    desc: 'Open Mission Control from your event dashboard, tap Go Live, and your attendees see it instantly.',
  },
];

export function LiveHowItWorks() {
  return (
    <div className="bg-[#0a0a0a] px-6 py-20">
      <div className="mx-auto max-w-2xl space-y-16">
        <MotionWrapper>
          <div className="space-y-2">
            <p className="font-mono text-xs uppercase tracking-widest text-village-live">Setup</p>
            <h2 className="text-3xl font-bold text-white">Three steps to go live</h2>
          </div>
        </MotionWrapper>

        <div className="relative">
          {STEPS.map((step, index) => (
            <MotionWrapper key={index} index={index}>
              <div className="relative flex gap-8">
                {/* Number + connecting line */}
                <div className="flex flex-col items-center">
                  <span className="font-signature text-5xl font-bold leading-none text-village-live">
                    {step.number}
                  </span>
                  {index < STEPS.length - 1 && (
                    <div className="mt-3 w-px flex-1 bg-village-live/20" />
                  )}
                </div>

                {/* Content */}
                <div className={`space-y-2 pt-1 ${index < STEPS.length - 1 ? 'pb-16' : ''}`}>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="leading-relaxed text-white/40">{step.desc}</p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}
