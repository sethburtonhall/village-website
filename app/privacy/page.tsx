import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Village Privacy Policy — how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <h1 className="mb-2 text-4xl font-bold text-stone-900">Privacy Policy</h1>
          <p className="mb-10 text-sm text-stone-400">Effective date: March 18, 2026</p>

          <div className="space-y-10 leading-relaxed text-stone-600">
            <section className="privacy-section">
              <p>
                Roadshow Creative LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates Village at usevillage.app.
                This Privacy Policy explains what information we collect, how we use it, and the
                choices you have. By using Village, you agree to the practices described here.
              </p>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                1. Information We Collect
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-stone-700">Account information:</span> When you
                  create an account, we collect your name and email address through our
                  authentication provider, Clerk.
                </li>
                <li>
                  <span className="font-medium text-stone-700">Billing information:</span> When you
                  subscribe to a paid plan, your payment details are collected and processed by
                  Stripe. We never store your credit card number or full payment card data on our
                  servers.
                </li>
                <li>
                  <span className="font-medium text-stone-700">Usage data:</span> We may collect
                  information about how you interact with Village (e.g., pages visited, features
                  used) to improve the product.
                </li>
                <li>
                  <span className="font-medium text-stone-700">Event and sign-up data:</span>{' '}
                  Content you create in Village (events, sign-up forms, attendee submissions) is
                  stored on our servers and used solely to provide the service.
                </li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>To provide, operate, and improve Village</li>
                <li>To manage your account and subscriptions</li>
                <li>To send transactional emails (receipts, sign-up confirmations)</li>
                <li>To respond to support requests</li>
                <li>To comply with legal obligations</li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information to third parties. Ever.
              </p>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">3. Service Providers</h2>
              <p className="mb-3">
                We share your information only with trusted third-party service providers who assist
                us in operating Village:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-stone-700">Clerk (clerk.com)</span> — handles
                  user authentication and session management. Your login credentials and session
                  cookies are managed by Clerk. See their{' '}
                  <a
                    href="https://clerk.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <span className="font-medium text-stone-700">Stripe (stripe.com)</span> — handles
                  all payment processing. Your payment card data is transmitted directly to Stripe
                  and is never stored on our servers. See their{' '}
                  <a
                    href="https://stripe.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">4. Cookies</h2>
              <p>
                Village uses essential cookies to keep you logged in and maintain your session.
                These are set by Clerk and are required for the application to function. We do not
                use advertising or tracking cookies.
              </p>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">5. Data Retention</h2>
              <p>
                We retain your account data for as long as your account is active. If you delete
                your account, we will delete your personal information within 30 days, except where
                we are required to retain it for legal or financial compliance purposes.
              </p>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information at any
                time. To exercise these rights, contact us. If you are located in the EU or UK, you
                may also have rights under GDPR or UK GDPR, including the right to data portability
                and the right to lodge a complaint with a supervisory authority.
              </p>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">7. Children&apos;s Privacy</h2>
              <p>
                Village is not directed to children under 13. We do not knowingly collect personal
                information from children. If you believe a child has provided us with their
                information, please contact us and we will delete it promptly.
              </p>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                8. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of
                significant changes by posting the new policy on this page with an updated effective
                date.
              </p>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please{' '}
                <a
                  href="mailto:support@usevillage.app"
                  className="text-primary-600 hover:underline"
                >
                  contact us
                </a>
                .
              </p>
              <p className="mt-2 text-sm text-stone-500">Roadshow Creative LLC · usevillage.app</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
