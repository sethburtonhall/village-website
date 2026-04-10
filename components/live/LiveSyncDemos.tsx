import * as motion from 'motion/react-client';
import { TimelineDemo } from '@/components/live/TimelineDemo';
import { PollDemo } from '@/components/live/PollDemo';

export function LiveSyncDemos() {
  return (
    <div className="bg-[#0a0a0a] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3 }}
          className="mb-10 md:text-center"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-village-live">
            Interactive
          </p>
          <h2 className="text-3xl font-bold text-white">Keep everyone in sync</h2>
          <p className="mt-3 max-w-md text-sm text-white/40 md:mx-auto">
            Timeline and polls keep attendees engaged and on the same page.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
          >
            <TimelineDemo />
            <p className="mt-3 text-center text-xs text-white/30">
              Every attendee screen advances with you — no refreshing needed
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <PollDemo />
            <p className="mt-3 text-center text-xs text-white/30">
              Results animate in live as attendees vote from their own devices
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
