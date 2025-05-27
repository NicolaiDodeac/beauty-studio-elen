"use client"

import { useState } from "react"
import Image from "next/image"
import { CreditCard, Calendar, Lock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

interface PaymentOptionsProps {
  selectedPaymentMethod: string
  onSelectPaymentMethod: (method: string) => void
  depositAmount: number
  servicePrice: number
  serviceName: string
  selectedDate: string
  selectedTime: string
}

export default function PaymentOptions({
  selectedPaymentMethod,
  onSelectPaymentMethod,
  depositAmount,
  servicePrice,
  serviceName,
  selectedDate,
  selectedTime,
}: PaymentOptionsProps) {
  const [cardNumber, setCardNumber] = useState("")
  const [cardName, setCardName] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvc, setCvc] = useState("")

  // Format card number with spaces
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

  // Format expiry date with slash
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")

    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`
    }

    return v
  }

  const paymentMethods = [
    {
      id: "card",
      name: "Credit/Debit Card",
      icon: "/placeholder.svg?height=30&width=50",
      description: "Pay securely with your credit or debit card",
    },
    {
      id: "apple-pay",
      name: "Apple Pay",
      icon: "/placeholder.svg?height=30&width=50",
      description: "Quick and secure payment with Apple Pay",
    },
    {
      id: "klarna",
      name: "Klarna",
      icon: "/placeholder.svg?height=30&width=50",
      description: "Pay in 3 interest-free installments",
    },
    {
      id: "paypal",
      name: "PayPal",
      icon: "/placeholder.svg?height=30&width=50",
      description: "Pay securely with your PayPal account",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-[#F8F5F2] p-4 rounded-md mb-6">
        <h3 className="font-medium text-gray-900 mb-2">Booking Summary</h3>
        <p className="text-sm text-gray-600">
          <strong>Service:</strong> {serviceName}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Date:</strong> {selectedDate}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Time:</strong> {selectedTime}
        </p>
        <div className="mt-3 pt-3 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            <strong>Service Price:</strong> £{servicePrice.toFixed(2)}
          </p>
          <p className="text-sm font-medium text-gray-900 mt-1">
            <strong>Deposit Required Today:</strong> £{depositAmount.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            The remaining balance of £{(servicePrice - depositAmount).toFixed(2)} will be due at your appointment.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4 font-heading">Select Payment Method</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {paymentMethods.map((method) => (
            <Card
              key={method.id}
              className={`p-4 cursor-pointer border transition-all ${
                selectedPaymentMethod === method.id ? "border-amber-600 bg-[#F8F5F2]" : "hover:border-gray-300"
              }`}
              onClick={() => onSelectPaymentMethod(method.id)}
            >
              <div className="flex items-center gap-3">
                <div className="relative h-8 w-12">
                  <Image src={method.icon || "/placeholder.svg"} alt={method.name} fill className="object-contain" />
                </div>
                <div>
                  <h4 className="font-medium">{method.name}</h4>
                  <p className="text-xs text-gray-500">{method.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedPaymentMethod === "card" && (
        <div className="mt-6 p-4 border rounded-md">
          <h4 className="font-medium mb-4">Enter Card Details</h4>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardName">Name on Card</Label>
              <Input
                id="cardName"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="John Smith"
              />
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
                  />
                  <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedPaymentMethod === "apple-pay" && (
        <div className="mt-6 p-4 border rounded-md bg-[#F8F5F2] text-center">
          <div className="mb-4">
            <div className="inline-block bg-black text-white rounded-md px-6 py-2 font-medium">
              Pay with <span className="font-semibold">Apple Pay</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Click "Complete Booking" below to continue with Apple Pay payment of £{depositAmount.toFixed(2)}
          </p>
        </div>
      )}

      {selectedPaymentMethod === "klarna" && (
        <div className="mt-6 p-4 border rounded-md bg-[#F8F5F2]">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative h-8 w-16">
              <Image src="/placeholder.svg?height=30&width=60" alt="Klarna" fill className="object-contain" />
            </div>
            <h4 className="font-medium">Pay in 3 interest-free installments</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-white rounded">
              <span>Today</span>
              <span className="font-medium">£{(depositAmount / 3).toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-white rounded">
              <span>In 30 days</span>
              <span className="font-medium">£{(depositAmount / 3).toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-white rounded">
              <span>In 60 days</span>
              <span className="font-medium">£{(depositAmount / 3).toFixed(2)}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Click "Complete Booking" below to continue with Klarna. You'll be redirected to complete your payment.
          </p>
        </div>
      )}

      {selectedPaymentMethod === "paypal" && (
        <div className="mt-6 p-4 border rounded-md bg-[#F8F5F2] text-center">
          <div className="mb-4">
            <div className="inline-block bg-[#0070BA] text-white rounded-md px-6 py-2 font-medium">
              Pay with <span className="font-semibold">PayPal</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Click "Complete Booking" below to continue with PayPal payment of £{depositAmount.toFixed(2)}
          </p>
        </div>
      )}

      <div className="bg-amber-50 border border-amber-200 p-4 rounded-md text-sm text-amber-800">
        <p className="font-medium mb-1">Payment Information:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Your payment information is encrypted and secure.</li>
          <li>You're only paying the £{depositAmount.toFixed(2)} deposit today.</li>
          <li>The remaining balance will be due at your appointment.</li>
          <li>Deposit is refundable with 48-hour cancellation notice.</li>
        </ul>
      </div>
    </div>
  )
}
