// import { ContactForm } from "./contact-form"
import { Experience } from "@/components/home/experience"
import { Hero } from "@/components/home/hero"
// import { Navigation } from "@/components/home/navigation"
import { Projects } from "@/components/home/projects"
import { Skills } from "@/components/home/skills"

export default function Portfolio() {
  return (
      <main className="px-4 py-8 bg-bg">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        {/* <ContactForm /> */}
      </main>
  )
}

