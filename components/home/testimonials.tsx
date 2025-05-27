import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    content:
      "I'm absolutely in love with my new brows! Elen was professional and made me feel comfortable throughout the entire process.",
    author: "Sarah Johnson",
    service: "Semi-Permanent Makeup",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    content:
      "The eyelash extensions have changed my morning routine completely. I wake up looking fresh and ready to go!",
    author: "Emily Davis",
    service: "Eyelash Extensions",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    content: "Elen is a true artist. My semi-permanent eyeliner is perfect and has saved me so much time every day.",
    author: "Michael Brown",
    service: "Semi-Permanent Makeup",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
  return (
    <section className="py-12 px-6 bg-[#F8F5F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients about their experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-0">
              <CardContent className="pt-6">
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4 border-t pt-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.service}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
