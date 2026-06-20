"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { HolographicCard } from "./holographic-card"
import { Globe, Briefcase, User, Rocket, ShoppingCart, Bot } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Diseño Web Profesional",
    description: "Webs que transmiten autoridad y confianza desde el primer segundo.",
  },
  {
    icon: Briefcase,
    title: "Webs para Negocios",
    description: "Presencia digital que convierte visitantes en clientes reales.",
  },
  {
    icon: User,
    title: "Webs para Profesionales",
    description: "Tu marca personal en un sitio que refleja tu expertise.",
  },
  {
    icon: Rocket,
    title: "Landing Pages de Venta",
    description: "Páginas diseñadas estratégicamente para maximizar conversiones.",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas Online",
    description: "E-commerce que venden 24/7 con experiencia de compra premium.",
  },
  {
    icon: Bot,
    title: "Webs con IA y Automatización",
    description: "Integraciones inteligentes que trabajan por vos mientras dormís.",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicios" ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="w-6 h-10 rounded-full border-2 border-[var(--glow-blue)]/50 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-[var(--glow-cyan)]"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            No hacemos plantillas.
            <br />
            <span className="holographic-text">Diseñamos presencia digital.</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            Cada Web está construida para transmitir autoridad, retener atención y convertir visitas en consultas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <HolographicCard className="h-full">
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--glow-blue)]/20 to-[var(--glow-cyan)]/20 flex items-center justify-center mb-6 border border-[var(--glow-blue)]/30">
                    <service.icon className="w-7 h-7 text-[var(--glow-cyan)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-[var(--text-muted)]">{service.description}</p>
                </div>
              </HolographicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
