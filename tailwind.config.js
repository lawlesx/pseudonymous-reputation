/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['RubikMicrobe', 'sans-serif'],
        'dosis': ['Dosis', 'sans-serif'],
      },
      colors: {
        "blue-violet": '#541388',
        "dogwood-rose": '#D90368',
        eggshell: "#F1E9DA",
        "space-cadet": "#2E294E",
        "cotton-candy": '#FFB2E6'
      }
    },
  },
  plugins: [],
}