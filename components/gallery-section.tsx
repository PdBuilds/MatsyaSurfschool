"use client"

import { ConfiguredImage } from "@/components/ui/configured-image"
import { getGalleryImages } from "@/lib/image-config"

interface GallerySectionProps {
  isVisible: boolean
}

export function GallerySection({ isVisible }: GallerySectionProps) {
  const galleryImages = getGalleryImages()

  return (
    <section id="gallery" className="py-20 bg-muted story-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-gentle-float">Gallery</h2>
          <p className="text-xl text-muted-foreground">Moments from our beach locations</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((imageConfig, index) => (
            <div
              key={imageConfig.id}
              className={`relative overflow-hidden rounded-lg group cursor-pointer hover-lift ${
                isVisible ? "animate-story-fade-scale" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ConfiguredImage
                config={imageConfig}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
