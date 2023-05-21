/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "main-bg": "linear-gradient(252.28deg,#0045ad,#003b95 51.04%,#0349b2)",
        "dark-bg": "linear-gradient(252.28deg,#753da1,#421d5e 51.04%,#371d4c)",
      }),
    },
  },
  plugins: [],
};
