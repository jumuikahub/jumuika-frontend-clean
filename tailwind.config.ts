import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: { primary: { DEFAULT: '#047857' } },
      backgroundImage: {
        'emerald-hero':
          'radial-gradient(1200px 600px at 50% 0%, rgba(16,185,129,0.10), transparent 60%), radial-gradient(800px 400px at 15% 20%, rgba(5,150,105,0.12), transparent 60%), radial-gradient(800px 400px at 85% 25%, rgba(6,95,70,0.10), transparent 60%)'
      }
    },
  },
  plugins: [],
}
export default config
