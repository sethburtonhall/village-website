import * as motion from 'motion/react-client';
import { MotionWrapper } from '@/components/MotionWrapper';
import { MoveDown, MoveRight } from 'lucide-react';

export function VenueHero() {
  return (
    <MotionWrapper
      type="section"
      className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/40 to-stone-100 pb-28 pt-20 dark:from-[#0a0a0a] dark:via-[#1a0f1f] dark:to-[#0f0a1a] md:text-center"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-village-venues/5 via-transparent to-transparent dark:from-village-venues/20 dark:via-village-venues/10" />

      {/* Enhanced orange glow with animation */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 animate-pulse rounded-full bg-village-venues/10 blur-3xl dark:bg-village-venues/30" />

      {/* Additional accent glow */}
      <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-village-venues/5 blur-2xl dark:bg-village-venues/20" />

      <div className="relative mx-auto max-w-3xl space-y-8 px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="inline-flex w-max items-center gap-2 rounded-full border border-village-venues/30 bg-village-venues/10 px-4 py-1.5 text-sm font-medium text-village-venues/80"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-village-venues" />
          Now Live
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-4xl leading-tight text-foreground md:text-5xl lg:text-6xl"
        >
          Your space,
          <br />
          serving your community.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="text-muted-foreground md:text-center"
        >
          Transform your venue into a hub for local events. Connect with organizers, fill your
          calendar, and become a cornerstone of community life.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col items-start gap-3 sm:flex-row md:items-center md:justify-center"
        >
          <a
            href="https://venues.usevillage.app/sign-up"
            className="inline-flex items-center gap-2 rounded-md bg-village-venues px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-village-venues/90 hover:shadow-lg hover:shadow-village-venues/25"
          >
            List Your Venue
            <MoveRight className="h-4 w-4" />
          </a>
          <a
            href="#venue-directory"
            className="inline-flex items-center gap-2 rounded-md border border-village-venues/50 px-6 py-2.5 text-sm font-semibold text-foreground/80 transition-all hover:border-village-venues hover:bg-village-venues/10 hover:text-foreground"
          >
            Browse Venues
            <MoveDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </MotionWrapper>
  );
}
