const defaultTheme = require("tailwindcss/defaultTheme");
// const css = (name) => (opacity) => `rgba(var(--${name}), ${opacity})`;
const css = (name) => `var(--${name})`;

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        primary: "#713e7a",
        dark_cyan: "#2a3d66",
        middle: "#5d54a4",
        bot: "#9d65c9",
      },
    },
  },
  plugins: [],
};
