"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

interface GlowOrb {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  hue: number
}

export function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const orbsRef = useRef<GlowOrb[]>([])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = []
    const count = Math.min(80, Math.floor((width * height) / 15000))
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }
    return particles
  }, [])

  const initOrbs = useCallback((width: number, height: number) => {
    return [
      { x: width * 0.2, y: height * 0.3, size: 300, speedX: 0.15, speedY: 0.1, hue: 210 },
      { x: width * 0.8, y: height * 0.6, size: 250, speedX: -0.1, speedY: 0.15, hue: 190 },
      { x: width * 0.5, y: height * 0.8, size: 200, speedX: 0.12, speedY: -0.08, hue: 260 },
    ]
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particlesRef.current = initParticles(canvas.width, canvas.height)
      orbsRef.current = initOrbs(canvas.width, canvas.height)
    }

    resize()
    window.addEventListener("resize", resize)

    const animate = () => {
      if (prefersReducedMotion) {
        ctx.fillStyle = "#050B16"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        return
      }

      ctx.fillStyle = "rgba(5, 11, 22, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw glow orbs
      orbsRef.current.forEach((orb) => {
        orb.x += orb.speedX
        orb.y += orb.speedY
        if (orb.x < -orb.size || orb.x > canvas.width + orb.size) orb.speedX *= -1
        if (orb.y < -orb.size || orb.y > canvas.height + orb.size) orb.speedY *= -1

        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.size)
        gradient.addColorStop(0, `hsla(${orb.hue}, 80%, 50%, 0.15)`)
        gradient.addColorStop(0.5, `hsla(${orb.hue}, 80%, 50%, 0.05)`)
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw particles
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(95, 211, 255, ${particle.opacity})`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [prefersReducedMotion, initParticles, initOrbs])

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "#050B16" }} />
      {/* Noise overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-[2]"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(5, 11, 22, 0.4) 100%)",
        }}
      />
    </>
  )
}
