/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // daisyui theme
  daisyui: {
    themes: ["bumblebee"],
  },

  plugins: [require("daisyui")],
};
