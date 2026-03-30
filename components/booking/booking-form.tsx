"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

const services = [
  { id: "permanent-makeup", name: "Permanent Makeup" },
  { id: "eyelash-extensions", name: "Eyelash Extensions" },
  { id: "facial-treatments", name: "Facial Treatments" },
]

const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

export default function BookingForm() {
  const router = useRouter()
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [service, setService] = useState<string>("")
  const [time, setTime] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [notes, setNotes] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [step, setStep] = useState<number>(1)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "")
      if (baseUrl) {
        await fetch(`${baseUrl}/functions/v1/send-sms`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            phone,
            service: services.find((s) => s.id === service)?.name || "Service",
            date: date?.toISOString().split("T")[0],
            time,
          }),
        })
      }

      await new Promise((resolve) => setTimeout(resolve, 1000))
      // This form does not create a Supabase booking first; use /booking for the full flow.
      router.push("/booking/payment")
    } catch (error) {
      console.error("Booking error:", error)
      setIsLoading(false)
    }
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Booking Details</CardTitle>
        <CardDescription>
          {step === 1 && "Select your service and appointment time"}
          {step === 2 && "Provide your contact information"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="service">Service</Label>
                <Select value={service} onValueChange={setService} required>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Date</Label>
                <div className="border rounded-md p-2">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => {
                      // Disable past dates and Sundays
                      const today = new Date()
                      today.setHours(0, 0, 0, 0)
                      return date < today || date.getDay() === 0
                    }}
                    className="mx-auto"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Select value={time} onValueChange={setTime} required disabled={!date}>
                  <SelectTrigger id="time">
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Special Requests or Notes</Label>
                <Textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} />
              </div>

              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium text-gray-900 mb-2">Booking Summary</h3>
                <p className="text-sm text-gray-600">
                  <strong>Service:</strong> {services.find((s) => s.id === service)?.name}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Date:</strong> {date?.toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Time:</strong> {time}
                </p>
              </div>
            </div>
          )}
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 && (
          <Button variant="outline" onClick={prevStep} disabled={isLoading}>
            Back
          </Button>
        )}
        {step === 1 && (
          <Button
            onClick={nextStep}
            disabled={!service || !date || !time}
            className="ml-auto bg-pink-600 hover:bg-pink-700"
          >
            Next
          </Button>
        )}
        {step === 2 && (
          <Button
            onClick={handleSubmit}
            disabled={isLoading || !name || !email || !phone}
            className="ml-auto bg-pink-600 hover:bg-pink-700"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Proceed to Payment"
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
