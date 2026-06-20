"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { MagneticButton } from "./magnetic-button"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/rubros", label: "Rubros" },
  { href: "/proceso", label: "Proceso" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/planes", label: "Planes" },
  { href: "/faq", label: "FAQ" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong py-3 border-b border-[var(--glow-blue)]/20 shadow-[0_0_30px_rgba(47,156,255,0.1)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300"
            >
              <defs>
                <linearGradient id="logoGlow" x1="8" y1="4" x2="20" y2="22" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00D9FF" />
                  <stop offset="50%" stopColor="#2F9CFF" />
                  <stop offset="100%" stopColor="#00D9FF" />
                </linearGradient>
                <filter id="logoGlowFilter">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <g filter="url(#logoGlowFilter)">
                <path
                  d="M8 4L8 20L12 16L15 22L17 21L14 15L20 15L8 4Z"
                  fill="url(#logoGlow)"
                  stroke="#00D9FF"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
          <span className="font-bold text-xl text-white">
            Opus<span className="text-[var(--glow-cyan)]">Webs</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--text-muted)] hover:text-white transition-colors relative group text-sm"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--glow-blue)] to-[var(--glow-cyan)] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton>
            <Link
              href="/faq"
              className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-[var(--glow-blue)] to-[var(--glow-cyan)] text-[var(--deep-navy)] font-semibold text-sm overflow-hidden group"
            >
              <span className="relative z-10">Quiero mi web</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </Link>
          </MagneticButton>
        </div>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-white">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-strong mt-2 mx-4 rounded-2xl p-6 border border-[var(--glow-blue)]/20">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[var(--text-muted)] hover:text-white transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--glow-blue)] to-[var(--glow-cyan)] text-[var(--deep-navy)] font-semibold text-center"
            >
              Quiero mi web
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
