"use client";
import { Globe, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";

import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import { space_Grotesk } from "@/app/fonts";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="py-12 md:py-36" id="about">
      <div className="container mx-auto px-4 lg:pr-0 md:px-12">
        {/* Changed to row on md breakpoint, with better spacing */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 md:gap-10 lg:gap-56">
          {/* Portrait container */}
          <div className="flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rotate-3 bg-main border-8 border-black [box-shadow:12px_12px_0px_0px_#000]">
              <Image
                src="/me.webp"
                width={300}
                height={300}
                alt="Profile Image"
                className="absolute top-4 left-4 w-full h-full object-cover border-4 border-black -rotate-6"
                loading="eager"
                priority
              />
              <div className="absolute -bottom-6 -right-6 bg-white border-4 border-black p-2 rotate-12 [box-shadow:4px_4px_0px_0px_#000]">
                <span className="text-lg font-bold">{t("greeting")}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left md:mt-0">
            <div className="space-y-4">
              <Badge
                variant="neutral"
                className={`text-base justify-center items-center py-0 [box-shadow:4px_4px_0px_0px_#000] border-black border-4 ${space_Grotesk.className}`}
              >
                Rodrigo Huajamaita
              </Badge>
              <h1 className={`text-4xl font-black tracking-tight sm:text-5xl md:text-6xl lg:text-6xl [text-shadow:2px_2px_0px_#FD9745] ${space_Grotesk.className}`}>
                {t("title")}
                <br />
                {t("subtitle")}
              </h1>
              <p className="font-base max-w-[600px]">
                {t("description")}
              </p>
              <address className="flex items-center justify-center lg:justify-start gap-2">
                <Globe className="h-4 w-4 mt-[2px]" />
                <span className="font-base">Entre Ríos, Argentina</span>
              </address>
            </div>
            <div className="flex lg:justify-center lg:items-center space-x-4">
              <Link href="https://github.com/huajar" target="_blank">
                <Button size="icon" variant="neutral" className="border-4">
                  <Image
                    src="/github.svg"
                    width={24}
                    height={24}
                    alt="GitHub"
                  />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/rhuaja/" target="_blank">
                <Button size="icon" variant="neutral" className="border-4">
                  <Image
                    src="/inBug-Black.png"
                    width={24}
                    height={24}
                    alt="LinkedIn"
                  />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:rhuajamaita@gmail.com">
                <Button
                  className="[&_svg]:size-auto border-4"
                  size="icon"
                  variant="neutral"
                >
                  <Mail width={64} height={24} />
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
