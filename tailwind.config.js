/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ["poppins","sans-serif"],
        'ptsans':["PT Sans Caption", "sans-serif"],
        'montserrat':["Montserrat", "sans-serif"],
        'seaweed': ["Seaweed Script", "sans-serif"],
        'sansation':['Sansation', 'sans-serif'],
        'quattrocento':['Quattrocento Sans', 'sans-serif'],
        'robotoCondensed':['Roboto Condensed','sans-serif'],
      },
    },
  },
  plugins: [],
}
