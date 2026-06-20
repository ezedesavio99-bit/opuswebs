"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { MagneticButton } from "./magnetic-button"

export function LiveUISection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const interval = setInterval(() => {
      setCount((prev) => (prev < 1847 ? prev + 23 : 1847))
    }, 30)
    return () => clearInterval(interval)
  }, [isInView])

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--glow-blue)]/10 blur-[100px]" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              TU sitio debería generar
              <br />
              <span className="holographic-text">AUTORIDAD...</span>
            </h2>
            <p className="text-lg text-[var(--text-muted)] mb-8">
              Creamos experiencias con microinteracciones: el usuario explora, se queda y recuerda. Cada elemento tiene
              un propósito.
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

          {/* Live UI Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative glass rounded-3xl p-6 border border-[var(--glow-blue)]/30 overflow-hidden">
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "linear" }}
                  className="absolute inset-[-2px] rounded-3xl"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent, var(--glow-blue), var(--glow-cyan), transparent)",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                    padding: "2px",
                  }}
                />
              </div>

              {/* Mock navbar */}
              <div className="relative flex items-center justify-between mb-6 pb-4 border-b border-[var(--glow-blue)]/20">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--glow-blue)] to-[var(--glow-cyan)]" />
                <div className="flex gap-4">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: i * 0.3 }}
                      className="w-12 h-2 rounded-full bg-[var(--text-muted)]/30"
                    />
                  ))}
                </div>
              </div>

              {/* Mock cards */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, delay: i * 0.5 }}
                    className="p-4 rounded-xl bg-[var(--secondary-navy)] border border-[var(--glow-blue)]/20"
                  >
                    <div className="w-full h-20 rounded-lg bg-gradient-to-br from-[var(--glow-blue)]/20 to-[var(--glow-cyan)]/20 mb-3" />
                    <div className="w-3/4 h-2 rounded-full bg-[var(--text-muted)]/30 mb-2" />
                    <div className="w-1/2 h-2 rounded-full bg-[var(--text-muted)]/20" />
                  </motion.div>
                ))}
              </div>

              {/* Counter */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-[var(--secondary-navy)] border border-[var(--glow-blue)]/20">
                <div>
                  <div className="text-sm text-[var(--text-muted)]">Visitantes</div>
                  <div className="text-2xl font-bold text-white">{count.toLocaleString()}</div>
                </div>
                <div className="w-16 h-8 rounded-lg bg-gradient-to-r from-[var(--glow-blue)] to-[var(--glow-cyan)] animate-breathe" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
