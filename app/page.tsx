import Hero from "@/components/home/hero"
import ServiceCards from "@/components/home/service-cards"
import Testimonials from "@/components/home/testimonials"
import AboutSection from "@/components/home/about-section"
import CTASection from "@/components/home/cta-section"
import ContactsList from "@/components/contact/ContactsList"

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      <ContactsList />
      <Hero />
      <ServiceCards />
      <AboutSection />
      <Testimonials />
      <CTASection />
    </div>
  )
}
