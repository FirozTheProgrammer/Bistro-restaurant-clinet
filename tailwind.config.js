/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // daisyui theme
  daisyui: {
    themes: ["bumblebee"],
  },

  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "signUp-BG":
          "url('./src/assets/reservation/wood-grain-pattern-gray1x.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
