"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function StatementSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 md:py-40">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[var(--glow-blue)]/5 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            OpusWebs no sigue tendencias.
            <br />
            <span className="holographic-text">Diseña el estándar.</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)]">Webs que se sienten del futuro, hoy.</p>
        </motion.div>
      </div>
    </section>
  )
}
