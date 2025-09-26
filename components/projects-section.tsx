"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"

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

export function ProjectsSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Replace 'rohitghosh369' with actual GitHub username
        const response = await fetch('https://api.github.com/users/rohitghosh369/repos?sort=updated&per_page=6')
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`)
        }
        
        const data = await response.json()
        
        // Ensure data is an array before setting repos
        if (Array.isArray(data)) {
          setRepos(data)
        } else {
          throw new Error('GitHub API returned non-array data')
        }
      } catch (error) {
        console.error('Error fetching repos:', error)
        // Fallback data for demo
        setRepos([
          {
            id: 1,
            name: "sports-carnival-app",
            description: "Flutter mobile application for managing sports events and tournaments",
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
            description: "Real-time golf scoring system with leaderboards and tournament management",
            html_url: "https://github.com/rohitghosh369/golf-scoring-app",
            homepage: "",
            stargazers_count: 8,
            forks_count: 2,
            language: "TypeScript",
            topics: ["react", "typescript", "golf", "scoring", "realtime"],
            updated_at: "2024-01-05"
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  if (loading) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="p-6 animate-pulse">
                <div className="space-y-4">
                  <div className="h-6 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <Card key={repo.id} className="p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-3">
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
                    <Badge variant="outline" className="text-xs">
                      {repo.language}
                    </Badge>
                  )}
                </div>

                <div className="flex flex-wrap gap-1">
                  {repo.topics?.slice(0, 3).map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs rounded-full">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {repo.homepage && (
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}