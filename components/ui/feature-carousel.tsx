"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

interface CarouselImage {
  src: string
  alt: string
  title?: string
  url?: string
}

interface FeatureCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  images: CarouselImage[]
  autoPlay?: boolean
  intervalMs?: number
}

export const FeatureCarousel = React.forwardRef<HTMLDivElement, FeatureCarouselProps>(
  ({ images, autoPlay = true, intervalMs = 4000, className, ...props }, ref) => {
    const isMobile = useIsMobile()
    const [currentIndex, setCurrentIndex] = React.useState(Math.floor(images.length / 2))

    React.useEffect(() => {
      setCurrentIndex(Math.floor(images.length / 2))
    }, [images])

    const handleNext = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, [images.length])

    const handlePrev = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }, [images.length])

    React.useEffect(() => {
      if (!autoPlay || images.length <= 1) return
      const timer = setInterval(handleNext, intervalMs)
      return () => clearInterval(timer)
    }, [autoPlay, intervalMs, handleNext, images.length])

    if (images.length === 0) return null

    return (
      <div ref={ref} className={cn("relative w-full flex items-center justify-center", className)} {...props}>
        <div className="relative w-full h-[220px] sm:h-[340px] md:h-[420px] flex items-center justify-center overflow-hidden [perspective:1200px]">
          {images.map((image, index) => {
            const offset = index - currentIndex
            const total = images.length
            let pos = (offset + total) % total
            if (pos > Math.floor(total / 2)) {
              pos = pos - total
            }

            const isCenter = pos === 0
            const isAdjacent = Math.abs(pos) === 1
            const shiftPercent = isMobile ? 38 : 60

            const card = (
              <div
                className={cn(
                  "absolute aspect-video w-48 sm:w-80 md:w-[28rem] transition-all duration-500 ease-in-out",
                  "flex items-center justify-center",
                  isCenter && image.url ? "cursor-pointer" : "",
                )}
                style={{
                  transform: `
                    translateX(${pos * shiftPercent}%)
                    scale(${isCenter ? 1 : isAdjacent ? 0.78 : 0.6})
                    rotateY(${pos * -12}deg)
                  `,
                  zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                  opacity: isCenter ? 1 : isAdjacent ? 0.4 : 0,
                  filter: isCenter ? "blur(0px)" : "blur(4px)",
                  visibility: Math.abs(pos) > 2 ? "hidden" : "visible",
                }}
              >
                <div className="group relative w-full h-full overflow-hidden rounded-2xl border-2 border-foreground/10 shadow-2xl">
                  <img src={image.src || "/placeholder.svg"} alt={image.alt} className="object-cover w-full h-full" />
                  {isCenter && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      {image.title && (
                        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                          <span className="text-white font-semibold text-sm md:text-base">{image.title}</span>
                          {image.url && (
                            <span className="flex items-center gap-1 text-xs text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                              Ver sitio <ExternalLink className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            )

            if (isCenter && image.url) {
              return (
                <a
                  key={image.src + index}
                  href={image.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={image.title || image.alt}
                >
                  {card}
                </a>
              )
            }

            return <React.Fragment key={image.src + index}>{card}</React.Fragment>
          })}
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-20 bg-background/50 backdrop-blur-sm"
          onClick={handlePrev}
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 z-20 bg-background/50 backdrop-blur-sm"
          onClick={handleNext}
          aria-label="Siguiente"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    )
  },
)

FeatureCarousel.displayName = "FeatureCarousel"
