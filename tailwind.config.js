/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1450A3",
        secondary: "#337CCF",
        tertiary: "#FFC436",
      },
      backgroundImage: {
        "hero-pattern": "url('/public/assets/background.png')",
      },
    },
  },
  plugins: [],
};
