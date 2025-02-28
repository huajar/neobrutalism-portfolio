// import { ContactForm } from "./contact-form"
import { Experience } from "@/components/home/experience";
import { Hero } from "@/components/home/hero";
// import { Navigation } from "@/components/home/navigation"
import { Projects } from "@/components/home/projects";
import  Skills  from "@/components/home/skills";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Portfolio() {
  return (
    <MaxWidthWrapper className="mb-14 space-y-32">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
    </MaxWidthWrapper>
  );
}
