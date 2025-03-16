import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Alkitab",
      description:
        "Web App to connect kyrkystanies to the christianism, i do featuareas and mantenimence, developed by Hope Media Asia Central",
      image: "/AlKitab.webp",
      technologies: ["Django", "PostgreSQL", "HTML5", "CSS"],
      deployLink: "",
      demoLink: "https://friendslanguage.club/",
      repoLink: "",
      completedDate: "",
    },
    {
      title: "ColporMaps",
      description:
        "An web application that allows managers to track members status, territories, and placements for door-to-door sales teams.",
      image: "/colporteur-maps.webp",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
      deployLink: "",
      demoLink: "https://example.com/demo",
      repoLink: "",
      completedDate: "In development",
    },
    {
      title: "Ediciones Lucentia",
      description:
        "A landing page for a editorial that sells books, e-books and audiobooks.",
      image: "/ediciones-lucentia.webp",
      technologies: ["WordPress", "Elementor"],
      deployLink: "https://edicioneslucentia.com/",
      demoLink: "",
      repoLink: "",
      completedDate: "October 2024",
    },
    {
      title: "Adventist On The Map",
      description:
        "Is a platform that connects Adventist freelancers with clients who need their services.",
      image: "/AOTM.webp",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
      deployLink: "https://adventistonthemap.com/",
      demoLink: "",
      repoLink: "",
      completedDate: "August 2024",
    },
    {
      title: "Profeteia",
      description:
        "A e-commerce and personal blog web for a client who sells virtual products.",
      image: "/Profeteia.webp",
      technologies: ["WordPress", "WooCommerce", "Elementor"],
      deployLink: "https://profeteia.com/",
      demoLink: "",
      repoLink: "",
      completedDate: "Junary 2024",
    },
    {
      title: "The Friends Language Club",
      description:
        "A platform that connects language learners with native speakers for practice and cultural exchange.",
      image: "/friendslanguage.webp",
      technologies: [
        "Next.js",
        "MongoDB",
        "Prisma",
        "Tailwind CSS",
        "TypeScript",
      ],
      deployLink: "",
      demoLink: "https://friendslanguage.club/",
      repoLink: "",
      completedDate: "December 2023",
    },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <Badge className="text-base font-medium justify-center items-center py-0 !pb-1 bg-black text-white dark:bg-bw">
              involved in
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl [text-shadow:4px_4px_0px_#FD9745] dark:[text-shadow:6px_6px_0px_#000000]">
            My Projects
            </h2>
            <p className="md:text-lg max-w-[600px]">
              Check out some of my recent work. I am involved with development
              and maintenance proyects for clients and organizations.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-bw flex flex-col border-8"
            >
              <Image
                src={project.image}
                alt={project.title}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={500}
                height={300}
                className="w-full h-full object-fit object-center border-b-[1px]"
              />
              <CardContent className="p-4 sm:p-6 flex-grow">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-3">
                  <h3 className="font-semibold text-xl sm:text-2xl mb-1 sm:mb-0 dark:text-white">
                    {project.title}
                  </h3>
                  {project.completedDate && (
                    <div className="flex items-center text-sm dark:text-gray-300">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.completedDate}
                    </div>
                  )}
                </div>
                <p className="text-sm sm:text-base mb-4 dark:text-gray-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      variant="neutral"
                      key={techIndex}
                      className="text-xs sm:text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 sm:p-6 pt-0 flex flex-col sm:flex-row gap-3">
                {project.deployLink && (
                  <Button
                    size="sm"
                    className="w-full sm:w-auto sm:flex-1 text-xs sm:text-sm dark:text-black"
                    asChild
                  >
                    <Link
                      href={project.deployLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Deployed Link
                    </Link>
                  </Button>
                )}
                {project.demoLink && (
                  <Button
                    size="sm"
                    className="w-full sm:w-auto sm:flex-1 text-xs sm:text-sm dark:text-black"
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
                )}
                {project.repoLink && (
                  <Button
                    size="sm"
                    className="w-full sm:w-auto sm:flex-1 text-xs sm:text-sm dark:text-black"
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
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
