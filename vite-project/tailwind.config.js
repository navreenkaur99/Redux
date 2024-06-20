/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Corrected the pattern to include subdirectories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

