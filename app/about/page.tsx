import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Village is a group sign-up tool built for community organizers — no ads, no accounts required for participants, just a link worth sharing.',
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
              Village is a group sign-up tool built for the people who keep communities running —
              church coordinators, sports team managers, school parents, and volunteers who do it
              all without a job title.
            </p>

            <p>
              We built Village because the tools people were using to organize sign-ups were getting
              in the way: ads cluttering every page, forms that confused participants, and links
              that felt embarrassing to share. Organizers deserved something cleaner. Village gives
              you a simple, ad-free sign-up experience your community will actually use — no account
              required on their end.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-semibold text-stone-800">Our Mission</h2>
            <p>
              To make group coordination simple and accessible — so the people who keep communities
              running can spend less time chasing sign-ups and more time doing the thing they love.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-semibold text-stone-800">
              Built by Roadshow Creative
            </h2>
            <p>
              Village is built and maintained by Seth Hall, founder of{' '}
              <a
                href="https://roadshowcreative.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary-600 hover:underline"
              >
                Roadshow Creative
              </a>{' '}
              — a software studio in Oceanside, CA focused on building tools that help real people
              do real things.
            </p>

            <h2 className="mb-4 mt-10 text-2xl font-semibold text-stone-800">Get in Touch</h2>
            <p>
              Have feedback, a feature idea, or just a question?{' '}
              <a
                href="mailto:support@usevillage.app"
                className="font-medium text-primary-600 hover:underline"
              >
                Email us
              </a>{' '}
              — we read and respond to every message.
            </p>

            <p>
              Need help getting started?{' '}
              <a
                href="https://docs.usevillage.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary-600 hover:underline"
              >
                Visit the docs
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
