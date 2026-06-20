"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MagneticButton } from "./magnetic-button"

const labels = [
  { text: "UX Avanzado", position: "top-4 left-4" },
  { text: "Micro-interacciones", position: "top-4 right-4" },
  { text: "Diseño Vivo", position: "bottom-4 left-4" },
  { text: "Experiencia Premium", position: "bottom-4 right-4" },
]

export function ProModeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-[var(--glow-violet)]/10 blur-[150px] -translate-y-1/2" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative animate-float">
              {/* Phone mockup */}
              <div className="relative mx-auto w-64 h-[500px] rounded-[3rem] bg-gradient-to-b from-[var(--card-dark)] to-[var(--secondary-navy)] border-4 border-[var(--glow-blue)]/30 overflow-hidden">
                {/* Animated glow border */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(47, 156, 255, 0.3)",
                      "0 0 40px rgba(95, 211, 255, 0.4)",
                      "0 0 20px rgba(124, 92, 255, 0.3)",
                      "0 0 20px rgba(47, 156, 255, 0.3)",
                    ],
                  }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4 }}
                  className="absolute inset-0 rounded-[3rem]"
                />

                {/* Screen content */}
                <div className="absolute inset-2 rounded-[2.5rem] bg-[var(--deep-navy)] overflow-hidden">
                  <div className="p-4 space-y-3">
                    <div className="w-16 h-2 rounded-full bg-[var(--glow-blue)]/30 mx-auto" />
                    <div className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: i * 0.3 }}
                          className="h-24 rounded-xl bg-gradient-to-br from-[var(--glow-blue)]/20 to-[var(--glow-cyan)]/10 border border-[var(--glow-blue)]/20"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating labels */}
              {labels.map((label, index) => (
                <motion.div
                  key={label.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className={`absolute ${label.position} px-3 py-1.5 rounded-full glass border border-[var(--glow-cyan)]/30 text-xs text-[var(--glow-cyan)] whitespace-nowrap`}
                >
                  {label.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-1.5 rounded-full glass border border-[var(--glow-cyan)]/30 text-[var(--glow-cyan)] text-sm mb-6">
              Modo Pro Activado
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Esto es lo que pasa cuando una web deja de ser solo una página y se convierte en una{" "}
              <span className="holographic-text">experiencia.</span>
            </h2>
            <p className="text-lg text-[var(--text-muted)] mb-8">
              Cada detalle está pensado. Cada transición tiene un propósito. El resultado: una web que no se olvida.
            </p>
            <MagneticButton>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[var(--glow-blue)] to-[var(--glow-cyan)] text-[var(--deep-navy)] font-semibold hover:shadow-[0_0_40px_rgba(47,156,255,0.4)] transition-shadow"
              >
                Quiero este nivel
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
