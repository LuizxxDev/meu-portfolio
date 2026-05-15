/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          light: '#c084fc',
          DEFAULT: '#9333ea',
          dark: '#6b21a8',
        },
        dark: {
          bg: '#000000',
          surface: '#121214',
          border: '#27272a'
        }
      }
    },
  },
  plugins: [],
}