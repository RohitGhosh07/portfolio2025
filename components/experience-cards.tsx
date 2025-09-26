"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Software Developer",
    company: "ForcePower Infotech",
    location: "Kolkata, India",
    period: "2023 - Present",
    description: "Leading full-stack development projects and mentoring junior developers.",
    projects: [
      "Sports Carnival App - Flutter mobile application for event management",
      "Club ERP - Complete enterprise resource planning solution",
      "Golf Scoring App - Real-time scoring system for golf tournaments",
      "E-commerce Platform - Full-stack web application with payment integration"
    ],
    technologies: ["Flutter", "React", "Node.js", "MongoDB", "PostgreSQL"],
    color: "from-blue-500/10 to-purple-500/10"
  },
  {
    title: "Junior Software Developer",
    company: "ForcePower Infotech",
    location: "Kolkata, India", 
    period: "2022 - 2023",
    description: "Started career focusing on frontend development and learning full-stack technologies.",
    projects: [
      "Company Website Redesign - Modern responsive website",
      "Internal Tools - Various productivity applications",
      "Client Portal - Customer management dashboard"
    ],
    technologies: ["HTML/CSS", "JavaScript", "React", "Firebase"],
    color: "from-green-500/10 to-blue-500/10"
  }
]

export function ExperienceCards() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg">My professional journey in software development</p>
        </motion.div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className={`p-8 hover:shadow-2xl transition-all duration-500 border-2 border-primary/10 bg-gradient-to-br ${exp.color} group hover:scale-[1.02]`}>
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Building className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{exp.title}</h3>
                          <p className="text-xl text-primary font-semibold">{exp.company}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-2">
                        <CalendarDays className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed text-lg">{exp.description}</p>

                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Key Projects:</h4>
                    <div className="grid gap-3">
                      {exp.projects.map((project, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-start gap-3 p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-colors"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{project}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                    {exp.technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                      >
                        <Badge variant="secondary" className="rounded-full px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}