/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161A27",
        white: { main: "#E6E6E6", primary: "#DBE0F0" },
        turquoise: { main: "#2ECBD1" },
        pink: { main: "#F880C4" },
        yellow: { main: "#F8DC68" },
        blue: {
          light: "#9FA9C6",
          tint: "#8790AB",
          gray: "#525C7A",
          dark: "#1F2433",
        },
      },
      fontFamily: {
        display: "Mulish",
      },
      spacing: {
        21: "5.25rem",
        22: "5.5rem",
        30: "7.5rem",
        34: "8.5rem",
        66: "16.5rem",
        68: "17rem",
        86: "21.5rem",
        98: "24.5rem",
        112: "28rem",
        119: "29.75rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
      },
    },
  },
  plugins: [],
};
