/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  darkMode: 'selector',
  safelist: ['bg-gray-700', 'translate-x-full', 'bg-yellow-500', '-translate-x-2'],
  theme: {
    extend: {
      colors: {
        tomato: 'tomato'
      },
      fontFamily: {
        main: ['Roboto', 'sans-serif']
      },
      fontWeight: {
        medium: 500
      }
    }
  },
  plugins: []
}
