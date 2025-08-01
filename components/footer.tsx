"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Mail } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full bg-bw border-t-4 border-border md:px-28 py-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col items-center md:items-start gap-4">
        <p className="font-base">{t("contact")}</p>
        <div className="flex lg:justify-center lg:items-center space-x-4">
          <Link href="https://www.linkedin.com/in/rhuaja/" target="_blank">
            <Button size="icon" variant="noShadow" className="bg-white">
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
              className="[&_svg]:size-auto bg-white"
              size="icon"
              variant="noShadow"
            >
              <Mail width={64} height={24} />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-col-reverse">
        <p className="font-base text-center md:text-start">
          {t("builtWith")}
        </p>
        <div className="flex items-center gap-1">
          <p className="font-base">{t("sourceCode")}</p>
          <Link
            href="https://github.com/huajar/neobrutalism-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="font-base underline">Github</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
