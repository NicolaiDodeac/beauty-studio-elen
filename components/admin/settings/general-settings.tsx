"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Save } from "lucide-react"

export default function GeneralSettings() {
  const [businessName, setBusinessName] = useState("Elen.MakeUp.Telford")
  const [email, setEmail] = useState("info@elenmakeup.com")
  const [phone, setPhone] = useState("+44 (0) 1234 567890")
  const [address, setAddress] = useState("123 Beauty Street\nTelford, TF1 1AA\nUnited Kingdom")
  const [description, setDescription] = useState(
    "Premium beauty services including semi-permanent makeup, eyelash extensions, and more.",
  )
  const [enableBooking, setEnableBooking] = useState(true)
  const [requireDeposit, setRequireDeposit] = useState(true)
  const [depositAmount, setDepositAmount] = useState("50")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, this would be an API call to save the settings
      await new Promise((resolve) => setTimeout(resolve, 1500))
      // Show success message
    } catch (error) {
      console.error("Error saving settings:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>General Settings</CardTitle>
        <CardDescription>Manage your business information and general settings</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="business-name">Business Name</Label>
            <Input id="business-name" value={businessName} onChange={(e) => setBusinessName(e.target.value)} required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Business Address</Label>
            <Textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} rows={3} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Business Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              required
            />
          </div>

          <div className="space-y-4 pt-4 border-t">
            <h3 className="font-medium">Booking Settings</h3>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="enable-booking">Enable Online Booking</Label>
                <p className="text-sm text-gray-500">Allow clients to book appointments online</p>
              </div>
              <Switch id="enable-booking" checked={enableBooking} onCheckedChange={setEnableBooking} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="require-deposit">Require Deposit</Label>
                <p className="text-sm text-gray-500">Require a deposit payment to confirm bookings</p>
              </div>
              <Switch id="require-deposit" checked={requireDeposit} onCheckedChange={setRequireDeposit} />
            </div>

            {requireDeposit && (
              <div className="space-y-2">
                <Label htmlFor="deposit-amount">Deposit Amount (£)</Label>
                <Input
                  id="deposit-amount"
                  type="number"
                  min="0"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  className="max-w-xs"
                />
              </div>
            )}
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" onClick={handleSubmit} disabled={isSubmitting} className="bg-pink-600 hover:bg-pink-700">
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
