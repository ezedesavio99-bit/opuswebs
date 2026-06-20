"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Search, Lightbulb, Palette, Code, Gauge, Rocket } from "lucide-react"

const steps = [
  { icon: Search, title: "Análisis", description: "Entendemos tu negocio y objetivos" },
  { icon: Lightbulb, title: "Estrategia", description: "Planificamos cada detalle" },
  { icon: Palette, title: "Diseño UI/UX", description: "Creamos la experiencia visual" },
  { icon: Code, title: "Desarrollo", description: "Construimos con código limpio" },
  { icon: Gauge, title: "Optimización + SEO", description: "Velocidad y posicionamiento" },
  { icon: Rocket, title: "Lanzamiento + Soporte", description: "Te acompañamos siempre" },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="proceso" ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Un proceso claro.
            <br />
            <span className="holographic-text">Un resultado de alto nivel.</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--glow-blue)]/50 via-[var(--glow-cyan)]/50 to-[var(--glow-violet)]/50" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-center gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[var(--glow-blue)] to-[var(--glow-cyan)] z-10">
                <div className="absolute inset-0 rounded-full bg-[var(--glow-cyan)] animate-ping opacity-30" />
              </div>

              {/* Content */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <div
                  className={`glass p-6 rounded-2xl border border-[var(--glow-blue)]/20 hover:border-[var(--glow-cyan)]/40 transition-colors ${index % 2 === 0 ? "md:ml-auto" : ""}`}
                >
                  <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--glow-blue)]/20 to-[var(--glow-cyan)]/20 flex items-center justify-center border border-[var(--glow-blue)]/30">
                      <step.icon className="w-6 h-6 text-[var(--glow-cyan)]" />
                    </div>
                    <div>
                      <span className="text-xs text-[var(--glow-cyan)] font-mono">0{index + 1}</span>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-[var(--text-muted)]">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
