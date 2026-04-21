import * as motion from 'motion/react-client';
import { ClipboardList } from 'lucide-react';

interface LiveFeatureCardProps {
  icon: string;
  title: string;
  desc: string;
  standard?: boolean;
  index: number;
}

export function LiveFeatureCard({ icon, title, desc, standard, index }: LiveFeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
      className="relative flex flex-col gap-2 rounded-xl border border-white/5 bg-white/5 p-5 text-left"
    >
      {standard && (
        <div className="absolute right-3 top-3 flex items-center gap-0 rounded-full border border-village-live/15 bg-village-live/15 px-3 py-1 text-xs font-medium text-village-live/80">
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
