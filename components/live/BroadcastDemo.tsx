'use client';

import { useState, useRef } from 'react';

const MESSAGES = [
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

export function BroadcastDemo() {
  const [showing, setShowing] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
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
            className={`absolute inset-x-0 top-0 flex items-start gap-3 border-b border-village-live/20 bg-village-live px-4 py-3 ${
              animatingOut ? 'slide-out' : 'slide-in'
            }`}
          >
            <span className="text-base">📣</span>
            <div>
              <p className="text-sm font-semibold text-white">{MESSAGES[messageIndex].title}</p>
              <p className="text-xs text-white/80">{MESSAGES[messageIndex].content}</p>
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
        className="mt-auto w-full rounded-xl border border-village-live/30 bg-village-live/10 py-2.5 text-sm font-semibold text-white transition-all hover:bg-village-live/20 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {showing ? 'Sent to all screens ✓' : 'Send Broadcast →'}
      </button>
    </div>
  );
}
