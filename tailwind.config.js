/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
      manrope: ['Manrope', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}