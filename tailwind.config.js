/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        brand1:"#2F4C7E",
        brand2:"#8A3B64",
        brand3:"#FF3D00"
      },
      fontFamily:{
        heading:["Poppins","sans-serif"],
        body:["Inter","sans-serif"]
      }
    },
  },
  plugins: [],
}