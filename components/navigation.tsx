"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ConfiguredImage } from "@/components/ui/configured-image"
import { getImageConfig } from "@/lib/image-config"

interface NavigationProps {
  scrollToSection: (sectionId: string) => void
}

export function Navigation({ scrollToSection }: NavigationProps) {
  const [expandedSections, setExpandedSections] = useState({})

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border hover-blur-lift">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <ConfiguredImage config={getImageConfig("logo")} size="nav" className="animate-gentle-float" />
          <span className="text-xl font-bold text-foreground">Matsya Surf School</span>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-3 py-2 rounded-md hover:bg-muted"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("packages")}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-3 py-2 rounded-md hover:bg-muted"
          >
            Surf Packages
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-3 py-2 rounded-md hover:bg-muted"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-3 py-2 rounded-md hover:bg-muted"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection("locations")}
            className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 px-3 py-2 rounded-md hover:bg-muted"
          >
            Locations
          </button>
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => toggleSection("mobile-menu")} className="text-foreground">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
      {expandedSections["mobile-menu"] && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-story-fade-scale">
          <div className="container mx-auto px-4 py-4 space-y-2">
            <button
              onClick={() => {
                scrollToSection("about")
                toggleSection("mobile-menu")
              }}
              className="block w-full text-left py-2 px-3 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToSection("packages")
                toggleSection("mobile-menu")
              }}
              className="block w-full text-left py-2 px-3 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              Surf Packages
            </button>
            <button
              onClick={() => {
                scrollToSection("stay")
                toggleSection("mobile-menu")
              }}
              className="block w-full text-left py-2 px-3 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              Stay
            </button>
            <button
              onClick={() => {
                scrollToSection("gallery")
                toggleSection("mobile-menu")
              }}
              className="block w-full text-left py-2 px-3 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => {
                scrollToSection("contact")
                toggleSection("mobile-menu")
              }}
              className="block w-full text-left py-2 px-3 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => {
                scrollToSection("locations")
                toggleSection("mobile-menu")
              }}
              className="block w-full text-left py-2 px-3 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors"
            >
              Locations
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
