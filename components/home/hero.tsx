import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-12 md:py-24" id="about">
      <div className="container px-4 md:px-6">
        {/* Changed to row on md breakpoint, with better spacing */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-12 lg:gap-16">
          {/* Portrait container */}
          <div className="relative w-[400px] h-[400px] mx-auto md:mx-0 shrink-0">
            {/* Frame lines - extended beyond corners */}
            <div className="absolute top-0 left-[-1rem] right-[-1rem] h-[3px] bg-black" />
            <div className="absolute bottom-0 left-[-1rem] right-[-1rem] h-[3px] bg-black" />
            <div className="absolute left-0 top-[-1rem] bottom-[-1rem] w-[3px] bg-black" />
            <div className="absolute right-0 top-[-1rem] bottom-[-1rem] w-[3px] bg-black" />

            {/* Image */}
            <div className="absolute inset-6">
              <Image
                src="/image-preview.svg"
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text content - adjusted spacing for both layouts */}
          <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left mt-8 md:mt-0">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I'm Rodrigo
              </h1>
              <p className="text-gray-500 md:text-xl dark:text-gray-400 max-w-[600px]">
                A Systems Engineering student passionate about Full Stack Development. I love experimenting with new technologies and growing as a developer.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href="https://github.com" target="_blank">
                <Button size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Button size="icon">
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
      </div>
    </section>
  )
}

