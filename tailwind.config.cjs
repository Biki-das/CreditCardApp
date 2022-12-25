/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./main.js"
  ],
  theme: {
    extend: {
      colors:{
        "LinearGradient":"hsl(249, 99%, 64%) to hsl(278, 94%, 30%)",
        "LightgrayViolet": "hsl(279, 6%, 55%)",
        "veryDarkViolet": "hsl(278, 68%, 11%)"
      },
      animation: {
       'slidedown': "slidedown 1s linear ",
       'shake': 'shake 0.5s linear',
      },
      keyframes: {
        slidedown:{
           "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { opacity: "1", transform: "none" },
        },
        shake:{
          "0%"  : { transform: "translate(1px, 1px)"   ,rotate:"0deg" },
          "10%" : { transform: "translate(-1px, -2px)" ,rotate:"1deg" },
          "20%" : { transform: "translate(-3px, 0px)"  ,rotate:"1deg" },
          "30%" : { transform: "translate(3px, 2px)"   ,rotate:"0deg" },
          "40%" : { transform: "translate(1px, -1px)"  ,rotate:"1deg" },
          "50%" : { transform: "translate(-1px, 2px)"  ,rotate:"-1deg"},
          "60%" : { transform: "translate(-3px, 1px)"  ,rotate:"0deg" },
          "70%" : { transform: "translate(3px, 1px)"   ,rotate:"-1deg"},
          "80%" : {transform:  "translate(-1px, -1px)" ,rotate:"1deg" },
          "90%" : { transform: "translate(1px, 2px)"   ,rotate:"0deg" },
          "100%": { transform: "translate(1px, -2px)" ,rotate:"-1deg" },
        }
      }
    },
  },
  plugins: [ require('@tailwindcss/forms'),],
}