"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, Briefcase, Code, Award, BookOpen, Mail, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "projects", icon: Code, label: "Projects" },
  { id: "skills", icon: Award, label: "Skills" },
  { id: "blog", icon: BookOpen, label: "Blog" },
  { id: "contact", icon: Mail, label: "Contact" },
]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-full px-4 py-3 shadow-2xl">
        <div className="flex items-center gap-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative p-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            )
          })}
          
          <div className="w-px h-8 bg-border mx-2" />
          
          <motion.button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-3 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}