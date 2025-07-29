"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "@/hooks/useTranslations";

export default function FeaturedProjects() {
  const t = useTranslations("projects");
  const projects = [
    {
      title: t("0.title"),
      description: t("0.description"),
      image: "/AlKitab.webp",
      technologies: ["Django", "PostgreSQL", "HTML5", "CSS"],
      deployLink: "",
      demoLink: "https://alkitab.media/",
      repoLink: "",
      completedDate: t("0.completedDate"),
    },
    {
      title: t("1.title"),
      description: t("1.description"),
      image: "/ediciones-lucentia.webp",
      technologies: ["WordPress"],
      deployLink: "https://edicioneslucentia.com/",
      demoLink: "",
      repoLink: "",
      completedDate: t("1.completedDate"),
    },
    {
      title: t("2.title"),
      description: t("2.description"),
      image: "/AOTM.webp",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
      deployLink: "https://adventistonthemap.com/",
      demoLink: "",
      repoLink: "",
      completedDate: t("2.completedDate"),
    },
    {
      title: t("3.title"),
      description: t("3.description"),
      image: "/Profeteia.webp",
      technologies: ["WordPress", "WooCommerce"],
      deployLink: "https://profeteia.com/",
      demoLink: "",
      repoLink: "",
      completedDate: t("3.completedDate"),
    },
    {
      title: t("4.title"),
      description: t("4.description"),
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
      completedDate: t("4.completedDate"),
    },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <Badge variant='neutral' className="text-base font-medium justify-center items-center py-0 !pb-1 dark:bg-bw [box-shadow:4px_4px_0px_0px_#000] border-black border-4">
               Showcases of
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl [text-shadow:2px_2px_0px_#FD9745] dark:[text-shadow:6px_6px_0px_#000000]">
              My Projects
            </h2>
            <p className="md:text-lg max-w-[600px]">
              Explore a selection of my work, where I&#39;ve gained
              practical experience developing and contributing to web solutions
              for clients and organizations.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-bw flex flex-col"
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
                {(() => {
                  const link = project.deployLink || project.demoLink;
                  if (link) {
                    return (
                      <Button
                        size="sm"
                        className="w-full sm:w-auto sm:flex-1 text-xs sm:text-sm dark:text-black"
                        asChild
                      >
                        <Link
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit
                        </Link>
                      </Button>
                    );
                  }
                  return null;
                })()}
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
