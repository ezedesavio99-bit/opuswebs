"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MagneticButton } from "./magnetic-button"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Energy rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[var(--glow-blue)]/10 animate-glow-pulse" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[var(--glow-cyan)]/15 animate-glow-pulse"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[var(--glow-violet)]/10 animate-glow-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[var(--glow-blue)]/20 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[var(--glow-cyan)]/20 blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            Si querés una web común,
            <br />
            <span className="holographic-text">no es acá.</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] mb-10">Si querés una web que represente tu nivel, hablemos.</p>
          <MagneticButton>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-[var(--glow-blue)] to-[var(--glow-cyan)] text-[var(--deep-navy)] font-bold text-lg hover:shadow-[0_0_60px_rgba(47,156,255,0.5)] transition-shadow animate-breathe"
            >
              Quiero mi OpusWeb
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
