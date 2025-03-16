"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BriefcaseIcon, CodeIcon, GlobeIcon } from "lucide-react";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("all");

  const experiences = [
    {
      id: 1,
      title: "Jr. Full Stack Developer",
      company: "Media Center Asia Central",
      period: "Jul 2024 - Present",
      type: "fullstack",
      description:
        "Maintained and enhanced a legacy Django project, improving performance, security, and authentication workflows.",
      achievements: [
        "Migrated user authentication from SQLite to PostgreSQL, improving security and scalability",
        "Implemented Django-Allauth for seamless third-party authentication integration",
      ],
      technologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "HTML",
        "CSS",
        "Nginx",
        "Docker",
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Freelance",
      period: "Jan 2024 - Dec 2024",
      type: "fullstack",
      description:
        "Worked with clients from different parts of the world, building and maintaining web applications tailored to their needs. Focused on creating efficient, secure, and user-friendly solutions while adapting to different technologies and workflows. Communicated directly with clients to understand their goals, develop new features, and provide ongoing support.",
      achievements: [
        "Delivered custom web solutions for clients across different regions, adapting to unique business needs",
        "Built and optimized WordPress and WooCommerce sites to improve client sales and engagement",
        "Developed and maintained Next.js applications, ensuring scalability and performance",
        "Enhanced client websites with Elementor, improving design flexibility and user experience",
        "Implemented secure authentication and data storage solutions with Supabase for client projects",
        "Provided continuous support and feature updates, ensuring long-term client satisfaction",
      ],
      technologies: [
        "Next.js",
        "React",
        "Supabase",
        "WordPress",
        "WooCommerce",
        "Elementor",
        "Tailwind CSS",
        "TypeScript",
      ],
    },
    {
      id: 3,
      title: "Volunteer Developer",
      company: "Hope Media Asia Central",
      period: "Apr 2023 - Apr 2024",
      type: "frontend",
      description:
        "Designed and implemented user interfaces for e-commerce applications. Focused on accessibility and performance optimization.",
      achievements: [
        "Improved Lighthouse score from 65 to 95 through performance optimizations",
        "Reduced bundle size by 40% through code splitting and lazy loading",
        "Implemented A/B testing framework increasing conversion rates by 25%",
      ],
      technologies: ["React", "Redux", "SCSS", "Webpack", "Jest", "Cypress"],
    },
  ];

  const filteredExperiences =
    activeTab === "all"
      ? experiences
      : experiences.filter((exp) => exp.type === activeTab);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        {/* <div className="space-y-2">
          <Badge className="text-base font-medium justify-center items-center py-0 !pb-1 bg-black text-white dark:bg-bw">
            career path
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl [text-shadow:4px_4px_0px_#FD9745] dark:[text-shadow:6px_6px_0px_#000000]">
            Professional Experience
          </h2>
          <p className="md:text-lg max-w-[600px]">
            A journey through my professional career, showcasing projects and
            technologies I've worked with to deliver exceptional digital
            experiences.
          </p>
        </div> */}

        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <Badge className="text-base font-medium justify-center items-center py-0 !pb-1 bg-black text-white dark:bg-bw">
              career path
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl [text-shadow:4px_4px_0px_#FD9745] dark:[text-shadow:6px_6px_0px_#000000]">
              My Experience
            </h2>
            <p className="md:text-lg max-w-[600px]">
              A glimpse into my professional journey, highlighting the projects
              and technologies that shape my approach to creating digital
              experiences.
            </p>
          </div>
        </div>
        <Tabs
          defaultValue="all"
          className="w-full max-w-4xl mx-auto"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 w-full max-w-md">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <GlobeIcon className="h-4 w-4" />
                <span className="hidden sm:inline">All</span>
              </TabsTrigger>
              <TabsTrigger
                value="fullstack"
                className="flex items-center gap-2"
              >
                <CodeIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Full Stack</span>
              </TabsTrigger>
              <TabsTrigger value="frontend" className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 18L22 12L16 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 6L2 12L8 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="hidden sm:inline">Frontend</span>
              </TabsTrigger>
              <TabsTrigger value="backend" className="flex items-center gap-2">
                <BriefcaseIcon className="h-4 w-4" />
                <span className="hidden sm:inline">Backend</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0 space-y-8">
            {filteredExperiences.map((exp, index) => (
              <div
                key={exp.id}
                className="transition-all duration-200 hover:translate-y-[-2px]"
              >
                <Card className="overflow-hidden border-l-4 border-primary">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-base font-medium text-primary">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1 list-disc list-inside text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="neutral"
                          className="font-normal"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
