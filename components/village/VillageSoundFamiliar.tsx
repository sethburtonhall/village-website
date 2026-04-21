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
      <div className="container mx-auto max-w-6xl space-y-12">
        <MotionWrapper>
          <h2 className="text-3xl font-bold md:text-center md:text-4xl">Sound familiar?</h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <MotionWrapper key={index} index={index}>
                <div className="space-y-3 border-t-2 border-red-300 pt-5">
                  <div className="flex items-center gap-2.5">
                    <Icon className="size-5 shrink-0 text-red-400" />
                    <h3 className="font-bold text-stone-800">{point.heading}</h3>
                  </div>
                  <p className="leading-relaxed text-stone-500">{point.body}</p>
                </div>
              </MotionWrapper>
            );
          })}
        </div>

        <MotionWrapper>
          <p className="text-xl font-medium text-stone-600 md:text-center">
            <span className="font-bold text-primary-600">Village</span> fixes all of this.
          </p>
        </MotionWrapper>
      </div>
    </section>
  );
}
