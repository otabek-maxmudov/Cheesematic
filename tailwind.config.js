module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      brightness: {
        25: ".25",
        175: "1.75",
      },
      dropShadow: {
        xl: "0 35px 35px rgba(0, 0, 0, 0.55)",
      },
    },
  },
  variants: {
    extend: {
      brightness: ["hover", "focus"],
      filter: ["hover", "focus"],
    },
  },
  plugins: [],
};
