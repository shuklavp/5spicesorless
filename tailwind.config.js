/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Deep Midnight Ink (Headline / Dominant Text)
        ink: {
          950: '#060B14',
          900: '#0C1427',
          850: '#111C35',
          800: '#162342',
          700: '#1E293B',
          600: '#334155',
          500: '#475569',
          400: '#64748B',
          300: '#94A3B8',
          200: '#CBD5E1',
          100: '#E2E8F0',
          50: '#F1F5F9',
        },
        // Electric Berry Magenta (Lead Accent / Highlight)
        berry: {
          950: '#4A0520',
          900: '#750B35',
          800: '#A3124C',
          700: '#C2185B',
          600: '#DE2573', // Exact reference title color
          500: '#E93B86',
          400: '#F06292',
          300: '#F48FB1',
          200: '#F8BBD0',
          100: '#FCE4EC',
          50: '#FFF0F5',
        },
        // Cobalt / Steel Blue (Secondary Accent)
        cobalt: {
          950: '#0A1E4A',
          900: '#133575',
          800: '#1A499E',
          700: '#1D5EC9',
          600: '#2563EB',
          500: '#3B82F6',
          400: '#419BE9', // Exact map legend blue
          300: '#93C5FD',
          100: '#DBEAFE',
          50: '#EFF6FF',
        },
        // Crisp Modern Canvas (Zero Beige, Zero Dull Brown)
        canvas: {
          pure: '#FFFFFF',
          subtle: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          dark: '#080D18',
          darkCard: '#0F1829',
          darkBorder: '#1E293B',
        }
      },
      fontFamily: {
        serif: ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
        widestEditorial: '0.18em',
      }
    },
  },
  plugins: [],
}
