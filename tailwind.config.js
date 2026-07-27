/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 🔥 THIS LINE ENABLES DARK MODE

  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2b6cee",
        surface: "#15171C",
        "border-muted": "#24262B",
        "background-dark": "#0B0D10",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
