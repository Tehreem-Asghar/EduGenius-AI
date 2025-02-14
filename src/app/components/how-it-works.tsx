import {  BookOpen, Cpu, Rocket } from "lucide-react"
import type React from "react" // Added import for React

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-gray-800" id="how-it-works">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            How EduGenius AI Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience a learning journey tailored just for you in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <StepCard
            number="01"
            icon={<BookOpen className="w-6 h-6" />}
            title="Choose Your Subjects"
            description="Select from a wide range of subjects and courses. Our AI will recommend options based on your interests and goals."
          />
          <StepCard
            number="02"
            icon={<Cpu className="w-6 h-6" />}
            title="AI Analyzes Your Style"
            description="Our advanced AI assesses your learning style, strengths, and areas for improvement to create a personalized plan."
          />
          <StepCard
            number="03"
            icon={<Rocket className="w-6 h-6" />}
            title="Start Your Journey"
            description="Dive into interactive lessons, adaptive quizzes, and engaging content tailored to your unique learning profile."
          />
        </div>
      </div>
    </section>
  )
}

function StepCard({
  number,
  icon,
  title,
  description,
}: {
  number: string
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="relative">
      <div className="bg-gray-700    hover:bg-gray-500 hover:bg-opacity-45 rounded-lg p-6">
        <div className="text-4xl font-bold text-blue-400 mb-4">{number}</div>
        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 text-blue-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
     
    </div>
  )
}

