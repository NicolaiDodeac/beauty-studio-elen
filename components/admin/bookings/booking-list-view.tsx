import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Edit, Trash2, CheckCircle, XCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Mock data for bookings
const bookings = [
  {
    id: 1,
    client: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "123-456-7890",
    service: "Permanent Makeup",
    date: "May 15, 2025",
    time: "2:00 PM",
    duration: "2 hours",
    status: "confirmed",
    notes: "First-time client, consultation done",
  },
  {
    id: 2,
    client: "Emily Davis",
    email: "emily.d@example.com",
    phone: "123-456-7891",
    service: "Eyelash Extensions",
    date: "May 16, 2025",
    time: "10:00 AM",
    duration: "1.5 hours",
    status: "confirmed",
    notes: "Returning client, classic set",
  },
  {
    id: 3,
    client: "Michael Brown",
    email: "michael.b@example.com",
    phone: "123-456-7892",
    service: "Facial Treatment",
    date: "May 16, 2025",
    time: "3:30 PM",
    duration: "1 hour",
    status: "pending",
    notes: "New client, sensitive skin",
  },
  {
    id: 4,
    client: "Jessica Wilson",
    email: "jessica.w@example.com",
    phone: "123-456-7893",
    service: "Permanent Makeup",
    date: "May 17, 2025",
    time: "11:00 AM",
    duration: "2 hours",
    status: "confirmed",
    notes: "Touch-up appointment",
  },
  {
    id: 5,
    client: "David Thompson",
    email: "david.t@example.com",
    phone: "123-456-7894",
    service: "Eyelash Extensions",
    date: "May 18, 2025",
    time: "1:00 PM",
    duration: "1.5 hours",
    status: "cancelled",
    notes: "Cancelled due to illness",
  },
]

export default function BookingListView() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Bookings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="p-4 border rounded-lg bg-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <User className="h-5 w-5 text-gray-500 mr-2" />
                  <h3 className="font-medium text-gray-900">{booking.client}</h3>
                  <Badge
                    className={`ml-3 ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : booking.status === "pending"
                          ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                          : "bg-red-100 text-red-800 hover:bg-red-100"
                    }`}
                  >
                    {booking.status}
                  </Badge>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </Button>
                  {booking.status === "pending" && (
                    <>
                      <Button variant="outline" size="sm" className="text-green-600">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Confirm
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600">
                        <XCircle className="h-4 w-4 mr-1" />
                        Cancel
                      </Button>
                    </>
                  )}
                  {booking.status !== "cancelled" && (
                    <Button variant="outline" size="sm" className="text-red-600">
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Service</p>
                  <p className="font-medium">{booking.service}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Contact</p>
                  <p className="text-sm">{booking.email}</p>
                  <p className="text-sm">{booking.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Appointment</p>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-3.5 w-3.5 mr-1 text-gray-500" />
                    {booking.date}
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-3.5 w-3.5 mr-1 text-gray-500" />
                    {booking.time} ({booking.duration})
                  </div>
                </div>
              </div>

              {booking.notes && (
                <div className="mt-2 text-sm">
                  <p className="text-gray-500 mb-1">Notes:</p>
                  <p className="text-gray-700">{booking.notes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
