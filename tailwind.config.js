/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#01E5F0',
        'secondary' : '#01B7F0',
      },
      backgroundImage: {
        'clouds': "url('/public/clouds.png')",
      }
    },
  },
  plugins: [],
}
