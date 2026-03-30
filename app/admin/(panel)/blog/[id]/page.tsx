import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Edit, Eye, Trash2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import BlogPostReviews from "@/components/admin/blog/blog-post-reviews"

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Permanent Makeup",
    excerpt: "Discover how permanent makeup can save you time and enhance your natural features.",
    content: `
      <p>Permanent makeup, also known as micropigmentation, is a cosmetic technique which employs tattoos as a means of producing designs that resemble makeup, such as eyelining and other permanent enhancing colors to the skin of the face, lips, and eyelids.</p>
      
      <h2>Benefits of Permanent Makeup</h2>
      
      <p>There are numerous benefits to getting permanent makeup:</p>
      
      <ul>
        <li><strong>Time-saving:</strong> No need to apply makeup every day</li>
        <li><strong>Waterproof:</strong> Swim, exercise, and shower without worrying about your makeup</li>
        <li><strong>Perfect for active lifestyles:</strong> Ideal for busy professionals and athletes</li>
        <li><strong>Enhances natural features:</strong> Defines eyes, lips, and eyebrows</li>
        <li><strong>Boosts confidence:</strong> Wake up looking your best every day</li>
      </ul>
      
      <h2>Popular Permanent Makeup Procedures</h2>
      
      <p>Some of the most requested permanent makeup procedures include:</p>
      
      <h3>Microblading</h3>
      <p>A technique that creates hair-like strokes to fill in sparse or thinning eyebrows.</p>
      
      <h3>Powder Brows</h3>
      <p>Creates a soft, powdered effect that resembles brow makeup.</p>
      
      <h3>Permanent Eyeliner</h3>
      <p>Enhances the lash line and defines the eyes without daily application.</p>
      
      <h3>Lip Blush</h3>
      <p>Adds color and definition to the lips for a natural, enhanced look.</p>
    `,
    date: "April 15, 2023",
    image: "/placeholder.svg?height=300&width=500",
    slug: "benefits-of-permanent-makeup",
    status: "published",
    author: "Elen",
    category: "Permanent Makeup",
    views: 245,
    comments: 3,
  },
  {
    id: 2,
    title: "How to Care for Your Eyelash Extensions",
    excerpt: "Learn the best practices for maintaining your eyelash extensions for longer-lasting results.",
    content: `
      <p>Eyelash extensions are a popular beauty treatment that enhances the length, curl, fullness, and thickness of natural eyelashes. With proper care, your eyelash extensions can last for weeks, maintaining their beautiful appearance.</p>
      
      <h2>Essential Aftercare Tips</h2>
      
      <p>Follow these guidelines to keep your lash extensions looking their best:</p>
      
      <h3>Avoid Water and Steam for 24-48 Hours</h3>
      <p>After your appointment, avoid getting your lashes wet for at least 24 hours. This allows the adhesive to fully cure.</p>
      
      <h3>Be Gentle with Your Lashes</h3>
      <p>Avoid rubbing your eyes or pulling on your lash extensions. Treat them with care to prevent premature shedding.</p>
      
      <h3>Skip Oil-Based Products</h3>
      <p>Oil can break down the lash adhesive. Avoid oil-based makeup removers, cleansers, and skincare products around the eye area.</p>
      
      <h3>Clean Your Lashes Regularly</h3>
      <p>Use a lash-safe cleanser to gently clean your lashes daily. This removes buildup and keeps your lashes healthy.</p>
      
      <h3>Brush Your Lashes Daily</h3>
      <p>Use a clean spoolie brush to gently comb through your lashes each morning to keep them neat and separated.</p>
      
      <h3>Sleep on Your Back</h3>
      <p>Try to sleep on your back to prevent your lashes from being crushed against your pillow.</p>
      
      <h3>Schedule Regular Fills</h3>
      <p>Book fill appointments every 2-3 weeks to maintain a full look as your natural lashes shed.</p>
    `,
    date: "March 22, 2023",
    image: "/placeholder.svg?height=300&width=500",
    slug: "care-for-eyelash-extensions",
    status: "published",
    author: "Elen",
    category: "Eyelash Extensions",
    views: 187,
    comments: 2,
  },
]

export default function BlogPostDetailPage({ params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)
  const post = blogPosts.find((post) => post.id === postId)

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-6">The blog post you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/admin/blog">Back to Blog Management</Link>
        </Button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Button variant="outline" size="sm" asChild className="mr-4">
            <Link href="/admin/blog">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-1" />
            Preview
          </Button>
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-1" />
            Edit
          </Button>
          <Button variant="outline" size="sm" className="text-red-600">
            <Trash2 className="h-4 w-4 mr-1" />
            Delete
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="details" className="space-y-4">
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="relative h-48 rounded-md overflow-hidden mb-4">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium text-gray-500">Status:</span>
                          <span
                            className={`ml-2 inline-block px-2 py-1 text-xs rounded-full ${
                              post.status === "published"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {post.status}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500">Category:</span>
                          <span className="ml-2">{post.category}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500">Author:</span>
                          <span className="ml-2">{post.author}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-500">Published:</span>
                          <span className="ml-2">{post.date}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Excerpt</h3>
                      <p className="text-gray-700 mb-4">{post.excerpt}</p>

                      <h3 className="font-medium mb-2">Stats</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Views:</span>
                          <span>{post.views}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Comments:</span>
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">URL:</span>
                          <a
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            className="text-blue-600 hover:underline truncate max-w-[200px]"
                            rel="noreferrer"
                          >
                            /blog/{post.slug}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="content" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-4">
              <BlogPostReviews postId={post.id} />
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="text-center py-8 text-gray-500">Analytics data would be displayed here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button className="w-full bg-pink-600 hover:bg-pink-700">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Post
                </Button>
                <Button variant="outline" className="w-full">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview Post
                </Button>
                {post.status === "published" ? (
                  <Button variant="outline" className="w-full">
                    Unpublish
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full">
                    Publish
                  </Button>
                )}
                <Button variant="outline" className="w-full text-red-600">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Post
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h3 className="font-medium mb-4">Related Posts</h3>
                <div className="space-y-3">
                  {blogPosts
                    .filter((p) => p.id !== post.id)
                    .map((relatedPost) => (
                      <div key={relatedPost.id} className="flex items-center">
                        <div className="relative h-10 w-10 rounded overflow-hidden mr-3 flex-shrink-0">
                          <Image
                            src={relatedPost.image || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <Link
                          href={`/admin/blog/${relatedPost.id}`}
                          className="text-sm hover:text-pink-600 line-clamp-2"
                        >
                          {relatedPost.title}
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
