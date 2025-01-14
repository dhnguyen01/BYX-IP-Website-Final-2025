/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Tell Tailwind where to look for classes:
    "./index.html",
    "./scripts.js",
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};