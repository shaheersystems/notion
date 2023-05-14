/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        assistant: ["Assistant", "sans-serif"],
        title: ["Varela Round", "sans-serif"],
      },
    },
  },
  plugins: [],
};
