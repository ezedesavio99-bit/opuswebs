"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MagneticButton } from "./magnetic-button"
import { Send, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rubro: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/consulta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.name,
          email: formData.email,
          rubro: formData.rubro,
          mensaje: formData.message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar la consulta")
      }

      setSubmitStatus("success")
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        rubro: "",
        message: "",
      })

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Error al enviar la consulta")

      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
        setErrorMessage("")
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Contanos tu rubro y tu idea.
            <br />
            <span className="holographic-text">Nosotros la convertimos en presencia digital.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 border border-[var(--glow-blue)]/20">
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <p className="text-green-400 font-medium">
                  Consulta enviada correctamente, te contactaremos a la brevedad
                </p>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-400" />
                <p className="text-red-400 font-medium">{errorMessage}</p>
              </motion.div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-2">Nombre</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--secondary-navy)] border border-[var(--glow-blue)]/20 text-white placeholder-[var(--text-muted)]/50 focus:border-[var(--glow-cyan)]/50 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--secondary-navy)] border border-[var(--glow-blue)]/20 text-white placeholder-[var(--text-muted)]/50 focus:border-[var(--glow-cyan)]/50 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-2">Rubro / Industria</label>
                <input
                  type="text"
                  value={formData.rubro}
                  onChange={(e) => setFormData({ ...formData, rubro: e.target.value })}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--secondary-navy)] border border-[var(--glow-blue)]/20 text-white placeholder-[var(--text-muted)]/50 focus:border-[var(--glow-cyan)]/50 focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Ej: Inmobiliaria, Gimnasio, etc."
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--text-muted)] mb-2">¿Qué tenés en mente?</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  disabled={isSubmitting}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--secondary-navy)] border border-[var(--glow-blue)]/20 text-white placeholder-[var(--text-muted)]/50 focus:border-[var(--glow-cyan)]/50 focus:outline-none transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Contanos brevemente tu idea..."
                />
              </div>
              <MagneticButton>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[var(--glow-blue)] to-[var(--glow-cyan)] text-[var(--deep-navy)] font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(47,156,255,0.4)] transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Enviando..." : "Enviar consulta"}
                </button>
              </MagneticButton>
            </div>
          </form>
        </motion.div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/TUNUMERO"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-shadow z-50"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </section>
  )
}
