import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactLink } from '@/components/ContactLink';
import { CompanyAddress } from '@/components/CompanyAddress';
import { EffectiveDate } from '@/components/EffectiveDate';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Village, Village Venues, and Village Live — how we collect, use, and protect your data across the Village platform.',
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-4 py-20">
        <div className="container mx-auto max-w-3xl">
          <h1 className="mb-2 text-4xl font-bold text-stone-900">Privacy Policy</h1>
          <EffectiveDate />

          <div className="space-y-10 leading-relaxed text-stone-600">
            <section className="privacy-section">
              <p>
                Roadshow Creative (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
                operates the Village platform (Village, Village Venues, and Village Live) at
                usevillage.app. This Privacy Policy explains what information we collect, how we use
                it, your rights, and the choices you have. By using Village, you agree to the
                practices described here.
              </p>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                We collect information differently depending on which Village product you use.
              </p>

              <h3 className="mb-2 text-lg font-medium text-stone-700">
                Account Information (All Products)
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-stone-700">Authentication:</span> When you
                  create an account, we collect your name and email address through Clerk.
                </li>
                <li>
                  <span className="font-medium text-stone-700">Billing information:</span> When you
                  subscribe to a paid plan (available in the future), your payment details are
                  collected and processed by Clerk. We never store your credit card number or full
                  payment card data on our servers.
                </li>
                <li>
                  <span className="font-medium text-stone-700">Usage data:</span> We collect
                  information about how you interact with Village (pages visited, features used,
                  device information, IP address) via Vercel Analytics and Speed Insights to improve
                  the product and monitor performance.
                </li>
                <li>
                  <span className="font-medium text-stone-700">Feedback and support data:</span>{' '}
                  When you submit feedback or contact support, we collect your message, user agent,
                  and page URL to assist you and improve the product.
                </li>
              </ul>

              <h3 className="mb-2 text-lg font-medium text-stone-700">
                Village (Event Management)
              </h3>
              <ul className="mb-4 list-disc space-y-2 pl-5">
                <li>Event data: title, description, date, time, location, capacity, timezone</li>
                <li>Sign-up forms: custom form fields you create</li>
                <li>
                  Attendee responses: information submitted by attendees to your sign-up forms
                  (names, emails, custom fields)
                </li>
                <li>Team memberships: team member names, roles, and permissions</li>
                <li>Check-in data: attendee check-in timestamps and status</li>
                <li>
                  Bot protection: Cloudflare Turnstile collects device fingerprint and interaction
                  data on sign-up forms to prevent spam
                </li>
              </ul>

              <h3 className="mb-2 text-lg font-medium text-stone-700">Village Venues</h3>
              <ul className="mb-4 list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-stone-700">Venue manager information:</span>{' '}
                  Name, email
                </li>
                <li>
                  <span className="font-medium text-stone-700">Venue listing data:</span> Venue
                  name, description, photos, address, city, capacity, amenities
                </li>
                <li>
                  <span className="font-medium text-stone-700">Availability calendar:</span> Dates
                  marked as available or unavailable by venue managers
                </li>
                <li>
                  <span className="font-medium text-stone-700">Booking inquiries:</span> From event
                  organizers (authenticated) and unauthenticated guests: name, email, event type,
                  guest count, requested event date(s), message/notes
                </li>
                <li>
                  <span className="font-medium text-stone-700">Messages:</span> Communications
                  between venue managers and organizers regarding booking inquiries
                </li>
                <li>
                  <span className="font-medium text-stone-700">Guest access tokens:</span> When an
                  unauthenticated guest submits a booking inquiry, they receive a unique access
                  token that allows them to view and manage their inquiry. This token persists for
                  the lifetime of the booking inquiry.
                </li>
              </ul>

              <h3 className="mb-2 text-lg font-medium text-stone-700">Village Live</h3>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-stone-700">Check-in data:</span> Timestamps and
                  status when attendees check into your event. Check-in data is stored in our main
                  database and retained for the lifetime of your event record.
                </li>
                <li>
                  <span className="font-medium text-stone-700">Engagement data:</span> Emoji
                  reactions, Q&amp;A submissions, poll responses. Reactions, Q&amp;A questions, and
                  poll responses are stored in our real-time infrastructure and automatically
                  deleted 7 days after your event ends.
                </li>
                <li>
                  <span className="font-medium text-stone-700">Attendance tracking:</span> Real-time
                  attendee count and presence during your event.
                </li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                2. How We Use Your Information
              </h2>
              <ul className="mb-4 list-disc space-y-2 pl-5">
                <li>To provide, operate, and improve the Village platform</li>
                <li>To manage your account and subscriptions</li>
                <li>To send transactional emails (receipts, confirmations, notifications)</li>
                <li>To respond to support requests</li>
                <li>To comply with legal and financial obligations</li>
              </ul>

              <h3 className="mb-2 text-lg font-medium text-stone-700">Product-Specific Uses</h3>
              <p className="mb-2">
                <span className="font-medium text-stone-700">Village Venues:</span> We use venue
                manager information to facilitate connections with organizers. When an organizer
                submits a booking inquiry, we share their contact information with the venue manager
                so they can coordinate. Messages are retained to maintain a record of the booking
                workflow.
              </p>
              <p className="mb-4">
                <span className="font-medium text-stone-700">Village Live:</span> We use real-time
                engagement data to power your live event experience, provide organizers with
                attendance metrics, and show post-event statistics and recaps. When paid plans are
                introduced, Village Live will be a separate add-on within the Village billing
                system.
              </p>

              <p>
                <strong>We do not sell your personal information to third parties. Ever.</strong>
              </p>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                3. Legal Basis for Processing
              </h2>
              <p className="mb-3">
                We process your personal data based on the following legal foundations:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-stone-700">Contract Performance:</span>{' '}
                  Processing necessary to provide and manage your account and the Village services
                  you use
                </li>
                <li>
                  <span className="font-medium text-stone-700">Legitimate Interests:</span>{' '}
                  Processing necessary for product improvement, fraud prevention, security, and
                  business operations
                </li>
                <li>
                  <span className="font-medium text-stone-700">Legal Compliance:</span> Processing
                  required by law or to enforce our terms
                </li>
              </ul>
              <p>
                If you are in the EU, UK, or other GDPR-jurisdiction, you have the right to object
                to processing based on legitimate interests. <ContactLink>Contact us</ContactLink>{' '}
                to exercise this right.
              </p>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">4. Service Providers</h2>
              <p className="mb-3">
                We share your information only with trusted third-party service providers who assist
                us in operating Village. These providers are contractually bound to use your data
                only as necessary to provide services:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-stone-700">Clerk (clerk.com)</span> — handles
                  user authentication, session management, and billing across all Village products.
                  Your login credentials, session cookies, and payment information are managed by
                  Clerk, which uses Stripe as the payment processor. We do not store your credit
                  card information. See their{' '}
                  <a
                    href="https://clerk.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://clerk.com/docs/security"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Security Documentation
                  </a>
                  .
                </li>
                <li>
                  <span className="font-medium text-stone-700">Cloudflare (cloudflare.com)</span> —
                  powers Village Live&apos;s real-time infrastructure using Cloudflare Workers and
                  KV storage. Village Live data is processed and stored temporarily in
                  Cloudflare&apos;s infrastructure. Cloudflare also provides R2 object storage for
                  venue photos in Village Venues; photos are persisted in R2 until deleted by the
                  venue manager. Additionally, Cloudflare provides Turnstile, our bot protection
                  service used on event sign-up forms to prevent spam and unauthorized submissions.
                  See their{' '}
                  <a
                    href="https://www.cloudflare.com/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  ,{' '}
                  <a
                    href="https://developers.cloudflare.com/workers/reference/security-model/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Workers Security
                  </a>
                  , and{' '}
                  <a
                    href="https://developers.cloudflare.com/turnstile/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Turnstile Documentation
                  </a>
                  .
                </li>
                <li>
                  <span className="font-medium text-stone-700">Supabase (supabase.com)</span> —
                  stores and manages your core Village data (events, sign-ups, venue listings,
                  booking inquiries). Supabase is a secure PostgreSQL database provider. See their{' '}
                  <a
                    href="https://supabase.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a
                    href="https://supabase.com/security"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Security
                  </a>
                  .
                </li>
                <li>
                  <span className="font-medium text-stone-700">Loops (loops.so)</span> — handles
                  transactional emails (confirmations, receipts, notifications) and maintains a
                  customer relationship management (CRM) system with your contact information. Loops
                  stores your profile data (name, email, user ID) and manages mailing lists for
                  product updates. Loops does not use your data for third-party marketing purposes.
                  See their{' '}
                  <a
                    href="https://loops.so/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <span className="font-medium text-stone-700">Sentry (sentry.io)</span> — monitors
                  application errors and performance. Sentry collects error logs to help us maintain
                  service reliability. See their{' '}
                  <a
                    href="https://sentry.io/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <span className="font-medium text-stone-700">Unsplash (unsplash.com)</span> —
                  provides a library of free stock photos that event organizers can search and use
                  when creating events. When you search Unsplash via Village, your search queries
                  and IP address are sent to Unsplash. See their{' '}
                  <a
                    href="https://unsplash.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <span className="font-medium text-stone-700">Vercel (vercel.com)</span> — hosts
                  the Village platform website and services. Vercel provides CDN, analytics, and
                  deployment infrastructure. See their{' '}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
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
              <h2 className="mb-3 text-xl font-semibold text-stone-800">5. Cookies & Consent</h2>
              <p className="mb-3">
                Village uses essential cookies to keep you logged in and maintain your session.
                These are set by Clerk and are required for the application to function. We do not
                use advertising or tracking cookies. Under GDPR, essential cookies for
                authentication do not require consent; however, any non-essential cookies will
                require your explicit consent before placement.
              </p>
              <p>
                You can control cookies through your browser settings. However, disabling essential
                cookies will prevent you from using Village. We do not respond to &ldquo;Do Not
                Track&rdquo; signals at this time.
              </p>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">6. Data Retention</h2>

              <h3 className="mb-2 text-lg font-medium text-stone-700">Village</h3>
              <p className="mb-4">
                We retain your account data, events, and attendee responses for as long as your
                account is active. If you delete your account, we will immediately delete your
                personal information, except where we are required to retain it for legal or
                financial compliance purposes.
              </p>

              <h3 className="mb-2 text-lg font-medium text-stone-700">Village Venues</h3>
              <p className="mb-4">
                Venue listings are retained while your manager account is active. Venue managers may
                archive (hide) or delete (remove) inquiries anytime. Once you archive an inquiry, it
                is hidden from your view but retained in our system for legal and financial records
                (archive does not delete data). If you delete your venue manager account, all
                associated listings and inquiries are immediately deleted, except as required for
                legal or financial compliance.
              </p>

              <h3 className="mb-2 text-lg font-medium text-stone-700">Village Live</h3>
              <p className="mb-4">
                Village Live engagement data is handled in two ways. Check-in timestamps are stored
                in our main database and retained for the lifetime of your event record. Engagement
                data (emoji reactions, Q&amp;A submissions, poll responses) is stored in our
                real-time infrastructure and automatically deleted 7 days after your event ends.
                Village Live recap displays attendee participation (check-ins, reactions, Q&amp;A
                responses) for 7 days after your event ends.
              </p>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">7. Your Privacy Rights</h2>
              <p className="mb-3">
                You have the following rights regarding your personal information:
              </p>
              <ul className="mb-4 list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-stone-700">Access:</span> Right to access and
                  receive a copy of your personal data
                </li>
                <li>
                  <span className="font-medium text-stone-700">Correction:</span> Right to correct
                  inaccurate or incomplete information
                </li>
                <li>
                  <span className="font-medium text-stone-700">Erasure:</span> Right to request
                  deletion of your data (&ldquo;right to be forgotten&rdquo;), subject to legal
                  obligations
                </li>
                <li>
                  <span className="font-medium text-stone-700">Portability:</span> Right to receive
                  your data in a structured, portable format
                </li>
                <li>
                  <span className="font-medium text-stone-700">Objection:</span> Right to object to
                  processing for marketing or legitimate interest purposes
                </li>
                <li>
                  <span className="font-medium text-stone-700">Restriction:</span> Right to restrict
                  processing while we verify or address your concerns
                </li>
              </ul>
              <p className="mb-3">
                To exercise any of these rights, please <ContactLink>contact us</ContactLink>. We
                will respond within 30 days (or as required by law).
              </p>
              <p className="mb-3">
                <span className="font-medium text-stone-700">Village Venues venue managers:</span>{' '}
                You may archive or delete your venue listings and inquiries at any time from your
                dashboard. Archived inquiries are hidden but retained for legal and financial
                records.
              </p>
              <p>
                <span className="font-medium text-stone-700">EU & UK Residents:</span> If you are
                located in the EU, UK, or other GDPR-jurisdiction and are unsatisfied with our
                response to your rights request, you have the right to lodge a complaint with your
                local data protection authority (DPA).
              </p>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                8. Data Visibility Across Products
              </h2>
              <p>
                The Village platform connects three products. For transparency, here&apos;s what
                information is visible to different users:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium text-stone-700">Village organizers:</span> Can see
                  all attendees and responses for their own events. Team members can see event data
                  based on their assigned permissions. Organizers cannot see other organizers&apos;
                  events unless shared explicitly.
                </li>
                <li>
                  <span className="font-medium text-stone-700">Village Venues:</span> Venue managers
                  see organizer contact information (name, email, event details) when organizers
                  submit booking inquiries. Organizers see published venue listings, venue
                  descriptions, amenities, and venue manager email address.
                </li>
                <li>
                  <span className="font-medium text-stone-700">Village Live:</span> Event organizers
                  see real-time attendee check-ins, engagement (reactions, Q&amp;A, polls), and
                  attendance count during and after events. Village Live accesses attendee names and
                  form responses from the main Village database to power the organizer&apos;s
                  Mission Control dashboard. Attendees only see the live event dashboard; they
                  cannot see other attendees&apos; participation unless the organizer enables that
                  feature.
                </li>
              </ul>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                9. Automated Decision-Making & Profiling
              </h2>
              <p>
                Village does not use automated decision-making or algorithmic profiling to make
                decisions about you that produce legal or similarly significant effects. However,
                Village Live collects real-time engagement data (check-ins, reactions, Q&amp;A,
                polls) that organizers can view and analyze. This data is used solely for event
                engagement insights and is not used for automated decisions about account access or
                service eligibility.
              </p>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                10. Children&apos;s Privacy
              </h2>
              <p>
                Village is not directed to children under 13. We do not knowingly collect personal
                information from children. If you believe a child has provided us with their
                information, please <ContactLink>Contact us</ContactLink> and we will delete it
                promptly.
              </p>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                11. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of
                significant changes by posting the new policy on this page with an updated effective
                date.
              </p>
            </section>

            <section className="privacy-section">
              <h2 className="mb-3 text-xl font-semibold text-stone-800">
                12. Contact & Data Protection
              </h2>
              <p className="mb-3">
                <span className="font-medium text-stone-700">
                  Questions about this Privacy Policy?
                </span>{' '}
                <ContactLink>Contact us</ContactLink>.
              </p>
              <p className="mb-3">
                <span className="font-medium text-stone-700">Data Protection:</span> We maintain a
                Data Processing Agreement (DPA) for users subject to GDPR or similar regulations. A
                DPA is available upon request from <ContactLink>contact us</ContactLink>.
              </p>
              <p className="mb-3">
                <span className="font-medium text-stone-700">Data Breach Notification:</span> If we
                discover a breach of your personal data, we will notify you without undue delay
                (within 72 hours where required by law) and describe the nature of the breach, what
                data was affected, and what steps we are taking. Law enforcement may request we
                delay notification.
              </p>
              <p className="mb-3">
                <span className="font-medium text-stone-700">Subprocessors:</span> We work with
                several trusted service providers who process data on our behalf: Clerk
                (authentication and billing), Cloudflare (real-time infrastructure), Supabase
                (database), Loops (email), Sentry (error monitoring), and Vercel (hosting). We
                maintain a list of current subprocessors and will notify you of any material
                changes. <ContactLink>Contact us</ContactLink> to request the current subprocessor
                list.
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
