/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightTeal: "#fefae0",
        midBrown: "#d4a373",
        darkBrown: "#bc6c25",
      },
      backgroundImage: {
        cardCoverImg: "url('./assets/cardBackground.jpg')",
      },
    },
  },
  plugins: [],
};
