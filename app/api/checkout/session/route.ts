import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST(req: Request) {
  const stripeSecret = process.env.STRIPE_SECRET_KEY
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (!stripeSecret || !siteUrl) {
    return NextResponse.json(
      { error: "Payment is not configured (missing STRIPE_SECRET_KEY or NEXT_PUBLIC_SITE_URL)." },
      { status: 503 }
    )
  }

  const stripe = new Stripe(stripeSecret, {
    apiVersion: "2025-04-30.basil",
  })

  try {
    const text = await req.text()
    const body = text ? JSON.parse(text) : {}
    const bookingId = body.booking_id as string | undefined

    if (!bookingId) {
      return NextResponse.json(
        { error: "Missing booking_id in request" },
        { status: 400 }
      )
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: "Booking Deposit – Elen.MakeUp.Telford",
            },
            unit_amount: 5000,
          },
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/booking/confirmation`,
      cancel_url: `${siteUrl}/booking/cancelled`,
      metadata: {
        booking_id: bookingId,
      },
    })

    if (!session.url) {
      throw new Error("No checkout URL returned from Stripe")
    }

    return NextResponse.json({ url: session.url })
  } catch (err) {
    if (err instanceof SyntaxError) {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
    }
    console.error("Stripe error:", err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Stripe checkout failed" },
      { status: 500 }
    )
  }
}
