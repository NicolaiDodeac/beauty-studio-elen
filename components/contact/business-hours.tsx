import { Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BusinessHours() {
  const hours = [
    { day: "Monday", hours: "10:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "10:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "10:00 AM - 7:00 PM" },
    { day: "Thursday", hours: "10:00 AM - 7:00 PM" },
    { day: "Friday", hours: "10:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ]

  // Get current day to highlight it
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" })

  return (
    <Card className="border-0 shadow-md">
      <CardHeader className="bg-[#F8F5F2] border-b">
        <CardTitle className="text-xl font-heading flex items-center">
          <Clock className="h-5 w-5 mr-2" />
          Business Hours
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-2">
          {hours.map((item) => (
            <div
              key={item.day}
              className={`flex justify-between py-2 ${
                item.day === today ? "bg-[#F8F5F2] px-3 rounded-md font-medium" : ""
              }`}
            >
              <span>{item.day}</span>
              <span className={item.hours === "Closed" ? "text-red-500" : ""}>{item.hours}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
