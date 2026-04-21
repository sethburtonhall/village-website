import * as motion from 'motion/react-client';
import { LiveFeatureCard } from '@/components/live/LiveFeatureCard';

const ALL_FEATURES = [
  {
    icon: '🔴',
    title: 'Go Live',
    desc: 'One tap to start. Attendees see the event flip live the moment you begin.',
  },
  {
    icon: '👥',
    title: "Who's Here",
    desc: "Check-in counter synced from Village signups. Always know who's arrived.",
  },
  {
    icon: '🔥',
    title: 'Crowd Meter',
    desc: "Real-time emoji reactions that float across every attendee's screen.",
  },
  {
    icon: '📣',
    title: 'Broadcast',
    desc: "Send an instant message to every attendee's screen, mid-event.",
  },
  {
    icon: '⚡',
    title: 'Live Timeline',
    desc: 'Advance activities in real time — every screen stays in sync.',
    standard: true,
  },
  {
    icon: '⏱',
    title: 'Speaker Timer',
    desc: 'Track presentation time without leaving Mission Control.',
    standard: true,
  },
  {
    icon: '❓',
    title: 'Q&A Queue',
    desc: 'Attendees submit questions live. You control what gets answered.',
    standard: true,
  },
  {
    icon: '📊',
    title: 'Polls',
    desc: 'Launch a poll, collect votes, and reveal results on every screen.',
    standard: true,
  },
];

export function LiveAllFeatures() {
  return (
    <div id="features" className="bg-[#0a0a0a] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3 }}
          className="mb-10 md:text-center"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-village-live">
            Features
          </p>
          <h2 className="text-3xl font-bold text-white">Everything in Village Live</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/50 md:mx-auto">
            Four features work with any event. The rest unlock for standard events with structured
            agendas, speakers, and audience participation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ALL_FEATURES.map((f, i) => (
            <LiveFeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-white/30">
          Standard event features are marked with a badge. More event types coming soon.
        </p>
      </div>
    </div>
  );
}
