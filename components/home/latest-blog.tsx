import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Permanent Makeup",
    excerpt: "Discover how permanent makeup can save you time and enhance your natural features.",
    date: "April 15, 2023",
    image: "/placeholder.svg?height=300&width=500",
    slug: "benefits-of-permanent-makeup",
  },
  {
    id: 2,
    title: "How to Care for Your Eyelash Extensions",
    excerpt: "Learn the best practices for maintaining your eyelash extensions for longer-lasting results.",
    date: "March 22, 2023",
    image: "/placeholder.svg?height=300&width=500",
    slug: "care-for-eyelash-extensions",
  },
  {
    id: 3,
    title: "Skincare Routine for Glowing Skin",
    excerpt: "Follow these simple steps to achieve radiant, healthy-looking skin all year round.",
    date: "February 10, 2023",
    image: "/placeholder.svg?height=300&width=500",
    slug: "skincare-routine-glowing-skin",
  },
]

export default function LatestBlog() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest from Our Blog</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Stay updated with beauty tips, trends, and insights from our experts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-w-16 aspect-h-9 relative h-48">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              <p className="text-sm text-gray-500">{post.date}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Link
                href={`/blog/${post.slug}`}
                className="text-pink-600 hover:text-pink-800 font-medium flex items-center"
              >
                Read more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/blog" className="text-pink-600 hover:text-pink-800 font-medium inline-flex items-center">
          View all articles <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
