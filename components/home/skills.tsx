"use client"
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Layers,
  Server,
  Braces,
  GitBranch,
  Palette,
} from "lucide-react";
import { Button } from "../ui/button";

import { useTranslations } from "@/hooks/useTranslations";

export default function Skills() {
  const t = useTranslations("skills");
  const skills = [
    {
      category: "Frontend",
      icon: <Code2 className="h-5 w-5" />,
      technologies: ["Next.js", "HTML", "CSS", "Tailwind CSS"],
      color: "bg-blue-400",
    },
    {
      category: "Backend",
      icon: <Server className="h-5 w-5" />,
      technologies: ["Nodejs", "Django", "Prisma"],
      color: "bg-green-400",
    },
    {
      category: "Database",
      icon: <Database className="h-5 w-5" />,
      technologies: ["MongoDB", "PostgreSQL", "Supabase"],
      color: "bg-yellow-400",
    },
    {
      category: "DevOps",
      icon: <GitBranch className="h-5 w-5" />,
      technologies: ["Docker", "Git", "Github Actions", "Gitlab CI/CD"],
      color: "bg-purple-400",
    },
    {
      category: t("Languages"),
      icon: <Braces className="h-5 w-5" />,
      technologies: ["JavaScript", "TypeScript", "Python"],
      color: "bg-red-400",
    },
    {
      category: "UI/UX",
      icon: <Palette className="h-5 w-5" />,
      technologies: ["Figma"],
      color: "bg-indigo-400",
    },
    {
      category: t("Architecture"),
      icon: <Layers className="h-5 w-5" />,
      technologies: ["REST API", "WebSockets"],
      color: "bg-teal-400",
    },
  ];

  return (
    <div className="w-full min-h-screen p-4 md:p-8 flex flex-col items-center justify-center" id="skills">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-4">
          <Badge
            variant="neutral"
            className="text-base font-medium justify-center items-center py-0 !pb-1 [box-shadow:4px_4px_0px_#000] border-black border-4"
          >
            {t("badge")}
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl [text-shadow:2px_2px_0px_#FD9745]">
            {t("title")}
          </h2>
          <p className="md:text-lg font-base max-w-[600px]">
            {t("description")}
          </p>
        </div>
      </div>
      <div className="not-prose flex w-full items-center justify-center z-[15] relative mb-5 bg-white bg-[radial-gradient(#80808080_1px,transparent_1px)] px-4 2sm:py-4 sm:py-10 md:p-12 md:!pb-8 shadow-light [background-size:16px_16px] m750:px-5 m750:py-10 border-4 border-border shadow-shadow">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 py-4 sm:py-0 md:gap-5">
            {skills.map((skill, index) => (
              <div key={index} className="md:p-5 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Button
                    variant="reverse"
                    className={`p-2 ${skill.color} cursor-default border-4`}
                  >
                    {skill.icon}
                    <h3 className="font-semibold text-lg ">{skill.category}</h3>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="neutral">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
