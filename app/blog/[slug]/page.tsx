import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, User, MessageSquare } from "lucide-react"
import BlogCommentForm from "@/components/blog/blog-comment-form"
import RelatedPosts from "@/components/blog/related-posts"

// Mock data for blog posts - in a real app, this would come from a database or CMS
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
    image: "/placeholder.svg?height=600&width=1200",
    slug: "benefits-of-permanent-makeup",
    category: "Permanent Makeup",
    author: "Elen",
    comments: [
      {
        id: 1,
        author: "Sarah Johnson",
        content:
          "This article was so helpful! I've been considering permanent makeup for a while and this answered all my questions.",
        date: "May 12, 2023",
      },
      {
        id: 2,
        author: "Michael Brown",
        content: "Great information. I'd love to see more before and after photos in future articles.",
        date: "May 11, 2023",
      },
    ],
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
    image: "/placeholder.svg?height=600&width=1200",
    slug: "care-for-eyelash-extensions",
    category: "Eyelash Extensions",
    author: "Elen",
    comments: [
      {
        id: 1,
        author: "Jessica Wilson",
        content: "These tips really helped me extend the life of my lash extensions. Thank you!",
        date: "April 5, 2023",
      },
    ],
  },
  {
    id: 3,
    title: "Skincare Routine for Glowing Skin",
    excerpt: "Follow these simple steps to achieve radiant, healthy-looking skin all year round.",
    content: `
      <p>Achieving glowing, healthy skin requires consistency and the right products for your skin type. Here's a comprehensive skincare routine that can help you achieve that radiant complexion you've always wanted.</p>
      
      <h2>Morning Routine</h2>
      
      <h3>1. Cleanse</h3>
      <p>Start your day with a gentle cleanser to remove any oils that built up overnight. Avoid harsh cleansers that strip your skin of its natural oils.</p>
      
      <h3>2. Tone</h3>
      <p>Apply a hydrating toner to balance your skin's pH and prepare it for the next steps in your routine.</p>
      
      <h3>3. Vitamin C Serum</h3>
      <p>Apply a vitamin C serum to brighten your complexion and protect against environmental damage.</p>
      
      <h3>4. Moisturize</h3>
      <p>Use a moisturizer appropriate for your skin type to keep your skin hydrated throughout the day.</p>
      
      <h3>5. Sunscreen</h3>
      <p>Apply a broad-spectrum SPF 30+ sunscreen to protect your skin from harmful UV rays, even on cloudy days.</p>
      
      <h2>Evening Routine</h2>
      
      <h3>1. Double Cleanse</h3>
      <p>Start with an oil-based cleanser to remove makeup and sunscreen, followed by a water-based cleanser to clean your skin.</p>
      
      <h3>2. Exfoliate (2-3 times per week)</h3>
      <p>Use a chemical exfoliant with AHAs or BHAs to remove dead skin cells and promote cell turnover.</p>
      
      <h3>3. Treat</h3>
      <p>Apply targeted treatments such as retinol, niacinamide, or hyaluronic acid based on your skin concerns.</p>
      
      <h3>4. Moisturize</h3>
      <p>Use a richer moisturizer at night to nourish your skin while you sleep.</p>
      
      <h2>Weekly Treatments</h2>
      
      <h3>Face Masks</h3>
      <p>Use a hydrating or clarifying mask once a week, depending on your skin's needs.</p>
      
      <h3>Facial Massage</h3>
      <p>Incorporate facial massage techniques to improve circulation and reduce puffiness.</p>
      
      <p>Remember, consistency is key when it comes to skincare. It may take several weeks to see results, so be patient and stick with your routine.</p>
    `,
    date: "February 10, 2023",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "skincare-routine-glowing-skin",
    category: "Skincare",
    author: "Elen",
    comments: [],
  },
  {
    id: 4,
    title: "Choosing the Right Brow Shape for Your Face",
    excerpt: "Find out which eyebrow shape complements your face shape for the most flattering look.",
    content: `
      <p>Your eyebrows frame your face and can dramatically impact your overall appearance. Finding the right brow shape for your face shape can enhance your natural features and create a more balanced look.</p>
      
      <h2>Identifying Your Face Shape</h2>
      
      <p>Before determining the best brow shape for you, it's important to identify your face shape. Stand in front of a mirror and trace the outline of your face with a washable marker on the mirror. Step back and observe the shape you've drawn.</p>
      
      <h2>Brow Shapes for Different Face Shapes</h2>
      
      <h3>Oval Face</h3>
      <p>If you have an oval face, you're in luck! This versatile face shape works well with most brow shapes. A soft angled brow with a gentle arch complements an oval face beautifully.</p>
      
      <h3>Round Face</h3>
      <p>For round faces, high-arched brows can add definition and create the illusion of length. Avoid rounded brows as they can emphasize the roundness of your face.</p>
      
      <h3>Square Face</h3>
      <p>Soften a square face with a curved brow shape that has a soft peak. This helps balance strong jawlines and adds femininity to angular features.</p>
      
      <h3>Heart-Shaped Face</h3>
      <p>For heart-shaped faces, rounded brows with a soft arch work well to balance a wider forehead and narrower chin.</p>
      
      <h3>Long Face</h3>
      <p>Flat, straight brows with minimal arch can help shorten the appearance of a long face. Avoid high arches which can elongate your face further.</p>
      
      <h3>Diamond Face</h3>
      <p>Curved brows complement diamond-shaped faces by softening angular features. Aim for a soft arch that aligns with the widest part of your face.</p>
      
      <h2>General Brow Shaping Guidelines</h2>
      
      <p>Regardless of your face shape, there are some universal guidelines for well-shaped brows:</p>
      
      <ul>
        <li>The inner edge of your brow should align with the bridge of your nose</li>
        <li>The arch should be positioned approximately two-thirds of the way out from the start of your brow</li>
        <li>The tail of your brow should end at an imaginary line drawn from the corner of your nose past the outer corner of your eye</li>
      </ul>
      
      <p>Remember, these are guidelines, not rules. Your personal preference and individual features should always be considered when shaping your brows.</p>
    `,
    date: "January 5, 2023",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "choosing-right-brow-shape",
    category: "Permanent Makeup",
    author: "Elen",
    comments: [],
  },
  {
    id: 5,
    title: "The Difference Between Classic and Volume Lashes",
    excerpt:
      "Understand the key differences between classic and volume eyelash extensions to choose the right style for you.",
    content: `
      <p>Eyelash extensions have revolutionized the beauty industry, offering a semi-permanent solution to enhance your natural lashes. Two of the most popular techniques are classic and volume lashes. Understanding the differences between these styles can help you choose the right option for your desired look.</p>
      
      <h2>Classic Lashes</h2>
      
      <h3>What Are Classic Lashes?</h3>
      <p>Classic lash extensions involve applying a single extension to each natural lash. This technique follows a 1:1 ratio—one extension per natural lash.</p>
      
      <h3>The Look</h3>
      <p>Classic lashes create a natural, enhanced appearance. They add length and some density to your natural lashes without appearing overly dramatic.</p>
      
      <h3>Ideal For</h3>
      <p>Classic lashes are perfect for those who want a subtle enhancement, first-time lash extension clients, or those with naturally full lashes who just want added length.</p>
      
      <h3>Maintenance</h3>
      <p>Classic lashes typically require fills every 2-3 weeks, depending on your natural lash growth cycle and how well you care for them.</p>
      
      <h2>Volume Lashes</h2>
      
      <h3>What Are Volume Lashes?</h3>
      <p>Volume lash extensions involve applying multiple ultra-light extensions to each natural lash. This technique can range from 2-6 extensions per natural lash, creating fans of lashes.</p>
      
      <h3>The Look</h3>
      <p>Volume lashes create a fuller, more dramatic appearance with increased density, darkness, and fluffiness.</p>
      
      <h3>Ideal For</h3>
      <p>Volume lashes are perfect for those wanting a more glamorous look, clients with sparse natural lashes, or those who desire a more noticeable enhancement.</p>
      
      <h3>Maintenance</h3>
      <p>Volume lashes typically require fills every 2-3 weeks, similar to classic lashes, but may need more careful maintenance due to their complex structure.</p>
      
      <h2>Hybrid Lashes: The Best of Both Worlds</h2>
      
      <p>Hybrid lashes combine both classic and volume techniques, offering a textured, multi-dimensional look that's fuller than classic but not as dramatic as full volume.</p>
      
      <h2>Choosing Between Classic and Volume</h2>
      
      <p>When deciding between classic and volume lashes, consider:</p>
      
      <ul>
        <li>Your desired look (natural vs. dramatic)</li>
        <li>The condition and density of your natural lashes</li>
        <li>Your lifestyle and maintenance commitment</li>
        <li>Your budget (volume lashes typically cost more than classic)</li>
      </ul>
      
      <p>Consulting with a professional lash technician is the best way to determine which technique is right for you based on your eye shape, natural lashes, and desired outcome.</p>
    `,
    date: "December 12, 2022",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "classic-vs-volume-lashes",
    category: "Eyelash Extensions",
    author: "Elen",
    comments: [],
  },
  {
    id: 6,
    title: "Preparing for Your First Permanent Makeup Session",
    excerpt: "What to expect and how to prepare for your first permanent makeup appointment.",
    content: `
      <p>Deciding to get permanent makeup is an exciting step toward simplifying your beauty routine. Whether you're getting microbladed eyebrows, permanent eyeliner, or lip blush, proper preparation can help ensure the best possible results. Here's everything you need to know before your first permanent makeup session.</p>
      
      <h2>Before Your Appointment</h2>
      
      <h3>Research and Choose a Qualified Artist</h3>
      <p>The most important step is finding a certified, experienced permanent makeup artist. Look at their portfolio, read reviews, and ensure they follow proper sterilization procedures.</p>
      
      <h3>Schedule a Consultation</h3>
      <p>Most artists offer a consultation before the procedure. This is your opportunity to discuss your desired look, ask questions, and address any concerns.</p>
      
      <h3>Avoid Certain Medications and Supplements</h3>
      <p>At least one week before your appointment, avoid:</p>
      <ul>
        <li>Blood thinners (aspirin, ibuprofen)</li>
        <li>Fish oil supplements</li>
        <li>Vitamin E supplements</li>
        <li>Alcohol</li>
      </ul>
      <p>These can increase bleeding and affect the pigment retention.</p>
      
      <h3>Skincare Restrictions</h3>
      <p>For at least two weeks before your appointment:</p>
      <ul>
        <li>Avoid retinol or vitamin A products on the treatment area</li>
        <li>Stop using chemical peels or exfoliants</li>
        <li>Avoid sun exposure and tanning</li>
      </ul>
      
      <h3>The Day Before</h3>
      <p>Avoid caffeine and alcohol, as they can increase sensitivity and bleeding. Get a good night's sleep to help your body prepare for the healing process.</p>
      
      <h2>The Day of Your Appointment</h2>
      
      <h3>What to Wear</h3>
      <p>Wear comfortable clothing. For eyebrow or eyeliner procedures, avoid wearing eye makeup. For lip procedures, avoid lip products.</p>
      
      <h3>What to Bring</h3>
      <p>Bring any makeup products you typically use on the area being treated to help your artist understand your preferred style and color.</p>
      
      <h3>The Procedure Process</h3>
      <p>Your appointment will typically include:</p>
      <ol>
        <li>Discussing and finalizing the design</li>
        <li>Application of topical anesthetic</li>
        <li>The actual procedure (which can take 1-3 hours depending on the treatment)</li>
        <li>Aftercare instructions</li>
      </ol>
      
      <h2>What to Expect During Healing</h2>
      
      <h3>Immediate Aftermath</h3>
      <p>The treated area will appear darker and more intense than the final result. This is normal and will fade during the healing process.</p>
      
      <h3>The Healing Timeline</h3>
      <p>Typically, the healing process follows this pattern:</p>
      <ul>
        <li>Days 1-2: Swelling and tenderness</li>
        <li>Days 3-7: Scabbing and flaking</li>
        <li>Days 7-14: Color appears lighter as the skin heals</li>
        <li>Days 14-30: Color returns as the skin regenerates</li>
      </ul>
      
      <h3>Touch-Up Session</h3>
      <p>Most permanent makeup procedures require a touch-up session 4-6 weeks after the initial procedure. This is essential to perfect the shape and color, and address any areas that didn't retain the pigment well.</p>
      
      <h2>Aftercare Tips</h2>
      
      <p>Your artist will provide specific aftercare instructions, but generally:</p>
      <ul>
        <li>Keep the area clean and dry for the first 24-48 hours</li>
        <li>Apply the recommended healing balm as directed</li>
        <li>Avoid makeup on the treated area until fully healed</li>
        <li>Avoid swimming, saunas, and excessive sweating for at least a week</li>
        <li>Protect the area from sun exposure</li>
      </ul>
      
      <p>By following these preparation guidelines and aftercare instructions, you'll help ensure the best possible results from your permanent makeup procedure. Remember that the final results won't be visible until after the complete healing process and touch-up session.</p>
    `,
    date: "November 18, 2022",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "preparing-for-permanent-makeup",
    category: "Permanent Makeup",
    author: "Elen",
    comments: [],
  },
]

type BlogPostParams = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Elen.MakeUp.Telford Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostParams) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <Link href="/blog" className="text-amber-600 hover:text-amber-800 flex items-center mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4 font-heading">{post.title}</h1>

        <div className="flex items-center text-gray-600 mb-6">
          <div className="flex items-center mr-6">
            <User className="h-4 w-4 mr-2" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center mr-6">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-2" />
            <span>{post.comments.length} comments</span>
          </div>
        </div>

        <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>
      </div>

      <div className="prose max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

      <div className="flex items-center justify-between py-6 border-t border-b mb-12">
        <span className="text-sm text-gray-500">Category: {post.category}</span>
        <div className="flex space-x-4">
          <Button variant="ghost" size="sm" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mr-2"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            Share
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 mr-2"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            Share
          </Button>
        </div>
      </div>

      {post.comments.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-heading">Comments ({post.comments.length})</h2>
          <div className="space-y-6">
            {post.comments.map((comment) => (
              <Card key={comment.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">{comment.author}</h3>
                    <span className="text-sm text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-gray-700">{comment.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <BlogCommentForm />

      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
    </div>
  )
}
