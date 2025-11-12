export const NAVIGATION_ITEMS = [
  { id: "about", label: "About" },
  { id: "packages", label: "Surf Packages" },
  { id: "stay", label: "Stay" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
  { id: "locations", label: "Locations" },
] as const

export const ANIMATION_DELAYS = {
  short: 200,
  medium: 400,
  long: 600,
} as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const
