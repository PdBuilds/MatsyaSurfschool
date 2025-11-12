"use client"

import { Button } from "@/components/ui/button"
import { ConfiguredBackgroundImage } from "@/components/ui/configured-image"
import { getImageConfig } from "@/lib/image-config"

interface HeroSectionProps {
  scrollY: number
  scrollToSection: (sectionId: string) => void
}

export function HeroSection({ scrollY, scrollToSection }: HeroSectionProps) {
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900"
      role="banner"
      aria-label="Hero section - Matsya Surf School"
    >
      <div id="hero" className="absolute inset-0" />
      <ConfiguredBackgroundImage
        config={getImageConfig("hero")}
        className="absolute inset-0 parallax-enhanced opacity-70"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-slate-900/80 to-slate-800/70 z-10" />
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-story-reveal">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance animate-gentle-float hero-text">
            Catch Your First Wave with Matsya Surfing school
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty hero-subtitle">
            Master the art of surfing with certified instructors at Karnataka's premier surf destinations
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg hover-glow"
            onClick={() => scrollToSection("contact")}
            aria-label="Book your surf lesson now"
          >
            Book Your Lesson
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center drop-shadow-lg">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
