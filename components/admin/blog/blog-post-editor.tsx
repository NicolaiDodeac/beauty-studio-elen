"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImagePlus, Save, Eye } from "lucide-react"

export default function BlogPostEditor() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [category, setCategory] = useState("")
  const [featuredImage, setFeaturedImage] = useState<string | null>(null)
  const [status, setStatus] = useState("draft")

  const handleSave = (publishStatus: string) => {
    setStatus(publishStatus)
    // In a real app, this would save the post to the database
    console.log("Saving post with status:", publishStatus)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create New Blog Post</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Post Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter post title"
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="permanent-makeup">Permanent Makeup</SelectItem>
                  <SelectItem value="eyelash-extensions">Eyelash Extensions</SelectItem>
                  <SelectItem value="skincare">Skincare</SelectItem>
                  <SelectItem value="beauty-tips">Beauty Tips</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="featured-image">Featured Image</Label>
              <div className="flex items-center gap-2">
                <Button variant="outline" type="button" className="w-full">
                  <ImagePlus className="h-4 w-4 mr-2" />
                  Upload Image
                </Button>
                {featuredImage && <span className="text-sm text-gray-500">Image uploaded</span>}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief summary of the post"
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Tabs defaultValue="write">
              <TabsList className="mb-2">
                <TabsTrigger value="write">Write</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              <TabsContent value="write">
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your blog post content here..."
                  rows={12}
                />
              </TabsContent>
              <TabsContent value="preview">
                <div className="border rounded-md p-4 min-h-[300px] prose max-w-none">
                  {content ? (
                    <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, "<br />") }} />
                  ) : (
                    <p className="text-gray-400">No content to preview</p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" type="button">
          <Eye className="h-4 w-4 mr-2" />
          Preview
        </Button>
        <div className="space-x-2">
          <Button variant="outline" type="button" onClick={() => handleSave("draft")}>
            Save as Draft
          </Button>
          <Button className="bg-pink-600 hover:bg-pink-700" type="button" onClick={() => handleSave("published")}>
            <Save className="h-4 w-4 mr-2" />
            Publish
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
