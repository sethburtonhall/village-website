import { Building2, CalendarCheck, TrendingUp } from 'lucide-react';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MagicCard } from '@/components/ui/magic-card';
import { MotionWrapper } from '@/components/MotionWrapper';

const PERKS = [
  {
    icon: Building2,
    title: 'Serve Your Community',
    desc: 'Connect with local organizers who need your space for meaningful community events and programs.',
  },
  {
    icon: CalendarCheck,
    title: 'Simplify Administration',
    desc: 'Manage bookings, track availability, and handle inquiries with tools designed for busy administrators.',
  },
  {
    icon: TrendingUp,
    title: 'Maximize Your Impact',
    desc: "Transform underutilized rooms into vibrant community hubs while supporting your organization's mission.",
  },
];

export function VenuePerks() {
  return (
    <section className="bg-transparent">
      <div className="container mx-auto max-w-6xl space-y-12 text-center">
        <div className="stack">
          <p className="text-sm font-bold uppercase tracking-wide text-village-venues">
            For Community Spaces
          </p>
          <h2>Why list on Village Venues?</h2>
          <p className="block-p text-muted-foreground">
            Tools designed to help you serve your community better.
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
                    <CardDescription className="text-muted-foreground">{perk.desc}</CardDescription>
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
