"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Plus, Minus } from "lucide-react"
import { MagneticButton } from "./magnetic-button"
import Link from "next/link"

const faqs = [
  {
    question: "¿OpusWebs trabaja con cualquier rubro?",
    answer:
      "Sí. Diseñamos sitios web para empresas, negocios locales, profesionales, marcas personales, emprendedores y proyectos digitales de todo tipo.\nCada web se adapta al rubro, al público y al objetivo específico de cada cliente.",
  },
  {
    question: "¿Las páginas son plantillas o diseños personalizados?",
    answer:
      "No usamos plantillas genéricas.\nCada OpusWeb se diseña desde cero, con una estructura, estética y experiencia alineadas a tu marca y a lo que querés lograr con tu web.",
  },
  {
    question: "¿Cuánto tiempo tarda el desarrollo de una web?",
    answer:
      "Depende del tipo de proyecto, pero en promedio:\n\nWebs institucionales: 7 a 14 días\nLanding pages: 5 a 7 días\nProyectos más complejos: tiempos a definir\n\nSiempre priorizamos calidad, performance y detalle.",
  },
  {
    question: "¿Mi web va a funcionar bien en celulares?",
    answer:
      "Sí. Todas las webs se diseñan con enfoque mobile first, adaptándose perfectamente a celulares, tablets y computadoras, sin perder estética ni funcionalidad.",
  },
  {
    question: "¿Incluye posicionamiento en Google (SEO)?",
    answer:
      "Sí. Todas las webs incluyen una optimización SEO base:\nestructura correcta, velocidad de carga, textos optimizados y buenas prácticas para facilitar el posicionamiento en buscadores.",
  },
  {
    question: "¿Después puedo escalar mi web o agregar nuevas funciones?",
    answer:
      "Totalmente.\nLas webs de OpusWebs están pensadas para crecer: se pueden agregar secciones, tiendas online, automatizaciones, integraciones con CRM, formularios avanzados o soluciones con IA.",
  },
  {
    question: "¿Necesito tener dominio y hosting?",
    answer:
      "Podés usar uno propio o podemos ayudarte a gestionarlo.\nTe asesoramos para elegir la mejor opción según tu proyecto y acompañarte en todo el proceso.",
  },
  {
    question: "¿Qué pasa después de que la web se publica?",
    answer:
      "No te dejamos solo.\nPodés contar con mantenimiento, soporte y acompañamiento para mantener tu sitio actualizado, seguro y funcionando al máximo nivel.",
  },
  {
    question: "¿Cómo empiezo?",
    answer:
      "Muy simple.\nCompletás el formulario de contacto, nos contás tu idea y tu rubro, y a partir de ahí te proponemos la mejor solución para tu proyecto.",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            <span className="holographic-text">Preguntas frecuentes</span>
          </h2>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Resolvemos las dudas más comunes antes de dar el salto a una web profesional.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }
                    : {}
                }
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative glass rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[var(--glow-blue)]/60 shadow-[0_0_30px_rgba(47,156,255,0.3)]"
                    : "border-[var(--glow-blue)]/20 hover:border-[var(--glow-blue)]/40"
                }`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="relative w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="text-white font-medium pr-4 text-lg">{faq.question}</span>
                  <div className="flex-shrink-0 w-6 h-6 relative">
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isOpen ? 0 : 1,
                        rotate: isOpen ? 90 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Plus className="w-6 h-6 text-[var(--glow-cyan)]" />
                    </motion.div>
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isOpen ? 1 : 0,
                        rotate: isOpen ? 0 : -90,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Minus className="w-6 h-6 text-[var(--glow-cyan)]" />
                    </motion.div>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--glow-blue)]/30 to-transparent mb-4" />
                    <p className="text-[var(--text-muted)] leading-relaxed whitespace-pre-line">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-[var(--text-muted)] text-lg mb-6">¿Seguís con dudas? Hablemos y lo vemos juntos.</p>
          <MagneticButton>
            <Link
              href="/#contacto"
              className="relative px-8 py-4 rounded-full bg-gradient-to-r from-[var(--glow-blue)] to-[var(--glow-cyan)] text-[var(--deep-navy)] font-semibold overflow-hidden group inline-block"
            >
              <span className="relative z-10">Quiero mi web profesional</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
