"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, ExternalLink } from "lucide-react"

const blogPosts = [
  {
    title: "Building Scalable Flutter Applications",
    excerpt: "Learn best practices for building maintainable and scalable Flutter applications with proper state management and architecture patterns.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Flutter", "Mobile Development", "Architecture"],
    link: "https://medium.com/@rohitghosh/building-scalable-flutter-applications"
  },
  {
    title: "Modern React Patterns Every Developer Should Know",
    excerpt: "Explore advanced React patterns including custom hooks, compound components, and render props to write cleaner, more reusable code.",
    date: "2024-01-08", 
    readTime: "10 min read",
    tags: ["React", "JavaScript", "Frontend"],
    link: "https://dev.to/rohitghosh/modern-react-patterns"
  },
  {
    title: "Full-Stack Development with Next.js and PostgreSQL",
    excerpt: "A comprehensive guide to building full-stack applications using Next.js API routes, Prisma ORM, and PostgreSQL database.",
    date: "2024-01-01",
    readTime: "12 min read", 
    tags: ["Next.js", "PostgreSQL", "Full Stack"],
    link: "https://hashnode.com/post/rohitghosh-fullstack-nextjs"
  }
]

export function BlogSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog & Articles</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sharing knowledge and insights about software development, best practices, and emerging technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    Read Article
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}