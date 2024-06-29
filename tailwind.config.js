const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        'custom-half': '47%'
      }
    },
    colors: {
      'theme-blue': '#2394C6',
      'theme-amber': '#BA8C00',
      'theme-white': '#FEFEFE',
      gray: colors.gray,
      red: colors.red
    }
  },
  plugins: [],
}

