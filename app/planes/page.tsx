import { CyberBackground } from "@/components/cyber-background"
import { Header } from "@/components/header"
import { PlansSection } from "@/components/plans-section"
import { StatementSection } from "@/components/statement-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function PlanesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <CyberBackground />
      <Header />
      <div className="pt-32">
        <PlansSection />
        <StatementSection />
        <CTASection />
      </div>
      <Footer />
    </main>
  )
}
