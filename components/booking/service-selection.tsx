"use client"

import { Card } from "@/components/ui/card"

// Service categories and their services
const services = [
  {
    category: "Semi-Permanent Makeup",
    items: [
      { id: "eyebrows", name: "Eyebrows", price: 350, duration: 120 },
      { id: "ombre-brows", name: "Ombre Brows", price: 380, duration: 120 },
      { id: "eyeliner", name: "Eyeliner", price: 250, duration: 90 },
      { id: "lips", name: "Lips", price: 400, duration: 120 },
      { id: "touch-up", name: "Touch-up", price: 150, duration: 60 },
    ],
  },
  {
    category: "Eyelash Extensions",
    items: [
      { id: "classic-set", name: "Classic Set", price: 120, duration: 90 },
      { id: "volume-set", name: "Volume Set", price: 180, duration: 120 },
      { id: "hybrid-set", name: "Hybrid Set", price: 150, duration: 120 },
      { id: "fill", name: "Fill", price: 75, duration: 60 },
      { id: "lash-lift", name: "Lash Lift & Tint", price: 85, duration: 60 },
    ],
  },
]

interface ServiceSelectionProps {
  selectedService: string
  onSelectService: (id: string, name: string, price: number) => void
}

export default function ServiceSelection({ selectedService, onSelectService }: ServiceSelectionProps) {
  return (
    <div className="space-y-6">
      <p className="text-gray-600">Please select the service you would like to book:</p>

      {services.map((category) => (
        <div key={category.category} className="space-y-3">
          <h3 className="font-heading text-lg font-medium">{category.category}</h3>
          <div className="grid grid-cols-1 gap-3">
            {category.items.map((service) => (
              <Card
                key={service.id}
                className={`p-4 cursor-pointer border transition-all ${
                  selectedService === service.id ? "border-amber-600 bg-[#F8F5F2]" : "hover:border-gray-300"
                }`}
                onClick={() => onSelectService(service.id, service.name, service.price)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{service.name}</h4>
                    <p className="text-sm text-gray-500">{service.duration} minutes</p>
                  </div>
                  <div className="text-lg font-medium">£{service.price}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
