const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue': ['Bebas Neue', 'cursive']
      },
      backgroundImage: {
        'my_bg_image' : "url('../public/team.png')",
      },

    },
    variants: {
      extend: {
          fontSize: ["hover", "focus"],
          backgroundOpacity: ["active"],
          borderWidth: ["hover", "focus"],
          textColor: [
              "responsive",
              "dark",
              "group-hover",
              "focus-within",
              "hover",
              "focus",
          ],
      },
  },
  },
  plugins: [],
}
