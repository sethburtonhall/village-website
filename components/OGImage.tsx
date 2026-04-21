import { ClipboardList } from 'lucide-react';

export function OGImage() {
  return (
    <div
      style={{ width: 1200, height: 630, minWidth: 1200, minHeight: 630 }}
      className="relative flex flex-col overflow-hidden bg-white p-[60px]"
    >
      {/* accent bar */}
      <div className="absolute left-0 right-0 top-0 h-[6px] bg-primary-600" />

      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="group flex items-center gap-1">
          <ClipboardList className="size-12 -rotate-3 text-primary-600 group-hover:rotate-0" />
          <h1
            id="logo"
            className="cursor-default font-logo text-5xl font-extrabold text-foreground"
          >
            <span>Village</span>
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="mb-auto mt-auto flex flex-col gap-2 pt-10">
        <p className="mb-2 font-sans text-xl font-medium uppercase tracking-[0.14em] text-stone-500">
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
          <span className="font-sans text-lg text-stone-500">
            For churches, schools &amp; sports teams and everything in between.
          </span>
          <span className="font-sans text-base italic text-stone-600">
            No ads · No accounts required for participants
          </span>
        </div>
        <span className="font-logo text-2xl font-bold text-primary-600">usevillage.app</span>
      </div>
    </div>
  );
}
