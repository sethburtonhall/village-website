'use client';

import { useState, useRef, useCallback } from 'react';

export function CrowdMeterDemo() {
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
            className="flex flex-1 flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/5 py-3 transition-all hover:border-village-live/30 hover:bg-village-live/10 active:scale-95"
          >
            <span className="text-xl">{emoji}</span>
            <span className="font-mono text-xs text-white/40">{counts[emoji]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
