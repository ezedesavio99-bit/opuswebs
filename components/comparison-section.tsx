"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, X } from "lucide-react"

const comparisons = [
  { feature: "Confianza visual", common: false, opus: true },
  { feature: "Velocidad de carga", common: false, opus: true },
  { feature: "Diseño premium", common: false, opus: true },
  { feature: "Optimización conversión", common: false, opus: true },
  { feature: "Escalabilidad", common: false, opus: true },
  { feature: "Microinteracciones", common: false, opus: true },
  { feature: "SEO avanzado", common: false, opus: true },
  { feature: "Soporte continuo", common: false, opus: true },
]

export function ComparisonSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            La diferencia entre tener una web…
            <br />
            <span className="holographic-text">y tener presencia.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass rounded-2xl border border-[var(--glow-blue)]/20 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 p-4 border-b border-[var(--glow-blue)]/20 bg-[var(--secondary-navy)]">
              <div className="text-[var(--text-muted)] font-medium">Característica</div>
              <div className="text-center text-[var(--text-muted)] font-medium">Web Común</div>
              <div className="text-center">
                <span className="holographic-text font-bold">OpusWebs</span>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="grid grid-cols-3 p-4 border-b border-[var(--glow-blue)]/10 hover:bg-[var(--glow-blue)]/5 transition-colors"
              >
                <div className="text-white">{item.feature}</div>
                <div className="flex justify-center">
                  <X className="w-5 h-5 text-red-400/70" />
                </div>
                <div className="flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--glow-blue)] to-[var(--glow-cyan)] flex items-center justify-center">
                    <Check className="w-4 h-4 text-[var(--deep-navy)]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
