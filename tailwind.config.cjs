/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#88c0d0",
        light: "#E5E9F0",
        dark: "#4c566a",
        background: "#3b4252",
        red: "#bf616a",
      },
      animation: {
        fade: "fade 150ms ease-in",
      },
    },
  },
  plugins: [],
};
