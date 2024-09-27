import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        secondary: 'var(--background)',
        accent: 'var(--accent)',
        primary: 'var(--primary)',
        textLight: 'var(--text-light)'
      },
      screens: {
        xs: '320px'
      }
    }
  },
  plugins: []
}
export default config
