import type { Metadata } from "next"
import Link from "next/link"

import {
  SITE_ADDRESS_LINES,
  SITE_BUSINESS_DISPLAY_NAME,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  SITE_PUBLIC_EMAIL,
  SITE_WHATSAPP_DEFAULT_MESSAGE,
  siteMailtoHref,
  siteWhatsAppUrl,
} from "@/lib/site-contact"
import { SITE_INSTAGRAM_URL } from "@/lib/site-social"

export const metadata: Metadata = {
  title: "Privacy Policy | ELEN Makeup Telford",
  description:
    "How ELEN Makeup Telford collects, uses, and stores personal information — clear guidance for clients and website visitors (UK GDPR aligned).",
}

export default function PrivacyPolicyPage() {
  const addressBlock = SITE_ADDRESS_LINES.join(", ")
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="mt-6 rounded-lg border border-stone-200/90 bg-luxury-champagne/60 p-4 text-sm leading-relaxed text-stone-700">
        <p>
          This page is provided for transparency and will be reviewed periodically as the website and booking systems
          evolve. For specialist compliance advice, consult a qualified professional — this wording aims to be clear and
          approachable for clients.
        </p>
      </div>

      <div className="prose prose-stone mt-10 max-w-none space-y-6 text-base leading-relaxed text-gray-800">
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">1. Who we are</h2>
          <p>
            {SITE_BUSINESS_DISPLAY_NAME} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is the data controller for personal
            information collected through this website and in the course of taking bookings and enquiries, where
            applicable.
          </p>
          <p>
            <strong>Contact:</strong> {addressBlock}. Phone: {SITE_PHONE_DISPLAY} (
            <a className="text-amber-800 underline underline-offset-2" href={`tel:${SITE_PHONE_TEL.replace(/\s/g, "")}`}>
              call
            </a>
            ). Email:{" "}
            <a className="text-amber-800 underline underline-offset-2" href={siteMailtoHref("Privacy enquiry")}>
              {SITE_PUBLIC_EMAIL}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">2. What information we collect</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Contact form:</strong> name, email address, phone number if you provide it, subject, and message
              content.
            </li>
            <li>
              <strong>WhatsApp / Instagram:</strong> messages you send us and metadata provided by those platforms (for
              example display name). See Meta/WhatsApp privacy notices for how they process data on their side.
            </li>
            <li>
              <strong>Bookings:</strong> when you book via Booksy, your appointment details are processed by Booksy as
              their privacy policy describes. We receive the information needed to deliver your appointment.
            </li>
            <li>
              <strong>Payments:</strong> if you pay a deposit or balance online, payment details are handled by our
              payment provider (for example Stripe). We do not store your full card number on this website.
            </li>
            <li>
              <strong>Website usage:</strong> basic server and security logs may include IP address, browser type, and
              pages requested. We do not use invasive tracking cookies by default; if we add analytics (such as Plausible
              or Google Analytics), we will update this policy and, where required, ask for consent.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">3. Why we use your information</h2>
          <p>We use personal data to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>reply to enquiries and manage appointments;</li>
            <li>deliver treatments safely (including patch tests and health notes where relevant);</li>
            <li>take payments you have agreed to;</li>
            <li>keep our website secure and fix technical issues;</li>
            <li>meet legal obligations (for example tax and accounting records).</li>
          </ul>
          <p>
            Our lawful bases under UK GDPR typically include <strong>contract</strong> (services you ask for),{" "}
            <strong>legitimate interests</strong> (running a small business and responding to messages), and{" "}
            <strong>legal obligation</strong> where the law requires retention.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">4. Booking via Booksy</h2>
          <p>
            Online scheduling is provided through Booksy. Their platform hosts booking flows, reminders, and related
            communications according to their terms and privacy policy. We recommend reading Booksy&apos;s policy when you
            create or manage an account there.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">5. Payments (including Stripe)</h2>
          <p>
            Card payments may be processed by Stripe or another recognised provider. Card data is transmitted securely to
            the payment processor; we typically receive confirmation of payment, not your full card details. Please refer
            to Stripe&apos;s privacy notice for how they handle payment information.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">6. Social messaging</h2>
          <p>
            If you contact us on Instagram ({SITE_INSTAGRAM_URL}) or WhatsApp (
            <a
              href={siteWhatsAppUrl(SITE_WHATSAPP_DEFAULT_MESSAGE)}
              className="text-amber-800 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              open chat
            </a>
            ), your messages are processed by those services as well as by us. Do not send sensitive health information
            unless you are comfortable with platform policies.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">7. How long we keep information</h2>
          <p>
            We keep enquiry and client records only as long as needed: for example, active appointment correspondence,
            legal record-keeping (tax), or limited marketing where you have opted in. When data is no longer required, we
            delete or anonymise it in line with good practice for a small studio.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">8. Sharing information</h2>
          <p>We may share data with:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Booksy (appointments);</li>
            <li>payment processors (e.g. Stripe);</li>
            <li>professional advisers (e.g. accountants) where required;</li>
            <li>authorities if the law requires it.</li>
          </ul>
          <p>We do not sell your personal information.</p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">9. Your rights (UK GDPR)</h2>
          <p>You may have the right to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>access the personal data we hold about you;</li>
            <li>correct inaccurate data;</li>
            <li>erase data in certain circumstances;</li>
            <li>restrict or object to processing;</li>
            <li>data portability where applicable;</li>
            <li>withdraw consent where processing is based on consent;</li>
            <li>lodge a complaint with the ICO (Information Commissioner&apos;s Office) in the UK.</li>
          </ul>
          <p>
            To exercise rights, email{" "}
            <a className="text-amber-800 underline underline-offset-2" href={siteMailtoHref("Data subject request")}>
              {SITE_PUBLIC_EMAIL}
            </a>
            . We may ask for reasonable identity checks.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">10. Security</h2>
          <p>
            We use reasonable technical and organisational measures to protect personal information. No online service is
            completely risk-free; please use strong passwords on third-party accounts (Booksy, email) where relevant.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">11. Updates</h2>
          <p>
            We may update this policy when our practices or the law change. The &ldquo;Last updated&rdquo; date at the top
            will change — please check back occasionally.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">12. Contact</h2>
          <p>
            Questions about privacy? Email{" "}
            <a className="text-amber-800 underline underline-offset-2" href={siteMailtoHref("Privacy question")}>
              {SITE_PUBLIC_EMAIL}
            </a>{" "}
            or use our{" "}
            <Link href="/contact" className="text-amber-800 underline underline-offset-2">
              contact form
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
