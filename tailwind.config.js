/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./landing-page.html",
    "./**/*.html",
    "./**/*.{js,ts,jsx,tsx}", // optional, helpful if you add JS files later
  ],
  theme: {
    extend: {
      fontFamily: {
        saira: ["Saira Condensed", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
