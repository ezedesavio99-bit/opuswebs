import { CyberBackground } from "@/components/cyber-background"
import { Header } from "@/components/header"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ComparisonSection } from "@/components/comparison-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <CyberBackground />
      <Header />
      <div className="pt-32">
        <PortfolioSection />
        <TestimonialsSection />
        <ComparisonSection />
        <CTASection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
