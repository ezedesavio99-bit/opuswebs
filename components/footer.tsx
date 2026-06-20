"use client"

import Link from "next/link"

const footerLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#planes", label: "Planes" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
]

const socialLinks = [
  {
    href: "https://www.instagram.com/ezequielmkt__?igsh=MWdsdGRydTV5eDdxbA==",
    label: "Instagram",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    href: "https://wa.me/5EVB6PHIGC2WD1",
    label: "WhatsApp",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="relative py-12 border-t border-[var(--glow-blue)]/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-lg text-white">
              Opus<span className="text-[var(--glow-cyan)]">Webs</span>
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--text-muted)] hover:text-white transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2 rounded-full glass border border-[var(--glow-blue)]/20 hover:border-[var(--glow-cyan)]/50 transition-all duration-300"
                aria-label={social.label}
              >
                <div className="text-[var(--text-muted)] group-hover:text-[var(--glow-cyan)] transition-colors">
                  {social.icon}
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--glow-blue)] to-[var(--glow-cyan)] opacity-0 group-hover:opacity-20 blur-md transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[var(--glow-blue)]/10 text-center">
          <p className="text-[var(--text-muted)]/60 text-xs">
            © {new Date().getFullYear()} OpusWebs. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
