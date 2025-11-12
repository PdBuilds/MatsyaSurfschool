"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Navigation } from "lucide-react"

const locations = [
  {
    name: "Yermal",
    address: "Padubidri near by mulki, Udupi, Karnataka",
    phone: "+91 8050201112",
    description: "Our flagship location with pristine waves and golden sand",
    lat: 13.1278,
    lng: 74.7731,
    image: "/location/about-matsya.jpeg",
  },
  {
    name: "Padubidri",
    address: "Padubidri near by mulki, Udupi, Karnataka",
    phone: "+91 98765 43210",
    description: "Our flagship location with pristine waves and golden sand",
    lat: 13.1278,
    lng: 74.7731,
    image: "/location/about-matsya.jpeg",
  },

]

export function LocationsMap({ isVisible }: { isVisible: boolean }) {
  const [selectedLocation, setSelectedLocation] = useState(0)

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Interactive Map */}
      <div className={`${isVisible ? "animate-story-slide-in" : "opacity-0"} hover-lift`}>
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Navigation className="h-6 w-6 text-primary mr-2 animate-gentle-float" />
              Our Beach Locations
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 h-96 overflow-hidden">
              {/* Stylized Map Background */}
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  {/* Coastline */}
                  <path
                    d="M0,200 Q100,180 200,190 T400,200 L400,300 L0,300 Z"
                    fill="currentColor"
                    className="text-amber-200 dark:text-amber-800"
                  />
                  {/* Water waves */}
                  <path
                    d="M0,200 Q50,190 100,200 T200,200 T300,200 T400,200"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-blue-400 dark:text-blue-300 animate-pulse"
                  />
                </svg>
              </div>

              {/* Location Markers */}
              {locations.map((location, index) => (
                <div
                  key={index}
                  className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125 ${
                    selectedLocation === index ? "scale-125 z-10" : "hover:z-10"
                  }`}
                  style={{
                    left: `${20 + index * 25}%`,
                    top: `${60 + (index % 2) * 10}%`,
                  }}
                  onClick={() => setSelectedLocation(index)}
                >
                  {/* Custom Surf Marker */}
                  <div className="relative">
                    <div
                      className={`w-8 h-8 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${
                        selectedLocation === index ? "bg-primary animate-pulse" : "bg-blue-500 hover:bg-primary"
                      }`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    </div>
                    {/* Surf Wave Icon */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-2 h-2 text-blue-500">
                        <path
                          fill="currentColor"
                          d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2 2 6.5 2 12zm8-5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
                        />
                      </svg>
                    </div>
                    {/* Location Label */}
                    <div
                      className={`absolute top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${
                        selectedLocation === index ? "opacity-100 scale-100" : "opacity-0 scale-75"
                      }`}
                    >
                      <div className="bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-lg text-xs font-medium text-foreground border">
                        {location.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Location Details */}
      <div className={`${isVisible ? "animate-story-fade-scale" : "opacity-0"} space-y-6`}>
        <div className="grid grid-cols-3 gap-2 mb-6">
          {locations.map((location, index) => (
            <Button
              key={index}
              variant={selectedLocation === index ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedLocation(index)}
              className="text-xs hover-glow"
            >
              {location.name.split(" ")[0]}
            </Button>
          ))}
        </div>

        <Card className="hover-lift">
          <div className="relative overflow-hidden">
            <img
              src={`/abstract-geometric-shapes.png?height=200&width=400&query=${locations[selectedLocation].image}`}
              alt={locations[selectedLocation].name}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-4 right-4">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Location {selectedLocation + 1}
              </div>
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-foreground flex items-center">
              <MapPin className="h-5 w-5 text-primary mr-2 animate-gentle-float" />
              {locations[selectedLocation].name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{locations[selectedLocation].description}</p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                {locations[selectedLocation].address}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2" />
                {locations[selectedLocation].phone}
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <Button className="flex-1 bg-primary hover:bg-primary/90 hover-glow">
                Book at {locations[selectedLocation].name}
              </Button>
              <Button variant="outline" size="icon" className="hover-glow bg-transparent">
                <Navigation className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
