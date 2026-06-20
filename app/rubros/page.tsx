import { CyberBackground } from "@/components/cyber-background"
import { Header } from "@/components/header"
import { RubrosSection } from "@/components/rubros-section"
import { LiveUISection } from "@/components/live-ui-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function RubrosPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <CyberBackground />
      <Header />
      <div className="pt-32">
        <RubrosSection />
        <LiveUISection />
        <CTASection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
