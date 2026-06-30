"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "@/hooks/useTranslations";

import { Button } from "@/components/ui/button";

function NetworkDiagram() {
  return (
    <svg viewBox="0 0 180 220" aria-hidden="true" className="w-[160px] md:w-[200px] lg:w-[180px] xl:w-[220px] h-auto">
      <line x1="90" y1="110" x2="55" y2="35" stroke="#D4CCC4" strokeWidth="1" />
      <line x1="90" y1="110" x2="25" y2="110" stroke="#D4CCC4" strokeWidth="1" />
      <line x1="90" y1="110" x2="155" y2="70" stroke="#D4CCC4" strokeWidth="1" />
      <line x1="90" y1="110" x2="120" y2="190" stroke="#D4CCC4" strokeWidth="1" />

      <g>
        <circle cx="90" cy="110" r="6" fill="none" stroke="#D4CCC4" strokeWidth="1" />
      </g>
      <g>
        <circle cx="25" cy="110" r="5" fill="none" stroke="#D4CCC4" strokeWidth="1" />
      </g>
      <g>
        <circle cx="155" cy="70" r="6" fill="none" stroke="#D4CCC4" strokeWidth="1" />
      </g>
      <g>
        <circle cx="55" cy="35" r="10" fill="#D65A4B" />
      </g>
      <g>
        <circle cx="120" cy="190" r="7" fill="#2A7D6C" />
      </g>
    </svg>
  );
}

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="py-16 md:py-28" id="about">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 max-w-2xl space-y-5">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.06] tracking-tight text-text">
              {t("headline")}
            </h1>
            <p className="font-body text-base sm:text-lg text-accent max-w-[480px]">
              {t("tagline")}
            </p>
            <p className="font-body text-sm sm:text-base text-textSecondary/80 max-w-[460px]">
              {t("description")}
            </p>
            <p className="font-body text-xs sm:text-sm text-textSecondary pt-1">
              {t("location")} <span className="text-border mx-1">·</span>{" "}
              <span className="font-medium" style={{ color: '#2A7D6C' }}>{t("status")}</span>
              <span className="text-border mx-2">—</span>{" "}
              {t("years_active")}
            </p>
            <div className="flex items-center gap-2 pt-1">
              <Link href="https://github.com/huajar" target="_blank">
                <Button size="icon" variant="ghost">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/rhuaja/" target="_blank">
                <Button size="icon" variant="ghost">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:rhuajamaita@gmail.com">
                <Button size="icon" variant="ghost">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <NetworkDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
