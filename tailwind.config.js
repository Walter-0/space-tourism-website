const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-mobile": "url('../assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('../assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('../assets/home/background-home-desktop.jpg')",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
      },
      colors: {
        "dark-blue": "#0B0D17",
        "light-blue": "#D0D6F9",
        white: "#FFFFFF",
      },
      fontFamily: {
        bellefair: ["var(--font-bellefair)", ...fontFamily.serif],
        barlow: ["var(--font-barlow)", ...fontFamily.sans],
        barlowCondensed: ["var(--font-barlow-condensed)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
