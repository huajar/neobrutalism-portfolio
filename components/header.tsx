"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import MaxWidthWrapperNavbar from "./MaxWidthWrapperNavbar";

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
  {
    name: "Contact",
    href: "/contact",
  },
];

export const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <MaxWidthWrapperNavbar className="flex flex-col gap-3 sticky -top-11 z-50">
      <div
        onClick={() => router.push("/contact")}
        className=" w-full h-10 bg-blue-300 overflow-hidden p-0 cursor-pointer text-mtext border-2 border-border shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none inline-flex items-center justify-center whitespace-nowrap rounded-base text-sm font-base ring-offset-white transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        <Image
          src="/Abstract.svg"
          alt="Abstract_logo"
          width={50}
          height={50}
          className="mb-7 max-sm:hidden"
        />
        <p className="max-sm:text-xs font-medium">
          Open to work, let's connect!
        </p>
        <ArrowRight className="max-sm:hidden" />
        <Image
          src="/Abstract.svg"
          alt="Abstract_logo"
          width={30}
          height={30}
          className="mt-7 max-sm:hidden"
        />
      </div>
      <div className="w-full h-16 rounded-lg border-border border-2 flex items-center justify-between pl-1.5 overflow-hidden bg-bw">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/hero-icon.svg"
            alt="logo"
            width={50}
            height={50}
            className="h-12 w-12"
          />
          <p className="max-sm:text-base font-bold">RODRIGO HUAJAMAITA</p>
        </div>
        <div className="flex items-center h-full max-xl:hidden">
          {array.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "border-l-2 h-full flex items-center justify-center px-5 transition-all hover:bg-blue-100 border-border max-sm:text-xs font-medium",
                pathname === item.href ? "bg-blue-300 hover:bg-blue-300" : ""
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="xl:hidden h-full">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="noShadow"
                className="h-full border-l-2 border-r-0 border-t-0 border-b-0 rounded-none"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Retrouvez ici tous les liens de navigation
                </SheetDescription>
              </SheetHeader>
              <div className="grid mt-5 border-2 rounded-lg overflow-hidden">
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
                          ? "bg-blue-300 hover:bg-blue-300"
                          : " bg-white hover:bg-blue-100",
                        index !== array.length - 1 ? "border-b-2" : "border-b-0"
                      )}
                    >
                      {item.name}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <SheetFooter className="mt-5">
                <SheetClose asChild>
                  <Button>Fermer le menu</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </MaxWidthWrapperNavbar>
  );
};
