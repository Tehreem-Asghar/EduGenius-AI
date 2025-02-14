import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section className="py-20 px-4" id="pricing">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Choose Your Learning Plan
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect plan to unlock your full learning potential with EduGenius AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard
            title="Basic"
            price="$9.99"
            features={[
              "Access to 100+ courses",
              "Basic AI-powered recommendations",
              "Progress tracking",
              "24/7 AI chat support",
            ]}
            buttonText="Start Basic"
          />
          <PricingCard
            title="Pro"
            price="$19.99"
            features={[
              "Access to 500+ courses",
              "Advanced AI learning paths",
              "Detailed performance analytics",
              "1-on-1 AI tutoring sessions",
              "Collaborative study groups",
            ]}
            buttonText="Go Pro"
            highlighted={true}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            features={[
              "Unlimited course access",
              "Custom AI model training",
              "Advanced analytics dashboard",
              "API access for integration",
              "Dedicated account manager",
            ]}
            buttonText="Contact Sales"
          />
        </div>
      </div>
    </section>
  )
}

function PricingCard({
  title,
  price,
  features,
  buttonText,
  highlighted = false,
}: {
  title: string
  price: string
  features: string[]
  buttonText: string
  highlighted?: boolean
}) {
  return (
    <div className={`rounded-lg p-6 ${highlighted ? "bg-blue-600" : "bg-gray-800"}`}>
      <h3 className="text-2xl font-semibold mb-4 text-center text-white">{title}</h3>
      <div className="text-4xl font-bold text-center mb-6">
        {price}
        <span className="text-lg font-normal">/month</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 mr-2 text-green-400" />
            <span className={highlighted ? "text-white" : "text-gray-300"}>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${highlighted ? "bg-white text-blue-600 hover:bg-gray-100" : "bg-blue-600 hover:bg-blue-700"}`}
      >
        {buttonText}
      </Button>
    </div>
  )
}

