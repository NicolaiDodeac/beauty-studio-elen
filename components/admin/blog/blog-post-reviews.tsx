"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, XCircle, MessageSquare } from "lucide-react"
import { Badge } from "@/components/ui/badge"

// Mock data for blog post reviews
const initialReviews = [
  {
    id: 1,
    postId: 1,
    author: "Sarah Johnson",
    email: "sarah.j@example.com",
    content:
      "This article was so helpful! I've been considering permanent makeup for a while and this answered all my questions.",
    date: "May 12, 2025",
    status: "approved",
  },
  {
    id: 2,
    postId: 1,
    author: "Michael Brown",
    email: "michael.b@example.com",
    content: "Great information. I'd love to see more before and after photos in future articles.",
    date: "May 11, 2025",
    status: "approved",
  },
  {
    id: 3,
    postId: 1,
    author: "Emily Davis",
    email: "emily.d@example.com",
    content:
      "I had my eyebrows done last month and the results are amazing! Totally agree with everything in this article.",
    date: "May 10, 2025",
    status: "pending",
  },
  {
    id: 4,
    postId: 2,
    author: "Jessica Wilson",
    email: "jessica.w@example.com",
    content: "These tips really helped me extend the life of my lash extensions. Thank you!",
    date: "May 9, 2025",
    status: "approved",
  },
  {
    id: 5,
    postId: 2,
    author: "Anonymous",
    email: "anon@example.com",
    content: "This is spam content that should be rejected.",
    date: "May 8, 2025",
    status: "pending",
  },
]

interface BlogPostReviewsProps {
  postId?: number
}

export default function BlogPostReviews({ postId }: BlogPostReviewsProps) {
  const [reviews, setReviews] = useState(initialReviews)
  const [replyTo, setReplyTo] = useState<number | null>(null)
  const [replyContent, setReplyContent] = useState("")
  const [filter, setFilter] = useState<"all" | "approved" | "pending">("all")

  // Filter reviews based on postId if provided, and by status
  const filteredReviews = reviews.filter(
    (review) => (postId ? review.postId === postId : true) && (filter === "all" ? true : review.status === filter),
  )

  const handleApprove = (id: number) => {
    setReviews(reviews.map((review) => (review.id === id ? { ...review, status: "approved" } : review)))
  }

  const handleReject = (id: number) => {
    setReviews(reviews.filter((review) => review.id !== id))
  }

  const handleReply = (id: number) => {
    setReplyTo(replyTo === id ? null : id)
    setReplyContent("")
  }

  const handleSendReply = () => {
    // In a real app, this would send the reply to the user's email
    console.log(`Reply sent to review #${replyTo}: ${replyContent}`)
    setReplyTo(null)
    setReplyContent("")
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Reviews {postId ? "for this Post" : ""}</CardTitle>
        <div className="flex space-x-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-pink-600 hover:bg-pink-700" : ""}
          >
            All
          </Button>
          <Button
            variant={filter === "approved" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("approved")}
            className={filter === "approved" ? "bg-pink-600 hover:bg-pink-700" : ""}
          >
            Approved
          </Button>
          <Button
            variant={filter === "pending" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("pending")}
            className={filter === "pending" ? "bg-pink-600 hover:bg-pink-700" : ""}
          >
            Pending
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {filteredReviews.length === 0 ? (
          <p className="text-center py-8 text-gray-500">No reviews found.</p>
        ) : (
          <div className="space-y-4">
            {filteredReviews.map((review) => (
              <div key={review.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">{review.author}</h3>
                      <Badge
                        className={
                          review.status === "approved"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                        }
                      >
                        {review.status}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500">
                      {review.email} • {review.date}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    {review.status === "pending" && (
                      <>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleApprove(review.id)}
                          className="text-green-600"
                        >
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Approve
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleReject(review.id)}
                          className="text-red-600"
                        >
                          <XCircle className="h-4 w-4 mr-1" />
                          Reject
                        </Button>
                      </>
                    )}
                    <Button variant="outline" size="sm" onClick={() => handleReply(review.id)}>
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Reply
                    </Button>
                  </div>
                </div>

                <p className="text-gray-700 mt-2">{review.content}</p>

                {replyTo === review.id && (
                  <div className="mt-4 bg-gray-50 p-3 rounded-md">
                    <p className="text-sm font-medium mb-2">Reply to {review.author}</p>
                    <Textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      placeholder="Type your reply here..."
                      rows={3}
                      className="mb-2"
                    />
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" size="sm" onClick={() => setReplyTo(null)}>
                        Cancel
                      </Button>
                      <Button
                        size="sm"
                        onClick={handleSendReply}
                        disabled={!replyContent.trim()}
                        className="bg-pink-600 hover:bg-pink-700"
                      >
                        Send Reply
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
