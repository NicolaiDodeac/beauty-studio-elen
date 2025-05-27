import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { createClient } from '@supabase/supabase-js'
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY environment variable");
}

if (!process.env.STRIPE_WEBHOOK_SECRET) {
  throw new Error("Missing STRIPE_WEBHOOK_SECRET environment variable");
}

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-04-30.basil",
});

// Initialize Supabase Admin SDK
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req: Request) {
  try {
    const body = await req.text(); // Must use raw body for Stripe signature
    const sig = req.headers.get("stripe-signature");

    if (!sig) {
      return new NextResponse("No signature found", { status: 400 });
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
    } catch (err: any) {
      console.error("Webhook signature verification failed:", err.message);
      return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }

    // Handle specific event types
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const bookingId = session.metadata?.booking_id;

      if (!bookingId) {
        console.warn("⚠️ Missing booking_id in metadata");
        return new NextResponse("Missing booking_id", { status: 400 });
      }

      console.log("✅ Payment received for booking:", bookingId);

      // Update booking status in Supabase
      const { error } = await supabase
        .from("bookings")
        .update({ payment_status: "paid" })
        .eq("id", bookingId);

      if (error) {
        console.error("❌ Supabase update error:", error.message);
        return new NextResponse("Failed to update booking", { status: 500 });
      }

      console.log("✅ Booking updated successfully");
      return NextResponse.json({ received: true });
    }

    // Return 200 for unhandled event types
    return new NextResponse("Event type not handled", { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}