"use client"

import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"

const technologies = [
  { name: "React", weight: 90, color: "text-blue-500" },
  { name: "Flutter", weight: 85, color: "text-cyan-500" },
  { name: "Node.js", weight: 80, color: "text-green-500" },
  { name: "TypeScript", weight: 85, color: "text-blue-600" },
  { name: "JavaScript", weight: 95, color: "text-yellow-500" },
  { name: "Next.js", weight: 75, color: "text-gray-800 dark:text-gray-200" },
  { name: "MongoDB", weight: 70, color: "text-green-600" },
  { name: "PostgreSQL", weight: 65, color: "text-blue-700" },
  { name: "Tailwind CSS", weight: 80, color: "text-teal-500" },
  { name: "Firebase", weight: 60, color: "text-orange-500" },
  { name: "Docker", weight: 50, color: "text-blue-400" },
  { name: "AWS", weight: 45, color: "text-orange-600" },
  { name: "Git", weight: 90, color: "text-red-500" },
  { name: "Python", weight: 55, color: "text-blue-500" }
]

export function TechStackCloud() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section className="py-20 px-4 bg-muted/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack Cloud</h2>
          <p className="text-muted-foreground">
            Interactive visualization of my technical expertise (hover to explore)
          </p>
        </div>
        
        <Card className="p-8 md:p-12">
          <div className="flex flex-wrap justify-center items-center gap-4 min-h-[300px]">
            {technologies.map((tech) => {
              const fontSize = Math.max(12, tech.weight / 5)
              const isHovered = hoveredTech === tech.name
              
              return (
                <span
                  key={tech.name}
                  className={`
                    font-semibold cursor-pointer transition-all duration-300 select-none
                    ${tech.color}
                    ${isHovered ? 'scale-125 drop-shadow-lg' : 'hover:scale-110'}
                  `}
                  style={{ 
                    fontSize: `${fontSize}px`,
                    opacity: hoveredTech && !isHovered ? 0.5 : 1
                  }}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  {tech.name}
                </span>
              )
            })}
          </div>
          
          {hoveredTech && (
            <div className="text-center mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{hoveredTech}</span> - 
                Proficiency: {technologies.find(t => t.name === hoveredTech)?.weight}%
              </p>
            </div>
          )}
        </Card>
      </div>
    </section>
  )
}