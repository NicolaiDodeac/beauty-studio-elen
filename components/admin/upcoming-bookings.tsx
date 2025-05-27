import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User } from "lucide-react"

// Mock data for upcoming bookings
const upcomingBookings = [
  {
    id: 1,
    client: "Sarah Johnson",
    service: "Permanent Makeup",
    date: "May 15, 2025",
    time: "2:00 PM",
    status: "confirmed",
  },
  {
    id: 2,
    client: "Emily Davis",
    service: "Eyelash Extensions",
    date: "May 16, 2025",
    time: "10:00 AM",
    status: "confirmed",
  },
  {
    id: 3,
    client: "Michael Brown",
    service: "Facial Treatment",
    date: "May 16, 2025",
    time: "3:30 PM",
    status: "pending",
  },
  {
    id: 4,
    client: "Jessica Wilson",
    service: "Permanent Makeup",
    date: "May 17, 2025",
    time: "11:00 AM",
    status: "confirmed",
  },
]

export default function UpcomingBookings() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Upcoming Bookings</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingBookings.map((booking) => (
            <div key={booking.id} className="flex items-start p-3 rounded-lg bg-gray-50">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500" />
                  <p className="font-medium">{booking.client}</p>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      booking.status === "confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{booking.service}</p>
                <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {booking.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {booking.time}
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Details
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
