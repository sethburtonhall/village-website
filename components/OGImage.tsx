import { ClipboardList } from 'lucide-react';

export function OGImage() {
  return (
    <div
      style={{ width: 1200, height: 630, minWidth: 1200, minHeight: 630 }}
      className="relative flex flex-col overflow-hidden bg-white p-[60px]"
    >
      {/* Background glow — bottom-left */}
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 70%)',
        }}
      />
      {/* Background glow — top-right */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(156,64,255,0.1) 0%, transparent 70%)',
        }}
      />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="group flex items-center gap-1">
          <ClipboardList
            className="size-10 -rotate-3 text-primary-600 group-hover:rotate-0"
            strokeWidth={2}
          />
          <h1
            id="logo"
            className="cursor-default font-logo text-4xl font-extrabold text-foreground"
          >
            <span>Village</span>
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="mb-auto mt-auto flex flex-col gap-2 pt-10">
        <p className="mb-2 font-sans text-[15px] font-medium uppercase tracking-[0.14em] text-stone-500">
          The modern SignUpGenius alternative
        </p>
        <h1 className="m-0 font-logo font-extrabold leading-[1.1]" style={{ fontSize: 82 }}>
          Group
          <span className="font-signature text-5xl text-primary-600 sm:text-5xl md:text-7xl lg:text-8xl">
            &nbsp;sign-ups
          </span>
        </h1>
        <h1 className="m-0 font-logo font-extrabold leading-[1.1]" style={{ fontSize: 82 }}>
          <span>made&nbsp;</span>
          <span
            style={{
              background: 'linear-gradient(to right, #ffaa40, #9c40ff, #ffaa40)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            simple.
          </span>
        </h1>
      </div>

      {/* Footer */}
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-sans text-[15px] text-stone-500">
            For churches, schools &amp; sports teams and everything in between.
          </span>
          <span className="font-sans text-[13px] italic text-stone-600">
            No ads · No accounts required for participants
          </span>
        </div>
        <span className="font-logo text-[20px] font-bold text-primary-600">usevillage.app</span>
      </div>
    </div>
  );
}
