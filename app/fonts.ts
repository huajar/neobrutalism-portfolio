import { DM_Sans, Space_Grotesk, JetBrains_Mono } from 'next/font/google'

export const displayFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const bodyFont = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})
