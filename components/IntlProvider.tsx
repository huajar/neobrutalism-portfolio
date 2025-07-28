"use client"

import { NextIntlClientProvider } from 'next-intl'
import { ReactNode, useState, useEffect } from 'react'

type Props = {
  children: ReactNode
}

export default function IntlProvider({ children }: Props) {
  const [locale, setLocale] = useState('en')
  const [messages, setMessages] = useState<any>(null)

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    }
    
    const savedLocale = getCookie('locale') || 'en'
    setLocale(savedLocale)
    
    import(`../messages/${savedLocale}.json`).then((module) => {
      setMessages(module.default)
    })
  }, [])

  const changeLocale = async (newLocale: string) => {
    setLocale(newLocale)
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`
    const module = await import(`../messages/${newLocale}.json`)
    setMessages(module.default)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).changeLocale = changeLocale
    }
  }, [])

  if (!messages) {
    // Load default English messages to avoid missing message errors
    const defaultMessages = {
      navigation: {
        home: "Home",
        about: "About", 
        projects: "Projects",
        experience: "Experience"
      },
      header: {
        openToWork: "Open to work, let's connect!",
        menu: "Menu"
      },
      hero: {
        greeting: "👋 Hello!",
        title: "Full Stack",
        subtitle: "Developer",
        description: "A Systems Engineering student passionate about building end-to-end web solutions. I love experimenting with new technologies and constantly growing as a developer."
      },
      common: {
        loading: "Loading...",
        error: "An error occurred", 
        retry: "Try again",
        contact: "Contact",
        learnMore: "Learn more",
        viewProject: "View project",
        readMore: "Read more"
      }
    }
    return (
      <NextIntlClientProvider locale={locale} messages={defaultMessages}>
        {children}
      </NextIntlClientProvider>
    )
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
