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
        "home-mobile": "url('/home/background-home-mobile.jpg')",
        "home-tablet": "url('/home/background-home-tablet.jpg')",
        "home-desktop": "url('/home/background-home-desktop.jpg')",
        "destination-mobile":
          "url('/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('/destination/background-destination-desktop.jpg')",
        "crew-mobile": "url('/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('/crew/background-crew-desktop.jpg')",
        "technology-mobile":
          "url('/technology/background-technology-mobile.jpg')",
        "technology-tablet":
          "url('/technology/background-technology-tablet.jpg')",
        "technology-desktop":
          "url('/technology/background-technology-desktop.jpg')",
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
  safelist: [
    "bg-home-mobile",
    "md:bg-home-tablet",
    "lg:bg-home-desktop",
    "bg-destination-mobile",
    "md:bg-destination-tablet",
    "lg:bg-destination-desktop",
    "bg-crew-mobile",
    "md:bg-crew-tablet",
    "lg:bg-crew-desktop",
    "bg-technology-mobile",
    "md:bg-technology-tablet",
    "lg:bg-technology-desktop",
  ],
  plugins: [],
};
