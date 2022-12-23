/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "LinearGradient":"hsl(249, 99%, 64%) to hsl(278, 94%, 30%)",
        "LightgrayViolet": "hsl(279, 6%, 55%)",
        "veryDarkViolet": "hsl(278, 68%, 11%)"
      },
      animation: {
       slidedown: "slidedown 1s linear"
      },
      keyframes: {
        slidedown:{
           "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { opacity: "1", transform: "none" },
        }
      }
    },
  },
  plugins: [ require('@tailwindcss/forms'),],
}