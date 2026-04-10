'use client';

import { useState } from 'react';
import * as motion from 'motion/react-client';
import { RotateCcw } from 'lucide-react';

const BASE_POLL_OPTIONS = [
  { label: 'Strongly Agree', pct: 68 },
  { label: 'Agree', pct: 22 },
  { label: 'Neutral', pct: 7 },
  { label: 'Disagree', pct: 3 },
];

export function PollDemo() {
  const [pollOptions, setPollOptions] = useState(BASE_POLL_OPTIONS);
  const [isSpinning, setIsSpinning] = useState(false);

  const randomizeResults = () => {
    setIsSpinning(true);
    const total = 100;
    const newOptions = BASE_POLL_OPTIONS.map((opt) => ({ ...opt }));

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
                className="h-full rounded-full bg-village-live"
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
        className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg border border-village-live/30 bg-village-live/10 text-white transition-all hover:bg-village-live/20"
      >
        <RotateCcw className={`h-4 w-4 ${isSpinning ? 'animate-spin-reverse' : ''}`} />
      </button>
    </div>
  );
}
