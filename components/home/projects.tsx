import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js, Stripe, and PostgreSQL",
      image: "/placeholder.svg?height=400&width=600",
      demo: "https://example.com",
      github: "https://github.com",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
    },
    {
      title: "Task Management App",
      description: "Real-time task management application with team collaboration features",
      image: "/placeholder.svg?height=400&width=600",
      demo: "https://example.com",
      github: "https://github.com",
      tags: ["React", "Node.js", "Socket.io"],
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation tool using OpenAI's GPT-3",
      image: "/placeholder.svg?height=400&width=600",
      demo: "https://example.com",
      github: "https://github.com",
      tags: ["Python", "Flask", "OpenAI"],
    },
  ]

  return (
    <section className="py-12" id="projects">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-sm font-medium ring-1 ring-inset ring-gray-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button asChild size="sm">
                  <Link href={project.demo} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={project.github} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

