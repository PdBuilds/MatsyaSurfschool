import { siteConfig } from "@/config/site"

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/matsya-surf-school-logo-round.png`,
    image: `${siteConfig.url}/beautiful-kapu-beach-in-udupi-india-with-surfers-a.jpg`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Card",
    openingHours: "Mo-Su 06:00-18:00",
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook, siteConfig.social.youtube],
    address: siteConfig.locations.map((loc) => ({
      "@type": "PostalAddress",
      streetAddress: loc.contact.address,
      addressLocality: loc.name,
      addressRegion: "Karnataka",
      postalCode: "576106",
      addressCountry: "IN",
    })),
    geo: siteConfig.locations.map((loc) => ({
      "@type": "GeoCoordinates",
      latitude: loc.coordinates.lat,
      longitude: loc.coordinates.lng,
    })),
  }
}

export function getProductSchema(packageData: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: packageData.title,
    description: packageData.description,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "Offer",
      price: packageData.price.replace(/[^0-9]/g, ""),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}#packages`,
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split("T")[0],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  }
}

export function getReviewSchema(testimonial: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
    },
    author: {
      "@type": "Person",
      name: testimonial.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: testimonial.rating,
      bestRating: "5",
      worstRating: "1",
    },
    reviewBody: testimonial.text,
  }
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/matsya-surf-school-logo-round.png`,
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "Customer Service",
      email: siteConfig.contact.email,
      availableLanguage: ["English", "Hindi", "Kannada"],
    },
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook, siteConfig.social.youtube],
  }
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${siteConfig.url}#about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Surf Packages",
        item: `${siteConfig.url}#packages`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Accommodation",
        item: `${siteConfig.url}#stay`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Gallery",
        item: `${siteConfig.url}#gallery`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Contact",
        item: `${siteConfig.url}#contact`,
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Locations",
        item: `${siteConfig.url}#locations`,
      },
    ],
  }
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What surf packages do you offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer 3-day, 5-day, 7-day, and 10-day surf packages that include professional lessons, accommodation, and meals. Both AC and Non-AC options are available.",
        },
      },
      {
        "@type": "Question",
        name: "Where are your surf school locations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We have three locations across Karnataka: Kapu Beach in Udupi, Mulki Beach, and Malpe Beach. Each location offers unique surfing conditions suitable for different skill levels.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide equipment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all our packages include surfboard rental, wetsuit, safety gear, and professional instruction from certified surf coaches.",
        },
      },
      {
        "@type": "Question",
        name: "Is accommodation included in the packages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all our surf packages include accommodation options ranging from shared dorms to private AC rooms, along with daily meals.",
        },
      },
    ],
  }
}
