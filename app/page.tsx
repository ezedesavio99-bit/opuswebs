import { CyberBackground } from "@/components/cyber-background"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ParallaxDivider } from "@/components/ui/parallax-divider"
import { MarqueeSection } from "@/components/marquee-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <CyberBackground />
      <Header />
      <HeroSection />
      <ParallaxDivider />
      <MarqueeSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
