import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Filter, Search, PlusCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import BookingCalendarView from "@/components/admin/bookings/booking-calendar-view"
import BookingListView from "@/components/admin/bookings/booking-list-view"

export const metadata = {
  title: "Bookings Management | Admin Dashboard",
  description: "Manage client bookings for Elen.MakeUp.Telford",
}

export default function AdminBookingsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Bookings Management</h1>
        <Button className="bg-pink-600 hover:bg-pink-700">
          <PlusCircle className="h-4 w-4 mr-2" />
          New Booking
        </Button>
      </div>

      <Tabs defaultValue="calendar" className="space-y-4">
        <TabsList>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <div className="flex items-center space-x-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search bookings by client name, service..."
              className="w-full pl-8 bg-white"
            />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <CalendarIcon className="h-4 w-4 mr-2" />
            Date Range
          </Button>
        </div>

        <TabsContent value="calendar" className="space-y-4">
          <BookingCalendarView />
        </TabsContent>

        <TabsContent value="list" className="space-y-4">
          <BookingListView />
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">You have 8 upcoming bookings.</p>
              {/* Upcoming bookings would be listed here */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Past Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">You have 24 past bookings.</p>
              {/* Past bookings would be listed here */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
