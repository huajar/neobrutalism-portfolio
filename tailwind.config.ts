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
      main: 'var(--main)',
      overlay: 'var(--overlay)',
      bg: 'var(--bg)',
      bw: 'var(--bw)',
      blank: 'var(--blank)',
      text: 'var(--text)',
      mtext: 'var(--mtext)',
      border: 'var(--border)',
      ring: 'var(--ring)',
      ringOffset: 'var(--ring-offset)',
      
      secondaryBlack: '#212121', 
    },
    borderRadius: {
      base: '0px'
    },
    boxShadow: {
      shadow: 'var(--shadow)'
    },
    translate: {
      boxShadowX: '6px',
      boxShadowY: '6px',
      reverseBoxShadowX: '-6px',
      reverseBoxShadowY: '-6px',
    },
    fontWeight: {
      base: '600',
      heading: '900',
    },
  },
},
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
