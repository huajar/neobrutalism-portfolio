"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-bw border-t-4 border-border md:px-20 py-9 mt-8 flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-4">
      <div className="flex flex-col-reverse md:flex-col">
        <p className="font-base">Built with &#9829;</p>
        <div className="flex items-center gap-1">
          <p className="font-base">
             The source code is available on
          </p>
          <Link
            href="https://github.com/Rwaja/neobrutalism-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="font-base underline">Github.</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start gap-4">
        <p className="font-base">Get in touch with me!</p>
        <div className="flex lg:justify-center lg:items-center space-x-4">
          <Link href="https://github.com/huajar" target="_blank">
            <Button size="icon" variant="noShadow" className="bg-white">
              <Image src="/github.svg" width={24} height={24} alt="GitHub" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
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
        </div>
      </div>
    </footer>
  );
}
