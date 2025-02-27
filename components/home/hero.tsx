import { Github, Globe, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";

export function Hero() {
  return (
    <section className="py-12 md:py-24" id="about">
      <div className="container mx-auto px-4 md:px-6">
        {/* Changed to row on md breakpoint, with better spacing */}
        <div className="flex flex-col lg:flex-row items-center justify-between md:gap-10 lg:gap-28">
          {/* Portrait container */}
          <div className="relative w-[270px] h-[270px] sm:w-[400px] sm:h-[400px] shrink-0">
            {/* Frame lines - extended beyond corners */}
            <div className="absolute top-11 left-[-1rem] right-[-1rem] h-[1px] bg-gradient-to-r from-transparent via-black to-transparent" />
            <div className="absolute bottom-11 left-[-1rem] right-[-1rem] h-[1px] bg-gradient-to-r from-transparent via-black to-transparent" />
            <div className="absolute left-11 top-[-1rem] bottom-[-1rem] w-[1px] bg-gradient-to-t from-transparent via-black to-transparent" />
            <div className="absolute right-11 top-[-1rem] bottom-[-1rem] w-[1px] bg-gradient-to-t from-transparent via-black to-transparent" />

            {/* Image */}
            <div className="absolute inset-12 rounded-lg">
              <Image
                src="/image-preview.svg"
                alt="Profile picture"
                fill
                className="object-cover rounded-3xl"
                priority
                sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, 400px"
              />
            </div>
          </div>

          {/* Text content - adjusted spacing for both layouts */}
          <div className="flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left mt-8 md:mt-0">
            <div className="space-y-4">
              <Badge className="text-base font-medium justify-center items-center">
                Rodrigo Hujamaita
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Full-Stack
                <br />
                Developer
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Globe className="h-4 w-4" />
                <span className="font-semibold">Buenos Aires - Entre Ríos, Argentina</span>
              </div>
              <p className="md:text-xl max-w-[600px]">
                A Systems Engineering student passionate about Full Stack
                Development. I love experimenting with new technologies and
                growing as a developer.
              </p>
            </div>
            <div className="flex lg:justify-center lg:items-center space-x-4">
              <Link href="https://github.com" target="_blank">
                <Button size="icon">
                  <Image
                    src="/github.svg"
                    width={24}
                    height={24}
                    alt="Github"
                  />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <Button size="icon">
                  <Image
                    src="/inBug-Black.png"
                    width={24}
                    height={24}
                    alt="Github"
                  />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:rhuajamaita@gmail.com">
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
  );
}
