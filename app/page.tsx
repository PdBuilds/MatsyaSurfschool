"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { PackagesSection } from "@/components/packages-section"
import { StaySection } from "@/components/stay-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { LocationsSection } from "@/components/locations-section"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useNavigation } from "@/hooks/use-navigation"

export default function SurfSchoolLanding() {
  const { isVisible, scrollY } = useScrollAnimation()
  const { scrollToSection } = useNavigation()

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>

      <div className="min-h-screen">
        <Navigation scrollToSection={scrollToSection} />

        <main id="main-content">
          <HeroSection scrollY={scrollY} scrollToSection={scrollToSection} />
          <AboutSection isVisible={isVisible.about} />
          <PackagesSection isVisible={isVisible.packages} />
          <StaySection isVisible={isVisible.stay} />
          <GallerySection isVisible={isVisible.gallery} />
          <TestimonialsSection />
          <ContactSection />
          <LocationsSection isVisible={isVisible.locations} />
        </main>

        <Footer />
      </div>
    </>
  )
}
