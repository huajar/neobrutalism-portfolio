import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-12 md:py-24" id="about">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Hi, I'm Rodrigo
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Full Stack Developer specialized in building exceptional digital experiences. I love creating elegant
              solutions to complex problems.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="https://github.com" target="_blank">
              <Button size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Button  size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:john@example.com">
              <Button size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

