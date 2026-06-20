"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const showcaseProjects = [
  { title: "Matías Ricardes", tags: ["Artista", "Branding"], image: "/images/matias-20ricardes.png" },
  { title: "Teoruz", tags: ["Artista", "Diseño"], image: "/images/teo-20ruz.png" },
  { title: "Cordaro Inmobiliaria", tags: ["Inmobiliaria", "Premium"], image: "/images/cordaro.png" },
  { title: "Distribuidora Maraio", tags: ["Ecommerce", "Conversión"], image: "/images/maraio.png" },
  { title: "SIC Soluciones Integrales", tags: ["Construcción", "Premium"], image: "/images/sic-soluciones.png" },
  { title: "VN iPhone's", tags: ["Ecommerce", "Premium"], image: "/images/vn-iphone.png" },
]

export function ParallaxDivider() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: container,
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

  return (
    <div className="mx-2 my-10 overflow-hidden rounded-4xl bg-white">
      <div
        ref={container}
        className="relative flex h-[60vh] md:h-[80vh] items-center justify-center overflow-hidden bg-white"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div className="relative grid h-full w-full grid-cols-2 grid-rows-3 gap-1 md:grid-cols-3 md:grid-rows-2 bg-[var(--deep-navy)]" style={{ y }}>
            {showcaseProjects.map((project) => (
              <div key={project.title} className="relative flex flex-col overflow-hidden bg-[var(--card-dark)]">
                <div className="relative flex-1 overflow-hidden">
                  <Image
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    src={project.image || "/placeholder.svg"}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-2 md:p-4">
                  <p className="text-xs md:text-base font-semibold text-white truncate">{project.title}</p>
                  <div className="mt-1 hidden md:flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[10px] bg-[var(--glow-blue)]/10 text-[var(--glow-cyan)] border border-[var(--glow-blue)]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
