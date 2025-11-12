export interface NavigationProps {
  scrollToSection: (sectionId: string) => void
}

export interface SectionProps {
  isVisible?: boolean
}

export interface HeroSectionProps extends SectionProps {
  scrollY: number
  scrollToSection: (sectionId: string) => void
}

export interface PackageCardProps {
  title: string
  duration: string
  price: string
  originalPrice?: string
  features: string[]
  includes: string[]
  schedule: string[]
  equipment: string[]
  popular?: boolean
  type: "AC" | "Non-AC"
}

export interface LocationCardProps {
  name: string
  description: string
  coordinates: { lat: number; lng: number }
  contact: {
    phone: string
    email: string
    address: string
  }
  features: string[]
}

export interface TestimonialProps {
  name: string
  location: string
  rating: number
  comment: string
  image?: string
}

export interface GalleryImageProps {
  src: string
  alt: string
  category: "surfing" | "beach" | "accommodation" | "activities"
}
