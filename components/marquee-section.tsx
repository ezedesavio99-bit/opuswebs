"use client"

import { motion } from "framer-motion"

const items = [
  "Webs",
  "Landing Pages",
  "Tiendas Online",
  "Branding",
  "SEO",
  "Automatización",
  "Integraciones",
  "Diseño Premium",
]

export function MarqueeSection() {
  return (
    <section className="relative py-8 overflow-hidden border-y border-[var(--glow-blue)]/20">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-navy)] via-transparent to-[var(--deep-navy)] z-10 pointer-events-none" />

      {/* Glow lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glow-blue)]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--glow-cyan)]/50 to-transparent" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 30, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="text-xl md:text-2xl font-medium text-[var(--text-muted)] hover:text-white transition-colors">
              {item}
            </span>
            <span className="text-[var(--glow-cyan)]">•</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
