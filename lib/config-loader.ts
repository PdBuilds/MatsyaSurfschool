import packagesData from "@/config/packages.json"
import accommodationData from "@/config/accommodation.json"

export interface PackageConfig {
  id: string
  title: string
  description: string
  duration: string
  price: string
  originalPrice: string
  days: number
  nights: number
  type: string
  includes: string[]
}

export interface AccommodationConfig {
  id: string
  type: string
  price: string
  pricePerNight: number
  description: string
  image: string
  amenities: string[]
}

export interface ExtraConfig {
  id: string
  name: string
  price: string
  priceAmount: number
  description: string
}

export interface PackagesData {
  packages: PackageConfig[]
}

export interface AccommodationData {
  accommodation: AccommodationConfig[]
  extras: ExtraConfig[]
}

export function getPackages(): PackageConfig[] {
  return packagesData.packages
}

export function getAccommodation(): AccommodationConfig[] {
  return accommodationData.accommodation
}

export function getExtras(): ExtraConfig[] {
  return accommodationData.extras
}
