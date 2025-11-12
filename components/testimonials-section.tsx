"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { getReviewSchema } from "@/lib/seo-schemas"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Best surf vibes in Udupi. The beach is stunning and the coaches make it easy.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      text: "Loved the stay, food was homely, and I caught my first wave!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      text: "Amazing experience! The instructors are patient and the location is perfect.",
      rating: 5,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="py-20 bg-primary text-primary-foreground story-section"
      aria-labelledby="testimonials-heading"
      itemScope
      itemType="https://schema.org/Review"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-4xl font-bold mb-4 animate-gentle-float">
            What Our Students Say
          </h2>
          <p className="text-xl opacity-90">Real experiences from real surfers</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              role="region"
              aria-live="polite"
              aria-label="Customer testimonials"
            >
              {testimonials.map((testimonial, index) => (
                <article
                  key={index}
                  className="w-full flex-shrink-0 px-8"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify(getReviewSchema(testimonial)),
                    }}
                  />
                  <Card className="bg-primary-foreground text-primary border-0 hover-glow">
                    <CardContent className="p-8 text-center">
                      <div
                        className="flex justify-center mb-4"
                        itemProp="reviewRating"
                        itemScope
                        itemType="https://schema.org/Rating"
                      >
                        <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                        <meta itemProp="bestRating" content="5" />
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400 animate-gentle-float"
                            aria-hidden="true"
                          />
                        ))}
                        <span className="sr-only">{testimonial.rating} out of 5 stars</span>
                      </div>
                      <p className="text-lg mb-6 italic" itemProp="reviewBody">
                        "{testimonial.text}"
                      </p>
                      <p className="font-semibold" itemProp="author" itemScope itemType="https://schema.org/Person">
                        - <span itemProp="name">{testimonial.name}</span>
                      </p>
                    </CardContent>
                  </Card>
                </article>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentTestimonial ? "bg-primary-foreground" : "bg-primary-foreground/50"
                }`}
                onClick={() => setCurrentTestimonial(index)}
                role="tab"
                aria-selected={index === currentTestimonial}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
