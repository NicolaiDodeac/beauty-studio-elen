import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import Stripe from "stripe"

export async function POST(req: Request) {
  const stripeSecret = process.env.STRIPE_SECRET_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!stripeSecret || !webhookSecret || !supabaseUrl || !serviceRole) {
    return new NextResponse("Webhook not configured", { status: 503 })
  }

  const stripe = new Stripe(stripeSecret, {
    apiVersion: "2025-04-30.basil",
  })

  const supabase = createClient(supabaseUrl, serviceRole)

  try {
    const body = await req.text()
    const sig = req.headers.get("stripe-signature")

    if (!sig) {
      return new NextResponse("No signature found", { status: 400 })
    }

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown error"
      console.error("Webhook signature verification failed:", message)
      return new NextResponse(`Webhook Error: ${message}`, { status: 400 })
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session
      const bookingId = session.metadata?.booking_id

      if (!bookingId) {
        console.warn("Missing booking_id in metadata")
        return new NextResponse("Missing booking_id", { status: 400 })
      }

      const { error } = await supabase
        .from("bookings")
        .update({ payment_status: "paid" })
        .eq("id", bookingId)

      if (error) {
        console.error("Supabase update error:", error.message)
        return new NextResponse("Failed to update booking", { status: 500 })
      }

      return NextResponse.json({ received: true })
    }

    return new NextResponse("Event type not handled", { status: 200 })
  } catch (error) {
    console.error("Webhook error:", error)
    return new NextResponse("Internal server error", { status: 500 })
  }
}
