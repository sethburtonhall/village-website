import { MapPinned, CalendarCheck, TrendingUp } from 'lucide-react';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MagicCard } from '@/components/ui/magic-card';
import { MotionWrapper } from '@/components/MotionWrapper';

const PERKS = [
  {
    icon: MapPinned,
    title: 'Get Discovered',
    desc: 'Put your space in front of event organizers actively searching for the perfect venue.',
  },
  {
    icon: CalendarCheck,
    title: 'Streamline Bookings',
    desc: 'Manage inquiries, confirm details, and track your bookings in one simple dashboard.',
  },
  {
    icon: TrendingUp,
    title: 'Fill Your Calendar',
    desc: 'Turn empty time slots into booked events and grow your venue revenue.',
  },
];

export function VenuePerks() {
  return (
    <section className="bg-stone-100 dark:bg-stone-900">
      <div className="container mx-auto max-w-6xl space-y-12 text-center">
        <div className="stack">
          <p className="text-sm font-bold uppercase tracking-wide text-village-venues">
            For Venue Owners
          </p>
          <h2>Why list on Village Venues?</h2>
          <p className="block-p text-muted-foreground">
            Everything you need to grow your event space business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PERKS.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <MotionWrapper key={index} index={index}>
                <MagicCard
                  className="cursor-default"
                  gradientColor="#FF6B3520"
                  gradientFrom="#FF6B35"
                  gradientTo="#FF9A6C"
                >
                  <CardHeader className="flex flex-1 flex-col items-center justify-center">
                    <Icon className="mb-4 size-8 text-village-venues" />
                    <CardTitle className="text-xl">{perk.title}</CardTitle>
                    <CardDescription>{perk.desc}</CardDescription>
                  </CardHeader>
                </MagicCard>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
