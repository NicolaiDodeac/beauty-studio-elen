interface PricingItem {
  name: string
  description: string
  price: number
}

interface ServicePricingProps {
  pricing: PricingItem[]
}

export default function ServicePricing({ pricing }: ServicePricingProps) {
  return (
    <section className="my-16">
      <h2 className="text-2xl font-bold mb-6 font-heading">Pricing</h2>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="divide-y divide-gray-200">
          {pricing.map((item, index) => (
            <div key={index} className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-900">£{item.price}</span>
                <div className="ml-2 h-5 w-5 text-amber-600">✓</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-500">
        * Prices may vary based on individual needs. A consultation is recommended for precise pricing.
      </p>
    </section>
  )
}
