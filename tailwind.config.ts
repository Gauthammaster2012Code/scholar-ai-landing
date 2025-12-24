import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        accent: '#14b8a6',
        background: '#0f172a',
        surface: 'rgba(255, 255, 255, 0.1)',
        'text-primary': '#ffffff',
        'text-secondary': '#cbd5e1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin': 'spin 0.8s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
