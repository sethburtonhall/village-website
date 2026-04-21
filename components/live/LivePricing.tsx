import * as motion from 'motion/react-client';
import { MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LivePricing() {
  return (
    <div className="bg-[#0a0a0a] px-6 py-20">
      <div className="mx-auto max-w-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-village-live/30 bg-village-live/5 p-10 text-center shadow-[0_0_60px_rgba(161,22,109,0.1)]"
        >
          <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-village-live/35 bg-village-live/15 px-3 py-1 text-xs font-medium text-village-live/80">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-village-live" />
            Coming Soon
          </div>

          <div className="flex items-baseline justify-center gap-1">
            <span className="font-logo text-6xl font-bold text-white">$5</span>
            <span className="text-lg text-white/50">/ month</span>
          </div>
          <p className="text-sm text-white/50">Add-on for any paid Village plan.</p>
          <p className="text-xs text-white/50">
            Join the Village waitlist — we&apos;ll let you know the moment Village Live is ready.
          </p>

          <Button variant="live" size="lg" asChild>
            <a href="https://www.usevillage.app/#waitlist">
              Join the Waitlist
              <MoveRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
