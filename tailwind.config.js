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
        white: css("white"),
        gray: css("gray"),

        black: {
          DEFAULT: css("black"),
          dark: css("dark-black"),
        },

        primary: {
          DEFAULT: css("primary"),
          light: css("primary-light"),
          dark: css("primary-dark"),
        },

        error: css("error"),
      },
    },
  },
  plugins: [],
};
