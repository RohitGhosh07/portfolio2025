"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Database, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Dart", "Python", "Java", "HTML/CSS"]
  },
  {
    title: "Web Development",
    icon: Code,
    skills: ["React", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Material UI"]
  },
  {
    title: "Mobile Development", 
    icon: Smartphone,
    skills: ["Flutter", "React Native", "Android Studio", "iOS Development"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "MySQL", "Redis"]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Postman"]
  }
]

export function SkillsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}