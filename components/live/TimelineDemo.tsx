'use client';

import { useState } from 'react';

const TIMELINE_ACTIVITIES = [
  'Welcome & Introductions',
  'Keynote Address',
  'Panel Discussion',
  'Q&A Session',
  'Closing Remarks',
];

export function TimelineDemo() {
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
                ? 'border border-village-live/30 bg-village-live/10'
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
              className={`ml-auto rounded-full bg-village-live/20 px-1.5 py-0.5 font-mono text-xs font-bold text-village-live transition-all duration-300 ${
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
        className="w-full rounded-xl border border-village-live/30 bg-village-live/10 py-2.5 text-sm font-semibold text-white transition-all hover:bg-village-live/20"
      >
        {current === TIMELINE_ACTIVITIES.length - 1 ? 'Start Over' : 'Advance'}
      </button>
    </div>
  );
}
