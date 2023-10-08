/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  // content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
        prata: "Prata",
      },
      content: {
        arrowRight: 'url("/Assets/right.svg")',
      },
      backgroundColor: {
        custom: "#2e3038",
      },
    },
  },
  plugins: [],
};
