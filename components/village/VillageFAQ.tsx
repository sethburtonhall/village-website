import { MotionWrapper } from '@/components/MotionWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { generateFAQSchema, type FAQItem } from '@/lib/schemas';

const faqs: FAQItem[] = [
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
  {
    q: 'Can I sync my events to Google Calendar or Outlook?',
    a: 'Yes. Every Village event automatically syncs to Google Calendar, Apple Calendar, or Outlook. That way, your events stay in sync across all your calendars — nothing slips through the cracks.',
  },
  {
    q: 'How do I send updates to participants after they sign up?',
    a: 'With the group messaging feature, you can send a message to all participants in your event with one click. Perfect for last-minute updates or schedule changes. This is available on paid plans.',
  },
  {
    q: 'Can I see who signed up in real-time?',
    a: 'Yes. Village shows you sign-ups the moment they happen — no refreshing, no guessing. You\'ll see a live count of who\'s in, organized by time slot.',
  },
  {
    q: 'Do I need to check people in manually at my event?',
    a: 'Not on paid plans. Check-in mode lets you mark attendees present right from your phone as they arrive — no clipboard needed. Just scan or tap, and you\'re done.',
  },
  {
    q: 'Can I run recurring events without rebuilding them each time?',
    a: 'Yes. With the event duplication feature (on paid plans), you can duplicate any event in one click. Perfect if you run the same event every week, month, or season.',
  },
  {
    q: 'How do I get my participant list out of Village?',
    a: 'On paid plans, you can export your full sign-up list as a CSV spreadsheet anytime. Your data, your format, your control — no lock-in.',
  },
  {
    q: 'Can I customize the sign-up form with my own questions?',
    a: 'Yes. You can add custom questions to your sign-up form to collect the information you need. Participants answer them when they sign up.',
  },
  {
    q: 'Can participants sign up on their phones?',
    a: 'Absolutely. Village sign-ups are fully mobile-friendly. Participants can sign up from any device, any time — no desktop required.',
  },
  {
    q: 'What\'s the difference between the Free and paid plans?',
    a: 'Free gives you up to 3 active events with 15 slots each. Paid plans unlock unlimited events, advanced features like check-in mode, group messaging, CSV exports, event templates, and real-time dashboards. Choose the plan that fits your needs.',
  },
  {
    q: 'Can I put my organization\'s branding on the sign-up pages?',
    a: 'Yes. White-label branding is available on paid plans, so your organization\'s name and logo appear on every event page — it looks like you, not a third-party tool.',
  },
];

export function VillageFAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqs)) }}
      />
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
    </>
  );
}
