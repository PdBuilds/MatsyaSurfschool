"use client"

import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img src="/matsya-surf-school-logo-round.png" alt="Matsya Logo" className="h-12 w-12 animate-gentle-float" />
            <span className="text-xl font-bold text-foreground">Matsya Surf School</span>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="hover-glow">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-glow">
              <MessageCircle className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2025 Matsya Surf School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
