"use client"

import { LocationsMap } from "@/components/locations-map"

interface LocationsSectionProps {
  isVisible: boolean
}

export function LocationsSection({ isVisible }: LocationsSectionProps) {
  return (
    <section
      id="locations"
      className="py-20 bg-muted story-section"
      aria-labelledby="locations-heading"
      itemScope
      itemType="https://schema.org/Place"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="locations-heading" className="text-4xl font-bold text-foreground mb-4 animate-gentle-float">
            Our Beach Locations
          </h2>
          <p className="text-xl text-muted-foreground">Three premium surf destinations across Karnataka</p>
        </div>
        <LocationsMap isVisible={isVisible} />
      </div>
    </section>
  )
}
