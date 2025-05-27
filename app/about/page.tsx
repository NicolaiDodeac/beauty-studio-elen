import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Elen.MakeUp.Telford",
  description:
    "Learn about Elen.MakeUp.Telford, our story, values, and the expertise behind our premium beauty services.",
  keywords: "about, beauty studio, Elen.MakeUp.Telford, beauty expert, semi-permanent makeup, eyelash extensions",
}

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6 font-heading">
          About Elen.MakeUp.Telford
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Dedicated to enhancing your natural beauty with premium services and personalized care.
        </p>
      </div>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[500px] rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="Elen, founder of Elen.MakeUp.Telford"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 font-heading">Meet Elen</h2>
          <p className="text-lg text-gray-700 mb-4">
            With over 10 years of experience in the beauty industry, Elen has established herself as a leading expert in
            semi-permanent makeup and eyelash extensions in Telford.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            After training with some of the industry's most respected professionals in London and internationally, Elen
            founded Elen.MakeUp.Telford with a vision to provide premium beauty services that enhance clients' natural
            features and boost their confidence.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Elen is known for her meticulous attention to detail, artistic eye, and commitment to staying at the
            forefront of beauty innovations. She regularly attends advanced training courses to bring the latest
            techniques and trends to her clients.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800">
              <Link href="/booking">Book with Elen</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center font-heading">Our Story</h2>
        <div className="bg-[#F8F5F2] p-8 rounded-xl">
          <p className="text-lg text-gray-700 mb-4">
            Elen.MakeUp.Telford was established in 2018 with a simple mission: to help clients look and feel their best
            through premium beauty services delivered with care and expertise.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            What began as a small studio offering basic services has grown into a respected beauty destination known for
            its exceptional semi-permanent makeup and eyelash extensions. Our growth has been driven by word-of-mouth
            recommendations from satisfied clients who appreciate our attention to detail and personalized approach.
          </p>
          <p className="text-lg text-gray-700">
            Today, we continue to evolve and expand our services while maintaining the same dedication to quality and
            client satisfaction that has been our foundation from the beginning.
          </p>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center font-heading">Qualifications & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Advanced Microblading",
              organization: "London Academy of Beauty",
              year: "2016",
            },
            {
              title: "Powder & Ombre Brows",
              organization: "International Brow Institute",
              year: "2017",
            },
            {
              title: "Volume Lash Extensions",
              organization: "European Lash Federation",
              year: "2018",
            },
            {
              title: "Permanent Makeup Masterclass",
              organization: "Beauty Innovation Summit",
              year: "2019",
            },
            {
              title: "Hygienic Practice Certification",
              organization: "Health & Beauty Council",
              year: "2020",
            },
            {
              title: "Advanced Color Theory",
              organization: "Cosmetic Arts Institute",
              year: "2021",
            },
          ].map((cert, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg">{cert.title}</h3>
                    <p className="text-gray-600">{cert.organization}</p>
                    <p className="text-gray-500 text-sm">{cert.year}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center font-heading">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Excellence",
              description:
                "We strive for excellence in every service we provide, using premium products and advanced techniques to deliver outstanding results.",
            },
            {
              title: "Personalization",
              description:
                "We recognize that each client is unique, and we tailor our services to enhance your natural features and meet your specific needs.",
            },
            {
              title: "Integrity",
              description:
                "We operate with honesty and transparency, providing realistic expectations and ethical practices in all our services.",
            },
            {
              title: "Continuous Learning",
              description:
                "We are committed to ongoing education and staying updated with the latest innovations and techniques in the beauty industry.",
            },
          ].map((value, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="h-6 w-6 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-lg">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Studio Gallery */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center font-heading">Our Studio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src={`/placeholder.svg?height=400&width=400&text=Studio+Image+${item}`}
                alt={`Elen.MakeUp.Telford studio image ${item}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#F8F5F2] p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4 font-heading">Ready to Experience Our Services?</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Book your appointment today and discover why our clients keep coming back to Elen.MakeUp.Telford.
        </p>
        <Button asChild size="lg" className="bg-[#E0D4C8] hover:bg-[#D0C4B8] text-gray-800 px-8">
          <Link href="/booking">Book an Appointment</Link>
        </Button>
      </div>
    </div>
  )
}
