import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Layers,
  Server,
  Smartphone,
  Braces,
  GitBranch,
  Palette,
} from "lucide-react";
import { Button } from "../ui/button";

//   const skills = [
//     {
//       category: "Frontend",
//       icon: <Code2 className="h-5 w-5" />,
//       technologies: ["React", "Next.js", "Vue.js", "Angular", "HTML5", "CSS3"],
//       color: "bg-blue-500",
//     },
//     {
//       category: "Backend",
//       icon: <Server className="h-5 w-5" />,
//       technologies: ["Node.js", "Express", "Django", "Flask", "Spring Boot"],
//       color: "bg-green-500",
//     },
//     {
//       category: "Database",
//       icon: <Database className="h-5 w-5" />,
//       technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
//       color: "bg-yellow-500",
//     },
//     {
//       category: "DevOps",
//       icon: <GitBranch className="h-5 w-5" />,
//       technologies: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"],
//       color: "bg-purple-500",
//     },
//     {
//       category: "Mobile",
//       icon: <Smartphone className="h-5 w-5" />,
//       technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
//       color: "bg-pink-500",
//     },
//     {
//       category: "Languages",
//       icon: <Braces className="h-5 w-5" />,
//       technologies: ["JavaScript", "TypeScript", "Python", "Java", "C#", "Go"],
//       color: "bg-red-500",
//     },
//     {
//       category: "UI/UX",
//       icon: <Palette className="h-5 w-5" />,
//       technologies: ["Figma", "Adobe XD", "Sketch", "Tailwind CSS", "SASS"],
//       color: "bg-indigo-500",
//     },
//     {
//       category: "Architecture",
//       icon: <Layers className="h-5 w-5" />,
//       technologies: ["Microservices", "REST API", "GraphQL", "WebSockets"],
//       color: "bg-teal-500",
//     },
//   ]


export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: <Code2 className="h-5 w-5" />,
      technologies: ["React", "Next.js", "HTML5", "CSS3"],
      color: "bg-blue-500",
    },
    {
      category: "Backend",
      icon: <Server className="h-5 w-5" />,
      technologies: ["Node.js", "Express", "Django"],
      color: "bg-green-500",
    },
    {
      category: "Database",
      icon: <Database className="h-5 w-5" />,
      technologies: ["MongoDB", "PostgreSQL", "Supabase"],
      color: "bg-yellow-500",
    },
    {
      category: "DevOps",
      icon: <GitBranch className="h-5 w-5" />,
      technologies: ["Docker", "Git"],
      color: "bg-purple-500",
    },
    {
      category: "Mobile",
      icon: <Smartphone className="h-5 w-5" />,
      technologies: ["React Native", "Kotlin"],
      color: "bg-pink-500",
    },
    {
      category: "Languages",
      icon: <Braces className="h-5 w-5" />,
      technologies: ["JavaScript", "TypeScript", "Python", "C#"],
      color: "bg-red-500",
    },
    {
      category: "UI/UX",
      icon: <Palette className="h-5 w-5" />,
      technologies: ["Figma", "Tailwind CSS"],
      color: "bg-indigo-500",
    },
    {
      category: "Architecture",
      icon: <Layers className="h-5 w-5" />,
      technologies: ["REST API", "WebSockets"],
      color: "bg-teal-500",
    },
  ];

  return (
    <div className="w-full min-h-screen p-4 md:p-8 flex flex-col items-center justify-center">
      <div className="not-prose flex w-full items-center justify-center z-[15] relative mb-5 dark:border-darkBorder bg-white dark:bg-secondaryBlack bg-[radial-gradient(#80808080_1px,transparent_1px)] p-4 md:p-12 md:!pb-8 shadow-light dark:shadow-dark [background-size:16px_16px] m750:px-5 m750:py-10 border-2 border-border shadow-shadow">
        <div>
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              My Tech Stack
            </h1>
            <p className="max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I
              specialize in, showcasing my technical expertise and development
              capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-5">
            {skills.map((skill, index) => (
              <div key={index} className="px-2 md:p-5 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Button className={`p-2 ${skill.color}`}>
                    {skill.icon}
                  <h3 className="font-semibold text-lg dark:text-white">
                    {skill.category}
                  </h3>
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
              // <Card
              //   key={index}
              //   className="overflow-hidden bg-slate-500/70 rounded-none"
              // >
              //   <CardContent className="p-6">
              //     <div className="flex items-center gap-3 mb-4">
              //       <div className={`p-2 rounded-lg ${skill.color}`}>{skill.icon}</div>
              //       <h3 className="font-semibold text-white text-lg">{skill.category}</h3>
              //     </div>
              //     <div className="flex flex-wrap gap-2">
              //       {skill.technologies.map((tech, techIndex) => (
              //         <Badge
              //           key={techIndex}
              //           variant='neutral'
              //         >
              //           {tech}
              //         </Badge>
              //       ))}
              //     </div>
              //   </CardContent>
              // </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
