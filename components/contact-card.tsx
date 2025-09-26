"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, MessageCircle } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "rohitghosh.dev@gmail.com",
    href: "mailto:rohitghosh.dev@gmail.com",
    color: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-XXXXXXXXXX",
    href: "tel:+91XXXXXXXXXX",
    color: "from-green-500/10 to-emerald-500/10"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/rohitghosh369",
    href: "https://github.com/rohitghosh369",
    color: "from-gray-500/10 to-slate-500/10"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/rohitghosh",
    href: "https://linkedin.com/in/rohitghosh",
    color: "from-blue-600/10 to-blue-500/10"
  }
]

const availability = [
  "Remote Work",
  "Hybrid Setup", 
  "Willing to Relocate",
  "Open to Travel",
  "On-Site Available"
]

export function ContactCard() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Let's Connect</h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 border-2 border-primary/10 bg-gradient-to-br from-background to-primary/5">
              <h3 className="text-xl font-bold mb-6 text-center">Get In Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className={`p-4 hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${method.color} border border-primary/10`}>
                        <a 
                          href={method.href}
                          target={method.href.startsWith('http') ? '_blank' : undefined}
                          rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-3 group"
                        >
                          <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-sm text-muted-foreground">{method.label}</p>
                            <p className="text-sm group-hover:text-primary transition-colors">{method.value}</p>
                          </div>
                        </a>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </Card>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 border-2 border-primary/10 bg-gradient-to-br from-background to-primary/5">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold">Based in Kolkata, India</h3>
                </div>
                <p className="text-muted-foreground">
                  Currently located in Kolkata, West Bengal, India (UTC+5:30)
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-8 border-2 border-primary/10 bg-gradient-to-br from-background to-primary/5">
              <h3 className="text-xl font-bold mb-6 text-center">Work Preferences</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {availability.map((type, index) => (
                  <motion.span
                    key={type}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {type}
                  </motion.span>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <Card className="p-8 border-2 border-primary/10 bg-gradient-to-br from-primary/5 to-background">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Ready to Start a Project?</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Whether you need a web application, mobile app, or full-stack solution, I'm here to help bring your ideas to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="rounded-full" asChild>
                    <a href="mailto:rohitghosh.dev@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full" asChild>
                    <a href="https://linkedin.com/in/rohitghosh" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center pt-12 text-sm text-muted-foreground"
        >
          <p>© 2024 Rohit Ghosh. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}