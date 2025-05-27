import Image from "next/image"

interface Testimonial {
  id: number
  content: string
  author: string
  avatar: string
}

interface ServiceTestimonialsProps {
  testimonials: Testimonial[]
}

export default function ServiceTestimonials({ testimonials }: ServiceTestimonialsProps) {
  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold mb-6 font-heading">What Our Clients Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-[#F8F5F2] p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-900">{testimonial.author}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.content}"</p>
          </div>
        ))}
      </div>
    </section>
  )
}
