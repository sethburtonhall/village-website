'use client';

import { useState, useRef, useCallback } from 'react';
import { ClipboardList, Radio, RotateCcw } from 'lucide-react';
import * as motion from 'motion/react-client';

// ─── Data ─────────────────────────────────────────────────────────────────────

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
];

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

const TIMELINE_ACTIVITIES = [
  'Welcome & Introductions',
  'Keynote Address',
  'Panel Discussion',
  'Q&A Session',
  'Closing Remarks',
];

const POLL_OPTIONS = [
  { label: 'Strongly Agree', pct: 68 },
  { label: 'Agree', pct: 22 },
  { label: 'Neutral', pct: 7 },
  { label: 'Disagree', pct: 3 },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function GetVillageButton() {
  return (
    <a
      href="https://www.usevillage.app"
      className="bg-village-live hover:bg-village-live/90 inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold text-white transition-colors"
    >
      Get Village →
    </a>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
  standard,
  index,
}: {
  icon: string;
  title: string;
  desc: string;
  standard?: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className="relative flex flex-col gap-2 rounded-xl border border-white/5 bg-white/5 p-5 text-left"
    >
      {standard && (
        <div className="border-village-live/15 bg-village-live/15 text-village-live/80 absolute right-3 top-3 flex items-center gap-0 rounded-full border px-3 py-1 text-xs font-medium">
          <ClipboardList className="mr-1 inline h-3 w-3" />
          Standard
        </div>
      )}
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="pr-14 text-sm font-semibold text-white">{title}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-white/50">{desc}</p>
      </div>
    </motion.div>
  );
}

function CrowdMeterDemo() {
  const [counts, setCounts] = useState({ '🔥': 0, '👏': 0, '❤️': 0 });
  const [floats, setFloats] = useState<{ id: number; emoji: string; x: number }[]>([]);
  const nextId = useRef(0);

  const handleReaction = useCallback((emoji: '🔥' | '👏' | '❤️') => {
    setCounts((c) => ({ ...c, [emoji]: c[emoji] + 1 }));
    const id = nextId.current++;
    const x = 20 + Math.random() * 60;
    setFloats((f) => [...f, { id, emoji, x }]);
    setTimeout(() => setFloats((f) => f.filter((fl) => fl.id !== id)), 2400);
  }, []);

  const total = counts['🔥'] + counts['👏'] + counts['❤️'];

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-white/30">
        Live Demo
      </p>
      <p className="mb-6 text-sm font-semibold text-white">Crowd Meter</p>

      {/* Float container */}
      <div className="relative mb-4 min-h-40 flex-1 overflow-hidden rounded-xl border border-white/5 bg-[#0a0a0a]">
        <p className="absolute inset-0 flex items-center justify-center text-xs text-white/20">
          {total === 0 ? 'Tap a reaction below ↓' : `${total} reaction${total !== 1 ? 's' : ''}`}
        </p>
        {floats.map((fl) => (
          <span
            key={fl.id}
            className="pointer-events-none absolute bottom-2 text-xl"
            style={{
              left: `${fl.x}%`,
              animation: 'floatUp 2.2s ease-out forwards',
            }}
          >
            {fl.emoji}
          </span>
        ))}
      </div>

      {/* Reaction buttons */}
      <div className="flex gap-3">
        {(['🔥', '👏', '❤️'] as const).map((emoji) => (
          <button
            key={emoji}
            onClick={() => handleReaction(emoji)}
            className="hover:border-village-live/30 hover:bg-village-live/10 flex flex-1 flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/5 py-3 transition-all active:scale-95"
          >
            <span className="text-xl">{emoji}</span>
            <span className="font-mono text-xs text-white/40">{counts[emoji]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function BroadcastDemo() {
  const [showing, setShowing] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const messages = [
    {
      title: 'Organizer Message',
      content: "Please make your way to the main hall - we're starting in 5 minutes!",
    },
    {
      title: 'Schedule Update',
      content: 'The keynote speaker is running late. Coffee break extended!',
    },
    {
      title: 'Last Call',
      content: "Networking session ends in 15 minutes. Don't forget to grab your swag!",
    },
  ];

  const sendBroadcast = () => {
    if (showing) return;
    setShowing(true);
    setAnimatingOut(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setAnimatingOut(true);
      setTimeout(() => {
        setShowing(false);
        setAnimatingOut(false);
        setMessageIndex((prev) => (prev + 1) % messages.length);
      }, 300);
    }, 3000);
  };

  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-white/25">
        Live Demo
      </p>
      <p className="mb-6 text-sm font-semibold text-white">Broadcast</p>

      {/* Mock event screen */}
      <div className="relative mb-4 min-h-40 overflow-hidden rounded-xl border border-white/5 bg-[#0a0a0a]">
        {/* Broadcast banner */}
        {(showing || animatingOut) && (
          <div
            className={`border-village-live/20 bg-village-live absolute inset-x-0 top-0 flex items-start gap-3 border-b px-4 py-3 ${
              animatingOut ? 'slide-out' : 'slide-in'
            }`}
          >
            <span className="text-base">{'\ud83d\udce3'}</span>
            <div>
              <p className="text-sm font-semibold text-white">{messages[messageIndex].title}</p>
              <p className="text-xs text-white/80">{messages[messageIndex].content}</p>
            </div>
          </div>
        )}
        <div className="p-4">
          <p className="text-xs text-white/20">Attendee event screen</p>
          <div className="mt-3 space-y-2">
            {['Welcome', 'Keynote', 'Panel', 'Q&A', 'Closing'].map((item) => (
              <div key={item} className="h-6 rounded bg-white/5" />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={sendBroadcast}
        disabled={showing}
        className="border-village-live/30 bg-village-live/10 text-village-light hover:bg-village-live/20 mt-auto w-full rounded-xl border py-2.5 text-sm font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-40"
      >
        {showing ? 'Sent to all screens ✓' : 'Send Broadcast →'}
      </button>
    </div>
  );
}

function TimelineDemo() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-white/25">
        Live Demo
      </p>
      <p className="mb-6 text-sm font-semibold text-white">Live Timeline</p>

      <div className="mb-4 flex-1 space-y-2">
        {TIMELINE_ACTIVITIES.map((activity, i) => (
          <div
            key={activity}
            className={`flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 transition-all duration-300 ${
              i === current
                ? 'border-village-live/30 bg-village-live/10 border'
                : i < current
                  ? 'border-village-live/30 opacity-30'
                  : 'border-village-live/30 opacity-50'
            }`}
          >
            <div
              className={`h-2 w-2 flex-shrink-0 rounded-full transition-colors duration-300 ${
                i === current ? 'bg-village-live' : i < current ? 'bg-white/20' : 'bg-white/10'
              }`}
            />
            <span className="text-xs leading-5 text-white">{activity}</span>
            <span
              className={`bg-village-live/20 text-village-live ml-auto rounded-full px-1.5 py-0.5 font-mono text-xs font-bold transition-all duration-300 ${
                i === current ? 'scale-100 transform opacity-100' : 'scale-95 transform opacity-0'
              }`}
            >
              NOW
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() =>
          current === TIMELINE_ACTIVITIES.length - 1
            ? setCurrent(0)
            : setCurrent((c) => Math.min(c + 1, TIMELINE_ACTIVITIES.length - 1))
        }
        className="border-village-live/30 bg-village-live/10 text-village-light hover:bg-village-live/20 w-full rounded-xl border py-2.5 text-sm font-semibold transition-all"
      >
        {current === TIMELINE_ACTIVITIES.length - 1 ? 'Start Over' : 'Advance'}
      </button>
    </div>
  );
}

function PollDemo() {
  const [pollOptions, setPollOptions] = useState(POLL_OPTIONS);
  const [isSpinning, setIsSpinning] = useState(false);

  const randomizeResults = () => {
    setIsSpinning(true);
    const total = 100;
    const newOptions = [...POLL_OPTIONS];

    // Generate random percentages that sum to 100
    let remaining = total;
    newOptions.forEach((opt, i) => {
      if (i === newOptions.length - 1) {
        opt.pct = remaining;
      } else {
        const max = Math.min(remaining - (newOptions.length - i - 1), 70);
        const min = Math.max(5, remaining - (newOptions.length - i) * 70);
        opt.pct = Math.floor(Math.random() * (max - min + 1)) + min;
        remaining -= opt.pct;
      }
    });

    setPollOptions(newOptions);
    setTimeout(() => setIsSpinning(false), 500);
  };
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-white/25">
        Live Demo
      </p>
      <p className="mb-4 text-sm font-semibold text-white">Polls</p>
      <p className="mb-5 text-xs text-white/50">
        &ldquo;The event agenda was well-communicated.&rdquo;
      </p>

      <div className="flex-1 space-y-3">
        {pollOptions.map((opt, i) => (
          <div key={opt.label}>
            <div className="mb-1 flex justify-between text-xs">
              <span className="text-white/60">{opt.label}</span>
              <span className="font-mono text-white/40">{opt.pct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="bg-village-live h-full rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${opt.pct}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={randomizeResults}
        className="border-village-live/30 bg-village-live/10 text-village-light hover:bg-village-live/20 absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg border transition-all"
      >
        <RotateCcw className={`h-4 w-4 ${isSpinning ? 'animate-spin-reverse' : ''}`} />
      </button>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LivePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Top brand bar */}
      <div className="bg-village-live h-1" />

      {/* ─── Note: using <div> throughout (not <section>) to avoid global section styles) ─── */}
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="border-village-live/25 bg-village-live/10 flex size-10 items-center justify-center rounded-lg border">
              <Radio className="text-village-live size-5" />
            </div>
            <span className="flex items-center gap-1.5 text-3xl leading-none">
              <span className="font-logo font-extrabold text-white">Village</span>
              <span
                className="text-village-live/80 font-bold uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-mono-brand), monospace' }}
              >
                Live
              </span>
            </span>
          </div>
          {/* <GetVillageButton /> */}
        </div>
      </header>

      {/* Hero */}
      <div className="bg-[#0a0a0a] px-6 pb-28 pt-12 md:pt-24 md:text-center">
        <div className="mx-auto flex max-w-3xl flex-col gap-6 md:items-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="border-village-live/25 bg-village-live/10 inline-flex h-14 w-14 items-center justify-center rounded-xl border shadow-[0_0_40px_rgba(161,22,109,0.25)]"
          >
            <Radio className="text-village-live h-8 w-8" />
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="border-village-live/30 bg-village-live/10 text-village-live/80 inline-flex w-max items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
          >
            <span className="bg-village-live h-1.5 w-1.5 animate-pulse rounded-full" />
            Coming Soon
          </motion.div>

          {/* <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.14 }}
            className="flex items-center justify-center gap-3 text-3xl leading-none tracking-tight sm:text-5xl"
          >
            <span className="font-logo font-bold text-white">Village</span>
            <span
              className="text-village-live font-bold uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-mono-brand), monospace' }}
            >
              Live
            </span>
          </motion.h1> */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="max-w-2xl text-5xl leading-tight text-white/70 md:mx-auto"
          >
            Real-time event experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mb-10 max-w-xl text-2xl leading-normal text-white/50 md:mx-auto"
          >
            Reactions, polls, Q&amp;A, live timelines, instant broadcasts and more — live to every
            attendee&apos;s screen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center gap-4 md:flex-row md:justify-center"
          >
            <GetVillageButton />
            <a
              href="#features"
              className="text-sm text-white/50 transition-colors hover:text-white/60"
            >
              See all features ↓
            </a>
          </motion.div>
        </div>
      </div>

      {/* All Event Types */}
      <div id="features" className="bg-[#0a0a0a] px-6 py-20 pt-36">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="mb-10 md:text-center"
          >
            <p className="text-village-live mb-3 font-mono text-xs uppercase tracking-widest">
              All event types
            </p>
            <h2 className="text-3xl font-bold text-white">Works with every event</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/50 md:mx-auto">
              These features are available regardless of your event format — from casual meetups to
              large conferences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ALL_FEATURES.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Crowd Meter + Broadcast Demos */}
      <div className="bg-[#0a0a0a] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="mb-10 md:text-center"
          >
            <p className="text-village-live mb-3 font-mono text-xs uppercase tracking-widest">
              Interactive
            </p>
            <h2 className="text-3xl font-bold text-white">Try it yourself</h2>
            <p className="mt-3 max-w-md text-sm text-white/50 md:mx-auto">
              Crowd reactions and organizer messages in real time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3 }}
            >
              <CrowdMeterDemo />
              <p className="mt-3 text-center text-xs text-white/30">
                Every attendee sees reactions float across their screen simultaneously
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <BroadcastDemo />
              <p className="mt-3 text-center text-xs text-white/30">
                Send urgent updates or announcements to everyone instantly
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Standard Event Features */}
      <div className="bg-[#0a0a0a] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="mb-10 md:text-center"
          >
            <p className="text-village-live mb-3 font-mono text-xs uppercase tracking-widest">
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
              <FeatureCard key={f.title} {...f} standard index={i} />
            ))}
          </div>

          <p className="mt-3 text-center text-xs text-white/30">
            Village currently has four event types. More event specific features are coming soon!
          </p>
        </div>
      </div>

      {/* Timeline + Polls Demos */}
      <div className="bg-[#0a0a0a] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="mb-10 md:text-center"
          >
            <p className="text-village-live mb-3 font-mono text-xs uppercase tracking-widest">
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

      {/* How it works */}
      <div className="bg-[#0a0a0a] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="mb-14 md:text-center"
          >
            <p className="text-village-live mb-3 font-mono text-xs uppercase tracking-widest">
              Setup
            </p>
            <h2 className="text-3xl font-bold text-white">How it works</h2>
          </motion.div>

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Connecting line on desktop */}
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/5 md:block" />

            {[
              {
                step: '01',
                title: 'Get Village',
                desc: 'Sign up for any paid Village plan. Clean, simple, ad free — no participant accounts required.',
              },
              {
                step: '02',
                title: 'Enable Village Live',
                desc: 'Add Village Live to your plan for $5/mo. Available as an add-on (coming soon).',
              },
              {
                step: '03',
                title: 'Open Mission Control',
                desc: 'On event day, open Mission Control from your event dashboard and tap Go Live. Your attendees see it instantly.',
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="relative flex flex-col gap-4 md:text-center"
              >
                <div className="border-village-live/30 relative flex h-12 w-12 items-center justify-center rounded-full border bg-[#0a0a0a] md:mx-auto">
                  <span
                    className="text-village-live font-mono text-sm font-bold"
                    style={{ fontFamily: 'var(--font-mono-brand), monospace' }}
                  >
                    {s.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/40">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Callout */}
      <div className="bg-[#0a0a0a] px-6 py-20">
        <div className="mx-auto max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="border-village-live/30 bg-village-live/5 flex flex-col items-center justify-center gap-6 rounded-2xl border p-10 text-center shadow-[0_0_60px_rgba(161,22,109,0.1)]"
          >
            <div className="border-village-live/35 bg-village-live/15 text-village-live/80 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium">
              <span className="bg-village-live h-1.5 w-1.5 animate-pulse rounded-full" />
              Coming Soon
            </div>

            <div className="flex items-baseline justify-center gap-1">
              <span className="font-logo text-6xl font-bold text-white">$5</span>
              <span className="text-lg text-white/50">/ month</span>
            </div>
            <p className="text-sm text-white/50">Add-on for any paid Village plan.</p>
            <p className="text-xs text-white/50">
              Village is currently in private beta. Join the waitlist and we will let you know when
              Village Live is ready.
            </p>

            <a
              href="https://www.usevillage.app/#waitlist"
              className="bg-village-live hover:bg-village-live/90 inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold text-white transition-colors"
            >
              Join the Village Waitlist →
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0a0a0a] p-12 py-8 text-white/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm">
            a{' '}
            <a
              href="https://www.usevillage.app"
              className="text-primary-600 transition-colors hover:text-white/40"
            >
              Village
            </a>{' '}
            product
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()}{' '}
            <a
              href="https://www.roadshowcreative.dev/"
              className="text-[#F5A524] transition-colors hover:underline"
            >
              Roadshow Creative
            </a>
            . All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-100%); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-reverse {
          animation: spin-reverse 0.6s linear;
        }
        .slide-out {
          animation: slideUp 0.3s ease-out forwards;
        }
        .slide-in {
          animation: slideDown 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
