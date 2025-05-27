"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ClientInfoFormProps {
  clientInfo: {
    name: string
    email: string
    phone: string
    notes: string
  }
  onChange: (field: string, value: string) => void
  selectedService: string
  selectedDate: string
  selectedTime: string
}

export default function ClientInfoForm({
  clientInfo,
  onChange,
  selectedService,
  selectedDate,
  selectedTime,
}: ClientInfoFormProps) {
  return (
    <div className="space-y-6">
      <div className="bg-[#F8F5F2] p-4 rounded-md mb-6">
        <h3 className="font-medium text-gray-900 mb-2">Booking Summary</h3>
        <p className="text-sm text-gray-600">
          <strong>Service:</strong> {selectedService}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Date:</strong> {selectedDate}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Time:</strong> {selectedTime}
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={clientInfo.name}
            onChange={(e) => onChange("name", e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={clientInfo.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={clientInfo.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Special Requests or Notes (Optional)</Label>
          <Textarea
            id="notes"
            value={clientInfo.notes}
            onChange={(e) => onChange("notes", e.target.value)}
            placeholder="Any special requests or information Elen should know"
            rows={3}
          />
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 p-4 rounded-md text-sm text-amber-800">
        <p className="font-medium mb-1">Important Information:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>A £50 deposit will be required to secure your booking.</li>
          <li>Please arrive 5-10 minutes before your appointment time.</li>
          <li>24-hour cancellation notice is required to avoid charges.</li>
        </ul>
      </div>
    </div>
  )
}
