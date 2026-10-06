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
        forest: {
          950: '#061610',
          900: '#0D2E24',
          850: '#12392D',
          800: '#17493A',
          700: '#1E5E4B',
          600: '#277960',
          500: '#35987A',
          100: '#E2EFEA',
          50: '#F0F7F4',
        },
        terracotta: {
          950: '#541A04',
          900: '#7C2908',
          800: '#A0380E',
          700: '#B84313',
          600: '#C84B15',
          500: '#D95C24',
          400: '#E87B47',
          300: '#F2A077',
          100: '#FCEBE3',
          50: '#FDF5F0',
        },
        paper: {
          50: '#FAF7F2',
          100: '#F4EFE6',
          200: '#EAE2D3',
          300: '#DDD2C0',
          400: '#C2B49E',
          500: '#9E8F76',
        },
        ink: {
          950: '#080E1A',
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
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
