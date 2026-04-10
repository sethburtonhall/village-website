import * as motion from 'motion/react-client';

const STEPS = [
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
];

export function LiveHowItWorks() {
  return (
    <div className="bg-[#0a0a0a] px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3 }}
          className="mb-14 md:text-center"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-village-live">
            Setup
          </p>
          <h2 className="text-3xl font-bold text-white">How it works</h2>
        </motion.div>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Connecting line on desktop */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/5 md:block" />

          {STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="relative flex flex-col gap-4 md:text-center"
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-village-live/30 bg-[#0a0a0a] md:mx-auto">
                <span
                  className="font-mono text-sm font-bold text-village-live"
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
  );
}
