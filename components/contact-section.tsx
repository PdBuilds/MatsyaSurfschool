"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background story-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-gentle-float">Book Your Adventure</h2>
          <p className="text-xl text-muted-foreground">Ready to catch your first wave?</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8 hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Main Location</p>
                  <p className="text-muted-foreground">Kapu Beach, Udupi, Karnataka, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">info@matsyasurfing.com</p>
                </div>
              </div>
              <div className="pt-6">
                <Button
                  asChild
                  className="w-full bg-green-600 hover:bg-green-700 text-white mb-4 hover-glow"
                >
                  <a
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(
                      `Hi Matsya Surf School 🌊,
              I'd like to book a surf package.

              📌 Name:
              📧 Email/Phone:
              🏄 Package:
              📍 Location (Kapu/Mulki/Malpe):
              📅 Preferred Date:
              💬 Message (optional):

              Please share availability and details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp Booking
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Book Your Package</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="focus:ring-primary" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email/WhatsApp</Label>
                    <Input id="email" placeholder="Contact details" className="focus:ring-primary" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="package-type">Package Type</Label>
                  <Select>
                    <SelectTrigger className="focus:ring-primary">
                      <SelectValue placeholder="Select surf package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3-day-non-ac">3-Day Package (Non AC) - ₹4,000</SelectItem>
                      <SelectItem value="3-day-ac">3-Day Package (AC) - ₹5,500</SelectItem>
                      <SelectItem value="5-day-non-ac">5-Day Package (Non AC) - ₹6,500</SelectItem>
                      <SelectItem value="5-day-ac">5-Day Package (AC) - ₹8,500</SelectItem>
                      <SelectItem value="7-day-non-ac">7-Day Package (Non AC) - ₹9,000</SelectItem>
                      <SelectItem value="7-day-ac">7-Day Package (AC) - ₹11,500</SelectItem>
                      <SelectItem value="10-day-non-ac">10-Day Package (Non AC) - ₹12,500</SelectItem>
                      <SelectItem value="10-day-ac">10-Day Package (AC) - ₹15,500</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="location">Preferred Location</Label>
                  <Select>
                    <SelectTrigger className="focus:ring-primary">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kapu">Kapu Beach, Udupi</SelectItem>
                      <SelectItem value="mulki">Mulki Beach, Mangalore</SelectItem>
                      <SelectItem value="malpe">Malpe Beach, Udupi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" type="date" className="focus:ring-primary" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Any special requirements?" className="focus:ring-primary" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 hover-glow">Send Booking Request</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
