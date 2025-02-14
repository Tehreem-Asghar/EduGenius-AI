import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Transform Your Learning Experience?</h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-8">
          Join thousands of students, educators, and institutions already using EduGenius AI to revolutionize education.
          Start your journey today with a 14-day free trial.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  )
}

