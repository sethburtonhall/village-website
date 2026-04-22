import * as motion from 'motion/react-client';
import { MoveDown, MoveRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function LiveHero() {
  return (
    <div className="bg-[#0a0a0a] px-6 pb-28 pt-12 md:pt-32 md:text-center">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 md:items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-2xl text-5xl leading-tight md:mx-auto"
        >
          Real-time event experience
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mb-10 max-w-xl text-2xl leading-normal text-white/70 md:mx-auto"
        >
          Turn any Village event into a live, interactive experience — with reactions, polls,
          Q&amp;A, live timelines, instant broadcasts and more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center gap-4 md:flex-row md:justify-center"
        >
          <Button variant="live" asChild>
            <a href="https://app.usevillage.app/register">
              Join as Early Adopter
              <MoveRight className="h-4 w-4" />
            </a>
          </Button>
          <a
            href="#features"
            className="flex items-center gap-1 text-sm text-white/50 transition-colors hover:text-white/60"
          >
            See all features
            <MoveDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
