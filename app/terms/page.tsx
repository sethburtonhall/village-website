import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Village Terms of Service — the rules and agreements for using Village.',
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <h1 className="mb-2 text-4xl font-bold text-stone-900">Terms of Service</h1>
          <p className="mb-10 text-sm text-stone-400">Effective date: March 18, 2026</p>

          <div className="space-y-10 leading-relaxed text-stone-600">
            <section className="terms-section">
              <p>
                These Terms of Service ("Terms") govern your use of Village, operated by Roadshow
                Creative ("we," "us," or "our"). By creating an account or using Village, you agree
                to these Terms. If you do not agree, do not use Village.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">1. Use of Service</h2>
              <p>
                Village is a group event and sign-up management platform. You may use Village for
                lawful purposes only. You agree not to use Village to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Violate any applicable laws or regulations</li>
                <li>Harass, threaten, or harm other users</li>
                <li>Distribute spam or unsolicited communications</li>
                <li>Collect personal data from users without appropriate consent</li>
                <li>Attempt to gain unauthorized access to Village's systems</li>
              </ul>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">2. Accounts</h2>
              <p>
                You are responsible for maintaining the security of your account and password.
                Roadshow Creative LLC cannot and will not be liable for any loss or damage from your
                failure to comply with this security obligation. You must notify us immediately at{' '}
                <a
                  href="mailto:support@usevillage.app"
                  className="text-primary-600 hover:underline"
                >
                  support@usevillage.app
                </a>{' '}
                if you suspect unauthorized use of your account.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                3. Subscriptions and Billing
              </h2>
              <p className="mb-3">
                Village offers both free and paid subscription plans. Paid plans are billed on a
                monthly or annual basis, depending on the plan you select at checkout.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-stone-700">Billing cycle:</span> Subscriptions
                  are billed in advance at the start of each billing period (monthly or annual).
                </li>
                <li>
                  <span className="font-medium text-stone-700">Automatic renewal:</span> Your
                  subscription will automatically renew at the end of each billing cycle unless you
                  cancel before the renewal date.
                </li>
                <li>
                  <span className="font-medium text-stone-700">Price changes:</span> We may change
                  subscription prices with at least 30 days' notice. Continued use after a price
                  change constitutes acceptance of the new price.
                </li>
                <li>
                  <span className="font-medium text-stone-700">Payment processing:</span> All
                  payments are processed by Stripe. We do not store your credit card information.
                </li>
              </ul>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                4. Cancellation and Refunds
              </h2>
              <p className="mb-3">
                You may cancel your subscription at any time from your account settings.
                Cancellation takes effect at the end of your current billing period — you will
                retain access to paid features until then.
              </p>
              <p className="mb-3 font-medium text-stone-700">
                All subscription fees are non-refundable. No prorated refunds will be issued for the
                unused portion of a billing period after cancellation.
              </p>
              <p>
                If you believe you were charged in error, please contact us at{' '}
                <a
                  href="mailto:support@usevillage.app"
                  className="text-primary-600 hover:underline"
                >
                  support@usevillage.app
                </a>{' '}
                within 14 days of the charge and we will review your case.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">5. Account Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account at our sole discretion if
                you violate these Terms, engage in fraudulent activity, or for any other reason we
                deem necessary to protect Village or its users. If we terminate your account for
                cause, no refund will be issued for remaining subscription time. You may also delete
                your account at any time from your account settings.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">6. Your Content</h2>
              <p>
                You retain ownership of the content you create in Village (events, sign-up forms,
                etc.). By using Village, you grant us a limited license to store, display, and
                process your content solely to provide the service. We do not claim ownership of
                your data and will not use it for any purpose beyond operating Village.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                7. Disclaimer of Warranties
              </h2>
              <p>
                Village is provided "as is" and "as available" without warranties of any kind,
                express or implied. We do not warrant that the service will be uninterrupted,
                error-free, or free of viruses or other harmful components. Your use of Village is
                at your own risk.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                8. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Roadshow Creative LLC shall not be liable
                for any indirect, incidental, special, consequential, or punitive damages, or any
                loss of profits or data, arising out of or in connection with your use of Village.
                Our total liability to you for any claims arising from use of Village shall not
                exceed the amount you paid us in the 12 months preceding the claim.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">9. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the United States. Any disputes arising from
                these Terms or your use of Village shall be resolved in the courts of competent
                jurisdiction.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">10. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify you of material changes
                by posting the new Terms on this page with an updated effective date. Continued use
                of Village after changes take effect constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">11. Contact Us</h2>
              <p>
                Questions about these Terms? Contact us at{' '}
                <a
                  href="mailto:support@usevillage.app"
                  className="text-primary-600 hover:underline"
                >
                  support@usevillage.app
                </a>
                .
              </p>
              <address className="mt-4 text-sm not-italic leading-relaxed text-stone-500">
                Roadshow Creative LLC
                <br />
                519 N Nevada St., Apt D<br />
                Oceanside, CA 92054
                <br />
                United States
              </address>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
