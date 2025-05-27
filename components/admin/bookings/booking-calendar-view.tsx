"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { format, addDays, startOfWeek, addWeeks, subWeeks, isSameDay } from "date-fns"

// Mock data for bookings
const bookings = [
  {
    id: 1,
    client: "Sarah Johnson",
    service: "Permanent Makeup",
    date: new Date(2025, 4, 15),
    time: "14:00",
    duration: 120,
    status: "confirmed",
  },
  {
    id: 2,
    client: "Emily Davis",
    service: "Eyelash Extensions",
    date: new Date(2025, 4, 16),
    time: "10:00",
    duration: 90,
    status: "confirmed",
  },
  {
    id: 3,
    client: "Michael Brown",
    service: "Facial Treatment",
    date: new Date(2025, 4, 16),
    time: "15:30",
    duration: 60,
    status: "pending",
  },
  {
    id: 4,
    client: "Jessica Wilson",
    service: "Permanent Makeup",
    date: new Date(2025, 4, 17),
    time: "11:00",
    duration: 120,
    status: "confirmed",
  },
]

// Business hours
const businessHours = {
  start: 9, // 9 AM
  end: 18, // 6 PM
}

export default function BookingCalendarView() {
  const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date(), { weekStartsOn: 1 }))

  // Generate time slots
  const timeSlots = []
  for (let hour = businessHours.start; hour < businessHours.end; hour++) {
    timeSlots.push(`${hour}:00`)
    timeSlots.push(`${hour}:30`)
  }

  // Generate days for the week
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeek, i))

  // Navigate to previous week
  const goToPreviousWeek = () => {
    setCurrentWeek(subWeeks(currentWeek, 1))
  }

  // Navigate to next week
  const goToNextWeek = () => {
    setCurrentWeek(addWeeks(currentWeek, 1))
  }

  // Get bookings for a specific day and time
  const getBookingsForSlot = (day: Date, time: string) => {
    return bookings.filter((booking) => isSameDay(booking.date, day) && booking.time === time)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Booking Calendar</CardTitle>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={goToPreviousWeek}>
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          <span className="text-sm font-medium">
            {format(currentWeek, "MMMM d")} - {format(addDays(currentWeek, 6), "MMMM d, yyyy")}
          </span>
          <Button variant="outline" size="sm" onClick={goToNextWeek}>
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Calendar header with days */}
            <div className="grid grid-cols-8 gap-1 mb-2">
              <div className="h-12 flex items-center justify-center font-medium text-gray-500 text-sm">Time</div>
              {weekDays.map((day) => (
                <div key={day.toString()} className="h-12 flex flex-col items-center justify-center">
                  <div className="text-sm font-medium">{format(day, "EEE")}</div>
                  <div className="text-xs text-gray-500">{format(day, "MMM d")}</div>
                </div>
              ))}
            </div>

            {/* Calendar body with time slots */}
            <div className="space-y-1">
              {timeSlots.map((time) => (
                <div key={time} className="grid grid-cols-8 gap-1">
                  <div className="h-12 flex items-center justify-center text-xs text-gray-500">{time}</div>
                  {weekDays.map((day) => {
                    const dayBookings = getBookingsForSlot(day, time)
                    return (
                      <div
                        key={day.toString()}
                        className="h-12 border rounded-md relative hover:bg-gray-50 cursor-pointer"
                      >
                        {dayBookings.map((booking) => (
                          <div
                            key={booking.id}
                            className={`absolute inset-0 m-0.5 rounded-sm p-1 text-xs overflow-hidden ${
                              booking.status === "confirmed"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            <div className="font-medium truncate">{booking.client}</div>
                            <div className="truncate">{booking.service}</div>
                          </div>
                        ))}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
