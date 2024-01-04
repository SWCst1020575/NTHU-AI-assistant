/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./app/**/*.jsx', './src/components/**/*.jsx', './src/img/**/*'],
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', fontFamily.sans],
      },
    },
  },
}
