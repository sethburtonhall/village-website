import { MotionWrapper } from '@/components/MotionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Do my participants need to create an account?',
    a: 'No — and that\'s the point. Participants just click your link, pick a slot, and they\'re done. No account, no password, no reason to bail halfway through.',
  },
  {
    q: 'How long does it take to set up my first event?',
    a: 'Under a minute for a basic event. Give it a name, add your time slots, set how many people can join each one, and you have a link ready to share.',
  },
  {
    q: 'How do reminders work?',
    a: 'Village sends automatic email reminders to everyone who signed up before your event. You don\'t have to remember to do it — it just happens.',
  },
  {
    q: 'What happens when a slot is full?',
    a: 'The slot shows as full and no one can book it. If you want a waitlist for overflow, that\'s on the roadmap.',
  },
  {
    q: 'Is the Free plan actually free?',
    a: 'Yes — no credit card required, no trial period. The Free plan gives you 3 active events and 15 slots each, which is plenty for casual organizers. Upgrade anytime when you need more.',
  },
  {
    q: 'What is "early access"?',
    a: 'Village is currently in early access — we\'re onboarding organizers in small batches so we can give each one proper attention. Join the waitlist and we\'ll let you know the moment your spot opens up.',
  },
];

export function VillageFAQ() {
  return (
    <section className="bg-stone-50 py-16">
      <div className="container mx-auto max-w-3xl space-y-12">
        <MotionWrapper>
          <div className="stack md:text-center">
            <p className="font-bold text-primary-600">FAQ</p>
            <h2 className="text-3xl font-bold md:text-4xl">Questions we actually get asked</h2>
          </div>
        </MotionWrapper>

        <MotionWrapper>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-xl border border-stone-200 bg-white px-6"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-stone-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </MotionWrapper>
      </div>
    </section>
  );
}
