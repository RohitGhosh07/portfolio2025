"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, ExternalLink, BookOpen } from "lucide-react"

const blogPosts = [
  {
    title: "Building Scalable Flutter Applications",
    excerpt: "Learn best practices for building maintainable and scalable Flutter applications with proper state management and architecture patterns.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["Flutter", "Mobile Development", "Architecture"],
    link: "https://medium.com/@rohitghosh/building-scalable-flutter-applications",
    color: "from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "Modern React Patterns Every Developer Should Know",
    excerpt: "Explore advanced React patterns including custom hooks, compound components, and render props to write cleaner, more reusable code.",
    date: "2024-01-08", 
    readTime: "10 min read",
    tags: ["React", "JavaScript", "Frontend"],
    link: "https://dev.to/rohitghosh/modern-react-patterns",
    color: "from-purple-500/10 to-pink-500/10"
  },
  {
    title: "Full-Stack Development with Next.js and PostgreSQL",
    excerpt: "A comprehensive guide to building full-stack applications using Next.js API routes, Prisma ORM, and PostgreSQL database.",
    date: "2024-01-01",
    readTime: "12 min read", 
    tags: ["Next.js", "PostgreSQL", "Full Stack"],
    link: "https://hashnode.com/post/rohitghosh-fullstack-nextjs",
    color: "from-green-500/10 to-emerald-500/10"
  },
  {
    title: "State Management in Flutter: A Complete Guide",
    excerpt: "Deep dive into different state management solutions in Flutter including Provider, Riverpod, and Bloc pattern with practical examples.",
    date: "2023-12-20",
    readTime: "15 min read",
    tags: ["Flutter", "State Management", "Dart"],
    link: "https://medium.com/@rohitghosh/flutter-state-management-guide",
    color: "from-orange-500/10 to-red-500/10"
  },
  {
    title: "API Design Best Practices for Node.js",
    excerpt: "Essential guidelines for designing robust and scalable REST APIs using Node.js and Express.js with proper error handling and validation.",
    date: "2023-12-10",
    readTime: "9 min read",
    tags: ["Node.js", "API Design", "Backend"],
    link: "https://dev.to/rohitghosh/nodejs-api-best-practices",
    color: "from-indigo-500/10 to-blue-500/10"
  },
  {
    title: "Responsive Design with Tailwind CSS",
    excerpt: "Master responsive web design using Tailwind CSS utility classes and create beautiful, mobile-first user interfaces.",
    date: "2023-12-01",
    readTime: "7 min read",
    tags: ["Tailwind CSS", "Responsive Design", "CSS"],
    link: "https://hashnode.com/post/rohitghosh-tailwind-responsive",
    color: "from-yellow-500/10 to-orange-500/10"
  }
]

export function BlogCards() {
  return (
    <section id="blog" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Blog & Articles</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sharing knowledge and insights about software development, best practices, and emerging technologies
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className={`p-6 h-full hover:shadow-2xl transition-all duration-500 border-2 border-primary/10 bg-gradient-to-br ${post.color} group`}>
                <div className="space-y-4 h-full flex flex-col">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2 leading-tight">
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

                  <div className="mt-auto pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" 
                      asChild
                    >
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
                        Read Article
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
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