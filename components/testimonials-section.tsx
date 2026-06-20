"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Distribuidora Maraio",
    role: "Ecommerce - Distribución mayorista",
    content:
      "Desde que lanzamos la web con OpusWebs, las consultas de nuevos clientes mayoristas aumentaron un 280%. La plataforma es intuitiva y nuestros clientes pueden hacer pedidos las 24hs.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Don Gregorio Automotores",
    role: "Automotores - Concesionaria",
    content:
      "La web que nos diseñaron transmite la confianza que buscábamos. Los clientes llegan más informados y las ventas cerraron un 40% más rápido desde que la tenemos.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Dra. Nathercia Lima",
    role: "Profesional - Medicina Estética",
    content:
      "Mi web refleja exactamente el nivel de profesionalismo y exclusividad que mis pacientes esperan. Las consultas de tratamientos premium se triplicaron.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Cordaro Inmobiliaria",
    role: "Inmobiliaria - Propiedades premium",
    content:
      "Nuestras propiedades ahora se presentan como merecen. Los compradores nos contactan ya interesados en cerrar. La inversión se pagó sola en el primer mes.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Mansion Gym",
    role: "Fitness - Gimnasio",
    content:
      "La web captura la energía de nuestro gimnasio. Las inscripciones online aumentaron un 150% y los clientes llegan motivados antes de cruzar la puerta.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Matías Ricardes",
    role: "Artista - Portfolio creativo",
    content:
      "Por fin tengo un espacio digital que representa mi arte. Las galerías y coleccionistas me toman más en serio y las comisiones de obra se duplicaron.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Nautiky Road",
    role: "Náutica - Embarcaciones",
    content:
      "El sitio transmite la exclusividad que nuestros clientes buscan. Las consultas por embarcaciones de alta gama aumentaron significativamente.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Nico Mármoles",
    role: "Construcción - Mármoles y piedras",
    content:
      "Nuestra web ahora muestra nuestros trabajos como merecen. Los arquitectos y diseñadores nos contactan directamente para proyectos de alto nivel.",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Opiniones reales.
            <br />
            <span className="holographic-text">Resultados reales.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative glass rounded-3xl p-8 md:p-12 border border-[var(--glow-blue)]/20">
            {/* Glow effect */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-[var(--glow-blue)]/20 via-transparent to-[var(--glow-cyan)]/20 -z-10" />

            <div className="flex justify-center mb-6">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[var(--glow-cyan)]/50">
                <Image
                  src={testimonials[current].image || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[var(--glow-cyan)] text-[var(--glow-cyan)]" />
              ))}
            </div>

            <p className="text-xl md:text-2xl text-white text-center mb-8 leading-relaxed">
              &ldquo;{testimonials[current].content}&rdquo;
            </p>

            <div className="text-center">
              <div className="font-semibold text-white text-lg">{testimonials[current].name}</div>
              <div className="text-[var(--glow-cyan)] text-sm">{testimonials[current].role}</div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full glass border border-[var(--glow-blue)]/30 flex items-center justify-center text-white hover:border-[var(--glow-cyan)]/50 hover:bg-[var(--glow-blue)]/10 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full glass border border-[var(--glow-blue)]/30 flex items-center justify-center text-white hover:border-[var(--glow-cyan)]/50 hover:bg-[var(--glow-blue)]/10 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current
                      ? "bg-[var(--glow-cyan)] w-6"
                      : "bg-[var(--glow-blue)]/30 hover:bg-[var(--glow-blue)]/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
