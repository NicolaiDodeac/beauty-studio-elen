import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
  slug: string
  category: string
}

interface RelatedPostsProps {
  posts: Post[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 font-heading">Related Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-w-16 aspect-h-9 relative h-40">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-lg mb-2 line-clamp-2">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link
                href={`/blog/${post.slug}`}
                className="text-amber-600 hover:text-amber-800 text-sm font-medium flex items-center"
              >
                Read more <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
