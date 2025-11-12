"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAccommodation, getExtras } from "@/lib/config-loader"
import { ConfiguredImage } from "@/components/ui/configured-image"
import { getAccommodationImage } from "@/lib/image-config"

interface StaySectionProps {
  isVisible: boolean
}

export function StaySection({ isVisible }: StaySectionProps) {
  const stayOptions = getAccommodation()
  const extras = getExtras()

  return (
    <section id="stay" className="py-20 bg-background story-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-gentle-float">
            Individual Accommodation Options
          </h2>
          <p className="text-xl text-muted-foreground">Comfortable stays with homely food included</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stayOptions.map((stay, index) => (
            <Card
              key={stay.id}
              className={`group overflow-hidden hover-lift ${isVisible ? "animate-story-reveal" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden">
                <ConfiguredImage
                  config={getAccommodationImage(stay.id)}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">{stay.price}</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-foreground">{stay.type}</CardTitle>
                <CardDescription>{stay.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-primary hover:bg-primary/90">Book Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          {extras.map((extra) => (
            <p key={extra.id} className="text-muted-foreground">
              {extra.name}: {extra.price}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
