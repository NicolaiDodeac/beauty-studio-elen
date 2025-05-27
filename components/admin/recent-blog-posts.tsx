import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit, Eye } from "lucide-react"
import Link from "next/link"

// Mock data for recent blog posts
const recentPosts = [
  {
    id: 1,
    title: "The Benefits of Permanent Makeup",
    date: "May 10, 2025",
    status: "published",
    views: 245,
  },
  {
    id: 2,
    title: "How to Care for Your Eyelash Extensions",
    date: "May 8, 2025",
    status: "published",
    views: 187,
  },
  {
    id: 3,
    title: "Choosing the Right Brow Shape for Your Face",
    date: "May 5, 2025",
    status: "draft",
    views: 0,
  },
]

export default function RecentBlogPosts() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Blog Posts</CardTitle>
        <Button variant="outline" size="sm" asChild>
          <Link href="/admin/blog">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex items-start justify-between p-3 rounded-lg bg-gray-50">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{post.title}</h3>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      post.status === "published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {post.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                  <span>{post.date}</span>
                  {post.status === "published" && <span>{post.views} views</span>}
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Eye className="h-4 w-4" />
                  <span className="sr-only">View</span>
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Edit className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
