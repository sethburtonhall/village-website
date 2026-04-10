import * as motion from 'motion/react-client';
import { LiveFeatureCard } from '@/components/live/LiveFeatureCard';

const STANDARD_FEATURES = [
  {
    icon: '⚡',
    title: 'Live Timeline',
    desc: 'Advance activities in real time — every screen stays in sync.',
  },
  {
    icon: '⏱',
    title: 'Speaker Timer',
    desc: 'Track presentation time without leaving Mission Control.',
  },
  {
    icon: '❓',
    title: 'Q&A Queue',
    desc: 'Attendees submit questions live. You control what gets answered.',
  },
  {
    icon: '📊',
    title: 'Polls',
    desc: 'Launch a poll, collect votes, and reveal results on every screen.',
  },
];

export function LiveStandardFeatures() {
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
            Standard events
          </p>
          <h2 className="text-3xl font-bold text-white">Built for organized events</h2>
          <p className="mt-3 max-w-md text-sm text-white/40 md:mx-auto">
            Standard events include a deeper set of tools for running structured programs with
            agendas, speakers, and audience participation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STANDARD_FEATURES.map((f, i) => (
            <LiveFeatureCard key={f.title} {...f} standard index={i} />
          ))}
        </div>

        <p className="mt-3 text-center text-xs text-white/30">
          Village currently has four event types. More specific event type features coming soon!
        </p>
      </div>
    </div>
  );
}
