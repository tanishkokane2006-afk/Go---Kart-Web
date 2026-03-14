/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-red': '#ff2a2a',
        'neon-orange': '#ff7b00',
        'dark-bg': '#0a0a0a',
        'dark-surface': '#121212',
        'dark-card': '#1e1e1e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
