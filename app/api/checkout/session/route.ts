// app/api/checkout/session/route.ts
import { NextResponse } from "next/server"
import Stripe from "stripe"

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable")
}

if (!process.env.NEXT_PUBLIC_SITE_URL) {
  throw new Error("Missing NEXT_PUBLIC_SITE_URL environment variable")
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-04-30.basil",
})

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const bookingId = body.booking_id;

    if (!bookingId) {
      return NextResponse.json(
        { error: "Missing booking_id in request" },
        { status: 400 }
      );
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
            unit_amount: 5000, // £50.00
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/booking/confirmation`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/booking/cancelled`,
      metadata: {
        booking_id: bookingId,
      },
    })

    if (!session.url) {
      throw new Error("No checkout URL returned from Stripe");
    }

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error("Stripe error:", err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Stripe checkout failed" },
      { status: 500 }
    )
  }
}
