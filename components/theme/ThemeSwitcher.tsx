"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import * as React from "react"

import { Button } from "@/components/ui/button"

export function ThemeSwitcher({className}: {className?: string}) {
  const { setTheme, theme } = useTheme()

  return (
    <>
      <Button
        className={`h-11 w-11 ${className}`}
        variant='neutral'
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun className="h-6 w-6 m500:h-4 m500:w-4 hidden dark:inline stroke-darkText" />
        <Moon className="h-6 w-6 m500:h-4 m500:w-4 inline dark:hidden stroke-text" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  )
}