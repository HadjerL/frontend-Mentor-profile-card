/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'Dark-gray': 'hsl(0, 0%, 59%)',
        'Dark-cyan': 'hsl(185, 75%, 39%)',
        'Very-dark-desaturated-blue': 'hsl(229, 23%, 23%)',
        'Dark-grayish-blue': 'hsl(227, 10%, 46%)'
      },
      fontFamily:{
        'kumbh-sans':'Kumbh Sans'
      }
    },
  },
  plugins: [],
}
