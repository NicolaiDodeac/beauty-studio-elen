import type { Metadata } from "next"
import Link from "next/link"

import {
  SITE_ADDRESS_LINES,
  SITE_BUSINESS_DISPLAY_NAME,
  SITE_PHONE_DISPLAY,
  SITE_PUBLIC_EMAIL,
  siteMailtoHref,
} from "@/lib/site-contact"

export const metadata: Metadata = {
  title: "Terms & Conditions | ELEN Makeup Telford",
  description:
    "Website terms for ELEN Makeup Telford — bookings via Booksy, consultations, deposits, and sensible liability limits in plain English.",
}

export default function TermsPage() {
  const addressBlock = SITE_ADDRESS_LINES.join(", ")
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-heading text-4xl font-bold tracking-tight text-gray-900">Terms &amp; Conditions</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Last updated: {new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="mt-6 rounded-lg border border-amber-200/80 bg-amber-50/50 p-4 text-sm leading-relaxed text-amber-950">
        <p>
          <strong>Practical draft.</strong> These terms are intended for a typical UK beauty studio website. Please have
          them reviewed before relying on them legally — they aim to be fair and readable, not frightening.
        </p>
      </div>

      <div className="prose prose-stone mt-10 max-w-none space-y-6 text-base leading-relaxed text-gray-800">
        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">1. About these terms</h2>
          <p>
            These terms govern use of this website and general expectations when you engage with {SITE_BUSINESS_DISPLAY_NAME}
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;). Treatment-specific paperwork may apply at your appointment.
          </p>
          <p>
            <strong>Studio:</strong> {addressBlock}. <strong>Phone:</strong> {SITE_PHONE_DISPLAY}.{" "}
            <strong>Email:</strong>{" "}
            <a className="text-amber-800 underline underline-offset-2" href={siteMailtoHref("Terms enquiry")}>
              {SITE_PUBLIC_EMAIL}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">2. Website information</h2>
          <p>
            Content on this site describes services and education in general terms. Photos and galleries may include
            illustrative or incoming imagery — anything labelled as such is not presented as a guaranteed outcome for your
            skin.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">3. Consultations and bookings</h2>
          <p>
            Consultations are intended to discuss suitability, mapping, healing, and pricing. Booking slots are normally
            secured through{" "}
            <strong>Booksy</strong> (and studio policies shown there). Deposits, cancellations, rescheduling, and refunds
            follow <strong>Booksy and our studio policy</strong> as communicated at booking — please check your confirmation
            and Booksy profile messages.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">4. Medical advice</h2>
          <p>
            We provide cosmetic tattooing and beauty services, not medical diagnosis or treatment. For medical concerns,
            medications, or conditions that affect healing, speak with your GP or consultant. PMU suitability is assessed at
            consultation; we may decline treatment where it would not be safe or appropriate.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">5. Intellectual property</h2>
          <p>
            Text, branding, and imagery on this website belong to us or our licensors unless stated. You may not reuse
            content commercially without permission. Client photography used with consent remains protected — please do not
            copy client imagery from the site without rights.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">6. External links</h2>
          <p>
            Links to Booksy, Instagram, WhatsApp, maps, or payment providers are for convenience. Their sites have their
            own terms; we are not responsible for their availability or content.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">7. Liability</h2>
          <p>
            Nothing in these terms excludes liability that cannot be excluded under English law. Subject to that, we are not
            liable for indirect losses, lost profits, or events outside reasonable control. Our liability arising from
            services is limited to the fee paid for the relevant appointment where permitted — detailed liability caps may
            appear on treatment consent forms.
          </p>
          <p>
            We take reasonable care with treatments and hygiene; individual healing varies with skin, lifestyle, and
            aftercare. Follow written aftercare to support results.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">8. Behaviour</h2>
          <p>
            We reserve the right to refuse service where behaviour is abusive, unsafe, or disrespectful to staff or other
            clients.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">9. Changes</h2>
          <p>
            We may update these terms; the &ldquo;Last updated&rdquo; date will change. Continued use of the website after
            changes means you accept the revised terms.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">10. Law</h2>
          <p>
            These terms are governed by the laws of England and Wales. Courts of England and Wales have exclusive
            jurisdiction, subject to mandatory consumer protections where they apply.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-semibold text-gray-900">11. Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a className="text-amber-800 underline underline-offset-2" href={siteMailtoHref("Terms question")}>
              {SITE_PUBLIC_EMAIL}
            </a>{" "}
            or use{" "}
            <Link href="/contact" className="text-amber-800 underline underline-offset-2">
              contact
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  )
}
