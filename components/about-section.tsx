"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { ConfiguredImage } from "@/components/ui/configured-image"
import { getImageConfig } from "@/lib/image-config"

interface AboutSectionProps {
  isVisible: boolean
}

export function AboutSection({ isVisible }: AboutSectionProps) {
  const [expandedSections, setExpandedSections] = useState({})

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  return (
    <section id="about" className="py-20 bg-muted story-section">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? "animate-story-slide-in" : "opacity-0"}`}>
            <div className="flex items-center mb-6">
              <ConfiguredImage config={getImageConfig("logo")} size="about" className="mr-3 animate-gentle-float" />
              <h2 className="text-4xl font-bold text-foreground">About Matsya Surf School</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded on the sun-kissed shores of Karnataka, Matsya Surf School is where passion meets the ocean. With certified instructors, premium equipment, and a focus on safety, we help surfers of all ages and skill levels master the waves.
              Whether you're a complete beginner or refining your technique, our lessons combine skill, fun, and mindfulness, so that you can experience the true rhythm of the sea.
            </p>
            <div className="mb-6">
              <Button
                onClick={() => toggleSection("about-details")}
                variant="outline"
                className="flex items-center gap-2"
              >
                {expandedSections["about-details"] ? "Read Less" : "Read More"}
                {expandedSections["about-details"] ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
            </div>
            {expandedSections["about-details"] && (
              <div className="space-y-4 animate-story-fade-scale">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you're a complete beginner or looking to improve your technique, our experienced coaches will
                  guide you through every step of your surfing journey in the warm waters of the Arabian Sea.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Certified ISA (International Surfing Association) instructors</li>
                  <li>Small group sizes for personalized attention</li>
                  <li>All equipment provided including boards and wetsuits</li>
                  <li>Safety-first approach with beach rescue training</li>
                  <li>Eco-friendly practices to protect our oceans</li>
                </ul>
              </div>
            )}
          </div>
          <div className={`${isVisible ? "animate-story-fade-scale" : "opacity-0"} hover-lift`}>
            <ConfiguredImage config={getImageConfig("about")} className="shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
