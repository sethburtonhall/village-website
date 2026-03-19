import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Village and the team behind it.',
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold text-stone-900">About Village</h1>

          <div className="prose prose-stone max-w-none space-y-6 leading-relaxed text-stone-600">
            <p className="text-lg">
              Village is a group sign-up and event management tool built for the people who keep
              communities running — coaches, volunteers, teachers, church leaders, and everyone in
              between.
            </p>

            <p>
              We built Village because organizing people shouldn't require a spreadsheet degree.
              Whether you're coordinating a school bake sale, a volunteer shift schedule, or a
              neighborhood cleanup day, Village gives you a clean, shareable sign-up link in minutes
              — no account required for participants.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-semibold text-stone-800">Our Mission</h2>
            <p>
              To make group coordination simple, delightful, and accessible to every community —
              regardless of size or budget.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-semibold text-stone-800">The Company</h2>
            <p>
              Village is a product of{' '}
              <span className="font-medium text-stone-800">Roadshow Creative LLC</span>, a small
              software studio focused on building tools that help real people do real things. We're
              a lean team that cares deeply about product quality and customer experience.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-semibold text-stone-800">Get in Touch</h2>
            <p>
              We'd love to hear from you.&nbsp;
              <a
                href="mailto:support@usevillage.app"
                className="font-medium text-primary-600 hover:underline"
              >
                Contact us
              </a>
              &nbsp;any time. Whether it's feedback, a feature idea, or just a hello — we read every
              message.
            </p>

            <p>
              Need documentation or help getting started? Visit our{' '}
              <a
                href="https://docs.usevillage.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary-600 hover:underline"
              >
                Help Center
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
