/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        "epic-dark": "#313131",
        "epic-blue": "#007AFF",
        "epic-gray": "#AAAAAA",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        1440: "1440px",
      },
    },
  },
  plugins: [],
};
