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
import { LanguageSwitcher } from "./LanguageSwitcher";
import { space_Grotesk } from "@/app/fonts";
import { useTranslations } from 'next-intl';
import Star10 from "./ui/star";

export const Header = () => {
  const pathname = usePathname();
  const t = useTranslations();

  const array = [
    {
      name: t("navigation.home"),
      href: "/",
    },
    {
      name: t("navigation.about"),
      href: "/about",
    },
    {
      name: t("navigation.projects"),
      href: "/projects",
    },
    {
      name: t("navigation.experience"),
      href: "/experience",
    },
  ];

  return (
    <MaxWidthWrapperNavbar className="flex flex-col gap-3 sticky -top-12 z-50 mt-2">
      <div className=" w-full h-10 bg-main FD9745] overflow-hidden p-0 cursor-pointer text-mtext border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none inline-flex items-center justify-center whitespace-nowrap text-sm font-base ring-offset-white transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        {/* <Image
          src="/Abstract.svg"
          alt="Abstract_logo"
          width={50}
          height={50}
          className="mb-7"
        /> */}
        <Star10 className="mb-7" size={25} color="#FD9745" stroke="#000000" strokeWidth={5}/>
        <p className="max-sm:text-xs font-base">
          {t("header.openToWork")}
        </p>
        <ArrowRight />
        <Star10 className="mt-7" size={25} color="#FD9745" stroke="#000000" strokeWidth={5}/>
      </div>
      <div className="w-full h-16 border-border border-4 flex items-center bg-bw xl:grid xl:grid-cols-3">
          <h1 className={`[text-shadow:3px_3px_0px_#000] [-webkit-text-stroke: 3px black] stroke-b text-[#FD9745] pl-5 ${space_Grotesk.className} text-4xl font-black tracking-tight lg:text-4xl`}>
            rodrigo
          </h1>
          <div className="hidden xl:flex gap-10 items-center justify-center h-full">
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
          <div className="hidden xl:flex gap-2 items-center justify-end">
            <LanguageSwitcher className="bg-bw mr-5 dark:text-white" />
          </div>
        <div className="xl:hidden h-full ml-auto">
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
                <SheetTitle>{t("header.menu")}</SheetTitle>
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
                <LanguageSwitcher className="w-full bg-[#FD9745]" />
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </MaxWidthWrapperNavbar>
  );
};
