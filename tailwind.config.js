/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          lg: "1360px",
        },
        padding: "20px"
      },
      fontFamily: {
        "jost": ['Jost', 'sans-serif']
      }
    },
  },
  plugins: [],
}