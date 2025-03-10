"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MaxWidthWrapperNavbar from "./MaxWidthWrapperNavbar";
import { ThemeSwitcher } from "./theme/ThemeSwitcher";
import DynamicSVG from "./DynamicSVG";

const array = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Experience",
    href: "/experience",
  },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <MaxWidthWrapperNavbar className="flex flex-col gap-3 sticky -top-12 z-50">
      <div className=" w-full h-10 bg-main FD9745] overflow-hidden p-0 cursor-pointer text-mtext border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none inline-flex items-center justify-center whitespace-nowrap text-sm font-base ring-offset-white transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        <Image
          src="/Abstract.svg"
          alt="Abstract_logo"
          width={50}
          height={50}
          className="mb-7"
        />
        <p className="max-sm:text-xs font-base">
          Open to work, let&apos;s connect!
        </p>
        <ArrowRight />
        <Image
          src="/Abstract.svg"
          alt="Abstract_logo"
          width={30}
          height={30}
          className="mt-7"
        />
      </div>
      <div className="w-full h-16 border-border border-4 flex items-center justify-between pl-1.5 overflow-hidden bg-bw">
        <div className="flex items-center gap-6">
          {/* <Image
            src="/hero-icon.svg"
            alt="icon"
            width={50}
            height={50}
            className="h-12 w-12 dark:hidden"
          />
          <Image
            src="/hero-icon-dark.svg"
            alt="icon"
            width={50}
            height={50}
            className="h-12 w-12 dark:block hidden"
          /> */}
          <DynamicSVG/>
          <div className="flex gap-10 items-center h-full max-xl:hidden">
            {array.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center w-fit justify-center border-border max-sm:text-xs font-medium hover:underline"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-4 justify-end items-center w-full pr-4 lg:pr-0">
          <Button variant="reverse" className="bg-[#FD9745] dark:bg-bw">Resume</Button>
          <div className="hidden xl:flex items-center mr-3">
            <ThemeSwitcher className="bg-bw dark:text-white"/>
          </div>
        </div>
        <div className="xl:hidden h-full">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="noShadow"
                className="h-full border-l-2 border-r-0 border-t-0 border-b-0 rounded-none bg-[#FD9745]"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="grid mt-5 border-2 overflow-hidden border-border">
                {array.map((item, index) => (
                  <SheetClose asChild key={index} className="">
                    <Link
                      href={item.href}
                      className={cn(
                        buttonVariants({
                          variant: "noShadow",
                          size: "default",
                        }),
                        "h-16 border-l-0 border-t-0 border-r-0 rounded-none",
                        pathname === item.href
                          ? "bg-[#FD9745] hover:bg-orange-300"
                          : " bg-white hover:bg-orange-100",
                        index !== array.length - 1 ? "border-b-2" : "border-b-0"
                      )}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <SheetFooter className="mt-5 gap-4 md:flex md:flex-col">
                <ThemeSwitcher className="w-full bg-[#FD9745]" />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </MaxWidthWrapperNavbar>
  );
};
