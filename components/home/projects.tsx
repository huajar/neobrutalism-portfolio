import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, payment processing, and user authentication.",
      image: "/image-preview.svg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      demoLink: "https://example.com/demo",
      repoLink: "https://github.com/yourusername/ecommerce",
      completedDate: "March 2023",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, task assignment, and progress tracking features.",
      image: "/image-preview.svg",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "React Query"],
      demoLink: "https://example.com/taskapp",
      repoLink: "https://github.com/yourusername/taskapp",
      completedDate: "August 2023",
    },
    {
      title: "AI Content Generator",
      description:
        "An AI-powered application that generates marketing content, blog posts, and social media captions based on user prompts.",
      image: "/image-preview.svg",
      technologies: ["Python", "OpenAI API", "Flask", "React", "PostgreSQL"],
      demoLink: "https://example.com/ai-generator",
      repoLink: "https://github.com/yourusername/ai-generator",
      completedDate: "January 2024",
    },
    {
      title: "Fitness Tracking Dashboard",
      description:
        "A comprehensive fitness tracking application with workout plans, progress visualization, and nutrition monitoring.",
      image: "/image-preview.svg",
      technologies: ["Vue.js", "Express", "MongoDB", "Chart.js", "Socket.io"],
      demoLink: "https://example.com/fitness",
      repoLink: "https://github.com/yourusername/fitness-tracker",
      completedDate: "November 2023",
    },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg font-semibold sm:text-xl md:text-2xl sm:mt-4 md:mt-5 md:max-w-3xl">
            Showcasing my best work and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-bw flex flex-col">
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-4 sm:p-6 flex-grow">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-3">
                  <h3 className="font-semibold text-xl sm:text-2xl mb-1 sm:mb-0 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm dark:text-gray-300">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.completedDate}
                  </div>
                </div>
                <p className="text-sm sm:text-base mb-4 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} className="text-xs sm:text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 sm:p-6 pt-0 flex flex-col sm:flex-row gap-3">
                <Button
                  size="sm"
                  className="w-full sm:w-auto sm:flex-1 text-xs sm:text-sm"
                  asChild
                >
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
                <Button
                  size="sm"
                  className="w-full sm:w-auto sm:flex-1 text-xs sm:text-sm"
                  asChild
                >
                  <Link
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
