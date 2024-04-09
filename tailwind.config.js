/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      inset:{
        '112':'28rem',
        '88':'22rem',
        '84':'21rem',
        '76':'19rem'

      },
      backgroundImage:{
        'hero-banner':"url('/assets/dashboard-hero-section.svg')",
      },
      fontFamily:{
        'oswald': ['Oswald', 'sans-serif'],
        'ubuntu': ['Ubuntu', 'sans-serif']
      }
    },
    screens: {
      'xs': '320px',
      'sm': '540px', 
      'md': '720px',
      'lg': '920px',
      'xl': '1040px',
      '2xl':'1460px'
    },
  },
  plugins: [],
}

