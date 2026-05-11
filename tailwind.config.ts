import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
      },
      colors: {
        cream: '#f5f1eb',
        beige: '#e8dfd4',
        taupe: '#c9bfb3',
        graphite: '#2a2823',
        charcoal: '#1a1816',
      },
    },
  },
  plugins: [],
}

export default config
