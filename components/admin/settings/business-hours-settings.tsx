"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Save } from "lucide-react"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const hours = Array.from({ length: 24 }, (_, i) => {
  const hour = i % 12 || 12
  const amPm = i < 12 ? "AM" : "PM"
  return `${hour}:00 ${amPm}`
})

export default function BusinessHoursSettings() {
  const [businessHours, setBusinessHours] = useState([
    { day: "Monday", isOpen: true, openTime: "10:00 AM", closeTime: "6:00 PM" },
    { day: "Tuesday", isOpen: true, openTime: "10:00 AM", closeTime: "6:00 PM" },
    { day: "Wednesday", isOpen: true, openTime: "10:00 AM", closeTime: "7:00 PM" },
    { day: "Thursday", isOpen: true, openTime: "10:00 AM", closeTime: "7:00 PM" },
    { day: "Friday", isOpen: true, openTime: "10:00 AM", closeTime: "6:00 PM" },
    { day: "Saturday", isOpen: true, openTime: "9:00 AM", closeTime: "4:00 PM" },
    { day: "Sunday", isOpen: false, openTime: "10:00 AM", closeTime: "4:00 PM" },
  ])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateBusinessHour = (index: number, field: string, value: any) => {
    const updatedHours = [...businessHours]
    updatedHours[index] = { ...updatedHours[index], [field]: value }
    setBusinessHours(updatedHours)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real app, this would be an API call to save the business hours
      await new Promise((resolve) => setTimeout(resolve, 1500))
      // Show success message
    } catch (error) {
      console.error("Error saving business hours:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Hours</CardTitle>
        <CardDescription>Set your regular business hours</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {businessHours.map((day, index) => (
            <div key={day.day} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              <div className="flex items-center justify-between md:justify-start">
                <Label htmlFor={`${day.day}-open`} className="mr-4">
                  {day.day}
                </Label>
                <Switch
                  id={`${day.day}-open`}
                  checked={day.isOpen}
                  onCheckedChange={(checked) => updateBusinessHour(index, "isOpen", checked)}
                />
              </div>

              {day.isOpen ? (
                <>
                  <div className="space-y-1">
                    <Label htmlFor={`${day.day}-open-time`} className="text-xs">
                      Open Time
                    </Label>
                    <Select
                      value={day.openTime}
                      onValueChange={(value) => updateBusinessHour(index, "openTime", value)}
                    >
                      <SelectTrigger id={`${day.day}-open-time`}>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {hours.map((hour) => (
                          <SelectItem key={`${day.day}-open-${hour}`} value={hour}>
                            {hour}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor={`${day.day}-close-time`} className="text-xs">
                      Close Time
                    </Label>
                    <Select
                      value={day.closeTime}
                      onValueChange={(value) => updateBusinessHour(index, "closeTime", value)}
                    >
                      <SelectTrigger id={`${day.day}-close-time`}>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {hours.map((hour) => (
                          <SelectItem key={`${day.day}-close-${hour}`} value={hour}>
                            {hour}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </>
              ) : (
                <div className="col-span-2 text-sm text-gray-500">Closed</div>
              )}
            </div>
          ))}
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
