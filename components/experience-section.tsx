"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Software Developer",
    company: "ForcePower Infotech",
    location: "Kolkata, India",
    period: "2023 - Present",
    description: "Developing full-stack web applications and mobile apps using modern technologies.",
    projects: [
      "Sports Carnival App - Flutter mobile application for event management",
      "Club ERP - Complete enterprise resource planning solution",
      "Golf Scoring App - Real-time scoring system for golf tournaments",
      "E-commerce Platform - Full-stack web application with payment integration"
    ],
    technologies: ["Flutter", "React", "Node.js", "MongoDB", "PostgreSQL"]
  },
  {
    title: "Junior Software Developer",
    company: "ForcePower Infotech",
    location: "Kolkata, India", 
    period: "2022 - 2023",
    description: "Started as junior developer, focusing on frontend development and learning full-stack technologies.",
    projects: [
      "Company Website Redesign - Modern responsive website",
      "Internal Tools - Various productivity applications",
      "Client Portal - Customer management dashboard"
    ],
    technologies: ["HTML/CSS", "JavaScript", "React", "Firebase"]
  }
]

export function ExperienceSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary/50">
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold">{exp.title}</h3>
                    <p className="text-xl text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <div>
                  <h4 className="font-semibold mb-3">Key Projects:</h4>
                  <ul className="space-y-2">
                    {exp.projects.map((project, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="rounded-full">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}