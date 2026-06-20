"use client"

import type React from "react"

import { useRef, useState, type ReactNode } from "react"

interface HolographicCardProps {
  children: ReactNode
  className?: string
}

export function HolographicCard({ children, className = "" }: HolographicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
        isHovered ? "translate-y-[-4px]" : ""
      } ${className}`}
      style={{
        background: "var(--card-dark)",
      }}
    >
      {/* Glow border */}
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(47, 156, 255, 0.3), transparent 40%)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Light sweep effect */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(95, 211, 255, 0.1) 45%, rgba(95, 211, 255, 0.2) 50%, rgba(95, 211, 255, 0.1) 55%, transparent 60%)",
          transform: isHovered ? "translateX(100%)" : "translateX(-100%)",
          transition: "transform 0.6s ease",
        }}
      />

      {/* Border */}
      <div className="absolute inset-0 rounded-2xl border border-[var(--glow-blue)]/20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
