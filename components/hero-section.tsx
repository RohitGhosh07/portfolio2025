"use client"

import { Mail, MapPin, Github, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <Card className="max-w-4xl w-full p-8 md:p-12 bg-gradient-to-br from-background to-muted/20 border-0 shadow-2xl">
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Rohit Ghosh
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Software Engineer / Developer
            </h2>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Kolkata, India</span>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate full-stack developer with expertise in modern web and mobile technologies. 
            Building scalable applications with React, Flutter, and Node.js. Always eager to learn 
            and tackle new challenges in software development.
          </p>

          <div className="flex justify-center gap-4 pt-4">
            <Button variant="outline" size="lg" className="rounded-full">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              <ExternalLink className="w-5 h-5 mr-2" />
              Website
            </Button>
          </div>
        </div>
      </Card>
    </section>
  )
}