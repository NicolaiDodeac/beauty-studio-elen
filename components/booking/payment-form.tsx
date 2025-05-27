"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CreditCard, Calendar, Lock } from "lucide-react"

export default function PaymentForm() {
  const router = useRouter()
  const [cardNumber, setCardNumber] = useState<string>("")
  const [expiryDate, setExpiryDate] = useState<string>("")
  const [cvc, setCvc] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Mock booking details - in a real app, this would come from  = useState<boolean>(false);

  // Mock booking details - in a real app, this would come from
  // the previous step or context
  const bookingDetails = {
    service: "Permanent Makeup",
    date: "May 15, 2025",
    time: "2:00 PM",
    depositAmount: 50,
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate Stripe payment processing
    try {
      // In a real app, this would be a call to Stripe API
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Redirect to confirmation page
      router.push("/booking/confirmation")
    } catch (error) {
      console.error("Payment error:", error)
      setIsLoading(false)
    }
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")

    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`
    }

    return v
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
        <CardDescription>Pay a deposit to secure your appointment</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <h3 className="font-medium text-gray-900 mb-2">Booking Summary</h3>
              <p className="text-sm text-gray-600">
                <strong>Service:</strong> {bookingDetails.service}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Date:</strong> {bookingDetails.date}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Time:</strong> {bookingDetails.time}
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <strong>Deposit Amount:</strong> ${bookingDetails.depositAmount.toFixed(2)}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Name on Card</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <div className="relative">
                <Input
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  required
                />
                <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <div className="relative">
                  <Input
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                    placeholder="MM/YY"
                    maxLength={5}
                    required
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <div className="relative">
                  <Input
                    id="cvc"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value.replace(/[^0-9]/g, ""))}
                    placeholder="123"
                    maxLength={3}
                    required
                  />
                  <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleSubmit}
          disabled={isLoading || !cardNumber || !expiryDate || !cvc || !name}
          className="w-full bg-pink-600 hover:bg-pink-700"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing Payment...
            </>
          ) : (
            `Pay $${bookingDetails.depositAmount.toFixed(2)} Deposit`
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
