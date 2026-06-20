import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", weight: ["700", "800", "900"] })

export const metadata: Metadata = {
  title: "OpusWebs — Presencia Digital Premium",
  description:
    "Creamos sitios web que no solo se ven bien, venden. Diseño cyber premium, velocidad, SEO y una experiencia que se siente del futuro.",
  keywords: ["diseño web", "desarrollo web", "landing pages", "tiendas online", "SEO", "presencia digital"],
  icons: {
    icon: "/favicon.svg",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#050B16",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${geistMono.variable} ${orbitron.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
