import { NavBar } from "@/app/components/nav-bar"
import { HeroSection } from "@/app/components/hero-section"
import { FeaturesSection } from "@/app/components/features-section"
import { HowItWorks } from "@/app/components/how-it-works"
import { BenefitsSection } from "@/app/components/benefits-section"
import { Testimonials } from "@/app/components/testimonials"
import { PricingSection } from "@/app/components/pricing-section"
import { CTASection } from "@/app/components/cta-section"


export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <BenefitsSection />
      <Testimonials />
      <PricingSection />
      <CTASection />
     
    </main>
  )
}

