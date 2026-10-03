/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#09090b',
          900: '#0f0f11',
          850: '#141417',
          800: '#1c1c21',
        },
        spice: {
          amber: '#E58A2B',
          saffron: '#F59E0B',
          paprika: '#DC2626',
          turmeric: '#D97706',
          cardamom: '#059669',
        },
        parchment: {
          50: '#FDFCF7',
          100: '#F7F5EE',
          200: '#EBE7D8',
          400: '#A8A29E',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
