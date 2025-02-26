import Link from "next/link";
import { ThemeSwitcher } from "../theme/ThemeSwitcher";

export async function Navigation() {
  return (
    <header className="fixed top-0 z-50 w-full border-b">
      <div className="container flex h-14 items-center bg-bw">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <span className="hidden font-bold sm:inline-block">John Doe</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              className="transition-colors hover:text-foreground/80"
              href="#about"
            >
              About
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80"
              href="#projects"
            >
              Projects
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80"
              href="#experience"
            >
              Experience
            </Link>
            <Link
              className="transition-colors hover:text-foreground/80"
              href="#contact"
            >
              Contact
            </Link>
          </nav>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
