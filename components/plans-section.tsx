"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MagneticButton } from "./magnetic-button"
import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Starter",
    description: "Para empezar con presencia digital",
    price: "Desde $397 USD",
    features: ["Diseño personalizado", "Responsive 100%", "SEO básico", "Formulario de contacto", "Hosting primer año"],
    highlighted: false,
  },
  {
    name: "Pro",
    description: "El más elegido por negocios",
    price: "Desde $697 USD",
    features: [
      "Todo lo de Starter",
      "Microinteracciones",
      "Animaciones premium",
      "SEO avanzado",
      "Integraciones",
      "Soporte prioritario",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    description: "Presencia digital de alto nivel",
    price: "Consultar",
    features: [
      "Todo lo de Pro",
      "Automatizaciones IA",
      "E-commerce completo",
      "Dashboard analytics",
      "Soporte 24/7",
      "Actualizaciones ilimitadas",
    ],
    highlighted: false,
  },
]

export function PlansSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="planes" ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Elegí tu nivel
            <br />
            <span className="holographic-text">de presencia.</span>
          </h2>
          <p className="text-[var(--text-muted)]">Podés empezar simple y escalar cuando quieras.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-[var(--glow-blue)]/20 to-transparent border-2 border-[var(--glow-cyan)]/50"
                  : "glass border border-[var(--glow-blue)]/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[var(--glow-blue)] to-[var(--glow-cyan)] text-[var(--deep-navy)] text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4" /> Más elegido
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-[var(--text-muted)] text-sm mb-4">{plan.description}</p>
                <div className="text-3xl font-bold holographic-text">{plan.price}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-[var(--text-muted)]">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[var(--glow-blue)]/30 to-[var(--glow-cyan)]/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[var(--glow-cyan)]" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <MagneticButton>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[var(--glow-blue)] to-[var(--glow-cyan)] text-[var(--deep-navy)] hover:shadow-[0_0_30px_rgba(47,156,255,0.4)]"
                      : "glass border border-[var(--glow-blue)]/30 text-white hover:border-[var(--glow-cyan)]/50"
                  }`}
                >
                  Elegir
                </button>
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
