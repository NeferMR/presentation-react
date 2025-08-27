/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 2s infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      colors: {
        primary: {
          50: '#f0f7ff',
          500: '#274059',
          600: '#416e9b',
          700: '#1e2f42',
        }
      }
    },
  },
  plugins: [],
}

