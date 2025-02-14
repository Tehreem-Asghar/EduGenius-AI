import type React from "react"
import { Brain, Target, Zap, Users, TrendingUp, ShieldCheck } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-20 px-4" id="features">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI-Powered Learning Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how EduGenius AI transforms traditional learning into an engaging, personalized experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain className="w-6 h-6" />}
            title="Adaptive Learning Paths"
            description="AI algorithms create personalized learning journeys based on your progress and learning style."
          />
          <FeatureCard
            icon={<Target className="w-6 h-6" />}
            title="Smart Goal Setting"
            description="Set and track educational goals with AI-assisted planning and progress monitoring."
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6" />}
            title="Instant Feedback"
            description="Receive real-time, AI-generated feedback on assignments and quizzes for rapid improvement."
          />
          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="Collaborative Learning"
            description="Connect with peers and AI study groups for enhanced understanding and motivation."
          />
          <FeatureCard
            icon={<TrendingUp className="w-6 h-6" />}
            title="Performance Analytics"
            description="Gain insights into your learning patterns with detailed AI-powered analytics and recommendations."
          />
          <FeatureCard
            icon={<ShieldCheck className="w-6 h-6" />}
            title="Knowledge Retention"
            description="AI-driven review sessions and quizzes optimize long-term information retention."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
      <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

