"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { FeatureCarousel } from "@/components/ui/feature-carousel"

const filters = [
  "Todos",
  "Ecommerce",
  "Automotores",
  "Profesionales",
  "Negocios",
  "Fitness",
  "Inmobiliaria",
  "Artistas",
  "Construcción",
  "Náutica",
  "Turismo",
  "Gastronomía",
  "Servicios",
]

const projects = [
  // Dominios propios (.com, .com.ar, etc) - Primero
  {
    title: "Grupo AG",
    rubro: "Construcción",
    url: "https://www.somosgrupoag.com/",
    tags: ["Acero", "Construcción"],
    image: "/images/grupo-ag.png",
  },
  {
    title: "DP Soluciones Gráficas",
    rubro: "Servicios",
    url: "https://www.dpsolucionesgraficas.com/",
    tags: ["Diseño", "Imprenta"],
    image: "/images/dp-soluciones.png",
  },
  {
    title: "Dellepiane Obras de Arte",
    rubro: "Artistas",
    url: "https://www.dellepianeobrasdearte.com/",
    tags: ["Arte", "Premium"],
    image: "/images/dellepiane.png",
  },
  {
    title: "Mito y Yamile",
    rubro: "Negocios",
    url: "https://www.distribuidoramitoyamile.com/",
    tags: ["Juguetería", "Mayorista"],
    image: "/images/mito-yamile.png",
  },
  {
    title: "El Cencerro Automotores",
    rubro: "Automotores",
    url: "https://elcencerroautomotores.com/",
    tags: ["Automotores", "Premium"],
    image: "/images/cencerro.png",
  },
  {
    title: "Abad Automotores",
    rubro: "Automotores",
    url: "https://www.abadautomotores.com/",
    tags: ["Automotores", "Premium"],
    image: "/images/abad-new.png",
  },
  {
    title: "Matías Ricardes",
    rubro: "Artistas",
    url: "https://www.matiasricardes.com/",
    tags: ["Artista", "Branding"],
    image: "/images/matias-20ricardes.png",
  },
  {
    title: "Teoruz",
    rubro: "Artistas",
    url: "https://teoruz.com/",
    tags: ["Artista", "Diseño"],
    image: "/images/teo-20ruz.png",
  },
  {
    title: "Cordaro Inmobiliaria",
    rubro: "Inmobiliaria",
    url: "https://cordaroinmobiliaria.com/",
    tags: ["Inmobiliaria", "Premium"],
    image: "/images/cordaro.png",
  },
  {
    title: "Distribuidora Maraio",
    rubro: "Ecommerce",
    url: "https://distribuidoramaraio.com.ar/",
    tags: ["Ecommerce", "Conversión"],
    image: "/images/maraio.png",
  },

  // Sitios en desarrollo (.vercel.app y otros)
  {
    title: "SIC Soluciones Integrales",
    rubro: "Construcción",
    url: "https://v0-construction-company-website-two-dun.vercel.app/",
    tags: ["Construcción", "Premium"],
    image: "/images/sic-soluciones.png",
  },
  {
    title: "VN iPhone's",
    rubro: "Ecommerce",
    url: "https://vniphone.vercel.app/",
    tags: ["Ecommerce", "Premium"],
    image: "/images/vn-iphone.png",
  },
  {
    title: "Totore Pizzas",
    rubro: "Gastronomía",
    url: "https://totorepizzas.vercel.app/",
    tags: ["Pizzería", "Delivery"],
    image: "/images/totore-pizzas.png",
  },
  {
    title: "Namaka",
    rubro: "Gastronomía",
    url: "https://namakabolws.vercel.app/",
    tags: ["Sushi", "Delivery"],
    image: "/images/namaka.png",
  },
  {
    title: "Crumbs",
    rubro: "Gastronomía",
    url: "https://crumbsres.vercel.app/",
    tags: ["Café", "Restaurante"],
    image: "/images/crumbs.png",
  },
  {
    title: "Malal Viajes y Turismo",
    rubro: "Turismo",
    url: "https://v0-malal-viajes-website.vercel.app/",
    tags: ["Turismo", "Premium"],
    image: "/images/malal-viajes.png",
  },

  {
    title: "Tatín Parrilla",
    rubro: "Gastronomía",
    url: "https://v0-tatin-parrilla-website.vercel.app/",
    tags: ["Restaurante", "Diseño"],
    image: "/images/tatin-parrilla.png",
  },

  {
    title: "Piscinas Díaz",
    rubro: "Servicios",
    url: "https://v0.app/chat/piscinas-diaz-website-vNGIYfohYxD",
    tags: ["Construcción", "Premium"],
    image: "/images/piscinas-diaz.png",
  },

  {
    title: "Rodolfo Villani Joyas",
    rubro: "Negocios",
    url: "https://v0-rodolfo-villani-joyas.vercel.app/",
    tags: ["Joyería", "Premium"],
    image: "/images/rodolfo-villani.png",
  },
  {
    title: "Hidrosiembra",
    rubro: "Negocios",
    url: "https://v0-hidrosiembra-website-design.vercel.app/",
    tags: ["Agro", "UX"],
    image: "/images/hidrosiembra.png",
  },

  {
    title: "Don Gregorio Automotores",
    rubro: "Automotores",
    url: "https://v0-don-gregorio-automotores-website.vercel.app/",
    tags: ["Automotores", "Conversión"],
    image: "/images/don-20gregorio.png",
  },
  {
    title: "Mis Buses SRL",
    rubro: "Automotores",
    url: "https://v0-mis-buses-srl-website.vercel.app/",
    tags: ["Automotores", "UX"],
    image: "/images/mis-buses.png",
  },
  {
    title: "Red Cars",
    rubro: "Automotores",
    url: "https://v0-red-cars-website.vercel.app/",
    tags: ["Automotores", "Diseño"],
    image: "/images/redcars.png",
  },
  {
    title: "RM Automotores",
    rubro: "Automotores",
    url: "https://v0-rmautomotores.vercel.app/",
    tags: ["Automotores", "Branding"],
    image: "/images/rm-automotores.png",
  },

  {
    title: "Dra. Nathercia Lima",
    rubro: "Profesionales",
    url: "https://v0-dranathercialima.vercel.app/",
    tags: ["Estética", "Premium"],
    image: "/images/dra-20nahercia.png",
  },

  {
    title: "Astiz Inmobiliaria",
    rubro: "Inmobiliaria",
    url: "https://astizinmobiliaria.vercel.app/",
    tags: ["Inmobiliaria", "UX"],
    image: "/images/astiz.png",
  },

  {
    title: "Nautiky Road",
    rubro: "Náutica",
    url: "https://v0-nautikyroad.vercel.app/",
    tags: ["Náutica", "Premium"],
    image: "/images/nautika.png",
  },

  {
    title: "Nico Mármoles",
    rubro: "Construcción",
    url: "https://v0-nico-marmoles-website.vercel.app/",
    tags: ["Construcción", "Diseño"],
    image: "/images/nico-marmoles.png",
  },
]

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState("Todos")

  const filteredProjects = activeFilter === "Todos" ? projects : projects.filter((p) => p.rubro === activeFilter)

  return (
    <section id="portfolio" ref={ref} className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Proyectos que se sienten
            <br />
            <span className="holographic-text">premium.</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-[var(--glow-blue)] to-[var(--glow-cyan)] text-[var(--deep-navy)]"
                  : "glass border border-[var(--glow-blue)]/20 text-white hover:border-[var(--glow-cyan)]/40"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* 3D carousel through the projects of the selected rubro */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FeatureCarousel
            images={filteredProjects.map((project) => ({
              src: project.image,
              alt: project.title,
              title: project.title,
              url: project.url,
            }))}
          />
        </motion.div>
      </div>
    </section>
  )
}
