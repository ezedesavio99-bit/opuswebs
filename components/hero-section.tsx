"use client"

import { motion } from "framer-motion"
import { MagneticButton } from "./magnetic-button"
import { DotGlobeHero } from "@/components/ui/globe-hero"
import { Zap, Smartphone, Search, TrendingUp } from "lucide-react"

export function HeroSection() {
  const chips = [
    { icon: Smartphone, label: "Mobile First" },
    { icon: Search, label: "SEO Ready" },
    { icon: Zap, label: "Ultra Rápidas" },
    { icon: TrendingUp, label: "Escalables" },
  ]

  return (
    <DotGlobeHero
      rotationSpeed={0.0015}
      globeRadius={1.4}
      color="#0f4c81"
      className="min-h-screen pt-40 md:pt-48 bg-gradient-to-b from-[#eaf6ff] via-[#cdeaff] to-[#9fd6ff]"
    >
      {/* Energy ring behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-blue-600/15 animate-glow-pulse" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-sky-600/15 animate-glow-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-indigo-600/10 animate-glow-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight text-[#0a2540]"
            style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
          >
            Sitios web que{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #1d4ed8 0%, #0284c7 40%, #4f46e5 80%, #1d4ed8 100%)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradient-shift 6s ease infinite",
              }}
            >
              Venden
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl font-medium text-[#1e3a5f] mb-4 max-w-2xl mx-auto"
          >
            Velocidad, diseño y estrategia en cada proyecto — porque tu web
            <br />
            es tu mejor inversión
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-base md:text-lg text-[#3d5a78] mb-8 max-w-2xl mx-auto"
          >
            Construimos sitios que no solo se ven bien — posicionan tu marca y multiplican tus oportunidades de
            negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {chips.map((chip, index) => (
              <div
                key={chip.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-xl border border-blue-900/10 text-sm text-[#0a2540] shadow-sm"
              >
                <chip.icon size={16} className="text-blue-600" />
                {chip.label}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <MagneticButton>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold text-lg hover:shadow-[0_0_40px_rgba(29,78,216,0.35)] transition-shadow animate-breathe"
              >
                Quiero una web así
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/50 backdrop-blur-xl border border-blue-900/15 text-[#0a2540] font-semibold text-lg hover:border-blue-600/40 transition-colors"
              >
                Ver ejemplos
              </a>
            </MagneticButton>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { label: "Diseño", value: "Premium" },
              { label: "Performance", value: "100%" },
              { label: "Conversión", value: "Optimizada" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div
                  className="text-2xl font-bold"
                  style={{
                    background: "linear-gradient(90deg, #1d4ed8, #0284c7, #4f46e5, #1d4ed8)",
                    backgroundSize: "300% 100%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "gradient-shift 6s ease infinite",
                  }}
                >
                  {item.value}
                </div>
                <div className="text-sm text-[#3d5a78]">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </DotGlobeHero>
  )
}
