const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    extend: {
      colors: {
        "true-gray": colors.trueGray,
        "sky-blue": colors.skyBlue,
        lime: colors.lime,
        emerald: colors.emerald,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
