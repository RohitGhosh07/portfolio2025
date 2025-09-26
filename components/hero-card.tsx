"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, ExternalLink, Phone } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function HeroCard() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-2xl"
      >
        <Card className="p-8 md:p-12 bg-gradient-to-br from-background via-background to-primary/5 border-2 border-primary/10 shadow-2xl">
          <div className="text-center space-y-8">
            {/* Profile Image Placeholder */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center shadow-xl"
            >
              <span className="text-4xl font-bold text-primary-foreground">RG</span>
            </motion.div>

            {/* Name and Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
                Rohit Ghosh
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Software Engineer / Developer
              </h2>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Kolkata, India</span>
              </div>
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
            >
              Passionate full-stack developer with expertise in React, Flutter, and Node.js. 
              Building scalable applications and always eager to tackle new challenges in software development.
            </motion.p>

            {/* Contact Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <Button variant="outline" className="rounded-full h-12 group hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                GitHub
              </Button>
              <Button variant="outline" className="rounded-full h-12 group hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>
              <Button variant="outline" className="rounded-full h-12 group hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Email
              </Button>
              <Button variant="outline" className="rounded-full h-12 group hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Website
              </Button>
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col md:flex-row justify-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border/50"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>rohitghosh.dev@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91-XXXXXXXXXX</span>
              </div>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}