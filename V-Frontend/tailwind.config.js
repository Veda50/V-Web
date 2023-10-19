/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      main: '#FFA500',
      black: colors.black,
      white: colors.white,
      red: colors.red,
      primaryBg: '#333333',
      secondaryBg: '#282828',
      smoke: '#a1a8a6',
    }
  },
  plugins: [],
}