"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Database, Wrench, Globe, Server } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Dart", "Python", "Java", "HTML/CSS"],
    color: "from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "Flutter", "Tailwind CSS", "Material UI", "Framer Motion"],
    color: "from-purple-500/10 to-pink-500/10"
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Microservices"],
    color: "from-green-500/10 to-emerald-500/10"
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["Flutter", "React Native", "Android Studio", "iOS Development"],
    color: "from-orange-500/10 to-red-500/10"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "MySQL", "Redis"],
    color: "from-indigo-500/10 to-blue-500/10"
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: ["Git", "Docker", "AWS", "Vercel", "Figma", "Postman"],
    color: "from-yellow-500/10 to-orange-500/10"
  }
]

export function SkillsCard() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg">My technical expertise across different domains</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className={`p-6 h-full hover:shadow-2xl transition-all duration-500 border-2 border-primary/10 bg-gradient-to-br ${category.color} group`}>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * skillIndex }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="w-full justify-center rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default py-2"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}