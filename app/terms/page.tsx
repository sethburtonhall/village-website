import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactLink } from '@/components/ContactLink';
import { CompanyAddress } from '@/components/CompanyAddress';
import { EffectiveDate } from '@/components/EffectiveDate';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for Village, Village Venues, and Village Live — the rules and agreements for using the Village platform.',
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <h1 className="mb-2 text-4xl font-bold text-stone-900">Terms of Service</h1>
          <EffectiveDate />

          <div className="space-y-10 leading-relaxed text-stone-600">
            <section className="terms-section">
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the Village
                platform, including Village, Village Venues, and Village Live, operated by Roadshow
                Creative (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By creating an
                account or using Village, you agree to these Terms. If you do not agree, do not use
                Village.
              </p>
              <p className="mt-3">
                <strong>Early Access Notice:</strong> The Village platform is currently in Early
                Access. These Terms, our Privacy Policy, and our service offerings are subject to
                change at any time. We will notify you of material changes via email or by posting
                updates on this page. Your continued use constitutes acceptance of updated terms.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">1. Use of Service</h2>
              <p>
                The Village platform consists of three interconnected products operated by Roadshow
                Creative: Village (event management), Village Venues (venue discovery and booking),
                and Village Live (real-time event engagement). You may use these services for lawful
                purposes only. You agree not to use Village to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Violate any applicable laws or regulations</li>
                <li>Harass, threaten, or harm other users</li>
                <li>Distribute spam or unsolicited communications</li>
                <li>Collect personal data from users without appropriate consent</li>
                <li>Attempt to gain unauthorized access to Village&apos;s systems</li>
              </ul>
              <h3 className="mt-4 text-lg font-medium text-stone-700">
                Village (Event Management)
              </h3>
              <p>
                Village enables event organizers to create events, design custom sign-up forms,
                manage attendees, and collaborate with team members. Event organizers are
                responsible for ensuring their use complies with applicable laws.
              </p>
              <h3 className="mt-4 text-lg font-medium text-stone-700">Village Venues</h3>
              <p>
                Village Venues is a venue discovery and booking inquiry platform. Venue managers may
                publish their venue listings (name, photos, capacity, amenities, availability) to
                help organizers find spaces. Venue managers can control which listings are published
                and manage booking inquiries. Organizers searching venues agree to share their
                contact information (email, event details) with venue managers when submitting
                inquiries.
              </p>
              <h3 className="mt-4 text-lg font-medium text-stone-700">Village Live</h3>
              <p>
                Village Live provides real-time event dashboards for attendee engagement and
                organizer mission control. Organizers can view live attendance, run polls, field
                Q&amp;A, broadcast updates, and monitor engagement. Attendees can check in, react,
                submit questions, and vote on polls.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">2. Accounts</h2>
              <p>
                You are responsible for maintaining the security of your account and password.
                Roadshow Creative cannot and will not be liable for any loss or damage from your
                failure to comply with this security obligation. You must notify us immediately if
                you suspect unauthorized use of your account.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                3. Subscriptions and Billing
              </h2>

              <h3 className="mb-2 text-lg font-medium text-stone-700">Current Status</h3>
              <p className="mb-4">
                All Village products (Village, Village Venues, and Village Live) are currently free
                to use during the Early Access period. Paid subscription plans will be introduced in
                the future. We will provide advance notice and an opportunity to continue using the
                free tier or upgrade to a paid plan.
              </p>

              <h3 className="mb-2 text-lg font-medium text-stone-700">Future Billing</h3>
              <p className="mb-3">
                When paid subscription plans are introduced, they will be billed on a monthly or
                annual basis, depending on the plan you select at checkout.
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-stone-700">Billing cycle:</span> Subscriptions
                  will be billed in advance at the start of each billing period (monthly or annual).
                </li>
                <li>
                  <span className="font-medium text-stone-700">Automatic renewal:</span> Your
                  subscription will automatically renew at the end of each billing cycle unless you
                  cancel before the renewal date.
                </li>
                <li>
                  <span className="font-medium text-stone-700">Price changes:</span> We may change
                  subscription prices with at least 30 days&apos; notice. Continued use after a
                  price change constitutes acceptance of the new price.
                </li>
                <li>
                  <span className="font-medium text-stone-700">Payment processing:</span> All
                  payments will be processed through Clerk, which handles billing and payment
                  processing. We do not store your credit card information.
                </li>
              </ul>

              <h3 className="mb-2 text-lg font-medium text-stone-700">Village Live Add-On</h3>
              <p>
                Village Live is a separate add-on within the Village billing system. When paid plans
                are introduced, Village Live will have its own pricing tier separate from the base
                Village plan options. You will be able to add Village Live to your Village
                subscription at checkout.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                4. Cancellation & Refund Policy
              </h2>
              <h3 className="mb-2 text-lg font-medium text-stone-700">Village Subscriptions</h3>
              <p className="mb-4">
                Village provides services on a subscription basis (Monthly or Annual). Your
                subscription will automatically renew at the end of each billing cycle unless
                cancelled through your account settings or by contacting our support team.
              </p>

              <h3 className="mb-2 text-lg font-medium text-stone-700">Cancellation</h3>
              <p className="mb-4">
                When paid subscription plans are available, you may cancel your subscription at any
                time. To avoid being charged for the next billing period, you must cancel at least
                24 hours before your renewal date. Upon cancellation, you will continue to have
                access to the paid tier features until the end of your current paid billing period.
              </p>

              <h3 className="mb-2 text-lg font-medium text-stone-700">Refunds</h3>
              <p className="mb-4">
                When paid subscription plans are available, all sales will be final. Because our
                services are digital and granted immediately upon payment, we will not offer
                refunds, credits, or prorated billing for subscriptions that are cancelled
                mid-month.
              </p>

              <h3 className="mb-2 text-lg font-medium text-stone-700">
                Village Venues Booking Inquiries
              </h3>
              <p className="mb-4">
                Booking inquiries in Village Venues follow a workflow: New → Viewed → Accepted →
                (optional: Reschedule Requested) → Completed or Declined. Venue managers may decline
                pending inquiries at any time. Venue managers may request rescheduling or decline
                bookings based on mutual agreement with organizers. Disputes regarding declined or
                rescheduled bookings should be <ContactLink>reported to us</ContactLink> for
                mediation.
              </p>

              <h3 className="mb-2 text-lg font-medium text-stone-700">Exceptions</h3>
              <p>
                In the event of a technical billing error or a failure to provide service as
                described, please <ContactLink>contact us</ContactLink> within 7 days of the
                transaction for a manual review of your account.
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
              <p className="mb-3">
                You retain ownership of all content you create across the Village platform. By using
                Village, you grant us a limited license to store, display, and process your content
                solely to provide the services. We do not claim ownership of your data and will not
                use it for any purpose beyond operating Village.
              </p>

              <h3 className="mb-2 text-lg font-medium text-stone-700">Village</h3>
              <p className="mb-3">
                You own your events, sign-up forms, and custom form fields. Attendee responses to
                your sign-ups are stored and managed on your behalf.
              </p>

              <h3 className="mb-2 text-lg font-medium text-stone-700">Village Venues</h3>
              <p className="mb-3">
                Venue managers own their venue listings (name, description, photos, amenities,
                capacity, availability calendar). Organizers own their booking inquiry submissions.
                Venue managers may archive or delete their venue listings at any time. Messages
                between venue managers and organizers are retained until the venue manager archives
                the inquiry.
              </p>

              <h3 className="mb-2 text-lg font-medium text-stone-700">Village Live</h3>
              <p>
                Village Live displays real-time event data (attendee check-ins, reactions, Q&amp;A
                responses, poll votes) during and after your events. This data is stored temporarily
                and automatically deleted 7 days after your event ends. You are responsible for
                ensuring attendees consent to real-time engagement tracking during your event.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                7. Data Processing & GDPR
              </h2>
              <p className="mb-3">
                For users in the European Union, United Kingdom, and other jurisdictions with data
                protection laws: We process your personal data as a service provider under contract
                with you. Our{' '}
                <a
                  href="https://usevillage.app/privacy"
                  className="text-primary-600 hover:underline"
                >
                  Privacy Policy
                </a>{' '}
                describes our data processing practices, including your rights (access, correction,
                erasure, portability, objection). If you have concerns about our data handling,
                please <ContactLink>contact us</ContactLink>. For GDPR inquiries, we maintain a Data
                Processing Agreement available upon request.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                8. Disclaimer of Warranties
              </h2>
              <p>
                Village is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
                warranties of any kind, express or implied. We do not warrant that the service will
                be uninterrupted, error-free, or free of viruses or other harmful components. Your
                use of Village is at your own risk.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                9. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, Roadshow Creative shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages, or any loss
                of profits or data, arising out of or in connection with your use of Village. Our
                total liability to you for any claims arising from use of Village shall not exceed
                the amount you paid us in the 12 months preceding the claim.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">10. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of California, without regard to
                its conflict of law principles. Any disputes arising from these Terms or your use of
                Village shall be resolved in the state or federal courts located in San Diego
                County, California. You agree to submit to the exclusive jurisdiction of such
                courts.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">11. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. We will notify you of material changes
                by posting the new Terms on this page with an updated effective date. Continued use
                of Village after changes take effect constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section className="terms-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">12. Contact Us</h2>
              <p>
                Questions about these Terms? <ContactLink>Contact us</ContactLink>.
              </p>
              <CompanyAddress className="mt-4" />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
