import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Mock data for blog posts - in a real app, this would come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Permanent Makeup",
    excerpt: "Discover how permanent makeup can save you time and enhance your natural features.",
    date: "April 15, 2023",
    image: "/placeholder.svg?height=300&width=500",
    slug: "benefits-of-permanent-makeup",
    category: "Permanent Makeup",
  },
  {
    id: 2,
    title: "How to Care for Your Eyelash Extensions",
    excerpt: "Learn the best practices for maintaining your eyelash extensions for longer-lasting results.",
    date: "March 22, 2023",
    image: "/placeholder.svg?height=300&width=500",
    slug: "care-for-eyelash-extensions",
    category: "Eyelash Extensions",
  },
  {
    id: 3,
    title: "Skincare Routine for Glowing Skin",
    excerpt: "Follow these simple steps to achieve radiant, healthy-looking skin all year round.",
    date: "February 10, 2023",
    image: "/placeholder.svg?height=300&width=500",
    slug: "skincare-routine-glowing-skin",
    category: "Skincare",
  },
  {
    id: 4,
    title: "Choosing the Right Brow Shape for Your Face",
    excerpt: "Find out which eyebrow shape complements your face shape for the most flattering look.",
    date: "January 5, 2023",
    image: "/placeholder.svg?height=300&width=500",
    slug: "choosing-right-brow-shape",
    category: "Permanent Makeup",
  },
  {
    id: 5,
    title: "The Difference Between Classic and Volume Lashes",
    excerpt:
      "Understand the key differences between classic and volume eyelash extensions to choose the right style for you.",
    date: "December 12, 2022",
    image: "/placeholder.svg?height=300&width=500",
    slug: "classic-vs-volume-lashes",
    category: "Eyelash Extensions",
  },
  {
    id: 6,
    title: "Preparing for Your First Permanent Makeup Session",
    excerpt: "What to expect and how to prepare for your first permanent makeup appointment.",
    date: "November 18, 2022",
    image: "/placeholder.svg?height=300&width=500",
    slug: "preparing-for-permanent-makeup",
    category: "Permanent Makeup",
  },
]

export const metadata: Metadata = {
  title: "Blog | Elen.MakeUp.Telford",
  description: "Beauty tips, trends, and insights from our experts at Elen.MakeUp.Telford.",
}

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6 font-heading">Our Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay updated with beauty tips, trends, and insights from our experts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-w-16 aspect-h-9 relative h-48">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">{post.date}</span>
                <span className="text-xs px-2 py-1 bg-[#F8F5F2] rounded-full text-gray-700">{post.category}</span>
              </div>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/blog/${post.slug}`}
                className="text-amber-600 hover:text-amber-800 font-medium flex items-center"
              >
                Read more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-[#F8F5F2] p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4 font-heading">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Get the latest beauty tips, trends, and special offers delivered straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <Button className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800">Subscribe</Button>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-6 font-heading">Popular Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
            Permanent Makeup
          </Button>
          <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
            Eyelash Extensions
          </Button>
          <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
            Skincare
          </Button>
          <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
            Beauty Tips
          </Button>
        </div>
      </div>
    </div>
  )
}
