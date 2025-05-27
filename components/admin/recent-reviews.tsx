import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MessageSquare } from "lucide-react"

// Mock data for recent reviews
const recentReviews = [
  {
    id: 1,
    client: "Sarah Johnson",
    service: "Permanent Makeup",
    date: "May 10, 2025",
    rating: 5,
    comment:
      "Absolutely love my new eyebrows! The technician was professional and made me feel comfortable throughout the entire process.",
    responded: true,
  },
  {
    id: 2,
    client: "Emily Davis",
    service: "Eyelash Extensions",
    date: "May 8, 2025",
    rating: 4,
    comment: "Great service and beautiful results. Would have given 5 stars but the appointment started a bit late.",
    responded: false,
  },
  {
    id: 3,
    client: "Michael Brown",
    service: "Facial Treatment",
    date: "May 5, 2025",
    rating: 5,
    comment:
      "The facial was exactly what my skin needed. The staff was knowledgeable and recommended products perfect for my skin type.",
    responded: false,
  },
]

export default function RecentReviews() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Reviews</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentReviews.map((review) => (
            <div key={review.id} className="p-3 rounded-lg bg-gray-50">
              <div className="flex items-center justify-between">
                <p className="font-medium">{review.client}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {review.service} • {review.date}
              </p>
              <p className="text-sm mt-2">{review.comment}</p>
              <div className="mt-3 flex justify-end">
                {review.responded ? (
                  <span className="text-xs text-gray-500 flex items-center">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Responded
                  </span>
                ) : (
                  <Button variant="outline" size="sm">
                    Respond
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
