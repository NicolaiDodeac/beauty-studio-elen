import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  const { name, phone, service, date, time } = await req.json()

  const TWILIO_ACCOUNT_SID = Deno.env.get("TWILIO_ACCOUNT_SID")
  const TWILIO_AUTH_TOKEN = Deno.env.get("TWILIO_AUTH_TOKEN")
  const TWILIO_FROM_NUMBER = Deno.env.get("TWILIO_FROM_NUMBER")

  const payload = new URLSearchParams({
    To: phone,
    From: TWILIO_FROM_NUMBER!,
    Body: `Hi ${name}! You're booked for ${service} at ${time} on ${date} with Elen.MakeUp.Telford 💄`,
  })

  const res = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization:
          "Basic " + btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload,
    }
  )

  const data = await res.json()
  return new Response(JSON.stringify(data), {  status: res.status,
    headers: { "Content-Type": "application/json"},
   })
})
