"use client"

import { FloatingNav } from "@/components/floating-nav"
import { HeroCard } from "@/components/hero-card"
import { ExperienceCards } from "@/components/experience-cards"
import { ProjectsCards } from "@/components/projects-cards"
import { SkillsCard } from "@/components/skills-card"
import { BlogCards } from "@/components/blog-cards"
import { ContactCard } from "@/components/contact-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-24">
      <FloatingNav />
      <HeroCard />
      <ExperienceCards />
      <ProjectsCards />
      <SkillsCard />
      <BlogCards />
      <ContactCard />
    </main>
  )
}