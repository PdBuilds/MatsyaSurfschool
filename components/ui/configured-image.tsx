"use client"

import type React from "react"

import Image from "next/image"
import { cn } from "@/lib/utils"

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

interface ConfiguredImageProps {
  config: ImageConfig
  className?: string
  priority?: boolean
  size?: string
  style?: React.CSSProperties
}

export function ConfiguredImage({ config, className, priority = false, size, style }: ConfiguredImageProps) {
  // Safety check for undefined config
  if (!config) {
    console.error("ConfiguredImage received undefined config")
    return null
  }

  // Get size-specific dimensions if provided
  const dimensions = size && config.sizes?.[size] ? config.sizes[size] : { width: config.width, height: config.height }

  // Build image source with query if provided
  const imageSrc = config.path

  return (
    <figure className={cn("relative", className)}>
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={config.alt}
        title={config.title || config.alt}
        width={dimensions.width}
        height={dimensions.height}
        priority={priority}
        className={cn(config.rounded && "rounded-lg")}
        style={{
          objectFit: config.objectFit || "cover",
          objectPosition: config.objectPosition || "center",
          ...style,
        }}
      />
      {config.caption && <figcaption className="sr-only">{config.caption}</figcaption>}
    </figure>
  )
}

// Background image component for hero sections
interface ConfiguredBackgroundImageProps {
  config: ImageConfig
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
}

export function ConfiguredBackgroundImage({ config, className, children, style }: ConfiguredBackgroundImageProps) {
  // Safety check for undefined config
  if (!config) {
    console.error("ConfiguredBackgroundImage received undefined config")
    return null
  }

  const imageSrc = config.path

  return (
    <div
      className={cn("relative", className)}
      style={{
        backgroundImage: `url('${imageSrc}')`,
        backgroundSize: config.objectFit || "cover",
        backgroundPosition: config.objectPosition || "center",
        ...style,
      }}
      role="img"
      aria-label={config.alt}
      title={config.title || config.alt}
    >
      {children}
    </div>
  )
}
