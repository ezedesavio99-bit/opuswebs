"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

export function Grid3DSection() {
  const ref = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener("resize", resize)

    let animationId: number
    let time = 0

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      const gridSize = 40
      const cols = Math.ceil(w / gridSize) + 1
      const rows = Math.ceil(h / gridSize) + 1

      // Apply perspective transformation
      const perspective = 0.3
      const offsetX = (mousePos.x - 0.5) * 50
      const offsetY = (mousePos.y - 0.5) * 30

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * gridSize + offsetX
          const y = j * gridSize + offsetY + Math.sin(time + i * 0.2) * 3

          // Calculate distance from mouse
          const dx = i / cols - mousePos.x
          const dy = j / rows - mousePos.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const brightness = Math.max(0, 1 - dist * 2)

          // Draw point
          ctx.beginPath()
          ctx.arc(x, y, 1.5 + brightness * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(47, 156, 255, ${0.2 + brightness * 0.6})`
          ctx.fill()

          // Draw horizontal line
          if (i < cols - 1) {
            ctx.beginPath()
            ctx.moveTo(x, y)
            const nextX = (i + 1) * gridSize + offsetX
            const nextY = j * gridSize + offsetY + Math.sin(time + (i + 1) * 0.2) * 3
            ctx.lineTo(nextX, nextY)
            ctx.strokeStyle = `rgba(47, 156, 255, ${0.1 + brightness * 0.3})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }

          // Draw vertical line
          if (j < rows - 1) {
            ctx.beginPath()
            ctx.moveTo(x, y)
            const nextY2 = (j + 1) * gridSize + offsetY + Math.sin(time + i * 0.2) * 3
            ctx.lineTo(x, nextY2)
            ctx.strokeStyle = `rgba(95, 211, 255, ${0.1 + brightness * 0.3})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      time += 0.02
      animationId = requestAnimationFrame(draw)
    }

    if (isInView) {
      draw()
    }

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [isInView, mousePos])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  return (
    <section ref={ref} onMouseMove={handleMouseMove} className="relative py-24 md:py-32 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ transform: "perspective(500px) rotateX(10deg)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Construimos tu presencia
            <br />
            <span className="holographic-text">desde la base.</span>
          </h2>
          <p className="text-lg text-[var(--text-muted)]">
            Cada OpusWeb se construye sobre una estructura sólida, escalable y preparada para crecer.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
