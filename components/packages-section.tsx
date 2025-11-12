"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getPackages } from "@/lib/config-loader"
import { getProductSchema } from "@/lib/seo-schemas"

interface PackagesSectionProps {
  isVisible: boolean
}

export function PackagesSection({ isVisible }: PackagesSectionProps) {
  const [expandedSections, setExpandedSections] = useState({})

  const packages = getPackages()

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }))
  }

  return (
    <section id="packages" className="py-20 bg-card story-section" aria-labelledby="packages-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="packages-heading" className="text-4xl font-bold text-card-foreground mb-4 animate-gentle-float">
            Choose Your Surf Package
          </h2>
          <p className="text-xl text-muted-foreground">Complete packages with lessons, accommodation & meals</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Surf packages">
          {packages.map((pkg, index) => (
            <article
              key={pkg.id}
              className={`hover-lift ${isVisible ? "animate-story-fade-scale" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              role="listitem"
              itemScope
              itemType="https://schema.org/Product"
            >
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(getProductSchema(pkg)),
                }}
              />
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-card-foreground leading-tight" itemProp="name">
                    {pkg.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed" itemProp="description">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground">{pkg.duration}</span>
                    <div className="text-right" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <meta itemProp="priceCurrency" content="INR" />
                      <div className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</div>
                      <div className="text-2xl font-bold text-primary" itemProp="price">
                        {pkg.price}
                      </div>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => toggleSection(`package-${pkg.id}`)}
                    aria-expanded={expandedSections[`package-${pkg.id}`]}
                    aria-controls={`package-details-${pkg.id}`}
                  >
                    {expandedSections[`package-${pkg.id}`] ? "Read Less" : "Read More"}
                  </Button>
                  {expandedSections[`package-${pkg.id}`] && (
                    <div
                      id={`package-details-${pkg.id}`}
                      className="mt-4 space-y-3 animate-story-fade-scale"
                      role="region"
                      aria-label={`Details for ${pkg.title}`}
                    >
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Package Includes:</h4>
                        <ul className="text-xs text-muted-foreground space-y-1" itemProp="description">
                          {pkg.includes.map((item, i) => (
                            <li key={i}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
