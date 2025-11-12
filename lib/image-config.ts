import imageConfig from "@/config/images.json"

export type ImageId =
  | "logo"
  | "hero"
  | "about"
  | `gallery-${number}`
  | "shared-dorm"
  | "ac-dorm"
  | "private-fan"
  | "private-ac"
  | "location-kapu"
  | "location-mulki"
  | "location-malpe"
  | "non-ac-dorm"
  | "non-ac-room"
  | "ac-room"

interface ImageConfig {
  id: string
  path: string
  alt: string
  title?: string
  tags?: string[]
  caption?: string
  width: number
  height: number
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  objectPosition?: string
  rounded?: boolean
  sizes?: {
    [key: string]: { width: number; height: number }
  }
}

export function getImageConfig(id: ImageId): ImageConfig {
  try {
    // Handle nested configs
    if (id.startsWith("gallery-")) {
      const index = Number.parseInt(id.split("-")[1]) - 1
      const galleryItem = imageConfig.gallery[index]
      if (!galleryItem) {
        console.error(`Gallery image not found at index ${index}`)
        return createFallbackConfig(id)
      }
      return galleryItem as ImageConfig
    }

    if (id.startsWith("location-")) {
      const location = id.replace("location-", "")
      const locationItem = imageConfig.locations[location as keyof typeof imageConfig.locations]
      if (!locationItem) {
        console.error(`Location image not found: ${location}`)
        return createFallbackConfig(id)
      }
      return locationItem as ImageConfig
    }

    if (["shared-dorm", "ac-dorm", "private-fan", "private-ac", "non-ac-dorm", "non-ac-room", "ac-room"].includes(id)) {
      const accommodationItem = imageConfig.accommodation[id as keyof typeof imageConfig.accommodation]
      if (!accommodationItem) {
        console.error(`Accommodation image not found: ${id}`)
        return createFallbackConfig(id)
      }
      return accommodationItem as ImageConfig
    }

    // Handle top-level configs
    const topLevelItem = imageConfig[id as keyof typeof imageConfig]
    if (!topLevelItem || typeof topLevelItem !== "object" || Array.isArray(topLevelItem)) {
      console.error(`Image config not found: ${id}`)
      return createFallbackConfig(id)
    }

    return topLevelItem as ImageConfig
  } catch (error) {
    console.error(`Error loading image config for ${id}:`, error)
    return createFallbackConfig(id)
  }
}

function createFallbackConfig(id: string): ImageConfig {
  return {
    id,
    path: "/placeholder.svg",
    alt: `Image ${id}`,
    title: id.replace(/-/g, " "),
    tags: [id],
    caption: `Placeholder for ${id.replace(/-/g, " ")}`,
    width: 400,
    height: 300,
  }
}

export function getGalleryImages(): ImageConfig[] {
  try {
    return (imageConfig.gallery || []) as ImageConfig[]
  } catch (error) {
    console.error("Error loading gallery images:", error)
    return []
  }
}

export function getAccommodationImage(type: string): ImageConfig {
  try {
    const accommodationItem = imageConfig.accommodation[type as keyof typeof imageConfig.accommodation]
    if (!accommodationItem) {
      console.error(`Accommodation image not found: ${type}`)
      return createFallbackConfig(type)
    }
    return accommodationItem as ImageConfig
  } catch (error) {
    console.error(`Error loading accommodation image for ${type}:`, error)
    return createFallbackConfig(type)
  }
}

export function getLocationImage(location: string): ImageConfig {
  try {
    const locationItem = imageConfig.locations[location as keyof typeof imageConfig.locations]
    if (!locationItem) {
      console.error(`Location image not found: ${location}`)
      return createFallbackConfig(location)
    }
    return locationItem as ImageConfig
  } catch (error) {
    console.error(`Error loading location image for ${location}:`, error)
    return createFallbackConfig(location)
  }
}
