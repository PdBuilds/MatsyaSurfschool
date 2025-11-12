"use client"

import { useCallback } from "react"

export function useNavigation() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [])

  return { scrollToSection }
}
