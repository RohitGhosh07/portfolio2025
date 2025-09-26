"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, GitFork, Loader2 } from "lucide-react"

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  stargazers_count: number
  forks_count: number
  language: string
  topics: string[]
  updated_at: string
}

const fallbackRepos: GitHubRepo[] = [
  {
    id: 1,
    name: "sports-carnival-app",
    description: "Flutter mobile application for managing sports events and tournaments with real-time updates",
    html_url: "https://github.com/rohitghosh369/sports-carnival-app",
    homepage: "",
    stargazers_count: 15,
    forks_count: 3,
    language: "Dart",
    topics: ["flutter", "mobile", "sports", "event-management"],
    updated_at: "2024-01-15"
  },
  {
    id: 2,
    name: "club-erp-system",
    description: "Complete ERP solution for club management with member tracking and event organization",
    html_url: "https://github.com/rohitghosh369/club-erp-system",
    homepage: "https://club-erp-demo.vercel.app",
    stargazers_count: 22,
    forks_count: 7,
    language: "JavaScript",
    topics: ["react", "nodejs", "mongodb", "erp", "full-stack"],
    updated_at: "2024-01-10"
  },
  {
    id: 3,
    name: "golf-scoring-app",
    description: "Real-time golf scoring system with leaderboards and tournament management features",
    html_url: "https://github.com/rohitghosh369/golf-scoring-app",
    homepage: "",
    stargazers_count: 8,
    forks_count: 2,
    language: "TypeScript",
    topics: ["react", "typescript", "golf", "scoring", "realtime"],
    updated_at: "2024-01-05"
  },
  {
    id: 4,
    name: "portfolio-website",
    description: "Modern portfolio website built with Next.js and Tailwind CSS",
    html_url: "https://github.com/rohitghosh369/portfolio-website",
    homepage: "https://rohitghosh.dev",
    stargazers_count: 12,
    forks_count: 4,
    language: "TypeScript",
    topics: ["nextjs", "tailwindcss", "portfolio", "react"],
    updated_at: "2024-01-20"
  },
  {
    id: 5,
    name: "task-management-api",
    description: "RESTful API for task management with authentication and real-time notifications",
    html_url: "https://github.com/rohitghosh369/task-management-api",
    homepage: "",
    stargazers_count: 6,
    forks_count: 1,
    language: "JavaScript",
    topics: ["nodejs", "express", "mongodb", "api", "authentication"],
    updated_at: "2024-01-12"
  },
  {
    id: 6,
    name: "weather-app-flutter",
    description: "Beautiful weather app built with Flutter featuring location-based forecasts",
    html_url: "https://github.com/rohitghosh369/weather-app-flutter",
    homepage: "",
    stargazers_count: 9,
    forks_count: 2,
    language: "Dart",
    topics: ["flutter", "weather", "mobile", "api"],
    updated_at: "2024-01-08"
  }
]

export function ProjectsCards() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/rohitghosh369/repos?sort=updated&per_page=6')
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }
        
        const data = await response.json()
        
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data)
        } else {
          setRepos(fallbackRepos)
        }
      } catch (error) {
        console.error('Error fetching repos:', error)
        setRepos(fallbackRepos)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  if (loading) {
    return (
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground text-lg">Showcasing my latest work and contributions</p>
          </div>
          <div className="flex justify-center">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg">Showcasing my latest work and contributions</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="p-6 h-full hover:shadow-2xl transition-all duration-500 border-2 border-primary/10 bg-gradient-to-br from-background to-primary/5 group">
                <div className="space-y-4 h-full flex flex-col">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-1">
                      {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                      {repo.description || "No description available"}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{repo.forks_count}</span>
                    </div>
                    {repo.language && (
                      <Badge variant="outline" className="text-xs rounded-full">
                        {repo.language}
                      </Badge>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {repo.topics?.slice(0, 3).map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4 mt-auto">
                    <Button variant="outline" size="sm" className="flex-1 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {repo.homepage && (
                      <Button variant="outline" size="sm" className="flex-1 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                        <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
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