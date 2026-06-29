import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
theme: {
  extend: {
    colors: {
      bg: '#F5F0EB',
      surface: '#FFFFFF',
      text: '#1A1A1A',
      textSecondary: '#6B6B6B',
      accent: '#D65A4B',
      accentLight: '#F5DFD8',
      secondary: '#2A7D6C',
      border: '#D4CCC4',
    },
    fontFamily: {
      display: ['var(--font-display)'],
      body: ['var(--font-body)'],
      mono: ['var(--font-mono)'],
    },
    borderRadius: {
      base: '0px'
    },
  },
},
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
