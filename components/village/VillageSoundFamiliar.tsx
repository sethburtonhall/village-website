import { MotionWrapper } from '@/components/MotionWrapper';
import { Ban, UserX, RefreshCw, MailX } from 'lucide-react';

const painPoints = [
  {
    icon: Ban,
    heading: 'Ads all over your sign-up link',
    body: "You send the link, your community clicks it, and the first thing they see is ads you didn't put there.",
  },
  {
    icon: UserX,
    heading: 'Participants give up before signing up',
    body: "A confusing form, too many steps, no idea what they're looking at — and they just... don't.",
  },
  {
    icon: RefreshCw,
    heading: 'Rebuilding the same event from scratch',
    body: 'Your fall schedule looks exactly like your spring schedule. You built it twice anyway.',
  },
  {
    icon: MailX,
    heading: 'Reminders that never arrive',
    body: 'You sent the reminder. It landed in spam. Nobody showed up. You followed up manually — again.',
  },
];

export function VillageSoundFamiliar() {
  return (
    <section className="bg-stone-50 py-16">
      <div className="container mx-auto max-w-6xl space-y-12 md:text-center">
        <MotionWrapper>
          <div className="stack">
            <h2 className="text-3xl font-bold md:text-4xl">
              Organizing your community shouldn&apos;t feel like this.
            </h2>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <MotionWrapper key={index} index={index}>
                <div className="flex h-full flex-col items-start gap-4 rounded-xl border border-stone-200 bg-white p-6 md:items-center md:text-center">
                  <Icon className="size-8 text-red-400" />
                  <h3 className="text-base font-semibold text-stone-800">{point.heading}</h3>
                  <p className="text-sm leading-relaxed text-stone-500">{point.body}</p>
                </div>
              </MotionWrapper>
            );
          })}
        </div>

        <MotionWrapper>
          <p className="ml-2 text-xl font-medium text-stone-600">
            <span className="font-bold text-primary-600">Village</span> fixes all of this.
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
}
