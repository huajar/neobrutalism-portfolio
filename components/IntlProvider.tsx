"use client"

import { NextIntlClientProvider } from 'next-intl'
import { ReactNode, useState, useEffect } from 'react'

type Props = {
  children: ReactNode
}

export default function IntlProvider({ children }: Props) {
  const [locale, setLocale] = useState('en')
  const [messages, setMessages] = useState({})

  useEffect(() => {
    // Get locale from cookie or localStorage
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
    }
    
    const savedLocale = getCookie('locale') || 'en'
    setLocale(savedLocale)
    
    // Load messages dynamically
    loadMessages(savedLocale)
  }, [])

  const loadMessages = async (newLocale: string) => {
    try {
      const module = await import(`../messages/${newLocale}.json`)
      setMessages(module.default)
    } catch (error) {
      console.error(`Failed to load messages for locale: ${newLocale}`, error)
      // Fallback to English if locale fails to load
      const fallbackModule = await import(`../messages/en.json`)
      setMessages(fallbackModule.default)
    }
  }

  const changeLocale = async (newLocale: string) => {
    setLocale(newLocale)
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`
    await loadMessages(newLocale)
  }

  // Make changeLocale available globally
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).changeLocale = changeLocale
    }
  }, [])

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
