import type React from "react"
import { GraduationCap, Users, Building } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="py-20 px-4" id="benefits">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Benefits for Everyone
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            EduGenius AI brings value to learners, educators, and institutions alike.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard
            icon={<GraduationCap className="w-8 h-8" />}
            title="For Students"
            benefits={[
              "Personalized learning paths",
              "Adaptive study materials",
              "Real-time progress tracking",
              "24/7 AI tutoring support",
            ]}
          />
          <BenefitCard
            icon={<Users className="w-8 h-8" />}
            title="For Educators"
            benefits={[
              "Automated grading assistance",
              "Detailed student performance insights",
              "Customizable course creation tools",
              "AI-powered teaching recommendations",
            ]}
          />
          <BenefitCard
            icon={<Building className="w-8 h-8" />}
            title="For Institutions"
            benefits={[
              "Scalable learning solutions",
              "Data-driven educational strategies",
              "Improved student engagement and retention",
              "Cutting-edge AI integration",
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function BenefitCard({
  icon,
  title,
  benefits,
}: {
  icon: React.ReactNode
  title: string
  benefits: string[]
}) {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 mx-auto">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-center text-white">{title}</h3>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-6 h-6 text-green-400 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-gray-300">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

