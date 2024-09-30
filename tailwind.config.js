/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ivy: ['ivy'],
        din: ['din-light'],
        'din-medium': ['din-medium'],
        'din-regular': ['din-regular'],
        'din-bold': ['din-bold']
      },
      colors: {
        primary: '#605E5E',
      }
    },
    container: {
      center: true,
      screens: {
        xl: '980px'
      }
    },
  },
  plugins: [],
}

