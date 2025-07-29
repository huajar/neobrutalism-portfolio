"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLocale } from "@/contexts/LocaleContext"

export function LanguageSwitcher({className}: {className?: string}) {
  const { locale, setLocale } = useLocale()

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'es' : 'en'
    setLocale(newLocale)
    
    if (typeof window !== 'undefined' && (window as any).changeLocale) {
      (window as any).changeLocale(newLocale)
    }
  }

  return (
    <Button
      className={`h-10 w-auto px-3 ${className}`}
      variant='reverse'
      onClick={toggleLanguage}
    >
      <Globe className="h-4 w-4 stroke-text mr-1" />
      <span className="text-xs font-bold">
        {locale.toUpperCase()}
      </span>
      <span className="sr-only">Toggle language</span>
    </Button>
  )
}
