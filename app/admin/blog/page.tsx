import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import BlogPostList from "@/components/admin/blog/blog-post-list"
import BlogPostReviews from "@/components/admin/blog/blog-post-reviews"

export const metadata = {
  title: "Blog Management | Admin Dashboard",
  description: "Manage blog posts for Elen.MakeUp.Telford",
}

export default function AdminBlogPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Blog Management</h1>
        <Button className="bg-pink-600 hover:bg-pink-700">
          <PlusCircle className="h-4 w-4 mr-2" />
          New Post
        </Button>
      </div>

      <Tabs defaultValue="posts" className="space-y-4">
        <TabsList>
          <TabsTrigger value="posts">All Posts</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>

        <div className="flex items-center space-x-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input type="search" placeholder="Search blog posts..." className="w-full pl-8 bg-white" />
          </div>
          <Button variant="outline">Filter</Button>
        </div>

        <TabsContent value="posts" className="space-y-4">
          <BlogPostList />
        </TabsContent>

        <TabsContent value="drafts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Draft Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">You have 3 draft posts.</p>
              {/* Draft posts would be listed here */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="published" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Published Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">You have 5 published posts.</p>
              {/* Published posts would be listed here */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-4">
          <BlogPostReviews />
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Manage your blog categories.</p>
              {/* Categories would be listed here */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Blog Post Editor Modal would appear here when editing or creating a post */}
    </div>
  )
}
