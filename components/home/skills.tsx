import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    Backend: ["Node.js", "Express", "Python", "Django", "PostgreSQL"],
    Tools: ["Git", "Docker", "AWS", "Linux", "CI/CD"],
  }

  return (
    <section className="py-12" id="skills">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">Skills & Technologies</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge key={skill}>
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

