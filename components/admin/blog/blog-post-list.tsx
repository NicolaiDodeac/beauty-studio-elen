"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Permanent Makeup",
    excerpt: "Discover how permanent makeup can save you time and enhance your natural features.",
    date: "April 15, 2023",
    image: "/placeholder.svg?height=300&width=500",
    slug: "benefits-of-permanent-makeup",
    status: "published",
    author: "Elen",
    category: "Permanent Makeup",
  },
  {
    id: 2,
    title: "How to Care for Your Eyelash Extensions",
    excerpt: "Learn the best practices for maintaining your eyelash extensions for longer-lasting results.",
    date: "March 22, 2023",
    image: "/placeholder.svg?height=300&width=500",
    slug: "care-for-eyelash-extensions",
    status: "published",
    author: "Elen",
    category: "Eyelash Extensions",
  },
  {
    id: 3,
    title: "Skincare Routine for Glowing Skin",
    excerpt: "Follow these simple steps to achieve radiant, healthy-looking skin all year round.",
    date: "February 10, 2023",
    image: "/placeholder.svg?height=300&width=500",
    slug: "skincare-routine-glowing-skin",
    status: "published",
    author: "Elen",
    category: "Skincare",
  },
  {
    id: 4,
    title: "Choosing the Right Brow Shape for Your Face",
    excerpt: "Find out which eyebrow shape complements your face shape for the most flattering look.",
    date: "January 5, 2023",
    image: "/placeholder.svg?height=300&width=500",
    slug: "choosing-right-brow-shape",
    status: "draft",
    author: "Elen",
    category: "Permanent Makeup",
  },
]

export default function BlogPostList() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Blog Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex items-start p-4 border rounded-lg bg-white">
              <div className="relative h-20 w-32 rounded overflow-hidden mr-4 flex-shrink-0">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Link
                    href={`/admin/blog/${post.id}`}
                    className="font-medium text-gray-900 truncate hover:text-pink-600"
                  >
                    {post.title}
                  </Link>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      post.status === "published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {post.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 mb-2">{post.excerpt}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span className="mr-3">{post.date}</span>
                  <span className="mr-3">Category: {post.category}</span>
                  <span>Author: {post.author}</span>
                </div>
              </div>
              <div className="flex space-x-2 ml-4">
                <Button variant="outline" size="sm" className="h-8 w-8 p-0" asChild>
                  <Link href={`/admin/blog/${post.id}`}>
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <Edit className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-red-500 hover:text-red-600">
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
