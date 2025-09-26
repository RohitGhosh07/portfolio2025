"use client"

import { Card } from "@/components/ui/card"
import { GraduationCap, CalendarDays } from "lucide-react"

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Meghnad Saha Institute of Technology",
    period: "2018 - 2022",
    gpa: "9.2 / 10.0",
    location: "Kolkata, India"
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Khalsa High School",
    period: "2016 - 2018",
    gpa: "85%",
    location: "Kolkata, India"
  },
  {
    degree: "Secondary (10th)",
    institution: "Abhinav Bharti High School", 
    period: "2014 - 2016",
    gpa: "90%",
    location: "Kolkata, India"
  }
]

export function EducationSection() {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Education</h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-grow space-y-2">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-lg text-primary font-medium">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.location}</p>
                </div>
                
                <div className="text-right space-y-1">
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <CalendarDays className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="text-lg font-semibold text-primary">{edu.gpa}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}