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
        ptsans:"PT Sans Caption",
        montserrat:"Montserrat",
        seaweed: "Seaweed Script",
      },
    },
  },
  plugins: [],
}
