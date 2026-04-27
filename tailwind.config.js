/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4527A0", // Rich royal violet
        deepblue: "#28175C", // Deep darker accent
        lightblue: "#F3E8FF", // Luxurious very light tint
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        schoolbell: ['Schoolbell', 'cursive'],
        cinzel: ['Cinzel', 'serif'],
      }
    },
  },
  plugins: [],
}
