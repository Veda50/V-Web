/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: '#ffffff',
        background: '#130d01',
        primary: '#ffa600',
        secondary: '#3f2a03',
        accent: '#f3a81b',
      }
    }
  },
  plugins: [],
}