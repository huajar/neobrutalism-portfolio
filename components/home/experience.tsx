import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Corp",
      period: "2021 - Present",
      description:
        "Led development of multiple high-impact projects, mentored junior developers, and implemented best practices.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Inc",
      period: "2019 - 2021",
      description:
        "Developed and maintained various web applications, collaborated with cross-functional teams, and improved application performance.",
    },
    {
      title: "Frontend Developer",
      company: "Web Agency",
      period: "2017 - 2019",
      description:
        "Created responsive web interfaces, implemented UI/UX designs, and worked with modern JavaScript frameworks.",
    },
  ]

  return (
    <section className="py-12" id="experience">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <Card key={exp.title}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.company}</CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

