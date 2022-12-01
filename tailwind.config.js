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
      },
    },
  },
  plugins: [],
};
