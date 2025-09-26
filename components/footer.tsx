"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 text-center space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-muted-foreground text-lg mb-6">
              I'm always interested in new opportunities and exciting projects
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="outline" className="rounded-full">
                <Mail className="w-4 h-4 mr-2" />
                rohitghosh.dev@gmail.com
              </Button>
              <Button variant="outline" className="rounded-full">
                <Phone className="w-4 h-4 mr-2" />
                +91-XXXXXXXXXX
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Availability</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {["Remote", "Hybrid", "Relocate", "Travel", "On-Site"].map((type) => (
                <span
                  key={type}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="sm" className="rounded-full">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              <Mail className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="rounded-full">
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>

          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Based in Kolkata, India</span>
              </div>
              <div>
                © 2024 Rohit Ghosh. All rights reserved.
              </div>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  )
}